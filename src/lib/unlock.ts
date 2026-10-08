import type { Lesson } from '../content/types';

export type LessonState = 'done' | 'available' | 'tomorrow' | 'locked';

export interface LessonProgress {
  id: string;
  completedOn: string; 
  score: number;
}

export function lessonStates(lessons: Lesson[], done: Record<string, LessonProgress>, day: string, free = false): LessonState[] {
  let frontierSeen = false;
  return lessons.map((lesson, i) => {
    if (done[lesson.id]) return 'done';
    if (frontierSeen) return 'locked';
    frontierSeen = true;
    if (i === 0) return 'available';
    const prev = done[lessons[i - 1].id];
    return prev && (free || prev.completedOn < day) ? 'available' : 'tomorrow';
  });
}

export function todaysLesson(lessons: Lesson[], done: Record<string, LessonProgress>, day: string, free = false) {
  const states = lessonStates(lessons, done, day, free);
  const index = states.findIndex((s) => s === 'available' || s === 'tomorrow');
  return { index, lesson: index >= 0 ? lessons[index] : undefined, state: index >= 0 ? states[index] : undefined };
}
