import type { Exercise } from '../../content/types';

export interface ExProps<T extends Exercise['type']> {
  ex: Extract<Exercise, { type: T }>;
  locked: boolean;
  onResult: (correct: boolean) => void;
}
