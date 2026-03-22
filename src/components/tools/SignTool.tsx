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

type SignatureMode = 'draw' | 'upload';
type SignStep = 'signature' | 'place';

export default function SignTool() {
  const { files, addFiles, clearFiles } = useFileUpload({ multiple: false });
  const file = files[0] || null;
  const { document: pdfDoc, pageCount, loading, error: loadError } = usePdfDocument(file);
  const processing = useProcessing();
  const [result, setResult] = useState<Uint8Array | null>(null);
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [signatureDataUrl, setSignatureDataUrl] = useState<string | null>(null);
  const [mode, setMode] = useState<SignatureMode>('draw');
  const [step, setStep] = useState<SignStep>('signature');

  // Signature position (fractions of page, 0-1)
  const [sigPos, setSigPos] = useState({ x: 0.5, y: 0.8 });
  const [sigWidth, setSigWidth] = useState(0.25);

  // Canvas drawing
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawingRef = useRef(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  // Page preview for placement
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const previewContainerRef = useRef<HTMLDivElement>(null);
  const [previewSize, setPreviewSize] = useState({ width: 0, height: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // --- Drawing canvas ---
  const getCanvasCoords = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    if ('touches' in e) {
      const touch = e.touches[0];
      return { x: (touch.clientX - rect.left) * scaleX, y: (touch.clientY - rect.top) * scaleY };
    }
    return { x: (e.clientX - rect.left) * scaleX, y: (e.clientY - rect.top) * scaleY };
  }, []);

  const handleDrawDown = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    isDrawingRef.current = true;
    const { x, y } = getCanvasCoords(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
  }, [getCanvasCoords]);

  const handleDrawMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (!isDrawingRef.current) return;
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    const { x, y } = getCanvasCoords(e);
    ctx.lineTo(x, y);
    ctx.stroke();
    setHasDrawn(true);
  }, [getCanvasCoords]);

  const handleDrawUp = useCallback(() => { isDrawingRef.current = false; }, []);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, [file, pdfDoc]);

  const handleClearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
    setSignatureDataUrl(null);
  }, []);

  // --- Upload PNG ---
  const handleUploadSignature = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (!uploadedFile) return;
    const reader = new FileReader();
    reader.onload = () => {
      setSignatureDataUrl(reader.result as string);
    };
    reader.readAsDataURL(uploadedFile);
  }, []);

  // --- Confirm signature and move to placement ---
  const handleConfirmSignature = useCallback(() => {
    if (mode === 'draw' && canvasRef.current && hasDrawn) {
      setSignatureDataUrl(canvasRef.current.toDataURL('image/png'));
    }
    if (mode === 'draw' && !hasDrawn) return;
    if (mode === 'upload' && !signatureDataUrl) return;
    setStep('place');
  }, [mode, hasDrawn, signatureDataUrl]);

  // --- Render page preview for placement ---
  useEffect(() => {
    if (step !== 'place' || !pdfDoc) return;
    let cancelled = false;

    async function renderPreview() {
      const canvas = previewCanvasRef.current;
      const container = previewContainerRef.current;
      if (!canvas || !container) return;

      const page = await pdfDoc!.getPage(selectedPage);
      if (cancelled) return;

      const viewport = page.getViewport({ scale: 1 });
      const containerWidth = container.clientWidth;
      const scale = containerWidth / viewport.width;
      const scaledViewport = page.getViewport({ scale });

      canvas.width = scaledViewport.width;
      canvas.height = scaledViewport.height;
      setPreviewSize({ width: scaledViewport.width, height: scaledViewport.height });

      const ctx = canvas.getContext('2d');
      if (!ctx || cancelled) return;

      await page.render({ canvasContext: ctx, viewport: scaledViewport }).promise;
    }

    renderPreview();
    return () => { cancelled = true; };
  }, [step, pdfDoc, selectedPage]);

  // --- Drag signature on preview ---
  const getPreviewCoords = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const container = previewContainerRef.current;
    if (!container) return { x: 0.5, y: 0.5 };
    const rect = container.getBoundingClientRect();
    let clientX: number, clientY: number;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
    return { x, y };
  }, []);

  const handlePlaceDown = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    const coords = getPreviewCoords(e);
    setSigPos(coords);
  }, [getPreviewCoords]);

  const handlePlaceMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (!isDragging) return;
    const coords = getPreviewCoords(e);
    setSigPos(coords);
  }, [isDragging, getPreviewCoords]);

  const handlePlaceUp = useCallback(() => { setIsDragging(false); }, []);

  // --- Sign the PDF ---
  const handleSign = async () => {
    if (!file || !signatureDataUrl) return;
    setResult(null);
    processing.startProcessing('Signing PDF...');

    try {
      const data = await signPdf(
        file, signatureDataUrl, selectedPage - 1,
        sigPos.x, sigPos.y, sigWidth,
        (p) => processing.setProgress(p)
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
    setSignatureDataUrl(null);
    setHasDrawn(false);
    setStep('signature');
    setSigPos({ x: 0.5, y: 0.8 });
    setSigWidth(0.25);
    processing.reset();
  };

  const selectedPages = new Set([selectedPage]);
  const canProceed = mode === 'draw' ? hasDrawn : !!signatureDataUrl;

  return (
    <div className="space-y-6">
      {!file && (
        <FileDropzone onFiles={addFiles} accept=".pdf" multiple={false} />
      )}

      {loading && <p className="text-center text-sm text-stone-400">Loading PDF...</p>}
      {loadError && <p className="text-center text-sm text-stone-900">{loadError}</p>}

      {pdfDoc && pageCount > 0 && processing.status === 'idle' && step === 'signature' && (
        <>
          {/* Mode toggle */}
          <div className="flex justify-center">
            <div className="flex">
              <button
                onClick={() => { setMode('draw'); setSignatureDataUrl(null); }}
                className={`px-5 py-2.5 text-sm border transition-colors rounded-l-full ${
                  mode === 'draw' ? 'bg-stone-900 text-stone-50 border-stone-900' : 'bg-transparent text-stone-600 border-stone-300 hover:border-stone-900'
                }`}
              >
                Draw
              </button>
              <button
                onClick={() => { setMode('upload'); handleClearCanvas(); }}
                className={`px-5 py-2.5 text-sm border border-l-0 transition-colors rounded-r-full ${
                  mode === 'upload' ? 'bg-stone-900 text-stone-50 border-stone-900' : 'bg-transparent text-stone-600 border-stone-300 hover:border-stone-900'
                }`}
              >
                Upload Image
              </button>
            </div>
          </div>

          {mode === 'draw' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-widest uppercase text-stone-500">Draw your signature</span>
                <button onClick={handleClearCanvas} className="text-xs text-stone-500 hover:text-stone-900 transition-colors underline underline-offset-2">
                  Clear
                </button>
              </div>
              <div className="border border-stone-300 bg-white">
                <canvas
                  ref={canvasRef}
                  width={600}
                  height={200}
                  className="w-full touch-none cursor-crosshair"
                  style={{ aspectRatio: '3 / 1' }}
                  onMouseDown={handleDrawDown}
                  onMouseMove={handleDrawMove}
                  onMouseUp={handleDrawUp}
                  onMouseLeave={handleDrawUp}
                  onTouchStart={handleDrawDown}
                  onTouchMove={handleDrawMove}
                  onTouchEnd={handleDrawUp}
                  onTouchCancel={handleDrawUp}
                />
              </div>
              {!hasDrawn && (
                <p className="text-xs text-stone-400 text-center">Use your mouse or finger to draw a signature above</p>
              )}
            </div>
          )}

          {mode === 'upload' && (
            <div className="space-y-3">
              <span className="text-xs tracking-widest uppercase text-stone-500">Upload signature image</span>
              <label className="flex flex-col items-center justify-center border border-dashed border-stone-300 bg-white p-8 cursor-pointer hover:border-stone-900 transition-colors">
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={handleUploadSignature}
                  className="hidden"
                />
                {signatureDataUrl ? (
                  <img src={signatureDataUrl} alt="Uploaded signature" className="max-h-20 object-contain" />
                ) : (
                  <>
                    <svg className="w-8 h-8 text-stone-300 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    <span className="text-xs text-stone-400">Click to upload PNG, JPG, or WebP</span>
                  </>
                )}
              </label>
            </div>
          )}

          <div className="flex justify-center pt-2">
            <button
              onClick={handleConfirmSignature}
              disabled={!canProceed}
              className={`btn-primary ${!canProceed ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Next: Place Signature
            </button>
          </div>
        </>
      )}

      {pdfDoc && pageCount > 0 && processing.status === 'idle' && step === 'place' && signatureDataUrl && (
        <>
          {/* Page selection (if multi-page) */}
          {pageCount > 1 && (
            <div className="space-y-3">
              <span className="text-xs tracking-widest uppercase text-stone-500">Select page to sign</span>
              <PdfPageGrid
                document={pdfDoc}
                pageCount={pageCount}
                selectedPages={selectedPages}
                onTogglePage={(p) => setSelectedPage(p)}
              />
            </div>
          )}

          {/* Placement preview */}
          <div className="space-y-3">
            <span className="text-xs tracking-widest uppercase text-stone-500">
              Click or drag to position your signature on page {selectedPage}
            </span>
            <div
              ref={previewContainerRef}
              className="relative border border-stone-300 bg-white mx-auto select-none touch-none"
              style={{ maxWidth: 600 }}
              onMouseDown={handlePlaceDown}
              onMouseMove={handlePlaceMove}
              onMouseUp={handlePlaceUp}
              onMouseLeave={handlePlaceUp}
              onTouchStart={handlePlaceDown}
              onTouchMove={handlePlaceMove}
              onTouchEnd={handlePlaceUp}
              onTouchCancel={handlePlaceUp}
            >
              <canvas ref={previewCanvasRef} className="w-full" />
              {/* Signature overlay */}
              {previewSize.width > 0 && (
                <div
                  className="absolute pointer-events-none border-2 border-dashed border-stone-400 bg-white/60"
                  style={{
                    width: `${sigWidth * 100}%`,
                    left: `${sigPos.x * 100 - (sigWidth * 100) / 2}%`,
                    top: `${sigPos.y * 100 - ((sigWidth * previewSize.width / previewSize.height) * 100 * 0.333) / 2}%`,
                  }}
                >
                  <img
                    src={signatureDataUrl}
                    alt="Signature preview"
                    className="w-full opacity-80"
                    draggable={false}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Size slider */}
          <div className="flex items-center justify-center gap-4">
            <span className="text-xs text-stone-500">Size</span>
            <input
              type="range"
              min="0.1"
              max="0.5"
              step="0.01"
              value={sigWidth}
              onChange={(e) => setSigWidth(parseFloat(e.target.value))}
              className="w-40"
            />
          </div>

          <div className="flex justify-center gap-3 pt-2">
            <button onClick={() => setStep('signature')} className="btn-secondary">
              Back
            </button>
            <button onClick={handleSign} className="btn-primary">
              Sign PDF
            </button>
          </div>
        </>
      )}

      <ProgressBar status={processing.status} progress={processing.progress} message={processing.message} />

      {processing.status === 'done' && result && (
        <div className="flex flex-col items-center gap-4 pt-2">
          <DownloadButton onClick={() => downloadUint8Array(result, 'signed.pdf')} label="Download Signed PDF" />
          <button onClick={handleReset} className="btn-ghost">Sign another file</button>
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
