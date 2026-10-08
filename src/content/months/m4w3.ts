import type { GridBlank, Lesson } from '../types';

const COLLAPSE: [RegExp, string][] = [
  [/거예요/g, '것이에요'],
  [/것을/g, '걸'],
  [/것이(?!에요)/g, '게'],
  [/것(?![을이])/g, '거'],
  [/는 (것|거|걸|게)/g, '는$1'],
  [/면 좋겠/g, '면좋겠'],
  [/잘 못해/g, '잘못해'],
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
const COMPARE_ANY = '보다';
const WISH_ANY = '면 좋겠|면좋겠';

const CARDS: [string, string, string][] = [
  ['🎵', '음악을 듣다', '음악을 듣는 것'],
  ['⚽', '축구를 하다', '축구를 하는 것'],
  ['🎨', '그림을 그리다', '그림을 그리는 것'],
  ['🤝', '친구를 만나다', '친구를 만나는 것'],
  ['📺', '텔레비전을 보다', '텔레비전을 보는 것'],
];

const day71: Lesson = {
  id: 'm4-w3-d1',
  month: 4,
  week: 3,
  day: 71,
  title: 'Le fait de… : -는 것',
  summary: 'Transformer un verbe en nom : 먹다 → 먹는 것. Radical + 는 것 ; 책을 읽는 것을 좋아해요. Nouveaux : 것 (거), 사람, 학생.',
  cards: [
    { id: 'w15-ko-meokneun-geot', kind: 'grammar', ko: '먹는 것 · 보는 것', fr: 'le fait de manger · de regarder — radical + 는 것', note: '🧩 Voyelle ou consonne, toujours [[는 것]] : [[가는 것]], [[읽는 것]], [[공부하는 것]]. Prononcé [멍는 걷]. Règle : [[nominaliser|p:nominal]]' },
    { id: 'w15-ko-noneun-geot', kind: 'grammar', ko: '노는 것', fr: 'le fait de jouer (놀다) — le ㄹ tombe devant 는', note: '🪁 [[놀다]] → [[노는 것]]. Mais [[듣다]] → [[듣는 것]] (aucun changement).' },
    { id: 'w15-ko-geot', kind: 'vocab', ko: '것 · 거', fr: 'chose ; le fait de… (거 = à l’oral)', note: '📦 [[먹는 것]] = [[먹는 거]] à l’oral. Déjà caché dans [[갈 거예요|p:future]] !' },
    { id: 'w15-ko-chaegeul-ilneun-geoseul', kind: 'phrase', ko: '책을 읽는 것을 좋아해요', fr: 'J’aime lire des livres.', note: '📚 [[읽는 것]] + [[을|p:object]] + [[좋아해요]]. Prononcé [잉는 거슬].' },
    { id: 'w15-ko-mwo-haneun-geoseul', kind: 'phrase', ko: '뭐 하는 것을 좋아해요?', fr: 'Qu’est-ce que tu aimes faire ?', note: '🙋 [[저는 음악을 듣는 것을 좋아해요.]]' },
    { id: 'w15-ko-saram', kind: 'vocab', ko: '사람', fr: 'personne, gens', note: '🧑 [[한국 사람]] = un(e) Coréen(ne). [[선생님은 가르치는 사람이에요.]]' },
    { id: 'w15-ko-haksaeng', kind: 'vocab', ko: '학생', fr: 'élève, étudiant(e)', note: '🎒 [[학생은 공부하는 사람이에요.]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Un verbe devient un nom 🧩' },
        { type: 'tip', text: 'Nouvelle semaine ! Cette semaine, tu vas parler de **toi** : tes passions, tes talents, tes goûts.', mood: 'happy' },
        { type: 'text', text: 'Tu sais dire [[사과를 좋아해요]] : [[좋아해요]] veut un **nom** avec [[을/를|p:object]]. Mais pour dire « j’aime **lire** » ? Il faut d’abord transformer le verbe en nom : radical + **는 것** = « le fait de… ».' },
        { type: 'breakdown', segments: [
          { ko: '책', role: 'object', gloss: 'des livres', particle: { ko: '을', key: 'object' } },
          { ko: '읽는 것', role: 'object', gloss: 'le fait de lire', particle: { ko: '을', key: 'object' } },
          { ko: '좋아해요', role: 'verb', gloss: 'j’aime' },
        ], translation: 'J’aime lire des livres.', note: 'Deux [[을]] ! Le premier pour [[책]] (ce qu’on lit), le second pour tout le groupe [[책을 읽는 것]] (ce qu’on aime).' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La règle : radical + 는 것 🔍' },
        { type: 'table', head: ['Infinitif', '🧩 Le fait de…'], rows: [
          ['[[가다]]', '[[가는 것]]'],
          ['[[보다]]', '[[보는 것]]'],
          ['[[먹다]]', '[[먹는 것]]'],
          ['[[읽다]]', '[[읽는 것]]'],
          ['[[공부하다|p:hada]]', '[[공부하는 것]]'],
          ['[[듣다]] (ㄷ reste)', '[[듣는 것]]'],
          ['[[놀다]] (ㄹ tombe !)', '[[노는 것]]'],
        ] },
        { type: 'text', text: 'Comme [[고 있어요|p:progressive]] : pas de 으, aucun changement — sauf le **ㄹ** qui tombe devant **는**. Et ce **는**, tu le connais déjà : [[먹는대요|p:report]] !' },
        { type: 'liaison', items: [
          { written: '먹는 것', spoken: '멍는 걷', fr: 'le fait de manger' },
          { written: '읽는 것을', spoken: '잉는 거슬', fr: 'le fait de lire (objet)' },
        ] },
        { type: 'tip', text: 'À l’oral, [[것]] devient souvent [[거]] : [[먹는 거]]. Tu l’as déjà rencontré : [[갈 거예요|p:future]] !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[보다]] → « le fait de regarder » :', choices: ['보는 것', '봐는 것', '보으는 것'], answer: 0, explain: 'Radical [[보]] + [[는 것]]. Jamais de 으 ni de présent.' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[먹다]] → « le fait de manger » :', answer: alts('먹는 것') } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Transforme en nom. Touche une case vide.', head: ['Infinitif', '🧩 는 것'], rows: [
      ['[[가다]]', blank('가는 것')],
      ['[[읽다]]', blank('읽는 것')],
      ['[[공부하다]]', blank('공부하는 것')],
      ['[[놀다]]', blank('노는 것')],
    ], explain: '[[가는 것]] · [[읽는 것]] · [[공부하는 것]] · [[노는 것]] (le ㄹ de [[놀다]] tombe).' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le jeu de cartes 🃏' },
        { type: 'text', text: 'Activité de la classe : on assemble des cartes. **[Verbe] + 는 것 + 을 + 좋아해요.**' },
        { type: 'table', head: ['', '🃏 Verbe', '🧩 + 는 것'], rows: CARDS.map(([emoji, verb, noun]) => [emoji, `[[${verb}]]`, `[[${noun}]]`]) },
        { type: 'text', text: 'Il ne reste qu’à ajouter [[을 좋아해요]] : [[음악을 듣는 것을 좋아해요.]] Et pour ce qu’on n’aime pas, [[싫어해요]] : [[숙제를 하는 것을 싫어해요.]] 😅' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Assemble : relie chaque image à sa carte.', pairs: CARDS.slice(0, 4).map(([emoji, , noun]) => [emoji, noun] as [string, string]) } },
    { kind: 'practice', exercise: { type: 'order', translation: 'J’aime lire des livres.', tiles: ['책을', '읽는', '것을', '좋아해요.'], distractors: ['읽어요', '읽으면'] } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🎨 « J’aime dessiner. »', before: '그림을 ', after: ' 좋아해요.', choices: ['그리는 것을', '그려요를', '그리면'], answer: 0, explain: '[[좋아해요]] veut un nom : [[그리는 것]] + [[을|p:object]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le cahier de vocabulaire 📒' },
        { type: 'text', text: 'Activité de la classe : écrire des **définitions**. Le même **는** marche devant un autre nom : devant [[사람|t:personne]], il veut dire « quelqu’un **qui**… ». Nouveau mot : [[학생|t:élève]].' },
        { type: 'table', head: ['', 'Définition'], rows: [
          ['👩‍🏫', '[[선생님은 가르치는 사람이에요.]]'],
          ['🎒', '[[학생은 공부하는 사람이에요.]]'],
          ['🤝', '[[친구는 같이 노는 사람이에요.]]'],
        ] },
        { type: 'tip', text: '[[가르치는 사람]] = la personne **qui** enseigne · [[가르치는 것]] = le fait d’enseigner. Même règle, même **는** !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Complète le cahier : relie chaque mot à sa définition.', pairs: [
      ['선생님', '가르치는 사람'],
      ['학생', '공부하는 사람'],
      ['친구', '같이 노는 사람'],
    ] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ce qu’on aime 💚' },
        { type: 'text', text: 'Nabi et Sua parlent de ce qu’ils aiment faire. **Tout en coréen** :' },
        { type: 'dialog', lines: [
          { who: '수아', ko: '나비, 뭐 하는 것을 좋아해요?' },
          { who: '나비', ko: '저는 책을 읽는 것을 좋아해요. 수아는요?' },
          { who: '수아', ko: '저는 음악을 듣는 것을 좋아해요. 그리고 노래하는 것도 좋아해요!' },
          { who: '나비', ko: '숙제를 하는 것도 좋아해요?' },
          { who: '수아', ko: '아니요! 숙제를 하는 것을 싫어해요. 😅' },
          { who: '나비', ko: '저도요!' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’est-ce que Sua n’aime pas ?', choices: ['Faire ses devoirs.', 'Chanter.', 'Écouter de la musique.'], answer: 0, explain: '[[숙제를 하는 것을 싫어해요.]]' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '음악을 듣는 것을 좋아해요', choices: ['음악을 듣는 것을 좋아해요', '음악을 듣고 있어요', '음악을 들으면 좋겠어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '📚 « J’aime lire des livres. »', answer: alts('책을 읽는 것을 좋아해요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ta carte : écris ce que tu aimes faire, avec **는 것을 좋아해요**. [[쓰세요!]]', placeholder: '친구를 만나는 것을 좋아해요', mustInclude: [NOMINAL_ANY, '좋아해요'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '책을 읽는 것을 좋아해요.', fr: 'J’aime lire des livres.', prompt: 'Mise en pratique : dis-le à voix haute 📚' } },
  ],
  interleave: [
    { type: 'type', prompt: '[[가다]] → « j’ai l’intention d’aller » :', answer: alts('가려고 해요', '가려고해요') },
    { type: 'mcq', prompt: '« Je n’ai pas encore porté de hanbok. »', choices: ['아직 한복을 안 입어 봤어요.', '한복을 입어 보세요.', '한복을 입으려고 해요.'], answer: 0 },
    { type: 'cloze', before: '방학이 빨리 ', after: '!', choices: ['오면 좋겠어요', '와 봤어요'], answer: 0, translation: 'J’aimerais que les vacances arrivent vite !' },
    { type: 'type', prompt: '[[먹다]] → « goûte, pour voir ! » :', answer: alts('먹어 보세요', '먹어보세요') },
  ],
};

const PICTOS: [string, string, string][] = [
  ['⚽', '축구를 하다', '축구를 하는 것'],
  ['🎨', '그림을 그리다', '그림을 그리는 것'],
  ['🎤', '노래하다', '노래하는 것'],
  ['🎮', '게임을 하다', '게임을 하는 것'],
  ['🚲', '자전거를 타다', '자전거를 타는 것'],
  ['🏊', '수영하다', '수영하는 것'],
];

const day72: Lesson = {
  id: 'm4-w3-d2',
  month: 4,
  week: 3,
  day: 72,
  title: 'Mes passions et mes talents : 취미 · 잘해요',
  summary: 'Présenter son passe-temps et ses points forts : 제 취미는 그림을 그리는 거예요 · 노래하는 것을 잘해요. À l’oral : 걸, 게. Nouveaux : 취미, 잘해요, 자전거, 타요, 수영해요.',
  cards: [
    { id: 'w15-ko-chwimi', kind: 'vocab', ko: '취미', fr: 'passe-temps, hobby', note: '🎨 [[취미가 뭐예요?]] = Quel est ton passe-temps ?' },
    { id: 'w15-ko-je-chwimineun', kind: 'phrase', ko: '제 취미는 그림을 그리는 거예요', fr: 'Mon passe-temps, c’est dessiner.', note: '🎨 [[그리는 거]] + [[예요|p:yeyo]]. Ou bien : [[그림을 그리는 것이 취미예요.]] Règle : [[nominaliser|p:nominal]]' },
    { id: 'w15-ko-jalhaeyo', kind: 'vocab', ko: '잘해요', fr: 'je suis doué(e) pour, je fais bien (잘하다)', note: '🌟 [[한국어를 잘해요!]] · [[노래하는 것을 잘해요.]] Le contraire : [[잘 못해요]] [잘 모태요].' },
    { id: 'w15-ko-noraehaneun-geoseul-jalhaeyo', kind: 'phrase', ko: '저는 노래하는 것을 잘해요', fr: 'Je chante bien (je suis doué(e) pour le chant).', note: '🎤 [[노래하는 것]] + [[을|p:object]] + [[잘해요]].' },
    { id: 'w15-ko-jajeongeo', kind: 'vocab', ko: '자전거', fr: 'vélo', note: '🚲 [[자전거를 타요.]] = je fais du vélo.' },
    { id: 'w15-ko-tayo', kind: 'phrase', ko: '타요', fr: 'je monte (sur un vélo, dans un bus…), je fais du vélo (poli)', note: '🚲 [[타다]] → [[타요]] · [[타는 것]]. [[자전거를 타는 것을 좋아해요.]]' },
    { id: 'w15-ko-suyeonghaeyo', kind: 'phrase', ko: '수영해요', fr: 'je nage (poli)', note: '🏊 [[수영하다]] → [[수영하는 것]]. [[수영하는 것을 잘 못해요.]]' },
    { id: 'w15-ko-geol-ge', kind: 'grammar', ko: '것을 → 걸 · 것이 → 게', fr: 'formes orales contractées de -는 것', note: '💬 [[노래하는 걸 좋아해요]] = [[노래하는 것을 좋아해요]] · [[그리는 게 취미예요]] = [[그리는 것이 취미예요]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Mon passe-temps 🎨' },
        { type: 'tip', text: '[[책을 읽는 것을 좋아해요!]] Hier, tu disais ce que tu aimes. Aujourd’hui : ton **passe-temps** et tes **talents**.', mood: 'happy' },
        { type: 'text', text: 'Un mot nouveau : [[취미|t:passe-temps]]. La question : [[취미가 뭐예요?]] Pour répondre, on met l’activité en **는 거** + [[예요|p:yeyo]] :' },
        { type: 'breakdown', segments: [
          { ko: '제 취미', role: 'topic', gloss: 'mon passe-temps', particle: { ko: '는', key: 'topic' } },
          { ko: '그림을 그리는 거', role: 'other', gloss: 'le fait de dessiner' },
          { ko: '예요', role: 'verb', gloss: 'c’est' },
        ], translation: 'Mon passe-temps, c’est dessiner.', note: '[[거]] = [[것]] à l’oral ; il finit par une voyelle → [[예요|p:yeyo]]. Comme dans [[갈 거예요|p:future]] !' },
        { type: 'table', head: ['Deux façons de dire la même chose', ''], rows: [
          ['[[제 취미는 그림을 그리는 거예요.]]', 'Mon passe-temps, c’est dessiner.'],
          ['[[그림을 그리는 것이 취미예요.]]', 'Dessiner, c’est mon passe-temps.'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🎵 « Mon passe-temps, c’est écouter de la musique. »', before: '제 취미는 음악을 ', after: '.', choices: ['듣는 거예요', '듣는 것을', '들어요예요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '⚽ « Mon passe-temps, c’est jouer au foot. » ([[제 취미는…]])', answer: alts('제 취미는 축구를 하는 거예요', '제 취미는 축구하는 거예요') } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Je suis doué pour… 🌟' },
        { type: 'text', text: '[[잘|t:bien]] + [[하다|p:hada]] = [[잘해요]] : « je fais bien, je suis doué ». Avec un nom : [[한국어를 잘해요]]. Avec une action, on la transforme d’abord en nom :' },
        { type: 'breakdown', segments: [
          { ko: '저', role: 'topic', gloss: 'moi', particle: { ko: '는', key: 'topic' } },
          { ko: '노래하는 것', role: 'object', gloss: 'le fait de chanter', particle: { ko: '을', key: 'object' } },
          { ko: '잘해요', role: 'verb', gloss: 'je suis doué pour' },
        ], translation: 'Je chante bien.' },
        { type: 'tip', text: 'Le contraire : [[잘 못해요|t:je ne suis pas doué]] — [[못|p:neg]] = je ne peux pas. [[수영하는 것을 잘 못해요.]] 😅', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🎤 « Je suis doué pour le chant. »', choices: ['노래하는 것을 잘해요.', '노래하는 것이 취미예요.', '노래해 봤어요.'], answer: 0, explain: '[[취미예요]] = c’est mon passe-temps · [[해 봤어요|p:try]] = j’ai déjà essayé.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les pictogrammes 🃏' },
        { type: 'text', text: 'Activité de la classe : chaque pictogramme d’activité devient un nom. Mots nouveaux : [[자전거|t:vélo]], [[타요|t:je monte (sur)]], [[수영해요|t:je nage]].' },
        { type: 'table', head: ['', 'Activité', '🧩 는 것'], rows: PICTOS.map(([emoji, verb, noun]) => [emoji, `[[${verb}]]`, `[[${noun}]]`]) },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque pictogramme à son activité.', pairs: PICTOS.slice(1).map(([emoji, , noun]) => [emoji, noun] as [string, string]) } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Transforme en nom. Touche une case vide.', head: ['Infinitif', '🧩 는 것'], rows: [
      ['[[타다]]', blank('타는 것')],
      ['[[수영하다]]', blank('수영하는 것')],
      ['[[배우다]]', blank('배우는 것')],
    ] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'À l’oral : 걸 et 게 💬' },
        { type: 'text', text: 'Dans la conversation, [[것]] se contracte encore :' },
        { type: 'table', head: ['Écrit', 'Oral'], rows: [
          ['것을 → **걸**', '[[노래하는 것을 좋아해요]] → [[노래하는 걸 좋아해요]]'],
          ['것이 → **게**', '[[그리는 것이 취미예요]] → [[그리는 게 취미예요]]'],
          ['것 → **거**', '[[그리는 것이에요]] → [[그리는 거예요]]'],
        ] },
        { type: 'tip', text: 'Pour écrire, garde [[것]] ; reconnais [[걸]] et [[게]] quand on te parle.', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[수영하는 걸 좋아해요.]] =', choices: ['수영하는 것을 좋아해요.', '수영하는 것이 좋아해요.', '수영할 거예요.'], answer: 0, explain: '[[걸]] = [[것을]] : l’objet de [[좋아해요]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Mon affiche 🖼️' },
        { type: 'text', text: 'Activité de la classe : chacun réalise son affiche « **Mes talents et mes passions** ». Celle de Jihoon :' },
        { type: 'table', head: ['🖼️ L’affiche de Jihoon'], rows: [
          ['⚽ [[제 취미는 축구를 하는 거예요.]]'],
          ['🚲 [[자전거를 타는 것도 좋아해요.]]'],
          ['🌟 [[저는 달리는 것을 잘해요.]]'],
          ['😅 [[하지만 노래하는 것을 잘 못해요.]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pour quoi Jihoon est-il doué ?', choices: ['Courir.', 'Chanter.', 'Nager.'], answer: 0, explain: '[[저는 달리는 것을 잘해요.]]' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Présentation orale 🎤' },
        { type: 'text', text: 'Le professeur interroge la classe. **Tout en coréen** :' },
        { type: 'dialog', lines: [
          { who: '선생님', ko: '수아, 취미가 뭐예요?' },
          { who: '수아', ko: '제 취미는 그림을 그리는 거예요.' },
          { who: '선생님', ko: '그림을 잘 그려요?' },
          { who: '수아', ko: '네! 그림을 그리는 것을 잘해요. 하지만 수영하는 것을 잘 못해요.' },
          { who: '선생님', ko: '나비는요? 뭐 하는 것을 좋아해요?' },
          { who: '나비', ko: '저는 자전거를 타는 걸 좋아해요. 그리고 한국어를 공부하는 게 취미예요!' },
          { who: '선생님', ko: '와, 정말 좋아요!' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quel est le passe-temps de Nabi ?', choices: ['Étudier le coréen.', 'Dessiner.', 'Nager.'], answer: 0, explain: '[[한국어를 공부하는 게 취미예요!]] ([[게]] = [[것이]])' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '제 취미는 그림을 그리는 거예요', choices: ['제 취미는 그림을 그리는 거예요', '저는 그림을 그리는 것을 잘해요', '그림을 그리는 것을 좋아해요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🎨 « Mon passe-temps, c’est dessiner. »', answer: alts('제 취미는 그림을 그리는 거예요', '그림을 그리는 것이 취미예요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ton affiche : ton **passe-temps** et un **talent**. [[쓰세요!]]', placeholder: '제 취미는 게임을 하는 거예요. 저는 축구를 하는 것을 잘해요.', mustInclude: [NOMINAL_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '제 취미는 그림을 그리는 거예요.', fr: 'Mon passe-temps, c’est dessiner.', prompt: 'Mise en pratique : présente ton passe-temps à voix haute 🎨' } },
  ],
  interleave: [
    { type: 'type', prompt: '[[보다]] → « le fait de regarder » :', answer: alts('보는 것') },
    { type: 'type', prompt: '[[놀다]] → « le fait de jouer » :', answer: alts('노는 것') },
    { type: 'mcq', prompt: '« J’ai l’intention d’apprendre le taekwondo. »', choices: ['태권도를 배우려고 해요.', '태권도를 배워 봤어요.', '태권도를 배우는 것이에요.'], answer: 0 },
    { type: 'cloze', before: '비가 ', after: ' 집에서 쉴 거예요.', choices: ['오면', '와서'], answer: 0, translation: 'S’il pleut, je me reposerai à la maison.' },
  ],
};

const day73: Lesson = {
  id: 'm4-w3-d3',
  month: 4,
  week: 3,
  day: 73,
  title: 'Plus amusant que… : -보다 더',
  summary: 'Comparer : 축구가 음악보다 더 재미있어요 · 축구를 하는 것이 공부하는 것보다 더 재미있어요. Préférer : 더 좋아해요. Nouveaux : 보다 (que), 더 (plus).',
  cards: [
    { id: 'w15-ko-boda', kind: 'particle', ko: '보다', fr: 'que (comparaison) — A이/가 B보다 더…', note: '⚖️ Collé derrière ce qu’on compare : [[음악보다]] = « que la musique ». ≠ [[보다]] (voir) ! Règle : [[comparer|p:compare]]' },
    { id: 'w15-ko-deo', kind: 'vocab', ko: '더', fr: 'plus, davantage', note: '➕ [[더 재미있어요]] · [[더 좋아해요]] · [[한 번 더|t:encore une fois]].' },
    { id: 'w15-ko-chukguga-eumakboda', kind: 'phrase', ko: '축구가 음악보다 더 재미있어요', fr: 'Le foot est plus amusant que la musique.', note: '⚽ > 🎵 A + [[가|p:subject]] · B + [[보다|p:compare]] · [[더]] + adjectif.' },
    { id: 'w15-ko-chukgureul-haneun-geosi', kind: 'phrase', ko: '축구를 하는 것이 공부하는 것보다 더 재미있어요', fr: 'Jouer au foot est plus amusant qu’étudier.', note: '⚖️ Deux actions → deux [[는 것|p:nominal]]. À l’oral : [[축구하는 게 공부하는 거보다 더 재미있어요.]]' },
    { id: 'w15-ko-mwoga-deo', kind: 'phrase', ko: '뭐가 더 재미있어요?', fr: 'Qu’est-ce qui est le plus amusant ?', note: '🤔 [[뭐]] + [[가|p:subject]]. [[운동이 더 재미있어요!]]' },
    { id: 'w15-ko-deo-joahaeyo', kind: 'phrase', ko: '저는 책을 읽는 것을 더 좋아해요', fr: 'Moi, je préfère lire.', note: '💚 [[더 좋아해요]] = j’aime plus = je préfère.' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La balance ⚖️' },
        { type: 'tip', text: '[[취미가 뭐예요?]] Hier, tu présentais tes passions. Aujourd’hui, tu vas les **comparer**.', mood: 'happy' },
        { type: 'text', text: 'Deux mots nouveaux : [[보다|t:que]] se colle derrière ce qu’on compare, et [[더|t:plus]] se place devant l’adjectif.' },
        { type: 'breakdown', segments: [
          { ko: '축구', role: 'subject', gloss: 'le foot', particle: { ko: '가', key: 'subject' } },
          { ko: '음악', role: 'other', gloss: 'que la musique', particle: { ko: '보다', key: 'compare' } },
          { ko: '더', role: 'adverb', gloss: 'plus' },
          { ko: '재미있어요', role: 'verb', gloss: 'amusant' },
        ], translation: 'Le foot est plus amusant que la musique.' },
        { type: 'table', head: ['⚖️', 'Comparaison'], rows: [
          ['⚽ > 🎵', '[[축구가 음악보다 더 재미있어요.]]'],
          ['🍎 > 🥩', '[[사과가 고기보다 더 맛있어요.]]'],
          ['🏙️ > 🏫', '[[서울이 학교보다 더 커요.]]'],
        ] },
        { type: 'tip', text: 'Attention aux homonymes : [[음악보다|p:compare]] (que la musique) ≠ [[보다]] (voir, regarder). Le **보다** de comparaison est toujours **collé à un nom**.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '⚽ > 🎵 « Le foot est plus amusant que la musique. »', choices: ['축구가 음악보다 더 재미있어요.', '음악이 축구보다 더 재미있어요.', '축구가 음악을 더 재미있어요.'], answer: 0, explain: 'Le gagnant prend [[가|p:subject]], l’autre prend [[보다|p:compare]].' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Les pommes sont plus délicieuses que la viande.', tiles: ['사과가', '고기보다', '더', '맛있어요.'], distractors: ['고기를', '봐요'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Comparer des actions 🧩' },
        { type: 'text', text: 'Pour comparer deux **actions**, on les transforme d’abord en noms avec [[는 것|p:nominal]] — puis la même balance :' },
        { type: 'breakdown', segments: [
          { ko: '축구를 하는 것', role: 'subject', gloss: 'jouer au foot', particle: { ko: '이', key: 'subject' } },
          { ko: '공부하는 것', role: 'other', gloss: 'qu’étudier', particle: { ko: '보다', key: 'compare' } },
          { ko: '더', role: 'adverb', gloss: 'plus' },
          { ko: '재미있어요', role: 'verb', gloss: 'amusant' },
        ], translation: 'Jouer au foot est plus amusant qu’étudier.' },
        { type: 'tip', text: 'À l’oral : [[것이]] → [[게]], [[것보다]] → [[거보다]]. [[축구하는 게 공부하는 거보다 더 재미있어요.]]', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '⚽ > 📖', before: '축구를 하는 것이 공부하는 ', after: ' 더 재미있어요.', choices: ['것보다', '것을', '것이'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[책을 읽다]] → « que lire des livres » :', answer: alts('책을 읽는 것보다') } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Jouer au foot est plus amusant qu’étudier.', tiles: ['축구를', '하는', '것이', '공부하는', '것보다', '더', '재미있어요.'], distractors: ['공부해요'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Je préfère… 💚' },
        { type: 'text', text: '[[더]] marche aussi avec [[좋아해요]] : « aimer plus » = **préférer**.' },
        { type: 'table', head: ['', ''], rows: [
          ['💚', '[[저는 책을 읽는 것을 더 좋아해요.]] — Moi, je préfère lire.'],
          ['🤔', '[[뭐가 더 재미있어요?]] — Qu’est-ce qui est le plus amusant ?'],
          ['⚖️', '[[게임을 하는 것보다 책을 읽는 것을 더 좋아해요.]] — Je préfère lire plutôt que jouer aux jeux vidéo.'],
        ] },
        { type: 'tip', text: 'L’ordre est souple : le groupe en [[보다|p:compare]] peut aussi venir en premier. Ce qui compte, c’est la particule.', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '« Je préfère dessiner. »', choices: ['그림을 그리는 것을 더 좋아해요.', '그림을 그리는 것보다 좋아해요.', '그림을 더 그려 봤어요.'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le débat de la classe 🎤' },
        { type: 'text', text: 'Activité de la classe : le **sport** ou la **musique**, qu’est-ce qui est le plus amusant ? **Tout en coréen** :' },
        { type: 'dialog', lines: [
          { who: '선생님', ko: '여러분, 운동이 더 재미있어요? 음악이 더 재미있어요?' },
          { who: '지훈', ko: '운동이 더 재미있어요! 축구를 하는 것이 음악을 듣는 것보다 더 재미있어요.' },
          { who: '수아', ko: '아니요! 저는 노래하는 것을 더 좋아해요. 음악이 운동보다 더 재미있어요.' },
          { who: '민수', ko: '저는… 집에서 쉬는 것이 운동보다 더 좋아요. 😴' },
          { who: '선생님', ko: '하하. 나비는요?' },
          { who: '나비', ko: '저는 자전거를 타면서 음악을 듣는 것을 좋아해요! 🚲🎵' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que préfère Minsu ?', choices: ['Se reposer à la maison.', 'Le sport.', 'La musique.'], answer: 0, explain: '[[집에서 쉬는 것이 운동보다 더 좋아요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quelle est la réponse de Nabi ?', choices: ['Écouter de la musique en faisant du vélo.', 'Chanter en jouant au foot.', 'Se reposer en écoutant de la musique.'], answer: 0, explain: '[[자전거를 타면서|p:while]] [[음악을 듣는 것을 좋아해요!]]' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '음악이 운동보다 더 재미있어요', choices: ['음악이 운동보다 더 재미있어요', '운동이 음악보다 더 재미있어요', '음악이 운동보다 더 어려워요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '⚽ > 📖 « Jouer au foot est plus amusant qu’étudier. »', answer: alts('축구를 하는 것이 공부하는 것보다 더 재미있어요', '축구하는 것이 공부하는 것보다 더 재미있어요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ton avis pour le débat : compare deux activités avec **보다 더**. [[쓰세요!]]', placeholder: '그림을 그리는 것이 게임을 하는 것보다 더 재미있어요.', mustInclude: [COMPARE_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '축구를 하는 것이 공부하는 것보다 더 재미있어요.', fr: 'Jouer au foot est plus amusant qu’étudier.', prompt: 'Mise en pratique : donne ton avis à voix haute ⚖️' } },
  ],
  interleave: [
    { type: 'type', prompt: '🎤 « Je suis doué pour le chant. »', answer: alts('노래하는 것을 잘해요', '저는 노래하는 것을 잘해요') },
    { type: 'mcq', prompt: '[[취미가 뭐예요?]] →', choices: ['Quel est ton passe-temps ?', 'Qu’as-tu fait ?', 'Qu’est-ce que c’est ?'], answer: 0 },
    { type: 'type', prompt: '[[타다]] → « le fait de monter (à vélo) » :', answer: alts('타는 것') },
    { type: 'cloze', before: '친구가 같이 ', after: '.', choices: ['놀재요', '놀래요'], answer: 0, translation: 'Mon ami propose qu’on joue ensemble.', explain: 'Une proposition rapportée : radical + [[재요|p:report-let]].' },
  ],
};

const FRAME: [string, string, string][] = [
  ['👋', 'Bonjour + qui je suis', '안녕하세요! 저는 나비예요.'],
  ['🎨', 'Mon passe-temps', '제 취미는 책을 읽는 거예요.'],
  ['💚', 'Ce que j’aime aussi', '그리고 자전거를 타는 것을 좋아해요.'],
  ['🌟', 'Mon talent', '저는 노래하는 것을 잘해요.'],
  ['😅', 'Ce que je fais moins bien', '하지만 수영하는 것을 잘 못해요.'],
  ['⚖️', 'Une comparaison', '책을 읽는 것이 게임을 하는 것보다 더 재미있어요.'],
  ['🌠', 'Un souhait', '한국어를 잘하면 좋겠어요!'],
];

const day74: Lesson = {
  id: 'm4-w3-d4',
  month: 4,
  week: 3,
  day: 74,
  title: 'Mon autoportrait ✍️',
  summary: 'Rédiger sa fiche d’auto-présentation (6 à 8 phrases) : passe-temps, talents, comparaison, souhait, avec des connecteurs. À l’école et après la classe. Nouveaux : 수업, 끝나요, 하고 (avec).',
  cards: [
    { id: 'w15-ko-sueop', kind: 'vocab', ko: '수업', fr: 'cours, classe (la leçon)', note: '📚 [[수업 시간]] = l’heure de cours. [[수업이 끝나요.]]' },
    { id: 'w15-ko-kkeutnayo', kind: 'phrase', ko: '끝나요', fr: 'ça se termine, ça finit (poli)', note: '🔔 [[끝나다]] → [[끝나요]], prononcé [끈나요]. [[수업이 끝나면…]] = après la classe…' },
    { id: 'w15-ko-sueobi-kkeutnamyeon', kind: 'phrase', ko: '수업이 끝나면 자전거를 타요', fr: 'Après la classe (quand la classe est finie), je fais du vélo.', note: '🔔 [[끝나]] + [[면|p:if]] = quand c’est fini.' },
    { id: 'w15-ko-hago', kind: 'vocab', ko: '하고', fr: 'avec ; et (entre deux noms)', note: '🤝 [[친구하고 축구를 해요]] = je joue au foot avec un ami. [[축구하고 음악]] = le foot et la musique.' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Mon autoportrait ✍️' },
        { type: 'tip', text: 'Aujourd’hui, tu écris ton **portrait** pour le journal de fin d’année de l’école ! Six à huit phrases.', mood: 'encourage' },
        { type: 'text', text: 'Activité de la classe : on écrit sur un [[원고지|t:papier à cases]] — une case par syllabe, comme ton cahier ! Voici la **trame** de Nabi, étape par étape :' },
        { type: 'table', head: ['', 'Étape', 'Exemple'], rows: FRAME.map(([emoji, step, s]) => [emoji, step, `[[${s}]]`]) },
        { type: 'text', text: 'Les **connecteurs** relient tes phrases : [[그리고]] (et puis) · [[하지만]] (mais) · [[그래서]] (donc). Ou à l’intérieur d’une phrase : [[어렵지만|p:contrast]] (difficile, mais…).' },
      ],
    },
    { kind: 'practice', exercise: { type: 'order', translation: 'Mon passe-temps, c’est lire des livres.', tiles: ['제', '취미는', '책을', '읽는', '거예요.'], distractors: ['읽어요', '것을'] } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: 'Choisis le connecteur.', before: '노래하는 것을 잘해요. ', after: ' 수영하는 것을 잘 못해요.', choices: ['하지만', '그래서', '그리고'], answer: 0, translation: 'Je chante bien. Mais je ne nage pas bien.' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: 'Choisis le connecteur.', before: '한국어를 좋아해요. ', after: ' 한국어를 공부하는 게 취미예요.', choices: ['그래서', '하지만'], answer: 0, translation: 'J’aime le coréen. Donc, étudier le coréen, c’est mon passe-temps.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'À l’école et après la classe 🏫🔔' },
        { type: 'text', text: 'La section du journal : « **Ce que j’aime faire à l’école et après la classe** ». Mots nouveaux : [[수업|t:le cours]], [[끝나요|t:ça se termine]], [[하고|t:avec]].' },
        { type: 'table', head: ['', ''], rows: [
          ['🏫', '[[학교에서 친구하고 노는 것을 좋아해요.]]'],
          ['📚', '[[수업 시간에 한국어를 배우는 것이 재미있어요.]]'],
          ['🔔', '[[수업이 끝나면 운동장에서 축구를 해요.]]'],
          ['🏠', '[[집에서 음악을 들으면서 숙제를 해요.]]'],
        ] },
        { type: 'liaison', items: [
          { written: '끝나요', spoken: '끈나요', fr: 'ça se termine' },
          { written: '수업이', spoken: '수어비', fr: 'le cours (sujet)' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque début de phrase à sa fin.', pairs: [
      ['학교에서 친구하고', '노는 것을 좋아해요'],
      ['수업이 끝나면', '자전거를 타요'],
      ['음악을 들으면서', '숙제를 해요'],
      ['한국어를 잘하면', '좋겠어요'],
    ] } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🔔 « Après la classe, je fais du vélo. » ([[수업이 끝나면…]])', answer: alts('수업이 끝나면 자전거를 타요') } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le portrait de Sua 📰' },
        { type: 'text', text: 'Lis le portrait de Sua dans le journal de l’école (touche une phrase pour l’entendre).' },
        { type: 'table', head: ['📰 수아'], rows: [
          ['[[안녕하세요! 저는 수아예요.]] [[제 취미는 그림을 그리는 거예요.]] [[학교에서 친구하고 노래하는 것도 좋아해요.]] [[수업이 끝나면 도서관에서 책을 읽어요.]] [[저는 그림을 그리는 것을 잘해요.]] [[하지만 자전거를 타는 것을 잘 못해요.]] [[그림을 그리는 것이 자전거를 타는 것보다 더 재미있어요.]] [[방학에 서울에 가 보면 좋겠어요!]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que fait Sua après la classe ?', choices: ['Elle lit à la bibliothèque.', 'Elle fait du vélo.', 'Elle joue au foot.'], answer: 0, explain: '[[수업이 끝나면 도서관에서 책을 읽어요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Vrai ou faux ? « Sua est douée pour le vélo. »', choices: ['Vrai', 'Faux'], answer: 1, explain: '[[자전거를 타는 것을 잘 못해요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quel est le souhait de Sua ?', choices: ['Visiter Séoul pendant les vacances.', 'Apprendre à nager.', 'Ne plus avoir de devoirs.'], answer: 0, explain: '[[방학에 서울에 가 보면 좋겠어요!|p:wish]]' } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Rédaction 1/2 — **Qui je suis et ce que j’aime** (étapes 👋 à 😅). Au moins trois phrases avec **는 것** ou **는 거**. [[쓰세요!]]', placeholder: '안녕하세요! 저는 … 예요. 제 취미는 … 는 거예요. 그리고 … 는 것을 좋아해요.', mustInclude: [NOMINAL_ANY] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Rédaction 2/2 — **À l’école et après la classe** : une comparaison avec **보다 더** et un souhait avec **(으)면 좋겠어요**.', placeholder: '수업이 끝나면 … 요. … 는 것이 … 는 것보다 더 재미있어요. … 면 좋겠어요!', mustInclude: [COMPARE_ANY, WISH_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '안녕하세요! 저는 나비예요. 제 취미는 책을 읽는 거예요. 그리고 자전거를 타는 것을 좋아해요. 저는 노래하는 것을 잘해요. 하지만 수영하는 것을 잘 못해요. 책을 읽는 것이 게임을 하는 것보다 더 재미있어요. 한국어를 잘하면 좋겠어요!', fr: 'Bonjour ! Je suis Nabi. Mon passe-temps, c’est lire. J’aime aussi faire du vélo. Je chante bien, mais je ne nage pas bien. Lire est plus amusant que jouer aux jeux vidéo. J’aimerais être bon en coréen !', prompt: 'Lis le portrait de Nabi à voix haute, puis le tien ✍️' } },
  ],
  interleave: [
    { type: 'type', prompt: '⚖️ « Le foot est plus amusant que la musique. »', answer: alts('축구가 음악보다 더 재미있어요') },
    { type: 'mcq', prompt: '« Je préfère lire. »', choices: ['책을 읽는 것을 더 좋아해요.', '책을 읽는 것보다 좋아해요.', '책을 더 읽어 봤어요.'], answer: 0 },
    { type: 'cloze', before: '제 취미는 수영하는 ', after: '.', choices: ['거예요', '것을'], answer: 0, translation: 'Mon passe-temps, c’est nager.' },
    { type: 'type', prompt: '[[듣다]] → « le fait d’écouter » :', answer: alts('듣는 것'), explain: 'Devant **는** (une consonne), le ㄷ de [[듣다]] ne change pas.' },
  ],
};

const DICTATION = [
  '책을 읽는 것을 좋아해요',
  '제 취미는 그림을 그리는 거예요',
  '저는 노래하는 것을 잘해요',
  '축구를 하는 것이 공부하는 것보다 더 재미있어요',
  '수업이 끝나면 자전거를 타는 것을 좋아해요',
];

const PART_A: [string, string][] = [
  ['수영하다', '수영하는 것'],
  ['음악을 듣다', '음악을 듣는 것'],
  ['한국어를 배우다', '한국어를 배우는 것'],
];

const day75: Lesson = {
  id: 'm4-w3-d5',
  month: 4,
  week: 3,
  day: 75,
  title: 'Bilan & Petite évaluation n°15',
  summary: 'La dictée de la classe, la petite évaluation n°15 (nominalisation, loisirs, oral), ton mini-exposé et une histoire entièrement en coréen.',
  cards: [],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Fin de la semaine 15 🎓' },
        { type: 'tip', text: 'Bravo pour cette semaine ! Aujourd’hui : la dictée, la **petite évaluation n°15** et ton mini-exposé.', mood: 'encourage' },
        { type: 'text', text: 'D’abord, la **dictée** de la classe : cinq phrases. [[들으세요!]] Puis [[쓰세요!]]' },
      ],
    },
    ...DICTATION.map((s, i) => ({
      kind: 'practice' as const,
      exercise: { type: 'type' as const, prompt: `Dictée ${i + 1}/${DICTATION.length}`, audio: s, answer: alts(s) },
    })),
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Grammaire ✏️' },
        { type: 'text', text: 'Épreuve de la classe : **nominaliser** cinq verbes, puis les placer dans des phrases de préférence.' },
      ],
    },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Nominalise. Touche une case vide.', head: ['Infinitif', '🧩 는 것'], rows: [
      ['[[보다]]', blank('보는 것')],
      ['[[먹다]]', blank('먹는 것')],
      ['[[놀다]]', blank('노는 것')],
      ['[[듣다]]', blank('듣는 것')],
      ['[[운동하다]]', blank('운동하는 것')],
    ], explain: 'Radical + [[는 것]] ; seul le ㄹ de [[놀다]] tombe : [[노는 것]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[운동하다]] → « J’aime faire du sport. »', answer: alts('운동하는 것을 좋아해요', '저는 운동하는 것을 좋아해요') } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[먹다]] ⚖️ [[놀다]] → « Manger est plus amusant que jouer. » 😋', answer: alts('먹는 것이 노는 것보다 더 재미있어요') } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Petite évaluation n°15' },
        { type: 'text', text: 'Trois parties, sans piège ni chrono. Chaque erreur reviendra simplement en révision.' },
        { type: 'table', head: ['Partie', 'Contenu'], rows: [
          ['A', 'Transformation nominale'],
          ['B', 'Phrases de loisirs à trous'],
          ['C', 'Expression orale'],
        ] },
        { type: 'tip', text: '**A — Transformation.** Transforme le verbe en groupe nominal.', mood: 'encourage' },
      ],
    },
    ...PART_A.map(([verb, noun], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'type' as const, prompt: `**A · ${i + 1}/${PART_A.length}** — [[${verb}]] → ______`, answer: alts(noun) },
    })),
    { kind: 'learn', blocks: [{ type: 'tip', text: '**B — Loisirs.** Complète selon l’image.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'type', prompt: '**B · 1/2** — 🚲 [[제 취미는]] ______ [[거예요.]]', answer: alts('자전거를 타는', '제 취미는 자전거를 타는 거예요') } },
    { kind: 'practice', exercise: { type: 'type', prompt: '**B · 2/2** — 🎤 [[저는]] ______ [[잘해요.]]', answer: alts('노래하는 것을', '저는 노래하는 것을 잘해요') } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**C — À l’oral.** Le professeur te demande : [[취미가 뭐예요? 뭐 하는 것을 좋아해요?]] Réponds avec deux phrases complètes en **는 것**.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'write', prompt: '**C · 1/2** — Prépare tes deux phrases.', placeholder: '제 취미는 … 는 거예요. 그리고 … 는 것을 좋아해요.', mustInclude: [NOMINAL_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '제 취미는 자전거를 타는 거예요. 그리고 음악을 듣는 것을 좋아해요.', fr: 'Mon passe-temps, c’est faire du vélo. Et j’aime écouter de la musique.', prompt: '**C · 2/2** — Dis-les à voix haute, puis écoute le modèle.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le mini-exposé 🎤' },
        { type: 'text', text: 'Activité de la classe : chacun présente son affiche devant trois camarades. Ton tour ! Présente tes passions pendant deux minutes — passe-temps, talents, une comparaison, un souhait.' },
      ],
    },
    { kind: 'practice', exercise: { type: 'read', ko: '안녕하세요! 제 취미는 한국어를 공부하는 거예요. 그리고 자전거를 타는 것을 좋아해요. 수업이 끝나면 친구하고 공원에서 자전거를 타요. 저는 노래하는 것을 잘해요. 하지만 그림을 그리는 것을 잘 못해요. 노래하는 것이 그림을 그리는 것보다 더 재미있어요. 다음 방학에 서울에 가 보면 좋겠어요!', fr: 'Bonjour ! Mon passe-temps, c’est étudier le coréen. J’aime aussi faire du vélo. Après la classe, je fais du vélo au parc avec un ami. Je chante bien, mais je ne dessine pas bien. Chanter est plus amusant que dessiner. J’aimerais aller visiter Séoul aux prochaines vacances !', prompt: 'Ton mini-exposé : lis à voix haute, puis refais-le avec tes propres passions.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les talents de la classe 📖' },
        { type: 'text', text: 'Une histoire **entièrement en coréen**. Touche une bulle pour l’entendre.' },
        { type: 'dialog', lines: [
          { who: '📖', ko: '금요일 오후예요. 교실에서 학생들이 취미를 말하고 있어요.' },
          { who: '선생님', ko: '민수, 취미가 뭐예요?' },
          { who: '민수', ko: '제 취미는 자는 거예요! 😴' },
          { who: '📖', ko: '아이들이 웃어요.' },
          { who: '선생님', ko: '하하. 그럼 민수는 뭐 하는 것을 잘해요?' },
          { who: '민수', ko: '음… 먹는 것을 잘해요! 🍚' },
          { who: '선생님', ko: '지훈이는요?' },
          { who: '지훈', ko: '저는 축구를 하는 것을 좋아해요. 그리고 달리는 것을 잘해요!' },
          { who: '수아', ko: '맞아요! 지훈이는 정말 빨리 달려요.' },
          { who: '선생님', ko: '나비는요?' },
          { who: '나비', ko: '제 취미는 한국어를 공부하는 거예요. 한국어를 배우는 것이 게임을 하는 것보다 더 재미있어요!' },
          { who: '민수', ko: '정말요? 게임이 더 재미있어요!' },
          { who: '나비', ko: '하하. 그럼 같이 한국어 게임을 할까요?' },
          { who: '📖', ko: '수업이 끝났어요. 네 친구가 운동장에서 같이 놀아요. 🦋' },
        ] },
        { type: 'tip', text: 'Petit mot : [[맞아요|t:c’est vrai, exactement]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quel est le « passe-temps » de Minsu ?', choices: ['Dormir.', 'Manger.', 'Jouer au foot.'], answer: 0, explain: '[[제 취미는 자는 거예요!]] — et il est doué pour… manger 🍚' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’est-ce que Nabi propose à la fin ?', choices: ['De jouer ensemble à un jeu en coréen.', 'D’étudier à la bibliothèque.', 'De courir avec Jihoon.'], answer: 0, explain: '[[같이 한국어 게임을 할까요?|p:suggest]]' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ton bilan de la semaine 15 🎓' },
        { type: 'table', head: ['Je sais…', 'Exemple'], rows: [
          ['🧩 transformer un verbe en [[nom|p:nominal]]', '[[먹는 것]] · [[노는 것]] · à l’oral [[먹는 거]]'],
          ['💚 dire ce que j’aime faire', '[[책을 읽는 것을 좋아해요.]]'],
          ['🎨 présenter mon passe-temps', '[[제 취미는 그림을 그리는 거예요.]]'],
          ['🌟 dire mes talents', '[[노래하는 것을 잘해요.]] · [[잘 못해요.]]'],
          ['⚖️ [[comparer|p:compare]] deux activités', '[[축구를 하는 것이 공부하는 것보다 더 재미있어요.]]'],
          ['✍️ écrire mon portrait', 'six à huit phrases liées par [[그리고]], [[하지만]], [[그래서]]'],
        ] },
        { type: 'tip', text: '[[나비는 한국어를 공부하는 것을 정말 좋아해요!|t:Nabi adore étudier le coréen !]] 🦋 À lundi !', mood: 'happy' },
      ],
    },
  ],
};

export const m4w3: Lesson[] = [day71, day72, day73, day74, day75];
