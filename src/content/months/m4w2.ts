import type { GridBlank, Lesson } from '../types';

const COLLAPSE: [RegExp, string][] = [
  [/(어|아|워|해|가|와|셔) (봤|보)/g, '$1$2'],
  [/려고 해/g, '려고해'],
  [/ 거예요/g, '거예요'],
  [/면 좋겠/g, '면좋겠'],
  [/한 번/g, '한번'],
  [/안 /g, '안'],
];
const alts = (...xs: string[]): string[] => {
  const out = new Set(xs);
  for (const [re, to] of COLLAPSE) for (const s of [...out]) out.add(s.replace(re, to));
  for (const s of [...out]) out.add(s.replace(/[.,!?] /g, ' '));
  for (const s of [...out]) out.add(s.replace(/[.!?]$/, ''));
  return [...out];
};
const blank = (s: string): GridBlank => ({ answer: alts(s) });

const TRIED_ANY = '봤어요';
const TRY_ANY = '보세요';
const INTEND_ANY = '려고';

const BINGO: [string, string][] = [
  ['🥬', '김치를 먹어 봤어요'],
  ['👘', '한복을 입어 봤어요'],
  ['🗼', '남산에 가 봤어요'],
  ['🏙️', '서울에 가 봤어요'],
  ['🍲', '한국 음식을 먹어 봤어요'],
  ['🎵', '한국 음악을 들어 봤어요'],
];

const day66: Lesson = {
  id: 'm4-w2-d1',
  month: 4,
  week: 2,
  day: 66,
  title: 'J’ai déjà essayé : -아/어 봤어요',
  summary: 'Raconter ses expériences : 김치를 먹어 봤어요. Présent sans 요 + 봤어요 ; « pas encore » = 아직 안… Nouveaux : 김치, 한복, 음식, 서울.',
  cards: [
    { id: 'm5-ko-meogeo-bwasseoyo', kind: 'grammar', ko: '가 봤어요 · 먹어 봤어요', fr: 'je suis déjà allé · j’ai déjà mangé (goûté) — présent sans 요 + 봤어요', note: '🧪 [[가요]] → [[가 봤어요]] · [[먹어요]] → [[먹어 봤어요]] · [[해요]] → [[해 봤어요]]. Même truc que [[아파서|p:cause]] et [[말해 주세요|p:request]]. Règle : [[essayer|p:try]]' },
    { id: 'm5-ko-gimchireul-meogeo-bwasseoyo', kind: 'phrase', ko: '김치를 먹어 봤어요', fr: 'J’ai déjà goûté le kimchi.', note: '🥬 Prononcé [머거 봐써요]. En question : [[김치를 먹어 봤어요?]]' },
    { id: 'm5-ko-gimchi', kind: 'vocab', ko: '김치', fr: 'kimchi (chou fermenté et pimenté)', note: '🥬 [[김치가 맛있어요!]]' },
    { id: 'm5-ko-hanbok', kind: 'vocab', ko: '한복', fr: 'hanbok (habit traditionnel coréen)', note: '👘 [[한복을 입어 봤어요.]] Le [[한]] de [[한국]] !' },
    { id: 'm5-ko-eumsik', kind: 'vocab', ko: '음식', fr: 'nourriture, plat, cuisine', note: '🍲 [[한국 음식]] = la cuisine coréenne. [[한국 음식을 먹어 봤어요?]]' },
    { id: 'm5-ko-seoul', kind: 'vocab', ko: '서울', fr: 'Séoul', note: '🏙️ [[서울에 가 봤어요?]] Au centre de Séoul : [[남산|t:la colline Namsan]].' },
    { id: 'm5-ko-ajik-an', kind: 'phrase', ko: '아직 안 먹어 봤어요', fr: 'Je n’ai pas encore goûté.', note: '⏳ [[아직|t:pas encore]] + [[안|p:neg]] + verbe. [[아니요, 아직 안 가 봤어요.]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Je l’ai déjà essayé ! 🧪' },
        { type: 'tip', text: 'Nouvelle semaine ! Aujourd’hui, tu vas raconter ce que tu as **déjà essayé** dans ta vie.', mood: 'happy' },
        { type: 'text', text: 'Tu connais [[봐요]] (regarder, voir). Collé derrière un autre verbe, [[보다]] veut dire « **essayer pour voir** » — comme en français « goûte **voir** ! ». Au passé, [[봤어요]] = « j’ai **déjà** essayé, je connais ça ».' },
        { type: 'breakdown', segments: [
          { ko: '김치', role: 'object', gloss: 'le kimchi', particle: { ko: '를', key: 'object' } },
          { ko: '먹어', role: 'verb', gloss: 'manger' },
          { ko: '봤어요', role: 'verb', gloss: 'j’ai essayé' },
        ], translation: 'J’ai déjà goûté le kimchi.', note: 'Deux mots nouveaux : [[김치|t:kimchi]] 🥬 et, bientôt, [[한복|t:habit traditionnel]] 👘.' },
        { type: 'tip', text: 'Quelle différence ? [[먹었어요|p:past]] = j’ai mangé (un fait, hier, ce matin). [[먹어 봤어요]] = j’ai **déjà goûté**, je connais l’expérience.', mood: 'thinking' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La règle : présent − 요 + 봤어요 🔍' },
        { type: 'table', head: ['Infinitif', 'Présent', 'Déjà essayé'], rows: [
          ['[[가다]]', '[[가요]]', '[[가 봤어요]]'],
          ['[[먹다]]', '[[먹어요]]', '[[먹어 봤어요]]'],
          ['[[입다]]', '[[입어요]]', '[[입어 봤어요]]'],
          ['[[하다|p:hada]]', '[[해요]]', '[[해 봤어요]]'],
          ['[[마시다]]', '[[마셔요]]', '[[마셔 봤어요]]'],
          ['[[듣다|p:irreg-d]]', '[[들어요]]', '[[들어 봤어요]]'],
        ] },
        { type: 'text', text: 'Bonne nouvelle : c’est **le même truc** que [[아파서|p:cause]], [[가도 돼요|p:rules]] et [[말해 주세요|p:request]] : le présent sans [[요]], puis le petit mot. Les irréguliers sont déjà faits !' },
        { type: 'liaison', items: [
          { written: '먹어 봤어요', spoken: '머거 봐써요', fr: 'j’ai déjà goûté' },
          { written: '입어 봤어요', spoken: '이버 봐써요', fr: 'je l’ai déjà porté' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[가다]] → « j’y suis déjà allé » :', choices: ['가 봤어요', '가면 봤어요', '갈 봤어요'], answer: 0, explain: '[[가요]] − [[요]] + [[봤어요]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[먹다]] → « j’ai déjà goûté » :', answer: alts('먹어 봤어요') } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Du présent à l’expérience. Touche une case vide.', head: ['Présent', '🧪 Déjà essayé'], rows: [
      ['[[읽어요]]', blank('읽어 봤어요')],
      ['[[마셔요]]', blank('마셔 봤어요')],
      ['[[해요]]', blank('해 봤어요')],
    ], explain: 'On garde le présent sans [[요]] : [[읽어]] · [[마셔]] · [[해]] + [[봤어요]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le bingo des expériences 🎲' },
        { type: 'text', text: 'Activité de la classe : chacun reçoit une grille d’images. Deux mots nouveaux : [[음식|t:la nourriture, un plat]] et [[서울|t:Séoul]].' },
        { type: 'table', head: ['', 'Expérience'], rows: BINGO.map(([emoji, s]) => [emoji, `[[${s}]]`]) },
        { type: 'text', text: 'On se pose la question… et on répond. Pour « **pas encore** » : [[아직|t:pas encore]] + [[안|p:neg]].' },
        { type: 'dialog', lines: [
          { who: '❓', ko: '김치를 먹어 봤어요?', fr: 'As-tu déjà goûté le kimchi ?' },
          { who: '✅', ko: '네, 먹어 봤어요!', fr: 'Oui, j’en ai déjà goûté !' },
          { who: '⏳', ko: '아니요, 아직 안 먹어 봤어요.', fr: 'Non, pas encore.' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Coche ta grille : relie chaque image à son expérience.', pairs: BINGO.slice(0, 4).map(([emoji, s]) => [emoji, s] as [string, string]) } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '👘 [[한복을 입어 봤어요?]] — Non, pas encore.', before: '아니요, 아직 안 ', after: '.', choices: ['입어 봤어요', '입으면', '입어 주세요'], answer: 0, translation: 'Non, je ne l’ai pas encore porté.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La partie de bingo 🎲' },
        { type: 'text', text: 'Sua interroge Nabi. **Tout en coréen** :' },
        { type: 'dialog', lines: [
          { who: '수아', ko: '나비, 한국에서 뭐 해 봤어요?' },
          { who: '나비', ko: '김치를 먹어 봤어요. 맛있어요!' },
          { who: '수아', ko: '한복도 입어 봤어요?' },
          { who: '나비', ko: '아니요, 아직 안 입어 봤어요.' },
          { who: '수아', ko: '서울에 가 봤어요?' },
          { who: '나비', ko: '네, 지난 주말에 가 봤어요! 하지만 남산에 아직 안 가 봤어요.' },
          { who: '수아', ko: '한국 음악을 들어 봤어요?' },
          { who: '나비', ko: '네, 들어 봤어요. 그리고 노래해 봤어요! 🎤' },
          { who: '수아', ko: '빙고! 🎉' },
        ] },
        { type: 'tip', text: 'Petit mot : [[한복도|t:le hanbok aussi]] — [[도]] = aussi, comme dans [[저도]] (moi aussi).', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Coche la grille de Nabi.', buckets: ['✅ 해 봤어요', '⏳ 아직 안 해 봤어요'], items: [
      { text: '🥬 goûter le kimchi', bucket: 0 },
      { text: '🏙️ aller à Séoul', bucket: 0 },
      { text: '🎵 écouter de la musique coréenne', bucket: 0 },
      { text: '👘 porter un hanbok', bucket: 1 },
      { text: '🗼 aller à Namsan', bucket: 1 },
    ], explain: '[[아직 안 입어 봤어요.]] · [[남산에 아직 안 가 봤어요.]]' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'As-tu déjà goûté la cuisine coréenne ?', tiles: ['한국', '음식을', '먹어', '봤어요?'], distractors: ['먹으면', '봐요?'] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '한복을 입어 봤어요', choices: ['한복을 입어 봤어요', '한복을 입었어요', '한복을 입어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🥬 « J’ai déjà goûté le kimchi. »', answer: alts('김치를 먹어 봤어요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ta case de bingo : écris une chose que tu as **déjà essayée**. [[쓰세요!]]', placeholder: '한국 음악을 들어 봤어요', mustInclude: [TRIED_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '김치를 먹어 봤어요.', fr: 'J’ai déjà goûté le kimchi.', prompt: 'Mise en pratique : dis-le à voix haute 🥬' } },
  ],
  interleave: [
    { type: 'type', prompt: '[[먹다]] → « si je mange » :', answer: '먹으면' },
    { type: 'cloze', before: '빨리 방학이 ', after: '!', choices: ['오면 좋겠어요', '와서 좋겠어요'], answer: 0, translation: 'J’aimerais que les vacances arrivent vite !' },
    { type: 'mcq', prompt: '📕 « Si vous avez fini, fermez le livre. »', choices: ['다 했으면 책을 덮으세요.', '다 하면서 책을 덮으세요.', '다 해서 책을 펴세요.'], answer: 0 },
    { type: 'type', prompt: '[[읽다]] → « je suis en train de lire » :', answer: alts('읽고 있어요', '읽고있어요') },
  ],
};

const GUIDES: [string, string, string][] = [
  ['📚', '이 책을 읽어 보세요', '재미있어요!'],
  ['🎮', '이 게임을 해 보세요', '쉬워요!'],
  ['🥬', '김치를 먹어 보세요', '맛있어요!'],
  ['🥋', '태권도를 배워 보세요', '어렵지만 재미있어요!'],
  ['👘', '이 한복을 입어 보세요', '정말 좋아요!'],
];

const day67: Lesson = {
  id: 'm4-w2-d2',
  month: 4,
  week: 2,
  day: 67,
  title: 'Essaie ! : -아/어 보세요',
  summary: 'Recommander : 이 책을 읽어 보세요 · 이 게임을 해 보세요. ≠ 보세요 (regardez), ≠ 해 주세요. Nouveaux : 이 (ce…), 게임, 배워요, 태권도, 정말.',
  cards: [
    { id: 'm5-ko-hae-boseyo', kind: 'grammar', ko: '해 보세요 · 먹어 보세요', fr: 'essayez (de faire) · goûtez (pour voir) — présent sans 요 + 보세요', note: '💡 Pour recommander. ≠ [[보세요]] tout seul (regardez). [[해 주세요|p:request]] = faites-le **pour moi** · [[해 보세요]] = **essayez**. Règle : [[essayer|p:try]]' },
    { id: 'm5-ko-i-chaegeul-ilgeo-boseyo', kind: 'phrase', ko: '이 책을 읽어 보세요', fr: 'Essayez de lire ce livre (vous verrez).', note: '📚 [[읽어요]] → [[읽어 보세요]], prononcé [일거 보세요]. [[정말 재미있어요!]]' },
    { id: 'm5-ko-i-geimeul-hae-boseyo', kind: 'phrase', ko: '이 게임을 해 보세요', fr: 'Essaie ce jeu !', note: '🎮 [[해요]] → [[해 보세요]]. [[쉬워요!]]' },
    { id: 'm5-ko-i-chaek', kind: 'vocab', ko: '이 책', fr: 'ce livre — 이 + nom = ce…, cette…', note: '👉 [[이 게임]], [[이 음식]], [[이 한복]]. Comme dans [[이게 뭐예요?]] ≠ la particule [[이|p:subject]].' },
    { id: 'm5-ko-geim', kind: 'vocab', ko: '게임', fr: 'jeu (vidéo, de société)', note: '🎮 [[게임을 해요.]]' },
    { id: 'm5-ko-baewoyo', kind: 'vocab', ko: '배워요', fr: 'j’apprends (배우다)', note: '🎓 [[배우]] + [[어요]] → [[배워요]] (우 + 어 = 워). [[한국어를 배워요.]] Le contraire : [[가르쳐요|t:j’enseigne]].' },
    { id: 'm5-ko-taegwondo', kind: 'vocab', ko: '태권도', fr: 'taekwondo', note: '🥋 [[태권도를 배워 보세요!]]' },
    { id: 'm5-ko-jeongmal', kind: 'vocab', ko: '정말', fr: 'vraiment', note: '😍 [[정말 맛있어요!]] · [[정말요?|t:c’est vrai ?]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Essaie, tu verras ! 💡' },
        { type: 'tip', text: '[[김치를 먹어 봤어요?]] Hier, tu racontais **tes** expériences. Aujourd’hui, tu vas en **recommander** aux autres.', mood: 'happy' },
        { type: 'text', text: 'Remplace [[봤어요]] par [[보세요|p:seyo]] : « **essayez**…, faites-le, vous verrez ». Un mot nouveau : [[이|t:ce, cette]] devant un nom.' },
        { type: 'breakdown', segments: [
          { ko: '이 책', role: 'object', gloss: 'ce livre', particle: { ko: '을', key: 'object' } },
          { ko: '읽어', role: 'verb', gloss: 'lire' },
          { ko: '보세요', role: 'verb', gloss: 'essayez' },
        ], translation: 'Essayez de lire ce livre.' },
        { type: 'table', head: ['🧪 Je l’ai fait', '', '💡 Essaie !'], rows: [
          ['[[먹어 봤어요]]', '➜', '[[먹어 보세요]]'],
          ['[[가 봤어요]]', '➜', '[[가 보세요]]'],
          ['[[해 봤어요]]', '➜', '[[해 보세요]]'],
        ] },
        { type: 'tip', text: 'Attention aux faux jumeaux ! [[보세요]] seul = **regardez** · [[먹어 보세요]] = **goûtez** · [[해 주세요|p:request]] = faites-le **pour moi** · [[해 보세요]] = **essayez**.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🥬 « **Goûtez**, vous verrez ! »', choices: ['먹어 보세요!', '먹어 주세요!', '보세요!'], answer: 0, explain: '[[먹어]] + [[보세요]]. [[먹어 주세요]] = mangez-le pour moi ; [[보세요]] = regardez.' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[해 봤어요]] → « essayez ! » :', answer: alts('해 보세요') } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '📚 « Essaie de lire ce livre. »', before: '이 책을 ', after: '.', choices: ['읽어 보세요', '읽어 주세요', '읽어 봤어요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les mini-guides 📚' },
        { type: 'text', text: 'Activité de la classe : chacun écrit un **mini-guide** pour ses camarades — un livre, un jeu, un plat… et une raison. Mots nouveaux : [[게임|t:jeu]], [[배워요|t:j’apprends]], [[태권도|t:taekwondo]], [[정말|t:vraiment]].' },
        { type: 'table', head: ['', 'Je te recommande…', 'Pourquoi ?'], rows: GUIDES.map(([emoji, rec, why]) => [emoji, `[[${rec}.]]`, `[[${why}]]`]) },
        { type: 'liaison', items: [
          { written: '읽어 보세요', spoken: '일거 보세요', fr: 'essaie de lire' },
          { written: '입어 보세요', spoken: '이버 보세요', fr: 'essaie (ce vêtement)' },
        ] },
        { type: 'tip', text: '[[배우다]] → [[배워요]] : 우 + 어 se contractent en **워**. [[한국어를 배워요]] = j’apprends le coréen.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Carte + geste : relie chaque image à sa recommandation.', pairs: GUIDES.slice(0, 4).map(([emoji, rec]) => [emoji, rec] as [string, string]) } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[배우다]] → « essaie d’apprendre ! » :', answer: alts('배워 보세요') } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Essaie ce jeu !', tiles: ['이', '게임을', '해', '보세요!'], distractors: ['주세요!', '봐요!'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Dans la cour 🏫' },
        { type: 'text', text: 'Les amis recommandent des choses à Nabi. **Tout en coréen** :' },
        { type: 'dialog', lines: [
          { who: '지훈', ko: '나비, 이 게임을 해 봤어요?' },
          { who: '나비', ko: '아니요, 아직 안 해 봤어요.' },
          { who: '지훈', ko: '해 보세요! 정말 재미있어요.' },
          { who: '나비', ko: '어려워요?' },
          { who: '지훈', ko: '아니요, 쉬워요. 같이 할까요?' },
          { who: '수아', ko: '나비, 이 책도 읽어 보세요. 한국 이야기예요.' },
          { who: '나비', ko: '좋아요! 주말에 읽을 거예요.' },
          { who: '민수', ko: '저는 태권도를 배워요. 나비도 배워 보세요!' },
          { who: '나비', ko: '태권도요? 어려워요?' },
          { who: '민수', ko: '조금 어렵지만 정말 재미있어요!' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi Jihoon recommande-t-il son jeu ?', choices: ['Il est vraiment amusant, et facile.', 'Il est difficile.', 'Il est coréen.'], answer: 0, explain: '[[정말 재미있어요.]] … [[쉬워요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’est-ce que Minsu recommande à Nabi ?', choices: ['D’apprendre le taekwondo.', 'De lire un livre coréen.', 'De goûter le kimchi.'], answer: 0, explain: '[[나비도 배워 보세요!]]' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '이 책을 읽어 보세요', choices: ['이 책을 읽어 보세요', '이 책을 읽어 주세요', '이 책을 읽어 봤어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🎮 « Essaie ce jeu ! »', answer: alts('이 게임을 해 보세요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ton mini-guide : recommande quelque chose avec **보세요**, puis donne une raison. [[쓰세요!]]', placeholder: '이 책을 읽어 보세요. 정말 재미있어요!', mustInclude: [TRY_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '이 게임을 해 보세요. 정말 재미있어요!', fr: 'Essaie ce jeu. Il est vraiment amusant !', prompt: 'Mise en pratique : recommande ce jeu à ton voisin, à voix haute 🎮' } },
  ],
  interleave: [
    { type: 'type', prompt: '[[입다]] → « je l’ai déjà porté » :', answer: alts('입어 봤어요') },
    { type: 'mcq', prompt: '[[아직 안 가 봤어요.]] →', choices: ['Je n’y suis pas encore allé.', 'J’y suis déjà allé.', 'Je n’irai pas.'], answer: 0 },
    { type: 'cloze', before: '시간이 ', after: ' 책을 읽어요.', choices: ['있으면', '있면'], answer: 0, translation: 'Si j’ai du temps, je lis un livre.' },
    { type: 'type', prompt: '[[말해요]] → « parlez, s’il vous plaît (pour moi) » :', answer: alts('말해 주세요', '말해주세요') },
  ],
};

const PLAN: [number, string, string][] = [
  [2, '두 시에', '숙제를 하려고 해요'],
  [3, '세 시에', '도서관에서 책을 읽으려고 해요'],
  [4, '네 시에', '친구를 만나려고 해요'],
  [5, '다섯 시에', '운동장에서 축구를 하려고 해요'],
];

const day68: Lesson = {
  id: 'm4-w2-d3',
  month: 4,
  week: 2,
  day: 68,
  title: 'J’ai l’intention de… : -(으)려고 해요',
  summary: 'Annoncer une décision : 오늘 도서관에서 책을 읽으려고 해요. Voyelle → 려고 해요, consonne → 으려고 해요. Futur ou intention ? Nouveaux : 오후, 계획.',
  cards: [
    { id: 'm5-ko-garyeogo-haeyo', kind: 'grammar', ko: '가려고 해요 · 읽으려고 해요', fr: 'j’ai l’intention d’aller · de lire — voyelle → 려고 해요, consonne → 으려고 해요', note: '🎯 Même famille que [[면|p:if]] : [[놀려고 해요]] (ㄹ), [[들으려고 해요]] ([[ㄷ|p:irreg-d]]). Règle : [[intention|p:intend]]' },
    { id: 'm5-ko-chaegeul-ilgeuryeogo', kind: 'phrase', ko: '오늘 도서관에서 책을 읽으려고 해요', fr: 'Aujourd’hui, j’ai l’intention de lire un livre à la bibliothèque.', note: '📚 [[읽]] + [[으려고 해요]], prononcé [일그려고].' },
    { id: 'm5-ko-mwo-haryeogo', kind: 'phrase', ko: '뭐 하려고 해요?', fr: 'Qu’as-tu l’intention de faire ?', note: '🗓️ [[오늘 오후에 뭐 하려고 해요?]]' },
    { id: 'm5-ko-ohu', kind: 'vocab', ko: '오후', fr: 'après-midi', note: '🌇 [[오후 세 시]] = 15 h. Et aussi : [[아침]] · [[점심]] · [[저녁]].' },
    { id: 'm5-ko-gyehoek', kind: 'vocab', ko: '계획', fr: 'plan, programme, projet', note: '🗓️ [[주말 계획]] = le programme du week-end. Prononcé [게획].' },
    { id: 'm5-ko-geoyeyo-vs-ryeogo', kind: 'grammar', ko: '공부할 거예요 · 공부하려고 해요', fr: 'je vais étudier · j’ai l’intention (j’ai décidé) d’étudier', note: '🔮 [[거예요|p:future]] = ce qui va se passer (aussi la météo : [[내일 비가 올 거예요]]). 🎯 [[려고 해요|p:intend]] = ma décision. Jamais [[려고]] pour la météo !' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'J’ai décidé ! 🎯' },
        { type: 'tip', text: '[[이 책을 읽어 보세요!]] Hier, tu recommandais. Aujourd’hui, tu annonces ce que **tu as l’intention** de faire.', mood: 'happy' },
        { type: 'text', text: '« J’ai l’intention de…, je compte… » : on colle **(으)려고 해요** au radical.' },
        { type: 'breakdown', segments: [
          { ko: '오늘', role: 'time', gloss: 'aujourd’hui' },
          { ko: '도서관', role: 'place', gloss: 'à la bibliothèque', particle: { ko: '에서', key: 'action' } },
          { ko: '책', role: 'object', gloss: 'un livre', particle: { ko: '을', key: 'object' } },
          { ko: '읽으려고 해요', role: 'verb', gloss: 'j’ai l’intention de lire' },
        ], translation: 'Aujourd’hui, j’ai l’intention de lire un livre à la bibliothèque.' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La règle : la famille de 면 🔍' },
        { type: 'table', head: ['Infinitif', 'Si…', '🎯 J’ai l’intention de…'], rows: [
          ['[[가다]]', '[[가면]]', '[[가려고 해요]]'],
          ['[[공부하다|p:hada]]', '[[공부하면]]', '[[공부하려고 해요]]'],
          ['[[먹다]]', '[[먹으면]]', '[[먹으려고 해요]]'],
          ['[[놀다]] (ㄹ)', '[[놀면]]', '[[놀려고 해요]]'],
          ['[[듣다|p:irreg-d]]', '[[들으면]]', '[[들으려고 해요]]'],
        ] },
        { type: 'text', text: 'Exactement les règles de [[면|p:if]] : si tu sais dire « si… », tu sais dire « j’ai l’intention de… » — remplace **면** par **려고 해요**.' },
        { type: 'liaison', items: [
          { written: '읽으려고', spoken: '일그려고', fr: 'pour lire' },
          { written: '먹으려고', spoken: '머그려고', fr: 'pour manger' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'sort', prompt: '🟢 려고 ou 🟤 으려고 ?', buckets: ['🟢 려고 해요', '🟤 으려고 해요'], items: [
      { text: '보다', bucket: 0 }, { text: '만나다', bucket: 0 }, { text: '공부하다', bucket: 0 }, { text: '놀다', bucket: 0 },
      { text: '먹다', bucket: 1 }, { text: '읽다', bucket: 1 }, { text: '입다', bucket: 1 }, { text: '앉다', bucket: 1 },
    ], explain: '[[보려고]] · [[만나려고]] · [[공부하려고]] · [[놀려고]] (ㄹ : pas de 으). [[먹으려고]] · [[읽으려고]] · [[입으려고]] · [[앉으려고]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[만나다]] → « j’ai l’intention de voir (quelqu’un) » :', answer: alts('만나려고 해요') } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[듣다]] → « j’ai l’intention d’écouter » :', answer: alts('들으려고 해요'), explain: '[[듣다|p:irreg-d]] : devant une voyelle, ㄷ → ㄹ, comme [[들으면]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Futur ou intention ? 🔮🎯' },
        { type: 'table', head: ['', '', ''], rows: [
          ['🔮', '[[주말에 영화를 볼 거예요.]]', 'Ce week-end, je **vais** voir un film. (ce qui va se passer)'],
          ['🎯', '[[주말에 영화를 보려고 해요.]]', 'Ce week-end, **j’ai l’intention** de voir un film. (ma décision)'],
        ] },
        { type: 'text', text: 'Souvent, les deux vont. Mais [[려고 해요|p:intend]] parle d’une **volonté** : on ne l’utilise pas pour la **météo**. [[내일 비가 올 거예요.|t:il va pleuvoir demain]] ✅ — avec [[거예요|p:future]] seulement.' },
        { type: 'tip', text: 'Au passé, [[공부하려고 했어요]] = « je **comptais** étudier… » (mais quelque chose est arrivé !). [[숙제를 하려고 했어요. 그런데 친구가 왔어요.]]', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🌧️ « Il va pleuvoir demain. »', choices: ['내일 비가 올 거예요.', '내일 비가 오려고 해요.', '내일 비가 와 봤어요.'], answer: 0, explain: 'La météo n’a pas d’intention : [[올 거예요|p:future]].' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🎯 « J’ai décidé de faire mes devoirs maintenant. »', choices: ['지금 숙제를 하려고 해요.', '지금 숙제를 해 봤어요.', '지금 숙제를 하면 좋겠어요.'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Mon tableau de l’après-midi 🗓️' },
        { type: 'text', text: 'Activité de la classe : chacun remplit son **tableau de planification** avec des pictogrammes. Deux mots nouveaux : [[오후|t:l’après-midi]] et [[계획|t:le programme]]. Le [[계획]] de Nabi :' },
        { type: 'table', head: ['🕑', 'Nabi, cet après-midi'], rows: PLAN.map(([, time, plan]) => [`[[${time}]]`, `[[${plan}.]]`]) },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Recopie le tableau de Nabi.', pairs: PLAN.map(([, time, plan]) => [time, plan] as [string, string]) } },
    { kind: 'practice', exercise: { type: 'clock', prompt: 'Nabi dit : [[네 시에 친구를 만나려고 해요.]] Mets l’horloge à l’heure du rendez-vous.', h: 4, m: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Présentation orale 🎤' },
        { type: 'text', text: 'Chacun présente son programme de l’après-midi. **Tout en coréen** :' },
        { type: 'dialog', lines: [
          { who: '선생님', ko: '여러분, 오늘 오후에 뭐 하려고 해요?' },
          { who: '수아', ko: '저는 도서관에서 책을 읽으려고 해요.' },
          { who: '지훈', ko: '저는 운동장에서 축구를 하려고 해요.' },
          { who: '민수', ko: '저는… 집에서 쉬려고 해요.' },
          { who: '선생님', ko: '민수, 숙제는요?' },
          { who: '민수', ko: '아! 숙제를 하려고 해요! 😅' },
          { who: '나비', ko: '저는 두 시에 한국어를 공부하려고 해요. 그리고 네 시에 친구를 만나려고 해요.' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’est-ce que Minsu comptait faire d’abord ?', choices: ['Se reposer à la maison.', 'Jouer au foot.', 'Lire à la bibliothèque.'], answer: 0, explain: '[[집에서 쉬려고 해요.]] … puis le professeur lui rappelle ses devoirs 😅' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Aujourd’hui, j’ai l’intention de lire un livre à la bibliothèque.', tiles: ['오늘', '도서관에서', '책을', '읽으려고', '해요.'], distractors: ['읽려고', '도서관에'] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '친구를 만나려고 해요', choices: ['친구를 만나려고 해요', '친구를 만날 거예요', '친구를 만나면 좋겠어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '📚 « Aujourd’hui, j’ai l’intention de lire un livre à la bibliothèque. »', answer: alts('오늘 도서관에서 책을 읽으려고 해요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ton tableau : écris ce que tu as l’intention de faire cet après-midi, avec **(으)려고 해요**. [[쓰세요!]]', placeholder: '세 시에 친구를 만나려고 해요', mustInclude: [INTEND_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '오늘 도서관에서 책을 읽으려고 해요.', fr: 'Aujourd’hui, j’ai l’intention de lire un livre à la bibliothèque.', prompt: 'Mise en pratique : présente ton projet à voix haute 🎯' } },
  ],
  interleave: [
    { type: 'type', prompt: '🥋 « Essaie d’apprendre le taekwondo ! »', answer: alts('태권도를 배워 보세요') },
    { type: 'cloze', before: '한국 음식을 ', after: '?', choices: ['먹어 봤어요', '먹어 주세요'], answer: 0, translation: 'As-tu déjà goûté la cuisine coréenne ?' },
    { type: 'mcq', prompt: '« S’il pleut ce week-end, je me reposerai à la maison. »', choices: ['주말에 비가 오면 집에서 쉴 거예요.', '주말에 비가 올 거면 집에서 쉬어요.', '주말에 비가 와 보면 집에서 쉴 거예요.'], answer: 0 },
    { type: 'type', prompt: '[[놀다]] → « si je joue » :', answer: '놀면' },
  ],
};

const SLATE: [string, string[]][] = [
  ['🏙️ « Je suis déjà allé à Séoul. »', ['서울에 가 봤어요.', '서울에 가려고 해요.', '서울에 가면 좋겠어요.']],
  ['🎯 « J’ai l’intention de voir un film. »', ['영화를 보려고 해요.', '영화를 봐 보세요.', '영화를 보면 좋겠어요.']],
  ['⏳ « Si j’ai du temps, je lis. »', ['시간이 있으면 책을 읽어요.', '시간이 있어서 책을 읽어 봤어요.', '시간이 있으려고 책을 읽어요.']],
  ['🌠 « J’aimerais qu’il fasse beau. »', ['날씨가 좋으면 좋겠어요.', '날씨가 좋으려고 해요.', '날씨가 좋아 봤어요.']],
  ['🥬 « Goûte le kimchi, tu verras ! »', ['김치를 먹어 보세요!', '김치를 먹으려고 해요!', '김치를 먹으면 좋겠어요!']],
];

const day69: Lesson = {
  id: 'm4-w2-d4',
  month: 4,
  week: 2,
  day: 69,
  title: 'Révision de la quinzaine',
  summary: 'Fiche d’autocontrôle, quiz sur l’ardoise et cartes d’expériences : -(으)면, -(으)면 좋겠어요, -아/어 보다, -(으)려고 해요. Nouveaux : 한 번, 처음, 가 보려고 해요.',
  cards: [
    { id: 'm5-ko-han-beon', kind: 'vocab', ko: '한 번', fr: 'une fois', note: '☝️ [[한 번 먹어 보세요!]] = goûte une fois, pour voir. [[번|t:fois]] se compte avec les nombres natifs : [[두 번]], [[세 번]].' },
    { id: 'm5-ko-cheoeum', kind: 'vocab', ko: '처음', fr: 'la première fois, le début', note: '🌱 [[처음이에요!]] = c’est la première fois ! [[김치를 처음 먹어 봤어요.]]' },
    { id: 'm5-ko-ga-boryeogo', kind: 'phrase', ko: '서울에 가 보려고 해요', fr: 'J’ai l’intention d’aller visiter Séoul.', note: '🧪 + 🎯 [[가 봐요|p:try]] + [[려고 해요|p:intend]] → [[가 보려고 해요]]. [[시간이 있으면 서울에 가 보려고 해요.]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Fiche d’autocontrôle 📋' },
        { type: 'tip', text: 'Demain, la **Grande évaluation n°7** ! Aujourd’hui, on range les semaines 13 et 14 dans sa trousse.', mood: 'encourage' },
        { type: 'table', head: ['Je sais…', 'Forme', 'Exemple'], rows: [
          ['🔀 poser une [[condition|p:if]]', '(으)면', '[[시간이 있으면 책을 읽어요.]]'],
          ['🌠 faire un [[vœu|p:wish]]', '(으)면 좋겠어요', '[[날씨가 좋으면 좋겠어요.]]'],
          ['🧪 raconter une [[expérience|p:try]]', '아/어 봤어요', '[[김치를 먹어 봤어요.]]'],
          ['💡 recommander', '아/어 보세요', '[[이 책을 읽어 보세요.]]'],
          ['🎯 dire mon [[intention|p:intend]]', '(으)려고 해요', '[[책을 읽으려고 해요.]]'],
        ] },
        { type: 'text', text: 'Deux grandes **familles** :' },
        { type: 'table', head: ['Famille', 'Le truc', 'Membres'], rows: [
          ['🔵 famille de **면**', 'voyelle / ㄹ → 면 · consonne → 으면', '[[먹으면|p:if]] · [[먹으면 좋겠어요|p:wish]] · [[먹으려고 해요|p:intend]] · [[먹으면서|p:while]]'],
          ['🟠 famille du **présent − 요**', '[[먹어요]] → [[먹어]] + …', '[[먹어서|p:cause]] · [[먹어도 돼요|p:rules]] · [[먹어 주세요|p:request]] · [[먹어 봤어요|p:try]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'La grande grille de la quinzaine. Touche une case vide.', head: ['Infinitif', '🔀 Si…', '🧪 Déjà essayé', '🎯 Intention'], rows: [
      ['[[가다]]', blank('가면'), blank('가 봤어요'), blank('가려고 해요')],
      ['[[읽다]]', blank('읽으면'), blank('읽어 봤어요'), blank('읽으려고 해요')],
      ['[[하다]]', blank('하면'), blank('해 봤어요'), blank('하려고 해요')],
    ], explain: '🔵 [[가면]] / [[가려고 해요]] · [[읽으면]] / [[읽으려고 해요]]. 🟠 [[가 봤어요]] · [[읽어 봤어요]] · [[해 봤어요]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Mini-quiz sur l’ardoise ✏️' },
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
        { type: 'title', text: 'Le combo 🧪 + 🎯' },
        { type: 'text', text: 'On peut empiler ! [[가 봐요|p:try]] (aller voir) + [[려고 해요|p:intend]] → [[가 보려고 해요]] : « j’ai l’intention d’aller voir ». Et avec une condition devant :' },
        { type: 'breakdown', segments: [
          { ko: '시간', role: 'subject', gloss: 'du temps', particle: { ko: '이', key: 'subject' } },
          { ko: '있으면', role: 'verb', gloss: 'si j’ai' },
          { ko: '서울', role: 'place', gloss: 'à Séoul', particle: { ko: '에', key: 'place' } },
          { ko: '가 보려고 해요', role: 'verb', gloss: 'j’ai l’intention d’aller voir' },
        ], translation: 'Si j’ai du temps, j’ai l’intention d’aller visiter Séoul.' },
        { type: 'text', text: 'Deux petits mots pour raconter : [[처음|t:la première fois]] et [[한 번|t:une fois]].' },
        { type: 'table', head: ['', ''], rows: [
          ['🌱', '[[김치를 처음 먹어 봤어요.]] — j’ai goûté le kimchi pour la première fois.'],
          ['☝️', '[[한 번 먹어 보세요!]] — goûte une fois, pour voir !'],
          ['🎉', '[[처음이에요!]] — c’est la première fois !'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[가 봐요]] + intention → « j’ai l’intention d’aller voir » :', answer: alts('가 보려고 해요') } },
    { kind: 'practice', exercise: { type: 'type', prompt: '☝️ « Goûte une fois, pour voir ! »', answer: alts('한 번 먹어 보세요') } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les cartes d’expériences 🃏' },
        { type: 'text', text: 'Atelier en petits groupes : on fabrique des cartes. Recto, une **question** ; verso, une **réponse** ou un **conseil**.' },
        { type: 'table', head: ['Recto ❓', 'Verso 💬'], rows: [
          ['[[김치를 먹어 봤어요?]]', '[[네, 처음 먹어 봤어요. 맛있어요!]]'],
          ['[[한복을 입어 봤어요?]]', '[[아니요, 아직 안 입어 봤어요.]]'],
          ['[[태권도를 배워 봤어요?]]', '[[아니요? 그럼 한 번 배워 보세요!]]'],
          ['[[주말에 뭐 하려고 해요?]]', '[[남산에 가 보려고 해요.]]'],
        ] },
        { type: 'text', text: 'Le groupe de Nabi au travail. **Tout en coréen** :' },
        { type: 'dialog', lines: [
          { who: '수아', ko: '나비, 태권도를 배워 봤어요?' },
          { who: '나비', ko: '아니요, 아직 안 배워 봤어요.' },
          { who: '민수', ko: '한 번 배워 보세요! 정말 재미있어요.' },
          { who: '나비', ko: '좋아요! 다음 주말에 배워 보려고 해요.' },
          { who: '지훈', ko: '시간이 있으면 같이 배울까요?' },
          { who: '나비', ko: '네! 처음이에요. 잘하면 좋겠어요!' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Recto ↔ verso : relie chaque question à sa réponse.', pairs: [
      ['김치를 먹어 봤어요?', '네, 처음 먹어 봤어요.'],
      ['한복을 입어 봤어요?', '아니요, 아직 안 입어 봤어요.'],
      ['주말에 뭐 하려고 해요?', '남산에 가 보려고 해요.'],
      ['이 게임이 재미있어요?', '네, 한 번 해 보세요!'],
    ] } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que compte faire Nabi le week-end prochain ?', choices: ['Essayer le taekwondo.', 'Porter un hanbok.', 'Aller à Séoul.'], answer: 0, explain: '[[다음 주말에 배워 보려고 해요.]]' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🃏 Complète la carte de Nabi.', before: '태권도는 ', after: '!', choices: ['처음이에요', '한 번이에요', '아직이에요'], answer: 0, translation: 'Le taekwondo, c’est la première fois !' } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ta carte d’expérience : écris une **question** avec **봤어요?** — et sa réponse si tu veux. [[쓰세요!]]', placeholder: '한국 음식을 먹어 봤어요? 네, 처음 먹어 봤어요!', mustInclude: [TRIED_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '시간이 있으면 서울에 가 보려고 해요. 남산에 아직 안 가 봤어요.', fr: 'Si j’ai du temps, j’ai l’intention d’aller visiter Séoul. Je ne suis pas encore allé à Namsan.', prompt: 'Lis ta carte à voix haute 🃏' } },
  ],
  interleave: [
    { type: 'type', prompt: '[[먹다]] → « j’ai l’intention de manger » :', answer: alts('먹으려고 해요') },
    { type: 'mcq', prompt: '« Il paraît que le kimchi est délicieux. »', choices: ['김치가 맛있대요.', '김치가 맛있재요.', '김치가 맛있래요.'], answer: 0 },
    { type: 'cloze', before: '음악을 ', after: ' 숙제를 해요.', choices: ['들으면서', '들어 봤어요'], answer: 0, translation: 'Je fais mes devoirs en écoutant de la musique.' },
    { type: 'type', prompt: '[[피곤하다]] → « si je suis fatigué » :', answer: '피곤하면' },
  ],
};

const DICTATION = [
  '김치를 먹어 봤어요',
  '한복을 입어 봤어요',
  '아직 남산에 안 가 봤어요',
  '이 책을 읽어 보세요',
  '오늘 도서관에서 책을 읽으려고 해요',
  '주말에 친구를 만나려고 해요',
  '시간이 있으면 서울에 가 보려고 해요',
  '내일 날씨가 좋으면 좋겠어요',
];

const INTENT: [string, string][] = [
  ['공부하다', '공부하려고 해요'],
  ['읽다', '읽으려고 해요'],
  ['가다', '가려고 해요'],
  ['놀다', '놀려고 해요'],
];

const day70: Lesson = {
  id: 'm4-w2-d5',
  month: 4,
  week: 2,
  day: 70,
  title: 'Bilan de quinzaine & Grande évaluation n°7',
  summary: 'La dictée de la classe, la Grande évaluation bimensuelle n°7, ton entretien de bilan et une journée à Séoul entièrement en coréen.',
  cards: [],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le grand jour 🎓' },
        { type: 'tip', text: 'Soixante-dix leçons ! Aujourd’hui, l’épreuve de la classe puis la **Grande évaluation n°7**. [[천천히 가도 돼요]] : sans stress !', mood: 'encourage' },
        { type: 'text', text: 'D’abord, la **dictée** de la classe : huit phrases. [[들으세요!]] Puis [[쓰세요!]]' },
      ],
    },
    ...DICTATION.map((s, i) => ({
      kind: 'practice' as const,
      exercise: { type: 'type' as const, prompt: `Dictée ${i + 1}/${DICTATION.length}`, audio: s, answer: alts(s) },
    })),
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Grammaire & rédaction ✏️' },
        { type: 'text', text: 'Épreuve de la classe : **transformer** des verbes, puis **rédiger** un paragraphe : ce que tu as déjà essayé en Corée, et ce que tu as l’intention de faire ce week-end.' },
      ],
    },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Transforme. Touche une case vide.', head: ['Infinitif', '🧪 아/어 봤어요', '🎯 (으)려고 해요'], rows: [
      ['[[입다]]', blank('입어 봤어요'), blank('입으려고 해요')],
      ['[[배우다]]', blank('배워 봤어요'), blank('배우려고 해요')],
      ['[[듣다]]', blank('들어 봤어요'), blank('들으려고 해요')],
    ], explain: '🟠 [[입어요]] → [[입어 봤어요]] · [[배워요]] → [[배워 봤어요]] · [[들어요]] → [[들어 봤어요]]. 🔵 [[입으려고]] · [[배우려고]] · [[들으려고]] ([[ㄷ|p:irreg-d]]).' } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Rédaction 1/2 — **En Corée, j’ai déjà…** Écris au moins trois phrases avec **봤어요**. [[쓰세요!]]', placeholder: '한국에서 김치를 먹어 봤어요. 한복도 입어 봤어요. 정말 재미있었어요.', mustInclude: [TRIED_ANY] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Rédaction 2/2 — **Ce week-end, j’ai l’intention de…** Écris au moins trois phrases avec **(으)려고 해요** (une condition en **(으)면** est bienvenue).', placeholder: '주말에 남산에 가 보려고 해요. 날씨가 좋으면 친구를 만나려고 해요.', mustInclude: [INTEND_ANY] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Grande évaluation n°7' },
        { type: 'text', text: 'Quatre parties, toujours sans piège ni chrono. Chaque erreur reviendra simplement en révision.' },
        { type: 'table', head: ['Partie', 'Contenu'], rows: [
          ['A', 'Exprimer l’expérience'],
          ['B', 'Exprimer l’intention'],
          ['C', 'Compréhension écrite'],
          ['D', 'Production orale'],
        ] },
        { type: 'tip', text: '**A — L’expérience.** Complète avec **아/어 봤어요** selon l’image.', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'type', prompt: '**A · 1/2** — 🍲 [[한국 음식을]] ______ (manger)', answer: alts('먹어 봤어요', '한국 음식을 먹어 봤어요') } },
    { kind: 'practice', exercise: { type: 'type', prompt: '**A · 2/2** — 👘 [[한복을]] ______ (porter)', answer: alts('입어 봤어요', '한복을 입어 봤어요') } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**B — L’intention.** Relie chaque verbe à sa forme en **(으)려고 해요**.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'match', prompt: '**B**', pairs: INTENT } },
    {
      kind: 'learn',
      blocks: [
        { type: 'tip', text: '**C — Compréhension.** Lis le récit de Minsu (touche une phrase pour l’entendre), puis réponds.', mood: 'encourage' },
        { type: 'table', head: ['Le récit de Minsu'], rows: [
          ['[[저는 한국에서 김치를 먹어 봤어요.]] [[한복도 입어 봤어요.]] [[하지만 아직 남산에 안 가 봤어요.]] [[그래서 다음 주말에 남산에 가려고 해요.]] [[그리고 태권도를 배워 보려고 해요.]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 1/3** — Vrai ou faux ? « Minsu a déjà porté un hanbok. »', choices: ['Vrai', 'Faux'], answer: 0, explain: '[[한복도 입어 봤어요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 2/3** — Où Minsu n’est-il **pas encore** allé ?', choices: ['à Namsan', 'à Séoul', 'à la bibliothèque'], answer: 0, explain: '[[아직 남산에 안 가 봤어요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 3/3** — Qu’a-t-il l’intention d’essayer ?', choices: ['le taekwondo', 'le kimchi', 'un jeu'], answer: 0, explain: '[[태권도를 배워 보려고 해요.]]' } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**D — À l’oral.** Le professeur te demande : [[한국에서 뭐 해 봤어요?]] Réponds avec au moins une phrase complète.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'write', prompt: '**D · 1/2** — Prépare ta réponse.', placeholder: '한국에서…', mustInclude: [TRIED_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '태권도를 배워 봤어요.', fr: 'J’ai essayé d’apprendre le taekwondo.', prompt: '**D · 2/2** — Dis-la à voix haute, puis écoute le modèle.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Une journée à Séoul 📖' },
        { type: 'text', text: 'Une histoire **entièrement en coréen**. Touche une bulle pour l’entendre.' },
        { type: 'dialog', lines: [
          { who: '📖', ko: '토요일 아침이에요. 나비와 수아는 서울에 있어요.' },
          { who: '수아', ko: '나비, 남산에 가 봤어요?' },
          { who: '나비', ko: '아니요, 아직 안 가 봤어요.' },
          { who: '수아', ko: '그럼 같이 가 볼까요?' },
          { who: '나비', ko: '좋아요! 걸어서 갈까요?' },
          { who: '📖', ko: '두 친구가 걸어서 남산에 갔어요.' },
          { who: '나비', ko: '와! 서울이 정말 커요!' },
          { who: '📖', ko: '점심이에요. 두 친구가 식당에 갔어요.' },
          { who: '수아', ko: '이 김치를 먹어 보세요. 정말 맛있어요!' },
          { who: '나비', ko: '음… 정말 맛있어요! 한 번 더 먹어도 돼요? 😋' },
          { who: '📖', ko: '오후예요.' },
          { who: '수아', ko: '나비, 한복을 입어 봤어요?' },
          { who: '나비', ko: '아니요, 처음이에요!' },
          { who: '📖', ko: '나비가 한복을 입어 봤어요.' },
          { who: '수아', ko: '와! 나비, 한복이 정말 좋아요!' },
          { who: '📖', ko: '저녁이에요.' },
          { who: '수아', ko: '다음 주말에 뭐 하려고 해요?' },
          { who: '나비', ko: '태권도를 배워 보려고 해요!' },
          { who: '수아', ko: '정말요? 저도 배우려고 해요. 같이 배울까요?' },
          { who: '나비', ko: '좋아요! 시간이 있으면 같이 해요. 🦋' },
        ] },
        { type: 'tip', text: 'Petits mots : [[나비와|t:Nabi et…]] ([[와]] = et, après une voyelle) · [[한 번 더|t:encore une fois]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Comment les deux amies vont-elles à Namsan ?', choices: ['à pied', 'en bus', 'elles n’y vont pas'], answer: 0, explain: '[[두 친구가 걸어서 남산에 갔어요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’est-ce que Nabi fait pour la première fois ?', choices: ['Porter un hanbok.', 'Goûter le kimchi.', 'Apprendre le taekwondo.'], answer: 0, explain: '[[아니요, 처음이에요!]] … [[나비가 한복을 입어 봤어요.]]' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ton bilan de quinzaine 🎓' },
        { type: 'text', text: 'Quatorze semaines, soixante-dix leçons. Tu sais raconter ta vie et tes projets :' },
        { type: 'table', head: ['Domaine', 'Acquis'], rows: [
          ['Hypothèses', '[[condition|p:if]] ([[비가 오면 우산을 써요]]), consignes ([[다 했으면 책을 덮으세요]])'],
          ['Souhaits', '[[ce serait bien si…|p:wish]] ([[날씨가 좋으면 좋겠어요]])'],
          ['Expériences', '[[déjà essayé|p:try]] ([[김치를 먹어 봤어요]]), pas encore ([[아직 안 가 봤어요]]), conseils ([[한 번 해 보세요]])'],
          ['Projets', '[[intention|p:intend]] ([[책을 읽으려고 해요]]) ≠ [[futur|p:future]] ([[비가 올 거예요]])'],
          ['Écrire', 'tes premières rédactions autonomes, en phrases liées'],
          ['Vocabulaire', '**environ 325 mots et expressions** dans tes cartes de révision'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'read', ko: '선생님, 저는 한국에서 김치를 먹어 봤어요. 한복도 입어 봤어요. 다음 주말에 태권도를 배워 보려고 해요. 한국어를 잘하면 좋겠어요!', fr: 'Monsieur / Madame, en Corée, j’ai déjà goûté le kimchi. J’ai aussi porté un hanbok. Le week-end prochain, j’ai l’intention d’essayer le taekwondo. J’aimerais être bon en coréen !', prompt: 'Ton entretien individuel : raconte au professeur tes expériences et tes projets, à voix haute.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Bravo, semaine 14 terminée ! 🎉' },
        { type: 'text', text: 'Tu fais des hypothèses, des vœux, tu racontes ce que tu as vécu et tu annonces tes projets — et tu suis maintenant des scènes entières **sans traduction**. Dans sa chrysalide, Nabi est presque prêt à s’envoler !' },
        { type: 'tip', text: '[[나비가 웃으면서 기다리고 있어요!|t:Nabi t’attend en souriant !]] 🦋 À demain !', mood: 'happy' },
      ],
    },
  ],
};

export const m4w2: Lesson[] = [day66, day67, day68, day69, day70];
