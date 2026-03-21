export interface ToolInfo {
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
}

export type ProcessingStatus = 'idle' | 'processing' | 'done' | 'error';

export interface ProcessingState {
  status: ProcessingStatus;
  progress: number; // 0-100
  message: string;
  error?: string;
}

export interface PageRange {
  start: number; // 1-indexed
  end: number;   // 1-indexed, inclusive
}
