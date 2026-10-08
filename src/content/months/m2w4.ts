import type { GridBlank, Lesson } from '../types';

const COLLAPSE: [RegExp, string][] = [
  [/ 수 /g, '수'],
  [/ 주세요/g, '주세요'],
  [/안 돼요/g, '안돼요'],
  [/ 거예요/g, '거예요'],
  [/(못|안) 해요/g, '$1해요'],
];
const alts = (...xs: string[]): string[] => {
  const out = new Set(xs);
  for (const [re, to] of COLLAPSE) for (const s of [...out]) out.add(s.replace(re, to));
  for (const s of [...out]) out.add(s.replace(/[.,!?] /g, ' '));
  return [...out];
};
const blank = (s: string): GridBlank => ({ answer: alts(s) });

const ABILITY_ANY = '수 있|수있|수 없|수없';
const RULE_ANY = '안 돼요|안돼요|도 돼요|도돼요';
const REQUEST_ANY = '주세요';

const THREE_FORMS = ['할 수 있어요', '하면 안 돼요', '해서'];

const day36: Lesson = {
  id: 'm2-w4-d1',
  month: 2,
  week: 4,
  day: 36,
  title: 'Je peux ! -(으)ㄹ 수 있어요',
  summary: 'Dire ce que tu sais faire (한국어를 할 수 있어요), ce que tu ne peux pas faire, et demander : 질문할 수 있어요?',
  cards: [
    { id: 'm3-ko-seonsaengnim', kind: 'vocab', ko: '선생님', fr: 'professeur ; Monsieur / Madame (au professeur)', note: '👩‍🏫 En Corée, on appelle le professeur [[선생님]], jamais par son nom seul.' },
    { id: 'm3-ko-su-isseoyo', kind: 'grammar', ko: '갈 수 있어요 · 먹을 수 있어요', fr: 'je peux y aller · je peux manger — comme le futur, avec 수 있어요', note: '🟢 voyelle → [[ㄹ 수 있어요]] · 🟤 consonne → [[을 수 있어요]] · ⭐ [[할 수 있어요]]. Règle : [[pouvoir|p:ability]]' },
    { id: 'm3-ko-su-eopseoyo', kind: 'grammar', ko: '할 수 없어요', fr: 'je ne peux pas (le faire) — ≈ 못 해요', note: '🚫 [[있어요]] → [[없어요]]. [[비가 와서 축구를 할 수 없어요.]]' },
    { id: 'm3-ko-hangugeo-hal-su', kind: 'phrase', ko: '한국어를 할 수 있어요', fr: 'Je sais parler coréen.', note: '🇰🇷 [[하다]] : « faire »… et « parler » une langue !' },
    { id: 'm3-ko-jogeum', kind: 'vocab', ko: '조금', fr: 'un peu', note: '🤏 [[한국어를 조금 할 수 있어요.|t:je parle un peu coréen]]' },
    { id: 'm3-ko-malhaeyo', kind: 'phrase', ko: '말해요', fr: 'je parle, je dis (poli)', note: '🗣️ Infinitif : [[말하다|p:hada]] ([[말|t:parole]] + [[하다]]).' },
    { id: 'm3-ko-jilmunhaeyo', kind: 'phrase', ko: '질문해요', fr: 'je pose une question (poli)', note: '🙋 Infinitif : [[질문하다|p:hada]] ([[질문|t:question]] + [[하다]]).' },
    { id: 'm3-ko-jilmunhal-su', kind: 'phrase', ko: '선생님, 질문할 수 있어요?', fr: 'Monsieur / Madame, je peux poser une question ?', note: '🙋 Une question en [[수 있어요?|p:ability]] = « est-ce possible ? »' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ce que je sais faire 💪' },
        { type: 'tip', text: 'Cette semaine, on apprend les **règles de la classe** : ce qu’on **peut** faire, ce qu’on ne **doit pas** faire, et comment demander de l’aide. Premier mot : [[선생님|t:professeur]] !', mood: 'happy' },
        { type: 'text', text: 'En Corée, on ne dit pas le nom du professeur : on l’appelle [[선생님]]. C’est aussi « Monsieur » ou « Madame » quand on lui parle : [[선생님, 안녕하세요!]]' },
        { type: 'text', text: 'Pour dire « je **peux** / je **sais** faire », on prend le [[futur|p:future]]… et on remplace [[거예요]] par **수 있어요** :' },
        { type: 'table', head: ['Le radical finit par…', 'Futur', 'Je peux…'], rows: [
          ['🟢 une voyelle', '[[갈 거예요]]', '[[갈 수 있어요]]'],
          ['🟤 une consonne', '[[읽을 거예요]]', '[[읽을 수 있어요]]'],
          ['⭐ [[하다]]', '[[할 거예요]]', '[[할 수 있어요]]'],
        ] },
        { type: 'breakdown', segments: [
          { ko: '한국어', role: 'object', gloss: 'coréen', particle: { ko: '를', key: 'object' } },
          { ko: '할 수 있어요', role: 'verb', gloss: 'je peux faire (parler)' },
        ], translation: 'Je sais parler coréen.', note: 'Avec une langue, [[하다]] veut dire « parler ». [[수|t:possibilité]] : « il y a la possibilité de… »' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '« Je peux manger » ([[먹다]]) :', choices: ['먹을 수 있어요', '먹ㄹ 수 있어요', '먹을 거예요'], answer: 0, explain: 'Consonne → 🟤 [[을 수 있어요]], comme [[먹을 거예요]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[가다]] → « je peux y aller » :', answer: alts('갈 수 있어요') } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[읽다]] → « je peux lire » :', answer: alts('읽을 수 있어요') } },
    { kind: 'practice', exercise: { type: 'listen', audio: '한국어를 할 수 있어요', choices: ['한국어를 할 수 있어요', '한국어를 할 거예요', '한국어를 공부했어요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Je ne peux pas : 수 없어요 🚫' },
        { type: 'text', text: 'Facile : [[있어요]] → [[없어요]]. Ça veut dire la même chose que [[못|p:neg]] + verbe :' },
        { type: 'table', head: ['', 'Je ne peux pas…'], rows: [
          ['[[못 가요]]', '[[갈 수 없어요]]'],
          ['[[못 먹어요]]', '[[먹을 수 없어요]]'],
          ['[[못 해요]]', '[[할 수 없어요]]'],
        ] },
        { type: 'text', text: 'Avec une cause en **-서** : [[비가 와서 축구를 할 수 없어요.|t:il pleut, donc on ne peut pas jouer au foot]]' },
        { type: 'tip', text: 'À l’oral, [[못]] est plus court. À l’écrit, et pour bien insister, on aime [[수 없어요]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie les phrases qui veulent dire la même chose.', pairs: [['못 가요', '갈 수 없어요'], ['못 먹어요', '먹을 수 없어요'], ['못 해요', '할 수 없어요'], ['못 만나요', '만날 수 없어요']] } },
    { kind: 'practice', exercise: { type: 'order', translation: 'J’ai mal au ventre, donc je ne peux pas manger.', tiles: ['배가', '아파서', '먹을', '수', '없어요'], distractors: ['있어요', '먹ㄹ'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ma fiche d’auto-évaluation ✅' },
        { type: 'text', text: 'Activité de la classe : chaque élève coche ce qu’il **sait faire**. Deux nouveaux mots : [[조금|t:un peu]] et [[말하다|t:parler, dire]].' },
        { type: 'table', head: ['', 'Je sais…'], rows: [
          ['✅ 📖', '[[한글을 읽을 수 있어요.|t:je sais lire le hangul]]'],
          ['✅ ✍️', '[[한글을 쓸 수 있어요.|t:je sais écrire le hangul]]'],
          ['✅ 📅', '[[오늘은 몇 월 며칠이에요?]] → [[말할 수 있어요.|t:je sais le dire]]'],
          ['✅ 💧', '[[물 주세요!]] → [[말할 수 있어요.]]'],
          ['✅ 🇰🇷', '[[한국어를 조금 할 수 있어요.|t:je parle un peu coréen]]'],
        ] },
        { type: 'text', text: '[[쓰다]] : [[쓰]] finit par une voyelle → [[쓸 수 있어요]]. Et [[말하다]] est un verbe en [[하다|p:hada]] : [[말해요]], [[말할 수 있어요]].' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[한글을 쓸 수 있어요.]] veut dire…', choices: ['Je sais écrire le hangul.', 'J’écrirai en hangul.', 'J’ai écrit en hangul.'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🤏 « Je parle **un peu** coréen » :', answer: alts('한국어를 조금 할 수 있어요', '조금 한국어를 할 수 있어요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Coche ta fiche : écris **une chose que tu sais faire** en coréen. [[쓰세요!]]', placeholder: '한글을 읽을 수 있어요', mustInclude: [ABILITY_ANY] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Lever la main 🙋' },
        { type: 'text', text: 'En classe, pour poser une question : [[질문|t:question]] + [[하다]] → [[질문하다|t:poser une question]]. En question, [[수 있어요?|p:ability]] veut dire « **est-ce que je peux… ?** » :' },
        { type: 'dialog', lines: [
          { who: 'Louis', ko: '선생님, 질문할 수 있어요?' },
          { who: '선생님', ko: '네, 질문하세요.' },
        ] },
        { type: 'tip', text: '[[질문하세요]] : tu reconnais la consigne en [[-세요|p:seyo]] ! Demain, tu verras une autre façon, encore plus naturelle, de demander la permission.', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'order', translation: 'Monsieur / Madame, je peux poser une question ?', tiles: ['선생님,', '질문할', '수', '있어요?'], distractors: ['질문해요', '없어요?'] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '선생님, 질문할 수 있어요?', choices: ['선생님, 질문할 수 있어요?', '선생님, 질문했어요?', '선생님, 질문할 거예요?'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'read', ko: '선생님, 질문할 수 있어요?', fr: 'Monsieur / Madame, je peux poser une question ?', prompt: 'Lève la main 🙋 et demande à voix haute !' } },
  ],
  interleave: [
    { type: 'cloze', before: '비가 ', after: ' 공원에 못 가요.', choices: ['와서', '와요'], answer: 0, translation: 'Il pleut, donc je ne peux pas aller au parc.' },
    { type: 'type', prompt: 'Propose avec [[읽다]] : « On lit ? »', answer: '읽을까요' },
    { type: 'cloze', before: '고기를 싫어해요. 그래서 고기를 ', after: ' 먹어요.', choices: ['안', '못'], answer: 0, translation: 'Je n’aime pas la viande. Donc je n’en mange pas.' },
    { type: 'mcq', prompt: '[[날씨가 좋아요]] veut dire…', choices: ['Il fait beau.', 'Il pleut.', 'Il fait chaud.'], answer: 0 },
  ],
};

const day37: Lesson = {
  id: 'm2-w4-d2',
  month: 2,
  week: 4,
  day: 37,
  title: 'Interdit ! -(으)면 안 돼요',
  summary: 'Les panneaux de la classe (뛰면 안 돼요, 자면 안 돼요, 떠들면 안 돼요) et demander la permission : 질문해도 돼요?',
  cards: [
    { id: 'm3-ko-gyosil', kind: 'vocab', ko: '교실', fr: 'salle de classe', note: '🏫 [[교실에서 공부해요.]]' },
    { id: 'm3-ko-ttwieoyo', kind: 'phrase', ko: '뛰어요', fr: 'je cours, je saute (poli)', note: '🏃 Infinitif : [[뛰다]]. Courir en bondissant (dans le couloir…). [[달리다]] : courir, faire la course.' },
    { id: 'm3-ko-tteodeureoyo', kind: 'phrase', ko: '떠들어요', fr: 'je bavarde, je fais du bruit (poli)', note: '🗣️ Infinitif : [[떠들다]].' },
    { id: 'm3-ko-myeon-an-dwaeyo', kind: 'grammar', ko: '뛰면 안 돼요 · 먹으면 안 돼요', fr: 'il ne faut pas courir · il ne faut pas manger — -(으)면 안 돼요', note: '🚫 Voyelle ou ㄹ → [[면]] ([[자면]], [[떠들면]]) · consonne → [[으면]] ([[먹으면]]). Règle : [[interdit|p:rules]]' },
    { id: 'm3-ko-gyosil-ttwimyeon', kind: 'phrase', ko: '교실에서 뛰면 안 돼요', fr: 'Il ne faut pas courir dans la classe.', note: '🚫🏃 Mot à mot : « si tu cours dans la classe, ça ne va pas ».' },
    { id: 'm3-ko-joyonghi', kind: 'phrase', ko: '조용히 하세요', fr: 'Silence, s’il vous plaît ! (soyez calmes)', note: '🤫 [[조용히|t:calmement, en silence]] + [[하세요|p:seyo]].' },
    { id: 'm3-ko-ado-dwaeyo', kind: 'grammar', ko: '질문해도 돼요?', fr: 'Je peux poser une question ? — présent sans 요 + 도 돼요 (permis)', note: '✅ [[가도 돼요?]] · [[먹어도 돼요?]] Réponses : [[네, 돼요.]] · [[아니요, 안 돼요.]] Règle : [[permis|p:rules]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les panneaux de l’école 🚫' },
        { type: 'text', text: 'Dans une école coréenne, il y a des affiches partout. Elles finissent toutes par [[안 돼요|t:ça ne va pas, c’est interdit]]. Deux nouveaux verbes : [[뛰다|t:courir, sauter]] et [[떠들다|t:bavarder, faire du bruit]].' },
        { type: 'letters', items: [
          { char: '뛰면 안 돼요', mnemonic: '🚫🏃 il ne faut pas courir' },
          { char: '자면 안 돼요', mnemonic: '🚫😴 il ne faut pas dormir' },
          { char: '떠들면 안 돼요', mnemonic: '🚫🗣️ il ne faut pas faire de bruit' },
        ] },
        { type: 'breakdown', segments: [
          { ko: '교실', role: 'place', gloss: 'salle de classe', particle: { ko: '에서', key: 'action' } },
          { ko: '뛰면', role: 'verb', gloss: 'si on court' },
          { ko: '안 돼요', role: 'verb', gloss: 'ça ne va pas' },
        ], translation: 'Il ne faut pas courir dans la classe.', note: '**-면** = « si ». Mot à mot : « si on court dans la classe, ça ne va pas ».' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque panneau à sa règle.', pairs: [['뛰면 안 돼요', '🚫🏃'], ['자면 안 돼요', '🚫😴'], ['떠들면 안 돼요', '🚫🗣️']] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '자면 안 돼요', choices: ['자면 안 돼요', '자요', '잘 수 있어요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Fabriquer une règle ✏️' },
        { type: 'text', text: 'On enlève [[다]], puis on regarde la dernière lettre — comme pour [[까요?|p:suggest]] :' },
        { type: 'table', head: ['Le radical finit par…', '', 'Interdit'], rows: [
          ['🟢 une voyelle', '[[자]] · [[뛰]]', '[[자면 안 돼요]] · [[뛰면 안 돼요]]'],
          ['🟤 une consonne', '[[먹]] · [[읽]]', '[[먹으면 안 돼요]] · [[읽으면 안 돼요]]'],
          ['🔶 un ㄹ', '[[떠들]]', '[[떠들면 안 돼요]] (le ㄹ suffit !)'],
          ['⭐ [[하다]]', '[[하]]', '[[하면 안 돼요]]'],
        ] },
        { type: 'liaison', items: [
          { written: '먹으면', spoken: '머그면', fr: 'liaison' },
          { written: '읽으면', spoken: '일그면', fr: 'liaison : le ㄱ de ㄺ glisse' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'sort', prompt: '🟢 면 ou 🟤 으면 ?', buckets: ['🟢 면', '🟤 으면'], items: [
      { text: '자다', bucket: 0 }, { text: '뛰다', bucket: 0 }, { text: '떠들다', bucket: 0 }, { text: '마시다', bucket: 0 },
      { text: '먹다', bucket: 1 }, { text: '읽다', bucket: 1 }, { text: '앉다', bucket: 1 },
    ], explain: 'Voyelle → [[면]]. Consonne → [[으면]]. Sauf le ㄹ : il prend [[면]] directement ([[떠들면]]).' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🚫🍔 « Il ne faut pas manger » ([[먹다]]) :', answer: alts('먹으면 안 돼요') } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🚫🗣️ « Il ne faut pas faire de bruit » :', choices: ['떠들면 안 돼요', '떠들으면 안 돼요', '떠들어요 안 돼요'], answer: 0, explain: '[[떠들]] finit par ㄹ : pas de [[으]] → [[떠들면]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les règles de notre classe 📋' },
        { type: 'text', text: 'Activité : déchiffrer l’affiche du mur de la [[교실|t:salle de classe]]. Tu connais tout ! Un nouveau mot pour le silence : [[조용히 하세요!|t:silence, s’il vous plaît]]' },
        { type: 'table', head: ['📋', '우리 교실'], rows: [
          ['1', '[[교실에서 뛰면 안 돼요.]] 🏃'],
          ['2', '[[교실에서 먹으면 안 돼요.]] 🍔'],
          ['3', '[[수업 시간에 자면 안 돼요.|t:pendant le cours]] 😴'],
          ['4', '[[도서관에서 떠들면 안 돼요. 조용히 하세요!]] 🤫'],
        ] },
        { type: 'tip', text: '[[우리|t:notre, nous]] et [[수업 시간|t:l’heure de cours]] : des mots de l’affiche, à reconnaître seulement. Pas de carte pour eux… pour l’instant !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '📋 Où ne faut-il **pas manger** ?', choices: ['🏫 dans la classe', '🍽️ à la cantine', '🏠 à la maison'], answer: 0, explain: '[[교실에서 먹으면 안 돼요.]]' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Il ne faut pas faire de bruit à la bibliothèque.', tiles: ['도서관에서', '떠들면', '안', '돼요'], distractors: ['도서관에', '떠들으면'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le contraire : c’est permis ✅' },
        { type: 'text', text: 'Pour demander « **je peux… ?** », les Coréens disent surtout **-아도 / -어도 돼요?** Et c’est encore le truc de Nabi : le **présent** sans [[요]] + **도 돼요** !' },
        { type: 'table', head: ['Présent', '→', 'Permis ?'], rows: [
          ['[[질문해요]]', '− 요 + 도 돼요', '[[질문해도 돼요?]]'],
          ['[[가요]]', '− 요 + 도 돼요', '[[가도 돼요?]]'],
          ['[[먹어요]]', '− 요 + 도 돼요', '[[먹어도 돼요?]]'],
          ['[[마셔요]]', '− 요 + 도 돼요', '[[마셔도 돼요?]]'],
        ] },
        { type: 'dialog', lines: [
          { who: 'Marie', ko: '선생님, 질문해도 돼요?' },
          { who: '선생님', ko: '네, 돼요.' },
          { who: 'Louis', ko: '선생님, 교실에서 물을 마셔도 돼요?' },
          { who: '선생님', ko: '네, 마셔도 돼요.' },
          { who: 'Louis', ko: '우유를 마셔도 돼요?' },
          { who: '선생님', ko: '아니요, 안 돼요!' },
        ] },
        { type: 'tip', text: '[[안 돼요]] tout seul = « non, c’est interdit ! ». [[돼요]] tout seul = « c’est bon, d’accord ». Très utile !', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[교실에서 우유를 마셔도 돼요?]]', choices: ['아니요, 안 돼요.', '네, 마셔도 돼요.'], answer: 0, explain: 'Dans le dialogue : l’eau oui, le lait non !' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🚻 « Je peux aller aux toilettes ? » ([[화장실에 가요]] → permis ?)', answer: alts('화장실에 가도 돼요') } },
    { kind: 'practice', exercise: { type: 'sort', prompt: '✅ permis ou 🚫 interdit ?', buckets: ['✅ permis', '🚫 interdit'], items: [
      { text: '질문해도 돼요', bucket: 0 }, { text: '물을 마셔도 돼요', bucket: 0 }, { text: '가도 돼요', bucket: 0 },
      { text: '뛰면 안 돼요', bucket: 1 }, { text: '자면 안 돼요', bucket: 1 }, { text: '떠들면 안 돼요', bucket: 1 },
    ] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Écris **une règle** pour ta classe idéale (✅ ou 🚫). [[쓰세요!]]', placeholder: '교실에서 뛰면 안 돼요', mustInclude: [RULE_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '선생님, 질문해도 돼요? 네, 돼요.', fr: 'Monsieur / Madame, je peux poser une question ? — Oui, bien sûr.', prompt: 'Joue l’élève, puis le professeur 👩‍🏫' } },
  ],
  interleave: [
    { type: 'type', prompt: '[[하다]] → « je peux (le faire) » :', answer: alts('할 수 있어요') },
    { type: 'mcq', prompt: '[[선생님]] veut dire…', choices: ['professeur', 'ami', 'élève'], answer: 0 },
    { type: 'cloze', before: '같이 ', after: '?', choices: ['갈까요', '갈 거예요'], answer: 0, translation: 'On y va ensemble ?' },
    { type: 'type', prompt: '⬅️ [[어제]] : « [[도서관에서 공부해요.]] » →', answer: '어제 도서관에서 공부했어요' },
  ],
};

const day38: Lesson = {
  id: 'm2-w4-d3',
  month: 2,
  week: 4,
  day: 38,
  title: 'Au secours ! -아/어 주세요',
  summary: 'Tes cartes réflexes : 천천히 말해 주세요, 다시 말해 주세요, 가르쳐 주세요, 도와주세요.',
  cards: [
    { id: 'm3-ko-a-juseyo', kind: 'grammar', ko: '말해 주세요', fr: 'dites-le-moi, s’il vous plaît — présent sans 요 + 주세요', note: '🙏 [[말해요]] → [[말해 주세요]] · [[써요]] → [[써 주세요]] · [[읽어요]] → [[읽어 주세요]]. Règle : [[service|p:request]]' },
    { id: 'm3-ko-cheoncheonhi', kind: 'vocab', ko: '천천히', fr: 'lentement', note: '🐢 [[천천히 말해 주세요.]]' },
    { id: 'm3-ko-dasi', kind: 'vocab', ko: '다시', fr: 'encore une fois, de nouveau', note: '🔁 [[다시 말해 주세요.]]' },
    { id: 'm3-ko-cheoncheonhi-malhae', kind: 'phrase', ko: '천천히 말해 주세요', fr: 'Parlez lentement, s’il vous plaît.', note: '🐢 Carte réflexe n°1' },
    { id: 'm3-ko-dasi-malhae', kind: 'phrase', ko: '다시 말해 주세요', fr: 'Répétez, s’il vous plaît.', note: '🔁 Carte réflexe n°2' },
    { id: 'm3-ko-gareuchyeo', kind: 'phrase', ko: '가르쳐 주세요', fr: 'Expliquez-moi, apprenez-moi, s’il vous plaît.', note: '👩‍🏫 Infinitif : [[가르치다|t:enseigner]] → [[가르쳐요]] (comme [[마셔요]]). Carte réflexe n°3' },
    { id: 'm3-ko-dowajuseyo', kind: 'phrase', ko: '도와주세요', fr: 'Aidez-moi, s’il vous plaît ! (au secours)', note: '🆘 À retenir tel quel (de [[돕다|t:aider]], irrégulier). Carte réflexe n°4' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le mot magique : 주세요' },
        { type: 'text', text: 'Tu connais [[주세요]] depuis la première semaine : [[물 주세요!|t:de l’eau, s’il vous plaît]] = « **donnez**-moi ». Collé à un verbe, il veut dire « faites-le **pour moi**, s’il vous plaît ».' },
        { type: 'text', text: 'Et la règle… c’est encore le truc de Nabi : le **présent** sans [[요]] + **주세요** !' },
        { type: 'table', head: ['Présent', '→', 'S’il vous plaît…'], rows: [
          ['[[말해요]]', '− 요 + 주세요', '[[말해 주세요]]'],
          ['[[써요]]', '− 요 + 주세요', '[[써 주세요]]'],
          ['[[읽어요]]', '− 요 + 주세요', '[[읽어 주세요]]'],
          ['[[가르쳐요]]', '− 요 + 주세요', '[[가르쳐 주세요]]'],
        ] },
        { type: 'text', text: 'Nouveau verbe : [[가르치다|t:enseigner, apprendre à quelqu’un]] → [[가르쳐요]] (comme [[마시다]] → [[마셔요]]).' },
        { type: 'tip', text: 'Le présent sans [[요]] sert **trois fois** : [[와서|p:cause]] (cause), [[가도 돼요|p:rules]] (permis), [[말해 주세요|p:request]] (service). Une seule forme, trois outils !', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[읽어요]] → « Lisez-le-moi, s’il vous plaît » :', choices: ['읽어 주세요', '읽으 주세요', '읽어요 주세요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[써요]] → « Écrivez-le-moi, s’il vous plaît » :', answer: alts('써 주세요') } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Mes cartes réflexes 🆘' },
        { type: 'text', text: 'Activité : quatre cartes à garder dans ta trousse, pour ne **jamais** rester bloqué(e) en classe. Deux nouveaux mots : [[천천히|t:lentement]] et [[다시|t:encore une fois]].' },
        { type: 'letters', items: [
          { char: '천천히 말해 주세요', mnemonic: '🐢 Parlez lentement, s’il vous plaît.' },
          { char: '다시 말해 주세요', mnemonic: '🔁 Répétez, s’il vous plaît.' },
          { char: '가르쳐 주세요', mnemonic: '👩‍🏫 Expliquez-moi, s’il vous plaît.' },
          { char: '도와주세요', mnemonic: '🆘 Aidez-moi !' },
        ] },
        { type: 'tip', text: '[[도와주세요]] s’écrit **attaché** : [[도와주다|t:aider quelqu’un]] est un seul verbe. Retiens-le tel quel !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque carte réflexe à son image.', pairs: [['천천히 말해 주세요', '🐢'], ['다시 말해 주세요', '🔁'], ['가르쳐 주세요', '👩‍🏫'], ['도와주세요', '🆘']] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '천천히 말해 주세요', choices: ['천천히 말해 주세요', '다시 말해 주세요', '천천히 말할 수 있어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '😵 Le professeur parle **trop vite**. Tu dis :', choices: ['천천히 말해 주세요.', '다시 말해 주세요.', '조용히 하세요.'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🤔 Tu n’as **pas entendu** la phrase. Tu dis :', choices: ['다시 말해 주세요.', '천천히 말해 주세요.', '도와주세요.'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Consigne ou demande ?' },
        { type: 'text', text: 'Activité de la classe : transformer les **consignes** du professeur en **demandes polies** d’élève.' },
        { type: 'table', head: ['👩‍🏫 Consigne ([[-세요|p:seyo]])', '🙋 Demande ([[-아/어 주세요|p:request]])'], rows: [
          ['[[보세요.|t:regardez]]', '[[봐 주세요.|t:regardez (pour moi), s’il vous plaît]]'],
          ['[[쓰세요.]]', '[[써 주세요.]]'],
          ['[[읽으세요.]]', '[[읽어 주세요.]]'],
          ['[[말하세요.]]', '[[말해 주세요.]]'],
        ] },
        { type: 'text', text: '**-세요** : « faites ça » (une consigne). **-아/어 주세요** : « faites ça **pour moi** » (un service). Un élève qui demande de l’aide utilise toujours [[주세요]] !' },
      ],
    },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[읽으세요]] → en demande polie (« lisez-le-moi ») :', answer: alts('읽어 주세요') } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[보세요]] → en demande polie (« regardez, s’il vous plaît ») :', answer: alts('봐 주세요') } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'En plein cours 🎬' },
        { type: 'text', text: 'Marie utilise ses cartes réflexes. **Sans traduction** — [[들으세요!]]' },
        { type: 'dialog', lines: [
          { who: '선생님', ko: '오늘은 시월 십사일이에요. 책을 펴세요.' },
          { who: 'Marie', ko: '선생님, 천천히 말해 주세요.' },
          { who: '선생님', ko: '책을… 펴세요.' },
          { who: 'Marie', ko: '감사합니다! 선생님, 질문해도 돼요?' },
          { who: '선생님', ko: '네, 돼요.' },
          { who: 'Marie', ko: '이게 뭐예요? 가르쳐 주세요.' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que demande Marie en premier ?', choices: ['🐢 de parler lentement', '🔁 de répéter', '🚻 d’aller aux toilettes'], answer: 0, explain: '[[천천히 말해 주세요.]]' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Monsieur / Madame, répétez, s’il vous plaît.', tiles: ['선생님,', '다시', '말해', '주세요'], distractors: ['말하세요', '천천히'] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Écris ta carte réflexe **préférée**. [[쓰세요!]]', placeholder: '천천히 말해 주세요', mustInclude: [REQUEST_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '선생님, 다시 말해 주세요. 천천히 말해 주세요.', fr: 'Répétez, s’il vous plaît. Parlez lentement, s’il vous plaît.', prompt: 'Mise en pratique : dis-les à voix haute, comme en classe 🙋' } },
  ],
  interleave: [
    { type: 'cloze', before: '교실에서 ', after: ' 안 돼요.', choices: ['뛰면', '뛰어요'], answer: 0, translation: 'Il ne faut pas courir dans la classe.' },
    { type: 'mcq', prompt: '[[질문해도 돼요?]] veut dire…', choices: ['Je peux poser une question ?', 'Posez une question !', 'Tu as posé une question ?'], answer: 0 },
    { type: 'type', prompt: '[[먹다]] → « je ne peux pas manger » (avec [[수]]) :', answer: alts('먹을 수 없어요') },
    { type: 'listen', audio: '피곤해서 못 가요', choices: ['피곤해서 못 가요', '피곤해요', '바빠서 못 가요'], answer: 0 },
  ],
};

const day39: Lesson = {
  id: 'm2-w4-d4',
  month: 2,
  week: 4,
  day: 39,
  title: 'Mon livret de grammaire',
  summary: 'Toutes les formes du 2ᵉ mois dans un seul livret, une histoire en 4 images et ta carte de remerciement.',
  cards: [
    { id: 'm3-ko-gareuchyeo-jusyeoseo', kind: 'phrase', ko: '가르쳐 주셔서 감사합니다', fr: 'Merci de m’avoir appris (merci pour vos explications).', note: '💌 [[주셔서]] : la cause ([[cause|p:cause]]) de [[주세요]], en version polie. À retenir tel quel !' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Mon livret de grammaire illustré 📒' },
        { type: 'text', text: 'Activité : chaque élève fabrique son livret, une page par forme. Voici le tien, avec [[가다]] :' },
        { type: 'table', head: ['Page', 'Forme', '[[가다]]'], rows: [
          ['⬅️', '[[passé|p:past]]', '[[갔어요]]'],
          ['➡️', '[[futur|p:future]]', '[[갈 거예요]]'],
          ['🎯⚙️', '[[에|p:place]] · [[에서|p:action]]', '[[학교에 가요]] · [[학교에서 공부해요]]'],
          ['💡', '[[cause|p:cause]]', '[[가서]]'],
          ['🤝', '[[proposer|p:suggest]]', '[[갈까요?]] · [[갑시다!]]'],
          ['💪', '[[pouvoir|p:ability]]', '[[갈 수 있어요]] · [[갈 수 없어요]]'],
          ['🚫✅', '[[interdit / permis|p:rules]]', '[[가면 안 돼요]] · [[가도 돼요]]'],
          ['🙏', '[[service|p:request]]', '[[가 주세요]]'],
        ] },
        { type: 'tip', text: 'Regarde bien : il n’y a que **deux familles** ! La famille du **futur** (ㄹ / 을) : [[갈 거예요]], [[갈까요?]], [[갈 수 있어요]]. La famille du **présent sans 요** : [[가서]], [[가도 돼요]], [[가 주세요]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Quelle famille ?', buckets: ['➡️ famille du futur', '📍 présent sans 요'], items: [
      { text: '먹을까요?', bucket: 0 }, { text: '먹을 수 있어요', bucket: 0 }, { text: '먹을 거예요', bucket: 0 },
      { text: '먹어서', bucket: 1 }, { text: '먹어도 돼요', bucket: 1 }, { text: '먹어 주세요', bucket: 1 },
    ], explain: 'Famille du futur : [[먹을…]]. Famille du présent : [[먹어…]]. Tu n’as que **deux** radicaux à connaître !' } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Complète ton livret : touche une case vide, puis écris.', head: ['Verbe', '➡️ Futur', '🤝 On… ?', '💪 Je peux', '💡 Cause'], rows: [
      ['가다', '갈 거예요', { answer: '갈까요' }, blank('갈 수 있어요'), '가서'],
      ['먹다', '먹을 거예요', '먹을까요', blank('먹을 수 있어요'), { answer: '먹어서' }],
      ['하다', blank('할 거예요'), { answer: '할까요' }, '할 수 있어요', { answer: '해서' }],
    ] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le bon outil 🧰' },
        { type: 'text', text: 'Chaque situation a son outil. Lis la situation, choisis la forme !' },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🤝 Tu proposes à un ami.', before: '같이 영화를 ', after: '?', choices: ['볼까요', '볼 수 있어요', '봐 주세요'], answer: 0, translation: 'On regarde un film ensemble ?' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🚫 La règle de la bibliothèque.', before: '도서관에서 ', after: '', choices: ['떠들면 안 돼요', '떠들어서', '떠들까요'], answer: 0, translation: 'Il ne faut pas faire de bruit à la bibliothèque.' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '💡 Tu expliques pourquoi.', before: '', after: ' 축구를 할 수 없어요.', choices: ['피곤해서', '피곤하면', '피곤할까요'], answer: 0, translation: 'Je suis fatigué(e), donc je ne peux pas jouer au foot.' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🙏 Tu demandes un service au professeur.', before: '선생님, 천천히 ', after: '', choices: ['말해 주세요', '말할까요', '말하면 안 돼요'], answer: 0, translation: 'Monsieur / Madame, parlez lentement, s’il vous plaît.' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '⬅️ Tu racontes hier.', before: '어제 친구를 ', after: '', choices: ['만났어요', '만날 거예요', '만날까요'], answer: 0, translation: 'Hier, j’ai vu un ami.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Une histoire en 4 images 🖼️' },
        { type: 'text', text: 'Activité en binôme : raconter une histoire à partir d’images. Celle-ci est **entièrement en coréen** — touche une phrase pour l’entendre.' },
        { type: 'table', head: ['🖼️', ''], rows: [
          ['1 ☀️', '[[토요일이에요. 날씨가 좋아요.]]'],
          ['2 🤝', '[[마리는 친구를 만났어요. “같이 공원에 갈까요?” “좋아요!”]]'],
          ['3 🎨', '[[공원에서 같이 그림을 그렸어요. 마리는 그림을 잘 그릴 수 있어요!]]'],
          ['4 🍽️', '[[그리고 배가 고파서 식당에 갔어요.]]'],
        ] },
        { type: 'tip', text: '[[잘|t:bien]] : un tout petit mot très utile. [[잘 그릴 수 있어요]] = « elle sait **bien** dessiner ».', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[마리는 공원에서 뭐 했어요?]]', choices: ['그림을 그렸어요', '축구를 했어요', '책을 읽었어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[왜 식당에 갔어요?]]', choices: ['배가 고파서', '비가 와서', '피곤해서'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'order', translation: 'J’avais faim, donc je suis allé(e) au restaurant.', tiles: ['배가', '고파서', '식당에', '갔어요'], distractors: ['고팠어서', '식당에서'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ma carte de remerciement 💌' },
        { type: 'text', text: 'Activité de la classe : écrire une carte au professeur. La formule à connaître :' },
        { type: 'text', text: '[[선생님, 한국어를 가르쳐 주셔서 감사합니다!|t:merci de m’apprendre le coréen]]' },
        { type: 'text', text: '[[주셔서]] est la cause ([[cause|p:cause]]) de [[주세요]] : « parce que vous me l’avez appris… merci ! ». Retiens-la telle quelle.' },
        { type: 'table', head: ['💌', ''], rows: [
          ['', '[[선생님, 안녕하세요!]]'],
          ['', '[[저는 한국어를 조금 할 수 있어요. 한글을 읽을 수 있어요.]]'],
          ['', '[[한국어를 가르쳐 주셔서 감사합니다!]]'],
          ['', '[[마리]] ✏️'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'write', prompt: '💌 Écris **ta** carte : ce que tu sais faire, puis le merci. [[쓰세요!]]', placeholder: '한국어를 조금 할 수 있어요. 가르쳐 주셔서 감사합니다!', mustInclude: [ABILITY_ANY, '감사합니다'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '선생님, 한국어를 가르쳐 주셔서 감사합니다!', fr: 'Merci de m’apprendre le coréen !', prompt: 'Lis ta carte à voix haute, avec le sourire 😊' } },
  ],
  interleave: [
    { type: 'mcq', prompt: '🔁 « Répétez, s’il vous plaît » :', choices: ['다시 말해 주세요', '천천히 말해 주세요', '다시 말하세요'], answer: 0 },
    { type: 'type', prompt: '🚫😴 « Il ne faut pas dormir » :', answer: alts('자면 안 돼요') },
    { type: 'cloze', before: '주말에 공원', after: ' 운동할 거예요.', choices: ['에서', '에'], answer: 0, translation: 'Ce week-end, je ferai du sport au parc.' },
    { type: 'clock', prompt: '[[몇 시에 만날까요?]] — [[두 시 반에 만나요.]]', h: 2, m: 30 },
  ],
};

const DICTATION = ['같이 도서관에 갈까요?', '비가 와서 축구를 할 수 없어요', '교실에서 뛰면 안 돼요', '천천히 말해 주세요'];

const FORMS: [string, string, 0 | 1 | 2, string][] = [
  ['저는 한국어를 조금 ', '.', 0, 'Je sais parler un peu coréen.'],
  ['도서관에서 축구를 ', '!', 1, 'Il ne faut pas jouer au foot à la bibliothèque !'],
  ['어제 운동을 ', ' 피곤해요.', 2, 'J’ai fait du sport hier, donc je suis fatigué(e).'],
];

const BANK = ['수', '주세요', '도'];
const HOLES: [string, string, 0 | 1 | 2, string][] = [
  ['한국어를 조금 할 ', ' 있어요.', 0, 'Je sais parler un peu coréen.'],
  ['천천히 말해 ', '.', 1, 'Parlez lentement, s’il vous plaît.'],
  ['질문해', ' 돼요?', 2, 'Je peux poser une question ?'],
];

const day40: Lesson = {
  id: 'm2-w4-d5',
  month: 2,
  week: 4,
  day: 40,
  title: 'Grand bilan & Grande évaluation n°4',
  summary: 'La dictée de la classe, la Grande évaluation bimensuelle n°4, une histoire à l’école et ton bilan du 2ᵉ mois.',
  cards: [],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le grand jour 🎓' },
        { type: 'tip', text: 'Huit semaines déjà ! Aujourd’hui, on fait le point sur **tout** ce que tu as appris. [[천천히]], sans stress : [[할 수 있어요!]]', mood: 'encourage' },
        { type: 'text', text: 'D’abord, l’épreuve de la classe : une **dictée**, puis la **grammaire**. [[들으세요!]] Puis [[쓰세요!]]' },
      ],
    },
    ...DICTATION.map((s, i) => ({
      kind: 'practice' as const,
      exercise: { type: 'type' as const, prompt: `Dictée ${i + 1}/${DICTATION.length}`, audio: s, answer: alts(s) },
    })),
    { kind: 'learn', blocks: [{ type: 'tip', text: '**Grammaire** — Choisis la bonne forme : 💪 pouvoir, 🚫 interdit, ou 💡 cause ?', mood: 'encourage' }] },
    ...FORMS.map(([before, after, answer, translation], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'cloze' as const, prompt: `Grammaire ${i + 1}/${FORMS.length}`, before, after, choices: THREE_FORMS, answer, translation },
    })),
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Grande évaluation n°4' },
        { type: 'text', text: 'Quatre parties, comme d’habitude sans piège ni chrono. Chaque erreur reviendra simplement en révision.' },
        { type: 'table', head: ['Partie', 'Contenu'], rows: [
          ['A', 'Règlements & panneaux'],
          ['B', 'Expressions de secours (banque de mots)'],
          ['C', 'Compréhension d’un texte court'],
          ['D', 'Production : jeu de rôle et paragraphe'],
        ] },
        { type: 'tip', text: '**A — Règlements & panneaux.** Relie chaque panneau à sa phrase.', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: '**A** — Relie les 5 panneaux.', pairs: [
      ['교실에서 뛰면 안 돼요', '🚫🏃'],
      ['수업 시간에 자면 안 돼요', '🚫😴'],
      ['교실에서 먹으면 안 돼요', '🚫🍔'],
      ['조용히 해 주세요', '🤫'],
      ['물을 마셔도 돼요', '✅💧'],
    ] } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**B — Expressions de secours.** Complète avec la banque de mots : [[수]] · [[주세요]] · [[도]].', mood: 'encourage' }] },
    ...HOLES.map(([before, after, answer, translation], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'cloze' as const, prompt: `**B · ${i + 1}/${HOLES.length}**`, before, after, choices: BANK, answer, translation },
    })),
    {
      kind: 'learn',
      blocks: [
        { type: 'tip', text: '**C — Compréhension.** Lis le texte de Minsu (touche une phrase pour l’entendre), puis réponds aux questions.', mood: 'encourage' },
        { type: 'text', text: '[[저는 민수예요.]] [[오늘 비가 와서 축구를 할 수 없어요.]] [[그래서 도서관에서 친구를 만날 거예요.]] [[도서관에서 같이 책을 읽을 거예요.]]' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 1/3** — [[민수는 왜 축구를 할 수 없어요?]]', choices: ['비가 와서', '배가 아파서', '바빠서'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 2/3** — [[민수는 어디에서 친구를 만날 거예요?]]', choices: ['도서관에서', '공원에서', '식당에서'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 3/3** — Vrai ou faux ? « Minsu et son ami vont jouer au football. »', choices: ['Faux', 'Vrai'], answer: 0, explain: '[[같이 책을 읽을 거예요.]] Ils vont **lire**.' } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**D — Jeu de rôle.** Le professeur est devant toi. Dis chaque phrase à voix haute, puis écoute le modèle.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'read', ko: '선생님, 같이 책을 읽을까요?', fr: 'Monsieur / Madame, on lit un livre ensemble ?', prompt: '**D · 1/3** — 🤝 Propose une activité au professeur.' } },
    { kind: 'practice', exercise: { type: 'read', ko: '선생님, 다시 말해 주세요.', fr: 'Monsieur / Madame, répétez, s’il vous plaît.', prompt: '**D · 2/3** — 🔁 Tu n’as pas compris la réponse. Demande poliment.' } },
    { kind: 'practice', exercise: { type: 'write', prompt: '**D · 3/3** — Un petit paragraphe : **une règle** de ta classe idéale (✅ ou 🚫) et **un projet** pour ce week-end. [[쓰세요!]]', placeholder: '교실에서 뛰면 안 돼요. 주말에 친구를 만날 거예요.', mustInclude: [`${RULE_ANY}|${ABILITY_ANY}`, '거예요'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Nabi à l’école 📖' },
        { type: 'text', text: 'Une histoire **entièrement en coréen**. Touche une bulle pour l’entendre.' },
        { type: 'dialog', lines: [
          { who: '📖', ko: '월요일이에요. 나비는 학교에 갔어요.' },
          { who: '📖', ko: '교실에서 루이가 뛰었어요!' },
          { who: '선생님', ko: '루이, 교실에서 뛰면 안 돼요!' },
          { who: '나비', ko: '선생님, 질문해도 돼요?' },
          { who: '선생님', ko: '네, 돼요.' },
          { who: '나비', ko: '선생님, 이게 뭐예요? 천천히 말해 주세요.' },
          { who: '선생님', ko: '우산이에요. 우-산.' },
          { who: '나비', ko: '아! 우산! 가르쳐 주셔서 감사합니다!' },
          { who: '📖', ko: '나비는 한국어를 조금 할 수 있어요. 그래서 내일 한국어를 공부할 거예요!' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi le professeur gronde-t-il Louis ?', choices: ['🏃 Il a couru dans la classe.', '😴 Il a dormi.', '🍔 Il a mangé.'], answer: 0, explain: '[[루이, 교실에서 뛰면 안 돼요!]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’est-ce que Nabi a appris ?', choices: ['☂️ parapluie', '📖 livre', '✏️ crayon'], answer: 0, explain: '[[우산이에요.]]' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ton bilan du 2ᵉ mois 🎓' },
        { type: 'text', text: 'Huit semaines, quarante leçons. Voici tout ce que tu sais faire :' },
        { type: 'table', head: ['Domaine', 'Acquis'], rows: [
          ['Lecture', 'le **hangul**, 100 % autonome, et les consignes du professeur : [[펴세요]] · [[쓰세요]] · [[들으세요]]'],
          ['Les temps', '[[passé|p:past]] · [[présent|p:present]] · [[futur|p:future]] : [[갔어요]] · [[가요]] · [[갈 거예요]]'],
          ['Les particules', '[[은/는|p:topic]] · [[이/가|p:subject]] · [[을/를|p:object]] · [[에|p:place]] · [[에서|p:action]]'],
          ['Relier', '[[그리고]] · [[그래서]] · [[그러니까]] · [[-아서/어서|p:cause]]'],
          ['Modalités', '[[갈까요?|p:suggest]] · [[갈 수 있어요|p:ability]] · [[가면 안 돼요|p:rules]] · [[가도 돼요|p:rules]] · [[가 주세요|p:request]]'],
          ['Vocabulaire', '**environ 150 mots et expressions** : école, calendrier, famille, nourriture, journée…'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'read', ko: '저는 한국어를 조금 할 수 있어요. 한글을 읽을 수 있어요. 그리고 다음 주말에 한국어를 공부할 거예요!', fr: 'Je parle un peu coréen. Je sais lire le hangul. Et le week-end prochain, j’étudierai le coréen !', prompt: 'Ton entretien de bilan du 2ᵉ mois : présente-toi à Nabi à voix haute, puis écoute le modèle.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Bravo, 2ᵉ mois terminé ! 🎉' },
        { type: 'text', text: 'Tu sais maintenant dire ce que tu **peux** faire, lire les **règles** de la classe, demander la **permission** et appeler à l’**aide**. En classe coréenne, tu ne seras plus jamais bloqué(e) !' },
        { type: 'tip', text: 'Le mois prochain, je vais me transformer… en **chrysalide** ! [[선생님, 질문해도 돼요?]] [[네, 돼요!]] ✨ À demain pour le 3ᵉ mois !', mood: 'happy' },
      ],
    },
  ],
};

export const m2w4: Lesson[] = [day36, day37, day38, day39, day40];
