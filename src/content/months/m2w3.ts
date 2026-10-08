import type { Lesson } from '../types';

const alts = (...xs: string[]): string[] => {
  const out = new Set<string>();
  for (const s of xs) {
    for (const t of [s, s.replace(/(못|안) 해요/g, '$1해요')]) {
      out.add(t);
      out.add(t.replace(/[.,!?] /g, ' '));
    }
  }
  return [...out];
};

const CAUSE_ANY = ['아서', '어서', '와서', '빠서', '파서', '해서', '워서'].join('|');

const KKAYO_GEOYEYO = ['갈까요', '갈 거예요'];

const day31: Lesson = {
  id: 'm2-w3-d1',
  month: 2,
  week: 3,
  day: 31,
  title: 'Parce que… -아서/어서',
  summary: 'Dire pourquoi : 아파서 (j’ai mal), 바빠서 (je suis occupé), 비가 와서 (il pleut), et une excuse avec 못.',
  cards: [
    { id: 'm3-ko-apayo', kind: 'phrase', ko: '아파요', fr: 'j’ai mal ; je suis malade (poli)', note: '🤒 Infinitif : [[아프다]]. Le [[ㅡ]] s’efface, comme [[크다]] → [[커요]].' },
    { id: 'm3-ko-bae', kind: 'vocab', ko: '배', fr: 'ventre', note: '🤕 [[배가 아파요|t:j’ai mal au ventre]]' },
    { id: 'm3-ko-baega-gopayo', kind: 'phrase', ko: '배가 고파요', fr: 'j’ai faim', note: '🍽️ Mot à mot : « le ventre a faim ». Infinitif : [[고프다]].' },
    { id: 'm3-ko-bappayo', kind: 'phrase', ko: '바빠요', fr: 'je suis occupé(e) (poli)', note: '🏃 Infinitif : [[바쁘다]]. Le [[ㅡ]] s’efface : [[바빠요]].' },
    { id: 'm3-ko-biga-wayo', kind: 'phrase', ko: '비가 와요', fr: 'il pleut', note: '☔ Mot à mot : « la pluie vient » : [[비|t:pluie]] + [[와요]] ([[오다|t:venir]] : [[오]] + 아요 → [[와요]], comme [[봐요]]).' },
    { id: 'm3-ko-aseo', kind: 'grammar', ko: '아파서 · 바빠서 · 비가 와서', fr: 'parce que… (cause) — présent sans 요 + 서', note: '[[아파요]] → [[아파서]]. La cause d’abord, la conséquence ensuite. Règle : [[cause|p:cause]]' },
    { id: 'm3-ko-wae', kind: 'vocab', ko: '왜', fr: 'pourquoi ?', note: '❓ [[왜 못 먹어요?|t:pourquoi tu ne peux pas manger ?]] — [[배가 아파서 못 먹어요.]]' },
    { id: 'm3-ko-mot-meogeoyo', kind: 'phrase', ko: '배가 아파서 못 먹어요', fr: 'J’ai mal au ventre, donc je ne peux pas manger.', note: '[[못|p:neg]] devant le verbe = « ne pas pouvoir ». Se prononce [[몬 머거요]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Nouvelle semaine !' },
        { type: 'tip', text: 'Cette semaine, on apprend à **expliquer** et à **proposer**. [[같이|t:ensemble]]… on y va ?', mood: 'happy' },
        { type: 'title', text: 'Trois situations' },
        { type: 'letters', items: [
          { char: '아파요', mnemonic: '🤒 j’ai mal, je suis malade' },
          { char: '바빠요', mnemonic: '🏃 je suis occupé(e)' },
          { char: '비가 와요', mnemonic: '☔ il pleut' },
        ] },
        { type: 'text', text: '[[아프다]] et [[바쁘다]] finissent par [[ㅡ]] : il **s’efface**, comme dans [[크다]] → [[커요]]. Et [[비가 와요]], c’est « la pluie **vient** » : [[비|t:pluie]] + [[오다|t:venir]] → [[와요]] (comme [[보다]] → [[봐요]]).' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque phrase à son image.', pairs: [['아파요', '🤒'], ['바빠요', '🏃'], ['비가 와요', '☔']] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '비가 와요', choices: ['비가 와요', '바빠요', '봐요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le ventre : 배' },
        { type: 'text', text: 'Un mot très utile : [[배|t:ventre]]. Comme pour [[가방이 커요]], ce qu’on décrit prend [[가|p:subject]] :' },
        { type: 'breakdown', segments: [
          { ko: '배', role: 'subject', gloss: 'ventre', particle: { ko: '가', key: 'subject' } },
          { ko: '아파요', role: 'verb', gloss: 'fait mal' },
        ], translation: 'J’ai mal au ventre.' },
        { type: 'table', head: ['', ''], rows: [
          ['🤕 [[배가 아파요.]]', 'J’ai mal au ventre.'],
          ['🍽️ [[배가 고파요.]]', 'J’ai faim. ([[고프다]] : le [[ㅡ]] s’efface aussi !)'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🍽️ Comment dire « J’ai faim » ?', choices: ['배가 고파요', '배가 아파요', '바빠요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Cause → effet en une seule phrase' },
        { type: 'text', text: 'Tu sais déjà relier deux phrases avec [[그래서|t:donc]] :' },
        { type: 'text', text: '[[비가 와요. 그래서 집에 있어요.]]' },
        { type: 'text', text: 'Maintenant, on **colle** la cause au verbe avec **-아서 / -어서** : une seule phrase !' },
        { type: 'text', text: '[[비가 와서 집에 있어요.|t:il pleut, donc je reste à la maison]]' },
        { type: 'breakdown', segments: [
          { ko: '비', role: 'subject', gloss: 'pluie', particle: { ko: '가', key: 'subject' } },
          { ko: '와서', role: 'verb', gloss: 'vient, donc…' },
          { ko: '집', role: 'place', gloss: 'maison', particle: { ko: '에', key: 'location' } },
          { ko: '있어요', role: 'verb', gloss: 'je suis' },
        ], translation: 'Il pleut, donc je reste à la maison.', note: 'La **cause** d’abord, la **conséquence** ensuite : le même ordre qu’avec [[그래서]].' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le truc de Nabi ✏️' },
        { type: 'text', text: 'Pas besoin d’une nouvelle règle : prends le **présent**, enlève [[요]], ajoute **서**. Voyelles claires et sombres : comme toujours !' },
        { type: 'table', head: ['Présent', '→', 'Cause'], rows: [
          ['[[아파요]]', '− 요 + 서', '[[아파서]]'],
          ['[[바빠요]]', '− 요 + 서', '[[바빠서]]'],
          ['[[와요]]', '− 요 + 서', '[[와서]]'],
          ['[[고파요]]', '− 요 + 서', '[[고파서]]'],
          ['[[좋아해요]]', '− 요 + 서', '[[좋아해서]]'],
        ] },
        { type: 'tip', text: 'Piège ! **Jamais de passé** devant 서. Le temps se met seulement **à la fin** : [[어제 비가 와서 집에 있었어요.|t:hier, il pleuvait, donc je suis resté(e) à la maison]]', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[아파요]] → cause :', choices: ['아파서', '아퍼서', '아파요서'], answer: 0, explain: '[[아파요]] − 요 + 서 → [[아파서]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[바빠요]] → cause :', answer: '바빠서' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[비가 와요]] → cause :', answer: '비가 와서' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Hier, il pleuvait, donc je suis resté(e) à la maison.', choices: ['어제 비가 와서 집에 있었어요', '어제 비가 왔어서 집에 있었어요', '어제 비가 와서 집에 있어요'], answer: 0, explain: 'Le passé se met **à la fin** seulement : [[와서]] … [[있었어요]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les cartes « Cause » + « Effet » 🃏' },
        { type: 'text', text: 'Activité de la classe : chaque élève pioche une carte **Cause** et cherche la carte **Effet** qui va avec. Exemple :' },
        { type: 'table', head: ['🟥 Cause', '🟦 Effet'], rows: [
          ['[[비가 와서]]', '[[집에 있어요.]]'],
          ['[[배가 고파서]]', '[[밥을 먹어요.]]'],
          ['[[한국어를 좋아해서]]', '[[한국어를 공부해요.]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque carte 🟥 Cause à sa carte 🟦 Effet.', pairs: [['비가 와서', '집에 있어요'], ['배가 고파서', '밥을 먹어요'], ['아파서', '집에서 쉬어요'], ['축구를 좋아해서', '공원에서 축구를 해요']] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Une excuse : 못' },
        { type: 'text', text: 'Pour dire qu’on **ne peut pas**, on place [[못|p:neg]] juste **devant le verbe** :' },
        { type: 'breakdown', segments: [
          { ko: '배가', role: 'subject', gloss: 'ventre' },
          { ko: '아파서', role: 'verb', gloss: 'a mal, donc' },
          { ko: '못', role: 'adverb', gloss: 'ne peux pas' },
          { ko: '먹어요', role: 'verb', gloss: 'manger' },
        ], translation: 'J’ai mal au ventre, donc je ne peux pas manger.' },
        { type: 'liaison', items: [
          { written: '못 먹어요', spoken: '몬 머거요', fr: 'devant ㅁ, le ㅅ de 못 devient ㄴ' },
          { written: '못 가요', spoken: '몯 까요', fr: 'le ㄱ se durcit' },
        ] },
        { type: 'table', head: ['', 'Je ne peux pas…'], rows: [
          ['[[먹어요]]', '[[못 먹어요]]'],
          ['[[가요]]', '[[못 가요]]'],
          ['[[만나요]]', '[[못 만나요]]'],
        ] },
        { type: 'text', text: 'Et pour demander la raison : [[왜|t:pourquoi ?]]' },
        { type: 'dialog', lines: [
          { who: 'Louis', ko: '왜 못 먹어요?', fr: 'Pourquoi tu ne peux pas manger ?' },
          { who: 'Marie', ko: '배가 아파서 못 먹어요.' },
        ] },
        { type: 'tip', text: 'Bientôt, tu verras le cousin de [[못]], qui veut dire « ne… pas » tout court. Pour l’instant : [[못]] = **impossible** 🚫.', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'order', translation: 'J’ai mal au ventre, donc je ne peux pas manger.', tiles: ['배가', '아파서', '못', '먹어요'], distractors: ['아파요', '고파서'] } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Je suis occupé(e), donc je ne peux pas voir mon ami.', tiles: ['바빠서', '친구를', '못', '만나요'], distractors: ['바빠요', '친구가'] } },
    { kind: 'practice', exercise: { type: 'cloze', before: '비가 ', after: ' 공원에 못 가요.', choices: ['와서', '와요', '왔어서'], answer: 0, translation: 'Il pleut, donc je ne peux pas aller au parc.' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '배가 아파서 못 먹어요', choices: ['배가 아파서 못 먹어요', '배가 고파서 밥을 먹어요', '바빠서 못 가요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Invente **ton** excuse : une cause en **-서** + [[못]] + un verbe. [[쓰세요!]]', placeholder: '바빠서 영화를 못 봐요', mustInclude: [CAUSE_ANY, '못'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '배가 아파서 못 먹어요.', fr: 'J’ai mal au ventre, donc je ne peux pas manger.', prompt: 'Joue la scène : tu as très mal au ventre 🤕' } },
  ],
  interleave: [
    { type: 'cloze', before: '물이 없었어요. ', after: ' 우유를 마셨어요.', choices: ['그래서', '그리고'], answer: 0, translation: 'Il n’y avait pas d’eau. Donc j’ai bu du lait.' },
    { type: 'type', prompt: 'Futur de [[만나다]] :', answer: ['만날 거예요', '만날거예요'] },
    { type: 'cloze', before: '도서관', after: ' 공부해요.', choices: ['에서', '에'], answer: 0, translation: 'J’étudie à la bibliothèque.' },
    { type: 'mcq', prompt: '[[커요]] veut dire…', choices: ['c’est grand', 'c’est petit', 'c’est mauvais'], answer: 0 },
  ],
};

const day32: Lesson = {
  id: 'm2-w3-d2',
  month: 2,
  week: 3,
  day: 32,
  title: 'On joue ensemble ? 같이 -(으)ㄹ까요?',
  summary: 'Proposer une activité : 같이 축구할까요?, 같이 밥 먹을까요?, et l’appel du chef de groupe : 갑시다 !',
  cards: [
    { id: 'm3-ko-gachi', kind: 'vocab', ko: '같이', fr: 'ensemble', note: '🤝 Se prononce [[가치]]. [[같이 가요|t:allons-y ensemble]]' },
    { id: 'm3-ko-lkkayo', kind: 'grammar', ko: '갈까요?', fr: 'on y va ? (proposition) — voyelle → ㄹ까요?', note: '🟢 [[가]] + ㄹ까요 → [[갈까요?]] · [[볼까요?]] · [[할까요?]]. Règle : [[proposer|p:suggest]]' },
    { id: 'm3-ko-eulkkayo', kind: 'grammar', ko: '먹을까요?', fr: 'on mange ? (proposition) — consonne → 을까요?', note: '🟤 [[먹]] + 을까요 → [[먹을까요?]] · [[읽을까요?]]. Se prononce [[머글까요]].' },
    { id: 'm3-ko-chukgu-hal-kkayo', kind: 'phrase', ko: '같이 축구할까요?', fr: 'On joue au foot ensemble ?', note: '⚽ Réponse : [[좋아요! 같이 해요.|t:d’accord ! faisons-le ensemble]]' },
    { id: 'm3-ko-bap-meogeul-kkayo', kind: 'phrase', ko: '같이 밥 먹을까요?', fr: 'On mange ensemble ?', note: '🍚 À l’oral, on laisse souvent tomber [[을|p:object]] : [[밥 먹을까요?]]' },
    { id: 'm3-ko-geurim', kind: 'phrase', ko: '그림을 그려요', fr: 'je dessine (poli)', note: '🎨 [[그림|t:dessin]] + [[그리다|t:dessiner]] ([[그리]] + 어요 → [[그려요]], comme [[마셔요]]).' },
    { id: 'm3-ko-dallyeoyo', kind: 'phrase', ko: '달려요', fr: 'je cours (poli)', note: '🏃 Infinitif : [[달리다]]. [[같이 달릴까요?|t:on court ensemble ?]]' },
    { id: 'm3-ko-bsida', kind: 'grammar', ko: '갑시다! · 먹읍시다!', fr: 'Allons-y ! Mangeons ! — -(으)ㅂ시다 (faisons…)', note: '📣 Voyelle → ㅂ시다 ([[합시다]]), consonne → 읍시다 ([[읽읍시다]]). Pour un groupe ; pas avec un aîné.' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ensemble : 같이' },
        { type: 'text', text: 'À la récréation, il faut savoir **proposer** un jeu. Premier mot magique : [[같이|t:ensemble]].' },
        { type: 'liaison', items: [
          { written: '같이', spoken: '가치', fr: 'ㅌ + 이 → 치 : on l’écrit 같이, on dit [가치]' },
        ] },
        { type: 'text', text: 'Puis on termine le verbe par **-(으)ㄹ까요?** = « Si on… ? », « On… ? »' },
        { type: 'breakdown', segments: [
          { ko: '같이', role: 'adverb', gloss: 'ensemble' },
          { ko: '축구할까요?', role: 'verb', gloss: 'on joue au foot ?' },
        ], translation: 'On joue au foot ensemble ?', note: '[[축구를 해요]] se raccourcit souvent en [[축구해요]] → [[축구할까요?]]' },
      ],
    },
    { kind: 'practice', exercise: { type: 'listen', audio: '같이 축구할까요?', choices: ['같이 축구할까요?', '내일 축구할 거예요', '축구를 했어요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Comme le futur… avec 까요' },
        { type: 'text', text: 'Bonne nouvelle : tu connais déjà la moitié de la règle ! C’est la même que pour [[갈 거예요|p:future]] : on remplace juste [[거예요]] par **까요?**, collé.' },
        { type: 'table', head: ['Le radical finit par…', 'Futur', 'Proposition'], rows: [
          ['🟢 une voyelle', '[[갈 거예요]]', '[[갈까요?]]'],
          ['🟤 une consonne', '[[먹을 거예요]]', '[[먹을까요?]]'],
          ['⭐ [[하다]]', '[[할 거예요]]', '[[할까요?]]'],
        ] },
        { type: 'compose', items: [
          { parts: ['가', 'ㄹ', '까요'], result: '갈까요' },
          { parts: ['보', 'ㄹ', '까요'], result: '볼까요' },
          { parts: ['먹', '을', '까요'], result: '먹을까요' },
        ] },
        { type: 'liaison', items: [
          { written: '먹을까요', spoken: '머글까요', fr: 'liaison' },
          { written: '읽을까요', spoken: '일글까요', fr: 'liaison : le ㄹ de ㄺ glisse' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'sort', prompt: '🟢 ㄹ까요 ou 🟤 을까요 ?', buckets: ['🟢 ㄹ까요', '🟤 을까요'], items: [
      { text: '가다', bucket: 0 }, { text: '보다', bucket: 0 }, { text: '만나다', bucket: 0 }, { text: '마시다', bucket: 0 }, { text: '공부하다', bucket: 0 },
      { text: '먹다', bucket: 1 }, { text: '읽다', bucket: 1 }, { text: '앉다', bucket: 1 },
    ], explain: 'Exactement comme le futur : voyelle → 🟢 [[ㄹ까요]], consonne → 🟤 [[을까요]].' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Proposition avec [[먹다]] :', choices: ['먹을까요?', '먹ㄹ까요?', '먹을 거예요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Propose avec [[보다]] : « On regarde ? »', answer: '볼까요' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les pictogrammes de la cour 🏫' },
        { type: 'text', text: 'Dans la cour, la classe affiche quatre pictogrammes. Deux nouveaux verbes : [[그리다|t:dessiner]] et [[달리다|t:courir]].' },
        { type: 'letters', items: [
          { char: '축구해요', mnemonic: '⚽ football' },
          { char: '그림을 그려요', mnemonic: '🎨 dessin' },
          { char: '책을 읽어요', mnemonic: '📖 lecture' },
          { char: '달려요', mnemonic: '🏃 course' },
        ] },
        { type: 'text', text: '[[그림|t:dessin]] + [[그리다]] : « dessiner un dessin ». [[그리]] + 어요 → [[그려요]] et [[달리]] + 어요 → [[달려요]], comme [[마시]] → [[마셔요]].' },
        { type: 'table', head: ['Pictogramme', 'Proposition'], rows: [
          ['⚽', '[[같이 축구할까요?]]'],
          ['🎨', '[[같이 그림을 그릴까요?]]'],
          ['📖', '[[같이 책을 읽을까요?]]'],
          ['🏃', '[[같이 달릴까요?]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque proposition à son pictogramme.', pairs: [['같이 축구할까요?', '⚽'], ['같이 그림을 그릴까요?', '🎨'], ['같이 책을 읽을까요?', '📖'], ['같이 달릴까요?', '🏃']] } },
    { kind: 'practice', exercise: { type: 'order', translation: 'On mange ensemble ?', tiles: ['같이', '밥', '먹을까요?'], distractors: ['먹ㄹ까요?', '먹을 거예요'] } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🎨 Propose à un camarade de dessiner ensemble :', answer: ['같이 그림을 그릴까요', '같이 그림 그릴까요'] } },
    { kind: 'practice', exercise: { type: 'type', prompt: '⚽ Propose à un camarade de jouer au foot ensemble :', answer: ['같이 축구할까요', '같이 축구를 할까요', '같이 축구 할까요'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le chef de groupe : -(으)ㅂ시다 📣' },
        { type: 'text', text: 'Quand le groupe est d’accord, le chef lance : « Faisons-le ! » C’est **-(으)ㅂ시다** :' },
        { type: 'table', head: ['', 'Proposition', 'Allez, on y va !'], rows: [
          ['🟢 voyelle', '[[갈까요?]]', '[[갑시다!]]'],
          ['🟤 consonne', '[[먹을까요?]]', '[[먹읍시다!]]'],
          ['⭐ [[하다]]', '[[할까요?]]', '[[합시다!]]'],
        ] },
        { type: 'tip', text: '[[갑시다]] sonne un peu « chef ». Entre amis, on dit plutôt [[같이 가요!]] — le présent poli sert aussi à dire « allons-y ». Et jamais [[합시다]] à un professeur ou à un aîné !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '📣 Le chef du groupe : « Mangeons ! »', choices: ['먹읍시다!', '먹을까요?', '먹었어요!'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Organiser une fête de classe 🎉' },
        { type: 'text', text: 'Activité de la classe : en petits groupes, on organise un événement. **Quoi ? Quand ? Où ?** — tout se décide avec [[까요?]] [[들으세요!]]' },
        { type: 'dialog', lines: [
          { who: 'Marie', ko: '금요일에 같이 뭐 할까요?', fr: 'Vendredi, qu’est-ce qu’on fait ensemble ?' },
          { who: 'Louis', ko: '영화를 볼까요?' },
          { who: 'Marie', ko: '좋아요! 몇 시에 만날까요?' },
          { who: 'Louis', ko: '세 시에 만나요.' },
          { who: 'Marie', ko: '어디에서 만날까요?' },
          { who: 'Louis', ko: '학교에서 만나요. 그리고 같이 밥 먹을까요?' },
          { who: 'Marie', ko: '좋아요! 같이 갑시다!' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[몇 시에 만날까요?]]', choices: ['🕒 3 h', '🕔 5 h', '🕙 10 h'], answer: 0, explain: '[[세 시에 만나요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[어디에서 만날까요?]]', choices: ['🏫 à l’école', '🌳 au parc', '🍽️ au restaurant'], answer: 0, explain: '[[학교에서 만나요.]]' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'On se retrouve où ?', tiles: ['어디에서', '만날까요?'], distractors: ['어디에', '만날 거예요'] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Propose **ton** activité à un camarade, avec [[같이]] ! [[쓰세요!]]', placeholder: '같이 공원에 갈까요?', mustInclude: ['같이', '까요'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '같이 축구할까요? 좋아요! 같이 해요.', fr: 'On joue au foot ensemble ? D’accord ! Jouons ensemble.', prompt: 'Joue les deux rôles : propose, puis accepte !' } },
  ],
  interleave: [
    { type: 'type', prompt: '[[아파요]] → cause :', answer: '아파서' },
    { type: 'cloze', before: '비가 ', after: ' 집에 있어요.', choices: ['와서', '와요'], answer: 0, translation: 'Il pleut, donc je reste à la maison.' },
    { type: 'mcq', prompt: '[[주말에 뭐 할 거예요?]]', choices: ['Que vas-tu faire ce week-end ?', 'Qu’as-tu fait ce week-end ?', 'On fait quoi ce week-end ?'], answer: 0 },
    { type: 'listen', audio: '배가 고파요', choices: ['배가 고파요', '배가 아파요', '바빠요'], answer: 0 },
  ],
};

const day33: Lesson = {
  id: 'm2-w3-d3',
  month: 2,
  week: 3,
  day: 33,
  title: 'Oui ! ou… désolé : accepter, refuser',
  summary: '좋아요 ! pour accepter, 미안해요, 피곤해서 못 해요 pour refuser gentiment, et la différence entre 안 et 못.',
  cards: [
    { id: 'm3-ko-joayo-gachi', kind: 'phrase', ko: '좋아요! 같이 해요.', fr: 'D’accord, super ! Faisons-le ensemble.', note: '👍 Pour accepter une proposition en [[까요?|p:suggest]]' },
    { id: 'm3-ko-mianhaeyo', kind: 'phrase', ko: '미안해요', fr: 'Désolé(e), pardon (poli)', note: '🙏 Infinitif : [[미안하다|p:hada]]. Pour refuser : [[미안해요, 바빠서 못 해요.]]' },
    { id: 'm3-ko-mianhajiman', kind: 'phrase', ko: '미안하지만…', fr: 'Je suis désolé(e), mais…', note: '🙏 [[미안하지만 오늘은 바빠요.|t:désolé, mais aujourd’hui je suis occupé]]' },
    { id: 'm3-ko-pigonhaeyo', kind: 'phrase', ko: '피곤해요', fr: 'je suis fatigué(e) (poli)', note: '😩 Infinitif : [[피곤하다|p:hada]]. Cause : [[피곤해서]].' },
    { id: 'm3-ko-an', kind: 'grammar', ko: '안 가요', fr: 'je ne vais pas (je ne veux pas, je ne le fais pas) — 안 + verbe', note: '🙅 [[안|p:neg]] = choix. Avec un adjectif aussi : [[안 바빠요|t:je ne suis pas occupé]].' },
    { id: 'm3-ko-an-mot', kind: 'grammar', ko: '안 먹어요 · 못 먹어요', fr: 'je ne mange pas (choix) · je ne peux pas manger (impossible)', note: '🙅 [[안|p:neg]] = je ne veux pas · 🚫 [[못|p:neg]] = je ne peux pas. Avec 하다 : [[운동 못 해요]].' },
    { id: 'm3-ko-daeume', kind: 'phrase', ko: '다음에 같이 해요.', fr: 'Faisons-le ensemble une prochaine fois.', note: '😊 Pour adoucir un refus. [[다음|t:prochain]] + [[에|p:time]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Dire oui : 좋아요 !' },
        { type: 'text', text: 'Tu connais [[좋아요]] (« c’est bien »). Après une proposition, il veut dire « **D’accord, super !** ». On ajoute souvent [[같이 해요]] ou on reprend le verbe :' },
        { type: 'dialog', lines: [
          { who: 'Louis', ko: '같이 축구할까요?' },
          { who: 'Marie', ko: '좋아요! 같이 해요.' },
          { who: 'Louis', ko: '같이 책을 읽을까요?' },
          { who: 'Marie', ko: '좋아요! 같이 읽어요.' },
        ] },
        { type: 'tip', text: 'Le présent poli, avec [[같이]], c’est un « **faisons** » tout doux : [[같이 해요]] = « faisons-le ensemble ».', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[같이 그림을 그릴까요?]] — Tu acceptes :', choices: ['좋아요! 같이 그려요.', '좋아요! 같이 그렸어요.', '미안해요.'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Dire non… gentiment 🙏' },
        { type: 'text', text: 'En Corée, on ne dit pas un « non » sec. Un refus poli a **trois étapes** :' },
        { type: 'table', head: ['Étape', 'Exemple'], rows: [
          ['1. S’excuser', '[[미안해요|t:désolé(e)]] · [[미안하지만…|t:désolé(e), mais…]]'],
          ['2. Donner une raison (**-서**)', '[[피곤해서|t:je suis fatigué(e), donc]] · [[바빠서]] · [[아파서]]'],
          ['3. « Je ne **peux** pas »', '[[못 해요]] · [[못 가요]]'],
        ] },
        { type: 'text', text: 'Nouveau mot : [[피곤해요|t:je suis fatigué(e)]] ([[피곤하다|p:hada]] → [[피곤해서]]).' },
        { type: 'breakdown', segments: [
          { ko: '미안해요,', role: 'other', gloss: 'désolé' },
          { ko: '피곤해서', role: 'verb', gloss: 'fatigué, donc' },
          { ko: '못', role: 'adverb', gloss: 'ne peux pas' },
          { ko: '해요', role: 'verb', gloss: 'faire' },
        ], translation: 'Désolé, je suis fatigué, donc je ne peux pas.' },
        { type: 'liaison', items: [
          { written: '못 해요', spoken: '모태요', fr: 'ㅅ (son t) + ㅎ → ㅌ' },
        ] },
        { type: 'tip', text: 'Bonus : [[다음에 같이 해요.|t:faisons-le une prochaine fois]] Ton ami sera ravi !', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'order', translation: 'Désolé(e), je suis fatigué(e), donc je ne peux pas.', tiles: ['미안해요,', '피곤해서', '못', '해요'], distractors: ['피곤해요', '좋아요!'] } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🙏 Refuse : « Désolé(e), je suis occupé(e), donc je ne peux pas. »', answer: alts('미안해요, 바빠서 못 해요') } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: '안 ou 못 ? 🙅 / 🚫' },
        { type: 'text', text: 'Le cousin promis de [[못|p:neg]] : [[안|p:neg]]. Les deux se placent **devant le verbe**, mais ils ne disent pas la même chose :' },
        { type: 'table', head: ['', 'Sens', 'Exemple'], rows: [
          ['🙅 [[안]]', 'je **ne veux pas** / je ne le fais pas (choix)', '[[고기를 안 먹어요.|t:je ne mange pas de viande]]'],
          ['🚫 [[못]]', 'je **ne peux pas** (impossible)', '[[배가 아파서 못 먹어요.|t:j’ai mal au ventre, je ne peux pas manger]]'],
        ] },
        { type: 'text', text: 'Avec un verbe en [[하다|p:hada]] comme [[공부하다]] ou [[운동하다]], [[안]] / [[못]] se glissent **juste avant** [[해요]] : [[운동 안 해요]] · [[공부 못 해요]].' },
        { type: 'tip', text: 'Attention, piège social ! Si un ami propose [[같이 축구할까요?]] et que tu réponds [[안 해요]], ça veut dire « je **ne veux pas** » 😬. Avec [[못 해요]], ce n’est pas ta faute : c’est **impossible**. Plus gentil !', mood: 'thinking' },
        { type: 'text', text: 'Avec un **adjectif**, seulement [[안]] : [[바빠요?]] — [[아니요, 안 바빠요.|t:non, je ne suis pas occupé(e)]]' },
      ],
    },
    { kind: 'practice', exercise: { type: 'sort', prompt: '🙅 je ne veux pas, ou 🚫 je ne peux pas ?', buckets: ['🙅 안', '🚫 못'], items: [
      { text: '😒 고기를 싫어해요 → 고기를 _ 먹어요', bucket: 0 },
      { text: '😴 주말에는 공부 _ 해요 (repos !)', bucket: 0 },
      { text: '🙂 오늘은 _ 바빠요', bucket: 0 },
      { text: '🤕 배가 아파서 _ 먹어요', bucket: 1 },
      { text: '☔ 비가 와서 공원에 _ 가요', bucket: 1 },
      { text: '😩 피곤해서 운동 _ 해요', bucket: 1 },
    ], explain: 'Un **choix** → 🙅 [[안]]. Une **raison** qui rend la chose impossible → 🚫 [[못]]. Et un adjectif ([[바빠요]]) → toujours [[안]].' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '아파서 학교에 ', after: ' 가요.', choices: ['못', '안'], answer: 0, translation: 'Je suis malade, donc je ne peux pas aller à l’école.' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '우유를 싫어해요. 그래서 우유를 ', after: ' 마셔요.', choices: ['안', '못'], answer: 0, translation: 'Je n’aime pas le lait. Donc je n’en bois pas.', explain: 'Ce n’est pas impossible, c’est un **choix** 🙅 → [[안]].' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[같이 축구할까요?]] — Le refus le plus **gentil** :', choices: ['미안해요, 피곤해서 못 해요.', '안 해요.', '축구를 싫어해요.'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La scène de théâtre 🎭' },
        { type: 'text', text: 'Activité de la classe : le professeur et un élève jouent la scène devant tous. **Sans traduction** — [[들으세요!]]' },
        { type: 'dialog', lines: [
          { who: 'Louis', ko: '마리, 같이 축구할까요?' },
          { who: 'Marie', ko: '미안해요, 피곤해서 못 해요.' },
          { who: 'Louis', ko: '그럼 내일은요?', fr: 'Alors, et demain ?' },
          { who: 'Marie', ko: '미안하지만 내일은 바빠요. 다음에 같이 해요!' },
          { who: 'Louis', ko: '좋아요!' },
        ] },
        { type: 'tip', text: '[[그럼|t:alors]] : un petit mot bien pratique pour rebondir. Et [[내일은요?]] = « et demain ? », comme [[마리는요?]].', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi Marie ne joue-t-elle pas au foot aujourd’hui ?', choices: ['😩 Elle est fatiguée.', '🤕 Elle a mal au ventre.', '☔ Il pleut.'], answer: 0, explain: '[[피곤해서 못 해요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[마리는 내일 바빠요?]]', choices: ['네, 바빠요.', '아니요, 안 바빠요.'], answer: 0, explain: '[[미안하지만 내일은 바빠요.]]' } },
    { kind: 'practice', exercise: { type: 'write', prompt: '🎭 [[같이 영화를 볼까요?]] — Refuse **gentiment**, avec une raison. [[쓰세요!]]', placeholder: '미안해요, 아파서 못 봐요', mustInclude: ['미안', CAUSE_ANY, '못'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '같이 축구할까요? 미안해요, 피곤해서 못 해요. 다음에 같이 해요!', fr: 'On joue au foot ? Désolé(e), je suis fatigué(e), je ne peux pas. Une prochaine fois !', prompt: 'Joue les deux rôles, comme au théâtre 🎭' } },
  ],
  interleave: [
    { type: 'type', prompt: 'Propose avec [[먹다]] : « On mange ? »', answer: '먹을까요' },
    { type: 'mcq', prompt: '[[같이]] se prononce…', choices: ['가치', '가티', '갈이'], answer: 0 },
    { type: 'cloze', before: '배가 ', after: ' 밥을 먹어요.', choices: ['고파서', '아파서'], answer: 0, translation: 'J’ai faim, donc je mange.' },
    { type: 'type', prompt: '⬅️ [[어제]] : « [[친구를 만나요.]] » →', answer: '어제 친구를 만났어요' },
  ],
};

const day34: Lesson = {
  id: 'm2-w3-d4',
  month: 2,
  week: 3,
  day: 34,
  title: 'Première dictée de phrases complexes',
  summary: 'La météo (날씨가 좋아요, 더워요), le parapluie, les liaisons à repérer, une dictée trouée et un petit conte.',
  cards: [
    { id: 'm3-ko-nalssi', kind: 'vocab', ko: '날씨', fr: 'le temps (météo)', note: '🌤️ [[날씨가 좋아요|t:il fait beau]] · [[날씨가 나빠요|t:il fait mauvais]]' },
    { id: 'm3-ko-deowoyo', kind: 'phrase', ko: '더워요', fr: 'il fait chaud ; j’ai chaud (poli)', note: '🥵 Infinitif : [[덥다]] (irrégulier : retiens [[더워요]] tel quel). Cause : [[더워서]].' },
    { id: 'm3-ko-usan', kind: 'vocab', ko: '우산', fr: 'parapluie', note: '☂️ [[우산을 써요|t:j’utilise un parapluie]] ([[쓰다]] : écrire… et ouvrir un parapluie !)' },
    { id: 'm3-ko-geureonikka', kind: 'phrase', ko: '그러니까', fr: 'alors, donc (devant une proposition)', note: '💡 [[날씨가 좋아요. 그러니까 같이 공원에 갈까요?]] — avec [[까요?|p:suggest]], pas de -서 !' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Quel temps fait-il ? 🌤️' },
        { type: 'text', text: 'Avant la dictée, trois mots pour parler de la **météo** :' },
        { type: 'letters', items: [
          { char: '날씨가 좋아요', mnemonic: '☀️ il fait beau' },
          { char: '더워요', mnemonic: '🥵 il fait chaud' },
          { char: '비가 와요', mnemonic: '☔ il pleut' },
          { char: '우산', mnemonic: '☂️ parapluie' },
        ] },
        { type: 'text', text: '[[날씨|t:le temps qu’il fait]] prend [[가|p:subject]] : [[날씨가 좋아요]]. [[덥다]] est irrégulier : retiens [[더워요]], et donc [[더워서]].' },
        { type: 'text', text: 'Et le parapluie ? On l’« écrit » 😄 : [[쓰다]] veut dire **écrire**, mais aussi **utiliser un parapluie** (ou porter un chapeau). [[쓰]] + 어요 → [[써요]] (le [[ㅡ]] s’efface).' },
        { type: 'table', head: ['🟥 Cause', '🟦 Effet'], rows: [
          ['[[비가 와서]]', '[[우산을 써요.]] ☂️'],
          ['[[더워서]]', '[[물을 마셔요.]] 💧'],
          ['[[날씨가 좋아서]]', '[[공원에서 운동해요.]] 🏃'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie la cause et l’effet.', pairs: [['비가 와서', '우산을 써요'], ['더워서', '물을 마셔요'], ['날씨가 좋아서', '공원에서 운동해요'], ['배가 고파서', '밥을 먹어요']] } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[쓰다]] (utiliser un parapluie) → présent poli :', answer: '써요' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Proposer avec une raison : attention ! ⚠️' },
        { type: 'text', text: 'Pour **proposer** quelque chose à cause d’une raison, les Coréens **n’utilisent pas -서**. On coupe en deux phrases, ou on relie avec [[그러니까|t:alors, donc]] — le cousin de [[그래서]] que tu attendais :' },
        { type: 'table', head: ['', ''], rows: [
          ['❌', '날씨가 좋아서 같이 공원에 갈까요?'],
          ['✅', '[[날씨가 좋아요. 같이 공원에 갈까요?]]'],
          ['✅', '[[날씨가 좋아요. 그러니까 같이 공원에 갈까요?]]'],
        ] },
        { type: 'tip', text: 'La règle de Nabi : **-서** pour raconter ([[비가 와서 집에 있어요]]), [[그러니까]] pour proposer ([[까요?|p:suggest]], [[ㅂ시다|p:suggest]]).', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quelle phrase est **correcte** ?', choices: ['비가 와요. 그러니까 집에서 영화를 볼까요?', '비가 와서 집에서 영화를 볼까요?'], answer: 0, explain: 'Une **proposition** ([[볼까요?]]) : pas de -서, mais [[그러니까]].' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '배가 고파요. ', after: ' 같이 밥 먹을까요?', choices: ['그러니까', '그리고'], answer: 0, translation: 'J’ai faim. Alors, on mange ensemble ?' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Repérer les liaisons 🔍' },
        { type: 'text', text: 'Activité de la classe : avant une dictée, on repère ce qui s’**entend** différemment de ce qui s’**écrit**. C’est là que se cachent les fautes !' },
        { type: 'liaison', items: [
          { written: '좋아서', spoken: '조아서', fr: 'le ㅎ ne se prononce pas' },
          { written: '같이', spoken: '가치', fr: 'ㅌ + 이 → 치' },
          { written: '우산을', spoken: '우사늘', fr: 'liaison' },
          { written: '못 먹어요', spoken: '몬 머거요', fr: 'ㅅ → ㄴ devant ㅁ' },
          { written: '공원에', spoken: '공워네', fr: 'liaison' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'listen', audio: '날씨가 좋아서', choices: ['날씨가 좋아서', '날씨가 좋아요', '날씨가 나빠서'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Dictée trouée ✍️' },
        { type: 'text', text: '[[들으세요!]] La phrase entière est lue, mais tu n’écris que le **morceau manquant**. Les images t’aident !' },
      ],
    },
    { kind: 'practice', exercise: { type: 'type', prompt: '☀️ [[날씨가]] ____ [[같이 공원에 갈까요?]]', audio: '날씨가 좋아요. 같이 공원에 갈까요?', answer: '좋아요' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '☔ [[비가]] ____ [[우산을 써요.]]', audio: '비가 와서 우산을 써요', answer: '와서' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🤕 [[배가 아파서]] ____ [[먹어요.]]', audio: '배가 아파서 못 먹어요', answer: '못' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🎨 [[같이 그림을]] ____?', audio: '같이 그림을 그릴까요?', answer: '그릴까요' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La dictée complète 📝' },
        { type: 'text', text: 'Maintenant, **toute** la phrase. Réécoute autant que tu veux. Pense aux liaisons !' },
      ],
    },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Dictée 1/3', audio: '날씨가 좋아요. 같이 공원에 갈까요?', answer: alts('날씨가 좋아요. 같이 공원에 갈까요') } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Dictée 2/3', audio: '더워서 물을 마셔요', answer: '더워서 물을 마셔요' } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Dictée 3/3', audio: '피곤해서 못 가요', answer: '피곤해서 못 가요' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le petit conte de Nabi 📖' },
        { type: 'text', text: 'Un extrait de conte, **entièrement en coréen**. Tu connais tous les mots ! Touche une phrase pour l’entendre.' },
        { type: 'text', text: '[[토요일이에요. 날씨가 좋아요.]] ☀️' },
        { type: 'text', text: '[[나비는 친구를 만났어요.]] [[“같이 공원에 갈까요?”]] [[“좋아요! 갑시다!”]]' },
        { type: 'text', text: '[[공원에서 같이 달렸어요.]] 🏃 [[그리고 비가 왔어요!]] ☔' },
        { type: 'text', text: '[[우산이 없어서 집에 갔어요.]] [[나비는 피곤해서 아홉 시에 잤어요.]] 😴' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[나비는 공원에서 뭐 했어요?]]', choices: ['달렸어요', '그림을 그렸어요', '책을 읽었어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi Nabi est-il rentré à la maison ?', choices: ['☂️ Pas de parapluie (et il pleuvait).', '🤕 Mal au ventre.', '🏃 Trop occupé.'], answer: 0, explain: '[[우산이 없어서 집에 갔어요.]]' } },
    { kind: 'practice', exercise: { type: 'read', ko: '우산이 없어서 집에 갔어요. 나비는 피곤해서 아홉 시에 잤어요.', fr: 'Comme il n’avait pas de parapluie, Nabi est rentré. Fatigué, il s’est couché à 9 h.', prompt: 'Lis la fin du conte à voix haute, doucement… 😴' } },
  ],
  interleave: [
    { type: 'cloze', before: '아파서 학교에 ', after: ' 가요.', choices: ['못', '안'], answer: 0, translation: 'Je suis malade, donc je ne peux pas aller à l’école.' },
    { type: 'mcq', prompt: '📣 « Allons-y ! »', choices: ['갑시다!', '갈까요?', '갔어요!'], answer: 0 },
    { type: 'mcq', prompt: '[[미안해요]] veut dire…', choices: ['Désolé(e)', 'Merci', 'D’accord'], answer: 0 },
    { type: 'clock', prompt: '[[몇 시에 만날까요?]] — [[네 시 반에 만나요.]]', h: 4, m: 30 },
  ],
};

const DICTATION = ['비가 와서 공원에 못 가요', '배가 아파서 못 먹어요', '바빠서 친구를 못 만나요'];

const DIALOGS: [string, string, 0 | 1, string, string][] = [
  ['A : 같이 공원에 ', '? — B : 좋아요!', 0, 'A : On va au parc ensemble ? — B : D’accord !', 'Une **proposition** à quelqu’un → [[갈까요?]]'],
  ['A : 주말에 뭐 할 거예요? — B : 공원에 ', '.', 1, 'A : Que vas-tu faire ce week-end ? — B : Je vais aller au parc.', 'B raconte **son projet** → [[갈 거예요]].'],
  ['A : 내일 도서관에 ', '? — B : 미안해요, 바빠서 못 가요.', 0, 'A : On va à la bibliothèque demain ? — B : Désolé, je suis occupé, je ne peux pas.', 'B refuse : c’était donc une **proposition** → [[갈까요?]]'],
];

const day35: Lesson = {
  id: 'm2-w3-d5',
  month: 2,
  week: 3,
  day: 35,
  title: 'Bilan de la semaine & évaluation n°7',
  summary: 'Le quiz de la semaine, ta mini-BD à 2 cases, une dictée et la petite évaluation n°7.',
  cards: [],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ta semaine en un coup d’œil' },
        { type: 'table', head: ['Tu sais…', 'Exemple'], rows: [
          ['dire **pourquoi** ([[cause|p:cause]])', '[[아파서]] · [[바빠서]] · [[비가 와서]] · [[피곤해서]]'],
          ['**proposer** ([[까요?|p:suggest]])', '[[같이 축구할까요?]] · [[같이 밥 먹을까요?]]'],
          ['lancer le groupe', '[[갑시다!]] · [[먹읍시다!]]'],
          ['accepter / refuser', '[[좋아요! 같이 해요.]] · [[미안해요, 피곤해서 못 해요.]]'],
          ['**ne pas** ([[안|p:neg]]) / **ne pas pouvoir** ([[못|p:neg]])', '🙅 [[안 먹어요]] · 🚫 [[못 먹어요]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '⚡ Quiz — [[피곤해요]] → cause :', choices: ['피곤해서', '피곤했어서', '피곤하서'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '⚡ Quiz — Proposition avec [[읽다]] :', choices: ['읽을까요?', '읽ㄹ까요?', '읽읍시까요?'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '⚡ Quiz', before: '고기를 싫어해요. 그래서 고기를 ', after: ' 먹어요.', choices: ['안', '못'], answer: 0, translation: 'Je n’aime pas la viande. Donc je n’en mange pas.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ta mini-BD à 2 cases 🗯️' },
        { type: 'text', text: 'Activité de la semaine : une BD en **deux cases**. Case 1 : une **proposition**. Case 2 : une **réponse** avec une **raison**. Voici celle de Louis :' },
        { type: 'table', head: ['🖼️ Case 1', '🖼️ Case 2'], rows: [
          ['👦 [[같이 그림을 그릴까요?]] 🎨', '👧 [[미안해요, 바빠서 못 해요.]] 🏃'],
        ] },
        { type: 'text', text: 'À toi de dessiner… avec des mots ! [[쓰세요!]] ✍️' },
      ],
    },
    { kind: 'practice', exercise: { type: 'write', prompt: '🖼️ **Case 1** — La proposition (avec [[같이]] + [[까요?]]) :', placeholder: '같이 달릴까요?', mustInclude: ['같이', '까요'] } },
    { kind: 'practice', exercise: { type: 'write', prompt: '🖼️ **Case 2** — La réponse, avec une raison en **-서** (oui ou non, à toi de voir !) :', placeholder: '미안해요, 아파서 못 해요', mustInclude: [CAUSE_ANY] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La dictée ✍️' },
        { type: 'text', text: '[[들으세요!]] Puis [[쓰세요!]] Trois phrases avec une **cause** et [[못]]. Pense à [[몬 머거요]] !' },
      ],
    },
    ...DICTATION.map((s, i) => ({
      kind: 'practice' as const,
      exercise: { type: 'type' as const, prompt: `Dictée ${i + 1}/${DICTATION.length}`, audio: s, answer: s },
    })),
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Évaluation n°7' },
        { type: 'text', text: 'Trois parties, toujours sans chrono ni piège. Chaque erreur reviendra simplement en révision.' },
        { type: 'table', head: ['Partie', 'Contenu'], rows: [
          ['A', 'Assemblage : relier la cause à la conséquence'],
          ['B', 'Dialogues : [[갈까요?]] ou [[갈 거예요]] ?'],
          ['C', 'À l’oral : inviter un camarade'],
        ] },
        { type: 'tip', text: '**A — Assemblage.** Relie chaque cause 🟥 à sa conséquence 🟦.', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: '**A · 1/2** — Relie la cause à la conséquence.', pairs: [['비가 와서', '우산을 써요'], ['배가 고파서', '밥을 먹어요'], ['더워서', '물을 마셔요'], ['피곤해서', '열 시에 자요']] } },
    { kind: 'practice', exercise: { type: 'order', prompt: '**A · 2/2**', translation: 'Je suis malade, donc je ne peux pas aller à l’école.', tiles: ['아파서', '학교에', '못', '가요'], distractors: ['아파요', '안'] } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**B — Dialogues.** Une **proposition** à quelqu’un ([[까요?|p:suggest]]) ou un **projet** que l’on raconte ([[거예요|p:future]]) ?', mood: 'encourage' }] },
    ...DIALOGS.map(([before, after, answer, translation, explain], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'cloze' as const, prompt: `**B · ${i + 1}/${DIALOGS.length + 1}**`, before, after, choices: KKAYO_GEOYEYO, answer, translation, explain },
    })),
    { kind: 'practice', exercise: { type: 'type', prompt: `**B · ${DIALOGS.length + 1}/${DIALOGS.length + 1}** — A : [[같이 책을]] 📖 ____? — B : [[좋아요! 같이 읽어요.]]`, answer: ['읽을까요', '같이 책을 읽을까요'] } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**C — À l’oral.** C’est la pause ! Va voir un camarade et propose-lui de **dessiner** avec toi. Dis-le à voix haute, puis écoute le modèle.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'read', ko: '같이 그림 그릴까요?', fr: 'On dessine ensemble ?', prompt: '**C** — 🎨 Invite ton camarade, avec le sourire !' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La BD de Nabi 📖' },
        { type: 'text', text: 'Une histoire en cases, **entièrement en coréen**. Touche une bulle pour l’entendre.' },
        { type: 'dialog', lines: [
          { who: '🖼️ 1 · 루이', ko: '나비, 같이 축구할까요?' },
          { who: '🖼️ 1 · 나비', ko: '미안해요, 배가 아파서 못 해요.' },
          { who: '🖼️ 2 · 루이', ko: '그럼 같이 책을 읽을까요?' },
          { who: '🖼️ 2 · 나비', ko: '좋아요! 같이 읽어요.' },
          { who: '🖼️ 3 · 루이', ko: '배가 고파요. 같이 밥 먹을까요?' },
          { who: '🖼️ 3 · 나비', ko: '배가 아파서… 우유를 마실 거예요. 🥛' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[나비는 왜 축구를 못 해요?]]', choices: ['배가 아파서', '피곤해서', '바빠서'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que vont faire Louis et Nabi ensemble ?', choices: ['📖 lire', '⚽ jouer au foot', '🎨 dessiner'], answer: 0, explain: '[[같이 책을 읽을까요?]] — [[좋아요! 같이 읽어요.]]' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Bravo, semaine 7 terminée ! 🎉' },
        { type: 'text', text: 'Tu sais maintenant **expliquer** pourquoi tu fais (ou ne peux pas faire) quelque chose, **proposer** une activité, et **répondre** poliment. La cour de récréation t’appartient !' },
        { type: 'tip', text: '[[같이 공부할까요?]] [[좋아요!]] ✨', mood: 'happy' },
      ],
    },
  ],
};

export const m2w3: Lesson[] = [day31, day32, day33, day34, day35];
