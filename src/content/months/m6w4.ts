import type { GridBlank, Lesson } from '../types';

const COLLAPSE: [RegExp, string][] = [
  [/ 거예요/g, '거예요'],
  [/ 거라고/g, '거라고'],
  [/는 것/g, '는것'],
  [/ 같아요/g, '같아요'],
  [/려고 해요/g, '려고해요'],
  [/러 (가|와|갈|갔|왔)/g, '러$1'],
  [/기억에 남/g, '기억에남'],
];
const alts = (...xs: string[]): string[] => {
  const out = new Set(xs);
  for (const [re, to] of COLLAPSE) for (const s of [...out]) out.add(s.replace(re, to));
  for (const s of [...out]) out.add(s.replace(/[.,!?] /g, ' '));
  for (const s of [...out]) out.add(s.replace(/[.!?]$/, ''));
  return [...out];
};
const blank = (...s: string[]): GridBlank => ({ answer: alts(...s) });

const PAST_ANY = '았어요|었어요|했어요|갔어요|왔어요|봤어요|였어요|었다|았다|했다';
const CAUSE_ANY = '아서|어서|해서|그래서|와서|워서|파서|빠서';
const SEEM_ANY = '것 같아요|것같아요|것 같다|것같다';
const REPORT_ANY = '다고|라고|냐고|대요|래요|재요';
const PLAN_ANY = '려고 해요|려고해요|려고 해|거예요|거야|거다';
const HONOR_ANY = '세요|셨|께|드세요|계세요|습니다';

const ESSAY: [string, string][] = [
  ['올해 학교에서 가장 기억에 남는 날은 소풍 날이에요.', '🧩 relative'],
  ['봄에 반 친구들하고 같이 공원에 갔어요.', '⏪ passé'],
  ['그날 아침에는 비가 와서 우산을 가져갔어요.', '🔗 cause'],
  ['그런데 선생님이 오후에는 날씨가 좋을 거라고 하셨어요.', '💬 style indirect'],
  ['정말 오후에 해가 반짝반짝 빛났어요.', '✨ mot imagé'],
  ['우리는 나무 아래에서 김밥을 먹으면서 이야기했어요.', '🎧 simultanéité'],
  ['지훈이가 토끼처럼 깡충깡충 뛰어서 모두 웃었어요.', '🌸 comparaison + cause'],
  ['그날 저는 처음으로 한국어로 친구들하고 많이 이야기했어요.', '⏪ passé'],
  ['그래서 그날이 가장 기억에 남는 것 같아요.', '🤔 opinion'],
  ['이제 한국어로 말하는 것이 정말 재미있어요.', '📦 nominalisation'],
  ['다음 소풍도 빨리 오면 좋겠어요!', '🌠 souhait'],
];

const day116: Lesson = {
  id: 'm6-w4-d1',
  month: 6,
  week: 4,
  day: 116,
  title: 'Mon souvenir préféré : 가장 기억에 남는 날',
  summary: 'Révision générale des structures de récit (passé, cause -아서, opinion -는 것 같아요, style indirect -다고 했어요, relatives) dans un mini-essai de 10 à 12 phrases en 원고지, en autonomie complète. Nouveaux : 올해, 기억에 남아요, 동안, 반.',
  cards: [
    { id: 'w24-ko-olhae', kind: 'vocab', ko: '올해', fr: 'cette année', note: '📅 Comme [[오늘]] (aujourd’hui), [[올해]] (cette année) ; pas de [[에]] : [[올해 한국어를 배웠어요.]]' },
    { id: 'w24-ko-gieoge-nama', kind: 'phrase', ko: '가장 기억에 남는 날', fr: 'le jour qui m’a le plus marqué (qui reste le plus en mémoire)', note: '🧠 [[기억|t:mémoire, souvenir]] + [[에]] + [[남다|t:rester]] → [[기억에 남아요]] = « ça reste en mémoire ». Devant un nom : [[남는|p:relative]]. [[올해 가장 기억에 남는 날은 소풍 날이에요.]]' },
    { id: 'w24-ko-dongan', kind: 'vocab', ko: '동안', fr: 'pendant (nom + 동안)', note: '⏳ [[방학 동안|t:pendant les vacances]] · [[일 년 동안|t:pendant un an]] · [[여섯 달 동안|t:pendant six mois]].' },
    { id: 'w24-ko-ban', kind: 'vocab', ko: '반 · 반 친구', fr: 'classe (groupe d’élèves) · camarade de classe', note: '🏫 Le [[반]] de [[반장]] (chef de classe). ⚠️ ≠ [[반]] « demie » ([[세 시 반]]). [[같은 반|t:la même classe]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La toute dernière semaine 🎓' },
        { type: 'tip', text: 'Nous y sommes : la **24ᵉ semaine**, la dernière des 6 mois ! Grande nouveauté : plus de fiche simplifiée. Cette semaine, tu travailles **exactement comme tes camarades coréens**. [[화이팅!|t:courage, allez !]]', mood: 'encourage' },
        { type: 'text', text: 'Sujet de la classe : raconter ton **souvenir préféré** de l’année à l’école. Mots nouveaux : [[올해|t:cette année]] · [[가장 기억에 남는 날|t:le jour qui m’a le plus marqué]] · [[반 친구|t:camarade de classe]] · [[동안|t:pendant]].' },
        { type: 'breakdown', segments: [
          { ko: '올해', role: 'time', gloss: 'cette année' },
          { ko: '가장 기억에 남는 날', role: 'topic', gloss: 'le jour le plus marquant', particle: { ko: '은', key: 'topic' } },
          { ko: '소풍 날이에요', role: 'verb', gloss: 'est le jour du pique-nique' },
        ], translation: 'Cette année, le jour qui m’a le plus marqué, c’est le jour du pique-nique.' },
        { type: 'tip', text: '[[기억|t:mémoire]] + [[남다|t:rester]] : « ça reste en mémoire ». Tu reconnais le **는** de la relative au présent : [[남는 날|p:relative]] = le jour qui reste.', mood: 'thinking' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La boîte à outils du récit 🧰' },
        { type: 'table', head: ['Outil', 'Forme', 'Exemple'], rows: [
          ['⏪ passé', '[[-았/었어요|p:past]]', '[[공원에 갔어요.]]'],
          ['🔗 cause', '[[-아서/어서|p:cause]]', '[[비가 와서 우산을 가져갔어요.]]'],
          ['🤔 opinion', '[[-는 것 같아요|p:seem]]', '[[가장 기억에 남는 것 같아요.]]'],
          ['💬 style indirect', '[[-다고 했어요|p:report-full]]', '[[날씨가 좋을 거라고 하셨어요.]]'],
          ['🧩 relative', '[[-(으)ㄴ · 는 · (으)ㄹ|p:rel-past]]', '[[어제 먹은 김밥]] · [[기억에 남는 날]]'],
          ['🎧 en même temps', '[[-(으)면서|p:while]]', '[[먹으면서 이야기했어요.]]'],
        ] },
        { type: 'tip', text: 'Rappel : jamais de passé devant [[서|p:cause]] → [[비가 와서]] (pas ❌ 왔어서). Le temps se met à la **fin** de la phrase.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🔗 « Il pleuvait, alors j’ai pris un parapluie. »', choices: ['비가 와서 우산을 가져갔어요.', '비가 왔어서 우산을 가져갔어요.', '비가 오면서 우산을 가져갔어요.'], answer: 0, explain: 'Pas de passé devant **서**.' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '💬 Le professeur a dit : « 오후에는 날씨가 좋을 거예요. » →', choices: ['선생님이 오후에는 날씨가 좋을 거라고 하셨어요.', '선생님이 오후에는 날씨가 좋을 거냐고 하셨어요.', '선생님이 오후에는 날씨가 좋아서 하셨어요.'], answer: 0, explain: 'Futur rapporté : [[거라고|p:report-full]] ; pour le professeur : [[하셨어요|p:honor]].' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🤔 « Je pense que c’est le jour qui m’a le plus marqué. »', before: '그날이 가장 기억에 ', after: '.', choices: ['남는 것 같아요', '남은 것 같아요', '남을 거라고 했어요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le mini-essai de Nabi 📝' },
        { type: 'text', text: 'Lis le modèle. À droite, l’outil utilisé dans chaque phrase.' },
        { type: 'table', head: ['[[가장 기억에 남는 날]]', 'Outil'], rows: ESSAY.map(([ko, tool]) => [`[[${ko}]]`, tool]) },
        { type: 'tip', text: 'Petits mots : [[그날|t:ce jour-là]] · [[빛났어요|t:a brillé]] · [[처음으로|t:pour la première fois]] · [[한국어로|t:en coréen]] ([[로]] comme [[연필로]]) · [[모두|t:tout le monde]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi Nabi a-t-il pris un parapluie ?', choices: ['Parce qu’il pleuvait le matin.', 'Parce que le professeur l’a demandé.', 'Parce qu’il faisait très chaud.'], answer: 0, explain: '[[그날 아침에는 비가 와서 우산을 가져갔어요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi ce jour est-il si important pour Nabi ?', choices: ['Il a beaucoup parlé coréen avec ses amis pour la première fois.', 'Il a mangé des kimbap pour la première fois.', 'Il a vu un lapin dans le parc.'], answer: 0, explain: '[[처음으로 한국어로 친구들하고 많이 이야기했어요.]]' } },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie la phrase à son outil.', pairs: [
      ['비가 와서 우산을 가져갔어요', '🔗 cause'],
      ['좋을 거라고 하셨어요', '💬 style indirect'],
      ['기억에 남는 것 같아요', '🤔 opinion'],
      ['먹으면서 이야기했어요', '🎧 en même temps'],
    ] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Écrire en 원고지 ▦' },
        { type: 'text', text: 'Les élèves coréens rédigent sur du [[원고지|t:papier quadrillé à cases]] : une case par syllabe. Quatre règles :' },
        { type: 'table', head: ['Règle', 'Exemple'], rows: [
          ['1️⃣ Une syllabe = une case', '[[올]] ▢ [[해]] ▢'],
          ['2️⃣ Un espace = une case vide', '[[소풍]] ▢ [[날]]'],
          ['3️⃣ Chaque nouveau paragraphe commence par une case vide', '▢ [[올해]] …'],
          ['4️⃣ Le point et la virgule ont leur propre case', '[[갔어요]] ▢ .'],
        ] },
        { type: 'tip', text: 'Dans l’application, écris normalement : l’important, ce sont les **espaces** au bon endroit (entre les mots, jamais avant une particule).', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'order', translation: 'Cette année, le jour qui m’a le plus marqué, c’est le jour du pique-nique.', tiles: ['올해', '가장', '기억에', '남는', '날은', '소풍', '날이에요.'], distractors: ['남은'] } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🧠 « le jour qui m’a le plus marqué »', answer: alts('가장 기억에 남는 날', '제일 기억에 남는 날') } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'À toi : ton mini-essai ✍️' },
        { type: 'tip', text: 'En **autonomie complète** : 10 à 12 phrases, en deux parties. Utilise au moins le **passé**, une **cause**, une **opinion** (**는 것 같아요**) et un **style indirect** (**다고 했어요**).', mood: 'encourage' },
        { type: 'table', head: ['Partie', 'Idées'], rows: [
          ['1️⃣ Le récit (6 phrases)', 'quand ? où ? avec qui ? qu’est-ce qui s’est passé ? qu’est-ce que quelqu’un a dit ?'],
          ['2️⃣ Pourquoi ce souvenir (5 phrases)', '[[그래서]] … [[는 것 같아요]] · [[이제]] … · [[면 좋겠어요]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Mini-essai 1/2 — **Le récit** : 6 phrases au passé, avec une **cause** et un **style indirect**. [[쓰세요!]]', placeholder: '올해 가장 기억에 남는 날은 … 날이에요. … 에 갔어요. … 와서 … 그런데 친구가 … 다고 했어요…', mustInclude: [PAST_ANY, CAUSE_ANY, REPORT_ANY] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Mini-essai 2/2 — **Pourquoi ce souvenir** : 5 phrases, avec une **opinion** en **는 것 같아요**.', placeholder: '그래서 그날이 가장 기억에 남는 것 같아요. 이제 … 는 것이 정말 재미있어요…', mustInclude: [SEEM_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: ESSAY.slice(0, 5).map(([ko]) => ko).join(' '), fr: 'Cette année, le jour qui m’a le plus marqué, c’est le jour du pique-nique. Au printemps, je suis allé au parc avec mes camarades de classe. Ce matin-là, il pleuvait, alors j’ai pris un parapluie. Mais le professeur a dit qu’il ferait beau l’après-midi. Et l’après-midi, le soleil a vraiment brillé.', prompt: 'Mise en pratique : lis le début de l’essai modèle à voix haute 📝' } },
  ],
  interleave: [
    { type: 'type', prompt: '☀️ « Le soleil est joli comme une fleur. »', answer: alts('해는 꽃처럼 예뻐요', '해는 꽃같이 예뻐요') },
    { type: 'mcq', prompt: '🌧️ [[부슬부슬]] =', choices: ['pluie fine, tout doucement', 'tout brillant', 'avec un grand sourire'], answer: 0 },
    { type: 'mcq', prompt: '📜 [[분다]] en style 요 :', choices: ['불어요', '분어요', '부어요'], answer: 0 },
    { type: 'cloze', before: '시험을 잘 ', after: ' 열심히 공부해야 돼요.', choices: ['보려고', '보러'], answer: 0, translation: 'Il faut étudier sérieusement pour réussir l’examen.' },
  ],
};

const SPEECH: [string, string][] = [
  ['안녕하세요? 오늘은 제 한국어 이야기를 발표할 거예요.', 'Bonjour ! Aujourd’hui, je vais vous présenter mon histoire avec le coréen.'],
  ['처음에는 한글도 몰랐어요. 그래서 정말 어려웠어요.', 'Au début, je ne connaissais même pas le hangeul. Alors c’était vraiment difficile.'],
  ['하지만 매일 열심히 공부했어요.', 'Mais j’ai étudié sérieusement tous les jours.'],
  ['지금은 친구들하고 한국어로 이야기할 수 있어요.', 'Maintenant, je peux parler coréen avec mes amis.'],
  ['동시도 읽고, 일기도 쓸 수 있어요. 실력이 많이 늘었어요!', 'Je peux lire des poèmes et écrire mon journal. J’ai beaucoup progressé !'],
  ['방학 동안 할머니 댁에 가려고 해요.', 'Pendant les vacances, j’ai l’intention d’aller chez ma grand-mère.'],
  ['그리고 가족하고 바다로 여행을 갈 거예요.', 'Et je vais partir en voyage à la mer avec ma famille.'],
  ['방학에도 매일 한국어 책을 읽을 거예요. 감사합니다!', 'Pendant les vacances aussi, je lirai un livre en coréen chaque jour. Merci !'],
];

const day117: Lesson = {
  id: 'm6-w4-d2',
  month: 6,
  week: 4,
  day: 117,
  title: 'Mon parcours cette année : 발표',
  summary: 'Présentation orale de 2 minutes devant la classe : ce que j’ai appris (처음에는… 지금은…), mes progrès (실력이 늘었어요) et mes projets de vacances (-(으)려고 해요 / -(으)ㄹ 거예요). Nouveaux : 발표하다, 실력이 늘었어요, 여행.',
  cards: [
    { id: 'w24-ko-balpyo', kind: 'vocab', ko: '발표해요', fr: 'je présente (un exposé), je fais une présentation (발표하다)', note: '🎤 [[발표|t:exposé, présentation]]. [[친구들 앞에서 발표할 거예요.]]' },
    { id: 'w24-ko-silryeok', kind: 'phrase', ko: '실력이 많이 늘었어요', fr: 'J’ai fait beaucoup de progrès. (mon niveau a beaucoup augmenté)', note: '📈 [[실력|t:niveau, compétence]] + [[늘다|t:augmenter]] → [[늘었어요]]. Le **niveau** est sujet : [[이|p:subject]]. [[한국어 실력이 늘었어요.]]' },
    { id: 'w24-ko-yeohaeng', kind: 'vocab', ko: '여행', fr: 'voyage', note: '🧳 [[여행을 가요]] = partir en voyage. [[가족하고 바다로 여행을 갈 거예요.]] ([[로]] = vers)' },
    { id: 'w24-ko-cheoeumeneun-jigeumeun', kind: 'phrase', ko: '처음에는 어려웠어요. 지금은 재미있어요.', fr: 'Au début, c’était difficile. Maintenant, c’est amusant.', note: '🌱 [[처음에는]] … [[지금은]] … : le duo parfait pour raconter ses progrès. [[는|p:topic]] marque le contraste.' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Mon parcours cette année 🎤' },
        { type: 'tip', text: 'Aujourd’hui, chaque élève passe **2 minutes** devant la classe. Toi aussi ! Trois parties : ce que tu as appris, tes progrès, tes projets pour les vacances.', mood: 'encourage' },
        { type: 'table', head: ['Partie', 'Outil', 'Exemple'], rows: [
          ['🌱 Avant', '[[처음에는]] + passé', '[[처음에는 한글도 몰랐어요.]]'],
          ['📈 Maintenant', '[[지금은]] + [[(으)ㄹ 수 있어요|p:ability]]', '[[지금은 한국어로 이야기할 수 있어요.]]'],
          ['🏖️ Vacances', '[[-(으)려고 해요|p:intend]] · [[-(으)ㄹ 거예요|p:future]]', '[[할머니 댁에 가려고 해요.]]'],
        ] },
        { type: 'text', text: 'Mots nouveaux : [[발표해요|t:je présente un exposé]] · [[실력이 늘었어요|t:j’ai progressé]] · [[여행|t:voyage]]. Et [[몰랐어요|t:je ne savais pas]] (de [[모르다]], forme spéciale comme [[골라요]]).' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le discours de Nabi 🦋' },
        { type: 'dialog', lines: SPEECH.map(([ko, fr]) => ({ who: '나비', ko, fr })) },
        { type: 'tip', text: 'Un bon discours se dit **lentement**, avec une pause après chaque phrase. Regarde ton public, et souris au début et à la fin !', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Au début, qu’est-ce que Nabi ne connaissait pas ?', choices: ['Le hangeul.', 'Ses camarades.', 'Le professeur.'], answer: 0, explain: '[[처음에는 한글도 몰랐어요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que va faire Nabi avec sa famille ?', choices: ['Partir en voyage à la mer.', 'Aller chez sa grand-mère.', 'Lire un livre.'], answer: 0, explain: '[[가족하고 바다로 여행을 갈 거예요.]]' } },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Avant ou maintenant ?', buckets: ['🌱 avant', '📈 maintenant'], items: [
      { text: '한글도 몰랐어요', bucket: 0 },
      { text: '정말 어려웠어요', bucket: 0 },
      { text: '친구가 없었어요', bucket: 0 },
      { text: '한국어로 이야기할 수 있어요', bucket: 1 },
      { text: '일기를 쓸 수 있어요', bucket: 1 },
      { text: '동시를 읽을 수 있어요', bucket: 1 },
    ] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Mes projets : 려고 해요 ou 거예요 ? 🏖️' },
        { type: 'table', head: ['', 'Nuance', 'Exemple'], rows: [
          ['[[-(으)려고 해요|p:intend]]', 'j’ai l’**intention** de…, je compte…', '[[할머니 댁에 가려고 해요.]]'],
          ['[[-(으)ㄹ 거예요|p:future]]', 'je **vais**… (c’est prévu)', '[[바다로 여행을 갈 거예요.]]'],
        ] },
        { type: 'tip', text: 'Les deux marchent pour tes projets. Varie-les pour que ton discours soit vivant ! Et avec [[방학 동안|t:pendant les vacances]], tout le monde comprend que tu parles de l’été.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Mes projets : touche une case vide.', head: ['Verbe', '🎯 려고 해요', '🔮 거예요'], rows: [
      ['[[가다]]', blank('가려고 해요'), blank('갈 거예요')],
      ['[[읽다]]', blank('읽으려고 해요'), blank('읽을 거예요')],
      ['[[놀다]]', blank('놀려고 해요'), blank('놀 거예요')],
      ['[[수영하다]]', blank('수영하려고 해요'), blank('수영할 거예요')],
    ], explain: 'Règle de [[면|p:if]] : voyelle et ㄹ → **려고** / **ㄹ** ; consonne → **으려고** / **을**.' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Pendant les vacances, j’ai l’intention d’aller chez ma grand-mère.', tiles: ['방학', '동안', '할머니', '댁에', '가려고 해요.'], distractors: ['가러'] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '한국어 실력이 많이 늘었어요', choices: ['한국어 실력이 많이 늘었어요', '한국어 실력이 많이 늘 거예요', '한국어 책이 많이 있어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '📈 « J’ai fait beaucoup de progrès. »', answer: alts('실력이 많이 늘었어요', '한국어 실력이 많이 늘었어요') } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🧳 « Je vais partir en voyage avec ma famille. »', answer: alts('가족하고 여행을 갈 거예요', '가족하고 같이 여행을 갈 거예요', '가족하고 여행 갈 거예요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Prépare ton discours : **avant** ([[처음에는]]), **maintenant** ([[지금은]]) et **2 projets** de vacances (**려고 해요** et **거예요**). [[쓰세요!]]', placeholder: '처음에는 … 어려웠어요. 지금은 … 수 있어요. 방학 동안 … 려고 해요. 그리고 … 거예요.', mustInclude: ['처음', '지금', PLAN_ANY] } },
    ...[0, 2, 4, 6].map((i, n) => ({
      kind: 'practice' as const,
      exercise: { type: 'read' as const, ko: `${SPEECH[i][0]} ${SPEECH[i + 1][0]}`, fr: `${SPEECH[i][1]} ${SPEECH[i + 1][1]}`, prompt: `Devant la classe ${n + 1}/4 — dis-le de manière fluide, puis écoute le modèle 🎤` },
    })),
  ],
  interleave: [
    { type: 'type', prompt: '📅 « cette année »', answer: '올해' },
    { type: 'mcq', prompt: '⏳ [[방학 동안]] =', choices: ['pendant les vacances', 'avant les vacances', 'après les vacances'], answer: 0 },
    { type: 'cloze', before: '아침에는 비가 ', after: ' 우산을 가져갔어요.', choices: ['와서', '왔어서'], answer: 0, translation: 'Le matin, il pleuvait, alors j’ai pris un parapluie.' },
    { type: 'mcq', prompt: '« Le ciel est bleu comme la mer. »', choices: ['하늘은 바다처럼 파래요.', '하늘은 바다하고 파래요.', '하늘은 바다 같이요.'], answer: 0 },
  ],
};

const MOCK_TEXT = [
  '지훈이는 토요일에 할머니 댁에 갔어요.',
  '할머니 댁은 바다 옆에 있어요.',
  '창문을 열면 바다가 보여요.',
  '지훈이는 할머니하고 같이 바다에서 걸었어요.',
  '할머니는 지훈이에게 내일 비가 올 거라고 하셨어요.',
  '그래서 일요일에는 집에서 책을 읽었어요.',
];

const day118: Lesson = {
  id: 'm6-w4-d3',
  month: 6,
  week: 4,
  day: 118,
  title: 'Épreuve blanche de 국어',
  summary: 'Simulation d’examen de coréen de fin de 3ᵉ année, consignes uniquement en coréen : compréhension de texte, poésie, grammaire, rédaction. Nouveaux : 글, 다음 글을 읽고 질문에 답하세요, 빈칸에 알맞은 말을 쓰세요.',
  cards: [
    { id: 'w24-ko-geul', kind: 'vocab', ko: '글', fr: 'texte, écrit', note: '📄 [[글을 읽어요]] · [[글을 써요]] (écrire un texte). [[한글]] = « l’écriture coréenne ».' },
    { id: 'w24-ko-daeum-geul', kind: 'phrase', ko: '다음 글을 읽고 질문에 답하세요', fr: 'Lisez le texte suivant et répondez aux questions.', note: '📝 [[다음|t:suivant]] (comme [[다음 주]]) · [[읽고]] (et) · [[답하다|t:répondre]] = [[대답하다]] à l’écrit, avec [[에]] : [[질문에 답하세요]].' },
    { id: 'w24-ko-almajeun', kind: 'phrase', ko: '빈칸에 알맞은 말을 쓰세요', fr: 'Écrivez le mot qui convient dans la case vide.', note: '✍️ [[빈칸|t:case vide]] · [[알맞은|t:qui convient]] ([[알맞다]] + [[은|p:adj-mod]]) · [[말|t:mot, parole]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le vrai sujet de 국어 📝' },
        { type: 'tip', text: 'Simulation : le même sujet que les élèves coréens de fin de 3ᵉ année. Quatre parties : texte, poésie, grammaire, rédaction.', mood: 'encourage' },
        { type: 'table', head: ['Consigne', 'Sens'], rows: [
          ['[[다음 글을 읽고 질문에 답하세요.]]', 'Lisez le texte suivant et répondez aux questions.'],
          ['[[빈칸에 알맞은 말을 쓰세요.]]', 'Écrivez le mot qui convient dans la case vide.'],
          ['[[맞는 답을 고르세요.]]', 'Choisissez la bonne réponse.'],
          ['[[다음 동시를 읽으세요.]]', 'Lisez le poème suivant.'],
        ] },
        { type: 'text', text: 'Mots nouveaux : [[글|t:texte]] · [[다음|t:suivant]] · [[답하세요|t:répondez]] · [[알맞은|t:qui convient]]. Sur une copie imprimée, tu verras [[답하십시오]] : c’est le même verbe, en plus formel.' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie la consigne à son sens.', pairs: [
      ['다음 글을 읽고 질문에 답하세요', 'Lisez le texte et répondez.'],
      ['빈칸에 알맞은 말을 쓰세요', 'Écrivez le mot qui convient.'],
      ['맞는 답을 고르세요', 'Choisissez la bonne réponse.'],
      ['시험지를 제출하세요', 'Rendez votre copie.'],
    ] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: '⏱️ 시험 시작!' },
        { type: 'tip', text: 'À partir d’ici, **plus aucune traduction** : les consignes sont uniquement en coréen, comme dans la vraie épreuve. 💪', mood: 'encourage' },
        { type: 'text', text: '**1.** [[다음 글을 읽고 질문에 답하세요.]]' },
        { type: 'table', head: ['📄 [[글]]'], rows: [[MOCK_TEXT.map((s) => `[[${s}]]`).join(' ')]] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**1-1.** [[할머니 댁은 어디에 있어요?]]', choices: ['바다 옆에 있어요.', '학교 옆에 있어요.', '공원 안에 있어요.'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**1-2.** [[할머니는 지훈이에게 뭐라고 하셨어요?]]', choices: ['내일 비가 올 거라고 하셨어요.', '바다에서 수영하라고 하셨어요.', '책을 읽으라고 하셨어요.'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**1-3.** [[지훈이는 왜 일요일에 집에서 책을 읽었어요?]]', choices: ['비가 와서', '바다가 추워서', '할머니가 아파서'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'text', text: '**2.** [[다음 동시를 읽으세요.]]' },
        { type: 'table', head: ['[[별]]'], rows: [
          ['[[밤하늘에 별들이]]'],
          ['[[반짝반짝 웃어요.]]'],
          ['[[작은 별은 아기처럼]]'],
          ['[[쿨쿨 잠을 자요.]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**2-1.** [[작은 별은 뭐 같아요?]]', choices: ['아기', '하늘', '해'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**2-2.** [[의태어를 고르세요.]]', choices: ['반짝반짝', '별들이', '작은'], answer: 0 } },
    { kind: 'learn', blocks: [{ type: 'text', text: '**3.** [[빈칸에 알맞은 말을 쓰세요.]]' }] },
    { kind: 'practice', exercise: { type: 'grid', prompt: '**3.** [[빈칸에 알맞은 말을 쓰세요.]]', head: ['', '✍️'], rows: [
      ['[[어제 친구를]] ______. ([[만나다]])', blank('만났어요')],
      ['[[비가]] ______ [[우산을 쓰세요.]] ([[오다]])', blank('오면')],
      ['[[창문 밖에 바다가]] ______. ([[보이다]])', blank('보여요')],
      ['[[제 취미는 책을]] ______ [[거예요.]] ([[읽다]])', blank('읽는')],
    ] } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**4.** [[맞는 답을 고르세요.]] — [[어제]] ___ [[영화가 재미있었어요.]]', choices: ['본', '보는', '볼'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**5.** [[맞는 답을 고르세요.]] — [[선생님, 교실에]] ___?', choices: ['계세요', '있어요', '드세요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'write', prompt: '**6.** [[다음 질문에 답하세요.]] — [[주말에 뭐 했어요? 그리고 다음 주말에 뭐 할 거예요?]] (3–4 문장)', placeholder: '주말에 … 했어요. … 아서 … 다음 주말에는 … 거예요.', mustInclude: [PAST_ANY, PLAN_ANY] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Correction 🧐' },
        { type: 'table', head: ['Question', 'Clé'], rows: [
          ['1-2', '[[올 거라고 하셨어요]] : futur rapporté [[거라고|p:report-full]] + [[하셨어요|p:honor]]'],
          ['1-3', '[[비가 와서]] : cause [[아서|p:cause]]'],
          ['2', '[[아기처럼]] = comparaison · [[쿨쿨|t:en dormant profondément]] et [[반짝반짝]] = 의태어 · [[밤하늘|t:ciel nocturne]], [[아기|t:bébé]]'],
          ['3', '[[만났어요|p:past]] · [[오면|p:if]] · [[보여요|p:passive]] · [[읽는 거예요|p:nominal]]'],
          ['4', '[[어제 본 영화|p:rel-past]] : action passée → (으)ㄴ'],
          ['5', '[[계세요|p:honor-words]] : [[있다]] pour un aîné'],
        ] },
        { type: 'tip', text: 'Tu as traité **un vrai sujet coréen**, sans aucune traduction. Vendredi, c’est pour de vrai !', mood: 'happy' },
      ],
    },
  ],
  interleave: [
    { type: 'type', prompt: '📈 « J’ai fait beaucoup de progrès. »', answer: alts('실력이 많이 늘었어요') },
    { type: 'mcq', prompt: '🧳 [[여행]] =', choices: ['voyage', 'vacances', 'présentation'], answer: 0 },
    { type: 'cloze', before: '방학 동안 할머니 댁에 ', after: ' 해요.', choices: ['가려고', '가러'], answer: 0, translation: 'Pendant les vacances, j’ai l’intention d’aller chez ma grand-mère.' },
    { type: 'mcq', prompt: '« Il faut écrire au crayon. »', choices: ['연필로 써야 돼요.', '연필로 쓰면 안 돼요.', '연필로 쓰지 않아도 돼요.'], answer: 0 },
  ],
};

const day119: Lesson = {
  id: 'm6-w4-d4',
  month: 6,
  week: 4,
  day: 119,
  title: 'Vœux de vacances : 즐거운 방학 보내세요',
  summary: 'Écrire des cartes de vœux de vacances en 존댓말 au professeur et aux camarades : 께 · 께서, 그동안 감사했습니다, 즐거운 방학 보내세요, 건강하세요. Rangement de la classe (정리해요). Échange de cartes illustrées.',
  cards: [
    { id: 'w24-ko-kke', kind: 'particle', ko: '께 · 께서', fr: 'à (honorifique de 에게) · sujet honorifique (de 이/가)', note: '🙇 Pour un aîné : [[친구에게]] → [[선생님께]] ; [[친구가]] → [[할머니께서]]. Avec le verbe en [[시|p:honor]] : [[할머니께서 집에 계세요.]] Règle : [[께|p:honor-words]]' },
    { id: 'w24-ko-jeulgeoun-banghak', kind: 'phrase', ko: '즐거운 방학 보내세요', fr: 'Passez de bonnes vacances !', note: '🏖️ [[즐거운|t:joyeux, agréable]] ([[즐겁다|p:irreg-b]], ㅂ → 운) + [[방학]] + [[보내다|t:passer (du temps)]] → [[보내세요|p:honor]]. À un ami : [[방학 잘 보내요!]]' },
    { id: 'w24-ko-geonganghaseyo', kind: 'phrase', ko: '건강하세요', fr: 'Portez-vous bien ! (restez en bonne santé)', note: '💪 [[건강|t:santé]] + [[하세요]]. Vœu très courant pour un aîné, à la fin d’une lettre ou d’une carte.' },
    { id: 'w24-ko-geudongan', kind: 'phrase', ko: '그동안 감사했습니다', fr: 'Merci pour tout (pendant tout ce temps).', note: '💌 [[그동안|t:pendant tout ce temps]] ([[동안]]) + [[감사했습니다]] (passé de [[감사합니다]], forme très polie à retenir en bloc).' },
    { id: 'w24-ko-jeongni', kind: 'vocab', ko: '정리해요', fr: 'je range (정리하다)', note: '🗂️ [[책상을 정리해요]] · [[교실을 정리해야 돼요.]] ≈ [[청소해요]] (nettoyer).' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'On range la classe 🗂️' },
        { type: 'tip', text: 'Avant-dernier jour ! Le matin, toute la classe range pour les vacances. Mot nouveau : [[정리해요|t:je range]].', mood: 'happy' },
        { type: 'dialog', lines: [
          { who: '선생님', ko: '여러분, 방학 전에 교실을 정리해야 돼요.' },
          { who: '선생님', ko: '책상 안에 있는 책은 집에 가져가세요.' },
          { who: '지훈', ko: '선생님, 그림도 가져가야 돼요?' },
          { who: '선생님', ko: '아니요, 그림은 교실에 두어도 돼요.' },
          { who: '민수', ko: '나비야, 같이 정리할까요?' },
          { who: '나비', ko: '좋아요! 같이 해요.' },
        ] },
        { type: 'text', text: 'Petits mots : [[책상|t:bureau, pupitre]] · [[책상 안에 있는|t:qui est dans le pupitre]] · [[두다|t:laisser, poser]] → [[두어도 돼요]].' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que faut-il faire des livres du pupitre ?', choices: ['Les emporter à la maison.', 'Les laisser en classe.', 'Les rendre au professeur.'], answer: 0, explain: '[[책상 안에 있는 책은 집에 가져가세요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Et les dessins ?', choices: ['On peut les laisser en classe.', 'Il faut les emporter.', 'Il ne faut pas les toucher.'], answer: 0, explain: '[[그림은 교실에 두어도 돼요.]] (🔵 permis)' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le 존댓말 des cartes 🙇' },
        { type: 'text', text: 'L’après-midi, on écrit des **cartes de vœux**. Pour le professeur, on utilise le [[존댓말|t:langage honorifique]] au complet — même les particules changent !' },
        { type: 'table', head: ['Normal', '🙇 Pour un aîné', 'Exemple'], rows: [
          ['[[에게]] (à)', '[[께]]', '[[선생님께]]'],
          ['[[이/가|p:subject]] (sujet)', '[[께서]]', '[[할머니께서]]'],
          ['[[있어요]]', '[[계세요|p:honor-words]]', '[[할머니께서 집에 계세요.]]'],
          ['[[먹어요]]', '[[드세요|p:honor-words]]', '[[맛있게 드세요.]]'],
          ['[[가요]] · [[해요]]', '[[가세요|p:honor]] · [[하세요|p:honor]]', '[[건강하세요.]]'],
          ['[[감사했어요]]', '[[감사했습니다]]', '[[그동안 감사했습니다.]]'],
        ] },
        { type: 'tip', text: 'Les vœux du jour : [[즐거운 방학 보내세요|t:passez de bonnes vacances]] ([[즐거운]] : ㅂ → 운, comme [[추운]] ; [[보내다|t:passer du temps]]) · [[건강하세요|t:portez-vous bien]] · [[그동안 감사했습니다|t:merci pour tout]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Passe en 존댓말 : touche une case vide.', head: ['Normal', '🙇 Honorifique'], rows: [
      ['[[친구에게]]', blank('선생님께')],
      ['[[친구가]]', blank('할머니께서')],
      ['[[집에 있어요]]', blank('집에 계세요')],
      ['[[밥을 먹어요]]', blank('밥을 드세요', '진지를 드세요')],
    ], explain: '[[에게]] → **께** · [[가]] → **께서** · [[있어요]] → [[계세요]] · [[먹어요]] → [[드세요]].' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '💌 « Monsieur / Madame, passez de bonnes vacances ! »', before: '선생님, 즐거운 방학 ', after: '!', choices: ['보내세요', '보내요', '보내야 돼요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Carte pour qui ?', buckets: ['🙇 pour le professeur', '😊 pour un camarade'], items: [
      { text: '선생님께', bucket: 0 },
      { text: '그동안 감사했습니다', bucket: 0 },
      { text: '건강하세요', bucket: 0 },
      { text: '지훈에게', bucket: 1 },
      { text: '방학 잘 보내요', bucket: 1 },
      { text: '방학에 같이 놀아요', bucket: 1 },
    ] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les cartes de Nabi 💌' },
        { type: 'table', head: ['🙇 [[선생님께]]'], rows: [
          ['[[선생님, 그동안 한국어를 가르쳐 주셔서 감사했습니다.]]'],
          ['[[처음에는 어려웠지만, 선생님 덕분에 지금은 한국어가 정말 재미있어요.]]'],
          ['[[즐거운 방학 보내세요. 그리고 건강하세요!]]'],
          ['[[나비 올림]]'],
        ] },
        { type: 'table', head: ['😊 [[지훈에게]]'], rows: [
          ['[[지훈아, 올해 같은 반 친구가 돼서 정말 좋았어요.]]'],
          ['[[방학에 같이 수영하러 가요!]]'],
          ['[[방학 잘 보내요! 나비가]]'],
        ] },
        { type: 'tip', text: 'Petits mots : [[덕분에|t:grâce à]] ([[선생님 덕분에|t:grâce à vous]]) · [[올림|t:respectueusement (signature)]] · [[돼서|t:parce que je suis devenu]] ([[되다|t:devenir]]). Pour un camarade, on signe simplement [[나비가|t:de la part de Nabi]].', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi Nabi remercie-t-il le professeur ?', choices: ['Pour lui avoir appris le coréen.', 'Pour les vacances.', 'Pour la carte.'], answer: 0, explain: '[[한국어를 가르쳐 주셔서 감사했습니다.]]' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Monsieur / Madame, passez de bonnes vacances, et portez-vous bien !', tiles: ['선생님,', '즐거운', '방학', '보내세요.', '건강하세요!'], distractors: ['보내요.'] } },
    { kind: 'practice', exercise: { type: 'type', prompt: '💌 « Merci pour tout. » (au professeur)', answer: alts('그동안 감사했습니다', '그동안 감사했어요') } },
    { kind: 'practice', exercise: { type: 'listen', audio: '즐거운 방학 보내세요', choices: ['즐거운 방학 보내세요', '즐거운 방학 보냈어요', '즐거운 방학이에요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Carte 1/2 — **Pour le professeur** (en 존댓말) : remerciements, vœux de vacances, santé. Commence par [[선생님께]]. [[쓰세요!]]', placeholder: '선생님께, 그동안 감사했습니다. 즐거운 방학 보내세요. 건강하세요!', mustInclude: ['께', HONOR_ANY] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Carte 2/2 — **Pour un camarade** : un souvenir de l’année, une proposition pour les vacances, des vœux.', placeholder: '지훈에게, 올해 같이 공부해서 정말 좋았어요. 방학에 같이 놀러 가요! 방학 잘 보내요!', mustInclude: ['방학'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '선생님, 그동안 한국어를 가르쳐 주셔서 감사했습니다. 즐거운 방학 보내세요. 그리고 건강하세요!', fr: 'Monsieur / Madame, merci pour tout ce temps à m’apprendre le coréen. Passez de bonnes vacances. Et portez-vous bien !', prompt: 'Échange des cartes : lis ta carte au professeur à voix haute 💌' } },
  ],
  interleave: [
    { type: 'type', prompt: '📄 « Lisez le texte suivant et répondez aux questions. »', answer: alts('다음 글을 읽고 질문에 답하세요') },
    { type: 'mcq', prompt: '✍️ [[빈칸에 알맞은 말을 쓰세요]] =', choices: ['Écrivez le mot qui convient dans la case vide.', 'Choisissez la bonne réponse.', 'Rendez votre copie.'], answer: 0 },
    { type: 'mcq', prompt: '« le jour qui m’a le plus marqué »', choices: ['가장 기억에 남는 날', '가장 기억에 남을 날', '가장 기억을 남는 날'], answer: 0 },
    { type: 'cloze', before: '처음에는 어려웠어요. ', after: ' 재미있어요.', choices: ['지금은', '어제는'], answer: 0, translation: 'Au début, c’était difficile. Maintenant, c’est amusant.' },
  ],
};

const DICTATION = [
  '날씨가 추워서 집에서 음악을 들었어요',
  '어제 읽은 책이 정말 재미있었어요',
  '할머니께서 집에 계세요',
  '선생님이 내일 시험이 있다고 하셨어요',
  '친구가 주말에 뭐 하냐고 물어봤어요',
  '창문을 열면 바다가 보여요',
  '저는 그림을 그리는 것을 좋아해요',
  '하늘은 바다처럼 파래요',
  '한국어를 잘하려고 매일 열심히 공부했어요',
  '방학에 할머니 댁에 놀러 갈 거예요',
];

const FINAL_TEXT = [
  '민수는 봄에 새로운 학교에 왔어요. 처음에는 친구가 없어서 조금 슬펐어요. 그런데 같은 반 지훈이가 민수에게 같이 축구하자고 했어요. 그날부터 두 사람은 좋은 친구가 됐어요.',
  '이제 곧 여름 방학이에요. 민수는 방학 동안 바다에 가려고 해요. 바다에서 수영하는 것을 정말 좋아해요. 지훈이도 같이 가면 좋겠다고 했어요.',
];
const FINAL_POEM = ['파란 바다는', '하늘처럼 파래요.', '반짝반짝 해님 아래', '친구하고 수영해요.', '살랑살랑 바람도', '싱글벙글 웃어요.'];

const day120: Lesson = {
  id: 'm6-w4-d5',
  month: 6,
  week: 4,
  day: 120,
  title: 'Grand Bilan Final & Évaluation n°12 🎓',
  summary: 'La Grande évaluation bimensuelle finale n°12, le même sujet que toute la classe : A dictée de 10 phrases, B texte de 2 paragraphes + 동시 (6 questions), C grammaire, D rédaction de 10 à 15 phrases. Remise du livret de compétences et du diplôme, et une dernière histoire entièrement en coréen.',
  cards: [],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Grande évaluation finale n°12 🎓' },
        { type: 'tip', text: 'Le grand jour ! Aujourd’hui, tu passes **exactement la même épreuve** que tes camarades coréens. Prends ton temps. [[화이팅!]]', mood: 'encourage' },
        { type: 'table', head: ['Section', 'Points', 'Contenu'], rows: [
          ['A', '20', 'Dictée de texte littéraire (10 phrases)'],
          ['B', '30', 'Compréhension de texte & poésie (6 questions)'],
          ['C', '20', 'Grammaire & syntaxe'],
          ['D', '30', 'Production écrite autonome (원고지)'],
        ] },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'A. 받아쓰기 ✍️' },
        { type: 'text', text: '[[들으세요!]] Attention aux **liaisons** : on entend [일근], on écrit [[읽은]].' },
        { type: 'liaison', items: [
          { written: '읽은', spoken: '일근' },
          { written: '들었어요', spoken: '드러써요' },
          { written: '먹으면', spoken: '머그면' },
        ] },
      ],
    },
    ...DICTATION.map((s, i) => ({
      kind: 'practice' as const,
      exercise: { type: 'type' as const, prompt: `**A** — 받아쓰기 ${i + 1}/${DICTATION.length}`, audio: s, answer: alts(s) },
    })),
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'B. 읽기 📄' },
        { type: 'text', text: '[[다음 글을 읽고 질문에 답하세요.]]' },
        { type: 'table', head: ['📄 [[민수의 새 친구|t:le nouvel ami de Minsu]]'], rows: FINAL_TEXT.map((p) => [p.split('. ').map((s) => `[[${s.replace(/\.$/, '')}.]]`).join(' ')]) },
        { type: 'table', head: ['[[여름 바다|t:la mer en été]]'], rows: FINAL_POEM.map((l) => [`[[${l}]]`]) },
        { type: 'tip', text: 'Petits mots : [[슬펐어요|t:était triste]] · [[축구하자고 했어요|t:a proposé de jouer au foot]] (la forme complète de [[축구하재요|p:report-let]]) · [[됐어요|t:sont devenus]] · [[곧|t:bientôt]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**B · 1/6** — [[민수는 처음에 왜 슬펐어요?]]', choices: ['친구가 없어서', '학교가 멀어서', '축구를 못 해서'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**B · 2/6** — [[지훈이는 민수에게 뭐라고 했어요?]]', choices: ['같이 축구하자고 했어요.', '같이 수영하라고 했어요.', '새로운 학교에 왔냐고 했어요.'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**B · 3/6** — [[민수는 방학 동안 뭐 하려고 해요?]]', choices: ['바다에 가려고 해요.', '할머니 댁에 가려고 해요.', '축구를 하려고 해요.'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**B · 4/6** — [[민수가 좋아하는 것은 뭐예요?]]', choices: ['바다에서 수영하는 것', '학교에서 공부하는 것', '집에서 쉬는 것'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**B · 5/6** — [[동시의 2번째 줄|t:le 2ᵉ vers du poème]] : [[하늘처럼 파래요]]. [[이것은 뭐예요?]]', choices: ['Une comparaison (처럼)', 'Une onomatopée', 'Un style indirect'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**B · 6/6** — Dans le poème, qu’est-ce qui « sourit » comme une personne ?', choices: ['Le vent (바람)', 'La mer (바다)', 'Le soleil (해님)'], answer: 0, explain: '[[살랑살랑 바람도 싱글벙글 웃어요.]] : une personnification.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'C. 문법 🧩' },
        { type: 'text', text: '[[빈칸에 알맞은 말을 쓰세요.]] Temps, passif, condition, nominalisation, relatives.' },
      ],
    },
    { kind: 'practice', exercise: { type: 'grid', prompt: '**C · 1/3** — Les trois temps', head: ['Verbe', '어제', '오늘', '내일'], rows: [
      ['[[가다]]', blank('갔어요'), '[[가요]]', blank('갈 거예요')],
      ['[[듣다]]', blank('들었어요'), blank('들어요'), '[[들을 거예요]]'],
      ['[[춥다]]', '[[추웠어요]]', blank('추워요'), blank('추울 거예요')],
    ], explain: '[[ㄷ|p:irreg-d]] → ㄹ ([[들어요]]) · [[ㅂ|p:irreg-b]] → 우 ([[추워요]]).' } },
    { kind: 'practice', exercise: { type: 'grid', prompt: '**C · 2/3** — Passif · condition · nominalisation', head: ['Verbe', 'Forme', '✍️'], rows: [
      ['[[보다]]', '[[passif|p:passive]] (-아/어요)', blank('보여요')],
      ['[[열다]]', '[[passif|p:passive]] (-아/어요)', blank('열려요')],
      ['[[먹다]]', '[[-(으)면|p:if]]', blank('먹으면')],
      ['[[덥다]]', '[[-(으)면|p:if]]', blank('더우면')],
      ['[[놀다]]', '[[-는 것|p:nominal]]', blank('노는 것')],
    ] } },
    { kind: 'practice', exercise: { type: 'grid', prompt: '**C · 3/3** — Les relatives (le livre que je… lire)', head: ['어제 (passé)', '지금 (présent)', '내일 (futur)'], rows: [
      [blank('어제 읽은 책'), blank('지금 읽는 책'), blank('내일 읽을 책')],
    ], explain: '[[읽은|p:rel-past]] · [[읽는|p:relative]] · [[읽을|p:rel-future]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'D. 글쓰기 (원고지) 🖋️' },
        { type: 'text', text: 'Sujet : **« Mon expérience cette année à l’école et ce que je ferai pendant les vacances »** — 10 à 15 phrases, en trois paragraphes.' },
        { type: 'table', head: ['Paragraphe', 'Pense à…'], rows: [
          ['1️⃣ Mon année (4–5 phrases)', '[[올해]] · [[처음에는]] … [[지금은]] … · passé, cause [[아서]]'],
          ['2️⃣ Mon souvenir et mon avis (3–5 phrases)', '[[가장 기억에 남는]] … · [[는 것 같아요]] · [[다고 했어요]]'],
          ['3️⃣ Mes vacances (3–5 phrases)', '[[방학 동안]] · [[려고 해요]] · [[거예요]] · [[면 좋겠어요]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'write', prompt: '**D · 1/3** — Mon année à l’école (4–5 phrases).', placeholder: '올해 저는 한국 학교에 다녔어요. 처음에는 한국어를 몰라서 어려웠어요…', mustInclude: [PAST_ANY, CAUSE_ANY] } },
    { kind: 'practice', exercise: { type: 'write', prompt: '**D · 2/3** — Mon souvenir préféré et mon avis (3–5 phrases).', placeholder: '가장 기억에 남는 날은 … 그날 친구가 … 다고 했어요. … 것 같아요.', mustInclude: [SEEM_ANY] } },
    { kind: 'practice', exercise: { type: 'write', prompt: '**D · 3/3** — Ce que je ferai pendant les vacances (3–5 phrases).', placeholder: '방학 동안 … 려고 해요. 그리고 … 거예요. … 면 좋겠어요!', mustInclude: ['방학', PLAN_ANY] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le livret de compétences 📘' },
        { type: 'table', head: ['Mois', 'Ce que tu sais faire'], rows: [
          ['1', 'lire et écrire le 한글 · [[은/는|p:topic]] · [[이/가|p:subject]] · les nombres · [[있어요]]'],
          ['2', 'l’heure · les trois temps · [[아서|p:cause]] · [[까요?|p:suggest]] · [[수 있어요|p:ability]] · [[주세요|p:request]]'],
          ['3', '[[지만|p:contrast]] · les irréguliers ㄷ et ㅂ · le [[존댓말|p:honor]] · [[대요|p:report]] · [[고 있어요|p:progressive]]'],
          ['4', '[[면|p:if]] · [[아/어 봤어요|p:try]] · [[려고 해요|p:intend]] · [[는 것|p:nominal]] · [[보다 더|p:compare]]'],
          ['5', 'les relatives aux trois temps · [[는 것 같아요|p:seem]] · [[다고 했어요|p:report-full]] · le [[passif|p:passive]] · [[네요|p:discover]]'],
          ['6', '[[러 가요|p:purpose-go]] · [[야 돼요|p:must]] · [[지 않아도 돼요|p:no-need]] · la poésie [[처럼|p:like]] · un vrai sujet de 국어'],
        ] },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: '🏅 Diplôme d’intégration linguistique' },
        { type: 'text', text: '**Nabi** et toi avez terminé les **6 mois** d’école coréenne : 120 leçons, du tout premier [[ㄱ]] jusqu’à un vrai sujet de 국어. Tu as le niveau d’un élève coréen de fin de 3ᵉ année — sans aucun retard.' },
        { type: 'tip', text: '[[축하해요!|t:félicitations !]] 🎉 De zéro au niveau CE2 coréen, en 20 minutes par jour. [[정말 잘했어요!|t:tu as vraiment bien travaillé !]]', mood: 'happy' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le dernier jour 📖' },
        { type: 'text', text: 'Une dernière histoire **entièrement en coréen**. Touche une bulle pour l’entendre.' },
        { type: 'dialog', lines: [
          { who: '📖', ko: '오늘은 학교의 마지막 날이에요. 교실이 정말 조용해요.' },
          { who: '선생님', ko: '여러분, 시험지를 제출하세요. 정말 수고했어요!' },
          { who: '📖', ko: '선생님이 나비 이름을 불렀어요.' },
          { who: '선생님', ko: '나비야, 이건 나비의 상장이에요. 여섯 달 동안 정말 열심히 공부했어요.' },
          { who: '나비', ko: '감사합니다! 처음에는 한글도 몰랐어요. 그런데 지금은 동시도 쓸 수 있어요!' },
          { who: '지훈', ko: '나비는 애벌레처럼 천천히 시작했지만, 지금은 나비처럼 날아요! 🦋' },
          { who: '📖', ko: '친구들이 싱글벙글 웃으면서 박수를 쳤어요.' },
          { who: '나비', ko: '선생님, 그동안 감사했습니다. 즐거운 방학 보내세요!' },
          { who: '선생님', ko: '고마워요, 나비야. 방학 동안 건강하세요. 그리고 다음 학기에 또 만나요!' },
          { who: '📖', ko: '나비는 창문 밖으로 날아갔어요. 하늘은 바다처럼 파랬어요. 바람이 살랑살랑 불었어요.' },
          { who: '나비', ko: '안녕, 학교! 다음 학기에도 열심히 공부할 거예요! 🦋✨' },
        ] },
        { type: 'tip', text: 'Petits mots : [[수고했어요|t:bon travail, merci pour vos efforts]] · [[불렀어요|t:a appelé]] · [[상장|t:diplôme, certificat]] · [[시작했지만|t:a commencé, mais]] · [[학기|t:semestre]] · [[날아갔어요|t:s’est envolé]] · [[밖으로|t:vers l’extérieur]] · [[파랬어요|t:était bleu]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’est-ce que le professeur donne à Nabi ?', choices: ['Un diplôme (상장).', 'Un livre.', 'Une copie d’examen.'], answer: 0, explain: '[[이건 나비의 상장이에요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que dit Jihoon de Nabi ?', choices: ['Il a commencé lentement comme une chenille, et maintenant il vole comme un papillon.', 'Il court vite comme un lapin.', 'Il chante comme un oiseau.'], answer: 0, explain: '[[애벌레처럼 천천히 시작했지만, 지금은 나비처럼 날아요!]]' } },
    { kind: 'practice', exercise: { type: 'read', ko: '처음에는 한글도 몰랐어요. 그런데 지금은 동시도 쓸 수 있어요! 선생님, 그동안 감사했습니다. 즐거운 방학 보내세요!', fr: 'Au début, je ne connaissais même pas le hangeul. Mais maintenant, je sais même écrire des poèmes ! Merci pour tout. Passez de bonnes vacances !', prompt: 'Les derniers mots de Nabi : lis-les à voix haute 🦋' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Bilan des 6 mois ✅' },
        { type: 'table', head: ['À la fin des 6 mois, tu…'], rows: [
          ['📖 comprends un texte de manuel et un 동시 de 3ᵉ année'],
          ['🖋️ écris seul une rédaction de 10 à 15 phrases'],
          ['🎤 présentes ton parcours à l’oral devant la classe'],
          ['🙇 écris une carte en 존댓말 : [[즐거운 방학 보내세요!]]'],
          ['🎓 passes la même épreuve que tes camarades coréens'],
        ] },
        { type: 'tip', text: 'Ce n’est pas la fin : après les vacances, une nouvelle aventure commence, vers le **B2** ! [[다음 학기에 또 만나요!|t:à la rentrée !]] 🦋', mood: 'happy' },
      ],
    },
  ],
  interleave: [
    { type: 'type', prompt: '🏖️ « Passez de bonnes vacances ! »', answer: alts('즐거운 방학 보내세요') },
    { type: 'mcq', prompt: '🙇 [[선생님]] + « à » =', choices: ['선생님께', '선생님께서', '선생님에게서'], answer: 0 },
    { type: 'mcq', prompt: '« Il faut ranger la classe avant les vacances. »', choices: ['방학 전에 교실을 정리해야 돼요.', '방학 후에 교실을 정리해도 돼요.', '방학 전에 교실을 정리하면 안 돼요.'], answer: 0 },
    { type: 'cloze', before: '구름은 솜사탕 ', after: '.', choices: ['같아요', '처럼'], answer: 0, translation: 'Le nuage est comme de la barbe à papa.' },
  ],
};

export const m6w4: Lesson[] = [day116, day117, day118, day119, day120];
