import type { GridBlank, Lesson } from '../types';

const COLLAPSE: [RegExp, string][] = [
  [/도 돼요/g, '도돼요'],
  [/안 돼요/g, '안돼요'],
  [/ 주세요/g, '주세요'],
  [/ 거예요/g, '거예요'],
];
const alts = (...xs: string[]): string[] => {
  const out = new Set(xs);
  for (const [re, to] of COLLAPSE) for (const s of [...out]) out.add(s.replace(re, to));
  for (const s of [...out]) out.add(s.replace(/[.,!?] /g, ' '));
  return [...out];
};
const blank = (s: string): GridBlank => ({ answer: alts(s) });

const HONOR_ANY = '세요|셨어요';
const HONOR_WORD_ANY = '드세요|계세요|드셨어요|계셨어요';
const PERMIT_ANY = '도 돼요|도돼요';
const CAUSE_ANY = ['아서', '어서', '와서', '파서', '빠서', '해서', '워서', '라서'].join('|');

const day46: Lesson = {
  id: 'm3-w2-d1',
  month: 3,
  week: 2,
  day: 46,
  title: 'Le respect : -(으)시-',
  summary: 'Glisser 시 dans le verbe pour parler d’une personne respectée : 가세요, 읽으세요, 앉으세요, 선생님, 어디에 가세요?',
  cards: [
    { id: 'm3-ko-jondaenmal', kind: 'vocab', ko: '존댓말', fr: 'langage respectueux (pour les aînés, les inconnus)', note: '🙇 Le contraire : [[반말|t:langage familier]], entre amis du même âge.' },
    { id: 'm3-ko-honor-si', kind: 'grammar', ko: '가세요 · 읽으세요', fr: '(une personne respectée) va · lit — radical + (으)시 + 어요 → (으)세요', note: '🙇 Voyelle → [[세요]] ([[가세요]], [[보세요]]) · consonne → [[으세요]] ([[읽으세요]], [[앉으세요]]) · [[하세요]]. Jamais pour soi : [[저는 가요]]. Règle : [[honorifique|p:honor]]' },
    { id: 'm3-ko-gaseyo', kind: 'phrase', ko: '가세요', fr: 'allez-y ; (le professeur, ma mère…) va — honorifique', note: '🚶 [[가다]] → [[가시다]] → [[가세요]]. Passé : [[가셨어요]].' },
    { id: 'm3-ko-ilgeuseyo', kind: 'phrase', ko: '읽으세요', fr: 'lisez ; (le professeur…) lit — honorifique', note: '📖 Consonne → [[으세요]]. [[선생님이 책을 읽으세요.]]' },
    { id: 'm3-ko-eodi-gaseyo', kind: 'phrase', ko: '선생님, 어디에 가세요?', fr: 'Monsieur / Madame, où allez-vous ?', note: '🙇 Le professeur répond pour lui-même, sans [[시]] : [[도서관에 가요.]]' },
    { id: 'm3-ko-seonsaengnim-ilgeuseyo', kind: 'phrase', ko: '선생님이 책을 읽으세요', fr: 'Le professeur lit un livre. (honorifique)', note: '🙇 Pour un ami : [[친구가 책을 읽어요.]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le respect se conjugue 🙇' },
        { type: 'tip', text: 'Nouvelle semaine ! Aujourd’hui, un grand secret de la langue coréenne : on ne parle pas **pareil** d’un ami et d’un professeur.', mood: 'happy' },
        { type: 'text', text: 'En Corée, le respect envers les aînés (professeurs, parents, grands-parents…) se voit **dans la grammaire**. C’est le [[존댓말|t:langage respectueux]].' },
        { type: 'text', text: 'Quand la personne qui fait l’action est quelqu’un que tu **respectes**, tu glisses la syllabe **시** dans le verbe :' },
        { type: 'table', head: ['', 'Courant', 'Respectueux'], rows: [
          ['Infinitif', '[[가다]]', '[[가]] + **시** + [[다]] = [[가시다]]'],
          ['Présent poli', '[[가요]]', '시 + 어요 → **세요** : [[가세요]]'],
        ] },
        { type: 'breakdown', segments: [
          { ko: '선생님', role: 'subject', gloss: 'le professeur', particle: { ko: '이', key: 'subject' } },
          { ko: '학교', role: 'place', gloss: 'l’école', particle: { ko: '에', key: 'place' } },
          { ko: '가세요', role: 'verb', gloss: 'va (avec respect)' },
        ], translation: 'Le professeur va à l’école.', note: 'Pour un ami : [[친구가 학교에 가요.]] Même sens, mais pas de **시** : on est du même âge !' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Tu le connais déjà ! 🕵️' },
        { type: 'text', text: 'Depuis la première semaine, le professeur dit [[앉으세요]], [[들으세요]], [[보세요]]… Ce **세요**, c’est lui : **시** + 어요 ! Une consigne en [[-세요|p:seyo]], c’est une demande **respectueuse**.' },
        { type: 'text', text: 'Et la phrase de la semaine 8, [[가르쳐 주셔서 감사합니다]] : [[주]] + **시** + 어서 = [[주셔서]]. Tu remerciais déjà avec respect !' },
        { type: 'tip', text: '[[세요]] a donc deux visages : une **consigne** polie ([[앉으세요!|t:asseyez-vous]]) et une **phrase** sur une personne respectée ([[선생님이 앉으세요.|t:le professeur s’assied]]).', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[보다]] → forme respectueuse :', choices: ['보세요', '보으세요', '봐세요'], answer: 0, explain: '[[보]] finit par une voyelle : + [[세요]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: '세요 ou 으세요 ?' },
        { type: 'text', text: 'Même réflexe que pour [[면 / 으면|p:rules]] et [[ㄹ까요 / 을까요|p:suggest]] : on enlève [[다]] et on regarde la dernière lettre.' },
        { type: 'table', head: ['Le radical finit par…', '', 'Respectueux'], rows: [
          ['🟢 une voyelle', '[[가]] · [[보]] · [[쉬]]', '[[가세요]] · [[보세요]] · [[쉬세요]]'],
          ['🟤 une consonne', '[[읽]] · [[앉]]', '[[읽으세요]] · [[앉으세요]]'],
          ['⭐ [[하다]]', '[[공부하]] · [[운동하]]', '[[공부하세요]] · [[운동하세요]]'],
          ['🔀 [[ㄷ|p:irreg-d]]', '[[듣]] · [[걷]]', '[[들으세요]] · [[걸으세요]]'],
        ] },
        { type: 'liaison', items: [
          { written: '읽으세요', spoken: '일그세요', fr: 'lisez' },
          { written: '앉으세요', spoken: '안즈세요', fr: 'asseyez-vous' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'sort', prompt: '🟢 세요 ou 🟤 으세요 ?', buckets: ['🟢 세요', '🟤 으세요'], items: [
      { text: '가다', bucket: 0 }, { text: '보다', bucket: 0 }, { text: '쉬다', bucket: 0 }, { text: '가르치다', bucket: 0 },
      { text: '읽다', bucket: 1 }, { text: '앉다', bucket: 1 }, { text: '놓다', bucket: 1 },
    ], explain: 'Voyelle → [[세요]]. Consonne → [[으세요]] ([[놓으세요]], comme en semaine 3 !).' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[읽다]] → forme respectueuse :', answer: '읽으세요' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[공부하다]] → forme respectueuse :', answer: '공부하세요' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '가세요', choices: ['가세요', '가요', '갈까요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Pour qui, le 시 ? 🎯' },
        { type: 'text', text: 'Le **시** honore la personne qui fait l’action, **jamais toi-même**. Regarde :' },
        { type: 'dialog', lines: [
          { who: '마리', ko: '선생님, 어디에 가세요?' },
          { who: '선생님', ko: '도서관에 가요. 마리는요?' },
          { who: '마리', ko: '저는 집에 가요.' },
          { who: '선생님', ko: '어머니가 집에 오세요?' },
          { who: '마리', ko: '네! 어머니가 오세요.' },
        ] },
        { type: 'tip', text: 'Le professeur répond [[가요]] (pour lui-même), mais demande [[어머니가 오세요?]] : la maman de Marie est une adulte, elle a droit au **시** ! [[오다|t:venir]] → [[오세요]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Avec ou sans 시 ?', buckets: ['🙇 avec 시', '🙂 sans 시'], items: [
      { text: '선생님이 가세요', bucket: 0 }, { text: '어머니가 읽으세요', bucket: 0 }, { text: '아버지가 공부하세요', bucket: 0 },
      { text: '저는 가요', bucket: 1 }, { text: '동생이 읽어요', bucket: 1 }, { text: '친구가 공부해요', bucket: 1 },
    ], explain: 'Professeur, parents → **시**. Toi, ton petit frère, ton ami → pas de **시**.' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '저는 도서관에 ', after: '.', choices: ['가요', '가세요'], answer: 0, translation: 'Je vais à la bibliothèque.', explain: 'Jamais de **시** pour soi-même !' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '선생님이 교실에서 책을 ', after: '.', choices: ['읽으세요', '읽어요', '읽세요'], answer: 0, translation: 'Le professeur lit un livre dans la classe.' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Monsieur / Madame, où allez-vous ?', tiles: ['선생님,', '어디에', '가세요?'], distractors: ['가요?', '갈까요?'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Et au passé ? ⏪' },
        { type: 'text', text: 'Même truc que le [[passé|p:past]] : **시** + 었어요 → **셨어요**. À reconnaître pour l’instant :' },
        { type: 'table', head: ['Courant', 'Respectueux', ''], rows: [
          ['[[갔어요]]', '[[가셨어요]]', 'il / elle est allé(e)'],
          ['[[읽었어요]]', '[[읽으셨어요]]', 'il / elle a lu'],
          ['[[공부했어요]]', '[[공부하셨어요]]', 'il / elle a étudié'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[선생님이 집에 가셨어요.]] veut dire…', choices: ['Le professeur est rentré à la maison.', 'Le professeur rentre à la maison.', 'Le professeur rentrera à la maison.'], answer: 0, explain: '[[셨어요]] = **시** + passé.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Professeur d’un jour 👩‍🏫' },
        { type: 'text', text: 'Jeu de rôle : c’est **toi** le professeur ! Donne des consignes polies à la classe :' },
        { type: 'letters', items: [
          { char: '앉으세요', mnemonic: '🪑 asseyez-vous' },
          { char: '읽으세요', mnemonic: '📖 lisez' },
          { char: '가세요', mnemonic: '🚶 allez-y' },
          { char: '쓰세요', mnemonic: '✍️ écrivez' },
          { char: '들으세요', mnemonic: '👂 écoutez' },
        ] },
        { type: 'text', text: 'Et quand c’est **ton** tour de demander au professeur de lire : [[선생님, 읽으세요.|t:Monsieur / Madame, lisez, s’il vous plaît]]' },
        { type: 'tip', text: 'Pour un **service** rendu à toi, tu connais aussi [[읽어 주세요|p:request]] : encore plus doux. Les deux sont polis !', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Professeur d’un jour : relie chaque consigne à son geste.', pairs: [['앉으세요', '🪑'], ['읽으세요', '📖'], ['가세요', '🚶'], ['쓰세요', '✍️'], ['들으세요', '👂']] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Écris une phrase sur ton professeur ou un parent, avec **세요**. [[쓰세요!]]', placeholder: '선생님이 책을 읽으세요', mustInclude: [HONOR_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '선생님, 읽으세요.', fr: 'Monsieur / Madame, lisez, s’il vous plaît.', prompt: 'Mise en pratique : adresse-toi au professeur, avec un grand sourire 🙇' } },
  ],
  interleave: [
    { type: 'type', prompt: '[[어렵다]] au présent poli :', answer: '어려워요' },
    { type: 'cloze', before: '비싸', after: ' 맛있어요.', choices: ['지만', '서'], answer: 0, translation: 'C’est cher, mais c’est bon.' },
    { type: 'mcq', prompt: '[[앉으세요]] veut dire…', choices: ['Asseyez-vous.', 'Levez-vous.', 'Écoutez.'], answer: 0 },
    { type: 'type', prompt: '🙏 « Parlez lentement, s’il vous plaît » :', answer: alts('천천히 말해 주세요') },
  ],
};

const LETTER: string[] = [
  '[[할머니, 안녕하세요?]]',
  '[[점심 드셨어요?]]',
  '[[저는 학교에서 한국어를 공부해요.]] [[한국어가 어렵지만 재미있어요.]]',
  '[[할아버지도 집에 계세요?]]',
  '[[다음 주말에 할머니 댁에 갈 거예요!]]',
  '[[사랑해요!|t:je vous aime]] — [[마리]]',
];

const day47: Lesson = {
  id: 'm3-w2-d2',
  month: 3,
  week: 2,
  day: 47,
  title: 'Les mots des aînés : 드세요, 계세요',
  summary: 'Les mots qui changent complètement pour les aînés (먹다 → 드시다, 있다 → 계시다), dire au revoir, et une lettre à grand-mère.',
  cards: [
    { id: 'm3-ko-halmeoni', kind: 'vocab', ko: '할머니', fr: 'grand-mère', note: '👵 [[할머니가 집에 계세요.]]' },
    { id: 'm3-ko-harabeoji', kind: 'vocab', ko: '할아버지', fr: 'grand-père', note: '👴 Tu reconnais [[아버지]] dedans !' },
    { id: 'm3-ko-honor-words', kind: 'grammar', ko: '먹다 · 마시다 → 드시다 · 있다 → 계시다', fr: 'manger · boire → (honorifique) · être quelque part → (honorifique)', note: '🙇 Pas de [[먹으세요]] pour un aîné : [[드세요]]. Pas de [[있으세요]] pour dire où il est : [[계세요]]. Aussi : [[나이]] → [[연세|t:âge (respectueux)]]. Règle : [[mots honorifiques|p:honor-words]]' },
    { id: 'm3-ko-deuseyo', kind: 'phrase', ko: '드세요', fr: 'mangez / buvez, servez-vous ; (un aîné) mange, boit', note: '🍚 Infinitif : [[드시다]]. Faux jumeau : [[들으세요]] (écoutez).' },
    { id: 'm3-ko-gyeseyo', kind: 'phrase', ko: '계세요', fr: '(un aîné) est là, se trouve…', note: '🏠 Infinitif : [[계시다]]. [[할머니가 집에 계세요.]] Pour soi : [[집에 있어요.]]' },
    { id: 'm3-ko-gyosil-gyeseyo', kind: 'phrase', ko: '선생님, 교실에 계세요?', fr: 'Monsieur / Madame, êtes-vous dans la classe ?', note: '🏫 [[계세요]] = [[있어요]] pour une personne respectée.' },
    { id: 'm3-ko-annyeonghi-gaseyo', kind: 'phrase', ko: '안녕히 가세요', fr: 'Au revoir (à celui qui part)', note: '👋🚶 Mot à mot : « allez en paix ». Toi, tu restes.' },
    { id: 'm3-ko-annyeonghi-gyeseyo', kind: 'phrase', ko: '안녕히 계세요', fr: 'Au revoir (à celui qui reste)', note: '👋🏠 Mot à mot : « restez en paix ». Toi, tu pars.' },
    { id: 'm3-ko-masitge-deuseyo', kind: 'phrase', ko: '맛있게 드세요', fr: 'Bon appétit !', note: '😋 [[맛있게|t:de façon délicieuse]] + [[드세요]].' },
    { id: 'm3-ko-jeomsim-deusyeosseoyo', kind: 'phrase', ko: '점심 드셨어요?', fr: 'Vous avez déjeuné ? (formule de politesse)', note: '🍱 [[드시]] + 었어요 → [[드셨어요]]. Les Coréens le disent comme un « bonjour, ça va ? ».' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Grand-mère et grand-père 👵👴' },
        { type: 'text', text: 'Deux nouveaux membres de la [[가족|t:famille]] : [[할머니|t:grand-mère]] et [[할아버지|t:grand-père]]. Avec eux, le [[존댓말]] est obligatoire !' },
        { type: 'text', text: 'Hier : on glisse **시**. Mais certains verbes, trop importants, **changent complètement** de mot :' },
        { type: 'table', head: ['Langage courant', '', 'Pour les aînés 🙇'], rows: [
          ['[[먹다|t:manger]] · [[마시다|t:boire]]', '➜', '[[드시다]] → [[드세요]]'],
          ['[[있다|t:être, se trouver]]', '➜', '[[계시다]] → [[계세요]]'],
        ] },
        { type: 'tip', text: 'Tu te souviens des faux jumeaux de la semaine 1 ? [[들으세요|t:écoutez]] et [[드세요|t:servez-vous]]. Maintenant, tu sais : [[드세요]] = mangez, buvez !', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Les cartes paires : courant ↔ honorifique.', pairs: [['먹다', '드시다'], ['있다', '계시다'], ['가다', '가시다'], ['읽다', '읽으시다']] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: '드세요 🍚' },
        { type: 'breakdown', segments: [
          { ko: '할머니', role: 'subject', gloss: 'grand-mère', particle: { ko: '가', key: 'subject' } },
          { ko: '밥', role: 'object', gloss: 'le repas', particle: { ko: '을', key: 'object' } },
          { ko: '드세요', role: 'verb', gloss: 'mange (avec respect)' },
        ], translation: 'Grand-mère mange.', note: '[[먹어요]] devient [[드세요]]. Et pour l’eau, le lait… aussi : [[할아버지가 우유를 드세요.]]' },
        { type: 'text', text: 'À table, avant de manger, on dit aux aînés : [[맛있게 드세요!|t:bon appétit !]]' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🍚 Grand-mère mange :', choices: ['할머니가 밥을 드세요.', '할머니가 밥을 먹어요.', '할머니가 밥을 먹으세요.'], answer: 0, explain: 'Pour un aîné, [[먹다]] devient [[드시다]] : [[드세요]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🥛 [[할아버지가 우유를 마셔요.]] → avec respect :', answer: alts('할아버지가 우유를 드세요') } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: '계세요 🏠' },
        { type: 'breakdown', segments: [
          { ko: '선생님,', role: 'other', gloss: 'Monsieur / Madame,' },
          { ko: '교실', role: 'place', gloss: 'la classe', particle: { ko: '에', key: 'location' } },
          { ko: '계세요?', role: 'verb', gloss: 'êtes-vous ?' },
        ], translation: 'Monsieur / Madame, êtes-vous dans la classe ?', note: 'Comme [[있어요]] : avec [[에|p:location]].' },
        { type: 'dialog', lines: [
          { who: '마리', ko: '할머니, 지금 집에 계세요?' },
          { who: '할머니', ko: '네, 집에 있어요.' },
          { who: '마리', ko: '할아버지도 계세요?' },
          { who: '할머니', ko: '아니요, 할아버지는 공원에 가셨어요.' },
        ] },
        { type: 'tip', text: 'Grand-mère répond [[있어요]] : pour elle-même, pas de respect ! Et [[계세요]] ne sert que pour une **personne** : pour « avoir » (un parapluie…), on dit [[있으세요]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Où est grand-père ?', choices: ['🌳 au parc', '🏠 à la maison', '🏫 à l’école'], answer: 0, explain: '[[할아버지는 공원에 가셨어요.]]' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '선생님이 교실에 ', after: '.', choices: ['계세요', '있어요', '드세요'], answer: 0, translation: 'Le professeur est dans la classe.' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '선생님, 교실에 계세요?', choices: ['선생님, 교실에 계세요?', '선생님, 교실에 가세요?', '선생님, 교실에 있어요?'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Dire au revoir 👋' },
        { type: 'text', text: 'Avec [[가세요]] et [[계세요]], tu peux enfin dire au revoir comme un Coréen ! [[안녕히|t:en paix]] + :' },
        { type: 'table', head: ['Qui part ?', 'Tu dis', ''], rows: [
          ['🚶 l’autre part, tu restes', '[[안녕히 가세요]]', '« allez en paix »'],
          ['🏠 tu pars, l’autre reste', '[[안녕히 계세요]]', '« restez en paix »'],
          ['🚶🚶 tout le monde part', '[[안녕히 가세요]]', ''],
        ] },
        { type: 'text', text: 'Et une formule très coréenne pour saluer un aîné : [[점심 드셨어요?|t:vous avez déjeuné ?]] ([[드시]] + 었어요 → [[드셨어요]]).' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🏠 Tu **quittes** la maison de ta grand-mère. Elle reste. Tu dis :', choices: ['안녕히 계세요', '안녕히 가세요', '맛있게 드세요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🚶 Le professeur **sort** de la classe. Tu restes. Tu dis :', choices: ['안녕히 가세요', '안녕히 계세요', '앉으세요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Encore plus de respect 🎎' },
        { type: 'text', text: 'Les élèves coréens apprennent aussi des **noms** respectueux. À reconnaître seulement :' },
        { type: 'table', head: ['Courant', 'Pour les aînés', ''], rows: [
          ['[[나이]]', '[[연세]]', 'l’âge'],
          ['[[집]]', '[[댁]]', 'la maison'],
        ] },
        { type: 'text', text: '[[할머니 댁에 가요.|t:je vais chez grand-mère]]' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Une lettre à grand-mère ✉️' },
        { type: 'text', text: 'Activité de la classe : écrire une petite lettre à ses grands-parents. Voici celle de Marie, **tout en coréen** :' },
        { type: 'table', head: ['✉️'], rows: LETTER.map((l) => [l]) },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que demande Marie sur son grand-père ?', choices: ['S’il est à la maison.', 'S’il a mangé.', 'Où il va.'], answer: 0, explain: '[[할아버지도 집에 계세요?]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quand Marie ira-t-elle chez sa grand-mère ?', choices: ['le week-end prochain', 'demain', 'ce soir'], answer: 0, explain: '[[다음 주말에 할머니 댁에 갈 거예요!]]' } },
    { kind: 'practice', exercise: { type: 'write', prompt: '✉️ À toi : une phrase pour ta lettre à un grand-parent, avec [[드세요]], [[계세요]] ou [[드셨어요]]. [[쓰세요!]]', placeholder: '할머니, 점심 드셨어요?', mustInclude: [HONOR_WORD_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '선생님, 교실에 계세요?', fr: 'Monsieur / Madame, êtes-vous dans la classe ?', prompt: 'Mise en pratique : tu frappes à la porte de la classe… 🚪' } },
  ],
  interleave: [
    { type: 'type', prompt: '[[앉다]] → forme respectueuse :', answer: '앉으세요' },
    { type: 'cloze', before: '저는 학교에 ', after: '.', choices: ['가요', '가세요'], answer: 0, translation: 'Je vais à l’école.' },
    { type: 'type', prompt: '[[듣다]] au passé poli :', answer: '들었어요' },
    { type: 'cloze', before: '날씨가 ', after: ' 집에 있어요.', choices: ['추워서', '춥지만'], answer: 0, translation: 'Il fait froid, donc je reste à la maison.' },
  ],
};

const day48: Lesson = {
  id: 'm3-w2-d3',
  month: 3,
  week: 2,
  day: 48,
  title: 'Je peux… ? -아/어도 돼요?',
  summary: 'Les demandes vitales de la classe (화장실에 가도 돼요? 물 마셔도 돼요?), emprunter, sortir, et donner la raison : 목이 말라서…',
  cards: [
    { id: 'm3-ko-hwajangsil-gado', kind: 'phrase', ko: '화장실에 가도 돼요?', fr: 'Je peux aller aux toilettes ?', note: '🚻 [[가요]] − 요 + [[도 돼요?|p:rules]] Réponse : [[네, 가세요.]]' },
    { id: 'm3-ko-mul-masyeodo', kind: 'phrase', ko: '물 마셔도 돼요?', fr: 'Je peux boire de l’eau ?', note: '💧 À l’oral, [[을|p:object]] tombe souvent : [[물 마셔도 돼요?]] = [[물을 마셔도 돼요?]]' },
    { id: 'm3-ko-mogi-mallayo', kind: 'phrase', ko: '목이 말라요', fr: 'J’ai soif.', note: '🥵 [[목|t:gorge]] + [[이|p:subject]] + [[말라요|t:est sèche]] : « ma gorge est sèche ». Cause : [[목이 말라서]]. Comme [[배가 고파요]] !' },
    { id: 'm3-ko-billyeoyo', kind: 'phrase', ko: '빌려요', fr: 'j’emprunte (poli)', note: '📕 Infinitif : [[빌리다]]. [[빌리]] + 어요 → [[빌려요]], comme [[마셔요]].' },
    { id: 'm3-ko-chaek-billyeodo', kind: 'phrase', ko: '책을 빌려도 돼요?', fr: 'Je peux emprunter le livre ?', note: '📕 Au [[도서관]] ou à un ami.' },
    { id: 'm3-ko-nagayo', kind: 'phrase', ko: '나가요', fr: 'je sors (poli)', note: '🚪 Infinitif : [[나가다]]. [[나가도 돼요?|t:je peux sortir ?]]' },
    { id: 'm3-ko-mogi-mallaseo', kind: 'phrase', ko: '목이 말라서 물을 마셔도 돼요?', fr: 'J’ai soif, je peux boire de l’eau ?', note: '💡 [[cause|p:cause]] + [[permission|p:rules]] : la raison d’abord, la question ensuite.' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Je peux… ? 🙋' },
        { type: 'tip', text: 'Tu as déjà vu [[질문해도 돼요?]] en semaine 8. Aujourd’hui, tu deviens **autonome** : tu fabriques toutes les demandes de la classe toi-même !', mood: 'happy' },
        { type: 'text', text: 'Rappel du truc de Nabi : le [[présent|p:present]] sans [[요]] + **도 돼요?**' },
        { type: 'table', head: ['Présent', '→', 'Je peux ?'], rows: [
          ['[[가요]]', '− 요 + 도 돼요?', '[[가도 돼요?]]'],
          ['[[마셔요]]', '− 요 + 도 돼요?', '[[마셔도 돼요?]]'],
          ['[[읽어요]]', '− 요 + 도 돼요?', '[[읽어도 돼요?]]'],
          ['[[들어요]] 🔀', '− 요 + 도 돼요?', '[[들어도 돼요?]]'],
          ['[[질문해요]]', '− 요 + 도 돼요?', '[[질문해도 돼요?]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🎧 « Je peux écouter de la musique ? »', choices: ['음악을 들어도 돼요?', '음악을 듣어도 돼요?', '음악을 들으면 돼요?'], answer: 0, explain: 'On part du présent [[들어요]] (ㄷ → ㄹ) : [[들어도 돼요?]]' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '📖 « Je peux lire ? » ([[읽다]])', answer: alts('읽어도 돼요?', '읽어도 돼요') } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'L’affiche près de la porte 🚪' },
        { type: 'text', text: 'Méthode de la classe : une affiche à côté de la porte, avec les demandes **vitales**. Deux nouveaux verbes : [[빌리다|t:emprunter]] et [[나가다|t:sortir]].' },
        { type: 'table', head: ['', '🙋 Je peux… ?'], rows: [
          ['🚻', '[[화장실에 가도 돼요?]]'],
          ['💧', '[[물 마셔도 돼요?]]'],
          ['📕', '[[책을 빌려도 돼요?]]'],
          ['🚪', '[[나가도 돼요?]]'],
        ] },
        { type: 'text', text: 'À l’oral, la particule [[을|p:object]] saute souvent : [[물 마셔도 돼요?]] Comme [[같이 밥 먹을까요?]]' },
        { type: 'liaison', items: [{ written: '책을 빌려도', spoken: '채글 빌려도', fr: 'liaison' }] },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque demande de l’affiche à son image.', pairs: [['화장실에 가도 돼요?', '🚻'], ['물 마셔도 돼요?', '💧'], ['책을 빌려도 돼요?', '📕'], ['나가도 돼요?', '🚪']] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '화장실에 가도 돼요?', choices: ['화장실에 가도 돼요?', '화장실에 가면 안 돼요', '화장실이 어디예요?'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '📕 [[빌려요]] → « Je peux emprunter le livre ? »', answer: alts('책을 빌려도 돼요?', '책을 빌려도 돼요', '책 빌려도 돼요?', '책 빌려도 돼요') } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La réponse du professeur 👩‍🏫' },
        { type: 'dialog', lines: [
          { who: '루이', ko: '선생님, 화장실에 가도 돼요?' },
          { who: '선생님', ko: '네, 가세요.' },
          { who: '마리', ko: '선생님, 책을 빌려도 돼요?' },
          { who: '선생님', ko: '네, 빌려도 돼요.' },
          { who: '루이', ko: '선생님, 교실에서 음악을 들어도 돼요?' },
          { who: '선생님', ko: '아니요, 안 돼요! 수업 시간이에요.' },
        ] },
        { type: 'tip', text: '[[네, 가세요.]] : c’est le [[세요|p:honor]] de lundi ! Le professeur te dit « allez-y » **poliment**.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’est-ce qui est **interdit** à Louis ?', choices: ['🎧 écouter de la musique', '🚻 aller aux toilettes', '📕 emprunter un livre'], answer: 0, explain: '[[아니요, 안 돼요! 수업 시간이에요.]]' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Donner la raison 💡' },
        { type: 'text', text: 'Une demande passe mieux avec une **raison**. Tu as tout : la [[cause|p:cause]] en **-서**, puis la question. Nouveau : [[목이 말라요|t:j’ai soif]] (« ma gorge est sèche »), comme [[배가 고파요]].' },
        { type: 'breakdown', segments: [
          { ko: '목이 말라서', role: 'other', gloss: 'j’ai soif, donc' },
          { ko: '물', role: 'object', gloss: 'de l’eau', particle: { ko: '을', key: 'object' } },
          { ko: '마셔도 돼요?', role: 'verb', gloss: 'je peux boire ?' },
        ], translation: 'J’ai soif, je peux boire de l’eau ?', note: 'La cause **d’abord**, la demande **à la fin**.' },
        { type: 'table', head: ['💡 Raison', '🙋 Demande'], rows: [
          ['[[배가 아파서]]', '[[화장실에 가도 돼요?]]'],
          ['[[비가 와서]]', '[[우산을 빌려도 돼요?]]'],
          ['[[목이 말라서]]', '[[물을 마셔도 돼요?]]'],
        ] },
        { type: 'tip', text: 'Avec [[까요?|p:suggest]], le **-서** est interdit… mais avec **도 돼요?**, il va très bien !', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'order', translation: 'J’ai soif, je peux boire de l’eau ?', tiles: ['목이', '말라서', '물을', '마셔도', '돼요?'], distractors: ['마셔서', '말라요'] } },
    { kind: 'practice', exercise: { type: 'cloze', before: '배가 ', after: ' 화장실에 가도 돼요?', choices: ['아파서', '아프지만', '아플까요'], answer: 0, translation: 'J’ai mal au ventre, je peux aller aux toilettes ?' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '☔ [[비가 와서]]… « je peux emprunter le parapluie ? »', answer: alts('비가 와서 우산을 빌려도 돼요?', '비가 와서 우산을 빌려도 돼요', '비가 와서 우산 빌려도 돼요?', '비가 와서 우산 빌려도 돼요') } },
    { kind: 'practice', exercise: { type: 'sort', prompt: '🙋 Je peux (permission) ou 🙏 faites-le pour moi (service) ?', buckets: ['🙋 도 돼요?', '🙏 주세요'], items: [
      { text: '물 마셔도 돼요?', bucket: 0 }, { text: '나가도 돼요?', bucket: 0 }, { text: '질문해도 돼요?', bucket: 0 },
      { text: '다시 말해 주세요', bucket: 1 }, { text: '천천히 말해 주세요', bucket: 1 }, { text: '도와주세요', bucket: 1 },
    ] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'À toi : une demande **avec sa raison** (-서 + 도 돼요?). [[쓰세요!]]', placeholder: '목이 말라서 물을 마셔도 돼요?', mustInclude: [CAUSE_ANY, PERMIT_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '선생님, 화장실에 가도 돼요? 물 마셔도 돼요?', fr: 'Monsieur / Madame, je peux aller aux toilettes ? Je peux boire de l’eau ?', prompt: 'Mise en pratique : les deux phrases qui sauvent, à voix haute 🙋' } },
  ],
  interleave: [
    { type: 'mcq', prompt: '🍚 Grand-père mange :', choices: ['할아버지가 밥을 드세요.', '할아버지가 밥을 먹어요.'], answer: 0 },
    { type: 'mcq', prompt: '👋 Tu quittes la classe, le professeur reste. Tu dis :', choices: ['안녕히 계세요', '안녕히 가세요'], answer: 0 },
    { type: 'type', prompt: '[[가다]] → forme respectueuse :', answer: '가세요' },
    { type: 'cloze', before: '한국어가 ', after: ' 재미있어요.', choices: ['어렵지만', '어려워서'], answer: 0, translation: 'Le coréen est difficile, mais c’est intéressant.' },
  ],
};

const SLATE: [string, string, string[], number, string][] = [
  ['비가 ', ' 집에 있어요.', ['와서', '오지만', '올까요'], 0, 'Il pleut, donc je reste à la maison.'],
  ['주말에 같이 영화를 ', '?', ['볼까요', '봐서', '보지만'], 0, 'On regarde un film ensemble ce week-end ?'],
  ['사과가 ', ' 맛있어요.', ['비싸지만', '비싸서', '비쌀까요'], 0, 'Les pommes sont chères, mais bonnes.'],
  ['오늘 날씨가 ', '.', ['추워요', '춥어요', '추어요'], 0, 'Aujourd’hui, il fait froid.'],
  ['어제 음악을 ', '.', ['들었어요', '듣었어요', '들어었어요'], 0, 'Hier, j’ai écouté de la musique.'],
  ['선생님이 책을 ', '.', ['읽으세요', '읽세요', '읽어요'], 0, 'Le professeur lit un livre.'],
  ['할머니가 밥을 ', '.', ['드세요', '먹으세요', '먹어요'], 0, 'Grand-mère mange.'],
  ['선생님, 화장실에 ', ' 돼요?', ['가도', '가면', '가서'], 0, 'Monsieur / Madame, je peux aller aux toilettes ?'],
];

const TALE: [string, string][] = [
  ['👵', '[[주말에 나비는 할머니 댁에 갔어요.]] [[할머니가 이야기를 읽으셨어요.]]'],
  ['🐰🐢', '[[옛날에 토끼와 거북이가 살았어요.]]'],
  ['🏃', '[[토끼는 빨리 달릴 수 있었어요.]] [[하지만 거북이는 천천히 걸었어요.]]'],
  ['🤝', '[[토끼가 말했어요. “거북이, 같이 달릴까요?”]] [[거북이가 말했어요. “좋아요! 같이 해요.”]]'],
  ['☀️', '[[토끼는 빨리 달렸어요.]] [[날씨가 더워서 토끼는 피곤했어요.]] [[그래서 나무 아래에서 잤어요.]]'],
  ['🐢', '[[거북이도 피곤했지만 안 쉬었어요.]] [[천천히, 천천히 걸었어요.]]'],
  ['🏆', '[[거북이가 이겼어요!]]'],
  ['👵', '[[할머니가 말씀하셨어요.]] [[“천천히 가도 돼요. 하지만 쉬면 안 돼요!”]]'],
];

const day49: Lesson = {
  id: 'm3-w2-d4',
  month: 3,
  week: 2,
  day: 49,
  title: 'Révision : l’atelier de lecture',
  summary: 'L’ardoise (8 réflexes de grammaire), puis un conte chez grand-mère : 토끼와 거북이, analysé forme par forme.',
  cards: [
    { id: 'm3-ko-ppalli', kind: 'vocab', ko: '빨리', fr: 'vite', note: '🐰 Contraire : [[천천히]]. [[빨리 달려요.|t:il court vite]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le livret des quatre semaines 📒' },
        { type: 'tip', text: 'Quatre semaines de structures **complexes**. Avant la grande évaluation de demain, on les range toutes dans le livret !', mood: 'thinking' },
        { type: 'table', head: ['Semaine', 'Structure', 'Exemple'], rows: [
          ['7', '💡 [[cause|p:cause]] · 🤝 [[proposer|p:suggest]] · 🚫 [[안 / 못|p:neg]]', '[[비가 와서]] · [[같이 갈까요?]] · [[못 가요]]'],
          ['8', '💪 [[pouvoir|p:ability]] · ✅ [[permis / interdit|p:rules]] · 🙏 [[service|p:request]]', '[[할 수 있어요]] · [[가도 돼요?]] · [[말해 주세요]]'],
          ['9', '⚖️ [[opposition|p:contrast]] · 🔀 [[ㄷ → ㄹ|p:irreg-d]] · 🔀 [[ㅂ → 우|p:irreg-b]]', '[[비싸지만]] · [[들어요]] · [[추워요]]'],
          ['10', '🙇 [[honorifique|p:honor]] · 🎎 [[mots des aînés|p:honor-words]]', '[[가세요]] · [[드세요]] · [[계세요]]'],
        ] },
        { type: 'text', text: 'Méthode de la classe : l’**ardoise**. Une phrase, trois réponses, un réflexe. Vite ! (mais [[천천히]] si besoin 😉)' },
      ],
    },
    ...SLATE.map(([before, after, choices, answer, translation], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'cloze' as const, prompt: `Ardoise ${i + 1}/${SLATE.length}`, before, after, choices, answer, translation },
    })),
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'L’atelier de lecture 📖' },
        { type: 'text', text: 'Activité de la classe : lire un conte **par équipes de deux** et l’analyser. Ton équipier, c’est Nabi ! Le conte se lit chez grand-mère. D’abord, le glossaire en marge :' },
        { type: 'table', head: ['', 'Mot', 'Sens'], rows: [
          ['🐰', '[[토끼]]', 'lapin'],
          ['🐢', '[[거북이]]', 'tortue'],
          ['💨', '[[빨리]]', 'vite (contraire de [[천천히]])'],
          ['🏆', '[[이겼어요]]', 'a gagné ([[이기다]])'],
          ['🗣️', '[[말씀하셨어요]]', 'a dit — [[말하다]] pour un aîné 🙇'],
        ] },
        { type: 'tip', text: 'Tu reconnais ce conte ? En France, c’est **Le Lièvre et la Tortue** de La Fontaine !', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Le glossaire en images : relie.', pairs: [['토끼', '🐰'], ['거북이', '🐢'], ['빨리', '💨'], ['할머니', '👵']] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: '토끼와 거북이' },
        { type: 'text', text: 'Lis doucement. Touche une phrase pour l’entendre.' },
        { type: 'table', head: ['', ''], rows: TALE.map(([emoji, line]) => [emoji, line]) },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**Question 1** — [[토끼는 왜 잤어요?]]', choices: ['피곤해서', '배가 고파서', '비가 와서'], answer: 0, explain: '[[날씨가 더워서 토끼는 피곤했어요. 그래서 나무 아래에서 잤어요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**Question 2** — Vrai ou faux ? « La tortue s’est reposée. »', choices: ['Faux', 'Vrai'], answer: 0, explain: '[[거북이도 피곤했지만 안 쉬었어요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**Question 3** — Qui a lu l’histoire ?', choices: ['👵 grand-mère', '👩‍🏫 le professeur', '🦋 Nabi'], answer: 0, explain: '[[할머니가 이야기를 읽으셨어요.]] Avec **셨**, pour grand-mère !' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'L’analyse en équipe 🔍' },
        { type: 'text', text: 'Chaque forme du conte vient d’une des quatre dernières semaines. Retrouve-les toutes !' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque forme du conte à sa structure.', pairs: [
      ['피곤해서', '💡 cause'],
      ['달릴까요?', '🤝 proposition'],
      ['피곤했지만', '⚖️ opposition'],
      ['걸었어요', '🔀 ㄷ → ㄹ'],
      ['읽으셨어요', '🙇 honorifique'],
      ['가도 돼요', '✅ permission'],
    ] } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[더워서]] : quel est l’infinitif ?', answer: '덥다' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi [[읽으셨어요]] et pas [[읽었어요]] ?', choices: ['Parce que c’est grand-mère qui lit.', 'Parce que c’est au passé.', 'Parce que c’est une question.'], answer: 0, explain: 'Le **시** honore la personne qui fait l’action : [[할머니]] !' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La morale 🐢' },
        { type: 'text', text: '[[천천히 가도 돼요. 하지만 쉬면 안 돼요!|t:tu peux aller lentement, mais il ne faut pas t’arrêter]]' },
        { type: 'tip', text: 'C’est exactement ta méthode : **une leçon par jour**, tranquillement, sans jamais s’arrêter. [[천천히, 천천히!]] 🐢', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'order', translation: 'Tu peux aller lentement. Mais il ne faut pas t’arrêter !', tiles: ['천천히', '가도', '돼요.', '하지만', '쉬면', '안', '돼요!'], distractors: ['그래서', '쉬어도'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '거북이는 피곤했지만 안 쉬었어요. 그래서 이겼어요!', fr: 'La tortue était fatiguée, mais elle ne s’est pas reposée. Donc elle a gagné !', prompt: 'Raconte la fin à voix haute, comme grand-mère 👵' } },
  ],
  interleave: [
    { type: 'type', prompt: '🚻 « Je peux aller aux toilettes ? »', answer: alts('화장실에 가도 돼요?', '화장실에 가도 돼요') },
    { type: 'mcq', prompt: '[[목이 말라요]] veut dire…', choices: ['J’ai soif.', 'J’ai faim.', 'J’ai mal à la gorge.'], answer: 0 },
    { type: 'cloze', before: '선생님, 교실에 ', after: '?', choices: ['계세요', '있어요'], answer: 0, translation: 'Monsieur / Madame, êtes-vous dans la classe ?' },
    { type: 'type', prompt: '[[걷다]] + « on… ensemble ? » :', answer: alts('같이 걸을까요?', '같이 걸을까요') },
  ],
};

const DICTATION = [
  '한국어가 어렵지만 재미있어요',
  '선생님이 교실에 계세요',
  '할머니가 밥을 드세요',
  '오늘 날씨가 추워서 집에 있어요',
  '음악을 들어도 돼요?',
  '날씨가 덥지만 같이 걸을까요?',
  '선생님, 어디에 가세요?',
  '목이 말라서 물을 마셔도 돼요?',
];

const PERMITS: [string, string, string[], number, string][] = [
  ['🚻 화장실에 ', ' 돼요?', ['가도', '가면', '가서'], 0, 'Je peux aller aux toilettes ?'],
  ['📖 책을 ', ' 돼요?', ['읽어도', '읽으면', '읽어서'], 0, 'Je peux lire le livre ?'],
];

const day50: Lesson = {
  id: 'm3-w2-d5',
  month: 3,
  week: 2,
  day: 50,
  title: 'Grand bilan & Grande évaluation n°5',
  summary: 'La dictée de la classe, la Grande évaluation bimensuelle n°5, la visite du directeur et ton grand bilan.',
  cards: [],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le grand jour 🎓' },
        { type: 'tip', text: 'Cinquante leçons ! Aujourd’hui, l’épreuve de la classe puis la **Grande évaluation n°5**. [[천천히 가도 돼요]] : sans stress !', mood: 'encourage' },
        { type: 'text', text: 'D’abord, la **dictée** de la classe : huit phrases complexes. [[들으세요!]] Puis [[쓰세요!]]' },
      ],
    },
    ...DICTATION.map((s, i) => ({
      kind: 'practice' as const,
      exercise: { type: 'type' as const, prompt: `Dictée ${i + 1}/${DICTATION.length}`, audio: s, answer: alts(s) },
    })),
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Rédaction : écrire au directeur ✉️' },
        { type: 'text', text: 'Épreuve de la classe : réécrire un texte **neutre** avec respect, pour le [[교장 선생님|t:directeur, directrice d’école]].' },
        { type: 'table', head: ['Texte neutre'], rows: [['[[교장 선생님이 학교에 와요.]] [[교실에 있어요.]] [[점심을 먹어요.]] [[책을 읽어요.]]']] },
      ],
    },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Touche une case vide, puis écris la forme respectueuse.', head: ['Neutre', '🙇 Respectueux'], rows: [
      ['와요', blank('오세요')],
      ['있어요', blank('계세요')],
      ['먹어요', blank('드세요')],
      ['읽어요', blank('읽으세요')],
      ['공부해요', blank('공부하세요')],
    ], explain: '[[오]] + [[세요]] · [[있다]] → [[계시다]] · [[먹다]] → [[드시다]] · [[읽]] + [[으세요]] · [[하]] + [[세요]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[교장 선생님이 점심을 먹어요.]] → avec respect :', answer: alts('교장 선생님이 점심을 드세요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Rédaction : écris **deux demandes** au directeur, chacune avec sa raison (-서 + 도 돼요?). [[쓰세요!]]', placeholder: '목이 말라서 물을 마셔도 돼요? 비가 와서 우산을 빌려도 돼요?', mustInclude: [CAUSE_ANY, PERMIT_ANY] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Grande évaluation n°5' },
        { type: 'text', text: 'Quatre parties, toujours sans piège ni chrono. Chaque erreur reviendra simplement en révision.' },
        { type: 'table', head: ['Partie', 'Contenu'], rows: [
          ['A', 'Vocabulaire honorifique'],
          ['B', 'Demandes d’autorisation'],
          ['C', 'Compréhension écrite (vrai / faux)'],
          ['D', 'Mise en situation orale'],
        ] },
        { type: 'tip', text: '**A — Vocabulaire honorifique.** Associe le verbe courant à sa forme respectueuse.', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: '**A · 1/2** — Relie.', pairs: [['먹다', '드시다 (드세요)'], ['있다', '계시다 (계세요)'], ['가다', '가시다 (가세요)']] } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**A · 2/2** — 👴 Grand-père est à la maison :', choices: ['할아버지가 집에 계세요.', '할아버지가 집에 있어요.', '할아버지가 집에 가세요.'], answer: 0 } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**B — Demandes d’autorisation.** Complète selon l’image.', mood: 'encourage' }] },
    ...PERMITS.map(([before, after, choices, answer, translation], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'cloze' as const, prompt: `**B · ${i + 1}/${PERMITS.length}**`, before, after, choices, answer, translation },
    })),
    {
      kind: 'learn',
      blocks: [
        { type: 'tip', text: '**C — Compréhension.** Minsu parle à son professeur. Touche une bulle pour l’entendre, puis réponds.', mood: 'encourage' },
        { type: 'dialog', lines: [
          { who: '민수', ko: '선생님, 안녕하세요! 점심 드셨어요?' },
          { who: '선생님', ko: '네, 먹었어요. 민수는요?' },
          { who: '민수', ko: '저도 먹었어요. 오늘 날씨가 더워요. 목이 말라서 물을 마셔도 돼요?' },
          { who: '선생님', ko: '네, 마셔도 돼요.' },
          { who: '민수', ko: '감사합니다! 선생님, 내일 도서관에 계세요?' },
          { who: '선생님', ko: '아니요, 내일은 바빠서 도서관에 못 가요.' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 1/3** — Vrai ou faux ? « Minsu a déjà déjeuné. »', choices: ['Vrai', 'Faux'], answer: 0, explain: '[[저도 먹었어요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 2/3** — Vrai ou faux ? « Minsu n’a pas le droit de boire. »', choices: ['Faux', 'Vrai'], answer: 0, explain: '[[네, 마셔도 돼요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 3/3** — Vrai ou faux ? « Demain, le professeur sera à la bibliothèque. »', choices: ['Faux', 'Vrai'], answer: 0, explain: '[[내일은 바빠서 도서관에 못 가요.]]' } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**D — À l’oral.** Il fait chaud, tu as soif. Demande au professeur la permission de boire de l’eau, **en expliquant pourquoi**.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'write', prompt: '**D · 1/2** — Prépare ta demande.', placeholder: '선생님, 목이 말라서…', mustInclude: ['말라서', PERMIT_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '선생님, 목이 말라서 물을 마셔도 돼요?', fr: 'Monsieur / Madame, j’ai soif, je peux boire de l’eau ?', prompt: '**D · 2/2** — Dis-la à voix haute, puis écoute le modèle.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La visite du directeur 📖' },
        { type: 'text', text: 'Une histoire **entièrement en coréen**. Touche une bulle pour l’entendre.' },
        { type: 'dialog', lines: [
          { who: '📖', ko: '금요일이에요. 교장 선생님이 교실에 오셨어요.' },
          { who: '선생님', ko: '교장 선생님, 안녕하세요! 앉으세요.' },
          { who: '나비', ko: '교장 선생님, 점심 드셨어요?' },
          { who: '교장 선생님', ko: '네, 먹었어요. 나비는 한국어를 할 수 있어요?' },
          { who: '나비', ko: '네, 조금 할 수 있어요. 한국어가 어렵지만 재미있어요!' },
          { who: '📖', ko: '교장 선생님이 나비 공책을 읽으셨어요.' },
          { who: '교장 선생님', ko: '좋아요! 다음에 같이 책을 읽을까요?' },
          { who: '나비', ko: '네, 좋아요! 안녕히 가세요!' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qui est venu dans la classe ?', choices: ['le directeur', 'la grand-mère de Nabi', 'un ami'], answer: 0, explain: '[[교장 선생님이 교실에 오셨어요.]] ([[오]] + [[셨어요]])' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi [[안녕히 가세요]] et pas [[안녕히 계세요]] ?', choices: ['Parce que le directeur part, et Nabi reste.', 'Parce que Nabi part.', 'Parce que c’est le matin.'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ton grand bilan 🎓' },
        { type: 'text', text: 'Dix semaines, cinquante leçons. Voici ce que tu sais faire maintenant :' },
        { type: 'table', head: ['Domaine', 'Acquis'], rows: [
          ['Expliquer', 'une **cause** : [[목이 말라서…|p:cause]]'],
          ['Nuancer', 'un **contraste** : [[어렵지만 재미있어요|p:contrast]]'],
          ['Proposer', 'une **activité** : [[같이 걸을까요?|p:suggest]]'],
          ['Demander', 'une **autorisation** : [[물 마셔도 돼요?|p:rules]] · un **service** : [[다시 말해 주세요|p:request]]'],
          ['Respecter', 'le [[존댓말]] avec les adultes : [[가세요|p:honor]] · [[드세요|p:honor-words]] · [[계세요|p:honor-words]]'],
          ['Conjuguer', 'les verbes **irréguliers** : [[들어요|p:irreg-d]] · [[추워요|p:irreg-b]]'],
          ['Vocabulaire', '**environ 240 mots et expressions** dans tes cartes de révision'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'read', ko: '선생님, 안녕하세요! 저는 한국어를 조금 할 수 있어요. 한국어가 어렵지만 재미있어요. 그래서 내일도 공부할 거예요!', fr: 'Bonjour Monsieur / Madame ! Je parle un peu coréen. Le coréen est difficile, mais intéressant. Alors demain aussi, j’étudierai !', prompt: 'Ton entretien de bilan : présente-toi au professeur, poliment, à voix haute.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Bravo, semaine 10 terminée ! 🎉' },
        { type: 'text', text: 'Tu sais maintenant parler **avec respect** aux adultes, demander la permission en expliquant pourquoi, et lire un conte entier. Dans sa chrysalide, Nabi brille de fierté !' },
        { type: 'tip', text: '[[선생님, 감사합니다!]] [[안녕히 계세요!]] ✨ À demain !', mood: 'happy' },
      ],
    },
  ],
};

export const m3w2: Lesson[] = [day46, day47, day48, day49, day50];
