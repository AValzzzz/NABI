import type { GridBlank, Lesson } from '../types';

const COLLAPSE: [RegExp, string][] = [
  [/고 있/g, '고있'],
  [/ 거예요/g, '거예요'],
  [/것을/g, '걸'],
];
const alts = (...xs: string[]): string[] => {
  const out = new Set(xs);
  for (const [re, to] of COLLAPSE) for (const s of [...out]) out.add(s.replace(re, to));
  for (const s of [...out]) out.add(s.replace(/[.,!?] /g, ' '));
  for (const s of [...out]) out.add(s.replace(/[.!?]$/, ''));
  return [...out];
};
const blank = (s: string): GridBlank => ({ answer: alts(s) });

const MOD_ANY = '큰|작은|좋은|예쁜|시원한|비싼|싼|추운|더운|쉬운|어려운|나쁜|착한|바쁜|빨간|파란|노란|하얀|까만|있는|없는';
const RELATIVE_ANY = '는 사람|는 친구|는 학생|는 아이|고 있는|고있는';

const PAIRS: [string, string, string, string][] = [
  ['🎒', '작다', '작은', '가방'],
  ['💧', '시원하다', '시원한', '물'],
  ['📕', '크다', '큰', '책'],
  ['🌸', '예쁘다', '예쁜', '꽃'],
  ['🧑‍🤝‍🧑', '좋다', '좋은', '친구'],
];

const day81: Lesson = {
  id: 'm5-w1-d1',
  month: 5,
  week: 1,
  day: 81,
  title: 'Un petit sac : -(으)ㄴ',
  summary: 'L’adjectif se place devant le nom : 작은 가방 · 시원한 물 · 큰 책을 읽어요. Voyelle → ㄴ, consonne → 은, ㅂ → 운. Nouveaux : 예뻐요, 시원해요.',
  cards: [
    { id: 'w17-ko-keun-jageun', kind: 'grammar', ko: '큰 책 · 작은 가방', fr: 'un grand livre · un petit sac — voyelle → ㄴ, consonne → 은', note: '🏷️ L’adjectif **devant** le nom. [[크다]] → [[큰]] · [[작다]] → [[작은]] · [[춥다|p:irreg-b]] → [[추운]]. Règle : [[adjectif + nom|p:adj-mod]]' },
    { id: 'w17-ko-jageun-gabang', kind: 'phrase', ko: '작은 가방', fr: 'un petit sac', note: '🎒 [[작]] + [[은]], prononcé [자근].' },
    { id: 'w17-ko-siwonhan-mul', kind: 'phrase', ko: '시원한 물', fr: 'de l’eau fraîche', note: '💧 [[시원하다]] → [[시원한]]. [[시원한 물 주세요!]]' },
    { id: 'w17-ko-siwonhaeyo', kind: 'phrase', ko: '시원해요', fr: 'c’est frais, agréable (poli)', note: '🍃 [[시원하다]]. [[날씨가 시원해요.]] = il fait bon (frais).' },
    { id: 'w17-ko-yeppeoyo', kind: 'phrase', ko: '예뻐요', fr: 'c’est joli, c’est beau (poli)', note: '🌸 [[예쁘다]] : le ㅡ tombe, comme [[바빠요]]. Devant un nom : [[예쁜 꽃]].' },
    { id: 'w17-ko-keun-chaegeul', kind: 'phrase', ko: '큰 책을 읽어요', fr: 'Je lis un grand livre.', note: '📕 Une phrase au lieu de deux : [[책이 커요. 책을 읽어요.]] → [[큰 책을 읽어요.]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Adieu, les phrases hachées ✂️' },
        { type: 'tip', text: 'Bienvenue au **5ᵉ mois** ! Regarde-moi : je suis enfin un **papillon** ! [[나비가 정말 예뻐요!|t:Nabi est vraiment joli !]] 🦋 Ce mois-ci, tes phrases vont devenir plus riches.', mood: 'happy' },
        { type: 'text', text: 'Jusqu’ici, pour dire « je lis un **grand** livre », tu faisais deux phrases : [[책이 커요. 책을 읽어요.]] En coréen, l’adjectif peut se coller **devant** le nom :' },
        { type: 'breakdown', segments: [
          { ko: '큰 책', role: 'object', gloss: 'un grand livre', particle: { ko: '을', key: 'object' } },
          { ko: '읽어요', role: 'verb', gloss: 'je lis' },
        ], translation: 'Je lis un grand livre.', note: '[[크다]] → [[큰]] : le ㄴ se glisse **sous** la dernière syllabe. Et l’ordre est l’inverse du français : **adjectif + nom**.' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La règle : ㄴ / 은 🔍' },
        { type: 'table', head: ['Le radical finit par…', 'Infinitif', 'Devant un nom'], rows: [
          ['🟢 une voyelle → **ㄴ** dessous', '[[크다]] · [[예쁘다]] · [[비싸다]]', '[[큰]] · [[예쁜]] · [[비싼]]'],
          ['⭐ [[하다|p:hada]] → **한**', '[[시원하다]] · [[착하다]]', '[[시원한]] · [[착한]]'],
          ['🟤 une consonne → **은**', '[[작다]] · [[좋다]]', '[[작은]] · [[좋은]]'],
          ['🥶 [[ㅂ|p:irreg-b]] → **운**', '[[춥다]] · [[쉽다]] · [[어렵다]]', '[[추운]] · [[쉬운]] · [[어려운]]'],
        ] },
        { type: 'text', text: 'Bonne nouvelle : c’est la famille de [[면|p:if]] ! [[크면]] → [[큰]] · [[작으면]] → [[작은]] · [[추우면]] → [[추운]]. Remplace **면** par **ㄴ**.' },
        { type: 'liaison', items: [
          { written: '작은', spoken: '자근', fr: 'petit' },
          { written: '좋은', spoken: '조은', fr: 'bon' },
        ] },
        { type: 'tip', text: 'Deux mots nouveaux : [[예뻐요|t:c’est joli]] ([[예쁘다]]) et [[시원해요|t:c’est frais]] ([[시원하다]]).', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[크다]] + [[가방]] → « un grand sac » :', choices: ['큰 가방', '크은 가방', '가방 큰'], answer: 0, explain: '[[크]] finit par une voyelle : le ㄴ se glisse dessous → [[큰]]. Et l’adjectif vient **avant** le nom.' } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Devant le nom. Touche une case vide.', head: ['Infinitif', '🏷️ Devant un nom'], rows: [
      ['[[작다]]', blank('작은')],
      ['[[예쁘다]]', blank('예쁜')],
      ['[[시원하다]]', blank('시원한')],
      ['[[좋다]]', blank('좋은')],
      ['[[춥다]]', blank('추운')],
    ], explain: '[[작은]] · [[좋은]] (consonne → 은) · [[예쁜]] · [[시원한]] (voyelle → ㄴ) · [[추운]] ([[ㅂ|p:irreg-b]] → 운).' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les cartes à juxtaposer 🃏' },
        { type: 'text', text: 'Méthode de la classe : une carte **adjectif**, une carte **nom**, et on les colle — l’adjectif **toujours à gauche**.' },
        { type: 'table', head: ['', 'Adjectif', '+ Nom', '= 🏷️'], rows: PAIRS.map(([emoji, adj, mod, noun]) => [emoji, `[[${adj}]]`, `[[${noun}]]`, `[[${mod} ${noun}]]`]) },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Colle les cartes : relie chaque image à son groupe.', pairs: PAIRS.slice(0, 4).map(([emoji, , mod, noun]) => [emoji, `${mod} ${noun}`] as [string, string]) } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🎒 « un petit sac »', answer: alts('작은 가방') } },
    { kind: 'practice', exercise: { type: 'type', prompt: '💧 « de l’eau fraîche »', answer: alts('시원한 물') } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Je lis un grand livre.', tiles: ['큰', '책을', '읽어요.'], distractors: ['커요', '크은'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Au magasin 🛍️' },
        { type: 'text', text: 'Nabi achète un sac. **Tout en coréen** :' },
        { type: 'dialog', lines: [
          { who: '나비', ko: '안녕하세요! 이 큰 가방은 얼마예요?' },
          { who: '👩', ko: '구천 원이에요.' },
          { who: '나비', ko: '와, 비싸요! 작은 가방은 얼마예요?' },
          { who: '👩', ko: '삼천 원이에요. 싼 가방이지만 좋은 가방이에요.' },
          { who: '나비', ko: '예뻐요! 작은 가방을 살 거예요.' },
          { who: '👩', ko: '감사합니다! 시원한 물도 드세요.' },
        ] },
        { type: 'tip', text: '[[싼 가방이지만]] = c’est un sac pas cher, mais… : [[비싸다]] → [[비싼]], [[싸다]] → [[싼]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quel sac Nabi achète-t-il ?', choices: ['Le petit sac, pas cher.', 'Le grand sac, cher.', 'Aucun.'], answer: 0, explain: '[[작은 가방을 살 거예요.]]' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🛍️ « C’est un sac pas cher, mais c’est un bon sac. »', before: '싼 가방이지만 ', after: ' 가방이에요.', choices: ['좋은', '좋아요', '좋으면'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '시원한 물을 마셔요', choices: ['시원한 물을 마셔요', '물이 시원해요', '시원한 물이 있어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '📕 « Je lis un grand livre. »', answer: alts('큰 책을 읽어요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Décris un objet autour de toi avec un adjectif **devant** le nom. [[쓰세요!]]', placeholder: '작은 연필이 있어요', mustInclude: [MOD_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '작은 가방을 사요. 그리고 시원한 물을 마셔요.', fr: 'J’achète un petit sac. Et je bois de l’eau fraîche.', prompt: 'Mise en pratique : dis-le à voix haute 🎒' } },
  ],
  interleave: [
    { type: 'type', prompt: '🥇 « Le foot, c’est le plus amusant. »', answer: ['축구가 가장 재미있어요', '축구가 제일 재미있어요'] },
    { type: 'mcq', prompt: '« Je fais **parfois** du vélo. »', choices: ['가끔 자전거를 타요.', '매일 자전거를 타요.', '자주 자전거를 타요.'], answer: 0 },
    { type: 'cloze', before: '날씨가 ', after: ' 공원에 갈 거예요.', choices: ['좋으면', '좋은'], answer: 0, translation: 'S’il fait beau, j’irai au parc.' },
    { type: 'type', prompt: '[[보다]] → « le fait de regarder » :', answer: ['보는 것', '보는 거', '보는것', '보는거'] },
  ],
};

const MENU: [string, string][] = [
  ['🍚', '맛있는 밥'],
  ['🥬', '매운 김치'],
  ['🥩', '비싼 고기'],
  ['💧', '시원한 물'],
  ['🍎', '맛있는 사과'],
];

const day82: Lesson = {
  id: 'm5-w1-d2',
  month: 5,
  week: 1,
  day: 82,
  title: 'Un bon repas : 있다 / 없다 + 는',
  summary: 'Le cas particulier de 있다 / 없다 : 맛있는 밥 · 재미있는 책. Réflexe : 있 / 없 + 는. Surlignage 🟣 ㄴ/은 · 🟢 는. Nouveau : 맛없어요.',
  cards: [
    { id: 'w17-ko-masinneun', kind: 'grammar', ko: '맛있는 밥 · 재미있는 책', fr: 'un bon repas · un livre intéressant — 있다 / 없다 + 는', note: '🟢 Réflexe : [[있]] / [[없]] + **는**, jamais 은. [[맛있는]] [마신는] · [[재미없는]] [재미엄는]. Règle : [[adjectif + nom|p:adj-mod]]' },
    { id: 'w17-ko-madeopseoyo', kind: 'phrase', ko: '맛없어요', fr: 'ce n’est pas bon (poli)', note: '😖 Le contraire de [[맛있어요]], prononcé [마덥써요]. Devant un nom : [[맛없는 밥]].' },
    { id: 'w17-ko-masinneun-babeul', kind: 'phrase', ko: '맛있는 밥을 먹어요', fr: 'Je mange un bon repas.', note: '🍚 [[맛있는 밥]] + [[을|p:object]] + [[먹어요]].' },
    { id: 'w17-ko-jaemiinneun-yeonghwa', kind: 'phrase', ko: '재미있는 영화', fr: 'un film intéressant, amusant', note: '🎬 [[재미있는 영화를 봤어요.]] Le contraire : [[재미없는 영화]].' },
    { id: 'w17-ko-maeun', kind: 'vocab', ko: '매워요 · 매운', fr: 'c’est piquant · piquant (devant un nom)', note: '🌶️ [[맵다|p:irreg-b]] : ㅂ → 우. [[매운 김치]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le réflexe 있 / 없 + 는 🟢' },
        { type: 'tip', text: '[[작은 가방]], [[시원한 물]] : hier, l’adjectif passait devant le nom. Aujourd’hui, une **exception** très fréquente.', mood: 'happy' },
        { type: 'text', text: 'Les adjectifs qui finissent par [[있다]] ou [[없다]] — [[맛있다]], [[재미있다]], [[재미없다]] — prennent **는**, pas 은 :' },
        { type: 'breakdown', segments: [
          { ko: '맛있는 밥', role: 'object', gloss: 'un bon repas', particle: { ko: '을', key: 'object' } },
          { ko: '먹어요', role: 'verb', gloss: 'je mange' },
        ], translation: 'Je mange un bon repas.' },
        { type: 'table', head: ['🟣 -(으)ㄴ', '🟢 있 / 없 + 는'], rows: [
          ['[[좋다]] → [[좋은]]', '[[맛있다]] → [[맛있는]]'],
          ['[[작다]] → [[작은]]', '[[재미있다]] → [[재미있는]]'],
          ['[[크다]] → [[큰]]', '[[맛없다]] → [[맛없는]]'],
        ] },
        { type: 'liaison', items: [
          { written: '맛있는', spoken: '마신는', fr: 'délicieux' },
          { written: '맛없어요', spoken: '마덥써요', fr: 'ce n’est pas bon' },
        ] },
        { type: 'tip', text: 'Ce **는**, tu le connais : c’est celui de [[먹는 것|p:nominal]]. [[있다]] se comporte comme un verbe d’action. Mot nouveau : [[맛없어요|t:ce n’est pas bon]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Surligne : 🟣 ㄴ/은 ou 🟢 는 ?', buckets: ['🟣 ㄴ / 은', '🟢 는'], items: [
      { text: '크다', bucket: 0 }, { text: '좋다', bucket: 0 }, { text: '예쁘다', bucket: 0 }, { text: '비싸다', bucket: 0 },
      { text: '맛있다', bucket: 1 }, { text: '재미있다', bucket: 1 }, { text: '맛없다', bucket: 1 }, { text: '재미없다', bucket: 1 },
    ], explain: '🟣 [[큰]] · [[좋은]] · [[예쁜]] · [[비싼]]. 🟢 [[맛있는]] · [[재미있는]] · [[맛없는]] · [[재미없는]].' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[맛있다]] + [[사과]] → « une pomme délicieuse » :', choices: ['맛있는 사과', '맛있은 사과', '맛있 사과'], answer: 0, explain: 'Réflexe : [[있]] + **는**.' } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Devant le nom. Touche une case vide.', head: ['Infinitif', '🏷️ Devant un nom'], rows: [
      ['[[재미있다]]', blank('재미있는')],
      ['[[맛없다]]', blank('맛없는')],
      ['[[비싸다]]', blank('비싼')],
      ['[[어렵다]]', blank('어려운')],
    ] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le menu de la cantine 🍱' },
        { type: 'text', text: 'Activité de la classe : décrire des **plats** et des **activités**. Le menu du [[식당]] de l’école :' },
        { type: 'table', head: ['', 'Aujourd’hui'], rows: MENU.map(([emoji, s]) => [emoji, `[[${s}]]`]) },
        { type: 'tip', text: '[[매운 김치]] : [[맵다|p:irreg-b]] (piquant) → ㅂ → 우 → [[매운]]. Tu connais [[매워요]] !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Recopie le menu.', pairs: MENU.slice(0, 4).map(([emoji, s]) => [emoji, s] as [string, string]) } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🎬 « J’ai vu un film intéressant. »', before: '', after: ' 영화를 봤어요.', choices: ['재미있는', '재미있은', '재미있어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Je mange un bon repas.', tiles: ['맛있는', '밥을', '먹어요.'], distractors: ['맛있은', '맛있어요'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'À la cantine 🍱' },
        { type: 'text', text: 'L’heure du déjeuner. **Tout en coréen** :' },
        { type: 'dialog', lines: [
          { who: '민수', ko: '와! 오늘 점심은 맛있는 고기예요!' },
          { who: '수아', ko: '저는 고기보다 매운 김치를 더 좋아해요.' },
          { who: '지훈', ko: '저는 매운 음식을 못 먹어요. 시원한 물 주세요!' },
          { who: '나비', ko: '이 사과는 정말 맛있어요. 맛있는 사과예요!' },
          { who: '민수', ko: '점심 시간이 가장 재미있는 시간이에요! 😋' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que préfère Sua ?', choices: ['Le kimchi piquant.', 'La viande.', 'Les pommes.'], answer: 0, explain: '[[고기보다 매운 김치를 더 좋아해요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pour Minsu, quel est le moment le plus amusant ?', choices: ['Le déjeuner.', 'Le cours de coréen.', 'La récré.'], answer: 0, explain: '[[점심 시간이 가장 재미있는 시간이에요!]]' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '맛있는 밥을 먹어요', choices: ['맛있는 밥을 먹어요', '밥이 맛있어요', '맛없는 밥을 먹어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🍚 « Je mange un bon repas. »', answer: alts('맛있는 밥을 먹어요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ton menu idéal : décris deux plats ou activités avec **는** ou **(으)ㄴ**. [[쓰세요!]]', placeholder: '맛있는 김치를 먹어요. 재미있는 영화를 봐요.', mustInclude: [MOD_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '맛있는 밥을 먹어요. 그리고 재미있는 책을 읽어요.', fr: 'Je mange un bon repas. Et je lis un livre intéressant.', prompt: 'Mise en pratique : dis-le à voix haute 🍚' } },
  ],
  interleave: [
    { type: 'type', prompt: '🎒 « un petit sac »', answer: alts('작은 가방') },
    { type: 'mcq', prompt: '[[춥다]] + [[날씨]] → « un temps froid » :', choices: ['추운 날씨', '춥은 날씨', '춥는 날씨'], answer: 0 },
    { type: 'cloze', before: '저는 매일 한국어를 ', after: '.', choices: ['연습해요', '연습하는'], answer: 0, translation: 'Je m’exerce en coréen tous les jours.' },
    { type: 'mcq', prompt: '« J’ai déjà goûté le kimchi. »', choices: ['김치를 먹어 봤어요.', '김치를 먹는 것이에요.', '김치를 먹으려고 해요.'], answer: 0 },
  ],
};

const PUZZLE: [string, string, string][] = [
  ['학생이 공부해요.', '학생', '공부하는 학생'],
  ['친구가 음악을 들어요.', '친구', '음악을 듣는 친구'],
  ['아이들이 운동장에서 놀아요.', '아이들', '운동장에서 노는 아이들'],
  ['선생님이 가르쳐요.', '선생님', '가르치는 선생님'],
];

const day83: Lesson = {
  id: 'm5-w1-d3',
  month: 5,
  week: 1,
  day: 83,
  title: 'L’ami qui joue : verbe + 는 + nom',
  summary: 'La proposition relative au présent : 공부하는 학생 · 음악을 듣는 친구 · 제가 읽는 책. Deux phrases → une seule. Nouveau : 제가.',
  cards: [
    { id: 'w17-ko-gongbuhaneun-haksaeng', kind: 'grammar', ko: '공부하는 학생', fr: 'l’élève qui étudie — verbe + 는 + nom', note: '🧩 Même **는** que [[공부하는 것|p:nominal]] et [[가르치는 사람]]. ㄹ tombe : [[노는 아이]]. Règle : [[relative|p:relative]]' },
    { id: 'w17-ko-eumageul-deunneun-chingu', kind: 'phrase', ko: '음악을 듣는 친구', fr: 'l’ami qui écoute de la musique', note: '🎧 Tout le groupe [[음악을 듣는]] se place **devant** [[친구]]. [[듣는]] [든는].' },
    { id: 'w17-ko-jega', kind: 'vocab', ko: '제가', fr: 'je, moi (sujet, poli) — 저 + 가', note: '🙋 [[저]] + [[가|p:subject]] → [[제가]]. [[제가 읽어요.]]. Entre amis : [[내가|t:je (familier)]].' },
    { id: 'w17-ko-jega-ilneun-chaek', kind: 'phrase', ko: '제가 읽는 책', fr: 'le livre que je lis', note: '📖 [[제가 읽는 책이 재미있어요.]] = le livre que je lis est intéressant. [[읽는]] [잉는].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le livre que je lis 📖' },
        { type: 'tip', text: '[[맛있는 밥]], [[재미있는 책]]… Aujourd’hui, ce n’est plus un adjectif mais une **action** qui se place devant le nom.', mood: 'happy' },
        { type: 'text', text: 'Tu connais déjà [[가르치는 사람]] (la personne **qui** enseigne) et [[먹는 것]] (le fait de manger). C’est la même règle avec **n’importe quel nom** : radical + **는** + nom.' },
        { type: 'breakdown', segments: [
          { ko: '음악을 듣는', role: 'verb', gloss: 'qui écoute de la musique' },
          { ko: '친구', role: 'subject', gloss: 'l’ami', particle: { ko: '가', key: 'subject' } },
          { ko: '있어요', role: 'verb', gloss: 'il y a' },
        ], translation: 'J’ai un ami qui écoute de la musique.', note: 'En français, « qui… » vient **après** le nom. En coréen, toute l’action se place **avant**.' },
        { type: 'table', head: ['Verbe', '+ 는 + nom', ''], rows: [
          ['[[공부하다]]', '[[공부하는 학생]]', 'l’élève qui étudie'],
          ['[[듣다]]', '[[음악을 듣는 친구]]', 'l’ami qui écoute de la musique'],
          ['[[읽다]]', '[[제가 읽는 책]]', 'le livre que je lis'],
          ['[[놀다]] (ㄹ tombe)', '[[노는 아이들]]', 'les enfants qui jouent'],
        ] },
        { type: 'tip', text: 'Mot nouveau : [[제가|t:je (sujet)]] = [[저]] + [[가|p:subject]]. Entre amis, on dit [[내가|t:je (familier)]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '« l’élève qui étudie »', choices: ['공부하는 학생', '학생 공부하는', '공부한 학생은'], answer: 0, explain: 'L’action + [[는]] **devant** le nom.' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '📖 « le livre que je lis »', answer: alts('제가 읽는 책') } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le puzzle : deux phrases → une 🧩' },
        { type: 'text', text: 'Activité de la classe : **reformuler** deux phrases simples en un seul groupe. On enlève la particule, on met le verbe en **는**, et on le colle devant le nom.' },
        { type: 'table', head: ['Phrase', 'Nom', '🧩 Groupe'], rows: PUZZLE.map(([s, n, g]) => [`[[${s}]]`, `[[${n}]]`, `[[${g}]]`]) },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Assemble les pièces du puzzle.', pairs: PUZZLE.map(([s, , g]) => [s, g] as [string, string]) } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[친구가 음악을 들어요.]] + [[친구]] → ______', answer: alts('음악을 듣는 친구') } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Le verbe devant le nom. Touche une case vide.', head: ['Verbe', '+ 는', 'Nom'], rows: [
      ['[[먹다]]', blank('먹는'), '[[사람]]'],
      ['[[가르치다]]', blank('가르치는'), '[[선생님]]'],
      ['[[놀다]]', blank('노는'), '[[아이]]'],
      ['[[듣다]]', blank('듣는'), '[[친구]]'],
    ], explain: 'Radical + [[는]], sans 으 ; seul le ㄹ de [[놀다]] tombe : [[노는]].' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Le livre que je lis est intéressant.', tiles: ['제가', '읽는', '책이', '재미있어요.'], distractors: ['저는', '읽어요'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Dans la cour 🏫' },
        { type: 'text', text: 'Nabi montre ses amis à sa grand-mère, en visite à l’école. **Tout en coréen** :' },
        { type: 'dialog', lines: [
          { who: '할머니', ko: '나비야, 친구가 누구예요?' },
          { who: '나비', ko: '저기 축구를 하는 친구가 지훈이에요.' },
          { who: '나비', ko: '그리고 책을 읽는 친구가 수아예요.' },
          { who: '할머니', ko: '음악을 듣는 아이는요?' },
          { who: '나비', ko: '민수예요! 민수는 음악을 듣는 것을 가장 좋아해요.' },
          { who: '할머니', ko: '나비는 좋은 친구들이 있어요!' },
        ] },
        { type: 'tip', text: 'Petits mots : [[저기|t:là-bas]] · [[나비야|t:Nabi ! (on appelle un enfant)]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qui est l’ami qui lit un livre ?', choices: ['Sua', 'Jihoon', 'Minsu'], answer: 0, explain: '[[책을 읽는 친구가 수아예요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[저기 축구를 하는 친구가 지훈이에요.]] →', choices: ['L’ami qui joue au foot là-bas, c’est Jihoon.', 'Jihoon aime le foot.', 'Jihoon va jouer au foot.'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '음악을 듣는 친구가 있어요', choices: ['음악을 듣는 친구가 있어요', '친구가 음악을 들어요', '음악을 듣는 것을 좋아해요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Présente un ami avec **는** + nom : « L’ami qui… ». [[쓰세요!]]', placeholder: '축구를 하는 친구가 지훈이에요.', mustInclude: ['는 친구|는 사람|는 아이|는 학생'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '제가 읽는 책이 재미있어요.', fr: 'Le livre que je lis est intéressant.', prompt: 'Mise en pratique : dis-le à voix haute 📖' } },
  ],
  interleave: [
    { type: 'type', prompt: '[[맛있다]] → devant un nom :', answer: '맛있는' },
    { type: 'cloze', before: '', after: ' 물을 마셔요.', choices: ['시원한', '시원해요'], answer: 0, translation: 'Je bois de l’eau fraîche.' },
    { type: 'mcq', prompt: '« Ce que j’aime le plus, c’est lire. »', choices: ['책을 읽는 것을 가장 좋아해요.', '책을 읽는 것이 가장 좋아해요.', '책을 더 읽어요.'], answer: 0 },
    { type: 'type', prompt: '[[피곤하다]] → « si je suis fatigué » :', answer: '피곤하면' },
  ],
};

const COLOURS: [string, string, string][] = [
  ['🔴', '빨간', 'rouge'],
  ['🔵', '파란', 'bleu'],
  ['🟡', '노란', 'jaune'],
  ['⚪', '하얀', 'blanc'],
  ['⚫', '까만', 'noir'],
];

const day84: Lesson = {
  id: 'm5-w1-d4',
  month: 5,
  week: 1,
  day: 84,
  title: 'Qui est-ce ? Le jeu des portraits',
  summary: 'Deviner un camarade : 빨간 옷을 입고 있는 사람 · 안경을 쓰고 있는 친구. Les couleurs devant un nom : 빨간 · 파란 · 노란 · 하얀 · 까만. Écrire deux devinettes.',
  cards: [
    { id: 'w17-ko-ppalgan-paran', kind: 'vocab', ko: '빨간 · 파란 · 노란', fr: 'rouge · bleu · jaune (devant un nom)', note: '🎨 [[빨간 연필]] · [[파란 가방]] · [[노란 꽃]]. À retenir tels quels.' },
    { id: 'w17-ko-hayan-kkaman', kind: 'vocab', ko: '하얀 · 까만', fr: 'blanc · noir (devant un nom)', note: '⚪⚫ [[하얀 옷]] · [[까만 모자]].' },
    { id: 'w17-ko-ibgo-inneun-saram', kind: 'phrase', ko: '빨간 옷을 입고 있는 사람', fr: 'la personne qui porte un vêtement rouge', note: '👕 [[입고 있어요|p:progressive]] → [[입고 있는]] : [[있다]] + **는**. Règle : [[relative|p:relative]]' },
    { id: 'w17-ko-angyeongeul-sseugo-inneun', kind: 'phrase', ko: '안경을 쓰고 있는 친구', fr: 'l’ami qui porte des lunettes', note: '👓 [[안경을 써요]] → [[안경을 쓰고 있는 친구]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le jeu des portraits 🕵️' },
        { type: 'tip', text: '[[음악을 듣는 친구]], [[책을 읽는 친구]]… Aujourd’hui, on joue au **portrait** : deviner un camarade à partir d’une description.', mood: 'happy' },
        { type: 'text', text: 'D’abord, les **couleurs**. Devant un nom, elles ont déjà leur [[ㄴ|p:adj-mod]] — retiens-les telles quelles :' },
        { type: 'table', head: ['', 'Devant un nom', '', 'Exemple'], rows: COLOURS.map(([emoji, c, fr]) => [emoji, `[[${c}]]`, fr, `[[${c} 옷]]`]) },
        { type: 'text', text: 'Pour dire ce que quelqu’un **porte en ce moment**, on prend [[입고 있어요|p:progressive]] et, devant le nom, [[있다]] → **있는** (le réflexe d’hier !) :' },
        { type: 'breakdown', segments: [
          { ko: '빨간 옷', role: 'object', gloss: 'un vêtement rouge', particle: { ko: '을', key: 'object' } },
          { ko: '입고 있는', role: 'verb', gloss: 'qui porte' },
          { ko: '사람', role: 'other', gloss: 'la personne' },
        ], translation: 'la personne qui porte un vêtement rouge' },
        { type: 'tip', text: '[[옷을 입는 사람]] existe aussi, mais veut plutôt dire « qui s’habille (d’habitude) en… ». Pour une devinette, [[입고 있는]] est le bon choix.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque couleur à son mot.', pairs: COLOURS.slice(0, 4).map(([emoji, c]) => [emoji, c] as [string, string]) } },
    { kind: 'practice', exercise: { type: 'type', prompt: '✏️🔴 « un crayon rouge »', answer: alts('빨간 연필') } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '👓 « l’ami qui porte des lunettes »', before: '안경을 ', after: ' 친구', choices: ['쓰고 있는', '쓰고 있어요', '써요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'order', translation: 'la personne qui porte un vêtement bleu', tiles: ['파란', '옷을', '입고', '있는', '사람'], distractors: ['있어요', '빨간'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Qui est-ce ? 🤔' },
        { type: 'text', text: 'Activité de la classe : chacun écrit une **devinette** de quatre phrases. Celle de Sua :' },
        { type: 'table', head: ['🕵️ La devinette de Sua'], rows: [
          ['[[이 친구는 파란 옷을 입고 있어요.]] [[까만 안경을 쓰고 있어요.]] [[축구를 하는 것을 가장 좋아해요.]] [[운동장에서 매일 달리는 친구예요.]] [[누구예요?]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qui est-ce ? (indice : il adore le foot)', choices: ['Jihoon', 'Sua', 'Nabi'], answer: 0, explain: '[[축구를 하는 것을 가장 좋아해요.]] — c’est [[지훈]] !' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que porte l’ami de la devinette ?', choices: ['Un vêtement bleu et des lunettes noires.', 'Un vêtement rouge.', 'Un chapeau jaune.'], answer: 0, explain: '[[파란 옷을 입고 있어요. 까만 안경을 쓰고 있어요.]]' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La trame de la devinette ✍️' },
        { type: 'table', head: ['', 'Trame', 'Exemple'], rows: [
          ['👕', '[couleur] 옷을 입고 있어요', '[[노란 옷을 입고 있어요.]]'],
          ['👓', 'un objet', '[[하얀 모자를 쓰고 있어요.]]'],
          ['💚', 'ce qu’il aime', '[[그림을 그리는 것을 좋아해요.]]'],
          ['❓', 'la question', '[[누구예요?]]'],
        ] },
        { type: 'tip', text: '[[모자를 써요]] : comme [[안경]], un chapeau se « met » avec [[쓰다]] !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'type', prompt: '🟡👕 « Il porte un vêtement jaune. »', answer: alts('노란 옷을 입고 있어요') } },
    { kind: 'practice', exercise: { type: 'listen', audio: '빨간 옷을 입고 있는 사람', choices: ['빨간 옷을 입고 있는 사람', '파란 옷을 입고 있는 사람', '빨간 옷을 입어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Devinette 1/2 — décris un camarade (vêtement, couleur…), puis [[누구예요?]] [[쓰세요!]]', placeholder: '이 친구는 빨간 옷을 입고 있어요. 누구예요?', mustInclude: ['빨간|파란|노란|하얀|까만', '누구'] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Devinette 2/2 — cette fois avec **는** + nom : « C’est l’ami qui… ».', placeholder: '음악을 듣는 것을 좋아해요. 안경을 쓰고 있는 친구예요. 누구예요?', mustInclude: [RELATIVE_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '이 친구는 빨간 옷을 입고 있어요. 그림을 그리는 것을 좋아해요. 누구예요?', fr: 'Cet ami porte un vêtement rouge. Il aime dessiner. Qui est-ce ?', prompt: 'Fais deviner ton camarade au professeur, à voix haute 🕵️' } },
  ],
  interleave: [
    { type: 'type', prompt: '« l’élève qui étudie »', answer: alts('공부하는 학생') },
    { type: 'mcq', prompt: '[[재미없다]] + [[영화]] →', choices: ['재미없는 영화', '재미없은 영화', '재미없 영화'], answer: 0 },
    { type: 'cloze', before: '체육이 수학', after: ' 더 재미있어요.', choices: ['보다', '를'], answer: 0, translation: 'Le sport est plus amusant que les maths.' },
    { type: 'type', prompt: '[[놀다]] + [[아이]] → « l’enfant qui joue »', answer: alts('노는 아이') },
  ],
};

const DICTATION = [
  '큰 책을 읽어요',
  '시원한 물을 마셔요',
  '맛있는 밥을 먹어요',
  '음악을 듣는 친구가 있어요',
  '제가 읽는 책이 재미있어요',
];

const READING: [string, string[]][] = [
  ['큰 가방하고 작은 연필이 있어요.', ['🎒 grand sac + ✏️ petit crayon', '👜 petit sac + ✏️ grand crayon', '📕 grand livre + ✏️ petit crayon']],
  ['노란 꽃이 예뻐요.', ['🌼 une jolie fleur jaune', '🌹 une jolie fleur rouge', '🌼 une petite fleur blanche']],
  ['운동장에서 노는 아이들이 웃어요.', ['🏃 les enfants qui jouent dans la cour rient', '📚 les enfants lisent à la bibliothèque', '😢 un enfant pleure dans la classe']],
];

const day85: Lesson = {
  id: 'm5-w1-d5',
  month: 5,
  week: 1,
  day: 85,
  title: 'Bilan & Petite évaluation n°17',
  summary: 'L’atelier de lecture, la dictée de la classe, la petite évaluation n°17 (adjectifs, relatives, oral) et une histoire entièrement en coréen.',
  cards: [],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Fin de la semaine 17 🎓' },
        { type: 'tip', text: '[[예쁜 나비]], [[맛있는 밥]], [[음악을 듣는 친구]]… Tes phrases ont pris des couleurs cette semaine ! D’abord, l’**atelier de lecture**.', mood: 'encourage' },
        { type: 'text', text: 'Lis chaque description (touche-la pour l’entendre) et choisis la bonne image.' },
      ],
    },
    ...READING.map(([s, choices], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'mcq' as const, prompt: `Lecture ${i + 1}/${READING.length} — [[${s}]]`, choices, answer: 0 },
    })),
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
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Grammaire de la classe : qualifie chaque nom. Touche une case vide.', head: ['Adjectif', 'Nom', '🏷️ Groupe'], rows: [
      ['[[크다]]', '[[집]]', blank('큰 집')],
      ['[[맛있다]]', '[[사과]]', blank('맛있는 사과')],
      ['[[좋다]]', '[[친구]]', blank('좋은 친구')],
      ['[[예쁘다]]', '[[꽃]]', blank('예쁜 꽃')],
      ['[[시원하다]]', '[[물]]', blank('시원한 물')],
    ] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Petite évaluation n°17' },
        { type: 'text', text: 'Trois parties, sans piège ni chrono. Chaque erreur reviendra simplement en révision.' },
        { type: 'table', head: ['Partie', 'Contenu'], rows: [
          ['A', 'Transformation d’adjectifs'],
          ['B', 'Assemblage de relative'],
          ['C', 'Expression orale'],
        ] },
        { type: 'tip', text: '**A — Adjectifs.** Place l’adjectif devant le nom.', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'type', prompt: '**A · 1/3** — [[크다]] + [[집]] → ______', answer: alts('큰 집') } },
    { kind: 'practice', exercise: { type: 'type', prompt: '**A · 2/3** — [[작다]] + [[공]] → ______', answer: alts('작은 공') } },
    { kind: 'practice', exercise: { type: 'type', prompt: '**A · 3/3** — [[맛있다]] + [[사과]] → ______', answer: alts('맛있는 사과') } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**B — Relative.** Assemble l’action et le nom.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'type', prompt: '**B · 1/2** — [[음악을 듣다]] + [[친구]] → ______', answer: alts('음악을 듣는 친구') } },
    { kind: 'practice', exercise: { type: 'match', prompt: '**B · 2/2** — Relie l’action à son groupe.', pairs: [
      ['책을 읽다 + 학생', '책을 읽는 학생'],
      ['운동장에서 놀다 + 아이', '운동장에서 노는 아이'],
      ['한국어를 가르치다 + 선생님', '한국어를 가르치는 선생님'],
    ] } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**C — À l’oral.** Décris un objet de la classe avec au moins un adjectif devant le nom.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'write', prompt: '**C · 1/2** — Prépare ta phrase.', placeholder: '빨간 연필이에요.', mustInclude: [MOD_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '빨간 연필이에요. 그리고 큰 책상이에요.', fr: 'C’est un crayon rouge. Et c’est un grand bureau.', prompt: '**C · 2/2** — Dis-la à voix haute, puis écoute le modèle.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le papillon de la cour 📖' },
        { type: 'text', text: 'Une histoire **entièrement en coréen**. Touche une bulle pour l’entendre.' },
        { type: 'dialog', lines: [
          { who: '📖', ko: '월요일 아침이에요. 운동장에 예쁜 나비가 있어요.' },
          { who: '수아', ko: '와! 저기 예쁜 나비가 있어요!' },
          { who: '지훈', ko: '노란 나비예요?' },
          { who: '민수', ko: '아니요, 파란 나비예요. 정말 큰 나비예요!' },
          { who: '📖', ko: '나비가 아이들 옆에 앉았어요.' },
          { who: '나비', ko: '안녕! 저는 나비예요. 한국어를 공부하는 나비예요!' },
          { who: '수아', ko: '나비? 안경을 쓰고 있는 나비?' },
          { who: '나비', ko: '네! 빨간 가방을 메고 있는 애벌레… 그 친구가 저예요!' },
          { who: '지훈', ko: '와, 정말 예뻐요! 축하해요!' },
          { who: '민수', ko: '우리 같이 맛있는 점심을 먹을까요? 🍚' },
          { who: '나비', ko: '좋아요! 오늘은 정말 좋은 날이에요. 🦋' },
        ] },
        { type: 'tip', text: 'Petits mots : [[메고 있는|t:qui porte (sur le dos)]] · [[애벌레|t:chenille]] · [[그 친구|t:cet ami-là]] · [[축하해요|t:félicitations]] · [[날|t:jour]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'De quelle couleur est le papillon ?', choices: ['bleu', 'jaune', 'rouge'], answer: 0, explain: '[[아니요, 파란 나비예요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Comment Sua reconnaît-elle Nabi ?', choices: ['Il porte des lunettes.', 'Il a un sac bleu.', 'Il chante.'], answer: 0, explain: '[[안경을 쓰고 있는 나비?]]' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ton bilan de la semaine 17 🎓' },
        { type: 'table', head: ['Je sais…', 'Exemple'], rows: [
          ['🏷️ placer un [[adjectif devant un nom|p:adj-mod]]', '[[작은 가방]] · [[시원한 물]] · [[추운 날씨]]'],
          ['🟢 appliquer le réflexe 있 / 없 + 는', '[[맛있는 밥]] · [[재미없는 영화]]'],
          ['🧩 dire « le … qui / que … » ([[relative|p:relative]])', '[[음악을 듣는 친구]] · [[제가 읽는 책]]'],
          ['🎨 décrire avec des couleurs', '[[빨간 옷을 입고 있는 사람]]'],
          ['✂️ fusionner deux phrases', '[[책이 커요. 책을 읽어요.]] → [[큰 책을 읽어요.]]'],
        ] },
        { type: 'tip', text: '[[예쁜 나비가 웃고 있어요!|t:le joli papillon sourit !]] 🦋 À lundi !', mood: 'happy' },
      ],
    },
  ],
};

export const m5w1: Lesson[] = [day81, day82, day83, day84, day85];
