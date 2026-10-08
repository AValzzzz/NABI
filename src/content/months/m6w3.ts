import type { GridBlank, Lesson } from '../types';

const COLLAPSE: [RegExp, string][] = [
  [/ 같아요/g, '같아요'],
  [/ 같은/g, '같은'],
  [/ 위에/g, '위에'],
  [/ 옆에/g, '옆에'],
];
const alts = (...xs: string[]): string[] => {
  const out = new Set(xs);
  for (const [re, to] of COLLAPSE) for (const s of [...out]) out.add(s.replace(re, to));
  for (const s of [...out]) out.add(s.replace(/[.,!?] /g, ' '));
  for (const s of [...out]) out.add(s.replace(/[.!?]$/, ''));
  return [...out];
};
const blank = (...s: string[]): GridBlank => ({ answer: alts(...s) });

const LIKE_ANY = '처럼|같아요|같이|같은|같다';
const ONOMA_ANY = '반짝반짝|살랑살랑|부슬부슬|멍멍|싱글벙글|깡충깡충|야옹|짹짹|똑똑';

const SPRING: [string, string][] = [
  ['살랑살랑 바람이', 'Tout doucement, le vent'],
  ['꽃 위에 불어요.', 'souffle sur les fleurs.'],
  ['반짝반짝 해님이', 'Tout brillant, le soleil'],
  ['나무 위에 웃어요.', 'sourit au-dessus des arbres.'],
  ['살랑살랑 나비가', 'Tout doucement, le papillon'],
  ['꽃 옆에서 놀아요.', 'joue près des fleurs.'],
  ['반짝반짝 봄 하늘', 'Tout brillant, le ciel de printemps,'],
  ['정말 예쁘네요!', 'comme il est beau !'],
];

const day111: Lesson = {
  id: 'm6-w3-d1',
  month: 6,
  week: 3,
  day: 111,
  title: 'Mon premier 동시 : 봄',
  summary: 'La poésie enfantine coréenne (동시) : lecture en écho du poème « 봄 », le rythme 4 + 3 syllabes, la répétition et la rime en -요. Nouveaux : 동시 · 시, 봄, 하늘 · 구름, 해 · 별, 바람이 불어요, 반짝반짝, 살랑살랑.',
  cards: [
    { id: 'w23-ko-dongsi', kind: 'vocab', ko: '동시 · 시', fr: 'poème pour enfants · poème', note: '📜 [[동시]] = poème écrit **pour** (ou **par**) des enfants. ⚠️ [[시]] « poème » ≠ [[시]] de l’heure ([[세 시]]). [[시를 써요|t:j’écris un poème]].' },
    { id: 'w23-ko-bom', kind: 'vocab', ko: '봄', fr: 'printemps', note: '🌸 [[봄에|p:time]] = au printemps. Les quatre saisons : [[봄]] · [[여름]] · [[가을]] · [[겨울]].' },
    { id: 'w23-ko-haneul-gureum', kind: 'vocab', ko: '하늘 · 구름', fr: 'ciel · nuage', note: '☁️ [[파란 하늘]] · [[하얀 구름]]. [[하늘에 구름이 있어요.]]' },
    { id: 'w23-ko-hae-byeol', kind: 'vocab', ko: '해 · 별', fr: 'soleil · étoile', note: '☀️⭐ ⚠️ [[해]] « soleil » ≠ [[해요]] (je fais). Dans les poèmes, on dit avec tendresse [[해님|t:monsieur Soleil]] ([[님]] comme [[선생님]]).' },
    { id: 'w23-ko-barami-bureoyo', kind: 'phrase', ko: '바람이 불어요', fr: 'Le vent souffle. (il y a du vent)', note: '🌬️ [[바람]] = vent ; [[불다]] → [[불어요]]. Comme [[비가 와요]], c’est le vent qui est **sujet** : [[이|p:subject]].' },
    { id: 'w23-ko-banjjak', kind: 'vocab', ko: '반짝반짝', fr: 'en scintillant, tout brillant (onomatopée)', note: '✨ Ce qui brille et scintille : [[별]], [[해]]… [[반짝]] répété deux fois, comme souvent dans les mots imagés.' },
    { id: 'w23-ko-sallang', kind: 'vocab', ko: '살랑살랑', fr: 'tout doucement (brise légère, onomatopée)', note: '🍃 Le vent qui souffle tout doux : [[바람이 살랑살랑 불어요.]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le 동시, la poésie des enfants 📜' },
        { type: 'tip', text: 'Avant-dernière semaine ! Tu connais presque toute la grammaire de base. Cette semaine, on fait comme les élèves coréens dans leur manuel de [[국어|t:langue coréenne]] : de la **poésie** !', mood: 'happy' },
        { type: 'text', text: 'Un [[동시|t:poème pour enfants]] est court, plein d’images et surtout plein de **musique** : des mots répétés, des sons amusants, un rythme qui se chante. Les mots de la nature du jour :' },
        { type: 'table', head: ['', 'Mot', 'Sens'], rows: [
          ['🌸', '[[봄]]', 'printemps'],
          ['🌌', '[[하늘]] · [[구름]]', 'ciel · nuage'],
          ['☀️', '[[해]] · [[별]]', 'soleil · étoile'],
          ['🌬️', '[[바람이 불어요]]', 'le vent souffle'],
        ] },
        { type: 'text', text: 'Et deux mots qui « font » ce qu’ils disent : [[반짝반짝|t:tout brillant]] ✨ et [[살랑살랑|t:tout doucement]] 🍃.' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie le mot à son image.', pairs: [
      ['봄', '🌸'],
      ['하늘', '🌌'],
      ['구름', '☁️'],
      ['해', '☀️'],
      ['별', '⭐'],
    ] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le poème : 봄 🌸' },
        { type: 'text', text: 'Touche chaque vers pour l’entendre. Deux strophes de quatre vers.' },
        { type: 'table', head: ['봄', ''], rows: SPRING.map(([ko, fr]) => [`[[${ko}]]`, fr]) },
        { type: 'tip', text: 'Petits mots : [[해님|t:monsieur Soleil]] · [[위에|t:au-dessus de]] · [[옆에서|t:à côté de]] (on y **fait** quelque chose → [[에서|p:action]]). Et tu reconnais [[예쁘네요|p:discover]] : on **découvre** la beauté du ciel !', mood: 'thinking' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La musique du poème 🎵' },
        { type: 'text', text: 'Activité de la classe : on cherche ce qui fait chanter le poème.' },
        { type: 'table', head: ['Procédé', 'Dans « 봄 »'], rows: [
          ['🔁 **Répétition**', '[[살랑살랑]] et [[반짝반짝]] reviennent deux fois chacun, en alternance.'],
          ['🥁 **Rythme**', 'Les vers impairs : 4 + 3 syllabes → [[살랑살랑]] ⏸ [[바람이]] · [[반짝반짝]] ⏸ [[해님이]].'],
          ['🔔 **Rime**', 'Les vers pairs finissent en -요 : [[불어요]] · [[웃어요]] · [[놀아요]].'],
          ['🐾 **Mots imagés**', '[[반짝반짝]], [[살랑살랑]] : on « entend » la lumière et le vent.'],
        ] },
        { type: 'text', text: 'Ces mots imagés ont un nom : [[의성어|t:mot qui imite un son]] et [[의태어|t:mot qui imite une manière d’être]]. On les étudie mercredi !' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🔁 Quel mot revient au début des vers 1 et 5 ?', choices: ['살랑살랑', '반짝반짝', '봄 하늘'], answer: 0, explain: '[[살랑살랑 바람이]] · [[살랑살랑 나비가]].' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🔔 Quels mots riment ?', choices: ['불어요 · 웃어요 · 놀아요', '바람이 · 해님이 · 하늘', '꽃 · 나무 · 봄'], answer: 0, explain: 'Les vers pairs finissent en **-요**.' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🥁 Combien de syllabes dans [[반짝반짝 해님이]] ?', choices: ['4 + 3 = 7', '2 + 3 = 5', '4 + 4 = 8'], answer: 0, explain: '[[반짝반짝]] (4) ⏸ [[해님이]] (3).' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Lecture en écho 🗣️' },
        { type: 'tip', text: 'Méthode : tu lis deux vers, puis tu écoutes le modèle et tu compares. Marque bien la **pause** ⏸ après le mot imagé, et une pause un peu plus longue à la fin de chaque vers. Le mot imagé se dit avec entrain : **반짝**-반짝 !', mood: 'encourage' },
        { type: 'table', head: ['Avec les pauses ⏸'], rows: [
          ['[[살랑살랑]] ⏸ [[바람이]] ⏸⏸ [[꽃 위에]] ⏸ [[불어요]]'],
          ['[[반짝반짝]] ⏸ [[해님이]] ⏸⏸ [[나무 위에]] ⏸ [[웃어요]]'],
        ] },
      ],
    },
    ...[0, 2, 4, 6].map((i, n) => ({
      kind: 'practice' as const,
      exercise: { type: 'read' as const, ko: `${SPRING[i][0]} ${SPRING[i + 1][0]}`, fr: `${SPRING[i][1]} ${SPRING[i + 1][1]}`, prompt: `Écho ${n + 1}/4 — lis ces deux vers à voix haute, puis écoute le modèle.` },
    })),
    { kind: 'practice', exercise: { type: 'order', prompt: 'Remets le vers dans l’ordre.', translation: 'Tout doucement, le vent souffle sur les fleurs.', tiles: ['살랑살랑', '바람이', '꽃 위에', '불어요.'], distractors: ['반짝반짝'] } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '✨ Le soleil brille…', before: '', after: ' 해님이 나무 위에 웃어요.', choices: ['반짝반짝', '살랑살랑'], answer: 0, explain: 'Ce qui **brille** : [[반짝반짝]]. Le vent doux : [[살랑살랑]].' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '바람이 살랑살랑 불어요', choices: ['바람이 살랑살랑 불어요', '바람이 반짝반짝 불어요', '비가 살랑살랑 와요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🌬️ « Le vent souffle. »', answer: alts('바람이 불어요') } },
    { kind: 'practice', exercise: { type: 'read', ko: SPRING.slice(0, 4).map(([ko]) => ko).join(' '), fr: SPRING.slice(0, 4).map(([, fr]) => fr).join(' '), prompt: 'Mise en pratique : récite la première strophe (4 vers) avec le rythme 🎵' } },
  ],
  interleave: [
    { type: 'mcq', prompt: '« Il faut faire ses devoirs. »', choices: ['숙제를 해야 돼요.', '숙제를 해도 돼요.', '숙제를 하지 않아도 돼요.'], answer: 0 },
    { type: 'type', prompt: '☑️ « Choisissez la bonne réponse. »', answer: alts('맞는 답을 고르세요') },
    { type: 'mcq', prompt: '🌸 [[봄]] =', choices: ['printemps', 'été', 'hiver'], answer: 0 },
    { type: 'cloze', before: '책을 ', after: ' 도서관에 가요.', choices: ['빌리러', '빌려야'], answer: 0, translation: 'Je vais à la bibliothèque emprunter un livre.' },
  ],
};

const day112: Lesson = {
  id: 'm6-w3-d2',
  month: 6,
  week: 3,
  day: 112,
  title: 'Comme… : 꽃처럼, 솜사탕 같아요',
  summary: 'La comparaison poétique : N + 처럼 (해는 꽃처럼 예뻐요 · 새처럼 날아요) et N 같아요 en fin de phrase (구름은 솜사탕 같아요). N같이 = 처럼. Cartes de la nature à associer. Nouveaux : 처럼, 같아요, 솜사탕, 새, 날아요, 파래요.',
  cards: [
    { id: 'w23-ko-cheoreom', kind: 'particle', ko: '처럼', fr: 'comme (comparaison) — nom + 처럼', note: '🌸 Collé au nom, sans changement : [[꽃처럼]], [[새처럼]], [[토끼처럼]]. Puis l’adjectif ou le verbe : [[해는 꽃처럼 예뻐요.]] Règle : [[처럼|p:like]]' },
    { id: 'w23-ko-gatayo', kind: 'grammar', ko: '솜사탕 같아요', fr: 'c’est comme de la barbe à papa (nom + 같아요 : ressembler à)', note: '☁️ En fin de phrase : nom + [[같아요|p:like]] [가타요]. C’est le [[같아요|p:seem]] de [[재미있는 것 같아요]] : « c’est comme une chose… ». Devant un nom : [[솜사탕 같은 구름]].' },
    { id: 'w23-ko-somsatang', kind: 'vocab', ko: '솜사탕', fr: 'barbe à papa', note: '🍭 Mot à mot : sucre ([[사탕|t:bonbon]]) en coton ([[솜|t:coton]]). [[구름은 솜사탕 같아요.]]' },
    { id: 'w23-ko-sae-narayo', kind: 'phrase', ko: '새처럼 날아요', fr: 'Je vole comme un oiseau.', note: '🐦 [[새]] = oiseau ; [[날다]] → [[날아요]] (je vole). [[나비처럼 날아요.]]' },
    { id: 'w23-ko-haeneun-kkotcheoreom', kind: 'phrase', ko: '해는 꽃처럼 예뻐요', fr: 'Le soleil est joli comme une fleur.', note: '☀️ [[해]] + [[는|p:topic]] · [[꽃]] + [[처럼|p:like]] · [[예뻐요]].' },
    { id: 'w23-ko-paraeyo', kind: 'vocab', ko: '파래요 · 파랗다', fr: 'c’est bleu (être bleu)', note: '🔵 Forme spéciale à retenir telle quelle : [[파랗다]] → [[파래요]] ; devant un nom : [[파란]]. [[하늘은 바다처럼 파래요.]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le nuage est comme… ☁️' },
        { type: 'tip', text: 'Les poètes adorent dire qu’une chose **ressemble** à une autre. En coréen, c’est très simple !', mood: 'happy' },
        { type: 'breakdown', segments: [
          { ko: '해', role: 'topic', gloss: 'le soleil', particle: { ko: '는', key: 'topic' } },
          { ko: '꽃', role: 'other', gloss: 'comme une fleur', particle: { ko: '처럼', key: 'like' } },
          { ko: '예뻐요', role: 'verb', gloss: 'est joli' },
        ], translation: 'Le soleil est joli comme une fleur.' },
        { type: 'text', text: '**Nom + 처럼** = « comme (un) nom ». On le colle au nom, sans rien changer, voyelle ou consonne : [[꽃처럼]], [[새처럼]], [[바다처럼]], [[토끼처럼]].' },
        { type: 'text', text: 'Mots nouveaux : [[새|t:oiseau]] 🐦 · [[날아요|t:je vole]] ([[날다]]) · [[파래요|t:c’est bleu]] — forme spéciale à retenir telle quelle, comme [[매워요]] ; devant un nom tu connais déjà [[파란]].' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🌸 « comme une fleur »', choices: ['꽃처럼', '꽃이처럼', '꽃을처럼'], answer: 0, explain: '**처럼** se colle directement au nom, sans particule.' } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Nom + 처럼 : touche une case vide.', head: ['Nom', '+ 처럼', 'Sens'], rows: [
      ['[[꽃]]', blank('꽃처럼'), 'comme une fleur'],
      ['[[새]]', blank('새처럼'), 'comme un oiseau'],
      ['[[바다]]', blank('바다처럼'), 'comme la mer'],
      ['[[토끼]]', blank('토끼처럼'), 'comme un lapin'],
    ], explain: 'Aucun changement : nom + **처럼**.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'En fin de phrase : 같아요 🍭' },
        { type: 'text', text: 'Quand la ressemblance **termine** la phrase, on dit **nom + 같아요** (« c’est comme… ») :' },
        { type: 'breakdown', segments: [
          { ko: '구름', role: 'topic', gloss: 'le nuage', particle: { ko: '은', key: 'topic' } },
          { ko: '솜사탕', role: 'other', gloss: 'barbe à papa' },
          { ko: '같아요', role: 'verb', gloss: 'est comme' },
        ], translation: 'Le nuage est comme de la barbe à papa.' },
        { type: 'tip', text: 'Tu connais ce [[같아요]] [가타요] ! Dans [[재미있는 것 같아요|p:seem]], il veut dire « c’est comme une chose intéressante » → « il me semble ». Mot nouveau : [[솜사탕|t:barbe à papa]] — du sucre en coton.', mood: 'thinking' },
        { type: 'table', head: ['Au milieu : 처럼', 'À la fin : 같아요'], rows: [
          ['[[구름은 솜사탕처럼 예뻐요.]]', '[[구름은 솜사탕 같아요.]]'],
          ['[[해는 꽃처럼 예뻐요.]]', '[[해는 꽃 같아요.]]'],
          ['[[하늘은 바다처럼 파래요.]]', '[[하늘은 바다 같아요.]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '☁️ « Le nuage est comme de la barbe à papa. »', before: '구름은 솜사탕 ', after: '.', choices: ['같아요', '처럼', '같이'], answer: 0, explain: 'En **fin** de phrase : [[같아요]].' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '☀️ « Le soleil est joli comme une fleur. »', before: '해는 ', after: ' 예뻐요.', choices: ['꽃처럼', '꽃 같아요', '꽃하고'], answer: 0, explain: 'Avant l’adjectif : **처럼**.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les cartes de la nature 🃏' },
        { type: 'text', text: 'Activité : on associe deux cartes qui se **ressemblent** (couleur, forme, mouvement), puis on fabrique une image poétique.' },
        { type: 'table', head: ['Carte', '≈ Carte', 'Image poétique'], rows: [
          ['☁️ [[구름]]', '🍭 [[솜사탕]]', '[[구름은 솜사탕 같아요.]]'],
          ['🌌 [[하늘]]', '🌊 [[바다]]', '[[하늘은 바다처럼 파래요.]]'],
          ['☀️ [[해]]', '🌼 [[꽃]]', '[[해는 꽃처럼 예뻐요.]]'],
          ['🦋 [[나비]]', '🐦 [[새]]', '[[나비는 새처럼 날아요.]]'],
          ['🐇 [[토끼]]', '🌬️ [[바람]]', '[[토끼는 바람처럼 빨리 달려요.]]'],
        ] },
        { type: 'tip', text: 'Tu entendras aussi **N같이** = N처럼 : [[꽃같이 예뻐요]]. C’est le même mot que [[같이|t:ensemble]] — mais collé à un nom, il veut dire « comme ». ⚠️ [[친구같이]] (comme un ami) ≠ [[친구하고 같이]] (avec un ami).', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Associe les cartes qui se ressemblent.', pairs: [
      ['구름', '솜사탕'],
      ['하늘', '바다'],
      ['해', '꽃'],
      ['나비', '새'],
    ] } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Le ciel est bleu comme la mer.', tiles: ['하늘은', '바다처럼', '파래요.'], distractors: ['바다하고', '같아요.'] } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '⚠️ [[친구같이]] =', choices: ['comme un ami', 'avec un ami', 'ensemble'], answer: 0, explain: 'Collé à un nom, [[같이]] = **comme**. « avec un ami » = [[친구하고 같이]].' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '나비는 새처럼 날아요', choices: ['나비는 새처럼 날아요', '나비는 새 같아요', '새는 나비처럼 날아요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le poème : 구름 ☁️' },
        { type: 'table', head: ['구름', ''], rows: [
          ['[[하얀 구름은]]', 'Le nuage blanc'],
          ['[[솜사탕 같아요.]]', 'est comme de la barbe à papa.'],
          ['[[파란 하늘을]]', 'Dans le ciel bleu,'],
          ['[[새처럼 날아요.]]', 'il vole comme un oiseau.'],
        ] },
        { type: 'tip', text: 'Dans les livres, tu verras aussi [[솜사탕 같은 구름|t:un nuage pareil à de la barbe à papa]] : [[같은]] est la forme devant un nom, comme [[작은|p:adj-mod]]. Juste à reconnaître !', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'type', prompt: '☀️ « Le soleil est joli comme une fleur. »', answer: alts('해는 꽃처럼 예뻐요', '해는 꽃같이 예뻐요', '해가 꽃처럼 예뻐요') } },
    { kind: 'practice', exercise: { type: 'type', prompt: '☁️ « Le nuage est comme de la barbe à papa. »', answer: alts('구름은 솜사탕 같아요', '구름이 솜사탕 같아요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'À toi : invente **2 images poétiques** avec **처럼** ou **같아요** (une carte de la nature + une carte qui lui ressemble). [[쓰세요!]]', placeholder: '별은 꽃처럼 예뻐요. 바람은 새 같아요.', mustInclude: [LIKE_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '해는 꽃처럼 예뻐요. 하늘은 바다처럼 파래요. 그리고 구름은 솜사탕 같아요.', fr: 'Le soleil est joli comme une fleur. Le ciel est bleu comme la mer. Et le nuage est comme de la barbe à papa.', prompt: 'Mise en pratique : dis tes images à voix haute 🌸' } },
  ],
  interleave: [
    { type: 'mcq', prompt: '✨ [[반짝반짝]] =', choices: ['tout brillant', 'tout doucement', 'très vite'], answer: 0 },
    { type: 'type', prompt: '🌬️ « Le vent souffle. »', answer: alts('바람이 불어요') },
    { type: 'mcq', prompt: '« Pas besoin d’aller à l’école demain. »', choices: ['내일은 학교에 안 가도 돼요.', '내일은 학교에 가면 안 돼요.', '내일은 학교에 가야 돼요.'], answer: 0 },
    { type: 'mcq', prompt: '« Je pense que ce livre est intéressant. »', choices: ['이 책이 재미있는 것 같아요.', '이 책이 재미있은 것 같아요.', '이 책이 재미있 같아요.'], answer: 0 },
  ],
};

const RAINY: [string, string, string[], string][] = [
  ['비가 ', ' 내려요.', ['부슬부슬', '멍멍', '반짝반짝'], 'La pluie tombe tout doucement.'],
  ['강아지가 ', ' 짖어요.', ['멍멍', '부슬부슬', '살랑살랑'], 'Le chiot aboie : ouaf ouaf.'],
  ['친구가 우산을 쓰고 ', ' 웃어요.', ['싱글벙글', '멍멍', '부슬부슬'], 'Mon ami, sous son parapluie, sourit jusqu’aux oreilles.'],
  ['바람이 ', ' 불어요.', ['살랑살랑', '싱글벙글', '멍멍'], 'Le vent souffle tout doucement.'],
  ['밤에는 별이 ', ' 빛나요.', ['반짝반짝', '살랑살랑', '싱글벙글'], 'La nuit, les étoiles scintillent.'],
];

const day113: Lesson = {
  id: 'm6-w3-d3',
  month: 6,
  week: 3,
  day: 113,
  title: 'Les mots qui chantent : 멍멍, 부슬부슬',
  summary: 'Les onomatopées : 의성어 (sons : 멍멍) et 의태어 (manières : 반짝반짝, 살랑살랑, 부슬부슬, 싱글벙글). Mimes, illustrations sonores et poème à trous « 비 오는 날 ». Nouveaux : 의성어 · 의태어, 강아지가 멍멍 짖어요, 비가 부슬부슬 내려요, 싱글벙글 웃어요.',
  cards: [
    { id: 'w23-ko-uiseongeo', kind: 'grammar', ko: '의성어 · 의태어', fr: 'onomatopée (mot qui imite un son) · mot imagé (qui imite une manière)', note: '🔊 [[의성어|p:mimetic]] : on l’**entend** ([[멍멍]]). 👀 [[의태어|p:mimetic]] : on le **voit**, on le sent ([[반짝반짝]], [[살랑살랑]]). Souvent répétés et placés juste devant le verbe.' },
    { id: 'w23-ko-meongmeong', kind: 'phrase', ko: '강아지가 멍멍 짖어요', fr: 'Le chiot aboie : ouaf ouaf.', note: '🐶 [[강아지]] = chiot, petit chien ; [[짖다]] → [[짖어요]] (aboyer). [[멍멍]] = « ouaf » en coréen !' },
    { id: 'w23-ko-buseul', kind: 'phrase', ko: '비가 부슬부슬 내려요', fr: 'La pluie tombe tout doucement (pluie fine).', note: '🌧️ [[내리다]] → [[내려요]] (tomber, descendre) : [[비가 와요]] en plus poétique. [[눈이 내려요.]]' },
    { id: 'w23-ko-singgeul', kind: 'phrase', ko: '싱글벙글 웃어요', fr: 'Il / elle sourit jusqu’aux oreilles.', note: '😄 [[싱글벙글]] = un grand sourire tout content. [[친구가 싱글벙글 웃어요.]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le chien coréen ne dit pas « ouaf » 🐶' },
        { type: 'tip', text: 'En coréen, le chien fait [[멍멍]], le chat [[야옹]] et l’oiseau [[짹짹]] ! Ces mots imagés sont partout : dans les poèmes, les livres d’enfants… et dans la vie de tous les jours.', mood: 'happy' },
        { type: 'table', head: ['Famille', 'Imite…', 'Exemples'], rows: [
          ['🔊 [[의성어|p:mimetic]]', 'un **son** (on l’entend)', '[[멍멍]] 🐶 · [[야옹]] 🐱 · [[짹짹]] 🐦 · [[똑똑]] 🚪'],
          ['👀 [[의태어|p:mimetic]]', 'une **manière** (on la voit, on la sent)', '[[반짝반짝]] ✨ · [[살랑살랑]] 🍃 · [[부슬부슬]] 🌧️ · [[싱글벙글]] 😄'],
        ] },
        { type: 'text', text: 'Petits mots : [[야옹|t:miaou]] · [[짹짹|t:cui-cui]] · [[똑똑|t:toc toc]]. Pour les retenir, mime-les en les disant !' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les 5 mots à retenir 🖐️' },
        { type: 'table', head: ['Mot', 'Mime', 'Phrase'], rows: [
          ['🐶 [[멍멍]]', 'aboyer', '[[강아지가 멍멍 짖어요.]]'],
          ['🌧️ [[부슬부슬]]', 'pluie fine avec les doigts', '[[비가 부슬부슬 내려요.]]'],
          ['✨ [[반짝반짝]]', 'mains qui s’ouvrent', '[[별이 반짝반짝 빛나요.]]'],
          ['🍃 [[살랑살랑]]', 'balancer doucement les bras', '[[바람이 살랑살랑 불어요.]]'],
          ['😄 [[싱글벙글]]', 'grand sourire', '[[친구가 싱글벙글 웃어요.]]'],
        ] },
        { type: 'text', text: 'Mots nouveaux : [[강아지|t:chiot]] · [[짖어요|t:il aboie]] · [[내려요|t:ça tombe, ça descend]] ([[비가 와요]] en plus poétique). Et à reconnaître : [[빛나요|t:ça brille]] · [[밤|t:la nuit]].' },
        { type: 'tip', text: 'Le mot imagé se place **juste devant le verbe** : [[비가]] + [[부슬부슬]] + [[내려요]]. Comme un adverbe, comme [[천천히]] !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Illustration sonore : relie le mot à son image.', pairs: [
      ['멍멍', '🐶'],
      ['부슬부슬', '🌧️'],
      ['반짝반짝', '✨'],
      ['살랑살랑', '🍃'],
      ['싱글벙글', '😄'],
    ] } },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'On l’entend ou on le voit ?', buckets: ['🔊 의성어 (son)', '👀 의태어 (manière)'], items: [
      { text: '멍멍', bucket: 0 },
      { text: '야옹', bucket: 0 },
      { text: '짹짹', bucket: 0 },
      { text: '똑똑', bucket: 0 },
      { text: '반짝반짝', bucket: 1 },
      { text: '살랑살랑', bucket: 1 },
      { text: '부슬부슬', bucket: 1 },
      { text: '싱글벙글', bucket: 1 },
    ], explain: 'Un **cri** ou un **bruit** → 의성어. Une **lumière**, un **mouvement**, un **visage** → 의태어.' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Écoute. Quel mime fais-tu ? 🖐️', audio: '비가 부슬부슬 내려요', choices: ['La pluie fine avec les doigts.', 'Le chien qui aboie.', 'Un grand sourire.'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Écoute. Quel mime fais-tu ? 🖐️', audio: '친구가 싱글벙글 웃어요', choices: ['Un grand sourire.', 'Les étoiles qui brillent.', 'Le vent doux.'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le poème à trous : 비 오는 날 ☔' },
        { type: 'text', text: 'Activité de la classe : le titre du poème veut dire « un jour de pluie » — tu reconnais [[오는|p:relative]] (le jour **où** la pluie vient) ! Complète chaque vers avec le bon mot imagé.' },
      ],
    },
    ...RAINY.map(([before, after, choices, translation], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'cloze' as const, prompt: `☔ Vers ${i + 1}/${RAINY.length}`, before, after, choices, answer: 0, translation },
    })),
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Bonus : le lapin qui saute 🐇' },
        { type: 'text', text: 'Un dernier mot imagé que tu verras dans tous les contes : [[깡충깡충|t:en sautillant]]. [[토끼가 깡충깡충 뛰어요.]] Et maintenant, mélange les deux leçons :' },
        { type: 'table', head: ['처럼 + mot imagé', 'Sens'], rows: [
          ['[[나비처럼 살랑살랑 날아요.]]', 'Je vole tout doucement, comme un papillon.'],
          ['[[토끼처럼 깡충깡충 뛰어요.]]', 'Je sautille comme un lapin.'],
          ['[[별처럼 반짝반짝 빛나요.]]', 'Ça scintille comme une étoile.'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'order', translation: 'La pluie tombe tout doucement.', tiles: ['비가', '부슬부슬', '내려요.'], distractors: ['멍멍'] } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🌧️ « La pluie tombe tout doucement. » (avec le mot imagé)', answer: alts('비가 부슬부슬 내려요', '비가 부슬부슬 와요') } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🐶 « Le chiot aboie : ouaf ouaf. »', answer: alts('강아지가 멍멍 짖어요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Illustre ta journée : écris **2 phrases** avec un mot imagé chacune. [[쓰세요!]]', placeholder: '오늘은 비가 부슬부슬 내려요. 제 친구는 싱글벙글 웃어요.', mustInclude: [ONOMA_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '비가 부슬부슬 내려요. 강아지가 멍멍 짖어요. 친구가 우산을 쓰고 싱글벙글 웃어요.', fr: 'La pluie tombe tout doucement. Le chiot aboie. Mon ami, sous son parapluie, sourit jusqu’aux oreilles.', prompt: 'Mise en pratique : lis la strophe complétée, en mimant ! 🖐️' } },
  ],
  interleave: [
    { type: 'type', prompt: '🐦 « Je vole comme un oiseau. »', answer: alts('새처럼 날아요', '새같이 날아요') },
    { type: 'cloze', before: '하늘은 바다', after: ' 파래요.', choices: ['처럼', '같아요'], answer: 0, translation: 'Le ciel est bleu comme la mer.' },
    { type: 'mcq', prompt: '🍭 [[솜사탕]] =', choices: ['barbe à papa', 'nuage', 'bonbon au miel'], answer: 0 },
    { type: 'mcq', prompt: '« Avant le déjeuner, il faut se laver les mains. »', choices: ['점심 전에 손을 씻어야 돼요.', '점심 후에 손을 씻어도 돼요.', '점심 전에 손을 씻으러 가요.'], answer: 0 },
  ],
};

const day114: Lesson = {
  id: 'm6-w3-d4',
  month: 6,
  week: 3,
  day: 114,
  title: 'Atelier : j’écris mon 동시',
  summary: 'Le style des poèmes -다 (= le -다고 de la semaine 19 sans 고 : 파랗다 · 분다 · 웃는다), la trame d’écriture guidée, le poème collectif « 우리 학교 » et ta strophe de 4 vers avec 처럼 et un mot imagé : 하늘은 바다처럼 파랗다 / 바람이 살랑살랑 불어온다.',
  cards: [
    { id: 'w23-ko-plain-da', kind: 'grammar', ko: '분다 · 웃는다 · 파랗다', fr: 'il souffle · il rit · c’est bleu — le style des poèmes et des livres (-다)', note: '📜 Le [[다고|p:report-full]] de la semaine 19 **sans** 고 : action voyelle → ㄴ다 ([[간다]]), consonne → 는다 ([[웃는다]]), ㄹ tombe ([[불다]] → [[분다]]) ; état = la forme du dictionnaire ([[예쁘다]], [[파랗다]]). Règle : [[-다|p:plain]]' },
    { id: 'w23-ko-haneul-padacheoreom', kind: 'phrase', ko: '하늘은 바다처럼 파랗다', fr: 'Le ciel est bleu comme la mer. (style poème)', note: '🌊 = [[하늘은 바다처럼 파래요.]] en style [[-다|p:plain]].' },
    { id: 'w23-ko-si-sseoyo', kind: 'phrase', ko: '시를 써요', fr: 'j’écris un poème', note: '✍️ [[쓰다]] : écrire. [[친구하고 같이 시를 썼어요.|t:j’ai écrit un poème avec un ami]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le style des poèmes : -다 📜' },
        { type: 'tip', text: 'Aujourd’hui, tu deviens poète ! Mais d’abord, un petit secret : beaucoup de poèmes (et de livres) n’utilisent pas [[요]]. Ils parlent en style **-다**.', mood: 'happy' },
        { type: 'text', text: 'Bonne nouvelle : tu connais déjà ce style ! C’est le [[다고 했어요|p:report-full]] de la semaine 19… **sans 고**.' },
        { type: 'table', head: ['', '[[-다고 했어요|p:report-full]]', '📜 Style poème', '= Style 요'], rows: [
          ['action + voyelle', '[[간다고]]', '[[간다]]', '[[가요]]'],
          ['action + consonne', '[[웃는다고]]', '[[웃는다]]', '[[웃어요]]'],
          ['action en ㄹ', '—', '[[분다]] ([[불다]])', '[[불어요]]'],
          ['état', '[[예쁘다고]]', '[[예쁘다]]', '[[예뻐요]]'],
          ['état', '—', '[[파랗다]]', '[[파래요]]'],
        ] },
        { type: 'text', text: 'Le ㄹ tombe devant ㄴ, comme dans [[노는|p:relative]] : [[불다]] → [[분다]], [[날다]] → [[난다]]. Pour un **état**, c’est simplement la forme du dictionnaire.' },
        { type: 'tip', text: 'Pour ton poème, les deux styles sont permis : [[파래요]] ou [[파랗다]]. Le style **-다** sonne plus « poème » ; le style **요** est plus doux, comme une chanson.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Passe en style poème : touche une case vide.', head: ['Style 요', '📜 Style -다'], rows: [
      ['[[가요]]', blank('간다')],
      ['[[웃어요]]', blank('웃는다')],
      ['[[내려요]]', blank('내린다')],
      ['[[불어요]]', blank('분다')],
      ['[[예뻐요]]', blank('예쁘다')],
    ], explain: 'Action : ㄴ다 / 는다 (ㄹ tombe : [[분다]]) · état : forme du dictionnaire.' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '📜 [[바람이 살랑살랑 분다.]] en style 요 :', choices: ['바람이 살랑살랑 불어요.', '바람이 살랑살랑 분어요.', '바람이 살랑살랑 불다요.'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La trame du poète ✍️' },
        { type: 'text', text: 'Méthode : une trame d’écriture guidée. Quatre vers, quatre cases à remplir.' },
        { type: 'table', head: ['Vers', 'Trame', 'Exemple'], rows: [
          ['1️⃣ une comparaison', '[nom]은/는 [nom]**처럼** [adjectif]', '[[하늘은 바다처럼 파랗다]]'],
          ['2️⃣ un mot imagé', '[nom]이/가 [mot imagé] [verbe]', '[[바람이 살랑살랑 불어온다]]'],
          ['3️⃣ une autre image', '[nom]은/는 [nom] **같다** / **같아요**', '[[구름은 솜사탕 같다]]'],
          ['4️⃣ une émotion', '[[정말]] … [[네요|p:discover]] !', '[[봄이 정말 예쁘네요!]]'],
        ] },
        { type: 'tip', text: 'Le vers 2 de l’exemple vient du manuel : [[불어온다|t:souffle jusqu’ici]] = [[불어]] + [[온다]] (« venir en soufflant »). Tu peux écrire plus simplement [[분다]] ou [[불어요]] !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'order', prompt: 'Vers 1 de l’exemple :', translation: 'Le ciel est bleu comme la mer.', tiles: ['하늘은', '바다처럼', '파랗다'], distractors: ['같다'] } },
    { kind: 'practice', exercise: { type: 'order', prompt: 'Vers 2 de l’exemple :', translation: 'Le vent souffle tout doucement jusqu’ici.', tiles: ['바람이', '살랑살랑', '불어온다'], distractors: ['반짝반짝'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le poème collectif de la classe 🏫' },
        { type: 'text', text: 'Activité de la classe : en binôme, les élèves écrivent un poème sur l’école, recopié sur un beau papier décoré pour l’**exposition de fin d’année**. Voici celui de Nabi et Jihoon :' },
        { type: 'table', head: ['[[우리 학교|t:notre école]]', ''], rows: [
          ['[[창문 밖에 해님이]]', 'Dehors, derrière la fenêtre, le soleil'],
          ['[[반짝반짝 웃는다.]]', 'sourit en brillant.'],
          ['[[교실 안에 친구들도]]', 'Dans la classe, les copains aussi'],
          ['[[싱글벙글 웃는다.]]', 'sourient jusqu’aux oreilles.'],
          ['[[쉬는 시간에 우리는]]', 'À la récré, nous'],
          ['[[나비처럼 뛰어간다.]]', 'courons comme des papillons.'],
          ['[[운동장에 바람이]]', 'Dans la cour, le vent'],
          ['[[살랑살랑 분다.]]', 'souffle tout doucement.'],
        ] },
        { type: 'tip', text: 'Petits mots : [[안에|t:à l’intérieur]] (≠ [[안|p:neg]] « ne… pas ») · [[도|t:aussi]]. Vois-tu la **répétition** [[웃는다]] / [[웃는다]], la **comparaison** [[나비처럼]] et les **mots imagés** ?', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Dans « 우리 학교 », où est la comparaison ?', choices: ['나비처럼 뛰어간다', '반짝반짝 웃는다', '살랑살랑 분다'], answer: 0, explain: '**처럼** = comparaison. Les deux autres sont des mots imagés.' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quel mot est **répété** à la fin des vers 2 et 4 ?', choices: ['웃는다', '분다', '뛰어간다'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '📜 Complète le vers en style poème.', before: '운동장에 바람이 살랑살랑 ', after: '.', choices: ['분다', '불다', '분는다'], answer: 0, explain: '[[불다]] : le ㄹ tombe devant ㄴ → [[분다]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'À toi d’écrire ! 🖋️' },
        { type: 'tip', text: 'Objectif : **4 vers** en autonomie, avec au moins **un 처럼** (ou 같아요) et **un mot imagé**. Thème au choix : l’école 🏫 ou la nature 🌸. Style 요 ou style -다, comme tu veux — mais garde le même dans tout le poème !', mood: 'encourage' },
        { type: 'table', head: ['🧺 Banque de mots'], rows: [
          ['🌌 [[하늘]] · [[구름]] · [[해]] · [[별]] · [[바람]] · [[꽃]] · [[나무]] · [[바다]] · [[봄]]'],
          ['🐾 [[나비]] · [[새]] · [[토끼]] · [[강아지]] · [[솜사탕]] · [[친구들]] · [[운동장]] · [[교실]]'],
          ['✨ [[반짝반짝]] · [[살랑살랑]] · [[부슬부슬]] · [[멍멍]] · [[싱글벙글]] · [[깡충깡충]]'],
          ['🎨 [[예쁘다]] · [[파랗다]] · [[하얀]] · [[노란]] · [[날다]] · [[웃다]] · [[불다]] · [[내리다]] · [[뛰어가다]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ma strophe 1/2 — **vers 1 et 2** : une comparaison avec **처럼**, puis un mot imagé. [[쓰세요!]]', placeholder: '하늘은 바다처럼 파랗다. 바람이 살랑살랑 분다.', mustInclude: ['처럼|같이', ONOMA_ANY] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ma strophe 2/2 — **vers 3 et 4** : une autre image (**같아요** / **같다**) et une émotion (**네요**).', placeholder: '구름은 솜사탕 같다. 봄이 정말 예쁘네요!', mustInclude: [LIKE_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '하늘은 바다처럼 파랗다. 바람이 살랑살랑 불어온다. 구름은 솜사탕 같다. 봄이 정말 예쁘네요!', fr: 'Le ciel est bleu comme la mer. Le vent souffle tout doucement jusqu’ici. Le nuage est comme de la barbe à papa. Que le printemps est beau !', prompt: 'Mise en pratique : lis la strophe modèle, puis relis la tienne à voix haute 📜' } },
  ],
  interleave: [
    { type: 'type', prompt: '🌧️ « La pluie tombe tout doucement. »', answer: alts('비가 부슬부슬 내려요', '비가 부슬부슬 와요') },
    { type: 'mcq', prompt: '🔊 [[멍멍]] est…', choices: ['un 의성어 (un son)', 'un 의태어 (une manière)'], answer: 0 },
    { type: 'mcq', prompt: '😄 [[싱글벙글]] =', choices: ['avec un grand sourire', 'en sautillant', 'tout doucement'], answer: 0 },
    { type: 'mcq', prompt: '« Minsu a dit qu’il pleuvrait demain. »', choices: ['민수가 내일 비가 온다고 했어요.', '민수가 내일 비가 온냐고 했어요.', '민수가 내일 비가 와야 했어요.'], answer: 0 },
  ],
};

const DICTATION = ['반짝반짝 해님은', '꽃처럼 예뻐요', '살랑살랑 바람은', '새처럼 날아요'];

const DOG_POEM: [string, string][] = [
  ['우리 강아지는 구름 같아요.', 'Mon chiot est comme un nuage.'],
  ['멍멍 멍멍 노래해요.', 'Ouaf ouaf, ouaf ouaf, il chante.'],
  ['토끼처럼 깡충깡충 뛰어요.', 'Il sautille comme un lapin.'],
  ['비가 부슬부슬 내리면', 'Quand la pluie tombe tout doucement,'],
  ['창문 밖을 봐요.', 'il regarde par la fenêtre.'],
  ['해님아, 빨리 와요!', 'Monsieur Soleil, viens vite !'],
];

const day115: Lesson = {
  id: 'm6-w3-d5',
  month: 6,
  week: 3,
  day: 115,
  title: 'Bilan & récitation : 동시 읊기',
  summary: 'Récitation de ton poème avec support visuel, dictée poétique (4 vers), analyse des figures de style d’un poème de 6 vers, petite évaluation n°23 (A 처럼, B mots imagés, C récitation) et une histoire entièrement en coréen.',
  cards: [],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le bilan de la semaine 23 📋' },
        { type: 'tip', text: 'Aujourd’hui, c’est le grand jour de la **récitation** : [[동시 읊기|t:la récitation de poèmes]] ! Avant, révisons nos outils de poète.', mood: 'encourage' },
        { type: 'table', head: ['Outil', 'Forme', 'Exemple'], rows: [
          ['🌸 comparaison', '[[nom + 처럼|p:like]]', '[[해는 꽃처럼 예뻐요.]]'],
          ['☁️ ressemblance', '[[nom + 같아요|p:like]]', '[[구름은 솜사탕 같아요.]]'],
          ['🔊 son', '[[의성어|p:mimetic]]', '[[강아지가 멍멍 짖어요.]]'],
          ['👀 manière', '[[의태어|p:mimetic]]', '[[비가 부슬부슬 내려요.]]'],
          ['📜 style poème', '[[-다|p:plain]]', '[[바람이 살랑살랑 분다.]]'],
        ] },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Récitation guidée 🎤' },
        { type: 'text', text: 'Activité de la classe : chaque élève récite son poème devant la classe. Ton support visuel : une image par vers, pour ne rien oublier.' },
        { type: 'table', head: ['Image', 'Vers'], rows: SPRING.map(([ko], i) => [['🍃', '🌸', '☀️', '🌳', '🦋', '🌼', '🌌', '😍'][i], `[[${ko}]]`]) },
        { type: 'tip', text: 'Rappel : pause ⏸ après le mot imagé, pause plus longue en fin de vers, et souris en disant [[예쁘네요]] !', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'read', ko: SPRING.slice(0, 4).map(([ko]) => ko).join(' '), fr: SPRING.slice(0, 4).map(([, fr]) => fr).join(' '), prompt: 'Récitation 1/2 — la première strophe de « 봄 », avec les images.' } },
    { kind: 'practice', exercise: { type: 'read', ko: SPRING.slice(4).map(([ko]) => ko).join(' '), fr: SPRING.slice(4).map(([, fr]) => fr).join(' '), prompt: 'Récitation 2/2 — la deuxième strophe.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Dictée poétique ✍️' },
        { type: 'text', text: 'Épreuve de la classe : quatre vers avec des mots imagés et des comparaisons. [[들으세요!]] Puis [[쓰세요!]]' },
      ],
    },
    ...DICTATION.map((s, i) => ({
      kind: 'practice' as const,
      exercise: { type: 'type' as const, prompt: `Dictée — vers ${i + 1}/${DICTATION.length}`, audio: s, answer: alts(s) },
    })),
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Analyse de texte : 우리 강아지 🐶' },
        { type: 'text', text: 'Épreuve de la classe : relève les figures de style de ce poème de six vers.' },
        { type: 'table', head: ['', '[[우리 강아지|t:mon chiot]]', ''], rows: DOG_POEM.map(([ko, fr], i) => [`${i + 1}`, `[[${ko}]]`, fr]) },
        { type: 'tip', text: 'Un procédé de plus : la **personnification** — on parle à une chose comme à une personne. Au vers 6, on appelle le soleil avec [[아|t:ô…]], comme [[나비야]] !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quel vers contient une comparaison avec **처럼** ?', choices: ['Vers 3', 'Vers 1', 'Vers 5'], answer: 0, explain: '[[토끼처럼 깡충깡충 뛰어요.]] (le vers 1 utilise [[같아요]].)' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Au vers 1, à quoi le chiot est-il comparé ?', choices: ['À un nuage.', 'À un lapin.', 'Au soleil.'], answer: 0, explain: '[[우리 강아지는 구름 같아요.]] — blanc et doux !' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quelle figure trouve-t-on au vers 2 ?', choices: ['Une répétition d’un 의성어', 'Une comparaison', 'Une rime en -다'], answer: 0, explain: '[[멍멍 멍멍]] : un son, répété.' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que fait le chiot quand il pleut ?', choices: ['Il regarde par la fenêtre.', 'Il sautille dehors.', 'Il chante sous la pluie.'], answer: 0, explain: '[[비가 부슬부슬 내리면]] [[창문 밖을 봐요.]]' } },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Relève les figures : comparaison ou mot imagé ?', buckets: ['🌸 comparaison', '✨ mot imagé'], items: [
      { text: '구름 같아요', bucket: 0 },
      { text: '토끼처럼', bucket: 0 },
      { text: '멍멍 멍멍', bucket: 1 },
      { text: '깡충깡충', bucket: 1 },
      { text: '부슬부슬', bucket: 1 },
    ] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Petite évaluation n°23' },
        { type: 'table', head: ['Partie', 'Contenu'], rows: [
          ['A', 'Comparaisons poétiques (écrit)'],
          ['B', 'Onomatopées (relier)'],
          ['C', 'Récitation orale (2 min)'],
        ] },
        { type: 'tip', text: '**A — Comparaisons.** [[빈칸에 쓰세요|t:écris dans la case vide]] : complète avec **처럼**.', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'grid', prompt: '**A** — Nom + 처럼', head: ['Nom', '+ 처럼', 'Sens'], rows: [
      ['[[구름]]', blank('구름처럼'), 'comme un nuage'],
      ['[[새]]', blank('새처럼'), 'comme un oiseau'],
      ['[[별]]', blank('별처럼'), 'comme une étoile'],
      ['[[솜사탕]]', blank('솜사탕처럼'), 'comme de la barbe à papa'],
    ], explain: 'Nom + **처럼**, sans rien changer.' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '**A** — « Le nuage blanc vole comme un oiseau. »', before: '하얀 구름이 ', after: ' 날아요.', choices: ['새처럼', '새 같아요', '새하고'], answer: 0 } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**B — Onomatopées.** Relie chaque mot imagé au bon dessin.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'match', prompt: '**B** — Relie le mot au dessin.', pairs: [
      ['반짝반짝', '✨ ça brille'],
      ['부슬부슬', '🌧️ pluie fine'],
      ['싱글벙글', '😄 tout souriant'],
    ] } },
    { kind: 'practice', exercise: { type: 'match', prompt: '**B · bonus** — Et ceux-là ?', pairs: [
      ['멍멍', '🐶 le chien aboie'],
      ['살랑살랑', '🍃 brise légère'],
      ['깡충깡충', '🐇 en sautillant'],
    ] } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**C — Récitation orale.** Recopie ton poème de 4 vers (celui de jeudi, ou un nouveau !), puis récite-le à voix haute avec la bonne intonation.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'write', prompt: '**C · 1/2** — Mon poème de 4 vers, avec **처럼** et un mot imagé.', placeholder: '하늘은 바다처럼 파랗다. 바람이 살랑살랑 분다. 구름은 솜사탕 같다. 봄이 정말 예쁘네요!', mustInclude: [LIKE_ANY, ONOMA_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '창문 밖에 해님이 반짝반짝 웃는다. 교실 안에 친구들도 싱글벙글 웃는다. 쉬는 시간에 우리는 나비처럼 뛰어간다. 운동장에 바람이 살랑살랑 분다.', fr: 'Dehors, le soleil sourit en brillant. Dans la classe, les copains aussi sourient jusqu’aux oreilles. À la récré, nous courons comme des papillons. Dans la cour, le vent souffle tout doucement.', prompt: '**C · 2/2** — Récite ton poème à voix haute (ou « 우리 학교 »), puis écoute le modèle.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le poème de Nabi 📖' },
        { type: 'text', text: 'Une histoire **entièrement en coréen**. Touche une bulle pour l’entendre.' },
        { type: 'dialog', lines: [
          { who: '📖', ko: '금요일이에요. 오늘 교실에서 동시를 읽어요.' },
          { who: '선생님', ko: '여러분, 오늘은 여러분이 쓴 시를 친구들 앞에서 읽을 거예요.' },
          { who: '지훈', ko: '제 시는 강아지 시예요. “우리 강아지는 구름 같아요. 멍멍 멍멍!”' },
          { who: '📖', ko: '친구들이 싱글벙글 웃었어요.' },
          { who: '민수', ko: '제 시는 비 시예요. “비가 부슬부슬 내려요. 우산 위에 노래해요.”' },
          { who: '📖', ko: '이제 나비 차례예요. 나비는 조금 떨렸어요.' },
          { who: '나비', ko: '“작은 애벌레는 거북이처럼 천천히 걸었어요.”' },
          { who: '나비', ko: '“그런데 지금은 새처럼 하늘을 날아요.”' },
          { who: '나비', ko: '“반짝반짝 해님 아래에서 살랑살랑 춤을 춰요!”' },
          { who: '📖', ko: '친구들이 박수를 쳤어요.' },
          { who: '선생님', ko: '와, 정말 예쁜 시네요! 나비야, 다음 주가 마지막 주예요.' },
          { who: '나비', ko: '네! 다음 주에도 열심히 공부할 거예요. 🦋' },
        ] },
        { type: 'tip', text: 'Petits mots : [[앞에서|t:devant]] · [[차례|t:le tour (de quelqu’un)]] · [[떨렸어요|t:avait le trac]] · [[애벌레|t:chenille]] · [[춤을 춰요|t:je danse]] · [[박수를 쳤어요|t:ont applaudi]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'De quoi parle le poème de Jihoon ?', choices: ['De son chiot.', 'De la pluie.', 'D’un papillon.'], answer: 0, explain: '[[제 시는 강아지 시예요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Dans son poème, comment marchait la petite chenille ?', choices: ['Lentement, comme une tortue.', 'Vite, comme un lapin.', 'En sautillant.'], answer: 0, explain: '[[작은 애벌레는 거북이처럼 천천히 걸었어요.]]' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Bilan attendu ✅' },
        { type: 'table', head: ['À la fin de la semaine 23, tu…'], rows: [
          ['📜 lis et récites un [[동시]] avec son rythme et ses pauses'],
          ['🌸 fais des comparaisons : [[해는 꽃처럼 예뻐요.]] · [[구름은 솜사탕 같아요.]]'],
          ['✨ utilises les mots imagés courants : [[반짝반짝]], [[살랑살랑]], [[부슬부슬]], [[멍멍]], [[싱글벙글]]'],
          ['🖋️ écris ton propre poème de 4 vers'],
        ] },
        { type: 'tip', text: 'Plus qu’**une** semaine : la semaine 24, c’est le **Grand Bilan Final** des 6 mois ! [[다음 주에도 나비처럼 날아요!]] 🦋', mood: 'happy' },
      ],
    },
  ],
  interleave: [
    { type: 'type', prompt: '☀️ « Le soleil est joli comme une fleur. »', answer: alts('해는 꽃처럼 예뻐요', '해는 꽃같이 예뻐요') },
    { type: 'mcq', prompt: '📜 [[웃는다]] en style 요 :', choices: ['웃어요', '웃는어요', '웃다요'], answer: 0 },
    { type: 'cloze', before: '강아지가 ', after: ' 짖어요.', choices: ['멍멍', '반짝반짝'], answer: 0, translation: 'Le chiot aboie : ouaf ouaf.' },
    { type: 'mcq', prompt: '⚠️ [[안 가도 돼요]] =', choices: ['pas besoin d’y aller', 'il ne faut pas y aller', 'il faut y aller'], answer: 0 },
  ],
};

export const m6w3: Lesson[] = [day111, day112, day113, day114, day115];
