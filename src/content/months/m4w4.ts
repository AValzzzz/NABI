import type { GridBlank, Lesson } from '../types';

const COLLAPSE: [RegExp, string][] = [
  [/가장/g, '제일'],
  [/한국어를 공부/g, '한국어 공부'],
  [/거예요/g, '것이에요'],
  [/것을/g, '걸'],
  [/것이(?!에요)/g, '게'],
  [/것(?![을이])/g, '거'],
  [/는 (것|거|걸|게)/g, '는$1'],
  [/면 좋겠/g, '면좋겠'],
  [/ 거예요/g, '거예요'],
  [/려고 해/g, '려고해'],
  [/(어|아|가|해) (봤|보)/g, '$1$2'],
];
const alts = (...xs: string[]): string[] => {
  const out = new Set(xs);
  for (const [re, to] of COLLAPSE) for (const s of [...out]) out.add(s.replace(re, to));
  for (const s of [...out]) out.add(s.replace(/[.,!?] /g, ' '));
  for (const s of [...out]) out.add(s.replace(/[.!?]$/, ''));
  return [...out];
};
const blank = (s: string): GridBlank => ({ answer: alts(s) });

const NOMINAL_ANY = '는 것|는 거|는 걸|는 게|는것|는거|는걸|는게';
const MOST_ANY = '가장|제일';
const FREQ_ANY = '매일|자주|가끔';
const CAUSE_ANY = '해서|아서|어서|워서|와서|봐서|가서|파서|빠서|셔서|써서|러서|려서|쳐서|나서|자서|커서|라서';
const IF_ANY = '면 ';
const FUTURE_ANY = '거예요|려고';

const PODIUM: [string, string][] = [
  ['🥇', '한국어를 공부하는 것이 가장 재미있어요.'],
  ['🥈', '자전거를 타는 것이 수영하는 것보다 더 재미있어요.'],
  ['🥉', '수영하는 것도 재미있어요.'],
];

const day76: Lesson = {
  id: 'm4-w4-d1',
  month: 4,
  week: 4,
  day: 76,
  title: 'Le plus… : 가장 · 제일',
  summary: 'Le superlatif : 한국어를 공부하는 것이 가장 재미있어요 · 축구하는 것을 제일 좋아해요. Podium et classement des matières. Nouveaux : 가장, 제일, 과목, 수학, 체육.',
  cards: [
    { id: 'w16-ko-gajang', kind: 'vocab', ko: '가장 · 제일', fr: 'le plus (superlatif) — 제일 est plus oral', note: '🥇 [[가장 재미있어요]] = c’est le plus amusant · [[제일 좋아해요]] = c’est ce que j’aime le plus. Comparer deux choses : [[더|p:compare]].' },
    { id: 'w16-ko-gajang-jaemiisseoyo', kind: 'phrase', ko: '한국어를 공부하는 것이 가장 재미있어요', fr: 'Ce que je trouve le plus intéressant, c’est étudier le coréen.', note: '🥇 [[공부하는 것|p:nominal]] + [[이|p:subject]] + [[가장]] + adjectif. À l’oral : [[한국어 공부하는 게 제일 재미있어요.]]' },
    { id: 'w16-ko-gajang-joahaeyo', kind: 'phrase', ko: '저는 축구하는 것을 가장 좋아해요', fr: 'Ce que j’aime le plus, c’est jouer au foot.', note: '💚 [[좋아해요]] veut [[을|p:object]] : [[축구하는 것을 가장 좋아해요]] (jamais [[것이 좋아해요]]).' },
    { id: 'w16-ko-mwoga-jeil', kind: 'phrase', ko: '뭐가 제일 재미있어요?', fr: 'Qu’est-ce qui est le plus amusant ?', note: '🤔 Et pour les goûts : [[뭐를 제일 좋아해요?]]' },
    { id: 'w16-ko-gwamok', kind: 'vocab', ko: '과목', fr: 'matière (scolaire)', note: '📚 [[무슨 과목|t:quelle matière]] · [[한국어]], [[음악]], [[수학]], [[체육]]…' },
    { id: 'w16-ko-suhak', kind: 'vocab', ko: '수학', fr: 'mathématiques', note: '➗ [[수학이 어려워요.]]' },
    { id: 'w16-ko-cheyuk', kind: 'vocab', ko: '체육', fr: 'sport (la matière, EPS)', note: '🏃 [[체육 시간]] = l’heure de sport. ≠ [[운동|t:le sport en général]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Sur le podium 🥇' },
        { type: 'tip', text: 'Dernière semaine du **4ᵉ mois** ! [[축구가 음악보다 더 재미있어요.]] Tu sais comparer **deux** choses. Aujourd’hui : la **première place**.', mood: 'happy' },
        { type: 'text', text: 'Pour dire « **le plus** », on remplace [[더|p:compare]] par [[가장|t:le plus]] (ou [[제일]], plus oral). Pas besoin de [[보다|p:compare]] : on compare avec **tout**.' },
        { type: 'breakdown', segments: [
          { ko: '한국어를 공부하는 것', role: 'subject', gloss: 'étudier le coréen', particle: { ko: '이', key: 'subject' } },
          { ko: '가장', role: 'adverb', gloss: 'le plus' },
          { ko: '재미있어요', role: 'verb', gloss: 'intéressant' },
        ], translation: 'Ce que je trouve le plus intéressant, c’est étudier le coréen.' },
        { type: 'table', head: ['', 'Je compare…', ''], rows: [
          ['⚖️ deux choses', '[[더]] (+ [[보다|p:compare]])', '[[축구가 음악보다 더 재미있어요.]]'],
          ['🥇 avec tout', '[[가장]] · [[제일]]', '[[축구가 가장 재미있어요.]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🥇 « Le foot, c’est **le plus** amusant. »', choices: ['축구가 가장 재미있어요.', '축구가 더 재미있어요.', '축구보다 재미있어요.'], answer: 0, explain: '[[더]] = plus (que…) · [[가장]] = le plus.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ce que j’aime le plus 💚' },
        { type: 'text', text: 'Avec [[좋아해요]], garde [[을/를|p:object]] : « ce que j’aime le plus, c’est… ».' },
        { type: 'breakdown', segments: [
          { ko: '저', role: 'topic', gloss: 'moi', particle: { ko: '는', key: 'topic' } },
          { ko: '축구하는 것', role: 'object', gloss: 'jouer au foot', particle: { ko: '을', key: 'object' } },
          { ko: '가장', role: 'adverb', gloss: 'le plus' },
          { ko: '좋아해요', role: 'verb', gloss: 'j’aime' },
        ], translation: 'Ce que j’aime le plus, c’est jouer au foot.' },
        { type: 'tip', text: 'Deux familles : [[것이 가장 재미있어요|p:subject]] (c’est le plus amusant) · [[것을 가장 좋아해요|p:object]] (j’aime le plus). Jamais [[것이 좋아해요]] !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🎤 « Ce que j’aime le plus, c’est chanter. »', before: '저는 노래하는 ', after: ' 좋아해요.', choices: ['것을 가장', '것이 가장', '것보다 더'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🎨 « Dessiner, c’est le plus amusant. »', before: '그림을 그리는 ', after: ' 재미있어요.', choices: ['것이 가장', '것을 가장', '것을 더'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '⚽ « Ce que j’aime le plus, c’est jouer au foot. » ([[저는…]])', answer: alts('저는 축구하는 것을 가장 좋아해요', '저는 축구를 하는 것을 가장 좋아해요') } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le podium de Nabi 🏆' },
        { type: 'text', text: 'Méthode de la classe : un **podium à trois marches**. 🥇 avec [[가장]], 🥈 et 🥉 avec [[보다 더|p:compare]].' },
        { type: 'table', head: ['', 'Le podium de Nabi'], rows: PODIUM.map(([medal, s]) => [medal, `[[${s}]]`]) },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quelle activité est sur la 2ᵉ marche du podium de Nabi ?', choices: ['Le vélo.', 'La natation.', 'Le coréen.'], answer: 0, explain: '🥈 [[자전거를 타는 것이 수영하는 것보다 더 재미있어요.]]' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le classement des matières 📚' },
        { type: 'text', text: 'Activité de la classe : classer ses [[과목|t:matières]]. Mots nouveaux : [[수학|t:les maths]] et [[체육|t:le sport, l’EPS]].' },
        { type: 'dialog', lines: [
          { who: '선생님', ko: '여러분, 무슨 과목이 제일 재미있어요?' },
          { who: '지훈', ko: '체육이 제일 재미있어요! 달리는 것을 가장 좋아해요.' },
          { who: '수아', ko: '저는 음악이 가장 좋아요. 수학은 너무 어려워요.' },
          { who: '민수', ko: '저는 점심 시간이 제일 좋아요! 🍚' },
          { who: '나비', ko: '저는 한국어를 공부하는 것이 가장 재미있어요!' },
        ] },
        { type: 'tip', text: 'Petits mots : [[무슨|t:quel(le)]] (comme dans [[무슨 요일]]) · [[너무|t:trop]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Qui préfère quoi ?', pairs: [
      ['지훈', '체육'],
      ['수아', '음악'],
      ['민수', '점심 시간'],
      ['나비', '한국어'],
    ] } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Le sport (EPS), c’est le plus amusant !', tiles: ['체육이', '제일', '재미있어요!'], distractors: ['더', '체육을'] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '한국어를 공부하는 것이 가장 재미있어요', choices: ['한국어를 공부하는 것이 가장 재미있어요', '한국어를 공부하는 것이 더 재미있어요', '한국어를 공부하는 것을 좋아해요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🥇 « Étudier le coréen, c’est le plus intéressant. »', answer: alts('한국어를 공부하는 것이 가장 재미있어요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ton podium : écris ta 🥇 avec **가장** ou **제일**, puis ta 🥈 avec **보다 더**. [[쓰세요!]]', placeholder: '게임을 하는 것이 가장 재미있어요. 축구가 수학보다 더 재미있어요.', mustInclude: [MOST_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '한국어를 공부하는 것이 가장 재미있어요.', fr: 'Ce que je trouve le plus intéressant, c’est étudier le coréen.', prompt: 'Mise en pratique : dis-le à voix haute 🥇' } },
  ],
  interleave: [
    { type: 'type', prompt: '[[그리다]] → « le fait de dessiner » :', answer: alts('그리는 것') },
    { type: 'cloze', before: '축구가 음악', after: ' 더 재미있어요.', choices: ['보다', '을'], answer: 0, translation: 'Le foot est plus amusant que la musique.' },
    { type: 'mcq', prompt: '« Je suis déjà allé à Séoul. »', choices: ['서울에 가 봤어요.', '서울에 가려고 해요.', '서울에 가는 것이에요.'], answer: 0 },
    { type: 'type', prompt: '🚲 « Mon passe-temps, c’est faire du vélo. »', answer: alts('제 취미는 자전거를 타는 거예요') },
  ],
};

const HABITS: [string, string, boolean[], string][] = [
  ['📖', '한국어를 연습해요', [true, true, true, true, true, true, true], '매일'],
  ['🚲', '자전거를 타요', [true, false, true, false, true, false, true], '자주'],
  ['🎬', '영화를 봐요', [false, false, false, false, false, true, false], '가끔'],
];
const DAYS = ['월', '화', '수', '목', '금', '토', '일'];

const day77: Lesson = {
  id: 'm4-w4-d2',
  month: 4,
  week: 4,
  day: 77,
  title: 'Tous les jours, souvent, parfois',
  summary: 'La fréquence : 매일 (chaque jour) · 자주 (souvent) · 가끔 (parfois). 매일 한국어를 연습해요. Grille d’habitudes de la semaine. Nouveau : 연습해요.',
  cards: [
    { id: 'w16-ko-maeil', kind: 'vocab', ko: '매일', fr: 'tous les jours, chaque jour', note: '📅 100 % : [[매일 한국어를 연습해요.]]' },
    { id: 'w16-ko-jaju', kind: 'vocab', ko: '자주', fr: 'souvent', note: '🔁 ≈ 50 % : [[자주 자전거를 타요.]]' },
    { id: 'w16-ko-gakkeum', kind: 'vocab', ko: '가끔', fr: 'parfois, de temps en temps', note: '🌙 ≈ 10 % : [[가끔 영화를 봐요.]]' },
    { id: 'w16-ko-yeonseuphaeyo', kind: 'phrase', ko: '연습해요', fr: 'je m’exerce, je m’entraîne (poli)', note: '💪 [[연습하다]] → [[연습해요]], prononcé [연스패요].' },
    { id: 'w16-ko-maeil-yeonseup', kind: 'phrase', ko: '매일 한국어를 연습해요', fr: 'Je m’exerce en coréen tous les jours.', note: '📅 L’adverbe de fréquence se place **avant** le groupe verbal, souvent juste après le sujet ou le moment.' },
    { id: 'w16-ko-eolmana-jaju', kind: 'phrase', ko: '얼마나 자주 해요?', fr: 'Tu le fais souvent ? (à quelle fréquence ?)', note: '🤔 [[얼마나|t:combien, à quel point]] + [[자주]]. [[매일 해요!]] · [[가끔 해요.]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'L’échelle de fréquence 📊' },
        { type: 'tip', text: '[[한국어를 공부하는 것이 가장 재미있어요!]] Et tu l’étudies **souvent** ? Aujourd’hui : dire **à quelle fréquence** tu fais les choses.', mood: 'happy' },
        { type: 'table', head: ['', 'Fréquence', ''], rows: [
          ['🟩🟩🟩🟩🟩 100 %', '[[매일]]', 'tous les jours'],
          ['🟩🟩🟩⬜⬜ ≈ 50 %', '[[자주]]', 'souvent'],
          ['🟩⬜⬜⬜⬜ ≈ 10 %', '[[가끔]]', 'parfois'],
        ] },
        { type: 'text', text: 'L’adverbe se place **devant** le groupe verbal, après le sujet ou le moment. Mot nouveau : [[연습해요|t:je m’exerce]].' },
        { type: 'breakdown', segments: [
          { ko: '저', role: 'topic', gloss: 'moi', particle: { ko: '는', key: 'topic' } },
          { ko: '매일', role: 'adverb', gloss: 'tous les jours' },
          { ko: '한국어', role: 'object', gloss: 'le coréen', particle: { ko: '를', key: 'object' } },
          { ko: '연습해요', role: 'verb', gloss: 'je m’exerce' },
        ], translation: 'Je m’exerce en coréen tous les jours.' },
        { type: 'liaison', items: [
          { written: '연습해요', spoken: '연스패요', fr: 'je m’exerce' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque mot à sa jauge.', pairs: [
      ['매일', '🟩🟩🟩🟩🟩 100 %'],
      ['자주', '🟩🟩🟩⬜⬜ 50 %'],
      ['가끔', '🟩⬜⬜⬜⬜ 10 %'],
    ] } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '« Je regarde **parfois** des films. »', choices: ['가끔 영화를 봐요.', '매일 영화를 봐요.', '자주 영화를 봐요.'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Je m’exerce en coréen tous les jours.', tiles: ['매일', '한국어를', '연습해요.'], distractors: ['가끔', '연습하는'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ma grille d’habitudes 🗓️' },
        { type: 'text', text: 'Activité de la classe : on coche ses **habitudes** de la semaine, puis on choisit le bon mot. La grille de Nabi :' },
        { type: 'table', head: ['', ...DAYS.map((d) => `[[${d}]]`), ''], rows: HABITS.map(([emoji, habit, ticks, adv]) => [emoji, ...ticks.map((t) => (t ? '✅' : '·')), `[[${adv} ${habit}.]]`]) },
        { type: 'text', text: '[[월]], [[화]], [[수]]… : les jours de la semaine, en abrégé ([[월요일]] → [[월]]).' },
      ],
    },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Lis les grilles : 매일 ou 가끔 ?', buckets: ['📅 매일', '🌙 가끔'], items: [
      { text: '✅✅✅✅✅✅✅ 숙제를 해요', bucket: 0 },
      { text: '✅✅✅✅✅✅✅ 밥을 먹어요', bucket: 0 },
      { text: '······✅ 공원에 가요', bucket: 1 },
      { text: '·····✅· 친구를 만나요', bucket: 1 },
    ] } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🚲 ✅·✅·✅·✅', before: '나비는 ', after: ' 자전거를 타요.', choices: ['자주', '매일', '가끔'], answer: 0, explain: 'Quatre jours sur sept : [[자주]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Tu le fais souvent ? 🤔' },
        { type: 'text', text: 'Pour demander la fréquence : [[얼마나 자주 해요?|t:tu le fais souvent ?]] **Tout en coréen** :' },
        { type: 'dialog', lines: [
          { who: '수아', ko: '나비, 한국어를 얼마나 자주 공부해요?' },
          { who: '나비', ko: '매일 공부해요! 그리고 매일 연습해요.' },
          { who: '수아', ko: '와! 영화도 자주 봐요?' },
          { who: '나비', ko: '아니요, 가끔 봐요. 주말에 봐요.' },
          { who: '지훈', ko: '저는 매일 축구를 해요! 그래서 축구를 잘해요.' },
          { who: '민수', ko: '저는 자주 자요. 😴' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quand Nabi regarde-t-il des films ?', choices: ['Parfois, le week-end.', 'Tous les jours.', 'Jamais.'], answer: 0, explain: '[[가끔 봐요. 주말에 봐요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi Jihoon est-il doué pour le foot ?', choices: ['Il y joue tous les jours.', 'Il regarde des matchs.', 'Il y joue parfois.'], answer: 0, explain: '[[매일 축구를 해요! 그래서 축구를 잘해요.]]' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '가끔 영화를 봐요', choices: ['가끔 영화를 봐요', '자주 영화를 봐요', '매일 영화를 봐요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '📅 « Je m’exerce en coréen tous les jours. »', answer: alts('매일 한국어를 연습해요', '저는 매일 한국어를 연습해요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ta grille : écris trois habitudes, une avec **매일**, une avec **자주**, une avec **가끔**. [[쓰세요!]]', placeholder: '매일 숙제를 해요. 자주 음악을 들어요. 가끔 수영해요.', mustInclude: ['매일', '자주', '가끔'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '매일 한국어를 연습해요.', fr: 'Je m’exerce en coréen tous les jours.', prompt: 'Mise en pratique : dis-le à voix haute 📅' } },
  ],
  interleave: [
    { type: 'type', prompt: '🥇 « Le foot, c’est le plus amusant. »', answer: alts('축구가 가장 재미있어요') },
    { type: 'mcq', prompt: '[[무슨 과목이 제일 재미있어요?]] →', choices: ['Quelle matière est la plus amusante ?', 'Quel jour sommes-nous ?', 'Qu’est-ce que tu aimes faire ?'], answer: 0 },
    { type: 'cloze', before: '시간이 ', after: ' 자전거를 타요.', choices: ['있으면', '있어서'], answer: 0, translation: 'Si j’ai du temps, je fais du vélo.' },
    { type: 'type', prompt: '[[읽다]] → « j’ai l’intention de lire » :', answer: alts('읽으려고 해요', '읽으려고해요') },
  ],
};

const CHECKLIST: [string, string, string][] = [
  ['⏰', 'une heure + 에', '[[일곱 시에 일어나요.]]'],
  ['📅', 'une fréquence', '[[매일]] · [[자주]] · [[가끔]]'],
  ['⏪', 'un passé', '[[어제 영화를 봤어요.]]'],
  ['⏩', 'un futur ou une intention', '[[내일 친구를 만날 거예요.]]'],
  ['💡', 'une cause', '[[피곤해서 일찍 자요.]]'],
  ['🔀', 'une condition', '[[비가 오면 집에서 책을 읽어요.]]'],
  ['🔗', 'des connecteurs', '[[그리고]] · [[그래서]] · [[하지만]]'],
];

const day78: Lesson = {
  id: 'm4-w4-d3',
  month: 4,
  week: 4,
  day: 78,
  title: 'Mon journal : une journée type',
  summary: 'Écrire 8 à 10 phrases sur sa journée : heures, fréquence, passé, futur, cause -아서, condition -(으)면, avec une liste de contrôle. Nouveaux : 일기, 일어나요, 일찍.',
  cards: [
    { id: 'w16-ko-ilgi', kind: 'vocab', ko: '일기', fr: 'journal intime', note: '📓 [[일기를 써요]] = j’écris mon journal. [[매일 일기를 써요.]]' },
    { id: 'w16-ko-ireonayo', kind: 'phrase', ko: '일어나요', fr: 'je me lève, je me réveille (poli)', note: '⏰ La consigne [[일어나세요|t:levez-vous]] vient de là ! [[일곱 시에 일어나요.]]' },
    { id: 'w16-ko-iljjik', kind: 'vocab', ko: '일찍', fr: 'tôt', note: '🌅 [[일찍 일어나요]] · [[피곤해서 일찍 자요.]] Le contraire de [[늦게|t:tard]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Mon journal 📓' },
        { type: 'tip', text: 'Aujourd’hui, tu écris ton [[일기|t:journal]] : **une journée type**, de 8 à 10 phrases. Presque tout seul !', mood: 'encourage' },
        { type: 'text', text: 'Deux mots nouveaux : [[일어나요|t:je me lève]] — c’est le verbe de la consigne [[일어나세요]] ! — et [[일찍|t:tôt]].' },
        { type: 'text', text: 'Méthode de la classe : une **liste de contrôle**. Coche chaque case pendant que tu écris :' },
        { type: 'table', head: ['', 'Dans mon texte, il y a…', 'Exemple'], rows: CHECKLIST.map(([emoji, what, ex]) => [`☐ ${emoji}`, what, ex]) },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '⏰ « Je me lève à 7 h. »', before: '일곱 시', after: ' 일어나요.', choices: ['에', '에서', '를'], answer: 0, explain: 'L’heure prend le [[에|p:time]] du temps.' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '💡 « Je suis fatigué, donc je me couche tôt. »', before: '', after: ' 일찍 자요.', choices: ['피곤해서', '피곤하면', '피곤하지만'], answer: 0, explain: 'La cause : [[피곤해요]] → [[피곤해서|p:cause]].' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🔀 « S’il pleut, je lis à la maison. »', before: '비가 ', after: ' 집에서 책을 읽어요.', choices: ['오면', '와서', '오지만'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le journal de Nabi 📖' },
        { type: 'text', text: 'Lis le journal de Nabi (touche une phrase pour l’entendre). Retrouve chaque case de la liste !' },
        { type: 'table', head: ['📓 Le journal de Nabi'], rows: [
          ['[[저는 매일 일곱 시에 일어나요.]] [[아침에 밥을 먹어요. 그리고 학교에 가요.]]'],
          ['[[학교에서 한국어를 공부해요.]] [[한국어를 공부하는 것이 가장 재미있어요.]]'],
          ['[[점심에 친구하고 같이 밥을 먹어요.]] [[수업이 끝나면 자주 자전거를 타요.]]'],
          ['[[하지만 비가 오면 집에서 책을 읽어요.]] [[저녁에 가끔 영화를 봐요.]]'],
          ['[[어제는 축구를 해서 피곤했어요.]] [[그래서 일찍 잤어요.]] [[내일은 토요일이에요. 친구를 만날 거예요!]]'],
        ] },
        { type: 'tip', text: '[[어제는 축구를 해서 피곤했어요]] : jamais de passé devant [[서|p:cause]] — le temps se met à la fin !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'À quelle heure Nabi se lève-t-il ?', choices: ['À 7 h, tous les jours.', 'À 8 h, parfois.', 'Tôt, le samedi.'], answer: 0, explain: '[[저는 매일 일곱 시에 일어나요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que fait Nabi quand il pleut ?', choices: ['Il lit à la maison.', 'Il fait du vélo.', 'Il regarde un film.'], answer: 0, explain: '[[비가 오면 집에서 책을 읽어요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi Nabi s’est-il couché tôt hier ?', choices: ['Il avait joué au foot et il était fatigué.', 'Il était malade.', 'Il avait faim.'], answer: 0, explain: '[[어제는 축구를 해서 피곤했어요. 그래서 일찍 잤어요.]]' } },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Range les phrases du journal.', buckets: ['📅 une habitude', '📌 une seule fois'], items: [
      { text: '매일 일곱 시에 일어나요', bucket: 0 },
      { text: '자주 자전거를 타요', bucket: 0 },
      { text: '가끔 영화를 봐요', bucket: 0 },
      { text: '어제 일찍 잤어요', bucket: 1 },
      { text: '내일 친구를 만날 거예요', bucket: 1 },
    ] } },
    { kind: 'practice', exercise: { type: 'type', prompt: '⏰ « Je me lève à 7 h tous les jours. »', answer: alts('매일 일곱 시에 일어나요', '저는 매일 일곱 시에 일어나요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Journal 1/2 — **Le matin et à l’école.** Au moins quatre phrases : une heure, une fréquence et une cause en **-아서/어서**. [[쓰세요!]]', placeholder: '저는 매일 여덟 시에 일어나요. 학교에서 … 피곤해서 …', mustInclude: [FREQ_ANY, CAUSE_ANY] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Journal 2/2 — **Après la classe, hier et demain.** Au moins quatre phrases : une condition en **(으)면**, un passé et un futur.', placeholder: '수업이 끝나면 … 어제는 … 내일은 … 거예요.', mustInclude: [IF_ANY, FUTURE_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '저는 매일 일곱 시에 일어나요. 수업이 끝나면 자주 자전거를 타요. 하지만 비가 오면 집에서 책을 읽어요. 내일은 친구를 만날 거예요!', fr: 'Je me lève tous les jours à 7 h. Après la classe, je fais souvent du vélo. Mais s’il pleut, je lis à la maison. Demain, je verrai un ami !', prompt: 'Relis ton journal à voix haute, comme Nabi 📓' } },
  ],
  interleave: [
    { type: 'mcq', prompt: '« Je fais **souvent** du vélo. »', choices: ['자주 자전거를 타요.', '가끔 자전거를 타요.', '매일 자전거를 타요.'], answer: 0 },
    { type: 'type', prompt: '💚 « Ce que j’aime le plus, c’est lire. » ([[저는…]])', answer: alts('저는 책을 읽는 것을 가장 좋아해요', '저는 읽는 것을 가장 좋아해요') },
    { type: 'cloze', before: '노래하는 것을 ', after: '.', choices: ['잘해요', '잘 해 봤어요'], answer: 0, translation: 'Je chante bien.' },
    { type: 'type', prompt: '[[춥다]] → « s’il fait froid » :', answer: '추우면' },
  ],
};

const SLATE: [string, string[]][] = [
  ['🔀 « S’il fait beau, j’irai au parc. »', ['날씨가 좋으면 공원에 갈 거예요.', '날씨가 좋아서 공원에 가 봤어요.', '날씨가 좋으려고 공원에 가요.']],
  ['🧪 « J’ai déjà porté un hanbok. »', ['한복을 입어 봤어요.', '한복을 입으려고 해요.', '한복을 입는 것이에요.']],
  ['🧩 « J’aime écouter de la musique. »', ['음악을 듣는 것을 좋아해요.', '음악을 들어 보세요.', '음악을 들으면 좋아해요.']],
  ['🥇 « La musique, c’est ce que j’aime le plus. »', ['음악을 가장 좋아해요.', '음악보다 더 좋아해요.', '음악을 자주 좋아해요.']],
  ['⚖️ « Lire est plus amusant que regarder la télé. »', ['책을 읽는 것이 텔레비전을 보는 것보다 더 재미있어요.', '책을 읽는 것보다 텔레비전을 더 봐요.', '책을 읽으면 텔레비전을 봐요.']],
  ['📅 « Je m’exerce tous les jours. »', ['매일 연습해요.', '가끔 연습해요.', '연습하는 것이 가장 좋아요.']],
];

const day79: Lesson = {
  id: 'm4-w4-d4',
  month: 4,
  week: 4,
  day: 79,
  title: 'Révision du 4ᵉ mois & atelier oral',
  summary: 'Fiche bilan des semaines 13 à 16 (-(으)면, -아/어 보다, -(으)려고 해요, -는 것, 보다 더, 가장, 매일 · 자주 · 가끔), quiz sur l’ardoise et jeu de questions-réponses en équipes.',
  cards: [],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La fiche bilan du 4ᵉ mois 📋' },
        { type: 'tip', text: 'Demain, la **Grande évaluation n°8** ! Aujourd’hui, on balaie tout le mois.', mood: 'encourage' },
        { type: 'table', head: ['Je sais…', 'Forme', 'Exemple'], rows: [
          ['🔀 poser une [[condition|p:if]]', '(으)면', '[[비가 오면 우산을 써요.]]'],
          ['🌠 faire un [[vœu|p:wish]]', '(으)면 좋겠어요', '[[날씨가 좋으면 좋겠어요.]]'],
          ['🧪 raconter une [[expérience|p:try]]', '아/어 봤어요', '[[김치를 먹어 봤어요.]]'],
          ['🎯 dire mon [[intention|p:intend]]', '(으)려고 해요', '[[책을 읽으려고 해요.]]'],
          ['🧩 transformer un verbe en [[nom|p:nominal]]', '는 것', '[[책을 읽는 것을 좋아해요.]]'],
          ['⚖️ [[comparer|p:compare]]', '보다 더', '[[축구가 음악보다 더 재미있어요.]]'],
          ['🥇 dire « le plus »', '가장 · 제일', '[[한국어가 가장 재미있어요.]]'],
          ['📅 dire la fréquence', '매일 · 자주 · 가끔', '[[매일 연습해요.]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'La grande grille du mois. Touche une case vide.', head: ['Infinitif', '🔀 Si…', '🎯 Intention', '🧩 Le fait de…'], rows: [
      ['[[가다]]', blank('가면'), blank('가려고 해요'), blank('가는 것')],
      ['[[읽다]]', blank('읽으면'), blank('읽으려고 해요'), blank('읽는 것')],
      ['[[놀다]]', blank('놀면'), blank('놀려고 해요'), blank('노는 것')],
    ], explain: '🔵 [[가면]] · [[읽으면]] · [[놀면]] → [[려고 해요|p:intend]] pareil. 🧩 [[는 것|p:nominal]] : pas de 으, et le ㄹ tombe : [[노는 것]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Quiz sur l’ardoise ✏️' },
        { type: 'text', text: 'Le professeur dit une phrase en français, tout le monde lève son ardoise. Prêt ?' },
      ],
    },
    ...SLATE.map(([fr, choices], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'mcq' as const, prompt: `Ardoise ${i + 1}/${SLATE.length} — ${fr}`, choices, answer: 0 },
    })),
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le jeu des équipes 🏁' },
        { type: 'text', text: 'Activité de la classe : questions-réponses **rapides** en équipes. Une équipe pose la question, l’autre répond le plus vite possible. **Tout en coréen** :' },
        { type: 'dialog', lines: [
          { who: '🔴', ko: '취미가 뭐예요?' },
          { who: '🔵', ko: '제 취미는 수영하는 거예요!' },
          { who: '🔴', ko: '얼마나 자주 수영해요?' },
          { who: '🔵', ko: '자주 해요. 주말마다… 아! 토요일하고 일요일에 해요.' },
          { who: '🔵', ko: '한국 음식을 먹어 봤어요?' },
          { who: '🔴', ko: '네, 김치를 먹어 봤어요! 맛있지만 조금 매워요.' },
          { who: '🔵', ko: '뭐가 제일 재미있어요?' },
          { who: '🔴', ko: '체육이 제일 재미있어요! 수학보다 더 재미있어요.' },
          { who: '🔵', ko: '이번 주말에 뭐 하려고 해요?' },
          { who: '🔴', ko: '날씨가 좋으면 친구하고 자전거를 타려고 해요.' },
        ] },
        { type: 'tip', text: 'Petits mots : [[주말마다|t:chaque week-end]] · [[매워요|t:c’est piquant]] · [[이번 주말|t:ce week-end]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Question ↔ réponse : relie vite !', pairs: [
      ['취미가 뭐예요?', '제 취미는 수영하는 거예요.'],
      ['얼마나 자주 해요?', '자주 해요.'],
      ['뭐가 제일 재미있어요?', '체육이 제일 재미있어요.'],
      ['주말에 뭐 하려고 해요?', '자전거를 타려고 해요.'],
    ] } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Réponds vite ! [[뭐 하는 것을 좋아해요?]] → « J’aime faire du vélo. »', answer: alts('자전거를 타는 것을 좋아해요', '저는 자전거를 타는 것을 좋아해요') } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Réponds vite ! [[한복을 입어 봤어요?]] → « Non, pas encore. »', answer: alts('아니요, 아직 안 입어 봤어요', '아니요 아직 안 입어 봤어요', '아니요, 아직 안 입어봤어요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'À ton tour : réponds à [[뭐가 제일 재미있어요?]] et à [[얼마나 자주 해요?]] [[쓰세요!]]', placeholder: '그림을 그리는 것이 제일 재미있어요. 매일 그려요.', mustInclude: [MOST_ANY, FREQ_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '그림을 그리는 것이 제일 재미있어요. 그래서 매일 그림을 그려요. 시간이 있으면 공원에서 그리려고 해요.', fr: 'Dessiner, c’est le plus amusant. Alors je dessine tous les jours. Si j’ai du temps, j’ai l’intention de dessiner au parc.', prompt: 'Atelier oral : lis à voix haute, puis refais-le avec ton activité préférée.' } },
  ],
  interleave: [
    { type: 'type', prompt: '[[피곤하다]] → « comme je suis fatigué » :', answer: '피곤해서' },
    { type: 'mcq', prompt: '« Il paraît qu’il va pleuvoir demain. »', choices: ['내일 비가 온대요.', '내일 비가 오재요.', '내일 비가 오래요.'], answer: 0 },
    { type: 'cloze', before: '음악을 ', after: ' 숙제를 해요.', choices: ['들으면서', '듣는 것'], answer: 0, translation: 'Je fais mes devoirs en écoutant de la musique.' },
    { type: 'type', prompt: '[[읽다]] → « je suis en train de lire » :', answer: alts('읽고 있어요', '읽고있어요') },
  ],
};

const DICTATION = [
  '책을 읽는 것을 좋아해요',
  '제 취미는 노래를 부르는 거예요',
  '저는 축구하는 것을 가장 좋아해요',
  '체육이 수학보다 더 재미있어요',
  '한국어를 공부하는 것이 제일 재미있어요',
  '김치를 먹어 봤어요',
  '매일 한국어를 연습해요',
  '가끔 친구하고 영화를 봐요',
];

const day80: Lesson = {
  id: 'm4-w4-d5',
  month: 4,
  week: 4,
  day: 80,
  title: 'Bilan du 4ᵉ mois & Grande évaluation n°8',
  summary: 'La dictée de la classe, la rédaction « Mon activité préférée », la Grande évaluation bimensuelle n°8, ton entretien de bilan et une histoire entièrement en coréen.',
  cards: [
    { id: 'w16-ko-noraereul-bulleoyo', kind: 'phrase', ko: '노래를 불러요', fr: 'je chante (une chanson) (poli)', note: '🎤 [[부르다]] → [[불러요]] (à retenir tel quel) · [[부르는 것]] (régulier). = [[노래해요]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le grand jour 🎓' },
        { type: 'tip', text: 'Quatre-vingts leçons ! Aujourd’hui, l’épreuve de la classe puis la **Grande évaluation n°8**. [[천천히 가도 돼요]] : sans stress !', mood: 'encourage' },
        { type: 'text', text: 'Une expression nouvelle pour la dictée : [[노래를 불러요|t:je chante (une chanson)]] = [[노래해요]]. D’abord, la **dictée** : huit phrases. [[들으세요!]] Puis [[쓰세요!]]' },
      ],
    },
    ...DICTATION.map((s, i) => ({
      kind: 'practice' as const,
      exercise: { type: 'type' as const, prompt: `Dictée ${i + 1}/${DICTATION.length}`, audio: s, answer: alts(s) },
    })),
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Rédaction ✏️' },
        { type: 'text', text: 'Épreuve de la classe : 8 à 10 phrases sur le thème « **Mon activité préférée à l’école et pourquoi je l’aime** ». Pense à ta liste de contrôle d’hier !' },
      ],
    },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Rédaction 1/2 — **Mon activité préférée** : ce que c’est, avec **가장** ou **제일**, et à quelle fréquence. [[쓰세요!]]', placeholder: '저는 학교에서 체육을 가장 좋아해요. 달리는 것이 제일 재미있어요. 매일…', mustInclude: [MOST_ANY, FREQ_ANY] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Rédaction 2/2 — **Pourquoi je l’aime** : une cause en **-아서/어서**, une comparaison avec **보다 더**, un souhait ou un projet.', placeholder: '체육 시간이 재미있어서 좋아요. 체육이 수학보다 더 재미있어요. 다음에…', mustInclude: [CAUSE_ANY, '보다'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Grande évaluation n°8' },
        { type: 'text', text: 'Quatre parties, toujours sans piège ni chrono. Chaque erreur reviendra simplement en révision.' },
        { type: 'table', head: ['Partie', 'Contenu'], rows: [
          ['A', 'Nominalisation & superlatif'],
          ['B', 'Fréquence'],
          ['C', 'Compréhension écrite'],
          ['D', 'Production orale'],
        ] },
        { type: 'tip', text: '**A — Nominalisation & superlatif.** Complète les phrases.', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '**A · 1/2** — 🎤', before: '제 취미는 노래를 ', after: ' 거예요.', choices: ['부르는', '불러요', '부르면'], answer: 0, translation: 'Mon passe-temps, c’est chanter.' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '**A · 2/2** — ⚽🥇 [[저는 축구하는 것을]] ______ [[좋아해요.]]', answer: alts('가장', '저는 축구하는 것을 가장 좋아해요') } },
    {
      kind: 'learn',
      blocks: [
        { type: 'tip', text: '**B — Fréquence.** Lis l’emploi du temps de Sua, puis relie chaque activité à son adverbe.', mood: 'encourage' },
        { type: 'table', head: ['', ...DAYS.map((d) => `[[${d}]]`)], rows: [
          ['🎨', '✅', '✅', '✅', '✅', '✅', '✅', '✅'],
          ['📚', '✅', '·', '✅', '·', '✅', '·', '·'],
          ['🏊', '·', '·', '·', '·', '·', '✅', '·'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: '**B**', pairs: [
      ['🎨 그림을 그려요', '매일'],
      ['📚 도서관에 가요', '자주'],
      ['🏊 수영해요', '가끔'],
    ] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'tip', text: '**C — Compréhension.** Lis le texte de Jihoon (touche une phrase pour l’entendre), puis réponds.', mood: 'encourage' },
        { type: 'table', head: ['Le texte de Jihoon'], rows: [
          ['[[제 취미는 축구를 하는 거예요.]] [[저는 매일 학교 운동장에서 축구를 해요.]] [[축구를 하는 것이 수영하는 것보다 더 재미있어요.]] [[가끔 아버지하고 같이 축구를 봐요.]] [[저는 체육 시간을 가장 좋아해요.]] [[하지만 수학은 너무 어려워요.]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 1/4** — Où Jihoon joue-t-il au foot tous les jours ?', choices: ['dans la cour de l’école', 'au parc', 'à la maison'], answer: 0, explain: '[[매일 학교 운동장에서 축구를 해요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 2/4** — Vrai ou faux ? « Jihoon trouve la natation plus amusante que le foot. »', choices: ['Vrai', 'Faux'], answer: 1, explain: '[[축구를 하는 것이 수영하는 것보다 더 재미있어요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 3/4** — Avec qui regarde-t-il parfois le foot ?', choices: ['avec son père', 'avec sa mère', 'avec ses amis'], answer: 0, explain: '[[가끔 아버지하고 같이 축구를 봐요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 4/4** — Quelle matière préfère-t-il ?', choices: ['le sport (EPS)', 'les maths', 'la musique'], answer: 0, explain: '[[저는 체육 시간을 가장 좋아해요.]]' } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**D — À l’oral.** Présente en 3 ou 4 phrases ton sport ou ton passe-temps préféré, avec **는 것** et **가장**.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'write', prompt: '**D · 1/2** — Prépare ta présentation.', placeholder: '저는 … 는 것을 가장 좋아해요. 매일 …', mustInclude: [NOMINAL_ANY, MOST_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '저는 자전거를 타는 것을 가장 좋아해요. 매일 타요. 자전거를 타는 것이 수영하는 것보다 더 재미있어요. 주말에 날씨가 좋으면 친구하고 공원에서 탈 거예요.', fr: 'Ce que j’aime le plus, c’est faire du vélo. J’en fais tous les jours. Faire du vélo est plus amusant que nager. Ce week-end, s’il fait beau, j’en ferai au parc avec un ami.', prompt: '**D · 2/2** — Présente-la à voix haute, puis écoute le modèle.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le classement de la classe 📖' },
        { type: 'text', text: 'Une histoire **entièrement en coréen**. Touche une bulle pour l’entendre.' },
        { type: 'dialog', lines: [
          { who: '📖', ko: '금요일 오후예요. 선생님이 칠판에 질문을 썼어요: “뭐가 제일 재미있어요?”' },
          { who: '지훈', ko: '체육이 제일 재미있어요! 저는 매일 달려요.' },
          { who: '수아', ko: '저는 노래를 부르는 것을 가장 좋아해요. 음악이 체육보다 더 재미있어요!' },
          { who: '지훈', ko: '아니요! 체육이 더 재미있어요!' },
          { who: '선생님', ko: '하하. 둘 다 좋아요. 민수는요?' },
          { who: '민수', ko: '저는 점심 시간을 가장 좋아해요. 먹는 것이 제일 재미있어요! 🍚' },
          { who: '📖', ko: '아이들이 웃어요.' },
          { who: '선생님', ko: '나비는요? 뭐 하는 것을 가장 좋아해요?' },
          { who: '나비', ko: '저는 한국어를 공부하는 것을 가장 좋아해요. 그래서 매일 연습해요.' },
          { who: '나비', ko: '처음에는 한국어가 어려웠어요. 하지만 지금은 정말 재미있어요!' },
          { who: '선생님', ko: '와, 나비가 한국어를 정말 잘해요!' },
          { who: '📖', ko: '그날 밤, 나비는 일기를 썼어요: “오늘 정말 좋았어요. 내일은 날개가 생기면 좋겠어요!” 🦋' },
        ] },
        { type: 'tip', text: 'Petits mots : [[칠판|t:le tableau]] · [[둘 다|t:les deux]] · [[처음에는|t:au début]] · [[그날 밤|t:ce soir-là]] · [[날개가 생기면|t:si des ailes poussent]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Sur quoi Sua et Jihoon ne sont-ils pas d’accord ?', choices: ['La musique ou le sport.', 'Le déjeuner.', 'Le coréen.'], answer: 0, explain: '[[음악이 체육보다 더 재미있어요!]] — [[아니요! 체육이 더 재미있어요!]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’écrit Nabi dans son journal ?', choices: ['Qu’il aimerait avoir des ailes demain.', 'Qu’il est fatigué.', 'Qu’il va au parc demain.'], answer: 0, explain: '[[내일은 날개가 생기면 좋겠어요!|p:wish]]' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ton bilan du 4ᵉ mois 🎓' },
        { type: 'text', text: 'Quatre mois sur six, seize semaines, quatre-vingts leçons. Voici ce que tu sais faire :' },
        { type: 'table', head: ['Domaine', 'Acquis'], rows: [
          ['Lire & écrire', 'le hangul sans hésiter, les [[받침]] et les liaisons ; des textes de 8 à 10 phrases en autonomie'],
          ['Temps', '[[présent|p:present]] · [[passé|p:past]] · [[futur|p:future]] · [[en train de|p:progressive]] ([[먹고 있어요]])'],
          ['Particules', '[[은/는|p:topic]] · [[이/가|p:subject]] · [[을/를|p:object]] · [[에|p:place]] · [[에서|p:action]] · [[보다|p:compare]]'],
          ['Relier', '[[그리고]] · [[그래서]] · [[-아서|p:cause]] · [[-지만|p:contrast]] · [[-(으)면|p:if]] · [[-(으)면서|p:while]]'],
          ['Rapporter', '[[-대요|p:report]] · [[-재요|p:report-let]] · [[-래요|p:report-cmd]]'],
          ['Parler de soi', '[[expériences|p:try]], [[intentions|p:intend]], [[vœux|p:wish]], goûts et talents ([[-는 것|p:nominal]]), [[comparaisons|p:compare]], [[가장]], [[매일]] · [[자주]] · [[가끔]]'],
          ['Vocabulaire', '**environ 365 cartes** de révision — près de **400 mots** en comptant ceux des phrases'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'read', ko: '선생님, 저는 한국어를 공부하는 것을 가장 좋아해요. 매일 연습해요. 처음에는 어려웠어요. 하지만 지금은 정말 재미있어요. 다음 달에도 열심히 공부할 거예요!', fr: 'Monsieur / Madame, ce que j’aime le plus, c’est étudier le coréen. Je m’exerce tous les jours. Au début c’était difficile, mais maintenant c’est vraiment intéressant. Le mois prochain aussi, j’étudierai avec ardeur !', prompt: 'Ton entretien de bilan : parle au professeur de ta progression, à voix haute. ([[다음 달|t:le mois prochain]] · [[열심히|t:avec ardeur]])' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Bravo, 4ᵉ mois terminé ! 🎉' },
        { type: 'text', text: 'Tu parles de toi avec précision : ce que tu aimes **le plus**, ce que tu fais **souvent**, ce que tu as **déjà essayé** et ce que tu **comptes** faire. Et tu écris une page entière tout seul !' },
        { type: 'tip', text: 'Ma chrysalide craque… Demain, le **5ᵉ mois** commence et je serai enfin un **papillon** ! [[내일 만나요!|t:à demain !]] 🦋', mood: 'happy' },
      ],
    },
  ],
};

export const m4w4: Lesson[] = [day76, day77, day78, day79, day80];
