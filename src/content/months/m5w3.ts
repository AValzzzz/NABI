import type { GridBlank, Lesson } from '../types';

const COLLAPSE: [RegExp, string][] = [
  [/ 것 같/g, '것 같'],
  [/것 같/g, '것같'],
  [/고 (해요|했어요|물어|대답)/g, '고$1'],
  [/물어보/g, '물어 보'],
  [/ 거예요/g, '거예요'],
];
const alts = (...xs: string[]): string[] => {
  const out = new Set(xs);
  for (const [re, to] of COLLAPSE) for (const s of [...out]) out.add(s.replace(re, to));
  for (const s of [...out]) out.add(s.replace(/[.,!?] /g, ' '));
  for (const s of [...out]) out.add(s.replace(/[.!?]$/, ''));
  return [...out];
};
const blank = (...s: string[]): GridBlank => ({ answer: alts(...s) });

const SEEM_ANY = '것 같아요|것같아요|거 같아요|거같아요';
const SAID_ANY = '다고 했어요|다고했어요|다고 해요|다고해요|라고 했어요|라고했어요|다고 대답|다고대답';
const ASKED_ANY = '냐고';

const day91: Lesson = {
  id: 'm5-w3-d1',
  month: 5,
  week: 3,
  day: 91,
  title: 'Il me semble que… : 것 같아요',
  summary: 'Nuancer son avis : 이 책이 재미있어요 (100 %) → 이 책이 재미있는 것 같아요 (70 %). Adjectif → 예쁜 · 추운 것 같아요, action → 공부하는 것 같아요. Nouveaux : 같아요, 시험.',
  cards: [
    { id: 'w19-ko-geot-gatayo', kind: 'grammar', ko: '재미있는 것 같아요', fr: 'je pense que c’est intéressant, il me semble que c’est intéressant', note: '🤔 Forme « devant un nom » + **것 같아요** : adjectif → (으)ㄴ ([[예쁜 것 같아요]], [[추운 것 같아요]]), 있다 et action → 는 ([[맛있는 것 같아요]], [[공부하는 것 같아요]]). Règle : [[것 같아요|p:seem]]' },
    { id: 'w19-ko-gatayo', kind: 'vocab', ko: '같아요', fr: 'c’est pareil, on dirait (같다)', note: '👯 Prononcé [가타요]. Même famille que [[같이]] (ensemble). [[것 같아요]] = « on dirait que… ».' },
    { id: 'w19-ko-i-chaegi-jaemi', kind: 'phrase', ko: '이 책이 재미있는 것 같아요', fr: 'Je pense que ce livre est intéressant.', note: '📖 💯 [[재미있어요]] → 🤔 [[재미있는 것 같아요]] : plus doux, plus poli.' },
    { id: 'w19-ko-yeppeun-geot', kind: 'phrase', ko: '이 그림이 어때요? — 정말 예쁜 것 같아요', fr: 'Comment trouves-tu ce dessin ? — Je le trouve vraiment joli.', note: '🖼️ [[예쁘다]] → [[예쁜]] (voyelle → ㄴ) + [[것 같아요]].' },
    { id: 'w19-ko-siheom', kind: 'vocab', ko: '시험', fr: 'examen, contrôle', note: '📝 [[시험이 어려운 것 같아요.]] — [[어렵다|p:irreg-b]] → [[어려운]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Il me semble que… 🤔' },
        { type: 'tip', text: 'Jusqu’ici, tu affirmais tout à **100 %** : [[이 책이 재미있어요.]] Mais si tu n’es pas tout à fait sûr(e) ? Ou si tu veux donner ton avis **poliment**, sans être catégorique ?', mood: 'happy' },
        { type: 'text', text: 'L’**échelle de certitude** :' },
        { type: 'table', head: ['', 'Phrase', ''], rows: [
          ['💯 100 %', '[[이 책이 재미있어요.]]', 'Ce livre est intéressant. (c’est sûr)'],
          ['🤔 70 %', '[[이 책이 재미있는 것 같아요.]]', 'Je pense que ce livre est intéressant.'],
        ] },
        { type: 'text', text: 'Mot nouveau : [[같아요|t:c’est pareil, on dirait]] (de 같다), prononcé [가타요] — le cousin de [[같이]] (ensemble). Mot à mot : « c’est **comme** une chose intéressante ».' },
        { type: 'breakdown', segments: [
          { ko: '이 책', role: 'subject', gloss: 'ce livre', particle: { ko: '이', key: 'subject' } },
          { ko: '재미있는 것', role: 'other', gloss: 'une chose intéressante' },
          { ko: '같아요', role: 'verb', gloss: 'on dirait' },
        ], translation: 'Je pense que ce livre est intéressant.', note: 'Les Coréens l’utilisent **tout le temps** pour adoucir un avis, même quand ils sont presque sûrs.' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La règle : la forme devant 것 🏷️' },
        { type: 'text', text: 'Rien de nouveau ! [[것]] est un **nom**, donc le mot devant prend la forme « devant un nom », comme [[큰 책|p:adj-mod]] ou [[공부하는 학생|p:relative]] :' },
        { type: 'table', head: ['', 'Mot', '+ 것 같아요'], rows: [
          ['🏷️ adjectif, voyelle → **ㄴ**', '[[예쁘다]] · [[바쁘다]]', '[[예쁜 것 같아요]] · [[바쁜 것 같아요]]'],
          ['🏷️ adjectif, consonne → **은**', '[[작다]] · [[좋다]]', '[[작은 것 같아요]] · [[좋은 것 같아요]]'],
          ['🏷️ [[ㅂ|p:irreg-b]] → **운**', '[[춥다]] · [[어렵다]]', '[[추운 것 같아요]] · [[어려운 것 같아요]]'],
          ['🟢 있다 / 없다 → **는**', '[[재미있다]] · [[맛없다]]', '[[재미있는 것 같아요]] · [[맛없는 것 같아요]]'],
          ['🏃 action → **는**', '[[공부하다]] · [[비가 오다]]', '[[공부하는 것 같아요]] · [[비가 오는 것 같아요]]'],
        ] },
        { type: 'tip', text: '⚠️ Le piège : ❌ 재미있은, ❌ 예쁘는. Adjectif → ㄴ / 은, mais 있다 / 없다 et les actions → **는**. Exactement comme la semaine 17 !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🤔 « Je pense que ce livre est intéressant. »', choices: ['이 책이 재미있는 것 같아요.', '이 책이 재미있어요.', '이 책이 재미있은 것 같아요.'], answer: 0, explain: '[[재미있다]] finit par 있다 → **는**. [[재미있어요]] seul = 100 %.' } },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'L’échelle de certitude : sûr à 100 % ou avis nuancé ?', buckets: ['💯 100 %', '🤔 70 %'], items: [
      { text: '날씨가 추워요.', bucket: 0 }, { text: '이 그림이 예뻐요.', bucket: 0 }, { text: '시험이 어려워요.', bucket: 0 }, { text: '민수가 바빠요.', bucket: 0 },
      { text: '날씨가 추운 것 같아요.', bucket: 1 }, { text: '이 그림이 예쁜 것 같아요.', bucket: 1 }, { text: '시험이 어려운 것 같아요.', bucket: 1 }, { text: '민수가 바쁜 것 같아요.', bucket: 1 },
    ], explain: '**것 같아요** = « il me semble que… ». Mot nouveau : [[시험|t:examen]].' } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Nuance chaque mot avec 것 같아요. Touche une case vide.', head: ['Mot', '🤔 + 것 같아요'], rows: [
      ['[[크다]]', blank('큰 것 같아요')],
      ['[[맛있다]]', blank('맛있는 것 같아요')],
      ['[[어렵다]]', blank('어려운 것 같아요')],
      ['[[좋다]]', blank('좋은 것 같아요')],
      ['[[공부하다]]', blank('공부하는 것 같아요')],
    ], explain: 'Adjectif → ㄴ / 은 / 운 ([[큰]], [[좋은]], [[어려운]]) · 있다 et action → 는 ([[맛있는]], [[공부하는]]).' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Donner son avis sur une œuvre 🖼️' },
        { type: 'text', text: 'Activité de la classe : le professeur montre un **tableau**, puis on parle d’une **histoire** lue en classe. Pour demander un avis : [[어때요?|t:comment c’est ?]]' },
        { type: 'dialog', lines: [
          { who: '선생님', ko: '여러분, 이 그림이 어때요?' },
          { who: '수아', ko: '정말 예쁜 것 같아요.' },
          { who: '지훈', ko: '저는 조금 어려운 것 같아요.' },
          { who: '민수', ko: '그림에 큰 나무가 있어요. 그래서 시원한 것 같아요.' },
          { who: '선생님', ko: '좋아요! 그럼 토끼와 거북이 이야기는 어때요?' },
          { who: '나비', ko: '재미있는 것 같아요! 거북이가 정말 착한 것 같아요.' },
          { who: '지훈', ko: '토끼는 조금 나쁜 것 같아요. 😄' },
        ] },
        { type: 'tip', text: 'Petit mot : [[여러분|t:vous tous]] (tout le monde).', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que pense Jihoon du tableau ?', choices: ['Il le trouve un peu difficile.', 'Il le trouve vraiment joli.', 'Il le trouve frais.'], answer: 0, explain: '[[저는 조금 어려운 것 같아요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Et Nabi, que pense-t-il de la tortue ?', choices: ['Qu’elle est vraiment gentille.', 'Qu’elle est un peu méchante.', 'Qu’elle est rapide.'], answer: 0, explain: '[[거북이가 정말 착한 것 같아요.]] — [[착하다]] → [[착한]].' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Je pense que ce livre est intéressant.', tiles: ['이', '책이', '재미있는', '것', '같아요.'], distractors: ['재미있은', '재미있어요.'] } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🥶 « Il me semble qu’il fait froid. »', before: '날씨가 ', after: ' 것 같아요.', choices: ['추운', '춥은', '춥는'], answer: 0, explain: '[[춥다|p:irreg-b]] : ㅂ → 운 → [[추운]].' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '시험이 어려운 것 같아요', choices: ['시험이 어려운 것 같아요', '시험이 어려워요', '숙제가 어려운 것 같아요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🖼️ « Je trouve ce dessin vraiment joli. » (avec 것 같아요)', answer: alts('이 그림이 정말 예쁜 것 같아요', '정말 예쁜 것 같아요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ton avis sur un livre, un film ou une histoire : nuance-le avec [[것 같아요]]. [[쓰세요!]]', placeholder: '토끼와 거북이 이야기가 재미있는 것 같아요.', mustInclude: [SEEM_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '이 책이 재미있는 것 같아요.', fr: 'Je pense que ce livre est intéressant.', prompt: 'Mise en pratique : dis-le à voix haute 📖' } },
  ],
  interleave: [
    { type: 'type', prompt: '🎬 « le film que j’ai vu hier »', answer: alts('어제 본 영화') },
    { type: 'mcq', prompt: '[[예쁘다]] + [[꽃]] →', choices: ['예쁜 꽃', '예쁘는 꽃', '예쁠 꽃'], answer: 0 },
    { type: 'cloze', before: '민수가 내일 비가 ', after: '.', choices: ['온대요', '오재요'], answer: 0, translation: 'Minsu dit qu’il va pleuvoir demain.' },
    { type: 'type', prompt: '📝 « les devoirs que je ferai demain »', answer: alts('내일 할 숙제') },
  ],
};

const ORAL_WRITTEN: [string, string, string][] = [
  ['🏃 action', '간대요 · 먹는대요', '간다고 해요 · 먹는다고 해요'],
  ['🏷️ état', '좋대요 · 맛있대요', '좋다고 해요 · 맛있다고 해요'],
  ['⏪ passé', '갔대요 · 했대요', '갔다고 해요 · 했다고 해요'],
  ['⏩ futur', '갈 거래요', '갈 거라고 해요'],
  ['📛 nom', '학생이래요 · 친구래요', '학생이라고 해요 · 친구라고 해요'],
];

const day92: Lesson = {
  id: 'm5-w3-d2',
  month: 5,
  week: 3,
  day: 92,
  title: 'Il a dit que… : 다고 했어요',
  summary: 'De l’oral à l’écrit : 간대요 → 간다고 해요, 좋대요 → 좋다고 해요. Au passé : 민수가 내일 비가 온다고 했어요. Le compte rendu d’interview.',
  cards: [
    { id: 'w19-ko-dago-haeyo', kind: 'grammar', ko: '간대요 = 간다고 해요', fr: 'il dit qu’il va — forme orale courte = forme écrite complète', note: '✍️ **대요** = **다고 해요** écrasé. [[먹는대요]] → [[먹는다고 해요]], [[좋대요]] → [[좋다고 해요]], [[갈 거래요]] → [[갈 거라고 해요]]. Règle : [[다고 해요|p:report-full]]' },
    { id: 'w19-ko-onda-go-haesseoyo', kind: 'phrase', ko: '민수가 내일 비가 온다고 했어요', fr: 'Minsu a dit qu’il pleuvrait demain.', note: '🌧️ Minsu a dit [[내일 비가 와요]] → on garde **son** temps : [[온다고]]. Seul le dernier verbe est au passé : [[했어요]].' },
    { id: 'w19-ko-joahandago', kind: 'phrase', ko: '지훈이는 축구를 하는 것을 좋아한다고 했어요', fr: 'Jihoon a dit qu’il aimait jouer au foot.', note: '🎤 Compte rendu d’interview. [[좋아해요]] (action) → [[좋아한다고]].' },
    { id: 'w19-ko-eoryeopdago', kind: 'phrase', ko: '수학이 너무 어렵다고 했어요', fr: 'Il a dit que les maths étaient trop difficiles.', note: '🏷️ État : radical + **다고**, sans changement ([[어렵다고]], [[좋다고]], [[맛있다고]]).' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'De l’oral à l’écrit ✍️' },
        { type: 'tip', text: 'Tu te souviens de [[간대요|p:report]] ? C’est la version **orale et rapide**. Dans un compte rendu écrit, on écrit la version **complète**.', mood: 'happy' },
        { type: 'table', head: ['', '🗣️ Oral', '✍️ Écrit'], rows: ORAL_WRITTEN.map(([k, o, w]) => [k, o.split(' · ').map((x) => `[[${x}]]`).join(' · '), w.split(' · ').map((x) => `[[${x}]]`).join(' · ')]) },
        { type: 'text', text: 'Le secret : **대요**, c’est simplement **다고 해요** écrasé (다고 해 → 대). Pour écrire, on « déplie » : 대요 → **다고 해요**. Et **래요** = **라고 해요** : c’est le **라고** de [[뭐라고 했어요?]] !' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Il a dit… : 다고 했어요 ⏪' },
        { type: 'text', text: 'Dans un compte rendu, la personne a **déjà** parlé : [[해요]] → [[했어요]].' },
        { type: 'breakdown', segments: [
          { ko: '민수', role: 'subject', gloss: 'Minsu', particle: { ko: '가', key: 'subject' } },
          { ko: '내일 비가 온다고', role: 'other', gloss: 'qu’il pleut demain' },
          { ko: '했어요', role: 'verb', gloss: 'a dit' },
        ], translation: 'Minsu a dit qu’il pleuvrait demain.', note: 'Minsu a dit : [[내일 비가 와요.]] On garde **ses** mots ([[온다고]]) ; seul [[했어요]] passe au passé.' },
        { type: 'tip', text: '⚠️ En français, le temps change (« il pleut » → « il a dit qu’il **pleuvrait** »). En coréen, **jamais** : on garde le temps de la phrase d’origine.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie l’oral à l’écrit.', pairs: [
      ['먹는대요', '먹는다고 해요'],
      ['좋대요', '좋다고 해요'],
      ['갔대요', '갔다고 해요'],
      ['갈 거래요', '갈 거라고 해요'],
    ] } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Déplie la forme orale. Touche une case vide.', head: ['🗣️ Oral', '✍️ Écrit'], rows: [
      ['[[간대요]]', blank('간다고 해요')],
      ['[[읽는대요]]', blank('읽는다고 해요')],
      ['[[바쁘대요]]', blank('바쁘다고 해요')],
      ['[[했대요]]', blank('했다고 해요')],
      ['[[학생이래요]]', blank('학생이라고 해요')],
    ], explain: '대요 → **다고 해요** · 래요 → **라고 해요**.' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🌧️ « Minsu a dit qu’il pleuvrait demain. »', choices: ['민수가 내일 비가 온다고 했어요.', '민수가 내일 비가 왔다고 했어요.', '민수가 내일 비가 온다고 해요.'], answer: 0, explain: 'Minsu a dit [[비가 와요]] → [[온다고]] ; il l’a **déjà** dit → [[했어요]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le compte rendu d’interview 🎤' },
        { type: 'text', text: 'Activité de la classe : interviewer un camarade, puis **écrire** ce qu’il a dit. Sua interviewe Jihoon :' },
        { type: 'dialog', lines: [
          { who: '수아', ko: '취미가 뭐예요?' },
          { who: '지훈', ko: '축구를 하는 것을 좋아해요.' },
          { who: '수아', ko: '무슨 과목을 가장 좋아해요?' },
          { who: '지훈', ko: '체육을 가장 좋아해요. 수학은 너무 어려워요.' },
          { who: '수아', ko: '주말에 뭐 할 거예요?' },
          { who: '지훈', ko: '아버지하고 같이 축구를 볼 거예요.' },
        ] },
        { type: 'text', text: 'Le compte rendu de Sua :' },
        { type: 'table', head: ['✍️ Le compte rendu de Sua'], rows: [
          ['[[지훈이는 축구를 하는 것을 좋아한다고 했어요.]] [[체육을 가장 좋아한다고 했어요.]] [[하지만 수학은 너무 어렵다고 했어요.]] [[그리고 주말에 아버지하고 같이 축구를 볼 거라고 했어요.]]'],
        ] },
        { type: 'tip', text: 'Après un **nom** : [[이라고|p:report-full]] / [[라고]] ([[학생이라고 했어요]], [[친구라고 했어요]]). Et pour citer **mot pour mot**, on met des guillemets + 라고 : [[민수가 “도서관에 가요”라고 했어요.]]', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’a dit Jihoon des maths ?', choices: ['Que c’était trop difficile.', 'Que c’était sa matière préférée.', 'Qu’il en ferait ce week-end.'], answer: 0, explain: '[[수학은 너무 어렵다고 했어요.]]' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: 'Jihoon : [[체육을 가장 좋아해요.]] →', before: '지훈이는 체육을 가장 ', after: ' 했어요.', choices: ['좋아한다고', '좋아하다고', '좋아해다고'], answer: 0, explain: '[[좋아하다]] est une action → **ㄴ다고** : [[좋아한다고]].' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: 'Jihoon : [[수학은 너무 어려워요.]] →', before: '수학은 너무 ', after: ' 했어요.', choices: ['어렵다고', '어려운다고', '어려워다고'], answer: 0, explain: 'État → radical + **다고**, sans changement : [[어렵다고]].' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Minsu a dit qu’il pleuvrait demain.', tiles: ['민수가', '내일', '비가', '온다고', '했어요.'], distractors: ['왔다고', '온대요'] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '주말에 축구를 볼 거라고 했어요', choices: ['주말에 축구를 볼 거라고 했어요', '주말에 축구를 봤다고 했어요', '주말에 축구를 본다고 했어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🌧️ « Minsu a dit qu’il pleuvrait demain. »', answer: alts('민수가 내일 비가 온다고 했어요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ton compte rendu : un ami t’a parlé de son week-end. Écris ce qu’il a dit avec [[다고 했어요]]. [[쓰세요!]]', placeholder: '수아가 주말에 도서관에 갔다고 했어요.', mustInclude: [SAID_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '민수가 내일 비가 온다고 했어요. 그래서 우산을 가져갈 거예요.', fr: 'Minsu a dit qu’il pleuvrait demain. Alors j’emporterai un parapluie.', prompt: 'Mise en pratique : dis-le à voix haute 🌧️' } },
  ],
  interleave: [
    { type: 'type', prompt: '🤔 « Je pense que ce livre est intéressant. »', answer: alts('이 책이 재미있는 것 같아요') },
    { type: 'mcq', prompt: '[[어렵다]] + 것 같아요 →', choices: ['어려운 것 같아요', '어렵은 것 같아요', '어렵는 것 같아요'], answer: 0 },
    { type: 'cloze', before: '선생님이 ', after: '.', choices: ['앉으래요', '앉재요'], answer: 0, translation: 'Le professeur dit de s’asseoir.' },
    { type: 'mcq', prompt: '📝 [[시험]] =', choices: ['examen, contrôle', 'devoirs', 'matière'], answer: 0 },
  ],
};

const day93: Lesson = {
  id: 'm5-w3-d3',
  month: 5,
  week: 3,
  day: 93,
  title: 'Il a demandé si… : 냐고 물어봤어요',
  summary: 'Rapporter une question : 숙제를 다 했어요? → 선생님이 숙제를 다 했냐고 물어보셨어요. Radical + 냐고. Nouveaux : 묻다 (물어요), 물어보다, 대답하다.',
  cards: [
    { id: 'w19-ko-nyago', kind: 'grammar', ko: '숙제를 했냐고 물어봤어요', fr: 'il a demandé si j’avais fait les devoirs — question rapportée : radical + 냐고', note: '❓ Radical + **냐고** ([[가냐고]], [[먹냐고]], [[좋냐고]]) ; passé [[했냐고]] ; futur [[갈 거냐고]]. Puis [[물어봤어요]]. Règle : [[냐고|p:ask]]' },
    { id: 'w19-ko-mutda', kind: 'vocab', ko: '묻다 → 물어요 · 물어봐요', fr: 'demander (poser une question)', note: '🎧 [[ㄷ|p:irreg-d]] → ㄹ, comme [[듣다]] → [[들어요]]. À l’oral, on dit surtout [[물어봐요]] (묻다 + 보다). ≠ [[주세요]] (demander une chose).' },
    { id: 'w19-ko-mureobosyeosseoyo', kind: 'phrase', ko: '선생님이 숙제를 다 했냐고 물어보셨어요', fr: 'Le professeur a demandé si nous avions fini les devoirs.', note: '👩‍🏫 Pour le professeur : [[물어봤어요]] → [[물어보셨어요|p:honor]].' },
    { id: 'w19-ko-daedaphaeyo', kind: 'vocab', ko: '대답해요', fr: 'répondre (대답하다)', note: '🙋 [[질문]] → [[대답]]. [[아직 안 했다고 대답했어요.]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Il a demandé si… ❓' },
        { type: 'tip', text: 'Hier, on rapportait une **affirmation** ([[다고 했어요|p:report-full]]). Et si la personne a posé une **question** ?', mood: 'happy' },
        { type: 'text', text: 'Verbe nouveau : [[묻다|t:demander (une question)]]. Son ㄷ devient ㄹ, comme [[듣다|p:irreg-d]] → [[들어요]] : [[물어요]]. À l’oral, on dit surtout [[물어봐요]] (묻다 + [[보다|p:try]]).' },
        { type: 'text', text: 'Le schéma de la bulle :' },
        { type: 'table', head: ['💬 La bulle', '→', '✍️ Le compte rendu'], rows: [
          ['👩‍🏫 [[숙제를 다 했어요?]]', '→', '[[선생님이 숙제를 다 했냐고 물어보셨어요.]]'],
          ['👦 [[어디에 가요?]]', '→', '[[민수가 어디에 가냐고 물어봤어요.]]'],
        ] },
        { type: 'breakdown', segments: [
          { ko: '선생님', role: 'subject', gloss: 'le professeur', particle: { ko: '이', key: 'subject' } },
          { ko: '숙제', role: 'object', gloss: 'les devoirs', particle: { ko: '를', key: 'object' } },
          { ko: '다 했냐고', role: 'other', gloss: 'si (on) avait tout fait' },
          { ko: '물어보셨어요', role: 'verb', gloss: 'a demandé (respect)' },
        ], translation: 'Le professeur a demandé si nous avions fini les devoirs.', note: 'Pour le professeur, le verbe prend [[시|p:honor]] : [[물어보셨어요]].' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La règle : radical + 냐고 🔑' },
        { type: 'table', head: ['', '💬 Question', '✍️ Rapportée'], rows: [
          ['🏃 action / 🏷️ état', '[[가요?]] · [[먹어요?]] · [[좋아요?]]', '[[가냐고]] · [[먹냐고]] · [[좋냐고]]'],
          ['⏪ passé', '[[했어요?]] · [[갔어요?]]', '[[했냐고]] · [[갔냐고]]'],
          ['⏩ futur', '[[갈 거예요?]]', '[[갈 거냐고]]'],
          ['❓ mot interrogatif', '[[어디에 가요?]] · [[뭐 해요?]]', '[[어디에 가냐고]] · [[뭐 하냐고]]'],
        ] },
        { type: 'text', text: 'Beaucoup plus simple que 다고 : **aucun** changement, voyelle ou consonne, action ou état. Les mots [[어디]], [[뭐]], [[왜]] restent à leur place.' },
        { type: 'tip', text: '🔵 Affirmation → **다고** [[했어요]] · ❓ Question → **냐고** [[물어봤어요]]. Dans les livres, tu verras aussi [[먹느냐고]] ou [[좋으냐고]] : même sens, style plus ancien.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Affirmation ou question rapportée ?', buckets: ['🔵 il a dit que…', '❓ il a demandé si…'], items: [
      { text: '간다고 했어요', bucket: 0 }, { text: '좋다고 했어요', bucket: 0 }, { text: '했다고 했어요', bucket: 0 }, { text: '먹는다고 했어요', bucket: 0 },
      { text: '가냐고 물어봤어요', bucket: 1 }, { text: '좋냐고 물어봤어요', bucket: 1 }, { text: '했냐고 물어봤어요', bucket: 1 }, { text: '먹냐고 물어봤어요', bucket: 1 },
    ] } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Rapporte la question. Touche une case vide.', head: ['💬 Question', '✍️ + 물어봤어요'], rows: [
      ['[[가요?]]', blank('가냐고')],
      ['[[먹어요?]]', blank('먹냐고')],
      ['[[바빠요?]]', blank('바쁘냐고')],
      ['[[했어요?]]', blank('했냐고')],
      ['[[뭐 해요?]]', blank('뭐 하냐고')],
    ], explain: 'Radical + **냐고** : [[가냐고]], [[먹냐고]], [[바쁘냐고]] (radical [[바쁘다]]) · passé [[했냐고]].' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '👩‍🏫 [[숙제를 다 했어요?]] → Le professeur…', choices: ['숙제를 다 했냐고 물어보셨어요.', '숙제를 다 했다고 물어보셨어요.', '숙제를 다 하냐고 했어요.'], answer: 0, explain: 'Question → **냐고** ; passé [[했]] + 냐고 ; et le verbe [[물어보셨어요]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le manuel de la classe 📗' },
        { type: 'text', text: 'Activité de la classe : des **exercices de transformation**. Ce matin, le professeur a posé des questions à Louis. Mot nouveau : [[대답해요|t:répondre]].' },
        { type: 'dialog', lines: [
          { who: '선생님', ko: '루이, 숙제를 다 했어요?' },
          { who: '루이', ko: '아니요, 아직 안 했어요. 미안해요.' },
          { who: '선생님', ko: '왜 안 했어요?' },
          { who: '루이', ko: '어제 배가 아팠어요.' },
          { who: '선생님', ko: '그래요? 지금은 안 아파요?' },
        ] },
        { type: 'text', text: 'Le compte rendu de Nabi :' },
        { type: 'table', head: ['✍️ Le compte rendu de Nabi'], rows: [
          ['[[선생님이 루이한테 숙제를 다 했냐고 물어보셨어요.]] [[루이는 아직 안 했다고 대답했어요.]] [[선생님이 왜 안 했냐고 물어보셨어요.]] [[루이는 어제 배가 아팠다고 했어요.]]'],
        ] },
        { type: 'tip', text: 'Petit mot : [[한테|t:à (quelqu’un)]]. Et **다고** marche aussi avec [[대답했어요]] !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’a répondu Louis ?', choices: ['Qu’il ne les avait pas encore faits.', 'Qu’il avait tout fini.', 'Qu’il les ferait demain.'], answer: 0, explain: '[[루이는 아직 안 했다고 대답했어요.]]' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '👩‍🏫 [[왜 안 했어요?]] →', before: '선생님이 왜 안 ', after: ' 물어보셨어요.', choices: ['했냐고', '했다고', '하재요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Le professeur a demandé si nous avions fini les devoirs.', tiles: ['선생님이', '숙제를', '다', '했냐고', '물어보셨어요.'], distractors: ['했다고', '대답했어요.'] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '민수가 어디에 가냐고 물어봤어요', choices: ['민수가 어디에 가냐고 물어봤어요', '민수가 도서관에 간다고 했어요', '민수가 어디에 갔냐고 물어봤어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '👩‍🏫 « Le professeur a demandé si nous avions fini les devoirs. »', answer: alts('선생님이 숙제를 다 했냐고 물어보셨어요', '선생님이 숙제를 다 했냐고 물어봤어요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Un ami t’a posé une question ce matin. Rapporte-la avec [[냐고]] + [[물어봤어요]]. [[쓰세요!]]', placeholder: '수아가 주말에 뭐 할 거냐고 물어봤어요.', mustInclude: [ASKED_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '선생님이 숙제를 다 했냐고 물어보셨어요. 그래서 다 했다고 대답했어요.', fr: 'Le professeur a demandé si nous avions fini les devoirs. Alors j’ai répondu que oui.', prompt: 'Mise en pratique : dis-le à voix haute 👩‍🏫' } },
  ],
  interleave: [
    { type: 'type', prompt: '✍️ [[간대요]] → forme écrite', answer: alts('간다고 해요') },
    { type: 'mcq', prompt: '🤔 « Il me semble qu’il fait froid. »', choices: ['날씨가 추운 것 같아요.', '날씨가 춥는 것 같아요.', '날씨가 추워요.'], answer: 0 },
    { type: 'cloze', before: '지훈이는 수학이 너무 ', after: ' 했어요.', choices: ['어렵다고', '어렵냐고'], answer: 0, translation: 'Jihoon a dit que les maths étaient trop difficiles.' },
    { type: 'type', prompt: '« ce que j’ai étudié hier »', answer: alts('어제 공부한 내용') },
  ],
};

const day94: Lesson = {
  id: 'm5-w3-d4',
  month: 5,
  week: 3,
  day: 94,
  title: 'Le débat : plus de récré ?',
  summary: 'Débattre en deux phrases : 저는 …것 같아요 + 지훈이가 …다고 했어요. D’accord : 저도 그렇게 생각해요, 맞아요. Supposer : 좋을 것 같아요. Nouveaux : 길어요, 짧아요, 생각.',
  cards: [
    { id: 'w19-ko-gireoyo-jjalbayo', kind: 'vocab', ko: '길어요 · 짧아요', fr: 'c’est long · c’est court (길다 · 짧다)', note: '📏 Devant un nom : [[긴]] (ㄹ tombe, comme [[논]]) · [[짧은]] [짤븐]. [[쉬는 시간이 너무 짧은 것 같아요.]]' },
    { id: 'w19-ko-je-saenggageneun', kind: 'phrase', ko: '제 생각에는…', fr: 'à mon avis…', note: '💭 [[생각|t:pensée, idée]] · [[생각해요]] = je pense. [[제 생각에는 쉬는 시간이 짧은 것 같아요.]]' },
    { id: 'w19-ko-geureoke-saenggak', kind: 'phrase', ko: '저도 그렇게 생각해요', fr: 'Je pense comme toi. (moi aussi, je pense ainsi)', note: '🤝 Pour être **d’accord**. Aussi : [[맞아요!]] (c’est vrai). Pas d’accord : [[하지만 저는…]]' },
    { id: 'w19-ko-majayo', kind: 'vocab', ko: '맞아요', fr: 'c’est vrai, exactement', note: '✅ [[맞아요! 쉬는 시간이 너무 짧아요.]]' },
    { id: 'w19-ko-ol-geot-gatayo', kind: 'grammar', ko: '비가 올 것 같아요', fr: 'on dirait qu’il va pleuvoir — supposition : (으)ㄹ 것 같아요', note: '🔮 Pour **deviner** ce qui va arriver : forme du futur ([[올]], [[좋을]], [[재미있을]]) + [[것 같아요|p:seem]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le débat de la classe 🗣️' },
        { type: 'tip', text: 'Aujourd’hui, on **débat** ! Tu as tous les outils : [[것 같아요|p:seem]] pour ton avis, [[다고 했어요|p:report-full]] pour citer un camarade.', mood: 'happy' },
        { type: 'text', text: 'La question du jour : [[쉬는 시간이 더 길면 좋겠어요?|t:Ce serait bien que la récré soit plus longue ?]] Nouveaux mots :' },
        { type: 'table', head: ['', 'Mot', ''], rows: [
          ['📏', '[[길어요]] · [[짧아요]]', 'c’est long · c’est court (devant un nom : [[긴]] · [[짧은]])'],
          ['💭', '[[생각해요]] · [[제 생각에는…]]', 'je pense · à mon avis…'],
          ['🤝', '[[저도 그렇게 생각해요]] · [[맞아요]]', 'je pense comme toi · c’est vrai'],
          ['🙅', '[[하지만 저는…]]', 'mais moi… (pas d’accord)'],
        ] },
        { type: 'liaison', items: [
          { written: '짧아요', spoken: '짤바요', fr: 'court' },
          { written: '생각에는', spoken: '생가게는', fr: 'à mon avis' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque outil à son usage.', pairs: [
      ['저도 그렇게 생각해요', 'je suis d’accord'],
      ['하지만 저는…', 'je ne suis pas d’accord'],
      ['제 생각에는…', 'à mon avis…'],
      ['짧은 것 같아요', 'il me semble que c’est court'],
    ] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le débat 🔔' },
        { type: 'dialog', lines: [
          { who: '선생님', ko: '여러분, 쉬는 시간이 더 길면 좋겠어요?' },
          { who: '지훈', ko: '네! 쉬는 시간이 너무 짧은 것 같아요. 더 놀면 공부를 더 잘할 수 있어요.' },
          { who: '수아', ko: '저도 그렇게 생각해요. 친구하고 노는 시간이 정말 중요한 것 같아요.' },
          { who: '민수', ko: '하지만 저는 지금이 좋은 것 같아요. 쉬는 시간이 길면 수업이 늦게 끝나요.' },
          { who: '나비', ko: '지훈이는 쉬는 시간이 너무 짧다고 했어요. 그리고 민수는 수업이 늦게 끝난다고 했어요.' },
          { who: '나비', ko: '제 생각에는… 쉬는 시간이 오 분 더 길면 좋을 것 같아요! 🦋' },
          { who: '선생님', ko: '맞아요! 정말 좋은 생각이에요.' },
        ] },
        { type: 'tip', text: 'Petits mots : [[중요하다|t:être important]] · [[늦게|t:tard]]. Nabi devine l’avenir avec [[좋을 것 같아요]] : forme du **futur** + 것 같아요 = « ça serait sûrement… », comme [[비가 올 것 같아요]] (on dirait qu’il va pleuvoir).', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[지훈이가 뭐라고 했어요?]]', choices: ['쉬는 시간이 너무 짧다고 했어요.', '수업이 늦게 끝난다고 했어요.', '지금이 좋다고 했어요.'], answer: 0, explain: '[[쉬는 시간이 너무 짧은 것 같아요.]] → [[짧다고 했어요]] (état : radical + 다고).' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qui n’est **pas** d’accord avec Jihoon ?', choices: ['Minsu', 'Sua', 'Nabi'], answer: 0, explain: '[[하지만 저는 지금이 좋은 것 같아요.]]' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: 'Minsu : [[수업이 늦게 끝나요.]] →', before: '민수는 수업이 늦게 ', after: ' 했어요.', choices: ['끝난다고', '끝나다고', '끝나냐고'], answer: 0, explain: '[[끝나다]] est une action → ㄴ glissé : [[끝난다고]].' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🔮 « On dirait qu’il va pleuvoir. »', before: '비가 ', after: ' 것 같아요.', choices: ['올', '온', '와'], answer: 0, explain: 'Pour deviner l’avenir : forme du futur [[올]] + [[것 같아요]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La trame : deux phrases 🧩' },
        { type: 'table', head: ['', 'Trame', 'Exemple'], rows: [
          ['1️⃣ Mon avis', '저는 / 저도 … 것 같아요', '[[저도 쉬는 시간이 짧은 것 같아요.]]'],
          ['2️⃣ Je cite', '[camarade]이/가 … 다고 했어요', '[[지훈이가 더 놀면 공부를 더 잘할 수 있다고 했어요.]]'],
          ['🙅 Pas d’accord', '하지만 저는 … 것 같아요', '[[하지만 저는 지금이 좋은 것 같아요.]]'],
        ] },
        { type: 'tip', text: '⚠️ Pour citer une **phrase**, c’est **다고** ([[짧다고]], [[끝난다고]]). **라고** seulement après un nom ([[학생이라고]]) ou une citation entre guillemets.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'order', translation: 'Moi aussi, il me semble que la récré est courte.', tiles: ['저도', '쉬는', '시간이', '짧은', '것', '같아요.'], distractors: ['짧는', '짧다고'] } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Jihoon a dit que la récré était trop courte.', tiles: ['지훈이가', '쉬는', '시간이', '너무', '짧다고', '했어요.'], distractors: ['짧은', '짧냐고'] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '저도 그렇게 생각해요', choices: ['저도 그렇게 생각해요', '하지만 저는 지금이 좋아요', '제 생각에는 짧은 것 같아요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Prends la parole 1/2 — ton **avis** sur la récré, avec [[것 같아요]]. [[쓰세요!]]', placeholder: '제 생각에는 쉬는 시간이 너무 짧은 것 같아요.', mustInclude: [SEEM_ANY] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Prends la parole 2/2 — **cite** un camarade du débat avec [[다고 했어요]].', placeholder: '민수는 수업이 늦게 끝난다고 했어요.', mustInclude: [SAID_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '저도 그렇게 생각해요. 지훈이가 쉬는 시간이 너무 짧다고 했어요. 제 생각에는 쉬는 시간이 더 길면 좋을 것 같아요.', fr: 'Je pense comme toi. Jihoon a dit que la récré était trop courte. À mon avis, ce serait bien que la récré soit plus longue.', prompt: 'Mise en pratique : prends la parole dans le débat 🗣️' } },
  ],
  interleave: [
    { type: 'type', prompt: '❓ [[어디에 가요?]] → rapporte la question (… 물어봤어요)', answer: alts('어디에 가냐고 물어봤어요') },
    { type: 'mcq', prompt: '[[묻다]] au présent poli →', choices: ['물어요', '묻어요', '묻아요'], answer: 0 },
    { type: 'cloze', before: '이 그림이 정말 ', after: ' 것 같아요.', choices: ['예쁜', '예쁘는'], answer: 0, translation: 'Je trouve ce dessin vraiment joli.' },
    { type: 'type', prompt: '« le livre que je lirai demain »', answer: alts('내일 읽을 책') },
  ],
};

const DICTATION = [
  '이 책이 재미있는 것 같아요',
  '날씨가 추운 것 같아요',
  '민수가 내일 비가 온다고 했어요',
  '지훈이가 쉬는 시간이 짧다고 했어요',
  '선생님이 숙제를 다 했냐고 물어보셨어요',
];

const day95: Lesson = {
  id: 'm5-w3-d5',
  month: 5,
  week: 3,
  day: 95,
  title: 'Bilan & Petite évaluation n°19',
  summary: 'L’atelier de transformation (direct → indirect écrit), la dictée de la classe, la petite évaluation n°19 (opinion, style indirect, oral) et le résumé du débat entièrement en coréen.',
  cards: [],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Fin de la semaine 19 🎓' },
        { type: 'tip', text: 'Cette semaine, tu as appris à **nuancer** ([[것 같아요]]) et à **rapporter par écrit** ([[다고 했어요]], [[냐고 물어봤어요]]). D’abord, l’**atelier de transformation**.', mood: 'encourage' },
        { type: 'table', head: ['💬 Direct', '✍️ Indirect écrit'], rows: [
          ['🔵 affirmation [[가요.]]', '[[간다고 했어요]]'],
          ['🏷️ état [[좋아요.]]', '[[좋다고 했어요]]'],
          ['⏪ passé [[했어요.]]', '[[했다고 했어요]]'],
          ['📛 nom [[학생이에요.]]', '[[학생이라고 했어요]]'],
          ['❓ question [[가요?]]', '[[가냐고 물어봤어요]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Atelier : passe au style indirect écrit. Touche une case vide.', head: ['Qui ?', '💬 Direct', '✍️ Indirect'], rows: [
      ['[[수아]]', '[[책을 읽어요.]]', blank('읽는다고 했어요')],
      ['[[지훈]]', '[[배가 고파요.]]', blank('고프다고 했어요')],
      ['[[민수]]', '[[도서관에 갔어요.]]', blank('갔다고 했어요')],
      ['[[선생님]]', '[[숙제를 했어요?]]', blank('했냐고 물어보셨어요')],
    ], explain: 'Action → ㄴ/는다고 · état → 다고 ([[고프다]] → [[고프다고]]) · passé → 았/었다고 · question → 냐고.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La dictée ✏️' },
        { type: 'text', text: 'Cinq phrases. [[들으세요!]] Puis [[쓰세요!]]' },
      ],
    },
    ...DICTATION.map((s, i) => ({
      kind: 'practice' as const,
      exercise: { type: 'type' as const, prompt: `Dictée ${i + 1}/${DICTATION.length}`, audio: s, answer: alts(s) },
    })),
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Grammaire de la classe : transforme les trois citations. Touche une case vide.', head: ['💬 Citation', '✍️ Style indirect écrit'], rows: [
      ['민수 : [[학교에 가요.]]', blank('민수가 학교에 간다고 했어요', '민수는 학교에 간다고 했어요')],
      ['수아 : [[이 영화가 재미있어요.]]', blank('수아가 이 영화가 재미있다고 했어요', '수아는 이 영화가 재미있다고 했어요', '수아가 이 영화는 재미있다고 했어요')],
      ['지훈 : [[주말에 뭐 해요?]]', blank('지훈이가 주말에 뭐 하냐고 물어봤어요', '지훈이는 주말에 뭐 하냐고 물어봤어요')],
    ] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Petite évaluation n°19' },
        { type: 'text', text: 'Trois parties, sans piège ni chrono. Chaque erreur reviendra simplement en révision.' },
        { type: 'table', head: ['Partie', 'Contenu'], rows: [
          ['A', 'Expression d’opinion (écrit)'],
          ['B', 'Style indirect formel (écrit)'],
          ['C', 'Expression orale'],
        ] },
        { type: 'tip', text: '**A — Nuancer.** Ajoute [[것 같아요]] à chaque affirmation.', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'type', prompt: '**A · 1/2** — [[날씨가 춥다]] → 🤔', answer: alts('날씨가 추운 것 같아요') } },
    { kind: 'practice', exercise: { type: 'type', prompt: '**A · 2/2** — [[시험이 어렵다]] → 🤔', answer: alts('시험이 어려운 것 같아요') } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**B — Style indirect.** Complète avec la bonne terminaison rapportée.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'type', prompt: '**B · 1/2** — 민수 : « [[도서관에 가요.]] » → 민수가 도서관에 ______.', answer: alts('간다고 했어요') } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '**B · 2/2** — 선생님 : « [[숙제를 다 했어요?]] »', before: '선생님이 숙제를 다 ', after: ' 물어보셨어요.', choices: ['했냐고', '했다고', '한다고'], answer: 0 } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**C — À l’oral.** Le professeur montre un dessin et demande [[이 그림이 어때요?]] Réponds avec un avis nuancé.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 1/3** — 🖼️ [[이 그림이 어때요?]]', audio: '이 그림이 어때요?', choices: ['정말 예쁜 것 같아요.', '정말 예쁘는 것 같아요.', '정말 예쁘다고 물어봤어요.'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'write', prompt: '**C · 2/3** — 🖼️ [[이 그림이 어때요?]] Prépare ta réponse (avec [[것 같아요]]).', placeholder: '정말 예쁜 것 같아요. 그림에 큰 나무가 있어요.', mustInclude: [SEEM_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '이 그림이 어때요? 정말 예쁜 것 같아요. 그림에 큰 나무가 있어서 시원한 것 같아요.', fr: 'Comment trouves-tu ce dessin ? Je le trouve vraiment joli. Il y a un grand arbre, alors il a l’air frais.', prompt: '**C · 3/3** — Dis-le à voix haute, puis écoute le modèle. (Tu entendras aussi [[매우|t:très (écrit)]] = [[정말]].)' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le cahier de la classe 📖' },
        { type: 'text', text: 'Le **résumé du débat**, écrit par Nabi, puis la réponse du professeur. **Entièrement en coréen**. Touche une bulle pour l’entendre.' },
        { type: 'dialog', lines: [
          { who: '📖', ko: '금요일이에요. 나비가 어제 한 토론을 공책에 썼어요.' },
          { who: '📔 나비', ko: '선생님이 쉬는 시간이 더 길면 좋겠냐고 물어보셨어요.' },
          { who: '📔 나비', ko: '지훈이는 쉬는 시간이 너무 짧다고 했어요. 수아도 친구하고 노는 시간이 중요하다고 했어요.' },
          { who: '📔 나비', ko: '하지만 민수는 수업이 늦게 끝난다고 했어요.' },
          { who: '📔 나비', ko: '제 생각에는 오 분 더 길면 좋을 것 같아요.' },
          { who: '선생님', ko: '나비야, 정말 잘 썼어요! 그래서 교장 선생님한테 물어봤어요.' },
          { who: '지훈', ko: '교장 선생님이 뭐라고 하셨어요?' },
          { who: '선생님', ko: '다음 주부터 쉬는 시간이 오 분 더 길 거라고 하셨어요!' },
          { who: '아이들', ko: '와! 정말 좋은 것 같아요! 🦋' },
        ] },
        { type: 'tip', text: 'Petits mots : [[토론|t:débat]] · [[교장 선생님|t:le directeur, la directrice]] · [[부터|t:à partir de]] · [[하셨어요|t:a dit (respect)]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’a dit Sua pendant le débat ?', choices: ['Que le temps passé à jouer avec les amis est important.', 'Que les cours finissent tard.', 'Que la récré est trop longue.'], answer: 0, explain: '[[수아도 친구하고 노는 시간이 중요하다고 했어요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’a fait le professeur après avoir lu le résumé ?', choices: ['Il a posé la question au directeur.', 'Il a donné des devoirs.', 'Il a lancé un nouveau débat.'], answer: 0, explain: '[[교장 선생님한테 물어봤어요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Et la décision ?', choices: ['La récré sera plus longue de 5 minutes à partir de la semaine prochaine.', 'Rien ne change.', 'La récré sera plus courte.'], answer: 0, explain: '[[다음 주부터 쉬는 시간이 오 분 더 길 거라고 하셨어요!]]' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ton bilan de la semaine 19 🎓' },
        { type: 'table', head: ['Je sais…', 'Exemple'], rows: [
          ['🤔 donner un avis [[nuancé|p:seem]]', '[[이 책이 재미있는 것 같아요.]]'],
          ['🔮 deviner ce qui va arriver', '[[비가 올 것 같아요.]]'],
          ['✍️ rapporter une affirmation [[à l’écrit|p:report-full]]', '[[민수가 내일 비가 온다고 했어요.]]'],
          ['❓ rapporter une [[question|p:ask]]', '[[선생님이 숙제를 다 했냐고 물어보셨어요.]]'],
          ['🗣️ débattre en deux phrases', '[[저도 그렇게 생각해요.]] · [[하지만 저는…]]'],
        ] },
        { type: 'tip', text: '[[다음 주도 재미있을 것 같아요!|t:la semaine prochaine aussi sera sûrement intéressante !]] 🦋 À lundi !', mood: 'happy' },
      ],
    },
  ],
};

export const m5w3: Lesson[] = [day91, day92, day93, day94, day95];
