import type { GridBlank, Lesson } from '../types';

const COLLAPSE: [RegExp, string][] = [
  [/게 (해|했)/g, '게$1'],
  [/ 것 같/g, '것 같'],
  [/것 같/g, '것같'],
  [/고 (해요|했어요|물어)/g, '고$1'],
  [/물어보/g, '물어 보'],
  [/ 거예요/g, '거예요'],
  [/보여 주/g, '보여주'],
];
const alts = (...xs: string[]): string[] => {
  const out = new Set(xs);
  for (const [re, to] of COLLAPSE) for (const s of [...out]) out.add(s.replace(re, to));
  for (const s of [...out]) out.add(s.replace(/[.,!?] /g, ' '));
  for (const s of [...out]) out.add(s.replace(/[.!?]$/, ''));
  return [...out];
};
const blank = (...s: string[]): GridBlank => ({ answer: alts(...s) });

const PASSIVE_ANY = '보여요|들려요|열려요|보였어요|들렸어요|열렸어요|보이|들리|열리';
const MAKE_ANY = '게 해요|게해요|게 했어요|게했어요|게 하';
const WOW_ANY = '네요|군요';
const SEEM_ANY = '것 같아요|것같아요|거 같아요|거같아요';
const SAID_ANY = '다고 했어요|다고했어요|다고 해요|다고해요|라고 했어요|라고했어요';
const WHEN_ANY = '어제|지난|주말|오늘|아침|오후';
const REL_ANY = ['하는 ', '좋아하는', '읽는 ', '보는 ', '먹는 ', '노는 ', '있는 ', '한 ', '본 ', '간 ', '산 ', '만난 ', '먹은 ', '읽은 ', '들은 ', '할 ', '볼 ', '갈 ', '먹을 ', '읽을 ', '큰 ', '작은 ', '좋은 ', '예쁜 '].join('|');

const day96: Lesson = {
  id: 'm5-w4-d1',
  month: 5,
  week: 4,
  day: 96,
  title: 'Ça se voit, ça s’entend : 보여요 · 들려요',
  summary: 'Le passif simple : 바다를 봐요 (je regarde) → 바다가 보여요 (la mer se voit). 소리가 들려요, 창문이 열려요, 칠판이 잘 안 보여요. Nouveaux : 소리, 창문, 문.',
  cards: [
    { id: 'w20-ko-boyeoyo', kind: 'vocab', ko: '보여요', fr: 'ça se voit, on voit (보이다)', note: '👀 [[보다]] + 이 → [[보이다|p:passive]] → [[보여요]] (comme [[마셔요]]). [[바다를 봐요]] (je regarde la mer) → [[바다가 보여요]] (la mer se voit / je vois la mer).' },
    { id: 'w20-ko-deullyeoyo', kind: 'vocab', ko: '들려요', fr: 'ça s’entend, on entend (들리다)', note: '👂 [[듣다]] + 리 → [[들리다|p:passive]] → [[들려요]]. [[음악을 들어요]] (j’écoute) → [[음악이 들려요]] (on entend de la musique).' },
    { id: 'w20-ko-yeollyeoyo', kind: 'vocab', ko: '열어요 · 열려요', fr: 'j’ouvre · ça s’ouvre (열다 · 열리다)', note: '🚪 [[창문을 열어요]] (j’ouvre la fenêtre) → [[창문이 열려요]] (la fenêtre s’ouvre). Passé : [[열렸어요]].' },
    { id: 'w20-ko-sori', kind: 'vocab', ko: '소리', fr: 'son, bruit', note: '🔔 [[소리가 들려요.]] — [[웃는 소리]] (des rires), [[음악 소리]].' },
    { id: 'w20-ko-changmun', kind: 'vocab', ko: '창문 · 문', fr: 'fenêtre · porte', note: '🪟 [[창문]] = fenêtre · 🚪 [[문]] = porte. [[창문을 열어요]] · [[문이 열려요]].' },
    { id: 'w20-ko-soriga-deullyeoyo', kind: 'phrase', ko: '소리가 들려요', fr: 'J’entends un bruit. (un bruit s’entend)', note: '👂 Pas de [[저는]], pas de [[를]] : le bruit est le **sujet** → [[가|p:subject]].' },
    { id: 'w20-ko-chilpan', kind: 'phrase', ko: '칠판이 잘 안 보여요', fr: 'Je ne vois pas bien le tableau.', note: '👓 [[칠판|t:tableau]] · [[잘|t:bien]] · [[안|p:neg]]. Aussi : [[잘 안 들려요]] (je n’entends pas bien) → [[다시 말해 주세요]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Celui qui fait, ce qui arrive 👀' },
        { type: 'tip', text: 'Jusqu’ici, le sujet **faisait** l’action : [[저는 바다를 봐요]]. Mais souvent, on dit simplement qu’une chose **se voit**, **s’entend**, **s’ouvre**… C’est le **passif**.', mood: 'happy' },
        { type: 'table', head: ['', '🏃 Je fais (actif)', '✨ Ça arrive (passif)'], rows: [
          ['👀', '[[바다를 봐요.]] je regarde la mer', '[[바다가 보여요.]] la mer se voit'],
          ['👂', '[[음악을 들어요.]] j’écoute de la musique', '[[음악이 들려요.]] on entend de la musique'],
          ['🚪', '[[창문을 열어요.]] j’ouvre la fenêtre', '[[창문이 열려요.]] la fenêtre s’ouvre'],
        ] },
        { type: 'text', text: 'Mots nouveaux : [[창문|t:fenêtre]] · [[문|t:porte]] · [[소리|t:son, bruit]] · [[열어요|t:j’ouvre]] (열다).' },
        { type: 'breakdown', segments: [
          { ko: '소리', role: 'subject', gloss: 'un bruit', particle: { ko: '가', key: 'subject' } },
          { ko: '들려요', role: 'verb', gloss: 's’entend' },
        ], translation: 'J’entends un bruit.', note: 'En français on dit « **j’**entends », mais en coréen c’est le **bruit** qui est le sujet. Pas besoin de [[저는]].' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La fabrique du passif 🔧' },
        { type: 'text', text: 'On glisse une petite syllabe dans le verbe : **이, 히, 리** ou **기**. Il n’y a pas de règle simple pour savoir laquelle : on apprend chaque verbe. Puis on conjugue normalement :' },
        { type: 'table', head: ['Actif', '+', 'Passif', 'Poli'], rows: [
          ['[[보다]]', '이', '[[보이다|p:passive]]', '[[보여요]] (comme [[마셔요]])'],
          ['[[듣다]]', '리', '[[들리다]]', '[[들려요]]'],
          ['[[열다]]', '리', '[[열리다]]', '[[열려요]]'],
        ] },
        { type: 'tip', text: '🔄 Le grand changement : l’objet [[을/를|p:object]] devient sujet [[이/가|p:subject]]. [[창문을 열어요]] → [[창문이 열려요]]. Au passé : [[보였어요]] · [[들렸어요]] · [[열렸어요]]. Dans les livres, tu verras aussi **히** : [[문이 닫혀요|t:la porte se ferme]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Je fais l’action, ou ça arrive tout seul ?', buckets: ['🏃 actif', '✨ passif'], items: [
      { text: '바다를 봐요', bucket: 0 }, { text: '음악을 들어요', bucket: 0 }, { text: '창문을 열어요', bucket: 0 }, { text: '문을 열었어요', bucket: 0 },
      { text: '바다가 보여요', bucket: 1 }, { text: '음악이 들려요', bucket: 1 }, { text: '창문이 열려요', bucket: 1 }, { text: '문이 열렸어요', bucket: 1 },
    ], explain: 'Passif = **이/가** + [[보여요]] · [[들려요]] · [[열려요]].' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '👂 « J’entends un bruit. »', choices: ['소리가 들려요.', '소리를 들려요.', '소리가 들어요.'], answer: 0, explain: 'Avec le passif, le bruit est le **sujet** : [[소리가 들려요]].' } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Passe au passif. Touche une case vide.', head: ['🏃 Actif', '✨ Passif (présent)', '✨ Passif (passé)'], rows: [
      ['[[보다]]', blank('보여요'), blank('보였어요')],
      ['[[듣다]]', blank('들려요'), blank('들렸어요')],
      ['[[열다]]', blank('열려요'), blank('열렸어요')],
    ], explain: '[[보이다]] → [[보여요]] · [[들리다]] → [[들려요]] · [[열리다]] → [[열려요]] ; passé ㅕ + ㅆ → [[보였어요]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le conte du manuel 📗' },
        { type: 'text', text: 'Activité de la classe : on lit un conte et on cherche les verbes au passif. Touche une bulle pour l’entendre.' },
        { type: 'dialog', lines: [
          { who: '📖', ko: '밤이에요. 토끼가 집에서 자고 있어요.' },
          { who: '📖', ko: '그런데 밖에서 이상한 소리가 들려요.' },
          { who: '토끼', ko: '이게 무슨 소리예요?' },
          { who: '📖', ko: '그때 창문이 열려요! 창문 밖에 작은 거북이가 보여요.' },
          { who: '거북이', ko: '토끼야, 미안해요. 비가 와서 추워요.' },
          { who: '토끼', ko: '그래요? 빨리 들어오세요!' },
        ] },
        { type: 'tip', text: 'Petits mots : [[밖|t:dehors]] · [[이상한|t:étrange]] · [[그때|t:à ce moment-là]] · [[들어오세요|t:entrez]]. Dans la classe, si tu ne vois pas bien : [[칠판이 잘 안 보여요.]] Et si tu n’entends pas bien : [[잘 안 들려요.]] ([[잘|t:bien]])', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’entend le lapin ?', choices: ['Un bruit étrange dehors.', 'De la musique.', 'Ses amis qui rient.'], answer: 0, explain: '[[밖에서 이상한 소리가 들려요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que voit-on derrière la fenêtre ?', choices: ['Une petite tortue.', 'La pluie seulement.', 'La mer.'], answer: 0, explain: '[[창문 밖에 작은 거북이가 보여요.]]' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🪟 « La fenêtre s’ouvre. »', before: '창문이 ', after: '.', choices: ['열려요', '열어요', '열렸어요'], answer: 0, explain: 'Elle s’ouvre (toute seule) → passif [[열려요]]. [[열어요]] = j’ouvre.' } },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie la phrase à la situation.', pairs: [
      ['칠판이 잘 안 보여요', '👓 au fond de la classe'],
      ['잘 안 들려요', '🔇 le professeur parle bas'],
      ['바다가 보여요', '🌊 depuis la fenêtre du train'],
      ['음악 소리가 들려요', '🎵 la salle de musique à côté'],
    ] } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Je ne vois pas bien le tableau.', tiles: ['칠판이', '잘', '안', '보여요.'], distractors: ['칠판을', '봐요.'] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '창문 밖에 바다가 보여요', choices: ['창문 밖에 바다가 보여요', '창문 밖에 바다를 봐요', '창문이 열려요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '👂 « J’entends un bruit. »', answer: alts('소리가 들려요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ferme les yeux, puis ouvre-les : qu’est-ce qui **s’entend** et **se voit** autour de toi ? Utilise [[들려요]] ou [[보여요]]. [[쓰세요!]]', placeholder: '음악 소리가 들려요. 창문 밖에 나무가 보여요.', mustInclude: [PASSIVE_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '소리가 들려요. 창문이 열려요. 창문 밖에 거북이가 보여요!', fr: 'J’entends un bruit. La fenêtre s’ouvre. Derrière la fenêtre, on voit une tortue !', prompt: 'Mise en pratique : raconte-le à voix haute 👂' } },
  ],
  interleave: [
    { type: 'type', prompt: '🤔 « Il me semble que ce livre est intéressant. »', answer: alts('이 책이 재미있는 것 같아요') },
    { type: 'cloze', before: '민수가 내일 비가 ', after: ' 했어요.', choices: ['온다고', '오냐고'], answer: 0, translation: 'Minsu a dit qu’il pleuvrait demain.' },
    { type: 'mcq', prompt: '« le film que j’ai vu hier »', choices: ['어제 본 영화', '어제 보는 영화', '어제 볼 영화'], answer: 0 },
    { type: 'mcq', prompt: '📏 [[짧아요]] =', choices: ['c’est court', 'c’est long', 'c’est vrai'], answer: 0 },
  ],
};

const day97: Lesson = {
  id: 'm5-w4-d2',
  month: 5,
  week: 4,
  day: 97,
  title: 'Faire faire : 읽게 했어요',
  summary: 'Le causatif : 선생님이 학생들에게 책을 읽게 했어요. Radical + 게 하다, sans changement. Nouveaux : 에게, 들 (pluriel), 도우미, 보여 주세요.',
  cards: [
    { id: 'w20-ko-ge-haeyo', kind: 'grammar', ko: '읽게 해요 · 읽게 했어요', fr: 'faire lire, j’ai fait lire — causatif : radical + 게 하다', note: '👉 [personne]**에게** + radical + **게 해요** : [[친구에게 책을 읽게 해요]]. Aucun changement : [[가게]], [[먹게]], [[놀게]], [[듣게]]. Règle : [[게 하다|p:make-do]]' },
    { id: 'w20-ko-ege', kind: 'vocab', ko: '에게', fr: 'à (quelqu’un) — écrit', note: '✍️ = [[한테]] à l’oral. [[학생들에게]], [[친구에게]]. Seulement pour des personnes ou des animaux (lieu → [[에|p:place]]).' },
    { id: 'w20-ko-ilge-haesseoyo', kind: 'phrase', ko: '선생님이 학생들에게 책을 읽게 했어요', fr: 'Le professeur a fait lire le livre aux élèves.', note: '👩‍🏫 → 🧒🧒 → 📖. Le professeur donne l’ordre, les élèves lisent.' },
    { id: 'w20-ko-deul', kind: 'vocab', ko: '학생들 · 친구들', fr: 'les élèves · les amis — 들 = pluriel', note: '👥 Comme [[아이들]]. Facultatif en coréen : [[학생]] peut déjà vouloir dire « des élèves ».' },
    { id: 'w20-ko-doumi', kind: 'vocab', ko: '도우미', fr: 'responsable, assistant (de classe)', note: '🧑‍🏫 Le responsable d’un atelier. [[도우미는 친구들에게 책을 읽게 해요.]] Même famille que [[도와요]].' },
    { id: 'w20-ko-boyeo-juseyo', kind: 'phrase', ko: '보여 주세요', fr: 'Montrez-moi, montre-moi.', note: '🖐️ [[보이다]] veut aussi dire « faire voir » → [[보여 주세요|p:request]]. [[공책을 보여 주세요.]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Faire faire 👉' },
        { type: 'tip', text: 'Le professeur ne lit pas lui-même : il **fait lire** les élèves. Pour dire « faire faire », on colle **게** au radical, puis [[해요]].', mood: 'happy' },
        { type: 'text', text: 'Le schéma fléché :' },
        { type: 'table', head: ['👩‍🏫 Qui donne l’ordre', '→ à qui', '→ quoi faire', ''], rows: [
          ['[[선생님이]]', '[[학생들에게]]', '[[책을 읽게]]', '[[했어요.]]'],
          ['[[반장이]]', '[[친구들에게]]', '[[조용히 하게]]', '[[해요.]]'],
        ] },
        { type: 'text', text: 'Mots nouveaux : [[에게|t:à (quelqu’un)]] = [[한테]] à l’écrit · **들** = pluriel : [[학생들|t:les élèves]], [[친구들|t:les amis]] (comme [[아이들]]).' },
        { type: 'breakdown', segments: [
          { ko: '선생님', role: 'subject', gloss: 'le professeur', particle: { ko: '이', key: 'subject' } },
          { ko: '학생들에게', role: 'other', gloss: 'aux élèves' },
          { ko: '책', role: 'object', gloss: 'le livre', particle: { ko: '을', key: 'object' } },
          { ko: '읽게 했어요', role: 'verb', gloss: 'a fait lire' },
        ], translation: 'Le professeur a fait lire le livre aux élèves.' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La règle : radical + 게 🔑' },
        { type: 'table', head: ['Verbe', '+ 게 해요', '+ 게 했어요'], rows: [
          ['[[가다]]', '[[가게 해요]]', '[[가게 했어요]]'],
          ['[[먹다]]', '[[먹게 해요]]', '[[먹게 했어요]]'],
          ['[[놀다]]', '[[놀게 해요]]', '[[놀게 했어요]]'],
          ['[[듣다]]', '[[듣게 해요]]', '[[듣게 했어요]]'],
        ] },
        { type: 'text', text: 'Aucun piège : pas de 으, le ㄹ reste, le ㄷ reste. Le temps se met **seulement** sur [[해요]] → [[했어요]].' },
        { type: 'tip', text: '⚠️ Ne confonds pas : [[선생님이 읽으래요|p:report-cmd]] = le professeur **dit** de lire (on rapporte ses mots) · [[선생님이 읽게 했어요|p:make-do]] = le professeur **a fait** lire (les élèves ont lu). Avec un verbe sans objet, on entend aussi [[을/를|p:object]] : [[나비가 친구들을 웃게 해요]] (Nabi fait rire ses amis).', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '👩‍🏫 « Le professeur a fait lire le livre aux élèves. »', choices: ['선생님이 학생들에게 책을 읽게 했어요.', '선생님이 학생들에게 책을 읽었어요.', '선생님이 학생들에게 책을 읽으래요.'], answer: 0, explain: 'Faire faire → radical + **게 했어요**.' } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Fais faire ! Touche une case vide.', head: ['Verbe', '+ 게 했어요'], rows: [
      ['[[쓰다]]', blank('쓰게 했어요')],
      ['[[읽다]]', blank('읽게 했어요')],
      ['[[놀다]]', blank('놀게 했어요')],
      ['[[노래하다]]', blank('노래하게 했어요')],
    ], explain: 'Radical + **게 했어요**, sans aucun changement : [[놀게]] (le ㄹ reste).' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les règles des responsables 📋' },
        { type: 'text', text: 'Activité de la classe : chaque atelier a son [[도우미|t:responsable]]. On écrit son rôle au mur :' },
        { type: 'table', head: ['🧑‍🏫 Responsable', 'Son rôle'], rows: [
          ['📚 [[책 도우미]]', '[[책 도우미는 친구들에게 매일 책을 읽게 해요.]]'],
          ['🎵 [[음악 도우미]]', '[[음악 도우미는 친구들에게 노래를 부르게 해요.]]'],
          ['⚽ [[체육 도우미]]', '[[체육 도우미는 친구들에게 운동장에서 달리게 해요.]]'],
          ['🤫 [[반장]]', '[[반장은 친구들에게 수업 시간에 조용히 하게 해요.]]'],
        ] },
        { type: 'tip', text: 'Bonus : [[보다]] → [[보이다]] veut aussi dire « **faire** voir » ! D’où [[보여 주세요|t:montrez-moi]] : [[공책을 보여 주세요.]]', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que fait le responsable de musique ?', choices: ['Il fait chanter ses camarades.', 'Il chante tout seul.', 'Il dit de se taire.'], answer: 0, explain: '[[친구들에게 노래를 부르게 해요.]]' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🤫 Le rôle du chef de classe', before: '반장은 친구들에게 조용히 ', after: ' 해요.', choices: ['하게', '해서', '하면'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Il dit de… (on rapporte) ou il a fait faire ?', buckets: ['🗣️ il dit de…', '👉 il a fait faire'], items: [
      { text: '선생님이 읽으래요', bucket: 0 }, { text: '반장이 앉으래요', bucket: 0 }, { text: '선생님이 쓰래요', bucket: 0 },
      { text: '선생님이 읽게 했어요', bucket: 1 }, { text: '반장이 앉게 했어요', bucket: 1 }, { text: '선생님이 쓰게 했어요', bucket: 1 },
    ] } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Le professeur a fait lire le livre aux élèves.', tiles: ['선생님이', '학생들에게', '책을', '읽게', '했어요.'], distractors: ['읽어서', '읽으래요.'] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '친구들에게 노래를 부르게 해요', choices: ['친구들에게 노래를 부르게 해요', '친구들하고 노래를 불러요', '친구들에게 노래를 불러 주세요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '👩‍🏫 « Le professeur a fait lire le livre aux élèves. »', answer: alts('선생님이 학생들에게 책을 읽게 했어요', '선생님은 학생들에게 책을 읽게 했어요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Tu es [[도우미]] ! Écris ta règle de responsable avec [[에게]] + [[게 해요]]. [[쓰세요!]]', placeholder: '저는 그림 도우미예요. 친구들에게 그림을 그리게 해요.', mustInclude: [MAKE_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '선생님이 학생들에게 책을 읽게 했어요. 그리고 저에게 “공책을 보여 주세요”라고 하셨어요.', fr: 'Le professeur a fait lire le livre aux élèves. Puis il m’a dit : « Montre-moi ton cahier. »', prompt: 'Mise en pratique : dis-le à voix haute 👩‍🏫' } },
  ],
  interleave: [
    { type: 'type', prompt: '👂 « J’entends un bruit. »', answer: alts('소리가 들려요') },
    { type: 'mcq', prompt: '🚪 « La porte s’ouvre. »', choices: ['문이 열려요.', '문을 열어요.', '문이 열어요.'], answer: 0 },
    { type: 'cloze', before: '선생님이 숙제를 다 ', after: ' 물어보셨어요.', choices: ['했냐고', '했다고'], answer: 0, translation: 'Le professeur a demandé si nous avions fini les devoirs.' },
    { type: 'type', prompt: '« les devoirs que je ferai demain »', answer: alts('내일 할 숙제') },
  ],
};

const day98: Lesson = {
  id: 'm5-w4-d3',
  month: 5,
  week: 4,
  day: 98,
  title: 'Oh ! 춥네요 : la découverte',
  summary: 'Réagir à ce qu’on découvre : 날씨가 정말 춥네요! · 눈이 왔네요! · 한국어를 정말 잘하네요! Radical + 네요. À l’écrit : -군요 ; 그렇군요 (je vois). Ateliers scientifiques.',
  cards: [
    { id: 'w20-ko-neyo', kind: 'grammar', ko: '춥네요 · 맛있네요', fr: 'oh, il fait froid ! · oh, c’est bon ! — découverte : radical + 네요', note: '😮 Radical + **네요**, sans changement ([[좋네요]], [[예쁘네요]], [[잘하네요]]) ; le ㄹ tombe : [[길다]] → [[기네요]]. Passé : [[왔네요]]. Nom : [[학생이네요]]. Règle : [[네요|p:discover]]' },
    { id: 'w20-ko-chupneyo', kind: 'phrase', ko: '날씨가 정말 춥네요!', fr: 'Qu’est-ce qu’il fait froid !', note: '❄️ On ouvre la fenêtre et on le **découvre** : [[춥네요]]. ≠ [[추워요]] (simple information).' },
    { id: 'w20-ko-jalhaneyo', kind: 'phrase', ko: '한국어를 정말 잘하네요!', fr: 'Tu parles vraiment bien coréen ! (je le découvre)', note: '👏 Le compliment que les Coréens adorent faire. Réponse modeste : [[아니요, 아직 잘 못해요.]]' },
    { id: 'w20-ko-geureokunyo', kind: 'phrase', ko: '그렇군요', fr: 'Je vois, ah d’accord.', note: '💡 Quand on apprend une information. **군요** = **네요** en plus posé, très fréquent dans les livres ([[춥군요]], [[그렇군요]]).' },
    { id: 'w20-ko-nuni-watneyo', kind: 'phrase', ko: '와, 눈이 왔네요!', fr: 'Oh, il a neigé !', note: '🌨️ Passé + 네요 : on découvre le **résultat** ([[왔네요]], [[다 했네요]]).' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Oh ! La découverte 😮' },
        { type: 'tip', text: 'Ce matin, Nabi ouvre la fenêtre… Il fait **glacial** ! Il ne dit pas juste [[추워요]] (une information), il **s’exclame** : [[날씨가 정말 춥네요!]]', mood: 'happy' },
        { type: 'table', head: ['', 'Phrase', 'Nuance'], rows: [
          ['ℹ️', '[[날씨가 추워요.]]', 'Il fait froid. (j’informe)'],
          ['😮', '[[날씨가 정말 춥네요!]]', 'Qu’est-ce qu’il fait froid ! (je le découvre à l’instant)'],
        ] },
        { type: 'text', text: '**네요** exprime une réaction **spontanée** devant ce qu’on voit, entend ou goûte **maintenant**. C’est elle qui rend ton coréen naturel !' },
        { type: 'dialog', lines: [
          { who: '나비', ko: '창문을 열었어요… 와, 눈이 왔네요!' },
          { who: '수아', ko: '정말 예쁘네요! 그런데 날씨가 정말 춥네요.' },
          { who: '나비', ko: '오늘은 운동장에서 놀 수 있어요?' },
          { who: '선생님', ko: '네, 옷을 많이 입으면 놀아도 돼요.' },
        ] },
        { type: 'tip', text: 'Petit mot : [[많이|t:beaucoup]].', mood: 'thinking' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La règle : radical + 네요 🔑' },
        { type: 'table', head: ['', 'Mot', '+ 네요'], rows: [
          ['🏷️ adjectif', '[[춥다]] · [[예쁘다]] · [[맛있다]]', '[[춥네요]] · [[예쁘네요]] · [[맛있네요]]'],
          ['🏃 action', '[[잘하다]] · [[비가 오다]]', '[[잘하네요]] · [[비가 오네요]]'],
          ['✂️ ㄹ tombe', '[[길다]] · [[놀다]]', '[[기네요]] · [[노네요]]'],
          ['⏪ passé', '[[눈이 왔다]] · [[다 했다]]', '[[눈이 왔네요]] · [[다 했네요]]'],
          ['📛 nom', '[[학생]] · [[친구]]', '[[학생이네요]] · [[친구네요]]'],
        ] },
        { type: 'text', text: 'Comme [[지만|p:contrast]] : aucun changement (même pour ㅂ : [[춥네요]], pas ❌ 추워네요). Seul le ㄹ tombe devant ㄴ, comme dans [[노는]].' },
        { type: 'tip', text: '⚠️ Jamais pour ce que tu **savais déjà** : ❌ 제 이름이 나비네요. Et **군요** ? Même idée, plus posé, très fréquent dans les livres : [[그렇군요|t:je vois, ah d’accord]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '❄️ Tu ouvres la fenêtre, il fait glacial ! Tu t’exclames :', choices: ['날씨가 정말 춥네요!', '날씨가 정말 추워네요!', '날씨가 추운 것 같아요.'], answer: 0, explain: 'Radical [[춥]] + **네요**, sans changement.' } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Exclame-toi ! Touche une case vide.', head: ['Mot', '😮 + 네요'], rows: [
      ['[[맛있다]]', blank('맛있네요')],
      ['[[예쁘다]]', blank('예쁘네요')],
      ['[[덥다]]', blank('덥네요')],
      ['[[길다]]', blank('기네요')],
      ['[[잘하다]]', blank('잘하네요')],
    ], explain: 'Radical + **네요** ; seul le ㄹ tombe : [[기네요]].' } },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie la découverte à l’exclamation.', pairs: [
      ['🍎 tu goûtes une pomme', '맛있네요!'],
      ['🌨️ tout est blanc dehors', '눈이 왔네요!'],
      ['🌸 une fleur magnifique', '정말 예쁘네요!'],
      ['🗣️ un Français parle coréen', '한국어를 정말 잘하네요!'],
    ] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les ateliers scientifiques 🔬' },
        { type: 'text', text: 'Activité de la classe : on observe et on s’exclame. Les verbes au **passif** d’avant-hier reviennent !' },
        { type: 'dialog', lines: [
          { who: '선생님', ko: '이 컵 전화기로 말해 보세요.' },
          { who: '지훈', ko: '수아야, 들려요?' },
          { who: '수아', ko: '와, 소리가 정말 잘 들리네요!' },
          { who: '선생님', ko: '이제 돋보기로 이 꽃을 보세요.' },
          { who: '민수', ko: '와, 정말 크게 보이네요! 신기하네요!' },
          { who: '선생님', ko: '소리는 컵하고 실을 지나가요.' },
          { who: '나비', ko: '아, 그렇군요!' },
        ] },
        { type: 'tip', text: 'Petits mots : [[컵 전화기|t:téléphone à ficelle]] · [[돋보기|t:loupe]] · [[로|t:avec (un outil)]] · [[크게|t:en grand]] · [[신기하다|t:être étonnant]] · [[실|t:fil]] · [[지나가요|t:passe]]. Passif + 네요 : [[들리네요]], [[보이네요]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’est-ce que Sua découvre ?', choices: ['Qu’on entend vraiment bien.', 'Qu’on n’entend rien.', 'Que la fleur est grande.'], answer: 0, explain: '[[소리가 정말 잘 들리네요!]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que répond Nabi quand il comprend l’explication ?', choices: ['그렇군요!', '맛있네요!', '잘 안 들려요.'], answer: 0, explain: '[[그렇군요]] = « je vois, ah d’accord ».' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '👏 « Tu parles vraiment bien coréen ! »', before: '한국어를 정말 ', after: '!', choices: ['잘하네요', '잘해네요', '잘하는 네요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Oh, il a neigé ! Qu’est-ce qu’il fait froid !', tiles: ['와,', '눈이', '왔네요!', '정말', '춥네요!'], distractors: ['추워네요!', '오네요!'] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '날씨가 정말 춥네요', choices: ['날씨가 정말 춥네요', '날씨가 정말 추워요', '날씨가 정말 덥네요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '❄️ « Qu’est-ce qu’il fait froid ! » (avec 정말)', answer: alts('날씨가 정말 춥네요!', '정말 춥네요!') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Regarde par la fenêtre ou goûte ton goûter : exclame-toi avec [[네요]] ! [[쓰세요!]]', placeholder: '와, 비가 오네요! 이 사과가 정말 맛있네요!', mustInclude: [WOW_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '창문을 열었어요. 와, 눈이 왔네요! 날씨가 정말 춥네요!', fr: 'J’ai ouvert la fenêtre. Oh, il a neigé ! Qu’est-ce qu’il fait froid !', prompt: 'Mise en pratique : joue la scène à voix haute 🌨️' } },
  ],
  interleave: [
    { type: 'type', prompt: '👉 « Le professeur a fait lire le livre aux élèves. »', answer: alts('선생님이 학생들에게 책을 읽게 했어요') },
    { type: 'mcq', prompt: '👓 « Je ne vois pas bien le tableau. »', choices: ['칠판이 잘 안 보여요.', '칠판을 잘 안 보여요.', '칠판이 잘 안 봐요.'], answer: 0 },
    { type: 'cloze', before: '지훈이는 수학이 너무 ', after: ' 했어요.', choices: ['어렵다고', '어려운다고'], answer: 0, translation: 'Jihoon a dit que les maths étaient trop difficiles.' },
    { type: 'mcq', prompt: '🖐️ [[보여 주세요]] =', choices: ['Montrez-moi.', 'Regardez.', 'Écoutez.'], answer: 0 },
  ],
};

const SLATE: [string, string[]][] = [
  ['🏷️ « un grand livre »', ['큰 책', '크는 책', '클 책']],
  ['🎬 « le film que j’ai vu hier »', ['어제 본 영화', '어제 보는 영화', '어제 볼 영화']],
  ['📝 « les devoirs que je ferai demain »', ['내일 할 숙제', '내일 한 숙제', '내일 하는 숙제']],
  ['🤔 « Il me semble qu’il fait froid. »', ['날씨가 추운 것 같아요.', '날씨가 춥는 것 같아요.', '날씨가 추웠다고 했어요.']],
  ['✍️ « Sua a dit qu’elle allait à la bibliothèque. »', ['수아가 도서관에 간다고 했어요.', '수아가 도서관에 가냐고 물어봤어요.', '수아가 도서관에 가게 했어요.']],
  ['👂 « On entend de la musique. »', ['음악이 들려요.', '음악을 들려요.', '음악이 들어요.']],
  ['😮 « Oh, c’est vraiment bon ! »', ['정말 맛있네요!', '정말 맛있는 네요!', '정말 맛있었어요.']],
];

const day99: Lesson = {
  id: 'm5-w4-d4',
  month: 5,
  week: 4,
  day: 99,
  title: 'Révision du 5ᵉ mois',
  summary: 'Fiche bilan des semaines 17 à 20 (relatives au trois temps, 것 같아요, 다고 했어요, 냐고, passif, 게 하다, 네요), quiz sur l’ardoise et quatre ateliers autocorrectifs.',
  cards: [],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La fiche bilan du 5ᵉ mois 📋' },
        { type: 'tip', text: 'Demain, la **Grande évaluation n°9** ! Aujourd’hui, on balaie toutes les formes vues depuis la semaine 17.', mood: 'encourage' },
        { type: 'table', head: ['Je sais…', 'Forme', 'Exemple'], rows: [
          ['🏷️ mettre un [[adjectif devant un nom|p:adj-mod]]', '(으)ㄴ · 있는', '[[작은 가방]] · [[맛있는 밥]]'],
          ['⏪ [[relative au passé|p:rel-past]]', '(으)ㄴ', '[[어제 먹은 밥]]'],
          ['▶️ [[relative au présent|p:relative]]', '는', '[[지금 먹는 밥]]'],
          ['⏩ [[relative au futur|p:rel-future]]', '(으)ㄹ', '[[내일 먹을 밥]]'],
          ['🤔 [[nuancer|p:seem]]', '는 것 같아요', '[[재미있는 것 같아요.]]'],
          ['✍️ [[rapporter|p:report-full]] · [[une question|p:ask]]', '다고 · 냐고', '[[간다고 했어요]] · [[가냐고 물어봤어요]]'],
          ['👀 le [[passif|p:passive]]', '이 · 히 · 리 · 기', '[[소리가 들려요.]]'],
          ['👉 [[faire faire|p:make-do]]', '게 하다', '[[책을 읽게 했어요.]]'],
          ['😮 m’exclamer', '[[네요|p:discover]]', '[[정말 춥네요!]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'La grande grille des relatives. Touche une case vide.', head: ['Verbe', '⏪ hier', '▶️ maintenant', '⏩ demain'], rows: [
      ['[[가다]] + 곳', blank('간 곳'), blank('가는 곳'), blank('갈 곳')],
      ['[[읽다]] + 책', blank('읽은 책'), blank('읽는 책'), blank('읽을 책')],
      ['[[놀다]] + 친구', blank('논 친구'), blank('노는 친구'), blank('놀 친구')],
    ], explain: '⏪ (으)ㄴ · ▶️ 는 · ⏩ (으)ㄹ. Avec ㄹ : [[논]] · [[노는]] · [[놀]]. ([[곳|t:endroit]])' } },
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
        { type: 'title', text: 'Atelier 1 — Les relatives 🧩' },
        { type: 'text', text: 'Activité de la classe : ateliers en petits groupes. Chaque atelier se corrige tout seul : tu vois la réponse tout de suite.' },
      ],
    },
    { kind: 'practice', exercise: { type: 'order', translation: 'Le livre que j’ai lu hier était intéressant.', tiles: ['어제', '읽은', '책이', '재미있었어요.'], distractors: ['읽는', '읽을'] } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '⏩ « l’endroit où j’irai ce week-end »', before: '주말에 ', after: ' 곳', choices: ['갈', '간', '가는'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '👓 « l’ami qui porte des lunettes »', answer: alts('안경을 쓰고 있는 친구', '안경을 쓴 친구') } },
    { kind: 'learn', blocks: [{ type: 'title', text: 'Atelier 2 — Opinion & discours rapporté 🗣️' }] },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Transforme. Touche une case vide.', head: ['💬 Phrase', '🤔 Avis nuancé', '✍️ Minsu a dit que…'], rows: [
      ['[[시험이 어려워요.]]', blank('시험이 어려운 것 같아요'), blank('민수가 시험이 어렵다고 했어요', '민수는 시험이 어렵다고 했어요')],
      ['[[비가 와요.]]', blank('비가 오는 것 같아요'), blank('민수가 비가 온다고 했어요', '민수는 비가 온다고 했어요')],
    ], explain: '🤔 adjectif → (으)ㄴ ([[어려운]]), action → 는 ([[오는]]) · ✍️ état → 다고 ([[어렵다고]]), action → ㄴ다고 ([[온다고]]).' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '❓ 지훈 : [[어디에 가요?]] → Jihoon a demandé…', choices: ['지훈이가 어디에 가냐고 물어봤어요.', '지훈이가 어디에 간다고 했어요.', '지훈이가 어디에 가게 했어요.'], answer: 0 } },
    { kind: 'learn', blocks: [{ type: 'title', text: 'Atelier 3 — Passif & faire faire 👀👉' }] },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Ça arrive tout seul, ou quelqu’un fait faire ?', buckets: ['👀 passif', '👉 faire faire'], items: [
      { text: '창문이 열려요', bucket: 0 }, { text: '바다가 보여요', bucket: 0 }, { text: '소리가 들려요', bucket: 0 },
      { text: '친구들에게 읽게 해요', bucket: 1 }, { text: '학생들에게 쓰게 했어요', bucket: 1 }, { text: '친구들을 웃게 해요', bucket: 1 },
    ] } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🎵 « On entend de la musique dans la classe d’à côté. »', before: '옆 교실에서 음악 소리가 ', after: '.', choices: ['들려요', '들어요', '듣게 해요'], answer: 0 } },
    { kind: 'learn', blocks: [{ type: 'title', text: 'Atelier 4 — S’exclamer 😮' }] },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie la situation à la bonne réaction.', pairs: [
      ['🌧️ tu regardes dehors', '비가 오네요!'],
      ['💡 on t’explique quelque chose', '그렇군요!'],
      ['🍚 tu goûtes le plat', '맛있네요!'],
      ['📏 la file d’attente est interminable', '정말 기네요!'],
    ] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Le défi du jour : **une** phrase avec une relative ([[어제 본…]], [[제가 좋아하는…]]) **et** [[것 같아요]]. [[쓰세요!]]', placeholder: '어제 본 영화가 정말 재미있는 것 같아요.', mustInclude: [REL_ANY, SEEM_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '어제 읽은 책이 정말 재미있었어요. 수아도 재미있다고 했어요. 내일 읽을 책도 재미있을 것 같아요.', fr: 'Le livre que j’ai lu hier était vraiment intéressant. Sua aussi a dit qu’il était intéressant. Le livre que je lirai demain sera sûrement intéressant lui aussi.', prompt: 'Les trois temps dans trois phrases : lis à voix haute.' } },
  ],
  interleave: [
    { type: 'type', prompt: '😮 « Tu parles vraiment bien coréen ! »', answer: alts('한국어를 정말 잘하네요!') },
    { type: 'mcq', prompt: '[[그렇군요]] =', choices: ['Je vois, ah d’accord.', 'Moi aussi.', 'C’est faux.'], answer: 0 },
    { type: 'cloze', before: '반장은 친구들에게 조용히 ', after: ' 해요.', choices: ['하게', '하면'], answer: 0, translation: 'Le chef de classe fait taire ses camarades.' },
    { type: 'type', prompt: '🪟 « La fenêtre s’ouvre. »', answer: alts('창문이 열려요') },
  ],
};

const DICTATION = [
  '어제 본 영화가 재미있었어요',
  '지금 읽는 책이 재미있는 것 같아요',
  '내일 할 숙제가 있어요',
  '수아가 도서관에 간다고 했어요',
  '선생님이 숙제를 다 했냐고 물어보셨어요',
  '교실에서 음악 소리가 들려요',
  '칠판이 잘 안 보여요',
  '선생님이 학생들에게 책을 읽게 했어요',
];

const day100: Lesson = {
  id: 'm5-w4-d5',
  month: 5,
  week: 4,
  day: 100,
  title: 'Bilan du 5ᵉ mois & Grande évaluation n°9',
  summary: 'La dictée de la classe, la rédaction « une expérience récente », la Grande évaluation bimensuelle n°9 (avec le conte 개미와 베짱이), ton entretien de bilan et une histoire entièrement en coréen. Centième leçon !',
  cards: [
    { id: 'w20-ko-ilhaeyo', kind: 'vocab', ko: '일해요', fr: 'travailler (일하다)', note: '🐜 [[개미가 열심히 일해요.]] [[일]] = le travail. ≠ [[일어나요]] (se lever).' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La centième leçon 🎓' },
        { type: 'tip', text: '**Cent** leçons ! Aujourd’hui, l’épreuve de la classe puis la **Grande évaluation n°9**. Sans stress : chaque erreur reviendra simplement en révision.', mood: 'encourage' },
        { type: 'text', text: 'D’abord, la **dictée** : huit phrases avec des relatives, du discours rapporté et du passif. [[들으세요!]] Puis [[쓰세요!]]' },
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
        { type: 'text', text: 'Épreuve de la classe : 8 à 10 phrases qui racontent une **expérience récente** et donnent des **avis nuancés**. En deux temps :' },
        { type: 'table', head: ['', 'Pense à…'], rows: [
          ['1️⃣ Raconter', 'quand ([[어제]], [[지난 주말에]]) · des relatives ([[어제 간 곳]], [[같이 간 친구]]) · le passé'],
          ['2️⃣ Commenter', 'ton avis ([[것 같아요|p:seem]]) · ce qu’un autre a dit ([[다고 했어요|p:report-full]]) · une exclamation ([[네요|p:discover]])'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Rédaction 1/2 — **Raconte** une expérience récente (quand, où, avec qui), avec au moins une relative. [[쓰세요!]]', placeholder: '지난 주말에 친구하고 공원에 갔어요. 같이 간 친구는 수아예요. 공원에서 본 꽃이 정말 예뻤어요…', mustInclude: [WHEN_ANY, REL_ANY] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Rédaction 2/2 — **Commente** : ton avis avec [[것 같아요]] et ce qu’un ami a dit avec [[다고 했어요]].', placeholder: '공원이 정말 좋은 것 같아요. 수아도 공원이 정말 좋다고 했어요.', mustInclude: [SEEM_ANY, SAID_ANY] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Grande évaluation n°9' },
        { type: 'text', text: 'Quatre parties, toujours sans piège ni chrono.' },
        { type: 'table', head: ['Partie', 'Contenu'], rows: [
          ['A', 'Passif & constatation'],
          ['B', 'Style indirect formel'],
          ['C', 'Compréhension écrite (un conte)'],
          ['D', 'Production orale'],
        ] },
        { type: 'tip', text: '**A — Passif & constatation.** Complète les phrases.', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '**A · 1/4** — 🪟💨 La fenêtre s’ouvre toute seule.', before: '창문이 ', after: '.', choices: ['열려요', '열어요', '열게 해요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '**A · 2/4** — 👏 [[한국어를 정말 잘]]______! (tu le découvres)', answer: alts('하네요', '하네요!', '한국어를 정말 잘하네요!') } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '**A · 3/4** — 🔔', before: '밖에서 이상한 소리가 ', after: '.', choices: ['들려요', '들어요', '듣네요'], answer: 0, translation: 'On entend un bruit étrange dehors.' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '**A · 4/4** — ❄️ [[날씨가 정말]] ______! ([[춥다]], tu le découvres)', answer: alts('춥네요', '춥네요!', '날씨가 정말 춥네요!') } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**B — Style indirect formel.** Rapporte chaque phrase avec **다고 해요**.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'type', prompt: '**B · 1/4** — 수아 : « [[책을 읽어요.]] » → 수아가 책을 ______.', answer: alts('읽는다고 해요', '읽는다고 했어요') } },
    { kind: 'practice', exercise: { type: 'type', prompt: '**B · 2/4** — 지훈 : « [[배가 고파요.]] » → 지훈이가 배가 ______.', answer: alts('고프다고 해요', '고프다고 했어요') } },
    { kind: 'practice', exercise: { type: 'type', prompt: '**B · 3/4** — 민수 : « [[어제 영화를 봤어요.]] » → 민수가 어제 영화를 ______.', answer: alts('봤다고 해요', '봤다고 했어요') } },
    { kind: 'practice', exercise: { type: 'type', prompt: '**B · 4/4** — 선생님 : « [[내일 시험을 볼 거예요.]] » → 선생님이 내일 시험을 ______.', answer: alts('볼 거라고 해요', '볼 거라고 하셨어요', '볼 거라고 했어요'), explain: 'Futur → **거라고**. Pour le professeur, on peut dire [[하셨어요|p:honor]]. ([[시험을 봐요|t:passer un examen]])' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'tip', text: '**C — Compréhension.** Un conte du manuel de la classe, **sans adaptation**. Touche une phrase pour l’entendre, puis réponds.', mood: 'encourage' },
        { type: 'table', head: ['🐜 개미와 베짱이'], rows: [
          ['[[여름이에요. 날씨가 정말 더워요.]] [[개미들이 열심히 일하고 있어요.]] [[베짱이는 나무 아래에서 노래를 부르고 있어요.]]'],
          ['[[베짱이가 개미에게 물었어요. “왜 일해요? 같이 놀까요?”]] [[개미가 대답했어요. “겨울에 먹을 음식을 모으고 있어요.”]]'],
          ['[[겨울이 왔어요. 눈이 와요. 정말 추워요.]] [[베짱이는 배가 고파요. 먹을 음식이 없어요.]]'],
          ['[[그때 작은 집이 보여요. 집 안에서 웃는 소리가 들려요.]] [[베짱이가 문을 두드렸어요. 문이 열렸어요.]]'],
          ['[[개미가 말했어요. “어서 오세요! 같이 먹어요.”]] [[베짱이가 말했어요. “고마워요. 개미가 정말 착하네요!”]]'],
        ] },
        { type: 'tip', text: 'Petits mots : [[개미|t:fourmi]] · [[베짱이|t:cigale (sauterelle)]] · [[여름|t:été]] · [[모으다|t:rassembler]] · [[두드리다|t:frapper]] · [[어서 오세요|t:entrez, bienvenue]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 1/4** — Que fait la cigale en été ?', choices: ['Elle chante sous un arbre.', 'Elle travaille avec les fourmis.', 'Elle dort dans sa maison.'], answer: 0, explain: '[[베짱이는 나무 아래에서 노래를 부르고 있어요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 2/4** — Pourquoi les fourmis travaillent-elles ?', choices: ['Pour rassembler la nourriture qu’elles mangeront en hiver.', 'Parce qu’il fait chaud.', 'Parce que la cigale le leur demande.'], answer: 0, explain: '[[겨울에 먹을 음식을 모으고 있어요.]] — [[먹을 음식|p:rel-future]] = la nourriture qu’on mangera.' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 3/4** — En hiver, qu’entend la cigale ?', choices: ['Des rires dans une petite maison.', 'De la musique dans la forêt.', 'La pluie sur la fenêtre.'], answer: 0, explain: '[[집 안에서 웃는 소리가 들려요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 4/4** — Vrai ou faux ? « À la fin, les fourmis refusent d’ouvrir la porte. »', choices: ['Vrai', 'Faux'], answer: 1, explain: '[[문이 열렸어요.]] [[어서 오세요! 같이 먹어요.]]' } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**D — À l’oral.** Raconte en 4 phrases un souvenir d’école récent, en décrivant les personnes et les choses avec des **relatives** : [[제가 좋아하는 친구가…]]', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'write', prompt: '**D · 1/2** — Prépare tes 4 phrases.', placeholder: '제가 좋아하는 친구가 있어요. 그 친구는 안경을 쓰고 있는 수아예요. 어제 수아하고 같이 읽은 책이 재미있었어요…', mustInclude: [REL_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '제가 좋아하는 친구가 있어요. 안경을 쓰고 있는 수아예요. 어제 수아하고 같이 재미있는 책을 읽었어요. 내일 같이 읽을 책을 도서관에서 빌릴 거예요.', fr: 'J’ai une amie que j’aime beaucoup. C’est Sua, celle qui porte des lunettes. Hier, j’ai lu un livre intéressant avec Sua. Demain, on empruntera à la bibliothèque le livre qu’on lira ensemble.', prompt: '**D · 2/2** — Raconte à voix haute, puis écoute le modèle.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le centième jour 📖' },
        { type: 'text', text: 'Une histoire **entièrement en coréen**. Touche une bulle pour l’entendre.' },
        { type: 'dialog', lines: [
          { who: '📖', ko: '금요일 오후예요. 시험이 끝났어요.' },
          { who: '선생님', ko: '여러분, 오늘 시험이 어땠어요?' },
          { who: '지훈', ko: '조금 어려웠지만 재미있었어요!' },
          { who: '수아', ko: '개미와 베짱이 이야기가 정말 재미있었어요.' },
          { who: '민수', ko: '저는 베짱이가 조금 불쌍한 것 같아요.' },
          { who: '나비', ko: '하지만 개미가 베짱이에게 문을 열어 줬어요. 개미가 정말 착한 것 같아요.' },
          { who: '선생님', ko: '나비는 한국어를 정말 잘하네요! 이제 한 달 남았어요.' },
          { who: '📖', ko: '그날 밤, 나비가 창문을 열었어요. 창문 밖에 예쁜 별이 많이 보였어요.' },
          { who: '나비', ko: '와, 별이 정말 예쁘네요! 다음 달에도 열심히 공부할 거예요. 🦋' },
        ] },
        { type: 'tip', text: 'Petits mots : [[어땠어요?|t:comment c’était ?]] · [[불쌍하다|t:être à plaindre]] · [[열어 줬어요|t:a ouvert (pour lui)]] · [[한 달 남았어요|t:il reste un mois]] · [[별|t:étoile]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que pense Minsu de la cigale ?', choices: ['Qu’elle est un peu à plaindre.', 'Qu’elle est méchante.', 'Qu’elle chante bien.'], answer: 0, explain: '[[저는 베짱이가 조금 불쌍한 것 같아요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que voit Nabi par la fenêtre ce soir-là ?', choices: ['Beaucoup de jolies étoiles.', 'La neige.', 'Une petite tortue.'], answer: 0, explain: '[[창문 밖에 예쁜 별이 많이 보였어요.]]' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ton bilan du 5ᵉ mois 🎓' },
        { type: 'text', text: 'Cinq mois sur six, vingt semaines, cent leçons. Voici ce que tu sais faire :' },
        { type: 'table', head: ['Domaine', 'Acquis'], rows: [
          ['Grammaire', 'toutes les structures de base et intermédiaires du primaire coréen : temps, particules, [[cause|p:cause]], [[condition|p:if]], [[comparaison|p:compare]], [[honorifiques|p:honor]]…'],
          ['Décrire', '[[adjectifs devant le nom|p:adj-mod]] et relatives aux trois temps : [[어제 먹은|p:rel-past]] · [[지금 먹는|p:relative]] · [[내일 먹을|p:rel-future]]'],
          ['Nuancer & rapporter', '[[것 같아요|p:seem]] · [[다고 했어요|p:report-full]] · [[냐고 물어봤어요|p:ask]] · [[대요|p:report]]'],
          ['Nouveau', '[[le passif|p:passive]] ([[보여요]], [[들려요]], [[열려요]]) · [[faire faire|p:make-do]] ([[읽게 했어요]]) · [[l’exclamation|p:discover]] ([[춥네요!]])'],
          ['Comprendre', 'la quasi-totalité des consignes orales et écrites de la classe'],
          ['Lire', 'de courts récits et des contes sans adaptation majeure'],
          ['Vocabulaire', '**environ 440 cartes** de révision — près de **500 mots** en comptant ceux des phrases'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'read', ko: '선생님, 이번 달에는 새로운 문법을 많이 배웠어요. 처음에는 어려웠지만 지금은 재미있는 것 같아요. 다음 달에도 열심히 공부할 거예요!', fr: 'Monsieur / Madame, ce mois-ci j’ai appris beaucoup de nouvelle grammaire. Au début c’était difficile, mais maintenant je trouve ça intéressant. Le mois prochain aussi, j’étudierai avec ardeur !', prompt: 'Ton entretien de bilan : parle au professeur de ta progression, à voix haute. ([[이번 달|t:ce mois-ci]] · [[문법|t:grammaire]])' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Bravo, 5ᵉ mois terminé ! 🎉' },
        { type: 'text', text: 'Tu décris, tu nuances, tu rapportes ce que disent les autres, et tu lis un vrai conte coréen. Il ne reste plus que **4 semaines** : le 6ᵉ mois, pour viser l’autonomie complète !' },
        { type: 'tip', text: '[[다음 달도 재미있을 것 같아요!|t:le mois prochain sera sûrement intéressant aussi !]] 🦋 À lundi !', mood: 'happy' },
      ],
    },
  ],
};

export const m5w4: Lesson[] = [day96, day97, day98, day99, day100];
