import type { GridBlank, Lesson } from '../types';

const COLLAPSE: [RegExp, string][] = [
  [/면 좋겠/g, '면좋겠'],
  [/ 거예요/g, '거예요'],
  [/다 했/g, '다했'],
  [/안 오/g, '안오'],
];
const alts = (...xs: string[]): string[] => {
  const out = new Set(xs);
  for (const [re, to] of COLLAPSE) for (const s of [...out]) out.add(s.replace(re, to));
  for (const s of [...out]) out.add(s.replace(/[.,!?] /g, ' '));
  for (const s of [...out]) out.add(s.replace(/[.!?]$/, ''));
  return [...out];
};
const blank = (s: string): GridBlank => ({ answer: alts(s) });

const IF_ANY = '면';
const WISH_ANY = '면 좋겠|면좋겠';

const PUZZLE: [string, string, string][] = [
  ['비가 오면', '우산을 써요', '☔'],
  ['날씨가 추우면', '옷을 입어요', '🥶'],
  ['배가 고프면', '밥을 먹어요', '🍚'],
  ['피곤하면', '쉬어요', '😴'],
  ['시간이 있으면', '책을 읽어요', '⏳'],
];

const day61: Lesson = {
  id: 'm4-w1-d1',
  month: 4,
  week: 1,
  day: 61,
  title: 'Si… : -(으)면',
  summary: 'Poser une condition : 비가 오면 우산을 써요. Voyelle → 면, consonne → 으면. Nouveaux : 시간 (du temps), 옷을 입어요.',
  cards: [
    { id: 'm5-ko-gamyeon-meogeumyeon', kind: 'grammar', ko: '가면 · 먹으면', fr: 'si je vais · si je mange — voyelle → 면, consonne → 으면', note: '🔀 Voyelle, ㄹ, 하다 → 면 ([[가면]], [[놀면]], [[공부하면]]) · consonne → 으면 ([[먹으면]], [[있으면]]). [[ㄷ|p:irreg-d]] → [[들으면]] · [[ㅂ|p:irreg-b]] → [[추우면]]. Règle : [[si…|p:if]]' },
    { id: 'm5-ko-biga-omyeon', kind: 'phrase', ko: '비가 오면 우산을 써요', fr: 'S’il pleut, on prend un parapluie.', note: '☔ [[오]] + [[면]]. La condition d’abord, le résultat **à la fin**.' },
    { id: 'm5-ko-sigan', kind: 'vocab', ko: '시간', fr: 'temps (durée), moment', note: '⏳ [[시간이 있어요]] = j’ai du temps. Déjà vu dans [[쉬는 시간]]. ≠ [[시|t:heure sur l’horloge]].' },
    { id: 'm5-ko-sigani-isseumyeon', kind: 'phrase', ko: '시간이 있으면 책을 읽어요', fr: 'Si j’ai du temps, je lis un livre.', note: '📖 [[있]] + [[으면]], prononcé [이쓰면].' },
    { id: 'm5-ko-oseul-ibeoyo', kind: 'phrase', ko: '옷을 입어요', fr: 'je mets un vêtement, je m’habille (poli)', note: '🧥 [[입다]] : le ㅂ reste ! [[날씨가 추우면 옷을 입으세요.]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Si… alors… 🔀' },
        { type: 'tip', text: 'Bienvenue au **4ᵉ mois** ! Nabi est encore dans sa chrysalide… mais [[나비]] veut dire **papillon** 🦋 : les ailes arrivent ! Ce mois-ci, tu vas formuler des **hypothèses**.', mood: 'happy' },
        { type: 'text', text: 'Tu connais déjà [[뛰면 안 돼요|p:rules]] : « **si** tu cours, ça ne va pas ». Ce **면**, c’est **si** (ou **quand**). Il se colle au premier verbe :' },
        { type: 'breakdown', segments: [
          { ko: '비', role: 'subject', gloss: 'la pluie', particle: { ko: '가', key: 'subject' } },
          { ko: '오면', role: 'verb', gloss: 's’il tombe' },
          { ko: '우산', role: 'object', gloss: 'un parapluie', particle: { ko: '을', key: 'object' } },
          { ko: '써요', role: 'verb', gloss: 'on prend' },
        ], translation: 'S’il pleut, on prend un parapluie.', note: 'La **condition** d’abord, le **résultat** à la fin — comme toujours, le verbe principal ferme la phrase.' },
        { type: 'tip', text: 'Comme [[면서|p:while]] : c’est le même **면**. [[먹으면서]] = en mangeant · [[먹으면]] = si je mange.', mood: 'thinking' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La règle : 면 / 으면 🔍' },
        { type: 'table', head: ['Le radical finit par…', 'Infinitif', 'Si…'], rows: [
          ['🟢 une voyelle → **면**', '[[가다]] · [[아프다]]', '[[가면]] · [[아프면]]'],
          ['⭐ [[하다|p:hada]] → **하면**', '[[피곤하다]] · [[공부하다]]', '[[피곤하면]] · [[공부하면]]'],
          ['🟤 une consonne → **으면**', '[[먹다]] · [[있다]]', '[[먹으면]] · [[있으면]]'],
          ['🪁 ㄹ → **면** (sans 으)', '[[놀다]]', '[[놀면]]'],
          ['🔀 [[ㄷ|p:irreg-d]] → ㄹ + **으면**', '[[듣다]] · [[걷다]]', '[[들으면]] · [[걸으면]]'],
          ['🥶 [[ㅂ|p:irreg-b]] → 우 + **면**', '[[춥다]] · [[덥다]]', '[[추우면]] · [[더우면]]'],
        ] },
        { type: 'text', text: 'Bonne nouvelle : ce sont **exactement** les règles de [[면서|p:while]]. Tu les connais déjà !' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[가다]] → « si je vais » :', choices: ['가면', '가으면', '가서'], answer: 0, explain: '[[가]] finit par une voyelle : [[가]] + [[면]].' } },
    { kind: 'practice', exercise: { type: 'sort', prompt: '🟢 면 ou 🟤 으면 ?', buckets: ['🟢 면', '🟤 으면'], items: [
      { text: '보다', bucket: 0 }, { text: '공부하다', bucket: 0 }, { text: '놀다', bucket: 0 }, { text: '아프다', bucket: 0 },
      { text: '먹다', bucket: 1 }, { text: '있다', bucket: 1 }, { text: '읽다', bucket: 1 }, { text: '없다', bucket: 1 },
    ], explain: '[[보면]] · [[공부하면]] · [[놀면]] (ㄹ : pas de 으) · [[아프면]]. [[먹으면]] · [[있으면]] · [[읽으면]] · [[없으면]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[먹다]] → « si je mange » :', answer: '먹으면' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[춥다]] → « s’il fait froid » :', answer: '추우면', explain: '[[춥다|p:irreg-b]] : devant une voyelle, ㅂ → 우. Ici [[추우]] + [[면]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[듣다]] → « si j’écoute » :', answer: '들으면', explain: '[[듣다|p:irreg-d]] : devant une voyelle, ㄷ → ㄹ.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le puzzle 🧩' },
        { type: 'text', text: 'Activité de la classe : des cartes-puzzle. Une carte **condition** s’emboîte dans une carte **résultat**. Deux mots nouveaux : [[시간|t:du temps]] et [[옷을 입어요|t:je m’habille]].' },
        { type: 'table', head: ['', 'Condition (si…)', 'Résultat'], rows: PUZZLE.map(([cond, res, emoji]) => [emoji, `[[${cond}]]`, `[[${res}]]`]) },
        { type: 'liaison', items: [
          { written: '있으면', spoken: '이쓰면', fr: 'si j’ai' },
          { written: '입어요', spoken: '이버요', fr: 'je m’habille' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Emboîte chaque condition dans son résultat.', pairs: PUZZLE.slice(0, 4).map(([cond, res]) => [cond, res] as [string, string]) } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Si j’ai du temps, je lis un livre.', tiles: ['시간이', '있으면', '책을', '읽어요.'], distractors: ['있면', '있어서'] } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🍚 Si on a faim…', before: '배가 ', after: ' 밥을 먹어요.', choices: ['고프면', '고프으면', '고파요'], answer: 0, translation: 'Si on a faim, on mange.', explain: '[[고프]] finit par une voyelle : [[고프면]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Règles de vie 📋' },
        { type: 'text', text: 'Activité de la classe : lire des **règles** de la vie de tous les jours. **Si** ceci… **alors** cela :' },
        { type: 'table', head: ['', 'La règle'], rows: [
          ['☔', '[[비가 오면 우산을 써요.]]'],
          ['🤒', '[[아프면 집에서 쉬어요.]]'],
          ['🥵', '[[날씨가 더우면 물을 마셔요.]]'],
          ['🏫', '[[교실에서 뛰면 안 돼요.]]'],
        ] },
        { type: 'tip', text: '**면** veut aussi dire **quand** : [[집에 가면 숙제를 해요.|t:quand je rentre, je fais mes devoirs]] Le contexte décide.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[아프면 집에서 쉬어요.]] veut dire…', choices: ['Si on est malade, on se repose à la maison.', 'On est malade parce qu’on se repose.', 'On se repose en étant malade.'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🎧 « Je fais mes devoirs **en** écoutant de la musique. »', before: '음악을 ', after: ' 숙제를 해요.', choices: ['들으면서', '들으면', '들어서'], answer: 0, explain: '« en …ant » = [[면서|p:while]] · « si » = [[면|p:if]] · « parce que » = [[어서|p:cause]].' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '☔ « **S’il** pleut, on prend un parapluie. »', before: '비가 ', after: ' 우산을 써요.', choices: ['오면', '오면서', '와요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '시간이 있으면 책을 읽어요', choices: ['시간이 있으면 책을 읽어요', '시간이 있어서 책을 읽어요', '시간이 없으면 책을 읽어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '⏳ + 📖 « Si j’ai du temps, je lis un livre. »', answer: alts('시간이 있으면 책을 읽어요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Invente ta propre règle avec **(으)면**. [[쓰세요!]]', placeholder: '피곤하면 음악을 들어요', mustInclude: [IF_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '시간이 있으면 책을 읽어요.', fr: 'Si j’ai du temps, je lis un livre.', prompt: 'Mise en pratique : dis-le à voix haute ⏳' } },
  ],
  interleave: [
    { type: 'type', prompt: '[[먹다]] → « en mangeant » :', answer: '먹으면서' },
    { type: 'mcq', prompt: '« Je suis en train de lire. »', choices: ['책을 읽고 있어요.', '책을 읽으면서요.', '책을 읽을 거예요.'], answer: 0 },
    { type: 'cloze', before: '선생님이 내일 비가 ', after: '.', choices: ['온대요', '오재요'], answer: 0, translation: 'Le professeur dit qu’il va pleuvoir demain.' },
    { type: 'type', prompt: '[[놀다]] → « si je joue » :', answer: '놀면' },
  ],
};

const WISHES: [string, string][] = [
  ['☀️', '내일 날씨가 좋으면 좋겠어요.'],
  ['🏖️', '빨리 방학이 오면 좋겠어요.'],
  ['🪁', '주말에 친구를 만나면 좋겠어요.'],
  ['⚽', '내일 축구를 할 수 있으면 좋겠어요.'],
];

const day62: Lesson = {
  id: 'm4-w1-d2',
  month: 4,
  week: 1,
  day: 62,
  title: 'J’aimerais que… : -(으)면 좋겠어요',
  summary: 'Faire un vœu : 내일 날씨가 좋으면 좋겠어요. Condition + 좋겠어요 = « ce serait bien si… ». Nouveaux : 방학, 소원.',
  cards: [
    { id: 'm5-ko-myeon-jokesseoyo', kind: 'grammar', ko: '오면 좋겠어요 · 먹으면 좋겠어요', fr: 'ce serait bien si… / j’aimerais que… — (으)면 + 좋겠어요', note: '🌠 Condition + [[좋겠어요]] (« ce serait bien »), prononcé [조케써요]. [[비가 안 오면 좋겠어요.]] Règle : [[souhait|p:wish]]' },
    { id: 'm5-ko-nalssiga-joeumyeon-jokesseoyo', kind: 'phrase', ko: '내일 날씨가 좋으면 좋겠어요', fr: 'Ce serait bien qu’il fasse beau demain.', note: '☀️ [[좋]] + [[으면]] + [[좋겠어요]]. Le ㅎ ne se prononce pas : [조으면].' },
    { id: 'm5-ko-banghak', kind: 'vocab', ko: '방학', fr: 'vacances (scolaires)', note: '🏖️ [[빨리 방학이 오면 좋겠어요!]]' },
    { id: 'm5-ko-sowon', kind: 'vocab', ko: '소원', fr: 'vœu, souhait', note: '🌳 [[소원 나무|t:l’arbre aux souhaits]]. [[여러분, 소원이 뭐예요?|t:quel est votre vœu ?]]' },
    { id: 'm5-ko-sukjega-eopseumyeon', kind: 'phrase', ko: '숙제가 없으면 좋겠어요', fr: 'J’aimerais ne pas avoir de devoirs.', note: '😅 [[없]] + [[으면]] + [[좋겠어요]]. Le négatif avec [[안]] : [[비가 안 오면 좋겠어요.]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La bulle de pensée 💭' },
        { type: 'tip', text: '[[어제는 면을 배웠어요.|t:hier, on a appris 면]] Aujourd’hui, une tournure pour exprimer un **souhait**.', mood: 'happy' },
        { type: 'text', text: 'Prends une condition [[면|p:if]] et ajoute **좋겠어요** (« ce serait bien ») : « ce serait bien **si**… », donc « **j’aimerais que**… ».' },
        { type: 'breakdown', segments: [
          { ko: '내일', role: 'time', gloss: 'demain' },
          { ko: '날씨', role: 'subject', gloss: 'le temps', particle: { ko: '가', key: 'subject' } },
          { ko: '좋으면', role: 'verb', gloss: 's’il est beau' },
          { ko: '좋겠어요', role: 'verb', gloss: 'ce serait bien' },
        ], translation: 'Ce serait bien qu’il fasse beau demain.' },
        { type: 'liaison', items: [
          { written: '좋으면', spoken: '조으면', fr: 'si c’est bien (ㅎ muet)' },
          { written: '좋겠어요', spoken: '조케써요', fr: 'ce serait bien (ㅎ + ㄱ = ㅋ)' },
        ] },
        { type: 'tip', text: 'Oui, [[좋으면 좋겠어요]] contient **deux fois** [[좋]] ! C’est tout à fait normal en coréen.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '« Ce serait bien qu’il fasse beau » :', choices: ['날씨가 좋으면 좋겠어요.', '날씨가 좋아서 좋겠어요.', '날씨가 좋으면서 좋겠어요.'], answer: 0, explain: 'Condition [[좋으면]] + [[좋겠어요]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[오다]] → « j’aimerais qu’il vienne / que ça arrive » :', answer: alts('오면 좋겠어요') } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les pictogrammes des vœux 🌠' },
        { type: 'text', text: 'Deux mots nouveaux : [[방학|t:les vacances]] et [[소원|t:un vœu]]. Lis les bulles de pensée :' },
        { type: 'table', head: ['', 'Le vœu'], rows: WISHES.map(([emoji, w]) => [emoji, `[[${w}]]`]) },
        { type: 'text', text: 'Pour un vœu **négatif**, [[안]] devant le verbe, ou [[없으면]] :' },
        { type: 'table', head: ['', 'Le vœu'], rows: [
          ['🌂', '[[비가 안 오면 좋겠어요.]]'],
          ['📝', '[[숙제가 없으면 좋겠어요.]]'],
          ['🤒', '[[동생이 안 아프면 좋겠어요.]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque pictogramme à son vœu.', pairs: [['☀️', '날씨가 좋으면 좋겠어요'], ['🏖️', '방학이 오면 좋겠어요'], ['🌂', '비가 안 오면 좋겠어요'], ['📝', '숙제가 없으면 좋겠어요']] } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Transforme en vœu. Touche une case vide.', head: ['Infinitif', '🌠 Ce serait bien si…'], rows: [
      ['[[만나다]]', blank('만나면 좋겠어요')],
      ['[[놀다]]', blank('놀면 좋겠어요')],
      ['[[있다]]', blank('있으면 좋겠어요')],
    ], explain: '[[만나면]] (voyelle) · [[놀면]] (ㄹ) · [[있으면]] (consonne) + [[좋겠어요]].' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'J’aimerais que les vacances arrivent vite !', tiles: ['빨리', '방학이', '오면', '좋겠어요!'], distractors: ['와서', '좋아요!'] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '비가 안 오면 좋겠어요', choices: ['비가 안 오면 좋겠어요', '비가 오면 좋겠어요', '비가 와서 좋아요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'L’arbre aux souhaits 🌳' },
        { type: 'text', text: 'Activité de la classe : chacun accroche un petit mot à l’arbre aux souhaits. **Tout en coréen** :' },
        { type: 'dialog', lines: [
          { who: '선생님', ko: '여러분, 소원이 뭐예요?' },
          { who: '수아', ko: '빨리 방학이 오면 좋겠어요!' },
          { who: '지훈', ko: '내일 축구를 할 수 있으면 좋겠어요. 그러니까 비가 안 오면 좋겠어요.' },
          { who: '민수', ko: '숙제가 없으면 좋겠어요!' },
          { who: '선생님', ko: '민수… 😅' },
          { who: '나비', ko: '저는 한국어를 잘하면 좋겠어요.' },
          { who: '선생님', ko: '나비는 한국어를 잘해요!' },
        ] },
        { type: 'tip', text: 'Petit mot : [[잘하다|t:bien faire, être bon en…]] → [[잘해요]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi Jihoon espère-t-il qu’il ne pleuvra pas ?', choices: ['Il veut jouer au foot demain.', 'Il veut aller à la bibliothèque.', 'Il n’a pas de parapluie.'], answer: 0, explain: '[[내일 축구를 할 수 있으면 좋겠어요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quel est le vœu de Nabi ?', choices: ['Être bon en coréen.', 'Ne pas avoir de devoirs.', 'Partir en vacances.'], answer: 0, explain: '[[한국어를 잘하면 좋겠어요.]]' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '☀️ « Ce serait bien qu’il fasse beau demain. »', answer: alts('내일 날씨가 좋으면 좋겠어요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ton petit mot pour l’arbre aux souhaits 🌳 Écris ton vœu avec **(으)면 좋겠어요**. [[쓰세요!]]', placeholder: '주말에 친구를 만나면 좋겠어요', mustInclude: [WISH_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '내일 날씨가 좋으면 좋겠어요.', fr: 'Ce serait bien qu’il fasse beau demain.', prompt: 'Mise en pratique : fais ton vœu à voix haute 🌠' } },
  ],
  interleave: [
    { type: 'type', prompt: '[[있다]] → « si j’ai » :', answer: '있으면' },
    { type: 'cloze', before: '날씨가 ', after: ' 옷을 입어요.', choices: ['추우면', '춥으면'], answer: 0, translation: 'S’il fait froid, je m’habille.' },
    { type: 'mcq', prompt: '👵 « Grand-mère est là. »', choices: ['할머니가 계세요.', '할머니가 있어요.', '할머니가 드세요.'], answer: 0 },
    { type: 'type', prompt: '« [[같이 놀까요?]] » → « Sua propose de jouer ensemble » :', answer: alts('수아가 같이 놀재요') },
  ],
};

const TPR: [string, string, string[]][] = [
  ['질문이 있으면 손을 드세요', 'Tu as une question.', ['✋ Je lève la main.', '📕 Je ferme le livre.', '🧍 Je me lève.']],
  ['다 했으면 책을 덮으세요', 'Tu as fini l’exercice.', ['📕 Je ferme le livre.', '✋ Je lève la main.', '📖 J’ouvre le cahier.']],
  ['다 했으면 운동장에 나가도 돼요', 'Tu as tout fini.', ['🏃 Je peux sortir dans la cour.', '📕 Je ferme le livre.', '🪑 Je m’assois.']],
];

const day63: Lesson = {
  id: 'm4-w1-d3',
  month: 4,
  week: 1,
  day: 63,
  title: 'Les consignes : 다 했으면…',
  summary: 'Comprendre les consignes sous condition : 질문이 있으면 손을 드세요 · 다 했으면 책을 덮으세요. Passé + 으면 : 했으면. Nouveaux : 손을 드세요, 덮으세요, 다.',
  cards: [
    { id: 'm5-ko-soneul-deuseyo', kind: 'phrase', ko: '손을 드세요', fr: 'Levez la main.', note: '✋ [[손|t:la main]] + [[들다|t:lever]] → [[드세요]] (le ㄹ tombe devant 세요). Même son que [[맛있게 드세요]] (mangez) !' },
    { id: 'm5-ko-jilmuni-isseumyeon', kind: 'phrase', ko: '질문이 있으면 손을 드세요', fr: 'Si vous avez une question, levez la main.', note: '🙋 [[질문|t:question]] + [[이|p:subject]] + [[있으면|p:if]].' },
    { id: 'm5-ko-da', kind: 'vocab', ko: '다', fr: 'tout, entièrement', note: '💯 [[다 했어요!|t:j’ai tout fait, j’ai fini]] [[다 먹었어요.]]' },
    { id: 'm5-ko-da-haesseumyeon', kind: 'grammar', ko: '다 했으면', fr: 'si vous avez fini (si vous avez tout fait) — passé : 했어요 → 했으면', note: '✅ [[했어요]] − [[어요]] + [[으면]], prononcé [해쓰면]. [[다 먹었으면…]] Règle : [[si…|p:if]]' },
    { id: 'm5-ko-chaegeul-deopeuseyo', kind: 'phrase', ko: '책을 덮으세요', fr: 'Fermez le livre.', note: '📕 [[덮다|t:fermer (un livre), couvrir]] ≠ [[펴세요]] (ouvrez). Prononcé [더프세요].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les consignes de la classe 🏫' },
        { type: 'tip', text: '[[어제는 소원을 썼어요.|t:hier, on a écrit des vœux]] Aujourd’hui : comprendre le professeur quand il donne une consigne **sous condition**.', mood: 'happy' },
        { type: 'text', text: 'Tu connais déjà les consignes [[펴세요|p:seyo]], [[쓰세요]], [[앉으세요]]… Deux nouvelles :' },
        { type: 'table', head: ['', 'Consigne', ''], rows: [
          ['✋', '[[손을 드세요.]]', 'Levez la main.'],
          ['📕', '[[책을 덮으세요.]]', 'Fermez le livre.'],
          ['📖', '[[책을 펴세요.]]', 'Ouvrez le livre.'],
        ] },
        { type: 'tip', text: 'Attention aux faux jumeaux ! [[손을 드세요]] (levez, de [[들다]]) · [[맛있게 드세요]] (mangez) · [[들으세요]] (écoutez, de [[듣다|p:irreg-d]]).', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque consigne à son geste.', pairs: [['손을 드세요', '✋'], ['책을 덮으세요', '📕'], ['책을 펴세요', '📖'], ['일어나세요', '🧍']] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Si…, alors faites… 🙋' },
        { type: 'text', text: 'Le professeur combine **(으)면** et **(으)세요** :' },
        { type: 'breakdown', segments: [
          { ko: '질문', role: 'subject', gloss: 'une question', particle: { ko: '이', key: 'subject' } },
          { ko: '있으면', role: 'verb', gloss: 'si vous avez' },
          { ko: '손', role: 'object', gloss: 'la main', particle: { ko: '을', key: 'object' } },
          { ko: '드세요', role: 'verb', gloss: 'levez' },
        ], translation: 'Si vous avez une question, levez la main.' },
        { type: 'text', text: '« **Si vous avez fini** » : on part du **passé** [[했어요]], on enlève [[어요]] et on ajoute **으면**. Avec [[다|t:tout]] :' },
        { type: 'table', head: ['Passé', '', 'Si… (déjà fait)'], rows: [
          ['[[했어요]]', '➜', '[[했으면]]'],
          ['[[먹었어요]]', '➜', '[[먹었으면]]'],
          ['[[읽었어요]]', '➜', '[[읽었으면]]'],
        ] },
        { type: 'breakdown', segments: [
          { ko: '다', role: 'adverb', gloss: 'tout' },
          { ko: '했으면', role: 'verb', gloss: 'si vous avez fait' },
          { ko: '책', role: 'object', gloss: 'le livre', particle: { ko: '을', key: 'object' } },
          { ko: '덮으세요', role: 'verb', gloss: 'fermez' },
        ], translation: 'Si vous avez fini, fermez le livre.' },
        { type: 'liaison', items: [
          { written: '했으면', spoken: '해쓰면', fr: 'si vous avez fait' },
          { written: '덮으세요', spoken: '더프세요', fr: 'fermez' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[다 했으면]] veut dire…', choices: ['si vous avez fini', 'en faisant tout', 'parce que vous avez fini'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '✅ « **Si vous avez fini**, fermez le livre. »', before: '다 ', after: ' 책을 덮으세요.', choices: ['했으면', '하면서', '해서'], answer: 0, explain: '[[했어요]] → [[했으면]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[먹었어요]] → « si tu as mangé » :', answer: '먹었으면' } },
    { kind: 'learn', blocks: [
      { type: 'title', text: 'Jeu d’écoute et d’action 🎧' },
      { type: 'text', text: 'Activité de la classe : le professeur donne une consigne, chacun **agit** si la condition le concerne. Écoute bien, puis choisis ton geste.' },
    ] },
    ...TPR.map(([audio, situation, choices], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'mcq' as const, prompt: `Consigne ${i + 1}/${TPR.length} — 🎧 ${situation} Que fais-tu ?`, audio, choices, answer: 0, explain: `[[${audio}.]]` },
    })),
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'En classe 🏫' },
        { type: 'text', text: '**Tout en coréen** :' },
        { type: 'dialog', lines: [
          { who: '선생님', ko: '여러분, 책을 펴세요. 질문이 있으면 손을 드세요.' },
          { who: '지훈', ko: '✋ 선생님, 질문해도 돼요?' },
          { who: '선생님', ko: '네, 질문하세요.' },
          { who: '지훈', ko: '다 했으면 뭐 해요?' },
          { who: '선생님', ko: '다 했으면 책을 덮으세요. 그리고 조용히 책을 읽으세요.' },
          { who: '민수', ko: '선생님, 다 했어요!' },
          { who: '선생님', ko: '벌써? 좋아요. 다 했으면 운동장에 나가도 돼요.' },
        ] },
        { type: 'tip', text: 'Petit mot : [[벌써|t:déjà]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Selon le professeur, que fait-on **après** avoir fermé le livre ?', choices: ['On lit en silence.', 'On sort dans la cour.', 'On lève la main.'], answer: 0, explain: '[[책을 덮으세요. 그리고 조용히 책을 읽으세요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que peut faire Minsu ?', choices: ['Sortir dans la cour.', 'Poser une question.', 'Ouvrir son cahier.'], answer: 0, explain: '[[다 했으면 운동장에 나가도 돼요.]]' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Si vous avez une question, levez la main.', tiles: ['질문이', '있으면', '손을', '드세요.'], distractors: ['있어서', '들으세요.'] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '다 했으면 책을 덮으세요', choices: ['다 했으면 책을 덮으세요', '다 했으면 책을 펴세요', '다 하면서 책을 덮으세요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '📕 « Si vous avez fini, fermez le livre. »', answer: alts('다 했으면 책을 덮으세요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'À toi d’être le professeur ! Écris une consigne avec **(으)면** et **(으)세요**. [[쓰세요!]]', placeholder: '다 했으면 공책을 펴세요', mustInclude: [IF_ANY, '세요'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '다 했으면 책을 덮으세요.', fr: 'Si vous avez fini, fermez le livre.', prompt: 'Mise en pratique : donne la consigne à voix haute 📕' } },
  ],
  interleave: [
    { type: 'type', prompt: '« Ce serait bien qu’il ne pleuve pas » :', answer: alts('비가 안 오면 좋겠어요') },
    { type: 'cloze', before: '선생님이 책을 ', after: '.', choices: ['펴래요', '펴재요'], answer: 0, translation: 'Le professeur dit d’ouvrir le livre.' },
    { type: 'mcq', prompt: '[[피곤하면]] →', choices: ['si je suis fatigué', 'parce que je suis fatigué', 'en étant fatigué'], answer: 0 },
    { type: 'type', prompt: '[[걷다]] → « si je marche » :', answer: '걸으면' },
  ],
};

const day64: Lesson = {
  id: 'm4-w1-d4',
  month: 4,
  week: 1,
  day: 64,
  title: 'Ma rédaction : s’il pleut, s’il fait beau',
  summary: 'Écrire deux phrases avec -(으)면 et le futur : 주말에 비가 오면 집에서 쉴 거예요. 날씨가 좋으면 공원에 갈 거예요. Nouveau : 눈이 와요.',
  cards: [
    { id: 'm5-ko-biga-omyeon-swil-geoyeyo', kind: 'phrase', ko: '주말에 비가 오면 집에서 쉴 거예요', fr: 'S’il pleut ce week-end, je me reposerai à la maison.', note: '☔ La condition reste **sans** futur : [[오면]] … [[쉴 거예요|p:future]] (futur seulement à la fin).' },
    { id: 'm5-ko-joeumyeon-gal-geoyeyo', kind: 'phrase', ko: '날씨가 좋으면 공원에 갈 거예요', fr: 'S’il fait beau, j’irai au parc.', note: '☀️ [[좋으면|p:if]] [조으면] + [[갈 거예요|p:future]].' },
    { id: 'm5-ko-nuni-wayo', kind: 'phrase', ko: '눈이 와요', fr: 'il neige', note: '❄️ Comme [[비가 와요]] : la neige « vient ». [[눈이 오면 친구하고 놀 거예요.]] [[눈]] = aussi l’œil !' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ma première rédaction ✍️' },
        { type: 'tip', text: '[[오늘은 혼자 써요!|t:aujourd’hui, tu écris tout seul !]] Ta première **rédaction** dans le cahier de coréen : « Ce que je fais s’il pleut, ce que je fais s’il fait beau ».', mood: 'encourage' },
        { type: 'text', text: 'Le modèle de Nabi, deux phrases :' },
        { type: 'table', head: ['', 'Le cahier de Nabi'], rows: [
          ['☔', '[[주말에 비가 오면 집에서 쉴 거예요.]]'],
          ['☀️', '[[날씨가 좋으면 공원에 갈 거예요.]]'],
        ] },
        { type: 'breakdown', segments: [
          { ko: '주말', role: 'time', gloss: 'ce week-end', particle: { ko: '에', key: 'time' } },
          { ko: '비', role: 'subject', gloss: 'la pluie', particle: { ko: '가', key: 'subject' } },
          { ko: '오면', role: 'verb', gloss: 's’il pleut' },
          { ko: '집', role: 'place', gloss: 'à la maison', particle: { ko: '에서', key: 'action' } },
          { ko: '쉴 거예요', role: 'verb', gloss: 'je me reposerai' },
        ], translation: 'S’il pleut ce week-end, je me reposerai à la maison.' },
        { type: 'tip', text: 'Le **futur** se met **seulement à la fin** : [[오면]] … [[쉴 거예요]]. Jamais de futur dans la condition — comme en français : « s’il **pleut** », pas « s’il pleuvra » !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '« S’il pleut demain, je lirai un livre. »', choices: ['내일 비가 오면 책을 읽을 거예요.', '내일 비가 올 거면 책을 읽을 거예요.', '내일 비가 오면서 책을 읽을 거예요.'], answer: 0, explain: 'Condition au présent [[오면]], futur seulement à la fin : [[읽을 거예요]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La trame à trous 🧩' },
        { type: 'text', text: 'Pour t’aider, la classe utilise une **trame**. Choisis une météo, puis une activité. Un mot nouveau : [[눈이 와요|t:il neige]] ❄️.' },
        { type: 'table', head: ['Si… (météo)', 'je… (futur)'], rows: [
          ['☔ [[비가 오면]]', '🏠 [[집에서 쉴 거예요]] · 📺 [[텔레비전을 볼 거예요]]'],
          ['☀️ [[날씨가 좋으면]]', '🌳 [[공원에 갈 거예요]] · ⚽ [[축구를 할 거예요]]'],
          ['❄️ [[눈이 오면]]', '🪁 [[친구하고 놀 거예요]]'],
          ['🥵 [[더우면]]', '🥛 [[우유를 마실 거예요]]'],
        ] },
        { type: 'tip', text: 'Petit mot : [[친구하고|t:avec un ami]] ([[하고]] = avec).', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Complète la trame. Touche une case vide.', head: ['Infinitif', 'Si… (-(으)면)', 'Futur (-(으)ㄹ 거예요)'], rows: [
      ['[[쉬다]]', blank('쉬면'), blank('쉴 거예요')],
      ['[[읽다]]', blank('읽으면'), blank('읽을 거예요')],
      ['[[만나다]]', blank('만나면'), blank('만날 거예요')],
    ], explain: 'Mêmes familles : voyelle → [[면]] / [[ㄹ 거예요]] · consonne → [[으면]] / [[을 거예요]].' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: 'Trame · phrase 1 ☔', before: '주말에 비가 ', after: ' 집에서 쉴 거예요.', choices: ['오면', '올 거면', '와서'], answer: 0, translation: 'S’il pleut ce week-end, je me reposerai à la maison.' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: 'Trame · phrase 2 ☀️', before: '날씨가 좋으면 공원에 ', after: '.', choices: ['갈 거예요', '가면', '갔어요'], answer: 0, translation: 'S’il fait beau, j’irai au parc.' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'S’il neige, je jouerai avec un ami.', tiles: ['눈이', '오면', '친구하고', '놀', '거예요.'], distractors: ['올', '놀면'] } },
    { kind: 'practice', exercise: { type: 'type', prompt: '☔ « S’il pleut ce week-end, je me reposerai à la maison. »', answer: alts('주말에 비가 오면 집에서 쉴 거예요', '비가 오면 집에서 쉴 거예요') } },
    { kind: 'practice', exercise: { type: 'type', prompt: '☀️ « S’il fait beau, j’irai au parc. »', answer: alts('날씨가 좋으면 공원에 갈 거예요') } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Relis-toi ✅' },
        { type: 'text', text: 'Avant de rendre ta rédaction, la classe vérifie trois points :' },
        { type: 'table', head: ['', 'Je vérifie…'], rows: [
          ['1', '**면** après une voyelle, **으면** après une consonne : [[오면]] · [[좋으면]]'],
          ['2', 'le **futur** seulement à la **fin** : [[… 갈 거예요]]'],
          ['3', 'les particules : [[집에서|p:action]] (on y fait une action) · [[공원에|p:place]] (on y va)'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Une phrase a une faute. Laquelle ?', choices: ['날씨가 좋면 공원에 갈 거예요.', '비가 오면 집에서 쉴 거예요.', '눈이 오면 친구하고 놀 거예요.'], answer: 0, explain: '[[좋]] finit par une consonne : [[좋으면]].' } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ta rédaction : écris **deux phrases**, une s’il pleut ☔, une s’il fait beau ☀️, avec le futur à la fin. [[쓰세요!]]', placeholder: '주말에 비가 오면 집에서 쉴 거예요. 날씨가 좋으면 공원에 갈 거예요.', mustInclude: ['오면', '좋으면', '거예요'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '주말에 비가 오면 집에서 쉴 거예요. 날씨가 좋으면 공원에 갈 거예요.', fr: 'S’il pleut ce week-end, je me reposerai à la maison. S’il fait beau, j’irai au parc.', prompt: 'Mise en pratique : lis ta rédaction à voix haute ✍️' } },
  ],
  interleave: [
    { type: 'mcq', prompt: '✋ « Si vous avez une question, levez la main. »', choices: ['질문이 있으면 손을 드세요.', '질문이 있으면 손을 들으세요.', '질문이 있어서 손을 드세요.'], answer: 0 },
    { type: 'type', prompt: '« J’aimerais que les vacances arrivent vite ! »', answer: alts('빨리 방학이 오면 좋겠어요') },
    { type: 'cloze', before: '음악을 ', after: ' 걸어요.', choices: ['들으면서', '들으면'], answer: 0, translation: 'Je marche en écoutant de la musique.' },
    { type: 'type', prompt: '[[덥다]] → « s’il fait chaud » :', answer: '더우면' },
  ],
};

const WHO: [string, string[]][] = [
  ['[[이 친구는 안경을 써요. 비가 오면 도서관에서 책을 읽어요. 누구예요?]]', ['👓 수아', '🧢 지훈', '🎒 민수']],
  ['[[이 친구는 모자를 써요. 날씨가 좋으면 운동장에서 축구를 해요. 누구예요?]]', ['🧢 지훈', '👓 수아', '🎒 민수']],
  ['[[이 친구는 가방이 커요. 가방에 사과가 있어요. 배가 고프면 사과를 먹어요. 누구예요?]]', ['🎒 민수', '👓 수아', '🧢 지훈']],
];

const CHAIN: [string, string][] = [
  ['시간이 있으면', '공원에 가요'],
  ['공원에 가면', '친구를 만나요'],
  ['친구를 만나면', '같이 축구해요'],
  ['축구하면', '배가 고파요'],
];

const DICTATION = [
  '비가 오면 우산을 써요',
  '시간이 있으면 책을 읽어요',
  '질문이 있으면 손을 드세요',
  '내일 날씨가 좋으면 좋겠어요',
  '주말에 비가 오면 집에서 쉴 거예요',
];

const FORM: [string, string][] = [
  ['가다', '가면'],
  ['먹다', '먹으면'],
  ['비가 오다', '비가 오면'],
];

const day65: Lesson = {
  id: 'm4-w1-d5',
  month: 4,
  week: 1,
  day: 65,
  title: 'Bilan & évaluation n°13',
  summary: 'Le jeu « Qui est-ce ? », la chaîne des conditions, la dictée de la classe, l’évaluation n°13 et une histoire de week-end entièrement en coréen. Nouveau : 안경.',
  cards: [
    { id: 'm5-ko-angyeong', kind: 'vocab', ko: '안경', fr: 'lunettes', note: '👓 [[안경을 써요]] — comme [[우산을 써요]], [[모자를 써요]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Qui est-ce ? 🕵️' },
        { type: 'tip', text: 'Dernier jour de la semaine ! [[시간이 있으면 같이 놀까요?|t:si tu as le temps, on joue ensemble ?]] D’abord, un jeu de devinettes.', mood: 'happy' },
        { type: 'text', text: 'Activité de la classe : « Qui est-ce ? ». Un mot nouveau : [[안경|t:lunettes]] — on dit [[안경을 써요]], comme [[모자를 써요]].' },
        { type: 'table', head: ['Les suspects', ''], rows: [
          ['👓', '[[수아]] — [[안경을 써요.]]'],
          ['🧢', '[[지훈]] — [[모자를 써요.]]'],
          ['🎒', '[[민수]] — [[가방이 커요.]]'],
        ] },
      ],
    },
    ...WHO.map(([clue, choices], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'mcq' as const, prompt: `Devinette ${i + 1}/${WHO.length} — ${clue}`, choices, answer: 0 },
    })),
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La chaîne des conditions 🔗' },
        { type: 'text', text: 'Jeu de cartes en binôme : le **résultat** de l’un devient la **condition** de l’autre !' },
        { type: 'table', head: ['', ''], rows: [
          ['⏳', '[[시간이 있으면 공원에 가요.]]'],
          ['🌳', '[[공원에 가면 친구를 만나요.]]'],
          ['👫', '[[친구를 만나면 같이 축구해요.]]'],
          ['⚽', '[[축구하면 배가 고파요.]]'],
          ['🍚', '[[배가 고프면 밥을 먹어요!]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Reconstitue la chaîne.', pairs: CHAIN } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Continue la chaîne : [[배가 고파요]] → « si on a faim » :', answer: '배가 고프면' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La dictée de la classe 🎧' },
        { type: 'text', text: 'Cinq phrases avec la condition et le souhait. [[들으세요!]] Puis [[쓰세요!]]' },
      ],
    },
    ...DICTATION.map((s, i) => ({
      kind: 'practice' as const,
      exercise: { type: 'type' as const, prompt: `Dictée ${i + 1}/${DICTATION.length}`, audio: s, answer: alts(s) },
    })),
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Évaluation n°13' },
        { type: 'text', text: 'Trois parties, sans piège ni chrono. Chaque erreur reviendra simplement en révision.' },
        { type: 'table', head: ['Partie', 'Contenu'], rows: [
          ['A', 'Former la condition'],
          ['B', 'Relier la condition au résultat'],
          ['C', 'Expression orale'],
        ] },
        { type: 'tip', text: '**A — Former la condition.** Écris la forme en **(으)면**.', mood: 'encourage' },
      ],
    },
    ...FORM.map(([inf, cond], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'type' as const, prompt: `**A · ${i + 1}/${FORM.length}** — [[${inf}]] →`, answer: cond },
    })),
    { kind: 'learn', blocks: [{ type: 'tip', text: '**B — Relier.** Associe chaque condition à son résultat logique.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'match', prompt: '**B · 1/2**', pairs: [['배가 고프면', '밥을 먹어요'], ['날씨가 추우면', '옷을 입으세요'], ['질문이 있으면', '손을 드세요'], ['다 했으면', '책을 덮으세요']] } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '**B · 2/2** — Le vœu', before: '내일 축구를 할 거예요. 비가 안 ', after: '.', choices: ['오면 좋겠어요', '와서 좋아요', '오면서 좋겠어요'], answer: 0, translation: 'Demain, je jouerai au foot. J’aimerais qu’il ne pleuve pas.' } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**C — À l’oral.** Le professeur te demande : [[주말에 뭐 할 거예요?]] Réponds avec une condition : [[날씨가 좋으면…]]', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'write', prompt: '**C · 1/2** — Prépare ta réponse.', placeholder: '날씨가 좋으면…', mustInclude: ['좋으면', '거예요'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '날씨가 좋으면 친구를 만날 거예요.', fr: 'S’il fait beau, je verrai un ami.', prompt: '**C · 2/2** — Dis-la à voix haute, puis écoute le modèle.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le week-end de Nabi 📖' },
        { type: 'text', text: 'Une histoire **entièrement en coréen**. Touche une bulle pour l’entendre.' },
        { type: 'dialog', lines: [
          { who: '📖', ko: '금요일 오후예요.' },
          { who: '수아', ko: '나비, 주말에 뭐 할 거예요?' },
          { who: '나비', ko: '날씨가 좋으면 공원에 갈 거예요. 비가 오면 집에서 쉴 거예요.' },
          { who: '수아', ko: '저도 공원에 갈 거예요! 날씨가 좋으면 같이 축구할까요?' },
          { who: '나비', ko: '좋아요! 내일 날씨가 좋으면 좋겠어요.' },
          { who: '📖', ko: '토요일 아침이에요. 비가 와요…' },
          { who: '나비', ko: '아… 비가 와요. 그래서 집에서 쉬고 있어요.' },
          { who: '📖', ko: '그런데 수아가 왔어요. 우산을 쓰고 있어요.' },
          { who: '수아', ko: '나비, 우산이 있으면 같이 걸을까요?' },
          { who: '나비', ko: '좋아요! 걸읍시다!' },
          { who: '📖', ko: '두 친구가 웃으면서 공원에서 걸어요.' },
          { who: '나비', ko: '비가 오지만 재미있어요!' },
          { who: '수아', ko: '다음 주말에 비가 오면 뭐 할 거예요?' },
          { who: '나비', ko: '비가 오면 같이 걸을 거예요! 하지만 날씨가 좋으면 좋겠어요. 😄' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’avait prévu Nabi s’il pleuvait ?', choices: ['Se reposer à la maison.', 'Aller au parc.', 'Jouer au foot.'], answer: 0, explain: '[[비가 오면 집에서 쉴 거예요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que font finalement les deux amis ?', choices: ['Ils se promènent au parc sous la pluie.', 'Ils jouent au foot.', 'Ils regardent la télé.'], answer: 0, explain: '[[두 친구가 웃으면서 공원에서 걸어요.]]' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ton bilan de la semaine 🎓' },
        { type: 'table', head: ['Je sais…', 'Exemple'], rows: [
          ['poser une [[condition|p:if]]', '[[시간이 있으면 책을 읽어요.]]'],
          ['faire un [[vœu|p:wish]]', '[[내일 날씨가 좋으면 좋겠어요.]]'],
          ['suivre les consignes', '[[질문이 있으면 손을 드세요.]] · [[다 했으면 책을 덮으세요.]]'],
          ['écrire un petit texte', '[[비가 오면 집에서 쉴 거예요. 날씨가 좋으면 공원에 갈 거예요.]]'],
        ] },
        { type: 'tip', text: '[[다 했어요!|t:tu as tout fini !]] Bravo ! Dans sa chrysalide, Nabi sent ses ailes pousser 🦋 À la semaine prochaine !', mood: 'happy' },
      ],
    },
  ],
  interleave: [
    { type: 'type', prompt: '[[했어요]] → « si tu as fini (fait) » :', answer: '했으면' },
    { type: 'mcq', prompt: '« Il paraît qu’il va neiger demain. »', choices: ['내일 눈이 온대요.', '내일 눈이 오재요.', '내일 눈이 오래요.'], answer: 0 },
    { type: 'cloze', before: '날씨가 ', after: ' 좋겠어요.', choices: ['좋으면', '좋아서'], answer: 0, translation: 'Ce serait bien qu’il fasse beau.' },
  ],
};

export const m4w1: Lesson[] = [day61, day62, day63, day64, day65];
