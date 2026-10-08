import type { Lesson } from '../types';
import { m1w1 } from './m1w1';
import { m1w2 } from './m1w2';
import { m1w3 } from './m1w3';
import { m1w4 } from './m1w4';

export const month1: Lesson[] = [...m1w1, ...m1w2, ...m1w3, ...m1w4];
