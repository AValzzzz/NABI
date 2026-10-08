import type { GridBlank, Lesson } from '../types';

const COLLAPSE: [RegExp, string][] = [
  [/ 거래요/g, '거래요'],
  [/안 된대요/g, '안된대요'],
  [/도 된대요/g, '도된대요'],
  [/안 쉰/g, '안쉰'],
];
const alts = (...xs: string[]): string[] => {
  const out = new Set(xs);
  for (const [re, to] of COLLAPSE) for (const s of [...out]) out.add(s.replace(re, to));
  for (const s of [...out]) out.add(s.replace(/[.,!?] /g, ' '));
  for (const s of [...out]) out.add(s.replace(/[.!?]$/, ''));
  return [...out];
};
const blank = (s: string): GridBlank => ({ answer: alts(s) });

const SAID_ANY = '대요';
const LET_ANY = '재요';
const CMD_ANY = '래요';
const REPORT_ANY = '대요|재요|래요';

const day51: Lesson = {
  id: 'm3-w3-d1',
  month: 3,
  week: 3,
  day: 51,
  title: 'Il dit que… : -대요',
  summary: 'Rapporter ce que quelqu’un a dit : 민수가 학교에 간대요. Actions (간대요, 먹는대요), états (좋대요), passé (갔대요), et 뭐래요?',
  cards: [
    { id: 'm4-ko-gandaeyo', kind: 'grammar', ko: '간대요 · 먹는대요', fr: 'il / elle dit qu’il va · qu’il mange — action au présent : ㄴ대요 / 는대요', note: '🔵 Voyelle → [[ㄴ대요]] ([[간대요]], [[공부한대요]]) · consonne → [[는대요]] ([[먹는대요]], se prononce [멍는대요]). Règle : [[il dit que…|p:report]]' },
    { id: 'm4-ko-jotaeyo', kind: 'grammar', ko: '좋대요 · 갔대요', fr: 'il / elle dit que c’est bien · qu’il est allé — état ou passé : + 대요', note: '🔵 État : radical + [[대요]] ([[바쁘대요]], [[맛있대요]]). Passé : [[갔어요]] → [[갔대요]] (어요 → 대요). Règle : [[il dit que…|p:report]]' },
    { id: 'm4-ko-minsu-gandaeyo', kind: 'phrase', ko: '민수가 학교에 간대요', fr: 'Minsu dit qu’il va à l’école.', note: '🗣️ [[민수]] : « [[학교에 가요.]] » → [[민수가 학교에 간대요.]]' },
    { id: 'm4-ko-mworaeyo', kind: 'phrase', ko: '뭐래요?', fr: 'Qu’est-ce qu’il / elle dit ?', note: '🤔 Réponse : [[…대요]]. [[선생님이 뭐래요?]] — [[내일 비가 온대요.]]' },
    { id: 'm4-ko-biga-ondaeyo', kind: 'phrase', ko: '내일 비가 온대요', fr: 'Il paraît qu’il va pleuvoir demain. (on dit que…)', note: '☔ [[오다]] → [[온대요]]. Sans dire qui parle, [[대요]] = « il paraît que… ».' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le messager 🗣️' },
        { type: 'tip', text: 'Nouvelle semaine ! [[나비는 지금 번데기예요.|t:Nabi est une chrysalide]] Jusqu’ici, tu parlais pour **toi**. Maintenant, tu vas **rapporter** les paroles des autres : « Le professeur a dit que… ».', mood: 'happy' },
        { type: 'text', text: 'Minsu te dit : [[학교에 가요.|t:je vais à l’école]] Tu le répètes au professeur : [[민수가 학교에 간대요.|t:Minsu dit qu’il va à l’école]]' },
        { type: 'breakdown', segments: [
          { ko: '민수', role: 'subject', gloss: 'Minsu', particle: { ko: '가', key: 'subject' } },
          { ko: '학교', role: 'place', gloss: 'l’école', particle: { ko: '에', key: 'place' } },
          { ko: '간대요', role: 'verb', gloss: 'va (dit-il)' },
        ], translation: 'Minsu dit qu’il va à l’école.', note: '**대요** à la fin = « il / elle dit que… ». Pas besoin d’un verbe « dire » !' },
        { type: 'tip', text: '[[대요]] est la version **orale et rapide** de [[간다고 해요|t:il dit qu’il va]]. Les Coréens disent presque toujours la version courte.', mood: 'thinking' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Une action : ㄴ대요 / 는대요 🏃' },
        { type: 'text', text: 'Pour une **action** au présent, on enlève [[다]] et on regarde la dernière lettre. Tu connais ce réflexe !' },
        { type: 'table', head: ['Le radical finit par…', 'Il dit…', '🔵 Il dit que…'], rows: [
          ['🟢 une voyelle → **ㄴ대요**', '[[가요]] · [[와요]] · [[자요]]', '[[간대요]] · [[온대요]] · [[잔대요]]'],
          ['⭐ [[하다]] → **한대요**', '[[공부해요]] · [[운동해요]]', '[[공부한대요]] · [[운동한대요]]'],
          ['🟤 une consonne → **는대요**', '[[먹어요]] · [[읽어요]] · [[들어요]]', '[[먹는대요]] · [[읽는대요]] · [[듣는대요]]'],
        ] },
        { type: 'text', text: 'Le ㄴ se glisse **sous** la dernière syllabe : [[가]] + ㄴ = [[간]]. Prononciation : [[먹는대요]] → [멍는대요], [[읽는대요]] → [잉는대요].' },
        { type: 'tip', text: '[[들어요]] → [[듣는대요]] : devant une **consonne**, le ㄷ de [[듣다|p:irreg-d]] revient !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Minsu : « [[자요.]] » → Minsu dit qu’il dort :', choices: ['민수가 잔대요.', '민수가 자는대요.', '민수가 자대요.'], answer: 0, explain: '[[자]] finit par une voyelle : [[자]] + ㄴ = [[잔]] + [[대요]].' } },
    { kind: 'practice', exercise: { type: 'sort', prompt: '🟢 ㄴ대요 ou 🟤 는대요 ?', buckets: ['🟢 ㄴ대요', '🟤 는대요'], items: [
      { text: '가다', bucket: 0 }, { text: '오다', bucket: 0 }, { text: '마시다', bucket: 0 }, { text: '공부하다', bucket: 0 },
      { text: '먹다', bucket: 1 }, { text: '읽다', bucket: 1 }, { text: '앉다', bucket: 1 },
    ], explain: 'Voyelle → [[간대요]], [[온대요]], [[마신대요]], [[공부한대요]]. Consonne → [[먹는대요]], [[읽는대요]], [[앉는대요]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Marie : « [[책을 읽어요.]] » → [[마리가 책을…]]', answer: alts('마리가 책을 읽는대요', '읽는대요') } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Louis : « [[운동해요.]] » → [[루이가…]]', answer: alts('루이가 운동한대요', '운동한대요') } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Un état, le passé : + 대요 🌡️' },
        { type: 'text', text: 'Pour un **état** ([[adjectif|p:adjective]], [[있다]], [[없다]]), c’est encore plus simple : radical + **대요**, sans rien ajouter.' },
        { type: 'table', head: ['Il dit…', 'Radical', '🔵 Il dit que…'], rows: [
          ['[[좋아요]]', '[[좋]]', '[[좋대요]]'],
          ['[[맛있어요]]', '[[맛있]]', '[[맛있대요]]'],
          ['[[피곤해요]]', '[[피곤하]]', '[[피곤하대요]]'],
          ['[[바빠요]]', '[[바쁘]]', '[[바쁘대요]]'],
          ['[[추워요]]', '[[춥]]', '[[춥대요]] (ㅂ reste devant une consonne)'],
        ] },
        { type: 'tip', text: 'Attention aux deux [[하다|p:hada]] : [[공부한대요]] (une **action**, avec ㄴ) mais [[피곤하대요]] (un **état**, sans ㄴ).', mood: 'thinking' },
        { type: 'text', text: 'Et le **passé** ? Le plus facile de tous : on remplace **어요** par **대요**.' },
        { type: 'table', head: ['Il dit…', '🔵 Il dit que…'], rows: [
          ['[[갔어요]]', '[[갔대요]]'],
          ['[[먹었어요]]', '[[먹었대요]]'],
          ['[[공부했어요]]', '[[공부했대요]]'],
        ] },
        { type: 'text', text: 'Bonus, le futur : [[거예요]] → [[거래요]]. [[주말에 공원에 갈 거래요.|t:il dit qu’il ira au parc ce week-end]]' },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', prompt: 'Sua : « [[바빠요.]] »', before: '수아가 ', after: '.', choices: ['바쁘대요', '바쁜대요', '바빠대요'], answer: 0, translation: 'Sua dit qu’elle est occupée.', explain: 'Un **état** : radical [[바쁘]] + [[대요]].' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: 'Minsu : « [[어제 축구를 했어요.]] »', before: '민수가 어제 축구를 ', after: '.', choices: ['했대요', '한대요', '하대요'], answer: 0, translation: 'Minsu dit qu’il a joué au foot hier.', explain: 'Passé : [[했어요]] → [[했대요]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Le professeur : « [[영화가 재미있어요.]] » → [[선생님이 영화가…]]', answer: alts('선생님이 영화가 재미있대요', '재미있대요') } },
    { kind: 'practice', exercise: { type: 'listen', audio: '민수가 학교에 간대요', choices: ['민수가 학교에 간대요', '민수가 학교에 가요', '민수가 학교에 갔어요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le téléphone de la classe ☎️' },
        { type: 'text', text: 'Jeu de la classe : un message passe d’oreille en oreille. Il doit arriver **exact** ! Pour demander ce qu’une personne a dit : [[뭐래요?|t:qu’est-ce qu’il dit ?]]' },
        { type: 'dialog', lines: [
          { who: '선생님', ko: '마리, 내일 비가 와요.' },
          { who: '루이', ko: '마리, 선생님이 뭐래요?' },
          { who: '마리', ko: '내일 비가 온대요.' },
          { who: '나비', ko: '루이, 마리가 뭐래요?' },
          { who: '루이', ko: '내일 비가 안 온대요!' },
          { who: '마리', ko: '아니요! 비가 온대요!' },
        ] },
        { type: 'tip', text: 'Sans dire **qui** parle, [[대요]] veut dire « **il paraît que** » : [[내일 비가 온대요.|t:il paraît qu’il va pleuvoir demain]] Parfait pour la météo !', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qui a mal transmis le message ?', choices: ['루이', '마리', '선생님'], answer: 0, explain: 'Louis a dit [[비가 안 온대요]] : il a ajouté [[안]] !' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Minsu dit qu’il va à l’école.', tiles: ['민수가', '학교에', '간대요.'], distractors: ['가대요.', '가는대요.'] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Cartes à deux personnages : un ami t’a dit quelque chose. Rapporte-le au professeur avec **대요**. [[쓰세요!]]', placeholder: '민수가 배가 아프대요', mustInclude: [SAID_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '선생님, 민수가 학교에 간대요.', fr: 'Monsieur / Madame, Minsu dit qu’il va à l’école.', prompt: 'Mise en pratique : rapporte le message de Minsu au professeur 🗣️' } },
  ],
  interleave: [
    { type: 'mcq', prompt: '🍚 Grand-mère mange :', choices: ['할머니가 밥을 드세요.', '할머니가 밥을 먹으세요.'], answer: 0 },
    { type: 'cloze', before: '목이 ', after: ' 물을 마셔도 돼요?', choices: ['말라서', '마르지만'], answer: 0, translation: 'J’ai soif, je peux boire de l’eau ?' },
    { type: 'type', prompt: '[[읽다]] → forme respectueuse :', answer: '읽으세요' },
    { type: 'type', prompt: '[[어제 축구를 했어요.]] → « Il dit qu’il a joué au foot hier » :', answer: alts('어제 축구를 했대요') },
  ],
};

const day52: Lesson = {
  id: 'm3-w3-d2',
  month: 3,
  week: 3,
  day: 52,
  title: 'Il propose de… : -재요',
  summary: 'Transmettre une invitation : 같이 축구할까요? → 지훈이가 같이 축구하재요. Nouveaux : 놀다, 쉬는 시간.',
  cards: [
    { id: 'm4-ko-gajaeyo', kind: 'grammar', ko: '가재요 · 먹재요', fr: 'il / elle propose d’y aller · de manger — radical + 재요', note: '🟢 Aucun changement : [[가]] + [[재요]], [[먹]] + [[재요]], [[축구하]] + [[재요]]. [[같이 갈까요?]] → [[같이 가재요]]. Règle : [[il propose…|p:report-let]]' },
    { id: 'm4-ko-jihun-chukguhajaeyo', kind: 'phrase', ko: '지훈이가 같이 축구하재요', fr: 'Jihoon propose qu’on joue au foot ensemble.', note: '⚽ [[지훈]] : « [[같이 축구할까요?]] » Après un prénom à consonne, on ajoute un [[이]] amical : [[지훈이가]].' },
    { id: 'm4-ko-norayo', kind: 'phrase', ko: '놀아요', fr: 'je joue, je m’amuse (poli)', note: '🪁 Infinitif : [[놀다]]. Pour un sport : [[축구를 해요]]. [[같이 놀까요?]]' },
    { id: 'm4-ko-swineun-sigan', kind: 'vocab', ko: '쉬는 시간', fr: 'la récré, la pause', note: '🔔 Mot à mot : « le moment où l’on se repose » ([[쉬다]]). [[쉬는 시간에 같이 놀까요?]]' },
    { id: 'm4-ko-gachi-noljaeyo', kind: 'phrase', ko: '같이 놀재요', fr: 'Il / elle propose qu’on joue ensemble.', note: '🪁 Entre amis, on entend : [[같이 놀자!|t:jouons ensemble !]] ([[반말]]). Le [[자]] est caché dans [[재요]] !' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Il propose de… 🤝' },
        { type: 'tip', text: '[[어제는 대요를 배웠어요.|t:hier, on a appris 대요]] Aujourd’hui, on rapporte une **proposition** : « Jihoon propose qu’on… ».', mood: 'happy' },
        { type: 'text', text: 'Tu connais [[같이 축구할까요?|p:suggest]] Pour le rapporter, on enlève **(을)ㄹ까요** et on colle **재요** :' },
        { type: 'table', head: ['Il propose…', '', '🟢 Il propose de…'], rows: [
          ['[[같이 갈까요?]]', '➜', '[[같이 가재요]]'],
          ['[[같이 먹을까요?]]', '➜', '[[같이 먹재요]]'],
          ['[[같이 축구할까요?]]', '➜', '[[같이 축구하재요]]'],
          ['[[갑시다!]]', '➜', '[[가재요]]'],
        ] },
        { type: 'text', text: 'La règle la plus simple de la semaine : **radical + 재요**, voyelle ou consonne, sans rien changer !' },
        { type: 'breakdown', segments: [
          { ko: '지훈이', role: 'subject', gloss: 'Jihoon', particle: { ko: '가', key: 'subject' } },
          { ko: '같이', role: 'adverb', gloss: 'ensemble' },
          { ko: '축구하재요', role: 'verb', gloss: 'propose de jouer au foot' },
        ], translation: 'Jihoon propose qu’on joue au foot ensemble.', note: 'Après un prénom qui finit par une consonne, les enfants ajoutent un **이** amical : [[지훈]] → [[지훈이가]]. Pour [[민수]] (voyelle) : [[민수가]].' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Sua : « [[같이 도서관에 갈까요?]] » →', choices: ['수아가 같이 도서관에 가재요.', '수아가 같이 도서관에 간대요.', '수아가 같이 도서관에 갈재요.'], answer: 0, explain: 'Une **proposition** : radical [[가]] + [[재요]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[먹다]] → « il propose de manger » :', answer: '먹재요' } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Louis : « [[같이 영화 볼까요?]] » → [[루이가 같이 영화…]]', answer: alts('루이가 같이 영화 보재요', '루이가 같이 영화를 보재요', '보재요') } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Jouer : 놀다 🪁' },
        { type: 'text', text: 'Un verbe essentiel à la récré : [[놀다|t:jouer, s’amuser]] → [[놀아요]]. Pour un **sport**, on garde [[축구를 해요]].' },
        { type: 'text', text: 'Entre amis du même âge, on propose en [[반말|t:langage familier]] avec **-자** : [[같이 놀자!|t:jouons ensemble !]] [[가자!|t:allons-y !]] À reconnaître seulement : c’est ce **자** qu’on entend dans [[재요]] !' },
        { type: 'table', head: ['Il propose…', '🟢 Il propose de…'], rows: [
          ['[[같이 놀까요?]] · [[같이 놀자!]]', '[[같이 놀재요]]'],
          ['[[같이 걸을까요?]]', '[[같이 걷재요]] (ㄷ reste devant une consonne)'],
          ['[[같이 그림을 그릴까요?]]', '[[같이 그림을 그리재요]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', prompt: 'Minsu : « [[같이 걸을까요?]] »', before: '민수가 같이 ', after: '.', choices: ['걷재요', '걸재요', '걸으재요'], answer: 0, translation: 'Minsu propose qu’on marche ensemble.', explain: '[[재]] commence par une consonne : le ㄷ de [[걷다]] reste.' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '같이 놀재요', choices: ['같이 놀재요', '같이 놀아요', '같이 놀까요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les groupes de la récré 🔔' },
        { type: 'text', text: 'Activité de la classe : organiser la [[쉬는 시간|t:récré]] de l’après-midi. Chacun propose, Nabi transmet au professeur. **Tout en coréen** :' },
        { type: 'dialog', lines: [
          { who: '지훈', ko: '나비, 쉬는 시간에 같이 축구할까요?' },
          { who: '수아', ko: '나비, 같이 그림을 그릴까요?' },
          { who: '민수', ko: '저는 피곤해요. 같이 도서관에 갈까요?' },
          { who: '선생님', ko: '나비, 친구들이 뭐래요?' },
          { who: '나비', ko: '지훈이가 같이 축구하재요. 수아가 같이 그림을 그리재요.' },
          { who: '나비', ko: '그리고 민수가 피곤하대요. 그래서 같이 도서관에 가재요.' },
        ] },
        { type: 'tip', text: '[[친구들|t:les amis]] : [[들]] = le pluriel. Et regarde Nabi : [[피곤하대요]] (🔵 il **dit que**) puis [[가재요]] (🟢 il **propose**). Deux messages, deux formes !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Les groupes : qui propose quoi ?', pairs: [['지훈', '⚽ 축구'], ['수아', '🎨 그림'], ['민수', '📚 도서관']] } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi Minsu propose-t-il la bibliothèque ?', choices: ['Il est fatigué.', 'Il pleut.', 'Il a faim.'], answer: 0, explain: '[[민수가 피곤하대요.]]' } },
    { kind: 'practice', exercise: { type: 'sort', prompt: '🔵 Il dit que… ou 🟢 Il propose de… ?', buckets: ['🔵 대요', '🟢 재요'], items: [
      { text: '피곤하대요', bucket: 0 }, { text: '간대요', bucket: 0 }, { text: '먹었대요', bucket: 0 },
      { text: '가재요', bucket: 1 }, { text: '놀재요', bucket: 1 }, { text: '축구하재요', bucket: 1 },
    ] } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Jihoon propose qu’on joue au foot ensemble.', tiles: ['지훈이가', '같이', '축구하재요.'], distractors: ['축구할재요.', '축구한대요.'] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Un ami t’invite à la récré. Transmets son invitation avec **재요**. [[쓰세요!]]', placeholder: '수아가 쉬는 시간에 같이 놀재요', mustInclude: [LET_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '선생님, 지훈이가 같이 축구하재요.', fr: 'Monsieur / Madame, Jihoon propose qu’on joue au foot ensemble.', prompt: 'Mise en pratique : transmets l’invitation de Jihoon au professeur ⚽' } },
  ],
  interleave: [
    { type: 'type', prompt: 'Minsu : « [[자요.]] » → « il dit qu’il dort » :', answer: alts('민수가 잔대요', '잔대요') },
    { type: 'cloze', before: '날씨가 ', after: ' 같이 걸을까요?', choices: ['덥지만', '더워서'], answer: 0, translation: 'Il fait chaud, mais on marche ensemble ?' },
    { type: 'mcq', prompt: '👋 Le professeur sort de la classe. Tu restes :', choices: ['안녕히 가세요', '안녕히 계세요'], answer: 0 },
    { type: 'mcq', prompt: '[[뭐래요?]] veut dire…', choices: ['Qu’est-ce qu’il dit ?', 'Qu’est-ce que c’est ?', 'Qu’as-tu fait ?'], answer: 0 },
  ],
};

const day53: Lesson = {
  id: 'm3-w3-d3',
  month: 3,
  week: 3,
  day: 53,
  title: 'Il dit de… : -래요',
  summary: 'Relayer les consignes : 앉으세요 → 선생님이 앉으래요. Le règlement (뛰면 안 된대요), 반장, 숙제, et les trois sœurs 간대요 · 가재요 · 가래요.',
  cards: [
    { id: 'm4-ko-garaeyo', kind: 'grammar', ko: '가래요 · 앉으래요', fr: 'il / elle dit d’y aller · de s’asseoir — consigne : (으)세요 → (으)래요', note: '🔴 On remplace [[세요]] par [[래요]] : [[앉으세요]] → [[앉으래요]], [[하세요]] → [[하래요]]. Règle : [[il dit de…|p:report-cmd]]' },
    { id: 'm4-ko-anjeuraeyo', kind: 'phrase', ko: '선생님이 앉으래요', fr: 'Le professeur dit de s’asseoir.', note: '🪑 [[선생님]] : « [[앉으세요.]] » → [[선생님이 앉으래요.]]' },
    { id: 'm4-ko-banjang', kind: 'vocab', ko: '반장', fr: 'chef de classe, délégué(e)', note: '🎖️ [[반장이 조용히 하래요.]]' },
    { id: 'm4-ko-sukje', kind: 'vocab', ko: '숙제', fr: 'devoirs (à la maison)', note: '📝 [[숙제를 해요]]. [[선생님이 숙제를 하래요.]]' },
    { id: 'm4-ko-an-doendaeyo', kind: 'grammar', ko: '뛰면 안 된대요 · 가도 된대요', fr: 'il dit qu’il ne faut pas courir · qu’on peut y aller — 돼요 → 된대요', note: '🏫 [[되다]] est un verbe d’action : [[돼요]] → [[된대요]]. Pour relayer le règlement : [[règle|p:rules]] + [[대요|p:report]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Il dit de… 📢' },
        { type: 'tip', text: '[[대요]] : il dit que. [[재요]] : il propose. Aujourd’hui, le troisième : rapporter un **ordre**, une **consigne**.', mood: 'happy' },
        { type: 'text', text: 'Le professeur dit : [[앉으세요.]] Ton voisin n’a pas entendu. Tu lui répètes : [[선생님이 앉으래요.|t:le professeur dit de s’asseoir]]' },
        { type: 'text', text: 'Le truc de Nabi : prends la consigne en [[-세요|p:seyo]] et remplace **세요** par **래요**.' },
        { type: 'table', head: ['Le professeur dit…', '', '🔴 Il dit de…'], rows: [
          ['[[앉으세요]]', '➜', '[[앉으래요]]'],
          ['[[들으세요]]', '➜', '[[들으래요]]'],
          ['[[펴세요]]', '➜', '[[펴래요]]'],
          ['[[쓰세요]]', '➜', '[[쓰래요]]'],
          ['[[조용히 하세요]]', '➜', '[[조용히 하래요]]'],
        ] },
        { type: 'breakdown', segments: [
          { ko: '선생님', role: 'subject', gloss: 'le professeur', particle: { ko: '이', key: 'subject' } },
          { ko: '공책', role: 'object', gloss: 'le cahier', particle: { ko: '을', key: 'object' } },
          { ko: '펴래요', role: 'verb', gloss: 'dit d’ouvrir' },
        ], translation: 'Le professeur dit d’ouvrir le cahier.' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '« [[일어나세요!]] » → Le professeur dit de se lever :', choices: ['선생님이 일어나래요.', '선생님이 일어난대요.', '선생님이 일어나재요.'], answer: 0, explain: '[[일어나세요]] → [[일어나래요]] : **세요** → **래요**.' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '« [[보세요.]] » → [[선생님이…]]', answer: alts('선생님이 보래요', '보래요') } },
    { kind: 'practice', exercise: { type: 'type', prompt: '« [[연필을 놓으세요.]] » → [[선생님이 연필을…]]', answer: alts('선생님이 연필을 놓으래요', '놓으래요') } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Sans le 세요 ? 🔍' },
        { type: 'text', text: 'À partir de l’infinitif, même partage que [[세요 / 으세요|p:honor]] :' },
        { type: 'table', head: ['Le radical finit par…', '', '🔴 Il dit de…'], rows: [
          ['🟢 une voyelle → **래요**', '[[가]] · [[하]]', '[[가래요]] · [[공부하래요]]'],
          ['🟤 une consonne → **으래요**', '[[읽]] · [[앉]]', '[[읽으래요]] · [[앉으래요]]'],
          ['🔀 [[ㄷ|p:irreg-d]]', '[[듣]] · [[걷]]', '[[들으래요]] · [[걸으래요]]'],
        ] },
        { type: 'text', text: 'Deux mots de la classe : [[반장|t:chef de classe]] et [[숙제|t:devoirs]]. [[반장이 조용히 하래요.]] [[선생님이 숙제를 하래요.]]' },
        { type: 'tip', text: 'Avec [[래요]], le **시** du respect disparaît : [[선생님이 앉으래요]] reste poli, c’est la forme de tous les jours.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'sort', prompt: '🟢 래요 ou 🟤 으래요 ?', buckets: ['🟢 래요', '🟤 으래요'], items: [
      { text: '가다', bucket: 0 }, { text: '쓰다', bucket: 0 }, { text: '쉬다', bucket: 0 }, { text: '숙제하다', bucket: 0 },
      { text: '읽다', bucket: 1 }, { text: '앉다', bucket: 1 }, { text: '먹다', bucket: 1 },
    ], explain: 'Voyelle → [[가래요]], [[쓰래요]], [[쉬래요]], [[숙제하래요]]. Consonne → [[읽으래요]], [[앉으래요]], [[먹으래요]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '📝 « Le professeur dit de faire les devoirs » :', answer: alts('선생님이 숙제를 하래요') } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le règlement de l’école 🏫' },
        { type: 'text', text: 'Activité de la classe : relayer le **règlement**. Les règles en [[-면 안 돼요 / -도 돼요|p:rules]] se rapportent avec [[대요|p:report]] : [[되다]] est un verbe d’action, donc [[돼요]] → **된대요**.' },
        { type: 'table', head: ['📜 Règlement', '🔵 Il dit que…'], rows: [
          ['[[교실에서 뛰면 안 돼요.]]', '[[교실에서 뛰면 안 된대요.]]'],
          ['[[수업 시간에 떠들면 안 돼요.]]', '[[수업 시간에 떠들면 안 된대요.]]'],
          ['[[쉬는 시간에 나가도 돼요.]]', '[[쉬는 시간에 나가도 된대요.]]'],
          ['[[도서관에서 책을 빌려도 돼요.]]', '[[도서관에서 책을 빌려도 된대요.]]'],
        ] },
        { type: 'dialog', lines: [
          { who: '반장', ko: '여러분, 선생님이 조용히 하래요!' },
          { who: '루이', ko: '나비, 반장이 뭐래요?' },
          { who: '나비', ko: '조용히 하래요. 그리고 교실에서 뛰면 안 된대요.' },
          { who: '루이', ko: '쉬는 시간에 나가도 돼요?' },
          { who: '나비', ko: '네, 나가도 된대요.' },
        ] },
        { type: 'tip', text: '[[여러분|t:tout le monde, chers tous]] : pour s’adresser à tout un groupe.', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'D’après Nabi, que peut faire Louis à la récré ?', choices: ['🚪 sortir', '🏃 courir dans la classe', '🗣️ bavarder en cours'], answer: 0, explain: '[[네, 나가도 된대요.]]' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '교실에서 뛰면 안 ', after: '.', choices: ['된대요', '돼래요', '되재요'], answer: 0, translation: 'Il paraît qu’il ne faut pas courir dans la classe.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les trois sœurs 👭👧' },
        { type: 'text', text: 'Un même verbe, trois messages. Écoute bien : une seule lettre change !' },
        { type: 'table', head: ['', 'Il a dit…', 'Rapporté'], rows: [
          ['🔵 affirmation', '[[가요.]]', '[[간대요]] — il dit qu’il y va'],
          ['🟢 proposition', '[[같이 갈까요?]]', '[[가재요]] — il propose d’y aller'],
          ['🔴 ordre', '[[가세요.]]', '[[가래요]] — il dit d’y aller'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'listen', audio: '가래요', choices: ['가래요', '가재요', '간대요'], answer: 0, explain: '🔴 [[래]] : un ordre.' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '가재요', choices: ['가재요', '가래요', '간대요'], answer: 0, explain: '🟢 [[재]] : une proposition.' } },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque phrase à son sens.', pairs: [['간대요', 'il dit qu’il y va'], ['가재요', 'il propose d’y aller'], ['가래요', 'il dit d’y aller']] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Le professeur vient de donner une consigne. Transmets-la à ton voisin de table avec **래요**. [[쓰세요!]]', placeholder: '선생님이 공책을 펴래요', mustInclude: [CMD_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '선생님이 공책을 펴래요. 그리고 조용히 하래요.', fr: 'Le professeur dit d’ouvrir le cahier. Et de faire silence.', prompt: 'Mise en pratique : chuchote la consigne à ton voisin 🤫' } },
  ],
  interleave: [
    { type: 'type', prompt: '[[같이 먹을까요?]] → « il propose de manger ensemble » :', answer: alts('같이 먹재요') },
    { type: 'cloze', before: '민수가 책을 ', after: '.', choices: ['읽는대요', '읽대요'], answer: 0, translation: 'Minsu dit qu’il lit un livre.' },
    { type: 'type', prompt: '[[할아버지가 집에 있어요.]] → avec respect :', answer: alts('할아버지가 집에 계세요') },
    { type: 'cloze', before: '선생님, 천천히 ', after: '.', choices: ['말해 주세요', '말하재요'], answer: 0, translation: 'Monsieur / Madame, parlez lentement, s’il vous plaît.' },
  ],
};

const TALE: [string, string][] = [
  ['🐰🐢', '[[옛날에 토끼와 거북이가 살았어요.]]'],
  ['🐰', '[[토끼가 말했어요. “저는 빨리 달릴 수 있어요!”]]'],
  ['🐰', '[[“거북이, 같이 달릴까요?”]]'],
  ['🐢', '[[거북이가 말했어요. “좋아요!”]]'],
  ['🐻', '[[곰 선생님이 말했어요. “달리세요!”]]'],
  ['😴', '[[토끼가 말했어요. “피곤해요. 나무 아래에서 잘 거예요.”]]'],
  ['🐢', '[[거북이는 안 쉬었어요.]] [[“천천히 걸어요. 하지만 안 쉬어요!”]]'],
  ['🐻', '[[곰 선생님이 말했어요. “토끼, 일어나세요!”]]'],
  ['🏆', '[[거북이가 이겼어요!]] [[거북이가 말했어요. “토끼, 다음에 같이 걸을까요?”]]'],
];

const REPORTED: [string, string][] = [
  ['🔵', '[[토끼가 빨리 달릴 수 있대요.]]'],
  ['🟢', '[[토끼가 같이 달리재요.]]'],
  ['🔵', '[[거북이가 좋대요.]]'],
  ['🔴', '[[곰 선생님이 달리래요.]]'],
  ['🔵', '[[토끼가 피곤하대요.]] [[나무 아래에서 잘 거래요.]]'],
  ['🔵', '[[거북이는 안 쉰대요.]]'],
  ['🔴', '[[곰 선생님이 토끼한테 일어나래요.]]'],
  ['🟢', '[[거북이가 다음에 같이 걷재요.]]'],
];

const day54: Lesson = {
  id: 'm3-w3-d4',
  month: 3,
  week: 3,
  day: 54,
  title: '토끼와 거북이 : 뭐라고 했어요?',
  summary: 'Le conte du lièvre et de la tortue, raconté à nouveau : repérer les paroles et les rapporter en bleu (대요), vert (재요) et rouge (래요).',
  cards: [
    { id: 'm4-ko-tokki', kind: 'vocab', ko: '토끼', fr: 'lapin, lièvre', note: '🐰 [[토끼는 빨리 달려요.]]' },
    { id: 'm4-ko-geobugi', kind: 'vocab', ko: '거북이', fr: 'tortue', note: '🐢 [[거북이는 천천히 걸어요.]]' },
    { id: 'm4-ko-igyeoyo', kind: 'phrase', ko: '이겨요', fr: 'je gagne (poli)', note: '🏆 Infinitif : [[이기다]]. Passé : [[이겼어요]]. [[거북이가 이겼어요!]]' },
    { id: 'm4-ko-mworago-haesseoyo', kind: 'phrase', ko: '뭐라고 했어요?', fr: 'Qu’a-t-il / elle dit ?', note: '🗣️ [[거북이가 뭐라고 했어요?]] — [[같이 걷재요.]] Au présent : [[뭐래요?]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le cahier de littérature 📕' },
        { type: 'tip', text: '[[토끼와 거북이]], tu connais ! Mais aujourd’hui, les animaux **parlent**… et c’est toi qui vas **rapporter** leurs paroles.', mood: 'happy' },
        { type: 'text', text: 'Méthode de la classe : on **surligne** chaque parole rapportée avec sa couleur.' },
        { type: 'table', head: ['Couleur', 'Parole', 'Forme'], rows: [
          ['🔵 bleu', 'une affirmation', '[[대요|p:report]]'],
          ['🟢 vert', 'une proposition', '[[재요|p:report-let]]'],
          ['🔴 rouge', 'un ordre', '[[래요|p:report-cmd]]'],
        ] },
        { type: 'text', text: 'Glossaire en marge : [[곰|t:ours]] · [[이겼어요|t:a gagné]] · [[토끼한테|t:au lapin (à quelqu’un)]] · [[말했어요|t:a dit]]' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Le glossaire en images : relie.', pairs: [['토끼', '🐰'], ['거북이', '🐢'], ['곰', '🐻'], ['이겼어요', '🏆']] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: '토끼와 거북이' },
        { type: 'text', text: 'Lis doucement. Touche une phrase pour l’entendre.' },
        { type: 'table', head: ['', ''], rows: TALE.map(([emoji, line]) => [emoji, line]) },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qui donne les ordres dans la course ?', choices: ['🐻 곰 선생님', '🐰 토끼', '🐢 거북이'], answer: 0, explain: '[[“달리세요!”]] · [[“토끼, 일어나세요!”]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que fait la tortue à la fin ?', choices: ['Elle propose de marcher ensemble la prochaine fois.', 'Elle se moque du lapin.', 'Elle dort sous l’arbre.'], answer: 0, explain: '[[“토끼, 다음에 같이 걸을까요?”]]' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le conte en couleurs 🖍️' },
        { type: 'text', text: 'Activité de la classe : transformer chaque réplique en **style indirect** dans le cahier. Voici le cahier de Nabi :' },
        { type: 'table', head: ['', 'Style indirect'], rows: REPORTED.map(([colour, line]) => [colour, line]) },
        { type: 'tip', text: 'Piège ! [[잘 거래요]] est **bleu** : c’est le futur [[거예요]] → [[거래요]], pas un ordre. Et [[걷재요]] : devant [[재]], le ㄷ reste.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'sort', prompt: '🔵 affirmation ou 🔴 ordre ?', buckets: ['🔵 bleu', '🔴 rouge'], items: [
      { text: '좋대요', bucket: 0 }, { text: '잘 거래요', bucket: 0 }, { text: '안 쉰대요', bucket: 0 }, { text: '달릴 수 있대요', bucket: 0 },
      { text: '달리래요', bucket: 1 }, { text: '일어나래요', bucket: 1 }, { text: '앉으래요', bucket: 1 },
    ], explain: '[[거래요]] vient de [[거예요]] (futur) : bleu ! Un ordre vient d’une consigne en [[세요]].' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🐰 [[“거북이, 같이 달릴까요?”]] — quelle couleur ?', choices: ['🟢 vert : 달리재요', '🔵 bleu : 달린대요', '🔴 rouge : 달리래요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Le cahier de littérature : touche une case vide et écris la forme rapportée.', head: ['Réplique', 'Rapportée'], rows: [
      ['🐰 [[피곤해요.]]', blank('피곤하대요')],
      ['🐢 [[안 쉬어요.]]', blank('안 쉰대요')],
      ['🐻 [[달리세요!]]', blank('달리래요')],
      ['🐢 [[같이 걸을까요?]]', blank('같이 걷재요')],
    ], explain: 'État → [[대요]] · action → [[ㄴ대요]] · [[세요]] → [[래요]] · radical + [[재요]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Qu’a-t-il dit ? 🗣️' },
        { type: 'text', text: 'Pour demander ce qu’une personne **a dit** : [[뭐라고 했어요?|t:qu’a-t-il dit ?]] (au présent, tu connais [[뭐래요?]]). Tu réponds avec la bonne couleur.' },
        { type: 'dialog', lines: [
          { who: '선생님', ko: '거북이가 뭐라고 했어요?' },
          { who: '나비', ko: '거북이가 다음에 같이 걷재요.' },
          { who: '선생님', ko: '좋아요! 그럼 곰 선생님은 뭐라고 했어요?' },
          { who: '나비', ko: '토끼한테 일어나래요!' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '[[토끼가 뭐라고 했어요?]]', before: '토끼가 빨리 달릴 수 ', after: '.', choices: ['있대요', '있재요', '있래요'], answer: 0, translation: 'Le lapin dit qu’il peut courir vite.' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[거북이가 뭐라고 했어요?]] 🐢 « [[좋아요!]] » →', answer: alts('거북이가 좋대요', '좋대요') } },
    { kind: 'practice', exercise: { type: 'listen', audio: '거북이가 뭐라고 했어요?', choices: ['거북이가 뭐라고 했어요?', '거북이가 뭐 했어요?', '거북이가 어디에 있어요?'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'read', ko: '거북이가 다음에 같이 걷재요.', fr: 'La tortue propose qu’on marche ensemble la prochaine fois.', prompt: 'Mise en pratique : réponds au professeur à voix haute. [[거북이가 뭐라고 했어요?]]' } },
  ],
  interleave: [
    { type: 'type', prompt: '« [[앉으세요.]] » → « le professeur dit de s’asseoir » :', answer: alts('선생님이 앉으래요') },
    { type: 'mcq', prompt: 'Jihoon : « [[같이 놀까요?]] » →', choices: ['지훈이가 같이 놀재요.', '지훈이가 같이 논대요.', '지훈이가 같이 놀래요.'], answer: 0 },
    { type: 'cloze', before: '선생님이 어디에 ', after: '?', choices: ['가세요', '가요'], answer: 0, translation: 'Où va le professeur ?' },
    { type: 'type', prompt: '[[춥다]] au présent poli :', answer: '추워요' },
  ],
};

const DICTATION = [
  '민수가 어제 도서관에 갔대요',
  '내일 비가 온대요',
  '지훈이가 주말에 같이 영화 보재요',
  '선생님이 공책을 펴래요',
  '수아가 어제 숙제를 했대요',
];

const ORDERS: [string, string][] = [
  ['일어나세요', '일어나래요'],
  ['책을 읽으세요', '책을 읽으래요'],
  ['조용히 하세요', '조용히 하래요'],
];

const day55: Lesson = {
  id: 'm3-w3-d5',
  month: 3,
  week: 3,
  day: 55,
  title: 'Messages secrets & évaluation n°11',
  summary: 'La dictée de la classe, le cahier de liaison, la petite évaluation n°11 et les messages secrets de la classe.',
  cards: [
    { id: 'm4-ko-bimil', kind: 'vocab', ko: '비밀', fr: 'secret', note: '🤫 [[비밀이에요!|t:c’est un secret !]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le bilan de la semaine 📒' },
        { type: 'tip', text: '[[이번 주에 대요, 재요, 래요를 배웠어요.|t:cette semaine, on a appris 대요, 재요, 래요]] Petite évaluation aujourd’hui, sans stress !', mood: 'encourage' },
        { type: 'table', head: ['', 'Il a dit…', 'Rapporté'], rows: [
          ['🔵 [[affirmation|p:report]]', '[[가요]] · [[먹어요]] · [[좋아요]] · [[갔어요]]', '[[간대요]] · [[먹는대요]] · [[좋대요]] · [[갔대요]]'],
          ['🟢 [[proposition|p:report-let]]', '[[같이 갈까요?]] · [[같이 놀자!]]', '[[같이 가재요]] · [[같이 놀재요]]'],
          ['🔴 [[ordre|p:report-cmd]]', '[[앉으세요]] · [[가세요]]', '[[앉으래요]] · [[가래요]]'],
        ] },
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
        { type: 'title', text: 'Le cahier de liaison ✉️' },
        { type: 'text', text: 'Épreuve de la classe : recopier les messages de la journée dans le **cahier de liaison**, en style indirect.' },
      ],
    },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Touche une case vide, puis écris la forme rapportée.', head: ['Qui', 'Il a dit…', 'Rapporté'], rows: [
      ['수아', '[[피곤해요.]]', blank('피곤하대요')],
      ['루이', '[[같이 공원에 갈까요?]]', blank('같이 공원에 가재요')],
      ['선생님', '[[책을 읽으세요.]]', blank('책을 읽으래요')],
      ['민수', '[[어제 축구를 했어요.]]', blank('어제 축구를 했대요')],
    ], explain: 'État → [[대요]] · proposition → [[재요]] · consigne → [[래요]] · passé : [[어요]] → [[대요]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Petite évaluation n°11' },
        { type: 'table', head: ['Partie', 'Contenu'], rows: [
          ['A', 'Transformation de paroles'],
          ['B', 'Compréhension orale des consignes'],
          ['C', 'Expression orale'],
        ] },
        { type: 'tip', text: '**A — Transformation.** Relie chaque message direct à sa forme rapportée.', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: '**A · 1/2** — Relie.', pairs: [['밥을 먹어요.', '밥을 먹는대요.'], ['같이 놀자!', '같이 놀재요.'], ['책을 읽으세요.', '책을 읽으래요.']] } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**A · 2/2** — « [[밥을 먹어요.]] » : pourquoi pas [[먹대요]] ?', choices: ['[[먹다]] est une action au présent : il faut 는대요.', '[[먹다]] est irrégulier.', '[[대요]] est seulement pour le passé.'], answer: 0, explain: 'Action → [[ㄴ / 는대요]]. Seuls les **états** ([[좋대요]]) et le **passé** ([[먹었대요]]) prennent [[대요]] directement.' } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**B — Consignes.** Écoute la consigne du professeur, puis réponds à la question : [[선생님이 뭐라고 했어요?]] Commence par [[선생님이…]]', mood: 'encourage' }] },
    ...ORDERS.map(([said, reported], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'type' as const, prompt: `**B · ${i + 1}/${ORDERS.length}** — 🎧 [[선생님이 뭐라고 했어요?]]`, audio: said, answer: alts(`선생님이 ${reported}`, reported) },
    })),
    { kind: 'learn', blocks: [{ type: 'tip', text: '**C — À l’oral.** Un camarade a une envie, ou le chef de classe a donné un ordre. Rapporte-le au professeur.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'write', prompt: '**C · 1/2** — Prépare ton message (avec [[대요]], [[재요]] ou [[래요]]).', placeholder: '선생님, 민수가 쉬는 시간에 같이 놀재요', mustInclude: [REPORT_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '선생님, 반장이 조용히 하래요. 그리고 민수가 같이 놀재요.', fr: 'Monsieur / Madame, le chef de classe dit de faire silence. Et Minsu propose qu’on joue ensemble.', prompt: '**C · 2/2** — Dis-le à voix haute, puis écoute le modèle.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les messages secrets 🤫' },
        { type: 'text', text: 'Jeu de rôle de la classe : un [[비밀|t:secret]] passe de table en table. Une histoire **entièrement en coréen**. Touche une bulle pour l’entendre.' },
        { type: 'dialog', lines: [
          { who: '📖', ko: '금요일 오후예요. 수업 시간이에요.' },
          { who: '수아', ko: '나비, 비밀이에요! 내일 민수 생일이에요.' },
          { who: '나비', ko: '루이, 내일 민수 생일이래요. 비밀이에요!' },
          { who: '루이', ko: '그래요? 그럼 같이 케이크를 살까요?' },
          { who: '나비', ko: '수아, 루이가 같이 케이크를 사재요.' },
          { who: '수아', ko: '좋아요! 그런데 민수한테 말하면 안 돼요!' },
          { who: '선생님', ko: '나비, 루이! 떠들면 안 돼요. 조용히 하세요!' },
          { who: '반장', ko: '나비, 선생님이 조용히 하래요!' },
        ] },
        { type: 'tip', text: 'Nouveaux petits mots : [[오후|t:après-midi]] · [[케이크|t:gâteau]] · [[그래요?|t:ah bon ?]] · [[그런데|t:mais, au fait]]. Et [[생일이래요]] : avec un **nom**, [[이에요]] → [[이래요]] (« il dit que c’est… »).', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quel est le secret ?', choices: ['Demain, c’est l’anniversaire de Minsu.', 'Demain, il va pleuvoir.', 'Minsu est malade.'], answer: 0, explain: '[[내일 민수 생일이래요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que propose Louis ?', choices: ['Acheter un gâteau ensemble.', 'Jouer au foot.', 'Aller à la bibliothèque.'], answer: 0, explain: '[[루이가 같이 케이크를 사재요.]] — 🟢 vert !' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[선생님이 조용히 하래요]] : quelle couleur ?', choices: ['🔴 un ordre', '🔵 une affirmation', '🟢 une proposition'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ton bilan de la semaine 11 🎓' },
        { type: 'table', head: ['Je sais…', 'Exemple'], rows: [
          ['rapporter ce que quelqu’un **dit**', '[[민수가 학교에 간대요]]'],
          ['transmettre une **proposition**', '[[지훈이가 같이 축구하재요]]'],
          ['relayer une **consigne**', '[[선생님이 앉으래요]]'],
          ['demander ce qui a été dit', '[[뭐래요?]] · [[뭐라고 했어요?]]'],
          ['suivre un **conte** en coréen', '[[토끼와 거북이]]'],
        ] },
        { type: 'tip', text: 'Tu es maintenant le **messager** de la classe ! [[나비가 내일 또 공부하재요!|t:Nabi propose qu’on étudie encore demain !]] 🦋', mood: 'happy' },
      ],
    },
  ],
};

export const m3w3: Lesson[] = [day51, day52, day53, day54, day55];
