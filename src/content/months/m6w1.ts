import type { GridBlank, Lesson } from '../types';

const COLLAPSE: [RegExp, string][] = [
  [/러 (가|와|갈|갔|왔|나가|오)/g, '러$1'],
  [/ 거예요/g, '거예요'],
  [/그다음에/g, '그 다음에'],
];
const alts = (...xs: string[]): string[] => {
  const out = new Set(xs);
  for (const [re, to] of COLLAPSE) for (const s of [...out]) out.add(s.replace(re, to));
  for (const s of [...out]) out.add(s.replace(/[.,!?] /g, ' '));
  for (const s of [...out]) out.add(s.replace(/[.!?]$/, ''));
  return [...out];
};
const blank = (...s: string[]): GridBlank => ({ answer: alts(...s) });

const REO_ANY = '러 가|러가|러 와|러와|러 갈|러갈|러 갔|러갔|러 왔|러왔|러 나가|러나가|러 오|러오';
const RYEOGO_ANY = '려고';

const day101: Lesson = {
  id: 'm6-w1-d1',
  month: 6,
  week: 1,
  day: 101,
  title: 'Aller pour… : 읽으러 가요',
  summary: 'Le but d’un déplacement : [lieu]에 [action]-(으)러 가요. 도서관에 책을 읽으러 가요 · 식당에 점심을 먹으러 가요 · 운동장에 놀러 가요. Nouveau : 와요 (venir).',
  cards: [
    { id: 'w21-ko-reo-gayo', kind: 'grammar', ko: '먹으러 가요 · 보러 가요', fr: 'je vais manger · je vais voir (j’y vais pour…) — but : radical + (으)러 가요', note: '🎯 Voyelle ou ㄹ → **러** ([[보러]], [[놀러]], [[공부하러]]) ; consonne → **으러** ([[먹으러]], [[읽으러]]) ; ㄷ → [[들으러]]. Seulement devant [[가요]], [[와요]], [[나가요]]. Règle : [[러|p:purpose-go]]' },
    { id: 'w21-ko-wayo', kind: 'vocab', ko: '와요', fr: 'je viens, il / elle vient (오다)', note: '🚶 [[오다]] → [[와요]] (comme [[보다]] → [[봐요]]). Passé : [[왔어요]]. ≠ [[가요]] (je vais, je pars). C’est aussi le [[와요]] de [[비가 와요]] : « la pluie vient ».' },
    { id: 'w21-ko-dosogwan-ilgeureo', kind: 'phrase', ko: '도서관에 책을 읽으러 가요', fr: 'Je vais à la bibliothèque pour lire un livre.', note: '📚 [lieu][[에|p:place]] + [action]**(으)러** + [[가요]]. Aussi possible : [[책을 읽으러 도서관에 가요]].' },
    { id: 'w21-ko-nolleo', kind: 'phrase', ko: '놀러 가요 · 놀러 오세요', fr: 'je vais jouer (m’amuser) · viens / venez jouer (chez moi)', note: '🎈 [[놀다]] garde son ㄹ : [[놀러]]. L’invitation coréenne : [[우리 집에 놀러 오세요!|t:viens jouer chez moi !]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Pourquoi tu y vas ? 🎯' },
        { type: 'tip', text: 'Bienvenue dans le **6ᵉ et dernier mois** ! On commence par une structure qu’on entend partout dans les couloirs : **aller quelque part pour faire quelque chose**.', mood: 'happy' },
        { type: 'text', text: 'Le schéma réflexe, en trois cartes :' },
        { type: 'table', head: ['📍 Où ?', '🎯 Pour faire quoi ?', '🚶 Je bouge'], rows: [
          ['[[도서관에]]', '[[책을 읽으러]]', '[[가요.]]'],
          ['[[식당에]]', '[[점심을 먹으러]]', '[[가요.]]'],
          ['[[운동장에]]', '[[축구하러]]', '[[가요.]]'],
        ] },
        { type: 'breakdown', segments: [
          { ko: '도서관', role: 'place', gloss: 'à la bibliothèque', particle: { ko: '에', key: 'place' } },
          { ko: '책', role: 'object', gloss: 'un livre', particle: { ko: '을', key: 'object' } },
          { ko: '읽으러', role: 'other', gloss: 'pour lire' },
          { ko: '가요', role: 'verb', gloss: 'je vais' },
        ], translation: 'Je vais à la bibliothèque pour lire un livre.', note: 'Le verbe final est [[가요]] : le lieu prend donc [[에|p:place]] (destination), pas [[에서|p:action]].' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La règle : comme 면 🔵' },
        { type: 'text', text: 'Bonne nouvelle : **(으)러** suit exactement les règles de [[면|p:if]]. Remplace **면** par **러** !' },
        { type: 'table', head: ['Verbe', 'Rappel : + 면', '🎯 + 러 가요'], rows: [
          ['[[보다]]', '[[보면]]', '[[보러 가요]]'],
          ['[[공부하다]]', '[[공부하면]]', '[[공부하러 가요]]'],
          ['[[먹다]]', '[[먹으면]]', '[[먹으러 가요]]'],
          ['[[읽다]]', '[[읽으면]]', '[[읽으러 가요]]'],
          ['[[놀다]] (ㄹ)', '[[놀면]]', '[[놀러 가요]]'],
          ['[[듣다]] (ㄷ)', '[[들으면]]', '[[들으러 가요]]'],
        ] },
        { type: 'tip', text: '⚠️ Deux règles d’or. **1.** **러** ne va que devant un verbe de mouvement : [[가요]], [[와요|t:je viens]], [[나가요]]. **2.** Le temps se met **seulement** sur le dernier verbe : [[먹으러 갔어요]] (je suis allé manger), [[먹으러 갈 거예요]] (j’irai manger) — jamais ❌ 먹었으러.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '📚 « Je vais à la bibliothèque pour lire un livre. »', choices: ['도서관에 책을 읽으러 가요.', '도서관에서 책을 읽으러 가요.', '도서관에 책을 읽러 가요.'], answer: 0, explain: 'Destination → [[에]] ; consonne ㄱ → **으러** : [[읽으러]].' } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Aller pour… Touche une case vide.', head: ['Verbe', '🎯 + (으)러 가요'], rows: [
      ['[[보다]]', blank('보러 가요')],
      ['[[만나다]]', blank('만나러 가요')],
      ['[[먹다]]', blank('먹으러 가요')],
      ['[[놀다]]', blank('놀러 가요')],
      ['[[듣다]]', blank('들으러 가요')],
      ['[[운동하다]]', blank('운동하러 가요')],
    ], explain: 'Voyelle → **러** · consonne → **으러** · ㄹ reste → [[놀러]] · ㄷ → [[들으러]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les cartes de destination 🃏' },
        { type: 'text', text: 'Activité de la classe : on tire une carte **lieu** et une carte **action**, puis on dit où l’on va dans l’école, et pourquoi.' },
        { type: 'table', head: ['📍 Carte lieu', '🎯 Carte action', '🗣️ Phrase'], rows: [
          ['[[도서관]]', '[[책을 빌리다]]', '[[도서관에 책을 빌리러 가요.]]'],
          ['[[식당]]', '[[점심을 먹다]]', '[[식당에 점심을 먹으러 가요.]]'],
          ['[[운동장]]', '[[공을 차다]]', '[[운동장에 공을 차러 가요.]]'],
          ['[[공원]]', '[[친구를 만나다]]', '[[공원에 친구를 만나러 가요.]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie la carte lieu à la carte action.', pairs: [
      ['도서관에', '책을 빌리러 가요'],
      ['식당에', '점심을 먹으러 가요'],
      ['운동장에', '공을 차러 가요'],
      ['공원에', '친구를 만나러 가요'],
    ] } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🍚 « Je vais à la cantine pour déjeuner. »', before: '식당에 점심을 ', after: ' 가요.', choices: ['먹으러', '먹러', '먹어서'], answer: 0, explain: 'Consonne ㄱ → **으러**.' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Je vais au terrain de sport pour jouer au foot.', tiles: ['운동장에', '축구하러', '가요.'], distractors: ['운동장에서', '축구해서'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Venir pour… : 러 와요 🚪' },
        { type: 'text', text: 'Mot nouveau : [[와요|t:je viens]] ([[오다]], comme [[보다]] → [[봐요]]). Avec **러**, on dit pourquoi on **vient** :' },
        { type: 'dialog', lines: [
          { who: '📖', ko: '쉬는 시간이에요. 지훈이가 교실에 왔어요.' },
          { who: '선생님', ko: '지훈, 왜 왔어요?' },
          { who: '지훈', ko: '선생님, 질문하러 왔어요.' },
          { who: '선생님', ko: '좋아요. 말해 보세요.' },
          { who: '수아', ko: '지훈아, 같이 놀러 갈까요?' },
          { who: '지훈', ko: '미안하지만 지금 도서관에 책을 빌리러 가요.' },
        ] },
        { type: 'tip', text: 'L’invitation que tout le monde adore : [[우리 집에 놀러 오세요!|t:viens jouer chez moi !]] 🏠', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi Jihoon est-il venu en classe pendant la récré ?', choices: ['Pour poser une question.', 'Pour jouer avec Sua.', 'Pour emprunter un livre.'], answer: 0, explain: '[[선생님, 질문하러 왔어요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Et ensuite, où va Jihoon ?', choices: ['À la bibliothèque, pour emprunter un livre.', 'Au terrain de sport, pour jouer.', 'À la cantine, pour manger.'], answer: 0, explain: '[[도서관에 책을 빌리러 가요.]]' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '공원에 친구를 만나러 가요', choices: ['공원에 친구를 만나러 가요', '공원에서 친구를 만나요', '공원에 친구를 만나러 왔어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🍚 « Je vais à la cantine pour manger. » (avec [[밥]])', answer: alts('식당에 밥을 먹으러 가요', '밥을 먹으러 식당에 가요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Après la classe, où vas-tu, et pour quoi faire ? [lieu]에 + [action](으)러 + [[가요]]. [[쓰세요!]]', placeholder: '공원에 친구를 만나러 가요. 그리고 집에 쉬러 가요.', mustInclude: [REO_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '도서관에 책을 읽으러 가요. 그리고 식당에 점심을 먹으러 가요.', fr: 'Je vais à la bibliothèque pour lire un livre. Puis je vais à la cantine pour déjeuner.', prompt: 'Mise en pratique : dis-le à voix haute 📚' } },
  ],
  interleave: [
    { type: 'type', prompt: '👂 « J’entends un bruit. »', answer: alts('소리가 들려요') },
    { type: 'mcq', prompt: '😮 « Oh, c’est vraiment bon ! »', choices: ['정말 맛있네요!', '정말 맛있는 네요!', '정말 맛있었어요.'], answer: 0 },
    { type: 'cloze', before: '선생님이 학생들에게 책을 ', after: ' 했어요.', choices: ['읽게', '읽으러'], answer: 0, translation: 'Le professeur a fait lire le livre aux élèves.' },
    { type: 'mcq', prompt: '« le livre que je lirai demain »', choices: ['내일 읽을 책', '내일 읽은 책', '내일 읽는 책'], answer: 0 },
  ],
};

const day102: Lesson = {
  id: 'm6-w1-d2',
  month: 6,
  week: 1,
  day: 102,
  title: 'Afin de… : 잘하려고 연습해요',
  summary: 'La conjonction de but -(으)려고 avec tous les verbes : 한국어를 잘하려고 매일 연습해요. Puzzle à deux pièces, (으)러 ou (으)려고 ? Pourquoi on étudie chaque matière. Nouveaux : 열심히, 시험을 잘 보다.',
  cards: [
    { id: 'w21-ko-ryeogo', kind: 'grammar', ko: '잘하려고 · 읽으려고 + action', fr: 'pour bien faire · pour lire (afin de…) — but : radical + (으)려고, puis l’action principale', note: '🎯 Même forme que [[읽으려고 해요|p:intend]], mais suivie d’**une autre action** : [[한국어를 잘하려고 매일 연습해요]]. Avec **tous** les verbes. Règle : [[려고|p:in-order]]' },
    { id: 'w21-ko-jalharyeogo', kind: 'phrase', ko: '한국어를 잘하려고 매일 연습해요', fr: 'Je m’entraîne chaque jour pour bien parler coréen.', note: '🧩 Pièce 1 (le but) [[한국어를 잘하려고]] + pièce 2 (l’action) [[매일 연습해요]].' },
    { id: 'w21-ko-yeolsimhi', kind: 'vocab', ko: '열심히', fr: 'avec ardeur, sérieusement, à fond', note: '💪 [[열심히 공부해요]] · [[열심히 일해요]] · [[열심히 연습해요]].' },
    { id: 'w21-ko-siheom-jal', kind: 'phrase', ko: '시험을 잘 보려고 열심히 공부해요', fr: 'J’étudie sérieusement pour réussir l’examen.', note: '📝 [[시험을 봐요]] = passer un examen · [[시험을 잘 봐요]] = réussir l’examen.' },
    { id: 'w21-ko-meogeureo-galkkayo', kind: 'phrase', ko: '같이 먹으러 갈까요?', fr: 'On va manger ensemble ?', note: '🍚 Pour **proposer** ou **demander**, seulement [[러|p:purpose-go]] : ❌ 같이 먹으려고 갈까요?' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le puzzle à deux pièces 🧩' },
        { type: 'tip', text: 'Tu connais déjà [[읽으려고 해요|p:intend]] : « j’ai l’intention de lire ». Enlève [[해요]] et ajoute **une autre action** : le **려고** devient « **pour**, afin de ».', mood: 'happy' },
        { type: 'table', head: ['🎯 Pièce 1 : le but', '🏃 Pièce 2 : l’action'], rows: [
          ['[[한국어를 잘하려고]]', '[[매일 연습해요.]]'],
          ['[[시험을 잘 보려고]]', '[[열심히 공부해요.]]'],
          ['[[한국에 가려고]]', '[[한국어를 배워요.]]'],
          ['[[책을 빌리려고]]', '[[도서관에 가요.]]'],
        ] },
        { type: 'text', text: 'Mots nouveaux : [[열심히|t:avec ardeur]] · [[시험을 잘 봐요|t:réussir l’examen]] ([[시험을 봐요|t:passer un examen]]).' },
        { type: 'breakdown', segments: [
          { ko: '한국어', role: 'object', gloss: 'le coréen', particle: { ko: '를', key: 'object' } },
          { ko: '잘하려고', role: 'other', gloss: 'pour bien parler' },
          { ko: '매일', role: 'time', gloss: 'chaque jour' },
          { ko: '연습해요', role: 'verb', gloss: 'je m’entraîne' },
        ], translation: 'Je m’entraîne chaque jour pour bien parler coréen.' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: '러 ou 려고 ? 🤔' },
        { type: 'text', text: 'Mêmes règles de formation ([[가려고]], [[읽으려고]], [[놀려고]], [[들으려고]]). La différence est dans **ce qui suit** :' },
        { type: 'table', head: ['', '🚶 (으)러', '🎯 (으)려고'], rows: [
          ['Verbe qui suit', 'seulement [[가요]] · [[와요]] · [[나가요]]', '**n’importe quel** verbe'],
          ['Exemple', '[[책을 빌리러 가요.]]', '[[잘하려고 연습해요.]]'],
          ['Avec [[가요]]', '✅ [[축구하러 공원에 가요.]]', '✅ [[축구를 하려고 공원에 가요.]]'],
          ['Proposer, demander', '✅ [[같이 먹으러 갈까요?]]', '❌ jamais devant [[까요|p:suggest]], [[세요|p:seyo]], [[ㅂ시다]]'],
        ] },
        { type: 'tip', text: 'Le truc : un **déplacement** ? → **러**, le plus naturel. Une **autre action** (s’entraîner, étudier…) ? → **려고** obligatoire : ❌ 잘하러 연습해요. Le temps reste sur le dernier verbe : [[잘하려고 연습했어요]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🇰🇷 « Je m’entraîne chaque jour pour bien parler coréen. »', choices: ['한국어를 잘하려고 매일 연습해요.', '한국어를 잘하러 매일 연습해요.', '한국어를 잘해서 매일 연습해요.'], answer: 0, explain: '[[연습해요]] n’est pas un déplacement → **려고**. ([[잘해서]] = parce que je suis doué.)' } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Afin de… Touche une case vide.', head: ['Verbe', '🎯 + (으)려고'], rows: [
      ['[[잘하다]]', blank('잘하려고')],
      ['[[보다]]', blank('보려고')],
      ['[[읽다]]', blank('읽으려고')],
      ['[[놀다]]', blank('놀려고')],
      ['[[듣다]]', blank('들으려고')],
    ], explain: 'Comme [[면|p:if]] et [[러|p:purpose-go]] : voyelle → **려고**, consonne → **으려고**, ㄹ reste, ㄷ → [[들으려고]].' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Je m’entraîne chaque jour pour bien parler coréen.', tiles: ['한국어를', '잘하려고', '매일', '연습해요.'], distractors: ['잘하러', '연습하려고'] } },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Correct ou pas ?', buckets: ['✅ correct', '❌ faux'], items: [
      { text: '밥을 먹으러 식당에 가요', bucket: 0 },
      { text: '시험을 잘 보려고 공부해요', bucket: 0 },
      { text: '같이 놀러 갈까요?', bucket: 0 },
      { text: '축구를 하려고 공원에 가요', bucket: 0 },
      { text: '한국어를 잘하러 연습해요', bucket: 1 },
      { text: '같이 놀려고 갈까요?', bucket: 1 },
      { text: '책을 읽으러 공부해요', bucket: 1 },
      { text: '밥을 먹었으러 갔어요', bucket: 1 },
    ], explain: '**러** seulement devant un déplacement, jamais au passé ; **려고** jamais devant [[까요]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Pourquoi j’étudie… ? 📚' },
        { type: 'text', text: 'Activité de la classe : chacun écrit **pourquoi** il étudie chaque matière.' },
        { type: 'table', head: ['Matière', 'Pourquoi ?'], rows: [
          ['🇰🇷 [[한국어]]', '[[한국 친구하고 이야기하려고 한국어를 공부해요.]]'],
          ['📐 [[수학]]', '[[수학 시험을 잘 보려고 매일 연습해요.]]'],
          ['⚽ [[체육]]', '[[축구를 잘하려고 체육 시간에 열심히 달려요.]]'],
          ['🎵 [[음악]]', '[[노래를 잘 부르려고 음악 시간에 연습해요.]]'],
        ] },
        { type: 'tip', text: 'Petit mot : [[이야기하다|t:discuter, parler]] (de [[이야기]]). [[부르다]] → [[부르려고]] : aucun changement avant 려고.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie le but à l’action.', pairs: [
      ['한국어를 잘하려고', '매일 연습해요'],
      ['시험을 잘 보려고', '열심히 공부해요'],
      ['책을 빌리려고', '도서관에 가요'],
      ['축구를 잘하려고', '운동장에서 달려요'],
    ] } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '⚽ « Je cours avec ardeur pour bien jouer au foot. »', before: '축구를 잘', after: ' 열심히 달려요.', choices: ['하려고', '하러', '해서'], answer: 0, explain: '[[달려요]] : on ne va nulle part → **려고**.' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '시험을 잘 보려고 열심히 공부해요', choices: ['시험을 잘 보려고 열심히 공부해요', '시험을 잘 보러 열심히 공부해요', '시험을 잘 봐서 열심히 공부해요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🇰🇷 « Je m’entraîne chaque jour pour bien parler coréen. »', answer: alts('한국어를 잘하려고 매일 연습해요', '매일 한국어를 잘하려고 연습해요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Et toi, **pourquoi** apprends-tu le coréen ? Pièce 1 avec **려고**, pièce 2 = ton action. [[쓰세요!]]', placeholder: '한국에 가려고 한국어를 공부해요. 그래서 매일 열심히 연습해요.', mustInclude: [RYEOGO_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '한국어를 잘하려고 매일 연습해요. 시험을 잘 보려고 열심히 공부해요.', fr: 'Je m’entraîne chaque jour pour bien parler coréen. J’étudie sérieusement pour réussir l’examen.', prompt: 'Mise en pratique : dis-le à voix haute 💪' } },
  ],
  interleave: [
    { type: 'type', prompt: '📚 « Je vais à la bibliothèque pour lire un livre. »', answer: alts('도서관에 책을 읽으러 가요', '책을 읽으러 도서관에 가요') },
    { type: 'mcq', prompt: '🚶 [[와요]] =', choices: ['je viens', 'je vais', 'je marche'], answer: 0 },
    { type: 'cloze', before: '날씨가 정말 ', after: '!', choices: ['춥네요', '추워네요'], answer: 0, translation: 'Qu’est-ce qu’il fait froid !' },
    { type: 'mcq', prompt: '🪟 « La fenêtre s’ouvre. »', choices: ['창문이 열려요.', '창문을 열어요.', '창문이 열어요.'], answer: 0 },
  ],
};

const QUICK: [string, string[]][] = [
  ['식당에 왜 가요?', ['밥을 먹으러 가요.', '책을 빌리러 가요.', '공을 차러 가요.']],
  ['도서관에 뭐 하러 가요?', ['책을 읽으러 가요.', '점심을 먹으러 가요.', '축구하러 가요.']],
  ['운동장에 왜 가요?', ['친구들하고 놀러 가요.', '책을 빌리러 가요.', '물을 마시러 가요.']],
  ['보건실에 왜 가요?', ['배가 아파서 쉬러 가요.', '친구하고 놀러 가요.', '시험을 보러 가요.']],
  ['교실에 왜 왔어요?', ['선생님을 만나러 왔어요.', '수영하러 왔어요.', '공원에 갈 거예요.']],
];

const day103: Lesson = {
  id: 'm6-w1-d3',
  month: 6,
  week: 1,
  day: 103,
  title: 'L’inspecteur de la récré : 어디에 왜 가요?',
  summary: 'Questionner et répondre vite : 어디에 가요? 왜 가요? 뭐 하러 가요? → 식당에 밥을 먹으러 가요. Cause 아파서 + but 쉬러. Nouveaux : 보건실, 왔어요, 선생님을 만나러 왔어요.',
  cards: [
    { id: 'w21-ko-eodie-wae', kind: 'phrase', ko: '지금 어디에 왜 가요?', fr: 'Où vas-tu maintenant, et pourquoi ?', note: '🕵️ Réponse : lieu + but → [[교실에 공부하러 가요.]] À l’oral, souvent sans 에 : [[어디 가요?]]' },
    { id: 'w21-ko-mwo-hareo', kind: 'phrase', ko: '뭐 하러 가요?', fr: 'Tu y vas pour faire quoi ?', note: '❓ [[뭐 하다]] + [[러|p:purpose-go]]. Réponse : [[책을 빌리러 가요.]]' },
    { id: 'w21-ko-sikdang-meogeureo', kind: 'phrase', ko: '식당에 밥을 먹으러 가요', fr: 'Je vais à la cantine pour manger.', note: '🍚 [[식당]] = restaurant ou cantine de l’école.' },
    { id: 'w21-ko-bogeonsil', kind: 'vocab', ko: '보건실', fr: 'infirmerie (de l’école)', note: '🩹 [[배가 아파서 보건실에 쉬러 가요.]] — cause [[아서|p:cause]] + but [[러|p:purpose-go]].' },
    { id: 'w21-ko-mannareo-wasseoyo', kind: 'phrase', ko: '선생님을 만나러 왔어요', fr: 'Je suis venu(e) voir le professeur.', note: '🚪 [[와요]] au passé → [[왔어요]]. En coréen, on « rencontre » quelqu’un : [[을|p:object]] + [[만나다]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'L’inspecteur de la récré 🕵️' },
        { type: 'tip', text: 'Jeu de rôle de la classe : pendant l’intercours, le [[반장]] joue l’inspecteur. Il arrête tout le monde dans le couloir et pose **deux questions** : [[어디에 가요?]] et [[왜 가요?]]', mood: 'happy' },
        { type: 'dialog', lines: [
          { who: '반장 🕵️', ko: '민수야, 지금 어디에 가요?' },
          { who: '민수', ko: '운동장에 가요.' },
          { who: '반장 🕵️', ko: '왜 가요?' },
          { who: '민수', ko: '친구들하고 축구하러 가요.' },
          { who: '반장 🕵️', ko: '수아는요?' },
          { who: '수아', ko: '저는 도서관에 책을 빌리러 가요.' },
          { who: '반장 🕵️', ko: '지훈이는 뭐 하러 가요?' },
          { who: '지훈', ko: '배가 아파서 보건실에 쉬러 가요.' },
          { who: '반장 🕵️', ko: '아, 그렇군요. 빨리 가세요!' },
        ] },
        { type: 'tip', text: 'Petits mots : [[보건실|t:infirmerie]] · [[수아는요?|t:et toi, Sua ?]]. À l’oral, on entend souvent [[어디 가요?]] sans [[에]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi Minsu va-t-il au terrain de sport ?', choices: ['Pour jouer au foot avec ses amis.', 'Pour emprunter un livre.', 'Parce qu’il a mal au ventre.'], answer: 0, explain: '[[친구들하고 축구하러 가요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Où va Jihoon, et pourquoi ?', choices: ['À l’infirmerie, pour se reposer : il a mal au ventre.', 'À la cantine, pour manger : il a faim.', 'En classe, pour poser une question.'], answer: 0, explain: '[[배가 아파서 보건실에 쉬러 가요.]]' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Questions et réponses éclair ⚡' },
        { type: 'table', head: ['❓ Question', '💬 Réponse'], rows: [
          ['[[어디에 가요?]] (où ?)', '📍 lieu + [[에 가요]] : [[식당에 가요.]]'],
          ['[[왜 가요?]] (pourquoi ?)', '🎯 but + [[러 가요]] : [[밥을 먹으러 가요.]]'],
          ['[[뭐 하러 가요?]] (pour faire quoi ?)', '🎯 [[책을 빌리러 가요.]]'],
          ['[[지금 어디에 왜 가요?]]', '📍 + 🎯 : [[식당에 밥을 먹으러 가요.]]'],
          ['[[왜 왔어요?]] (pourquoi es-tu venu ?)', '🎯 [[선생님을 만나러 왔어요.]]'],
        ] },
        { type: 'text', text: 'À [[왜]], on peut répondre par un **but** (러 : pour…) ou par une **cause** ([[아서|p:cause]] : parce que…) — ou les deux : [[배가 고파서 식당에 밥을 먹으러 가요.]]' },
        { type: 'tip', text: 'Répétition guidée : écoute chaque question, et choisis vite la réponse naturelle. Le professeur te répond à toute vitesse : [[들으세요!]]', mood: 'encourage' },
      ],
    },
    ...QUICK.map(([q, choices], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'mcq' as const, prompt: `Question éclair ${i + 1}/${QUICK.length} — écoute et réponds !`, audio: q, choices, answer: 0, explain: `[[${q}]] → [[${choices[0]}]]` },
    })),
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🕵️ [[어디에 가요?]]', before: '', after: ' 밥을 먹으러 가요.', choices: ['식당에', '식당에서', '식당을'], answer: 0, explain: 'Le verbe final est [[가요]] → destination [[에]].' } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Le carnet de l’inspecteur : écris la réponse de chacun.', head: ['🧒 Qui', '📍 Où', '🎯 Pour quoi', '✍️ Sa réponse'], rows: [
      ['[[민수]]', '[[운동장]]', '[[축구하다]]', blank('운동장에 축구하러 가요')],
      ['[[수아]]', '[[도서관]]', '[[책을 빌리다]]', blank('도서관에 책을 빌리러 가요')],
      ['[[나비]]', '[[식당]]', '[[점심을 먹다]]', blank('식당에 점심을 먹으러 가요')],
    ], explain: '📍 + [[에]] · 🎯 + (으)러 · [[가요]].' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'J’ai mal au ventre, donc je vais à l’infirmerie pour me reposer.', tiles: ['배가', '아파서', '보건실에', '쉬러', '가요.'], distractors: ['아프러', '보건실에서'] } },
    { kind: 'practice', exercise: { type: 'type', prompt: '👩‍🏫 Le professeur demande. Réponds : tu vas à la cantine pour manger (avec [[밥]]).', audio: '지금 어디에 왜 가요?', answer: alts('식당에 밥을 먹으러 가요', '밥을 먹으러 식당에 가요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'À ton tour d’être interrogé ! Réponds à l’inspecteur en 2 phrases : [[어디에 가요?]] [[왜 가요?]] [[쓰세요!]]', placeholder: '공원에 가요. 친구를 만나러 가요.', mustInclude: [REO_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '지금 어디에 왜 가요? — 배가 고파서 식당에 밥을 먹으러 가요!', fr: 'Où vas-tu maintenant, et pourquoi ? — J’ai faim, alors je vais à la cantine pour manger !', prompt: 'Mise en pratique : joue les deux rôles à voix haute 🕵️' } },
  ],
  interleave: [
    { type: 'type', prompt: '🇰🇷 « Je m’entraîne chaque jour pour bien parler coréen. »', answer: alts('한국어를 잘하려고 매일 연습해요') },
    { type: 'mcq', prompt: '🍚 « On va manger ensemble ? »', choices: ['같이 먹으러 갈까요?', '같이 먹으려고 갈까요?', '같이 먹어서 갈까요?'], answer: 0 },
    { type: 'mcq', prompt: '💪 [[열심히]] =', choices: ['avec ardeur', 'lentement', 'souvent'], answer: 0 },
    { type: 'cloze', before: '반장은 친구들에게 조용히 ', after: ' 해요.', choices: ['하게', '하러'], answer: 0, translation: 'Le chef de classe fait taire ses camarades.' },
  ],
};

const day104: Lesson = {
  id: 'm6-w1-d4',
  month: 6,
  week: 1,
  day: 104,
  title: 'Mon programme : 먼저, 그다음에…',
  summary: 'Écrire un programme de week-end de 6 à 8 phrases avec -(으)러 et -(으)려고, et des connecteurs de séquence. Nouveaux : 먼저, 그다음에, 마지막으로.',
  cards: [
    { id: 'w21-ko-meonjeo', kind: 'vocab', ko: '먼저', fr: 'd’abord, en premier', note: '1️⃣ [[먼저 도서관에 책을 빌리러 갈 거예요.]]' },
    { id: 'w21-ko-geudaeume', kind: 'vocab', ko: '그다음에', fr: 'ensuite, après ça', note: '2️⃣ [[그|t:ça]] + [[다음|t:suivant]] + [[에|p:time]] — comme dans [[다음 주말]].' },
    { id: 'w21-ko-majimageuro', kind: 'vocab', ko: '마지막으로', fr: 'enfin, pour finir', note: '🏁 [[마지막|t:le dernier]] + [[으로|t:en tant que]]. [[마지막으로 집에서 쉴 거예요.]]' },
    { id: 'w21-ko-chingu-mannareo', kind: 'phrase', ko: '주말에 친구를 만나러 공원에 갈 거예요', fr: 'Ce week-end, j’irai au parc pour voir un ami.', note: '⏩ Le futur se met sur le **dernier** verbe : [[만나러 갈 거예요]].' },
    { id: 'w21-ko-chukgu-ryeogo', kind: 'phrase', ko: '축구를 하려고 공원에 가요', fr: 'J’y vais (au parc) pour jouer au football.', note: '⚽ = [[축구하러 공원에 가요]] : avec [[가요]], les deux marchent.' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les connecteurs de séquence 🪜' },
        { type: 'tip', text: 'Activité de la classe : chacun écrit dans son cahier de coréen son **programme** du week-end ou des vacances. Pour mettre les étapes en ordre, trois mots nouveaux :', mood: 'happy' },
        { type: 'table', head: ['', 'Connecteur', 'Sens'], rows: [
          ['1️⃣', '[[먼저]]', 'd’abord'],
          ['2️⃣', '[[그다음에]]', 'ensuite'],
          ['➕', '[[그리고]] (déjà connu)', 'et puis'],
          ['🏁', '[[마지막으로]]', 'enfin, pour finir'],
        ] },
        { type: 'text', text: 'Et pour le **but** de chaque étape : [[러|p:purpose-go]] devant [[가요]] / [[와요]], [[려고|p:in-order]] devant n’importe quelle action. Au futur, seul le dernier verbe change : [[만나러 갈 거예요]], [[하려고 공원에 갈 거예요]].' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le programme de Nabi 📅' },
        { type: 'table', head: ['🦋 [[주말 계획|t:le programme du week-end]]'], rows: [
          ['[[이번 주말에는 날씨가 좋을 것 같아요.]]'],
          ['[[먼저 토요일 아침에 도서관에 책을 빌리러 갈 거예요.]]'],
          ['[[그다음에 친구를 만나러 공원에 갈 거예요.]]'],
          ['[[축구를 하려고 공을 가져갈 거예요.]]'],
          ['[[그리고 점심에는 같이 김밥을 먹을 거예요.]]'],
          ['[[일요일에는 시험을 잘 보려고 집에서 열심히 공부할 거예요.]]'],
          ['[[마지막으로 저녁에 가족하고 영화를 보러 갈 거예요.]]'],
          ['[[정말 재미있을 것 같아요!]]'],
        ] },
        { type: 'tip', text: 'Petits mots : [[이번 주말|t:ce week-end]] · [[김밥|t:kimbap (rouleaux de riz)]]. Repère les **3 러** et les **2 려고** !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’est-ce que Nabi fait **en premier** samedi ?', choices: ['Il va emprunter un livre à la bibliothèque.', 'Il va voir un ami au parc.', 'Il va au cinéma avec sa famille.'], answer: 0, explain: '[[먼저 토요일 아침에 도서관에 책을 빌리러 갈 거예요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi Nabi étudiera-t-il dimanche ?', choices: ['Pour réussir son examen.', 'Pour aller au parc.', 'Parce qu’il pleut.'], answer: 0, explain: '[[시험을 잘 보려고 집에서 열심히 공부할 거예요.]]' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🪜 Remets le connecteur.', before: '', after: ' 저녁에 가족하고 영화를 보러 갈 거예요.', choices: ['마지막으로', '먼저', '그래서'], answer: 0, translation: 'Enfin, le soir, j’irai voir un film avec ma famille.' } },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie le connecteur à son sens.', pairs: [
      ['먼저', 'd’abord'],
      ['그다음에', 'ensuite'],
      ['마지막으로', 'enfin'],
      ['그래서', 'donc'],
    ] } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Ce week-end, j’irai au parc pour voir un ami.', tiles: ['주말에', '친구를', '만나러', '공원에', '갈 거예요.'], distractors: ['만났으러', '공원에서'] } },
    { kind: 'practice', exercise: { type: 'type', prompt: '⚽ « J’y vais (au parc) pour jouer au football. » (avec **려고**)', answer: alts('축구를 하려고 공원에 가요', '축구하려고 공원에 가요') } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ta trame d’écriture ✏️' },
        { type: 'text', text: 'À toi : un programme de **6 à 8 phrases**, avec au moins **un 러** et **un 려고**. Week-end, vacances ([[방학]]) ou révisions avant un [[시험]] : tu choisis !' },
        { type: 'table', head: ['Étape', 'Pense à…'], rows: [
          ['1️⃣ Quand', '[[이번 주말에]] · [[방학에]] · [[토요일 아침에]]'],
          ['2️⃣ D’abord', '[[먼저]] + lieu + [[러 갈 거예요]]'],
          ['3️⃣ Ensuite', '[[그다음에]] / [[그리고]] + [[려고]] + action'],
          ['4️⃣ Pour finir', '[[마지막으로]] + ton avis : [[재미있을 것 같아요|p:seem]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Rédaction 1/2 — **Quand** et **d’abord** : 3 ou 4 phrases avec [[먼저]] et un **러**. [[쓰세요!]]', placeholder: '이번 주말에 계획이 있어요. 먼저 토요일 아침에 도서관에 책을 빌리러 갈 거예요…', mustInclude: ['먼저', REO_ANY] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Rédaction 2/2 — **Ensuite** et **pour finir** : 3 ou 4 phrases avec [[그다음에]] ou [[마지막으로]], et un **려고**.', placeholder: '그다음에 축구를 하려고 공원에 갈 거예요. 마지막으로 집에서 쉴 거예요. 정말 재미있을 것 같아요!', mustInclude: ['그다음에|그 다음에|마지막으로', RYEOGO_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '주말에 친구를 만나러 공원에 갈 거예요. 축구를 하려고 공원에 가요. 마지막으로 집에서 쉴 거예요.', fr: 'Ce week-end, j’irai au parc pour voir un ami. J’y vais pour jouer au football. Pour finir, je me reposerai à la maison.', prompt: 'Mise en pratique : relis ton programme à voix haute, puis écoute le modèle.' } },
  ],
  interleave: [
    { type: 'type', prompt: '🕵️ « Tu y vas pour faire quoi ? »', answer: alts('뭐 하러 가요?') },
    { type: 'mcq', prompt: '🩹 [[보건실]] =', choices: ['l’infirmerie', 'la cantine', 'la bibliothèque'], answer: 0 },
    { type: 'cloze', before: '시험을 잘 ', after: ' 열심히 공부해요.', choices: ['보려고', '보러'], answer: 0, translation: 'J’étudie sérieusement pour réussir l’examen.' },
    { type: 'type', prompt: '🚪 « Je suis venu(e) voir le professeur. »', answer: alts('선생님을 만나러 왔어요') },
  ],
};

const RIDDLES: [string, string[]][] = [
  ['책을 빌리러 가요. 책을 읽으러 가요. 어디에 가요?', ['도서관에 가요.', '식당에 가요.', '운동장에 가요.']],
  ['배가 아파요. 쉬러 가요. 어디에 가요?', ['보건실에 가요.', '공원에 가요.', '도서관에 가요.']],
  ['공을 차러 가요. 친구들하고 달리러 가요. 어디에 가요?', ['운동장에 가요.', '보건실에 가요.', '식당에 가요.']],
  ['배가 고파요. 점심을 먹으러 가요. 어디에 가요?', ['식당에 가요.', '교실에 가요.', '도서관에 가요.']],
];

const DICTATION = [
  '도서관에 책을 읽으러 가요',
  '친구를 만나러 공원에 갈 거예요',
  '한국어를 잘하려고 매일 연습해요',
  '시험을 잘 보려고 열심히 공부했어요',
  '배가 아파서 보건실에 쉬러 갔어요',
];

const day105: Lesson = {
  id: 'm6-w1-d5',
  month: 6,
  week: 1,
  day: 105,
  title: 'Bilan de la semaine & petite évaluation n°21',
  summary: 'Présentation orale de ton programme, devinettes sur les lieux et les buts, dictée, grammaire de la classe, petite évaluation n°21 et une histoire entièrement en coréen.',
  cards: [],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le bilan de la semaine 21 📋' },
        { type: 'tip', text: 'Cette semaine, tu as appris à dire **pourquoi** tu bouges et **pourquoi** tu agis. On commence par ta présentation orale, comme devant tes camarades de table.', mood: 'encourage' },
        { type: 'table', head: ['Je sais…', 'Forme', 'Exemple'], rows: [
          ['🚶 dire le but d’un déplacement', '[[(으)러 가요 / 와요|p:purpose-go]]', '[[도서관에 책을 읽으러 가요.]]'],
          ['🎯 dire le but d’une action', '[[(으)려고|p:in-order]]', '[[한국어를 잘하려고 매일 연습해요.]]'],
          ['🕵️ questionner', '[[어디에]] · [[왜]] · [[뭐 하러]]', '[[지금 어디에 왜 가요?]]'],
          ['🪜 ordonner un programme', '[[먼저]] · [[그다음에]] · [[마지막으로]]', '[[먼저 공원에 갈 거예요.]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'read', ko: '이번 주말 계획이에요. 먼저 친구를 만나러 공원에 갈 거예요. 그다음에 책을 빌리러 도서관에 갈 거예요. 마지막으로 시험을 잘 보려고 집에서 공부할 거예요.', fr: 'Voici mon programme du week-end. D’abord, j’irai au parc voir un ami. Ensuite, j’irai à la bibliothèque emprunter un livre. Enfin, j’étudierai à la maison pour réussir l’examen.', prompt: 'Présentation orale : présente ton programme à voix haute, puis écoute le modèle.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Devinettes : où va-t-il ? 🔎' },
        { type: 'text', text: 'Jeu de la classe : un camarade donne des indices sur le **but**, les autres devinent le **lieu**.' },
      ],
    },
    ...RIDDLES.map(([clue, choices], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'mcq' as const, prompt: `Devinette ${i + 1}/${RIDDLES.length} — [[${clue}]]`, choices, answer: 0 },
    })),
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Dictée ✍️' },
        { type: 'text', text: 'Épreuve de la classe : cinq phrases avec **러** et **려고**. [[들으세요!]] Puis [[쓰세요!]]' },
      ],
    },
    ...DICTATION.map((s, i) => ({
      kind: 'practice' as const,
      exercise: { type: 'type' as const, prompt: `Dictée ${i + 1}/${DICTATION.length}`, audio: s, answer: alts(s) },
    })),
    { kind: 'practice', exercise: { type: 'match', prompt: 'Grammaire de la classe : relie la destination au but.', pairs: [
      ['도서관에', '책을 빌리러 가요'],
      ['식당에', '밥을 먹으러 가요'],
      ['운동장에', '공을 차러 가요'],
      ['보건실에', '쉬러 가요'],
      ['교실에', '공부하러 가요'],
    ] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Petite évaluation n°21' },
        { type: 'table', head: ['Partie', 'Contenu'], rows: [
          ['A', 'Former le but d’un déplacement (écrit)'],
          ['B', 'Choisir la forme de but (phrases à trous)'],
          ['C', 'Expression orale'],
        ] },
        { type: 'tip', text: '**A — Formation.** Combine l’action et [[가다]].', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'grid', prompt: '**A** — Action + [[가다]] → ?', head: ['Action', '+ 가다', '→ Phrase'], rows: [
      ['[[밥을 먹다]]', '[[가다]]', blank('밥을 먹으러 가요')],
      ['[[책을 읽다]]', '[[가다]]', blank('책을 읽으러 가요')],
      ['[[운동하다]]', '[[가다]]', blank('운동하러 가요')],
    ], explain: 'Consonne → **으러** ([[먹으러]], [[읽으러]]) · voyelle → **러** ([[운동하러]]).' } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**B — Phrases à trous.** Choisis ou écris la bonne forme de but.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '**B · 1/3** — 🌳', before: '친구를 ', after: ' 공원에 가요.', choices: ['만나러', '만나서', '만나면'], answer: 0, translation: 'Je vais au parc pour voir un ami.' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '**B · 2/3** — 🇰🇷 [[한국어를 잘]]______ [[매일 연습해요.]] (afin de)', answer: alts('하려고', '한국어를 잘하려고 매일 연습해요') } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '**B · 3/3** — 🎈 Tu proposes à un ami :', before: '같이 ', after: ' 갈까요?', choices: ['놀러', '놀려고', '놀아서'], answer: 0, explain: 'Devant [[까요|p:suggest]], seulement **러**.' } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**C — À l’oral.** Le professeur te demande : [[지금 어디에 왜 가요?]] Réponds en donnant le **lieu** et le **but**.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'write', prompt: '**C · 1/2** — 👩‍🏫 [[지금 어디에 왜 가요?]] Prépare ta réponse.', placeholder: '교실에 공부하러 가요.', mustInclude: [REO_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '지금 교실에 공부하러 가요. 다음 주에 시험이 있어요. 그래서 시험을 잘 보려고 열심히 공부하고 있어요.', fr: 'Je vais en classe pour étudier. La semaine prochaine, il y a un examen. Alors j’étudie sérieusement pour le réussir.', prompt: '**C · 2/2** — Réponds à voix haute, puis écoute le modèle. ([[다음 주|t:la semaine prochaine]])' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le samedi de Nabi 📖' },
        { type: 'text', text: 'Une histoire **entièrement en coréen**. Touche une bulle pour l’entendre.' },
        { type: 'dialog', lines: [
          { who: '📖', ko: '토요일 아침이에요. 나비가 공원에 가고 있어요.' },
          { who: '지훈', ko: '나비야, 어디에 가요?' },
          { who: '나비', ko: '공원에 친구들을 만나러 가요. 지훈이는요?' },
          { who: '지훈', ko: '저는 도서관에 책을 빌리러 가요. 다음 주에 시험이 있어요. 시험을 잘 보려고 열심히 공부하고 있어요.' },
          { who: '나비', ko: '그렇군요! 그럼 오후에 같이 놀러 갈까요?' },
          { who: '지훈', ko: '좋아요! 공부가 끝나면 공원에 갈 거예요.' },
          { who: '📖', ko: '오후에 지훈이가 공원에 왔어요. 그런데 손에 큰 가방이 있었어요.' },
          { who: '나비', ko: '지훈아, 그 가방에 뭐가 있어요?' },
          { who: '지훈', ko: '맛있는 김밥이에요! 같이 먹으려고 가져왔어요.' },
          { who: '나비', ko: '와, 정말 맛있네요! 고마워요, 지훈아! 🦋' },
        ] },
        { type: 'tip', text: 'Petits mots : [[다음 주|t:la semaine prochaine]] · [[그럼|t:alors]] · [[손|t:main]] · [[김밥|t:kimbap]] · [[가져왔어요|t:j’ai apporté]] (de [[가져가요]]).', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi Jihoon va-t-il à la bibliothèque ?', choices: ['Pour emprunter un livre : il prépare un examen.', 'Pour retrouver Nabi.', 'Pour manger du kimbap.'], answer: 0, explain: '[[도서관에 책을 빌리러 가요.]] [[시험을 잘 보려고 열심히 공부하고 있어요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi Jihoon a-t-il apporté du kimbap ?', choices: ['Pour le manger avec Nabi.', 'Pour l’offrir au professeur.', 'Parce qu’il avait faim à la bibliothèque.'], answer: 0, explain: '[[같이 먹으려고 가져왔어요.]]' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Bilan attendu ✅' },
        { type: 'table', head: ['À la fin de la semaine 21, tu…'], rows: [
          ['🚶 expliques **où** tu vas et **pourquoi** : [[식당에 밥을 먹으러 가요.]]'],
          ['🎯 choisis **러** pour un déplacement, **려고** pour toute autre action : [[잘하려고 연습해요.]]'],
          ['🪜 écris un petit programme avec [[먼저]] · [[그다음에]] · [[마지막으로]]'],
        ] },
        { type: 'tip', text: '[[주말에 뭐 하러 갈 거예요?]] 🦋 À lundi !', mood: 'happy' },
      ],
    },
  ],
  interleave: [
    { type: 'type', prompt: '1️⃣ « d’abord »', answer: alts('먼저') },
    { type: 'mcq', prompt: '« Ce week-end, j’irai au parc pour voir un ami. »', choices: ['주말에 친구를 만나러 공원에 갈 거예요.', '주말에 친구를 만나러 공원에서 갈 거예요.', '주말에 친구를 만나려고 공원에 갔어요.'], answer: 0 },
    { type: 'cloze', before: '배가 ', after: ' 보건실에 쉬러 가요.', choices: ['아파서', '아프러'], answer: 0, translation: 'J’ai mal au ventre, donc je vais à l’infirmerie pour me reposer.' },
    { type: 'mcq', prompt: '« le film que j’ai vu hier »', choices: ['어제 본 영화', '어제 보는 영화', '어제 볼 영화'], answer: 0 },
  ],
};

export const m6w1: Lesson[] = [day101, day102, day103, day104, day105];
