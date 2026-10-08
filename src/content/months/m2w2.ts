import type { GridBlank, Lesson } from '../types';

const fut = (s: string): string[] => [s, s.replace(/ 거예요/g, '거예요')];
const blank = (s: string): GridBlank => ({ answer: fut(s) });

const PAST_ANY = [
  '갔어요', '샀어요', '잤어요', '봤어요', '했어요', '먹었어요', '마셨어요', '읽었어요', '만났어요', '쉬었어요',
  '있었어요', '없었어요', '좋았어요',
].join('|');

const EN_ESEO = ['에', '에서'];

const day26: Lesson = {
  id: 'm2-w2-d1',
  month: 2,
  week: 2,
  day: 26,
  title: 'Où se passe l’action ? 에서',
  summary: '에 🎯 (on y va, on y est) ou 에서 ⚙️ (on y fait quelque chose) : 학교에서 공부해요, 집에서 밥을 먹어요.',
  cards: [
    { id: 'm2-ko-eseo', kind: 'particle', ko: '에서', fr: 'à, dans (lieu où se fait l’action)', note: '⚙️ [[학교에서 공부해요|t:j’étudie à l’école]]. Mais 🎯 [[학교에 가요|t:je vais à l’école]].' },
    { id: 'm2-ko-doseogwan', kind: 'vocab', ko: '도서관', fr: 'bibliothèque', note: '📚 [[도서관에서 책을 읽어요|t:je lis à la bibliothèque]]' },
    { id: 'm2-ko-sikdang', kind: 'vocab', ko: '식당', fr: 'restaurant ; cantine', speak: '식당', note: '🍽️ Se prononce [[식땅]]. [[식당에서 밥을 먹어요|t:je mange au restaurant]]' },
    { id: 'm2-ko-gongwon', kind: 'vocab', ko: '공원', fr: 'parc', note: '🌳 [[공원에 가요|t:je vais au parc]] · [[공원에서 책을 읽어요|t:je lis au parc]]' },
    { id: 'm2-ko-eodieseo', kind: 'phrase', ko: '어디에서 공부해요?', fr: 'Où étudies-tu ?', note: 'Réponse : [[도서관에서 공부해요|t:j’étudie à la bibliothèque]].' },
    { id: 'm2-ko-e-vs-eseo', kind: 'grammar', ko: '도서관에 가요 · 도서관에서 읽어요', fr: '에 = on va / on est quelque part ; 에서 = on y fait une action', note: '🎯 [[에|p:place]] avec [[가요]], [[있어요]], [[없어요]] · ⚙️ [[에서|p:action]] avec les verbes d’action.' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Deux petits mots de lieu' },
        { type: 'text', text: 'Tu connais déjà [[에|p:place]] : [[학교에 가요]] (on **va** quelque part), [[연필이 책상 위에 있어요]] (quelque chose **se trouve** quelque part). Aujourd’hui, voici son grand frère : [[에서|p:action]], le lieu où l’on **fait** quelque chose.' },
        { type: 'table', head: ['', 'Quand ?', 'Verbes'], rows: [
          ['🎯 [[에|p:place]]', 'on **va** vers un lieu, ou on **y est**', '[[가요]] · [[있어요]] · [[없어요]]'],
          ['⚙️ [[에서|p:action]]', 'on **fait une action** dans ce lieu', '[[공부해요]] · [[먹어요]] · [[읽어요]] · [[봐요]] · [[사요]]…'],
        ] },
        { type: 'breakdown', segments: [
          { ko: '학교', role: 'place', gloss: 'école', particle: { ko: '에서', key: 'action' } },
          { ko: '공부해요', role: 'verb', gloss: 'étudie' },
        ], translation: 'J’étudie à l’école.', note: '[[에서]] se colle au lieu, après une consonne comme après une voyelle.' },
        { type: 'tip', text: 'La question de Nabi : le verbe **va vers** le lieu 🎯, ou bien il **se passe dedans** ⚙️ ?', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', before: '학교', after: ' 가요.', choices: EN_ESEO, answer: 0, translation: 'Je vais à l’école.', explain: '[[가요]] : on **va vers** l’école 🎯 → [[에|p:place]].' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '학교', after: ' 공부해요.', choices: EN_ESEO, answer: 1, translation: 'J’étudie à l’école.', explain: 'On **fait** quelque chose à l’école ⚙️ → [[에서|p:action]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Trois nouveaux lieux' },
        { type: 'letters', items: [
          { char: '도서관', mnemonic: '📚 bibliothèque' },
          { char: '식당', mnemonic: '🍽️ restaurant, cantine' },
          { char: '공원', mnemonic: '🌳 parc' },
        ] },
        { type: 'liaison', items: [
          { written: '집에서', spoken: '지베서', fr: 'à la maison' },
          { written: '공원에서', spoken: '공워네서', fr: 'au parc' },
          { written: '식당', spoken: '식땅', fr: 'restaurant (le ㄷ se durcit après ㄱ)' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque lieu à son image.', pairs: [['도서관', '📚'], ['식당', '🍽️'], ['공원', '🌳'], ['학교', '🏫'], ['집', '🏠']] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '도서관', choices: ['도서관', '공원', '식당'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'On y va… puis on y fait quelque chose' },
        { type: 'text', text: 'Le même lieu peut prendre les deux particules. Tout dépend du **verbe** :' },
        { type: 'table', head: ['🎯 on y va', '⚙️ on y fait…'], rows: [
          ['[[도서관에 가요.]]', '[[도서관에서 책을 읽어요.]]'],
          ['[[식당에 가요.]]', '[[식당에서 밥을 먹어요.]]'],
          ['[[집에 가요.]]', '[[집에서 자요.]]'],
        ] },
        { type: 'dialog', lines: [
          { who: 'Marie', ko: '루이, 어디에서 공부해요?', fr: 'Louis, où étudies-tu ?' },
          { who: 'Louis', ko: '도서관에서 공부해요.', fr: 'J’étudie à la bibliothèque.' },
          { who: 'Marie', ko: '점심에 어디에서 밥을 먹어요?', fr: 'À midi, où manges-tu ?' },
          { who: 'Louis', ko: '식당에서 먹어요.', fr: 'Je mange à la cantine.' },
        ] },
        { type: 'tip', text: 'Et ça marche à tous les temps : [[어제 도서관에서 공부했어요|t:hier, j’ai étudié à la bibliothèque]].', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', before: '식당', after: ' 밥을 먹어요.', choices: EN_ESEO, answer: 1, translation: 'Je mange au restaurant.' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[루이, 어디에서 공부해요?]]', choices: ['도서관에서 공부해요', '도서관에 공부해요', '도서관이 공부해요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'sort', prompt: '🎯 [[에]] ou ⚙️ [[에서]] ?', buckets: ['🎯 에', '⚙️ 에서'], items: [
      { text: '공원__ 가요', bucket: 0 }, { text: '연필이 가방__ 있어요', bucket: 0 }, { text: '우유가 집__ 없어요', bucket: 0 }, { text: '한국__ 가요', bucket: 0 },
      { text: '집__ 밥을 먹어요', bucket: 1 }, { text: '도서관__ 책을 읽어요', bucket: 1 }, { text: '공원__ 우유를 마셔요', bucket: 1 }, { text: '한국__ 꽃을 사요', bucket: 1 },
    ], explain: '[[가요]], [[있어요]], [[없어요]] → 🎯 [[에|p:place]]. Les autres verbes **font** une action → ⚙️ [[에서|p:action]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La correction au tableau 🧑‍🏫' },
        { type: 'text', text: 'Activité de la classe : le professeur écrit des phrases **fausses** au tableau, les élèves les corrigent. Exemple :' },
        { type: 'table', head: ['❌ Au tableau', '✅ Corrigé'], rows: [
          ['도서관에 책을 읽어요.', '[[도서관에서 책을 읽어요.]]'],
          ['학교에서 가요.', '[[학교에 가요.]]'],
        ] },
        { type: 'text', text: 'À toi ! [[보세요!]] puis [[쓰세요!]] ✍️' },
      ],
    },
    { kind: 'practice', exercise: { type: 'type', prompt: '🧑‍🏫 Corrige : « 집에 밥을 먹어요. »', answer: '집에서 밥을 먹어요' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🧑‍🏫 Corrige : « 공원에서 가요. »', answer: '공원에 가요' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🧑‍🏫 Quelle phrase est **correcte** ?', choices: ['집에 있어요', '집에서 있어요', '집이 있어요'], answer: 0, explain: '[[있어요]] dit où l’on **est**, sans action : 🎯 [[에|p:location]].' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'J’étudie le coréen à l’école.', tiles: ['학교에서', '한국어를', '공부해요'], distractors: ['학교에', '학교를'] } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Je mange à la maison.', tiles: ['집에서', '밥을', '먹어요'], distractors: ['집에'] } },
    { kind: 'practice', exercise: { type: 'write', prompt: '[[어디에서 한국어를 공부해요?]] [[쓰세요!]]', placeholder: '집에서 한국어를 공부해요', mustInclude: ['에서'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '학교에서 공부해요. 집에서 밥을 먹어요.', fr: 'J’étudie à l’école. Je mange à la maison.' } },
  ],
  interleave: [
    { type: 'type', prompt: '[[읽어요]] → au passé :', answer: '읽었어요' },
    { type: 'clock', prompt: '[[여섯 시 반]] — place les aiguilles.', h: 6, m: 30 },
    { type: 'cloze', before: '물이 없었어요. ', after: ' 우유를 마셨어요.', choices: ['그래서', '그리고'], answer: 0, translation: 'Il n’y avait pas d’eau. Donc j’ai bu du lait.' },
    { type: 'mcq', prompt: '➡️ [[내일]] + [[가다]]', choices: ['내일 가요', '내일 갔어요', '내일에 가요'], answer: 0 },
  ],
};

const day27: Lesson = {
  id: 'm2-w2-d2',
  month: 2,
  week: 2,
  day: 27,
  title: 'Demain, je ferai… -(으)ㄹ 거예요',
  summary: 'Le futur et les projets : voyelle + ㄹ 거예요 (갈 거예요), consonne + 을 거예요 (먹을 거예요), 할 거예요.',
  cards: [
    { id: 'm2-ko-fut-l', kind: 'grammar', ko: '갈 거예요', fr: 'j’irai, je vais aller — voyelle → ㄹ 거예요', note: '🟢 [[가]] + ㄹ → [[갈 거예요]]. Aussi : [[잘 거예요]] · [[볼 거예요]] · [[마실 거예요]]' },
    { id: 'm2-ko-fut-eul', kind: 'grammar', ko: '먹을 거예요', fr: 'je mangerai — consonne finale → 을 거예요', note: '🟤 [[먹]] + 을 → [[먹을 거예요]]. Aussi : [[읽을 거예요]]. Règle : [[futur|p:future]]' },
    { id: 'm2-ko-fut-ha', kind: 'grammar', ko: '공부할 거예요', fr: 'j’étudierai — 하다 → 할 거예요', note: '⭐ [[하]] + ㄹ → [[할 거예요]] : [[공부할 거예요]] · [[좋아할 거예요]]' },
    { id: 'm2-ko-chukgu', kind: 'vocab', ko: '축구', fr: 'football', note: '⚽ Se prononce [[축꾸]]. [[축구를 해요|t:je joue au foot]] (avec [[하다|p:hada]]).' },
    { id: 'm2-ko-chukgu-hal', kind: 'phrase', ko: '내일 축구를 할 거예요', fr: 'Demain, je jouerai au football.', note: '➡️ [[내일]] + futur.' },
    { id: 'm2-ko-mwo-hal', kind: 'phrase', ko: '내일 뭐 할 거예요?', fr: 'Que vas-tu faire demain ?', note: 'Réponse au futur : [[한국어를 공부할 거예요|t:je vais étudier le coréen]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le troisième temps : le futur' },
        { type: 'text', text: 'Tu sais dire ce que tu **fais** ([[가요]]) et ce que tu **as fait** ([[갔어요]]). Voici ce que tu **feras** : [[갈 거예요|t:j’irai]]. Ce futur sert surtout à parler de ses **projets** et de ses **intentions**.' },
        { type: 'timeline', start: 2, points: [
          { label: '어제 ⬅️', ko: '어제 학교에 갔어요.', fr: 'Hier, je suis allé(e) à l’école.' },
          { label: '오늘 📍', ko: '오늘 학교에 가요.', fr: 'Aujourd’hui, je vais à l’école.' },
          { label: '내일 ➡️', ko: '내일 학교에 갈 거예요.', fr: 'Demain, j’irai à l’école.' },
        ] },
        { type: 'liaison', items: [
          { written: '갈 거예요', spoken: '갈 꺼에요', fr: 'après ㄹ, le ㄱ de 거 se durcit' },
          { written: '먹을 거예요', spoken: '머글 꺼에요', fr: 'liaison + ㄱ durci' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'listen', audio: '갈 거예요', choices: ['갈 거예요', '갔어요', '가요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La fiche de règle ✏️' },
        { type: 'text', text: 'Bonne nouvelle : ici, **pas de voyelles claires ou sombres** ! Une seule question : l’infinitif sans [[다]] finit-il par une **voyelle** ou par une **consonne** ([[받침]]) ?' },
        { type: 'table', head: ['Le radical finit par…', 'On ajoute', 'Exemples'], rows: [
          ['🟢 une voyelle', '**ㄹ 거예요** (le ㄹ se glisse dessous)', '[[가다]] → [[갈 거예요]] · [[보다]] → [[볼 거예요]]'],
          ['🟤 une consonne', '**을 거예요**', '[[먹다]] → [[먹을 거예요]] · [[읽다]] → [[읽을 거예요]]'],
          ['⭐ [[하다]]', '**할 거예요**', '[[공부하다]] → [[공부할 거예요]]'],
        ] },
        { type: 'compose', items: [
          { parts: ['가', 'ㄹ'], result: '갈' },
          { parts: ['자', 'ㄹ'], result: '잘' },
          { parts: ['마시', 'ㄹ'], result: '마실' },
          { parts: ['하', 'ㄹ'], result: '할' },
        ] },
        { type: 'compose', items: [
          { parts: ['먹', '을'], result: '먹을' },
          { parts: ['읽', '을'], result: '읽을' },
        ] },
        { type: 'tip', text: 'Le ㄹ devient le [[받침]] de la dernière syllabe : [[가]] → [[갈]]. Ensuite, [[거예요]] ne change **jamais**.', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'sort', prompt: '🟢 ㄹ 거예요 ou 🟤 을 거예요 ?', buckets: ['🟢 ㄹ 거예요', '🟤 을 거예요'], items: [
      { text: '가다', bucket: 0 }, { text: '자다', bucket: 0 }, { text: '보다', bucket: 0 }, { text: '사다', bucket: 0 }, { text: '마시다', bucket: 0 },
      { text: '먹다', bucket: 1 }, { text: '읽다', bucket: 1 }, { text: '앉다', bucket: 1 }, { text: '있다', bucket: 1 },
    ], explain: 'Voyelle à la fin du radical → 🟢 [[ㄹ 거예요]]. Consonne ([[받침]]) → 🟤 [[을 거예요]].' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Futur de [[먹다]] :', choices: ['먹을 거예요', '먹ㄹ 거예요', '먹었어요'], answer: 0, explain: '[[먹]] finit par une consonne → [[을 거예요]].' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Futur de [[자다]] :', choices: ['잘 거예요', '자을 거예요', '잤어요'], answer: 0, explain: '[[자]] finit par une voyelle → le ㄹ se glisse dessous : [[잘]].' } },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque infinitif à son futur.', pairs: [['가다', '갈 거예요'], ['읽다', '읽을 거예요'], ['공부하다', '공부할 거예요'], ['마시다', '마실 거예요'], ['보다', '볼 거예요']] } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Futur de [[보다]] (regarder) :', answer: fut('볼 거예요') } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Futur de [[읽다]] (lire) :', answer: fut('읽을 거예요') } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: '내일 축구를 할 거예요 ⚽' },
        { type: 'text', text: 'Un nouveau mot : [[축구|t:football]]. En coréen, on « fait » du foot : [[축구를 해요]].' },
        { type: 'breakdown', segments: [
          { ko: '내일', role: 'time', gloss: 'demain' },
          { ko: '축구', role: 'object', gloss: 'football', particle: { ko: '를', key: 'object' } },
          { ko: '할 거예요', role: 'verb', gloss: 'ferai' },
        ], translation: 'Demain, je jouerai au football.', note: 'Comme d’habitude : **quand** → **quoi** → **verbe**.' },
        { type: 'text', text: 'Rappel : [[내일 축구를 해요]] (présent) est **aussi** correct. Avec [[거예요]], on insiste sur le **projet**, l’intention.' },
      ],
    },
    { kind: 'practice', exercise: { type: 'order', translation: 'Demain, je jouerai au football.', tiles: ['내일', '축구를', '할 거예요'], distractors: ['했어요', '축구가'] } },
    { kind: 'practice', exercise: { type: 'cloze', before: '내일 도서관에서 책을 ', after: '.', choices: ['읽을 거예요', '읽었어요', '읽ㄹ 거예요'], answer: 0, translation: 'Demain, je lirai un livre à la bibliothèque.' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que veut dire [[내일 뭐 할 거예요?]] ?', choices: ['Que vas-tu faire demain ?', 'Qu’as-tu fait hier ?', 'Que fais-tu maintenant ?'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Mes trois résolutions 📝' },
        { type: 'text', text: 'Activité de la classe : chaque élève écrit **trois résolutions**. Voici celles de Marie, **sans traduction** — [[들으세요!]]' },
        { type: 'text', text: '1. [[내일 한국어를 공부할 거예요.]]' },
        { type: 'text', text: '2. [[저녁에 책을 읽을 거예요.]]' },
        { type: 'text', text: '3. [[열 시에 잘 거예요.]] 😴' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'À quelle heure Marie va-t-elle dormir ?', choices: ['열 시', '열한 시', '아홉 시'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ta résolution n°1 — au futur ! [[쓰세요!]]', placeholder: '내일 한국어를 공부할 거예요', mustInclude: ['거예요'] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ta résolution n°2 — avec une heure + [[에|p:time]] !', placeholder: '일곱 시에 아침을 먹을 거예요', mustInclude: ['시에', '거예요'] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ta résolution n°3 — avec un lieu + [[에서|p:action]] !', placeholder: '도서관에서 책을 읽을 거예요', mustInclude: ['에서', '거예요'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '내일 축구를 할 거예요.', fr: 'Demain, je jouerai au football.' } },
  ],
  interleave: [
    { type: 'cloze', before: '도서관', after: ' 책을 읽어요.', choices: EN_ESEO, answer: 1, translation: 'Je lis à la bibliothèque.' },
    { type: 'cloze', before: '식당', after: ' 가요.', choices: EN_ESEO, answer: 0, translation: 'Je vais au restaurant.' },
    { type: 'listen', audio: '공원', choices: ['공원', '공책', '공부'], answer: 0 },
    { type: 'mcq', prompt: '[[지금 몇 시예요?]] 🕘 9:30', choices: ['아홉 시 반이에요', '구 시 반이에요', '아홉 시 삼 분이에요'], answer: 0 },
  ],
};

const day28: Lesson = {
  id: 'm2-w2-d3',
  month: 2,
  week: 2,
  day: 28,
  title: 'Ce week-end ? 주말에 뭐 할 거예요?',
  summary: 'Demander et raconter ses projets : 주말, 친구를 만나요, 쉬어요, 운동해요, 영화를 봐요.',
  cards: [
    { id: 'm2-ko-jumal', kind: 'vocab', ko: '주말', fr: 'week-end', note: '🗓️ Avec [[에|p:time]] : [[주말에|t:ce week-end, le week-end]]' },
    { id: 'm2-ko-jumal-mwo', kind: 'phrase', ko: '주말에 뭐 할 거예요?', fr: 'Que vas-tu faire ce week-end ?', note: 'Réponse : [[친구를 만날 거예요|t:je vais voir un ami]] · [[집에서 쉴 거예요|t:je vais me reposer à la maison]]' },
    { id: 'm2-ko-chingu', kind: 'vocab', ko: '친구', fr: 'ami(e)', note: '👫 [[친구를 만나요|t:je vois un ami]]' },
    { id: 'm2-ko-mannayo', kind: 'phrase', ko: '만나요', fr: 'je rencontre, je vois (quelqu’un) (poli)', note: '🤝 Infinitif : [[만나다]]. Avec [[을/를|p:object]] : [[친구를 만나요]]. Futur : [[만날 거예요]].' },
    { id: 'm2-ko-swieoyo', kind: 'phrase', ko: '쉬어요', fr: 'je me repose (poli)', note: '🛋️ Infinitif : [[쉬다]]. Futur : [[쉴 거예요]] ([[쉬]] finit par une voyelle).' },
    { id: 'm2-ko-undonghaeyo', kind: 'phrase', ko: '운동해요', fr: 'je fais du sport (poli)', note: '🏃 Infinitif : [[운동하다|p:hada]]. Futur : [[운동할 거예요]].' },
    { id: 'm2-ko-yeonghwa', kind: 'vocab', ko: '영화', fr: 'film ; cinéma', note: '🎬 [[영화를 봐요|t:je regarde un film]] · [[영화를 볼 거예요|t:je vais voir un film]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le week-end : 주말' },
        { type: 'text', text: 'En Corée, le lundi, on se demande ce qu’on a fait ([[뭐 했어요?]]). Et le vendredi, on se demande… ce qu’on **va** faire !' },
        { type: 'breakdown', segments: [
          { ko: '주말', role: 'time', gloss: 'week-end', particle: { ko: '에', key: 'time' } },
          { ko: '뭐', role: 'object', gloss: 'quoi' },
          { ko: '할 거예요?', role: 'verb', gloss: 'vas faire ?' },
        ], translation: 'Que vas-tu faire ce week-end ?', note: '[[주말]] prend le [[에|p:time]] du temps, comme [[아침에]] ou [[세 시에]].' },
      ],
    },
    { kind: 'practice', exercise: { type: 'listen', audio: '주말에 뭐 할 거예요?', choices: ['주말에 뭐 할 거예요?', '어제 뭐 했어요?', '지금 몇 시예요?'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les cartes d’activités 🃏' },
        { type: 'text', text: 'Pour répondre, la classe pioche des cartes. Voici les tiennes :' },
        { type: 'letters', items: [
          { char: '운동해요', mnemonic: '🏃 sport' },
          { char: '영화를 봐요', mnemonic: '🎬 cinéma' },
          { char: '쉬어요', mnemonic: '🛋️ repos' },
          { char: '책을 읽어요', mnemonic: '📖 lecture' },
          { char: '친구를 만나요', mnemonic: '👫 voir un ami' },
        ] },
        { type: 'text', text: '[[친구|t:ami]] · [[만나다|t:rencontrer, voir]] · [[쉬다|t:se reposer]] · [[운동하다|t:faire du sport]] · [[영화|t:film]]. Attention : en coréen, on « rencontre » **un ami** comme un objet : [[친구를|p:object]] [[만나요]].' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque carte à son image.', pairs: [['운동해요', '🏃'], ['영화를 봐요', '🎬'], ['쉬어요', '🛋️'], ['책을 읽어요', '📖'], ['친구를 만나요', '👫']] } },
    { kind: 'practice', exercise: { type: 'cloze', before: '친구', after: ' 만나요.', choices: ['를', '에', '가'], answer: 0, translation: 'Je vois un ami.', explain: 'L’ami est l’objet de [[만나요]] : [[를|p:object]] (après voyelle).' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les cartes… au futur' },
        { type: 'table', head: ['Présent', 'Futur'], rows: [
          ['[[운동해요]]', '[[운동할 거예요]]'],
          ['[[영화를 봐요]]', '[[영화를 볼 거예요]]'],
          ['[[쉬어요]]', '[[쉴 거예요]]'],
          ['[[책을 읽어요]]', '[[책을 읽을 거예요]]'],
          ['[[친구를 만나요]]', '[[친구를 만날 거예요]]'],
        ] },
        { type: 'tip', text: 'Piège ! [[쉬다]] finit par une **voyelle** ([[쉬]]) : on dit [[쉴 거예요]], jamais « 쉬을 거예요 ». Même règle que [[가다]] → [[갈 거예요]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Futur de [[쉬다]] (se reposer) :', choices: ['쉴 거예요', '쉬을 거예요', '쉬었어요'], answer: 0, explain: '[[쉬]] finit par une voyelle → ㄹ dessous : [[쉴]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Futur de [[만나다]] (rencontrer) :', answer: fut('만날 거예요') } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Futur de [[운동하다]] (faire du sport) :', answer: fut('운동할 거예요') } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Où ? Avec 에서 !' },
        { type: 'text', text: 'Ajoute le **lieu de l’action** avec [[에서|p:action]], juste après le moment :' },
        { type: 'breakdown', segments: [
          { ko: '주말', role: 'time', gloss: 'week-end', particle: { ko: '에', key: 'time' } },
          { ko: '공원', role: 'place', gloss: 'parc', particle: { ko: '에서', key: 'action' } },
          { ko: '친구', role: 'object', gloss: 'ami', particle: { ko: '를', key: 'object' } },
          { ko: '만날 거예요', role: 'verb', gloss: 'vais voir' },
        ], translation: 'Ce week-end, je vais voir un ami au parc.', note: '**Quand** → **où** → **quoi** → **verbe**. C’est la phrase complète de la quinzaine !' },
        { type: 'text', text: 'Et la grande question : [[주말에 어디에서 뭐 할 거예요?|t:ce week-end, où vas-tu faire quoi ?]]' },
      ],
    },
    { kind: 'practice', exercise: { type: 'order', translation: 'Ce week-end, je vais me reposer à la maison.', tiles: ['주말에', '집에서', '쉴 거예요'], distractors: ['집에', '쉬을 거예요'] } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Ce week-end, je vais voir un ami au parc.', tiles: ['주말에', '공원에서', '친구를', '만날 거예요'], distractors: ['공원에'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Jeu de rôle en binôme 🎭' },
        { type: 'text', text: 'Vendredi après-midi, Marie interroge son voisin. [[들으세요!]]' },
        { type: 'dialog', lines: [
          { who: 'Marie', ko: '루이, 주말에 뭐 할 거예요?' },
          { who: 'Louis', ko: '토요일에 공원에서 축구를 할 거예요.' },
          { who: 'Marie', ko: '일요일에는요?', fr: 'Et dimanche ?' },
          { who: 'Louis', ko: '집에서 쉴 거예요. 그리고 영화를 볼 거예요. 마리는요?', fr: '… Et toi, Marie ?' },
          { who: 'Marie', ko: '저는 도서관에서 책을 읽을 거예요. 그리고 친구를 만날 거예요.' },
        ] },
        { type: 'tip', text: '[[마리는요?]] = « Et Marie ? » : on renvoie la question avec [[는|p:topic]] + [[요]]. Pratique !', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[루이는 토요일에 뭐 할 거예요?]]', choices: ['⚽ 축구를 할 거예요', '🎬 영화를 볼 거예요', '📖 책을 읽을 거예요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Où Louis va-t-il jouer au football ?', choices: ['🌳 au parc', '🏠 à la maison', '📚 à la bibliothèque'], answer: 0, explain: '[[공원에서 축구를 할 거예요]].' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[마리는 주말에 뭐 할 거예요?]]', choices: ['📖 + 👫', '⚽ + 🛋️', '🎬 + 😴'], answer: 0, explain: '[[책을 읽을 거예요. 그리고 친구를 만날 거예요.]]' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Présenter les projets de son camarade 🎤' },
        { type: 'text', text: 'Après le jeu de rôle, chacun présente **les projets de l’autre** à la classe. On remplace [[저는]] par le prénom + [[는|p:topic]] :' },
        { type: 'text', text: '[[루이는 토요일에 공원에서 축구를 할 거예요.]]' },
        { type: 'text', text: '[[그리고 일요일에 집에서 쉴 거예요.]]' },
      ],
    },
    { kind: 'practice', exercise: { type: 'type', prompt: '🎤 Présente le projet de Marie : 👧 + 🎬 (au futur, commence par [[마리는]])', answer: fut('마리는 영화를 볼 거예요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: '[[주말에 뭐 할 거예요?]] [[쓰세요!]]', placeholder: '주말에 친구를 만날 거예요', mustInclude: ['거예요'] } },
    { kind: 'practice', exercise: { type: 'write', prompt: '[[주말에 어디에서 뭐 할 거예요?]] (avec un lieu + [[에서|p:action]])', placeholder: '주말에 집에서 쉴 거예요', mustInclude: ['에서', '거예요'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '주말에 뭐 할 거예요? 집에서 쉴 거예요.', fr: 'Que vas-tu faire ce week-end ? Je vais me reposer à la maison.', prompt: 'Joue les deux rôles : pose la question, puis réponds !' } },
  ],
  interleave: [
    { type: 'type', prompt: 'Futur de [[가다]] :', answer: fut('갈 거예요') },
    { type: 'cloze', before: '집', after: ' 밥을 먹었어요.', choices: EN_ESEO, answer: 1, translation: 'J’ai mangé à la maison.' },
    { type: 'mcq', prompt: '📅 [[오늘은 금요일이에요.]] Quel jour est [[내일]] ?', choices: ['토요일', '목요일', '일요일'], answer: 0 },
    { type: 'clock', prompt: '[[들으세요!]] 🎧 Place les aiguilles.', audio: '열한 시 십 분', h: 11, m: 10 },
  ],
};

const day29: Lesson = {
  id: 'm2-w2-d4',
  month: 2,
  week: 2,
  day: 29,
  title: 'Hier, aujourd’hui, demain : les trois temps',
  summary: 'Un même verbe à trois temps (먹었어요 · 먹어요 · 먹을 거예요), le tableau des temps, 지난 주말 / 다음 주말, et un récit.',
  cards: [
    { id: 'm2-ko-three-tenses', kind: 'grammar', ko: '먹었어요 · 먹어요 · 먹을 거예요', fr: 'j’ai mangé · je mange · je mangerai', note: '⬅️ [[passé|p:past]] · 📍 [[présent|p:present]] · ➡️ [[futur|p:future]]' },
    { id: 'm2-ko-jinan-jumal', kind: 'vocab', ko: '지난 주말', fr: 'le week-end dernier', note: '⬅️ Avec le passé : [[지난 주말에 뭐 했어요?|t:qu’as-tu fait le week-end dernier ?]]' },
    { id: 'm2-ko-daeum-jumal', kind: 'vocab', ko: '다음 주말', fr: 'le week-end prochain', note: '➡️ Avec le futur : [[다음 주말에 뭐 할 거예요?|t:que vas-tu faire le week-end prochain ?]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Un verbe, trois temps' },
        { type: 'text', text: 'Tu connais maintenant les **trois temps** du coréen. Déplace le curseur et écoute [[먹다]] voyager dans le temps :' },
        { type: 'timeline', start: 1, points: [
          { label: '어제 ⬅️', ko: '어제 사과를 먹었어요.', fr: 'Hier, j’ai mangé une pomme.' },
          { label: '오늘 📍', ko: '오늘 사과를 먹어요.', fr: 'Aujourd’hui, je mange une pomme.' },
          { label: '내일 ➡️', ko: '내일 사과를 먹을 거예요.', fr: 'Demain, je mangerai une pomme.' },
        ] },
        { type: 'table', head: ['', 'Comment ?', 'Exemple'], rows: [
          ['⬅️ [[passé|p:past]]', 'présent sans [[요]] + **ㅆ** + [[어요]]', '[[먹었어요]] · [[갔어요]]'],
          ['📍 [[présent|p:present]]', '-아요 🔴 / -어요 🔵', '[[먹어요]] · [[가요]]'],
          ['➡️ [[futur|p:future]]', '을 거예요 🟤 / ㄹ 거예요 🟢', '[[먹을 거예요]] · [[갈 거예요]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '⬅️ [[어제]] + [[보다]]', choices: ['봤어요', '봐요', '볼 거예요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '➡️ [[내일]] + [[읽다]]', choices: ['읽을 거예요', '읽었어요', '읽ㄹ 거예요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le tableau à trois colonnes 📋' },
        { type: 'text', text: 'Activité de la classe : remplir le tableau des temps. Voici la première ligne, en exemple :' },
        { type: 'table', head: ['Verbe', '⬅️ [[어제]]', '📍 [[오늘]]', '➡️ [[내일]]'], rows: [
          ['[[가다]]', '[[갔어요]]', '[[가요]]', '[[갈 거예요]]'],
        ] },
        { type: 'tip', text: 'Touche une case vide, écris avec le clavier, puis appuie sur **Suivant**. Commence par la colonne que tu trouves la plus facile !', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Complète le tableau (une case par ligne).', head: ['Verbe', '⬅️ [[어제]]', '📍 [[오늘]]', '➡️ [[내일]]'], rows: [
      ['먹다', '먹었어요', '먹어요', blank('먹을 거예요')],
      ['보다', { answer: '봤어요' }, '봐요', '볼 거예요'],
      ['공부하다', '공부했어요', { answer: '공부해요' }, '공부할 거예요'],
      ['읽다', '읽었어요', '읽어요', blank('읽을 거예요')],
      ['마시다', { answer: '마셨어요' }, '마셔요', '마실 거예요'],
    ] } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Maintenant, **en autonomie** : deux lignes entières !', head: ['Verbe', '⬅️ [[어제]]', '📍 [[오늘]]', '➡️ [[내일]]'], rows: [
      ['자다', { answer: '잤어요' }, { answer: '자요' }, blank('잘 거예요')],
      ['만나다', { answer: '만났어요' }, { answer: '만나요' }, blank('만날 거예요')],
    ], explain: '[[자]] et [[만나]] finissent par [[ㅏ]] : 🔴 et 🟢 partout. [[만나]] + 았어요 → [[만났어요]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le week-end dernier, le week-end prochain' },
        { type: 'text', text: 'Deux nouveaux repères : [[지난|t:dernier]] et [[다음|t:prochain]]. Ils se placent **devant** [[주말]], et cette fois on garde le [[에|p:time]] :' },
        { type: 'timeline', start: 0, points: [
          { label: '지난 주말 ⏪', ko: '지난 주말에 영화를 봤어요.', fr: 'Le week-end dernier, j’ai vu un film.' },
          { label: '어제 ⬅️', ko: '어제 친구를 만났어요.', fr: 'Hier, j’ai vu un ami.' },
          { label: '오늘 📍', ko: '오늘 한국어를 공부해요.', fr: 'Aujourd’hui, j’étudie le coréen.' },
          { label: '내일 ➡️', ko: '내일 운동할 거예요.', fr: 'Demain, je ferai du sport.' },
          { label: '다음 주말 ⏩', ko: '다음 주말에 공원에 갈 거예요.', fr: 'Le week-end prochain, j’irai au parc.' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', before: '지난 주말에 친구를 ', after: '.', choices: ['만났어요', '만날 거예요', '만나요'], answer: 0, translation: 'Le week-end dernier, j’ai vu un ami.' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '다음 주말에 도서관에 ', after: '.', choices: ['갈 거예요', '갔어요'], answer: 0, translation: 'Le week-end prochain, j’irai à la bibliothèque.' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🕵️ Quelle phrase est **incohérente** ?', choices: ['어제 축구를 할 거예요', '어제 축구를 했어요', '내일 축구를 할 거예요'], answer: 0, explain: '[[어제]] avec un futur ? Impossible ! [[어제 축구를 했어요]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Transformer un récit 🔁' },
        { type: 'text', text: 'Activité de la classe : voici le petit texte de Louis, **au présent**. [[보세요!]]' },
        { type: 'text', text: '[[학교에 가요. 학교에서 한국어를 공부해요.]]' },
        { type: 'text', text: '[[점심에 식당에서 밥을 먹어요. 저녁에 집에서 책을 읽어요.]]' },
        { type: 'text', text: 'Ta mission : raconter la même journée **hier**, puis **demain**. Seul le verbe change !' },
      ],
    },
    { kind: 'practice', exercise: { type: 'type', prompt: '⬅️ [[어제]] : « [[학교에 가요.]] » →', answer: '어제 학교에 갔어요' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '➡️ [[내일]] : « [[학교에서 한국어를 공부해요.]] » →', answer: fut('내일 학교에서 한국어를 공부할 거예요') } },
    { kind: 'practice', exercise: { type: 'order', prompt: '⬅️ [[어제]]', translation: 'Hier, à midi, j’ai mangé à la cantine.', tiles: ['어제', '점심에', '식당에서', '밥을', '먹었어요'], distractors: ['먹을 거예요', '식당에'] } },
    { kind: 'practice', exercise: { type: 'order', prompt: '➡️ [[내일]]', translation: 'Demain soir, je lirai un livre à la maison.', tiles: ['내일', '저녁에', '집에서', '책을', '읽을 거예요'], distractors: ['읽었어요', '집에'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le récit de Marie 📖' },
        { type: 'text', text: 'Trois temps dans un seul récit, **sans traduction**. Touche chaque phrase pour l’entendre.' },
        { type: 'text', text: '[[어제 마리는 도서관에 갔어요. 도서관에서 한국어를 공부했어요.]]' },
        { type: 'text', text: '[[오늘은 금요일이에요. 마리는 학교에서 친구를 만나요.]]' },
        { type: 'text', text: '[[내일 마리는 공원에서 운동할 거예요. 그리고 저녁에 영화를 볼 거예요.]]' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[마리는 어제 어디에 갔어요?]]', choices: ['도서관에 갔어요', '공원에 갔어요', '식당에 갔어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[마리는 내일 공원에서 뭐 할 거예요?]]', choices: ['운동할 거예요', '영화를 볼 거예요', '공부했어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'À toi, deux phrases : [[어제]] (passé) puis [[내일]] (futur). [[쓰세요!]]', placeholder: '어제 쉬었어요. 내일 운동할 거예요.', mustInclude: ['어제', PAST_ANY, '내일', '거예요'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '어제 사과를 먹었어요. 오늘 사과를 먹어요. 내일 사과를 먹을 거예요!', fr: 'Hier, j’ai mangé une pomme. Aujourd’hui, je mange une pomme. Demain, je mangerai une pomme !', prompt: 'Lis à voix haute, de plus en plus vite 🍎🍎🍎' } },
  ],
  interleave: [
    { type: 'mcq', prompt: 'Futur de [[쉬다]] :', choices: ['쉴 거예요', '쉬을 거예요', '쉬어 거예요'], answer: 0 },
    { type: 'cloze', before: '공원', after: ' 운동해요.', choices: EN_ESEO, answer: 1, translation: 'Je fais du sport au parc.' },
    { type: 'listen', audio: '친구', choices: ['친구', '축구', '지금'], answer: 0 },
    { type: 'cloze', before: '아침을 먹었어요. ', after: ' 학교에 갔어요.', choices: ['그리고', '그래서'], answer: 0, translation: 'J’ai pris mon petit-déjeuner. Et puis je suis allé(e) à l’école.' },
  ],
};

const PARTICLES: [string, string, 0 | 1, string][] = [
  ['학교', ' 가요.', 0, 'Je vais à l’école.'],
  ['식당', ' 밥을 먹어요.', 1, 'Je mange au restaurant.'],
  ['도서관', ' 책을 읽었어요.', 1, 'J’ai lu un livre à la bibliothèque.'],
  ['연필이 가방', ' 있어요.', 0, 'Le crayon est dans le sac.'],
  ['주말에 공원', ' 운동할 거예요.', 1, 'Ce week-end, je ferai du sport au parc.'],
];

const DICTATION = ['어제 도서관에서 책을 읽었어요', '내일 친구를 만날 거예요', '주말에 공원에 갈 거예요'];

const day30: Lesson = {
  id: 'm2-w2-d5',
  month: 2,
  week: 2,
  day: 30,
  title: 'Bilan de quinzaine & Grande évaluation n°3',
  summary: 'Le jeu de plateau, une dictée, la Grande évaluation bimensuelle n°3, une histoire aux trois temps et ton bilan.',
  cards: [],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le jeu de plateau 🎲' },
        { type: 'text', text: 'Pour réviser, la classe joue à un jeu de plateau : chaque case est un défi. Lance le dé… et avance !' },
        { type: 'table', head: ['Case', 'Défi'], rows: [
          ['⚀ 🕐', 'lire l’heure'],
          ['⚁ ⬅️', 'raconter au [[passé|p:past]]'],
          ['⚂ 🎯⚙️', '[[에|p:place]] ou [[에서|p:action]] ?'],
          ['⚃ ➡️', 'parler au [[futur|p:future]]'],
          ['⚄ 💡', '[[그리고]] ou [[그래서]] ?'],
          ['⚅ 🏁', 'la grande question du week-end'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'clock', prompt: '⚀ 🕐 — [[들으세요!]] Place les aiguilles.', audio: '네 시 사십오 분', h: 4, m: 45 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '⚁ ⬅️ — [[지난 주말에]] + [[영화를 봐요]] → au passé :', answer: '지난 주말에 영화를 봤어요' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '⚂ 🎯⚙️', before: '집', after: ' 쉬어요.', choices: EN_ESEO, answer: 1, translation: 'Je me repose à la maison.' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '⚃ ➡️ — [[내일]] + [[친구를 만나요]] → au futur :', answer: fut('내일 친구를 만날 거예요') } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '⚄ 💡', before: '축구를 좋아해요. ', after: ' 주말에 축구를 할 거예요.', choices: ['그래서', '그리고'], answer: 0, translation: 'J’aime le football. Donc ce week-end, je jouerai au football.' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '주말에 어디에서 뭐 할 거예요?', choices: ['주말에 어디에서 뭐 할 거예요?', '주말에 어디에 갔어요?', '어제 뭐 했어요?'], answer: 0, explain: '⚅ 🏁 La grande question ! Tu y répondras dans l’évaluation.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La dictée ✍️' },
        { type: 'text', text: '[[들으세요!]] Puis [[쓰세요!]] Trois phrases qui mélangent les temps et les lieux. Réécoute autant que tu veux.' },
      ],
    },
    ...DICTATION.map((s, i) => ({
      kind: 'practice' as const,
      exercise: { type: 'type' as const, prompt: `Dictée ${i + 1}/${DICTATION.length}`, audio: s, answer: fut(s) },
    })),
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Grande évaluation n°3' },
        { type: 'text', text: 'Quatre parties pour faire le point sur tes **deux dernières semaines**. Pas de piège, pas de chrono : chaque erreur reviendra simplement en révision.' },
        { type: 'table', head: ['Partie', 'Contenu'], rows: [
          ['A', 'Choix de particule : [[에]] ou [[에서]] ?'],
          ['B', 'Conjugaison aux trois temps'],
          ['C', 'Compréhension écrite : phrases au futur'],
          ['D', 'Production : [[주말에 어디에서 뭐 할 거예요?]]'],
        ] },
        { type: 'tip', text: '**A — Choix de particule.** Pour chaque phrase, demande-toi : 🎯 on y va / on y est, ou ⚙️ on y fait quelque chose ?', mood: 'encourage' },
      ],
    },
    ...PARTICLES.map(([before, after, answer, translation], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'cloze' as const, prompt: `**A · ${i + 1}/${PARTICLES.length}**`, before, after, choices: EN_ESEO, answer, translation },
    })),
    { kind: 'learn', blocks: [{ type: 'tip', text: '**B — Conjugaison aux trois temps.** Complète le tableau : touche une case vide, puis écris.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'grid', prompt: '**B** — Le tableau des temps.', head: ['Verbe', '⬅️ [[어제]]', '📍 [[오늘]]', '➡️ [[내일]]'], rows: [
      ['가다', '갔어요', '가요', blank('갈 거예요')],
      ['먹다', { answer: '먹었어요' }, '먹어요', '먹을 거예요'],
      ['공부하다', { answer: '공부했어요' }, { answer: '공부해요' }, blank('공부할 거예요')],
    ] } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**C — Compréhension écrite.** Lis chaque phrase et relie-la à son image.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'match', prompt: '**C** — Relie chaque projet à son image.', pairs: [['운동할 거예요', '🏃'], ['책을 읽을 거예요', '📖'], ['잘 거예요', '😴'], ['공원에 갈 거예요', '🌳']] } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**D — Production.** Le professeur te demande : [[주말에 어디에서 뭐 할 거예요?]] Réponds avec **une phrase complète** : un lieu + [[에서|p:action]], et un verbe au futur. Puis écoute-la.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'write', prompt: '**D · 1/2** — [[주말에 어디에서 뭐 할 거예요?]]', placeholder: '공원에서 운동할 거예요', mustInclude: ['에서', '거예요'] } },
    { kind: 'practice', exercise: { type: 'write', prompt: '**D · 2/2** — Bonus : et [[지난 주말에 뭐 했어요?]]', placeholder: '지난 주말에 집에서 쉬었어요', mustInclude: [PAST_ANY] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le week-end de Nabi 📖' },
        { type: 'text', text: 'Une histoire aux **trois temps**, entièrement en coréen : tu connais tous les mots ! Touche une phrase pour l’entendre.' },
        { type: 'text', text: '[[지난 주말에 나비는 도서관에 갔어요.]] [[도서관에서 한국어 책을 읽었어요.]]' },
        { type: 'text', text: '[[그리고 공원에서 친구를 만났어요.]] [[친구는 사과를 좋아해요. 그래서 공원에서 사과를 먹었어요.]] 🍎' },
        { type: 'text', text: '[[오늘은 금요일이에요.]] [[나비는 학교에서 공부해요.]]' },
        { type: 'text', text: '[[다음 주말에 나비는 집에서 쉴 거예요.]] [[일요일에 식당에서 밥을 먹을 거예요.]] [[그리고 영화를 볼 거예요!]] 🎬' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[지난 주말에 나비는 어디에 갔어요?]]', choices: ['도서관에 갔어요', '식당에 갔어요', '학교에 갔어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi Nabi et son ami ont-ils mangé des pommes au parc ?', choices: ['L’ami aime les pommes.', 'Nabi n’aime pas le lait.', 'C’était dimanche.'], answer: 0, explain: '[[친구는 사과를 좋아해요. 그래서…]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[나비는 일요일에 뭐 할 거예요?]]', choices: ['🍽️ + 🎬', '📚 + 👫', '⚽ + 😴'], answer: 0, explain: '[[식당에서 밥을 먹을 거예요. 그리고 영화를 볼 거예요!]]' } },
    { kind: 'practice', exercise: { type: 'read', ko: '다음 주말에 나비는 집에서 쉴 거예요. 그리고 영화를 볼 거예요!', fr: 'Le week-end prochain, Nabi va se reposer à la maison. Et Nabi va voir un film !', prompt: 'Lis la fin de l’histoire à voix haute, comme un conteur !' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ton bilan de quinzaine 🎓' },
        { type: 'text', text: 'Tu construis maintenant des **phrases complètes** : moment, lieu d’action, objet et verbe, au temps que tu veux.' },
        { type: 'breakdown', segments: [
          { ko: '주말', role: 'time', gloss: 'week-end', particle: { ko: '에', key: 'time' } },
          { ko: '공원', role: 'place', gloss: 'parc', particle: { ko: '에서', key: 'action' } },
          { ko: '친구', role: 'object', gloss: 'ami', particle: { ko: '를', key: 'object' } },
          { ko: '만날 거예요', role: 'verb', gloss: 'vais voir' },
        ], translation: 'Ce week-end, je vais voir un ami au parc.' },
        { type: 'table', head: ['Domaine', 'Acquis'], rows: [
          ['L’heure', 'nombres **natifs** + **sino-coréens** : [[세 시 십 분]] · [[일곱 시 반]]'],
          ['Les temps', '[[passé|p:past]] · [[présent|p:present]] · [[futur|p:future]] : [[먹었어요]] · [[먹어요]] · [[먹을 거예요]]'],
          ['Les lieux', '🎯 [[에|p:place]] (on y va, on y est) · ⚙️ [[에서|p:action]] (on y fait quelque chose)'],
          ['Les repères', '[[어제]] · [[오늘]] · [[내일]] · [[지난 주말]] · [[다음 주말]]'],
          ['Raconter', '[[그리고]] ➡️ · [[그래서]] 💡 : ton week-end, à l’oral et à l’écrit'],
          ['Vocabulaire', '**environ 100 mots** depuis le premier jour !'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'read', ko: '지난 주말에 집에서 쉬었어요. 다음 주말에 친구를 만날 거예요.', fr: 'Le week-end dernier, je me suis reposé(e) à la maison. Le week-end prochain, je verrai un ami.', prompt: 'Raconte **ton** week-end à Nabi à voix haute (change les mots si tu veux !), puis écoute le modèle.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Bravo, semaine 6 terminée ! 🎉' },
        { type: 'text', text: 'Il y a deux semaines, tu ne savais dire que le présent. Aujourd’hui, tu racontes **ton passé**, tu parles de **tes projets**, et tu dis **où** tout se passe.' },
        { type: 'tip', text: 'La semaine prochaine, tu vas apprendre à **expliquer** et à **proposer**. [[내일 한국어를 공부할 거예요?]] [[네!]] 🦋 [[안녕!]]', mood: 'happy' },
      ],
    },
  ],
};

export const m2w2: Lesson[] = [day26, day27, day28, day29, day30];
