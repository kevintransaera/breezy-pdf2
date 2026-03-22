interface ToolIconProps {
  name: string;
  className?: string;
}

export default function ToolIcon({ name, className = 'w-5 h-5' }: ToolIconProps) {
  const props = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.2',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  };

  switch (name) {
    case 'merge':
      return (
        <svg {...props}>
          <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
      );
    case 'split':
      return (
        <svg {...props}>
          <line x1="12" y1="2" x2="12" y2="22" />
          <polyline points="8 6 4 2 4 10" />
          <polyline points="16 6 20 2 20 10" />
          <rect x="2" y="14" width="8" height="8" rx="1" />
          <rect x="14" y="14" width="8" height="8" rx="1" />
        </svg>
      );
    case 'compress':
      return (
        <svg {...props}>
          <polyline points="4 14 10 14 10 20" />
          <polyline points="20 10 14 10 14 4" />
          <line x1="14" y1="10" x2="21" y2="3" />
          <line x1="3" y1="21" x2="10" y2="14" />
        </svg>
      );
    case 'image':
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      );
    case 'imageToPdf':
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 15l4-4 3 3 4-4 7 7" />
          <path d="M15 3v6h6" />
        </svg>
      );
    case 'rotate':
      return (
        <svg {...props}>
          <polyline points="1 4 1 10 7 10" />
          <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
        </svg>
      );
    case 'numbers':
      return (
        <svg {...props}>
          <path d="M4 7V4h16v3" />
          <path d="M9 20h6" />
          <path d="M12 4v16" />
        </svg>
      );
    case 'reorder':
      return (
        <svg {...props}>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
          <polyline points="7 3 3 6 7 9" />
          <polyline points="17 15 21 18 17 21" />
        </svg>
      );
    case 'sign':
      return (
        <svg {...props}>
          <path d="M17 3a2.83 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5z" />
        </svg>
      );
    case 'watermark':
      return (
        <svg {...props}>
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );
    case 'delete':
      return (
        <svg {...props}>
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <path d="M14 2v6h6" />
          <line x1="9" y1="13" x2="15" y2="13" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
        </svg>
      );
  }
}
