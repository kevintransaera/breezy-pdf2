import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Breezy PDF — Free Online PDF Tools';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#faf9f7',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
            <path d="M8 2h10l8 8v18a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" fill="#1c1917"/>
            <path d="M18 2v6a2 2 0 0 0 2 2h6z" fill="#a8a29e"/>
          </svg>
          <span style={{ fontSize: '32px', color: '#1c1917', fontWeight: 400 }}>Breezy PDF</span>
        </div>
        <h1 style={{ fontSize: '56px', color: '#1c1917', lineHeight: 1.1, margin: 0, fontWeight: 400, letterSpacing: '-0.02em' }}>
          Every PDF tool you need,
        </h1>
        <h1 style={{ fontSize: '56px', color: '#1c1917', lineHeight: 1.1, margin: 0, fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.02em' }}>
          entirely private
        </h1>
        <p style={{ fontSize: '22px', color: '#78716c', marginTop: '24px', lineHeight: 1.5 }}>
          Free browser-based tools for merging, splitting, compressing, and converting PDFs. Your files never leave your device.
        </p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '40px' }}>
          {['Merge', 'Split', 'Compress', 'Convert', 'Rotate', 'Reorder'].map((name) => (
            <div key={name} style={{ padding: '8px 20px', border: '1px solid #d6d3d1', borderRadius: '999px', fontSize: '16px', color: '#57534e' }}>
              {name}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
