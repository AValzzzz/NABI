import type { Lesson, MonthInfo } from './types';
import { month1 } from './months/month1';
import { month2 } from './months/month2';
import { month3 } from './months/month3';
import { month4 } from './months/month4';
import { month5 } from './months/month5';
import { month6 } from './months/month6';

export const LESSONS: Lesson[] = [...month1, ...month2, ...month3, ...month4, ...month5, ...month6];

export const MONTHS: MonthInfo[] = [
  { month: 1, title: 'Hangul & premières phrases', goal: 'Lire le hangul, ordre SOV, 은/는 · 이/가, verbes essentiels' },
  { month: 2, title: 'Le temps et les lieux', goal: 'L’heure, passé, futur, 에 / 에서, cause -아서/어서, proposer, pouvoir, règles de la classe, demandes polies' },
  { month: 3, title: 'Raconter et rapporter', goal: 'Opposer (-지만), verbes irréguliers, honorifiques, style indirect (-대요 · -재요 · -래요), -(으)면서, -고 있어요' },
  { month: 4, title: 'Hypothèses, expériences et goûts', goal: 'Condition -(으)면, souhaits, expérience -아/어 보다, intention -(으)려고 해요, nominalisation -는 것, comparaison et superlatif, fréquence' },
  { month: 5, title: 'Décrire et enrichir', goal: 'Adjectifs devant le nom -(으)ㄴ, 있는/없는, propositions relatives aux trois temps (-(으)ㄴ · -는 · -(으)ㄹ), opinion nuancée -는 것 같아요, style indirect écrit (-다고 · -냐고), passif simple, faire faire -게 하다, découverte -네요' },
  { month: 6, title: 'Vers le B1+', goal: 'Exprimer le but (-(으)러 가다 · -(으)려고), l’obligation (-아/어야 돼요 · -지 않아도 돼요), la poésie enfantine (처럼, onomatopées), grand bilan final : la même épreuve que les élèves coréens' },
  { month: 7, title: 'Au-delà du B1', goal: 'Expressions idiomatiques' },
  { month: 8, title: 'Les registres', goal: 'Niveaux de langue nuancés' },
  { month: 9, title: 'Médias', goal: 'Comprendre des contenus authentiques' },
  { month: 10, title: 'Argumenter', goal: 'Débattre et nuancer' },
  { month: 11, title: 'Culture & société', goal: 'Lectures et discussions approfondies' },
  { month: 12, title: 'Vers le C1', goal: 'Aisance et précision' },
];

export function lessonById(id: string): Lesson | undefined {
  return LESSONS.find((l) => l.id === id);
}
