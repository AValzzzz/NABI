import type { GridBlank, Lesson } from '../types';

const COLLAPSE: [RegExp, string][] = [
  [/ 거예요/g, '거예요'],
  [/ 숙제/g, '숙제'],
  [/ 내용/g, '내용'],
  [/ 물건/g, '물건'],
];
const alts = (...xs: string[]): string[] => {
  const out = new Set(xs);
  for (const [re, to] of COLLAPSE) for (const s of [...out]) out.add(s.replace(re, to));
  for (const s of [...out]) out.add(s.replace(/[.,!?] /g, ' '));
  for (const s of [...out]) out.add(s.replace(/[.!?]$/, ''));
  return [...out];
};
const blank = (s: string): GridBlank => ({ answer: alts(s) });

const PAST_REL_ANY = '먹은|읽은|만난|공부한|운동한|들은|마신|그린|가져간|본 영화|본 책|간 공원|간 곳|간 도서관|한 숙제|한 운동|산 책|산 물건|논 친구';
const FUT_REL_ANY = '먹을|읽을|만날|공부할|운동할|들을|마실|그릴|가져갈|볼 영화|볼 책|갈 곳|갈 공원|갈 도서관|할 숙제|할 운동|할 일|살 책|살 물건|놀 친구';
const VERBS: [string, string, string, string][] = [
  ['가다', '간', '가는', '갈'],
  ['보다', '본', '보는', '볼'],
  ['만나다', '만난', '만나는', '만날'],
  ['하다', '한', '하는', '할'],
  ['먹다', '먹은', '먹는', '먹을'],
  ['읽다', '읽은', '읽는', '읽을'],
  ['놀다', '논', '노는', '놀'],
  ['듣다', '들은', '듣는', '들을'],
];

const MEMORIES: [string, string, string][] = [
  ['🧑‍🤝‍🧑', '어제 만난 친구', 'l’ami que j’ai rencontré hier'],
  ['🎬', '지난 주말에 본 영화', 'le film que j’ai vu le week-end dernier'],
  ['🥬', '어제 먹은 김치', 'le kimchi que j’ai mangé hier'],
  ['🏞️', '지난 주말에 간 공원', 'le parc où je suis allé(e) le week-end dernier'],
];

const day86: Lesson = {
  id: 'm5-w2-d1',
  month: 5,
  week: 2,
  day: 86,
  title: 'Le repas d’hier : verbe + (으)ㄴ',
  summary: 'La relative au passé : 지금 먹는 밥 → 어제 먹은 밥 · 어제 만난 친구 · 어제 공부한 내용. Voyelle → ㄴ, consonne → 은. Nouveau : 내용.',
  cards: [
    { id: 'w18-ko-meogeun-bap', kind: 'grammar', ko: '지금 먹는 밥 · 어제 먹은 밥', fr: 'le repas que je mange · le repas que j’ai mangé — passé : radical + (으)ㄴ', note: '⏪ Action **finie** : voyelle → ㄴ ([[간]], [[본]], [[공부한]]), consonne → 은 ([[먹은]], [[읽은]]), ㄹ tombe ([[논]]). Règle : [[passé|p:rel-past]]' },
    { id: 'w18-ko-eoje-mannan-chingu', kind: 'phrase', ko: '어제 만난 친구', fr: 'l’ami que j’ai rencontré hier', note: '🧑‍🤝‍🧑 [[만나다]] → [[만난]]. [[어제 만난 친구가 지훈이에요.]]' },
    { id: 'w18-ko-naeyong', kind: 'vocab', ko: '내용', fr: 'le contenu (ce qu’il y a dedans)', note: '📄 [[책 내용]] = le contenu du livre. [[어제 공부한 내용]] = ce que j’ai étudié hier.' },
    { id: 'w18-ko-gongbuhan-naeyong', kind: 'phrase', ko: '어제 공부한 내용을 다시 읽어요', fr: 'Je relis ce que j’ai étudié hier.', note: '📚 [[공부하다]] → [[공부한]] (≠ [[공부하는]], maintenant).' },
    { id: 'w18-ko-bon-yeonghwa', kind: 'phrase', ko: '지난 주말에 본 영화가 재미있었어요', fr: 'Le film que j’ai vu le week-end dernier était intéressant.', note: '🎬 [[보다]] → [[본]]. Le moment ([[지난 주말에]]) reste collé à l’action.' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le repas d’hier 🍚' },
        { type: 'tip', text: '[[음악을 듣는 친구]], [[제가 읽는 책]]… La semaine dernière, l’action se passait **maintenant**. Et si elle est **déjà finie** ?', mood: 'happy' },
        { type: 'text', text: 'Compare ces deux repas. Une seule lettre change :' },
        { type: 'table', head: ['', 'Devant le nom', ''], rows: [
          ['📍 maintenant', '[[지금 먹는 밥]]', 'le repas que je mange'],
          ['⏪ hier (fini)', '[[어제 먹은 밥]]', 'le repas que j’ai mangé'],
        ] },
        { type: 'breakdown', segments: [
          { ko: '어제 먹은', role: 'verb', gloss: 'que j’ai mangé hier' },
          { ko: '밥', role: 'subject', gloss: 'le repas', particle: { ko: '이', key: 'subject' } },
          { ko: '맛있었어요', role: 'verb', gloss: 'était bon' },
        ], translation: 'Le repas que j’ai mangé hier était bon.', note: '**는** = maintenant · **(으)ㄴ** = c’est fait. Le moment ([[어제]]) se place au début du groupe.' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La règle : ㄴ / 은 ⏪' },
        { type: 'table', head: ['Le radical finit par…', 'Verbe', 'Passé + nom'], rows: [
          ['🟢 une voyelle → **ㄴ** dessous', '[[가다]] · [[보다]] · [[만나다]]', '[[간]] · [[본]] · [[만난]]'],
          ['⭐ [[하다|p:hada]] → **한**', '[[공부하다]] · [[운동하다]]', '[[공부한]] · [[운동한]]'],
          ['🟤 une consonne → **은**', '[[먹다]] · [[읽다]]', '[[먹은]] · [[읽은]]'],
          ['✂️ ㄹ tombe', '[[놀다]]', '[[논]]'],
          ['🎧 [[ㄷ|p:irreg-d]] → ㄹ', '[[듣다]]', '[[들은]]'],
        ] },
        { type: 'text', text: 'Ça te rappelle quelque chose ? C’est **exactement** la forme de [[작은|p:adj-mod]] et [[큰]] — la famille de [[면|p:if]] : [[먹으면]] → [[먹은]], [[가면]] → [[간]].' },
        { type: 'tip', text: '⚠️ Le piège : avec un **adjectif**, (으)ㄴ décrit ce qui est vrai **maintenant** ([[작은 가방]] = un sac qui est petit). Avec une **action**, (으)ㄴ veut dire **c’est fait** ([[먹은 밥]] = le repas déjà mangé). Action au présent ? → **는**.', mood: 'thinking' },
        { type: 'liaison', items: [
          { written: '먹은', spoken: '머근', fr: 'mangé' },
          { written: '읽은', spoken: '일근', fr: 'lu' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🎬 « le film que j’ai vu hier »', choices: ['어제 본 영화', '어제 보는 영화', '영화 어제 본'], answer: 0, explain: '[[보다]] finit par une voyelle → [[본]]. **는** = maintenant, pas hier.' } },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Le piège : adjectif (vrai maintenant) ou action finie ?', buckets: ['🏷️ adjectif', '⏪ action finie'], items: [
      { text: '작은 가방', bucket: 0 }, { text: '시원한 물', bucket: 0 }, { text: '예쁜 꽃', bucket: 0 }, { text: '큰 책', bucket: 0 },
      { text: '먹은 밥', bucket: 1 }, { text: '본 영화', bucket: 1 }, { text: '공부한 내용', bucket: 1 }, { text: '만난 친구', bucket: 1 },
    ], explain: '[[시원한]] vient de l’adjectif [[시원하다]] (c’est frais maintenant) ; [[공부한]] vient de l’action [[공부하다]] (c’est fait).' } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Au passé, devant le nom. Touche une case vide.', head: ['Verbe', '⏪ + nom'], rows: [
      ['[[만나다]]', blank('만난')],
      ['[[먹다]]', blank('먹은')],
      ['[[공부하다]]', blank('공부한')],
      ['[[읽다]]', blank('읽은')],
      ['[[놀다]]', blank('논')],
    ], explain: 'Voyelle → ㄴ ([[만난]], [[공부한]]) · consonne → 은 ([[먹은]], [[읽은]]) · ㄹ tombe ([[논]]).' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Mes souvenirs d’école 📔' },
        { type: 'text', text: 'Activité de la classe : rédiger des **souvenirs**. D’abord, les groupes :' },
        { type: 'table', head: ['', 'Souvenir', ''], rows: MEMORIES.map(([emoji, g, fr]) => [emoji, `[[${g}]]`, fr]) },
        { type: 'tip', text: '[[간 공원]] = le parc **où** je suis allé. Pas de « qui », « que », « où » en coréen : la forme du verbe suffit !', mood: 'thinking' },
        { type: 'text', text: 'Le souvenir de Sua :' },
        { type: 'table', head: ['📔 Le souvenir de Sua'], rows: [
          ['[[어제 만난 친구는 민수예요.]] [[같이 운동장에서 놀았어요.]] [[지난 주말에 본 영화도 재미있었어요.]] [[하지만 어제 먹은 김치는 정말 매웠어요!]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque image à son souvenir.', pairs: MEMORIES.map(([emoji, g]) => [emoji, g] as [string, string]) } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qui est l’ami que Sua a rencontré hier ?', choices: ['Minsu', 'Jihoon', 'Nabi'], answer: 0, explain: '[[어제 만난 친구는 민수예요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Et le kimchi d’hier ?', choices: ['Il était vraiment piquant.', 'Il était délicieux.', 'Sua n’en a pas mangé.'], answer: 0, explain: '[[어제 먹은 김치는 정말 매웠어요!]]' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ce que j’ai étudié hier 📚' },
        { type: 'text', text: 'Mot nouveau : [[내용|t:le contenu]]. Pour réviser, on relit ce qu’on a étudié :' },
        { type: 'breakdown', segments: [
          { ko: '어제 공부한', role: 'verb', gloss: 'que j’ai étudié hier' },
          { ko: '내용', role: 'object', gloss: 'le contenu', particle: { ko: '을', key: 'object' } },
          { ko: '다시 읽어요', role: 'verb', gloss: 'je relis' },
        ], translation: 'Je relis ce que j’ai étudié hier.' },
      ],
    },
    { kind: 'practice', exercise: { type: 'type', prompt: '📚 « ce que j’ai étudié hier »', answer: alts('어제 공부한 내용') } },
    { kind: 'practice', exercise: { type: 'order', translation: 'L’ami que j’ai rencontré hier, c’est Jihoon.', tiles: ['어제', '만난', '친구가', '지훈이에요.'], distractors: ['만나는', '만날'] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '어제 먹은 밥이 맛있었어요', choices: ['어제 먹은 밥이 맛있었어요', '지금 먹는 밥이 맛있어요', '내일 밥을 먹을 거예요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Écris un souvenir avec un groupe au passé : « le … que j’ai … ». [[쓰세요!]]', placeholder: '어제 본 영화가 재미있었어요.', mustInclude: [PAST_REL_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '어제 공부한 내용을 다시 읽어요.', fr: 'Je relis ce que j’ai étudié hier.', prompt: 'Mise en pratique : dis-le à voix haute 📚' } },
  ],
  interleave: [
    { type: 'type', prompt: '📖 « le livre que je lis »', answer: alts('제가 읽는 책') },
    { type: 'mcq', prompt: '[[맛있다]] + [[밥]] →', choices: ['맛있는 밥', '맛있은 밥', '맛있 밥'], answer: 0 },
    { type: 'cloze', before: '', after: ' 옷을 입고 있는 사람이 수아예요.', choices: ['빨간', '빨개요'], answer: 0, translation: 'La personne qui porte un vêtement rouge, c’est Sua.' },
    { type: 'type', prompt: '[[작다]] + [[가방]] → « un petit sac »', answer: alts('작은 가방') },
  ],
};

const PACKING: [string, string][] = [
  ['💧', '물'],
  ['🧢', '모자'],
  ['☂️', '우산'],
  ['🍎', '사과'],
  ['📓', '공책'],
];

const day87: Lesson = {
  id: 'm5-w2-d2',
  month: 5,
  week: 2,
  day: 87,
  title: 'Les devoirs de demain : verbe + (으)ㄹ',
  summary: 'La relative au futur : 내일 먹을 밥 · 내일 할 숙제 · 소풍에 가져갈 물건. Voyelle → ㄹ, consonne → 을 — le ㄹ de 갈 거예요 ! Nouveaux : 소풍, 물건, 가져가요.',
  cards: [
    { id: 'w18-ko-meogeul-bap', kind: 'grammar', ko: '내일 먹을 밥 · 내일 할 숙제', fr: 'le repas que je mangerai · les devoirs que je ferai demain — futur : radical + (으)ㄹ', note: '⏩ Action **à venir** : voyelle → ㄹ ([[갈]], [[볼]], [[할]]), consonne → 을 ([[먹을]], [[읽을]]). Le même ㄹ que [[갈 거예요|p:future]]. Règle : [[futur|p:rel-future]]' },
    { id: 'w18-ko-sopung', kind: 'vocab', ko: '소풍', fr: 'sortie scolaire, pique-nique', note: '🧺 [[내일 소풍을 가요!]]' },
    { id: 'w18-ko-mulgeon', kind: 'vocab', ko: '물건', fr: 'objet, affaire (chose concrète)', note: '📦 ≠ [[것]] (chose, le fait de…). [[가져갈 물건]] = les affaires à emporter.' },
    { id: 'w18-ko-gajyeogayo', kind: 'phrase', ko: '가져가요 · 가져갈 물건', fr: 'j’emporte · les affaires à emporter', note: '🎒 [[가져가다]] = prendre avec soi et aller. [[우산을 가져갈 거예요.]]' },
    { id: 'w18-ko-naeil-hal-sukje', kind: 'phrase', ko: '내일 할 숙제', fr: 'les devoirs que je ferai demain', note: '📝 [[하다]] → [[할]], prononcé [할 쑥쩨] : après ce ㄹ, la consonne suivante se durcit.' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le repas de demain 🍱' },
        { type: 'tip', text: '[[어제 먹은 밥]], [[지금 먹는 밥]]… Il manque une case : **demain** !', mood: 'happy' },
        { type: 'text', text: 'Touche chaque case du calendrier :' },
        { type: 'timeline', start: 2, points: [
          { label: '어제 ⏪', ko: '어제 먹은 밥', fr: 'le repas que j’ai mangé hier' },
          { label: '지금 📍', ko: '지금 먹는 밥', fr: 'le repas que je mange maintenant' },
          { label: '내일 ⏩', ko: '내일 먹을 밥', fr: 'le repas que je mangerai demain' },
        ] },
        { type: 'table', head: ['Le radical finit par…', 'Verbe', 'Futur + nom'], rows: [
          ['🟢 une voyelle → **ㄹ** dessous', '[[가다]] · [[보다]] · [[하다]]', '[[갈]] · [[볼]] · [[할]]'],
          ['🟤 une consonne → **을**', '[[먹다]] · [[읽다]]', '[[먹을]] · [[읽을]]'],
          ['✂️ ㄹ ne bouge pas', '[[놀다]]', '[[놀]]'],
          ['🎧 [[ㄷ|p:irreg-d]] → ㄹ', '[[듣다]]', '[[들을]]'],
        ] },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le secret de 갈 거예요 🤫' },
        { type: 'text', text: 'Ce ㄹ, tu l’utilises depuis le 2ᵉ mois ! [[거]] = [[것]], « une chose » (comme dans [[먹는 것|p:nominal]]). Donc [[갈 거예요|p:future]], c’est mot à mot « c’est une chose **que j’irai** ». Même ㄹ dans [[할 수 있어요|p:ability]] et [[갈까요?|p:suggest]] : toujours une action **pas encore faite**.' },
        { type: 'breakdown', segments: [
          { ko: '내일 할', role: 'verb', gloss: 'que je ferai demain' },
          { ko: '숙제', role: 'subject', gloss: 'les devoirs', particle: { ko: '가', key: 'subject' } },
          { ko: '있어요', role: 'verb', gloss: 'il y a' },
        ], translation: 'J’ai des devoirs à faire demain.' },
        { type: 'liaison', items: [
          { written: '할 숙제', spoken: '할 쑥쩨', fr: 'après ㄹ, le ㅅ se durcit (comme 갈 꺼에요)' },
          { written: '먹을 밥', spoken: '머글 빱', fr: 'liaison + ㅂ durci' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '📝 « les devoirs que je ferai demain »', choices: ['내일 할 숙제', '내일 한 숙제', '내일 하는 숙제'], answer: 0, explain: '[[하다]] → [[할]] : ㄹ = pas encore fait. [[한]] = déjà fait, [[하는]] = maintenant.' } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Au futur, devant le nom. Touche une case vide.', head: ['Verbe', '⏩ + nom'], rows: [
      ['[[보다]]', blank('볼')],
      ['[[먹다]]', blank('먹을')],
      ['[[만나다]]', blank('만날')],
      ['[[읽다]]', blank('읽을')],
      ['[[놀다]]', blank('놀')],
    ], explain: 'Voyelle → ㄹ ([[볼]], [[만날]]) · consonne → 을 ([[먹을]], [[읽을]]) · [[놀다]] garde son ㄹ : [[놀]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La sortie scolaire 🧺' },
        { type: 'text', text: 'Activité de la classe : préparer la liste des **affaires à emporter** pour le [[소풍|t:sortie scolaire]]. Nouveaux mots : [[물건|t:objet, affaire]] et [[가져가요|t:j’emporte]].' },
        { type: 'table', head: ['', '📋 소풍에 가져갈 물건'], rows: PACKING.map(([emoji, o]) => [emoji, `[[${o}]]`]) },
        { type: 'dialog', lines: [
          { who: '선생님', ko: '내일은 소풍을 가요! 가져갈 물건을 말해 주세요.' },
          { who: '민수', ko: '물하고 모자를 가져갈 거예요.' },
          { who: '수아', ko: '비가 오면 우산도 가져갈 거예요.' },
          { who: '지훈', ko: '저는 소풍에서 먹을 사과를 가져갈 거예요!' },
          { who: '나비', ko: '선생님, 내일 할 숙제가 있어요?' },
          { who: '선생님', ko: '아니요, 내일은 숙제가 없어요! 😄' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi Sua emporte-t-elle un parapluie ?', choices: ['Au cas où il pleuvrait.', 'Parce qu’il fait chaud.', 'Pour Jihoon.'], answer: 0, explain: '[[비가 오면 우산도 가져갈 거예요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’emporte Jihoon ?', choices: ['Une pomme à manger pendant la sortie.', 'Un chapeau.', 'Son cahier.'], answer: 0, explain: '[[소풍에서 먹을 사과]] = la pomme **qu’il mangera** à la sortie.' } },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Complète la liste : relie chaque image.', pairs: PACKING.slice(0, 4).map(([emoji, o]) => [emoji, o] as [string, string]) } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🧺 « les affaires à emporter pour la sortie »', before: '소풍에 ', after: ' 물건', choices: ['가져갈', '가져간', '가져가요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'order', translation: 'J’ai des devoirs à faire demain.', tiles: ['내일', '할', '숙제가', '있어요.'], distractors: ['한', '해요'] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '내일 먹을 사과를 가져갈 거예요', choices: ['내일 먹을 사과를 가져갈 거예요', '어제 먹은 사과가 맛있었어요', '지금 먹는 사과가 맛있어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '📝 « les devoirs que je ferai demain »', answer: alts('내일 할 숙제') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ta liste pour la sortie : écris une phrase avec un groupe au futur. [[쓰세요!]]', placeholder: '소풍에서 먹을 사과를 가져갈 거예요.', mustInclude: [FUT_REL_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '내일 할 숙제가 있어요. 그리고 내일 볼 영화도 있어요!', fr: 'J’ai des devoirs à faire demain. Et j’ai aussi un film à voir demain !', prompt: 'Mise en pratique : dis-le à voix haute 📝' } },
  ],
  interleave: [
    { type: 'type', prompt: '🎬 « le film que j’ai vu hier »', answer: alts('어제 본 영화') },
    { type: 'mcq', prompt: '[[먹은 밥]] ou [[작은 가방]] : lequel parle d’une action **finie** ?', choices: ['먹은 밥', '작은 가방'], answer: 0 },
    { type: 'cloze', before: '음악을 ', after: ' 숙제를 해요.', choices: ['들으면서', '듣는'], answer: 0, translation: 'Je fais mes devoirs en écoutant de la musique.' },
    { type: 'type', prompt: '« l’enfant qui joue »', answer: alts('노는 아이') },
  ],
};

const day88: Lesson = {
  id: 'm5-w2-d3',
  month: 5,
  week: 2,
  day: 88,
  title: 'Trois temps : 간 · 가는 · 갈',
  summary: 'Le tableau à trois colonnes : 간 (passé) · 가는 (présent) · 갈 (futur). Les cartes tournantes, la concordance : 어제 산 책을 지금 읽어요.',
  cards: [
    { id: 'w18-ko-gan-ganeun-gal', kind: 'grammar', ko: '간 · 가는 · 갈', fr: '가다 devant un nom : passé · présent · futur', note: '⏪ (으)ㄴ · 📍 는 · ⏩ (으)ㄹ. [[먹은]] · [[먹는]] · [[먹을]]. Règles : [[passé|p:rel-past]] · [[présent|p:relative]] · [[futur|p:rel-future]]' },
    { id: 'w18-ko-san-chaek', kind: 'phrase', ko: '어제 산 책을 지금 읽어요', fr: 'Je lis maintenant le livre que j’ai acheté hier.', note: '🛒 [[사다]] → [[산]] (acheté hier) ; la phrase, elle, est au présent : [[읽어요]].' },
    { id: 'w18-ko-bol-yeonghwa', kind: 'phrase', ko: '내일 볼 영화', fr: 'le film que je verrai demain', note: '🎬 [[보다]] : [[본 영화]] · [[보는 영화]] · [[볼 영화]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le tableau à trois colonnes 🗂️' },
        { type: 'tip', text: 'Lundi ⏪ (으)ㄴ, mardi ⏩ (으)ㄹ, et le **는** de la semaine dernière. Aujourd’hui, on range tout dans **un seul tableau**.', mood: 'happy' },
        { type: 'table', head: ['Verbe', '⏪ passé', '📍 présent', '⏩ futur'], rows: VERBS.map(([inf, p, n, f]) => [`[[${inf}]]`, `[[${p}]]`, `[[${n}]]`, `[[${f}]]`]) },
        { type: 'text', text: 'Astuce : écoute la **dernière lettre**. **ㄴ** = c’est fait · **는** = ça se passe · **ㄹ** = ça va venir.' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les cartes tournantes 🔄' },
        { type: 'text', text: 'Méthode de la classe : une carte verbe qu’on **tourne** vers hier, maintenant ou demain. Touche chaque case :' },
        { type: 'timeline', start: 1, points: [
          { label: '어제 ⏪', ko: '어제 간 공원', fr: 'le parc où je suis allé(e) hier' },
          { label: '지금 📍', ko: '지금 가는 공원', fr: 'le parc où je vais maintenant' },
          { label: '내일 ⏩', ko: '내일 갈 공원', fr: 'le parc où j’irai demain' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Tourne la carte [[가다]] : relie chaque moment à sa forme.', pairs: [
      ['어제 ⏪', '간'],
      ['지금 📍', '가는'],
      ['내일 ⏩', '갈'],
    ] } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Complète le tableau. Touche une case vide.', head: ['Verbe', '⏪ passé', '📍 présent', '⏩ futur'], rows: [
      ['[[보다]]', blank('본'), '[[보는]]', blank('볼')],
      ['[[먹다]]', blank('먹은'), blank('먹는'), '[[먹을]]'],
      ['[[하다]]', '[[한]]', blank('하는'), blank('할')],
      ['[[읽다]]', blank('읽은'), blank('읽는'), blank('읽을')],
    ], explain: 'ㄴ / 은 · 는 · ㄹ / 을. Après une consonne, 으 apparaît au passé et au futur ([[읽은]], [[읽을]]) — jamais devant 는.' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '내일 만날 친구', choices: ['내일 만날 친구', '어제 만난 친구', '지금 만나는 친구'], answer: 0, explain: 'Le ㄹ final de [[만날]] : ça va venir.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Deux horloges dans une phrase ⏰' },
        { type: 'text', text: 'Le groupe devant le nom a **sa propre** heure, indépendante du verbe final :' },
        { type: 'breakdown', segments: [
          { ko: '어제 산', role: 'verb', gloss: 'que j’ai acheté hier' },
          { ko: '책', role: 'object', gloss: 'le livre', particle: { ko: '을', key: 'object' } },
          { ko: '지금', role: 'time', gloss: 'maintenant' },
          { ko: '읽어요', role: 'verb', gloss: 'je lis' },
        ], translation: 'Je lis maintenant le livre que j’ai acheté hier.', note: 'L’achat est fini ([[산]], de [[사다]]) ; la lecture, c’est maintenant ([[읽어요]]).' },
        { type: 'table', head: ['Phrase', ''], rows: [
          ['[[내일 먹을 사과를 지금 사요.]]', 'J’achète maintenant la pomme que je mangerai demain.'],
          ['[[지금 읽는 책은 어제 빌린 책이에요.]]', 'Le livre que je lis, c’est celui que j’ai emprunté hier.'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', prompt: 'Phrase modèle 1/3 — 🎬 « Le film que j’ai vu hier était intéressant. »', before: '어제 ', after: ' 영화가 재미있었어요.', choices: ['본', '보는', '볼'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: 'Phrase modèle 2/3 — 📖 « Le livre que je lis maintenant est difficile. »', before: '지금 ', after: ' 책이 어려워요.', choices: ['읽은', '읽는', '읽을'], answer: 1 } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: 'Phrase modèle 3/3 — 🧑‍🤝‍🧑 « L’amie que je verrai demain, c’est Sua. »', before: '내일 ', after: ' 친구가 수아예요.', choices: ['만난', '만나는', '만날'], answer: 2 } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Je lis maintenant le livre que j’ai acheté hier.', tiles: ['어제', '산', '책을', '지금', '읽어요.'], distractors: ['살', '사는'] } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🎬 « le film que je verrai demain »', answer: alts('내일 볼 영화') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Une phrase avec **deux horloges** : un groupe au passé ou au futur + un verbe final à un autre temps. [[쓰세요!]]', placeholder: '내일 먹을 사과를 지금 사요.', mustInclude: [`${PAST_REL_ANY}|${FUT_REL_ANY}`] } },
    { kind: 'practice', exercise: { type: 'read', ko: '어제 간 공원, 지금 가는 학교, 내일 갈 도서관.', fr: 'Le parc où je suis allé(e) hier, l’école où je vais, la bibliothèque où j’irai demain.', prompt: 'Mise en pratique : récite la carte tournante 🔄' } },
  ],
  interleave: [
    { type: 'type', prompt: '📝 « les devoirs que je ferai demain »', answer: alts('내일 할 숙제') },
    { type: 'mcq', prompt: '🧺 [[소풍]] =', choices: ['sortie scolaire', 'devoirs', 'récréation'], answer: 0 },
    { type: 'cloze', before: '어제 ', after: ' 내용을 다시 읽어요.', choices: ['공부한', '공부할'], answer: 0, translation: 'Je relis ce que j’ai étudié hier.' },
    { type: 'mcq', prompt: '« Je préfère lire. »', choices: ['책을 읽는 것을 더 좋아해요.', '책을 읽는 것을 가장 싫어해요.', '책을 읽으면 좋겠어요.'], answer: 0 },
  ],
};

const PANELS: [string, string][] = [
  ['1️⃣ 🏫', '어제 수아하고 도서관에 갔어요. 거북이 이야기를 읽었어요.'],
  ['2️⃣ 😄', '어제 읽은 책이 정말 재미있었어요.'],
  ['3️⃣ 🖍️', '지금은 집에서 그림을 그리고 있어요. 지금 그리는 그림은 거북이예요.'],
  ['4️⃣ 📚', '내일은 도서관에서 새로운 책을 읽을 거예요.'],
];

const day89: Lesson = {
  id: 'm5-w2-d4',
  month: 5,
  week: 2,
  day: 89,
  title: 'Mon histoire en 4 cases',
  summary: 'Raconter avec les trois temps : 어제 읽은 책이 재미있었어요. 내일은 도서관에서 새로운 책을 읽을 거예요. Banque de verbes, récit guidé. Nouveau : 새로운.',
  cards: [
    { id: 'w18-ko-saeroun', kind: 'vocab', ko: '새로운', fr: 'nouveau, nouvelle (devant un nom)', note: '✨ [[새롭다|p:irreg-b]] : ㅂ → 운, comme [[추운]]. [[새로운 친구]] · [[새로운 책]].' },
    { id: 'w18-ko-ilgeun-chaegi', kind: 'phrase', ko: '어제 읽은 책이 재미있었어요', fr: 'Le livre que j’ai lu hier était intéressant.', note: '📖 [[읽은]] [일근] = déjà lu.' },
    { id: 'w18-ko-saeroun-chaegeul', kind: 'phrase', ko: '내일은 도서관에서 새로운 책을 읽을 거예요', fr: 'Demain, je lirai un nouveau livre à la bibliothèque.', note: '📚 [[새로운]] (adjectif, ㅂ → 운) + [[읽을 거예요|p:future]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'L’histoire de Nabi en 4 cases 🖼️' },
        { type: 'tip', text: 'Aujourd’hui, on **raconte** ! Hier, maintenant, demain : une histoire qui voyage dans le temps.', mood: 'happy' },
        { type: 'text', text: 'Activité de la classe : un récit illustré en **4 cases**. Celui de Nabi — repère les groupes devant les noms :' },
        { type: 'table', head: ['Case', '📖'], rows: PANELS.map(([emoji, s]) => [emoji, s.split('. ').map((x) => `[[${x.replace(/\.$/, '')}.]]`).join(' ')]) },
        { type: 'tip', text: 'Mot nouveau : [[새로운|t:nouveau]] — [[새롭다|p:irreg-b]], ㅂ → 운, comme [[추운]] et [[어려운]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque groupe à son moment.', pairs: [
      ['어제 읽은 책', '⏪ passé'],
      ['지금 그리는 그림', '📍 présent'],
      ['내일 읽을 책', '⏩ futur'],
    ] } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Case 3 : que dessine Nabi ?', choices: ['Une tortue.', 'Un lapin.', 'Sua.'], answer: 0, explain: '[[지금 그리는 그림은 거북이예요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Case 4 : que fera Nabi demain ?', choices: ['Lire un nouveau livre à la bibliothèque.', 'Relire le même livre.', 'Dessiner à la maison.'], answer: 0, explain: '[[내일은 도서관에서 새로운 책을 읽을 거예요.]]' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La banque de verbes et la trame 🏦' },
        { type: 'table', head: ['Verbe', '⏪', '📍', '⏩'], rows: [
          ...VERBS.slice(0, 6).map(([inf, p, n, f]) => [`[[${inf}]]`, `[[${p}]]`, `[[${n}]]`, `[[${f}]]`]),
          ['[[그리다]]', '[[그린]]', '[[그리는]]', '[[그릴]]'],
        ] },
        { type: 'table', head: ['Case', 'Trame', 'Exemple'], rows: [
          ['1️⃣', '어제 + lieu + 갔어요', '[[어제 공원에 갔어요.]]'],
          ['2️⃣', '⏪ groupe + 이/가 + avis', '[[어제 본 영화가 재미있었어요.]]'],
          ['3️⃣', '지금 + 고 있어요', '[[지금은 숙제를 하고 있어요.]]'],
          ['4️⃣', '내일 + ⏩ groupe ou 거예요', '[[내일 볼 영화는 한국 영화예요.]]'],
        ] },
        { type: 'tip', text: 'Relie les cases avec [[그리고]], [[그래서]] ou [[하지만]] : ton histoire coulera toute seule.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'order', translation: 'Le livre que j’ai lu hier était intéressant.', tiles: ['어제', '읽은', '책이', '재미있었어요.'], distractors: ['읽는', '읽을'] } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '✨ « un nouveau livre »', before: '', after: ' 책', choices: ['새로운', '새롭은', '새로워요'], answer: 0, explain: '[[새롭다|p:irreg-b]] : ㅂ → 운 → [[새로운]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '📚 « Demain, je lirai un nouveau livre à la bibliothèque. »', answer: alts('내일은 도서관에서 새로운 책을 읽을 거예요', '내일 도서관에서 새로운 책을 읽을 거예요') } },
    { kind: 'practice', exercise: { type: 'listen', audio: '지금 그리는 그림은 거북이예요', choices: ['지금 그리는 그림은 거북이예요', '어제 그린 그림은 거북이예요', '내일 그릴 그림은 거북이예요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ton histoire 1/2 — cases 1 et 2 : hier. Utilise un groupe au **passé** ⏪. [[쓰세요!]]', placeholder: '어제 친구하고 공원에 갔어요. 어제 먹은 사과가 맛있었어요.', mustInclude: ['어제', PAST_REL_ANY] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ton histoire 2/2 — cases 3 et 4 : maintenant et demain. Utilise un groupe au **futur** ⏩.', placeholder: '지금은 집에서 쉬고 있어요. 내일 볼 영화가 있어요!', mustInclude: ['내일', FUT_REL_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '어제 읽은 책이 재미있었어요. 내일은 도서관에서 새로운 책을 읽을 거예요.', fr: 'Le livre que j’ai lu hier était intéressant. Demain, je lirai un nouveau livre à la bibliothèque.', prompt: 'Mise en pratique : raconte à voix haute 📖' } },
  ],
  interleave: [
    { type: 'type', prompt: '[[가다]] : passé · présent · futur (sépare par des espaces)', answer: alts('간, 가는, 갈') },
    { type: 'cloze', before: '어제 ', after: ' 책을 지금 읽어요.', choices: ['산', '살'], answer: 0, translation: 'Je lis maintenant le livre que j’ai acheté hier.' },
    { type: 'mcq', prompt: '[[어렵다]] + [[숙제]] →', choices: ['어려운 숙제', '어렵은 숙제', '어렵는 숙제'], answer: 0 },
    { type: 'type', prompt: '🧺 « les affaires à emporter »', answer: alts('가져갈 물건') },
  ],
};

const DICTATION = [
  '어제 만난 친구가 지훈이에요',
  '어제 읽은 책이 재미있었어요',
  '내일 할 숙제가 있어요',
  '내일 먹을 사과를 가져갈 거예요',
  '어제 산 책을 지금 읽어요',
];

const day90: Lesson = {
  id: 'm5-w2-d5',
  month: 5,
  week: 2,
  day: 90,
  title: 'Bilan & Petite évaluation n°18',
  summary: 'Le tri des cartes temporelles, la dictée de la classe, la petite évaluation n°18 (passé · présent · futur, oral) et une histoire entièrement en coréen.',
  cards: [],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Fin de la semaine 18 🎓' },
        { type: 'tip', text: '[[어제 먹은 밥]], [[지금 먹는 밥]], [[내일 먹을 밥]]… Tu sais maintenant placer un nom dans le temps ! D’abord, le **tri des cartes**.', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Range les cartes : action finie ou à venir ?', buckets: ['⏪ passé', '⏩ futur'], items: [
      { text: '어제 본 영화', bucket: 0 }, { text: '어제 공부한 내용', bucket: 0 }, { text: '지난 주말에 간 공원', bucket: 0 }, { text: '어제 먹은 김치', bucket: 0 },
      { text: '내일 할 숙제', bucket: 1 }, { text: '소풍에 가져갈 물건', bucket: 1 }, { text: '내일 만날 친구', bucket: 1 }, { text: '내일 읽을 책', bucket: 1 },
    ], explain: '⏪ ㄴ / 은 : [[본]], [[공부한]], [[간]], [[먹은]]. ⏩ ㄹ / 을 : [[할]], [[가져갈]], [[만날]], [[읽을]].' } },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Et avec le présent : relie chaque carte à son moment.', pairs: [
      ['음악을 들은 친구', '⏪ passé'],
      ['음악을 듣는 친구', '📍 présent'],
      ['음악을 들을 친구', '⏩ futur'],
    ] } },
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
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Grammaire de la classe : mets le verbe à la bonne forme selon le moment. Touche une case vide.', head: ['Quand ?', 'Verbe', 'Nom', '🏷️ Groupe'], rows: [
      ['[[어제]]', '[[먹다]]', '[[밥]]', blank('먹은 밥')],
      ['[[지금]]', '[[읽다]]', '[[책]]', blank('읽는 책')],
      ['[[내일]]', '[[하다]]', '[[숙제]]', blank('할 숙제')],
      ['[[어제]]', '[[만나다]]', '[[친구]]', blank('만난 친구')],
      ['[[내일]]', '[[가다]]', '[[공원]]', blank('갈 공원')],
    ] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Petite évaluation n°18' },
        { type: 'text', text: 'Trois parties, sans piège ni chrono. Chaque erreur reviendra simplement en révision.' },
        { type: 'table', head: ['Partie', 'Contenu'], rows: [
          ['A', 'Choix de la forme temporelle'],
          ['B', 'Relier au bon moment'],
          ['C', 'Expression orale'],
        ] },
        { type: 'tip', text: '**A — La bonne forme.** Complète avec [[보다]] (regarder).', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '**A · 1/3** — ⏪', before: '어제 ', after: ' 영화', choices: ['본', '보는', '볼'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '**A · 2/3** — 📍', before: '지금 ', after: ' 영화', choices: ['본', '보는', '볼'], answer: 1 } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '**A · 3/3** — ⏩', before: '내일 ', after: ' 영화', choices: ['본', '보는', '볼'], answer: 2 } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**B — Le bon moment.** Relie chaque groupe à son repère temporel.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'match', prompt: '**B** — Passé ou futur ?', pairs: [
      ['제가 어제 먹은 사과', 'Passé (hier)'],
      ['제가 내일 할 운동', 'Futur (demain)'],
      ['제가 지금 읽는 책', 'Présent (maintenant)'],
    ] } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**C — À l’oral.** Le professeur montre un plat et demande [[이게 뭐예요?]] Réponds en le plaçant dans le temps.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 1/3** — 🍚 (le riz d’hier soir) [[이게 뭐예요?]]', audio: '이게 뭐예요?', choices: ['어제 먹은 밥이에요.', '어제 먹을 밥이에요.', '어제 먹는 밥이에요.'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'write', prompt: '**C · 2/3** — 🍱 (le repas de demain) [[이게 뭐예요?]] Prépare ta réponse.', placeholder: '내일 먹을 음식이에요.', mustInclude: ['먹을'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '이게 뭐예요? 내일 먹을 음식이에요. 이건요? 어제 먹은 밥이에요.', fr: 'Qu’est-ce que c’est ? C’est le plat que je mangerai demain. Et ça ? C’est le riz que j’ai mangé hier.', prompt: '**C · 3/3** — Dis-le à voix haute, puis écoute le modèle.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le lendemain de la sortie 📖' },
        { type: 'text', text: 'Une histoire **entièrement en coréen**. Touche une bulle pour l’entendre.' },
        { type: 'dialog', lines: [
          { who: '📖', ko: '금요일 아침이에요. 어제 아이들은 공원에 소풍을 갔어요.' },
          { who: '선생님', ko: '여러분, 어제 간 소풍이 어땠어요?' },
          { who: '수아', ko: '정말 재미있었어요! 공원에서 먹은 사과가 정말 맛있었어요.' },
          { who: '지훈', ko: '저는 민수하고 축구를 했어요. 같이 축구한 친구들이 모두 웃었어요!' },
          { who: '민수', ko: '그런데 저는 우산을 안 가져갔어요. 그리고 오후에 비가 왔어요… 😢' },
          { who: '나비', ko: '제가 가져간 우산이 컸어요. 그래서 민수하고 같이 썼어요!' },
          { who: '선생님', ko: '나비는 정말 착해요! 그럼 다음 주에 갈 곳은… 도서관이에요!' },
          { who: '수아', ko: '와! 도서관에서 새로운 책을 읽을 거예요!' },
          { who: '나비', ko: '어제 간 소풍도, 다음 주에 갈 도서관도 정말 좋아요! 🦋' },
        ] },
        { type: 'tip', text: 'Petits mots : [[여러분|t:tout le monde (vous tous)]] · [[모두|t:tous]] · [[그런데|t:mais, or]] · [[곳|t:endroit]] · [[이건요?|t:et ça ?]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’est-ce que Sua a trouvé délicieux ?', choices: ['La pomme mangée au parc.', 'Le kimchi.', 'Le repas de la cantine.'], answer: 0, explain: '[[공원에서 먹은 사과가 정말 맛있었어요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Comment Minsu s’est-il abrité de la pluie ?', choices: ['Sous le grand parapluie de Nabi.', 'Avec son propre parapluie.', 'Il est rentré à la maison.'], answer: 0, explain: '[[제가 가져간 우산이 컸어요. 그래서 민수하고 같이 썼어요!]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Où la classe ira-t-elle la semaine prochaine ?', choices: ['À la bibliothèque.', 'Au parc.', 'À la cantine.'], answer: 0, explain: '[[다음 주에 갈 곳은… 도서관이에요!]]' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ton bilan de la semaine 18 🎓' },
        { type: 'table', head: ['Je sais…', 'Exemple'], rows: [
          ['⏪ qualifier un nom par une action [[finie|p:rel-past]]', '[[어제 만난 친구]] · [[어제 공부한 내용]]'],
          ['⏩ qualifier un nom par une action [[à venir|p:rel-future]]', '[[내일 할 숙제]] · [[소풍에 가져갈 물건]]'],
          ['🗂️ tourner un verbe aux trois temps', '[[간]] · [[가는]] · [[갈]]'],
          ['⏰ mettre deux horloges dans une phrase', '[[어제 산 책을 지금 읽어요.]]'],
          ['🖼️ raconter une histoire en 4 cases', '[[어제 읽은 책이 재미있었어요.]]'],
        ] },
        { type: 'tip', text: '[[다음 주에 배울 내용도 재미있을 거예요!|t:ce qu’on apprendra la semaine prochaine sera intéressant aussi !]] 🦋 À lundi !', mood: 'happy' },
      ],
    },
  ],
};

export const m5w2: Lesson[] = [day86, day87, day88, day89, day90];
