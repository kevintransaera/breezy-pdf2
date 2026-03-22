'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';
import FileDropzone from '@/components/shared/FileDropzone';
import ProgressBar from '@/components/shared/ProgressBar';
import DownloadButton from '@/components/shared/DownloadButton';
import { useFileUpload } from '@/lib/hooks/useFileUpload';
import { useProcessing } from '@/lib/hooks/useProcessing';
import { usePdfDocument } from '@/lib/hooks/usePdfDocument';
import { signPdf } from '@/lib/pdf/sign';
import { downloadUint8Array } from '@/lib/utils/file-helpers';

const PdfPageGrid = dynamic(() => import('@/components/shared/PdfPageGrid'), { ssr: false });

export default function SignTool() {
  const { files, addFiles, clearFiles } = useFileUpload({ multiple: false });
  const file = files[0] || null;
  const { document: pdfDoc, pageCount, loading, error: loadError } = usePdfDocument(file);
  const processing = useProcessing();
  const [result, setResult] = useState<Uint8Array | null>(null);
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [hasSignature, setHasSignature] = useState(false);

  // Canvas drawing state
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawingRef = useRef(false);

  const getCanvasCoords = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    if ('touches' in e) {
      const touch = e.touches[0];
      return {
        x: (touch.clientX - rect.left) * scaleX,
        y: (touch.clientY - rect.top) * scaleY,
      };
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  }, []);

  const handlePointerDown = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    isDrawingRef.current = true;
    const { x, y } = getCanvasCoords(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
  }, [getCanvasCoords]);

  const handlePointerMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (!isDrawingRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCanvasCoords(e);
    ctx.lineTo(x, y);
    ctx.stroke();
    setHasSignature(true);
  }, [getCanvasCoords]);

  const handlePointerUp = useCallback(() => {
    isDrawingRef.current = false;
  }, []);

  // Set up canvas context
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, [file, pdfDoc]);

  const handleClearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
  }, []);

  const handleTogglePage = useCallback((pageNum: number) => {
    setSelectedPage(pageNum);
  }, []);

  const selectedPages = new Set([selectedPage]);

  const handleSign = async () => {
    if (!file || !canvasRef.current || !hasSignature) return;
    setResult(null);
    processing.startProcessing('Signing PDF...');

    try {
      const signatureDataUrl = canvasRef.current.toDataURL('image/png');
      const data = await signPdf(
        file,
        signatureDataUrl,
        selectedPage - 1,
        0.5,
        0.85,
        0.2,
        (p) => {
          processing.setProgress(p);
        }
      );
      setResult(data);
      processing.completeProcessing('Signature applied');
    } catch (err) {
      processing.setError(err instanceof Error ? err.message : 'An error occurred.');
    }
  };

  const handleReset = () => {
    clearFiles();
    setResult(null);
    setSelectedPage(1);
    setHasSignature(false);
    processing.reset();
  };

  return (
    <div className="space-y-6">
      {!file && (
        <FileDropzone onFiles={addFiles} accept=".pdf" multiple={false} />
      )}

      {loading && <p className="text-center text-sm text-stone-400">Loading PDF...</p>}
      {loadError && <p className="text-center text-sm text-stone-900">{loadError}</p>}

      {pdfDoc && pageCount > 0 && processing.status === 'idle' && (
        <>
          {/* Signature canvas */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs tracking-widest uppercase text-stone-500">Draw your signature</span>
              <button
                onClick={handleClearCanvas}
                className="text-xs text-stone-500 hover:text-stone-900 transition-colors underline underline-offset-2"
              >
                Clear
              </button>
            </div>
            <div className="border border-stone-300 bg-white">
              <canvas
                ref={canvasRef}
                width={600}
                height={200}
                className="w-full touch-none"
                style={{ aspectRatio: '3 / 1' }}
                onMouseDown={handlePointerDown}
                onMouseMove={handlePointerMove}
                onMouseUp={handlePointerUp}
                onMouseLeave={handlePointerUp}
                onTouchStart={handlePointerDown}
                onTouchMove={handlePointerMove}
                onTouchEnd={handlePointerUp}
                onTouchCancel={handlePointerUp}
              />
            </div>
            {!hasSignature && (
              <p className="text-xs text-stone-400 text-center">Use your mouse or finger to draw a signature above</p>
            )}
          </div>

          {/* Page selection */}
          <div className="space-y-3">
            <span className="text-xs tracking-widest uppercase text-stone-500">Select page to sign</span>
            <PdfPageGrid
              document={pdfDoc}
              pageCount={pageCount}
              selectedPages={selectedPages}
              onTogglePage={handleTogglePage}
            />
          </div>

          <div className="flex justify-center pt-2">
            <button
              onClick={handleSign}
              disabled={!hasSignature}
              className={`btn-primary ${!hasSignature ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Sign Page {selectedPage}
            </button>
          </div>
        </>
      )}

      <ProgressBar status={processing.status} progress={processing.progress} message={processing.message} />

      {processing.status === 'done' && result && (
        <div className="flex flex-col items-center gap-4 pt-2">
          <DownloadButton onClick={() => downloadUint8Array(result, 'signed.pdf')} label="Download Signed PDF" />
          <button onClick={handleReset} className="btn-ghost">
            Sign another file
          </button>
        </div>
      )}

      {processing.status === 'error' && (
        <div className="flex justify-center">
          <button onClick={handleReset} className="btn-ghost">Try again</button>
        </div>
      )}
    </div>
  );
}
