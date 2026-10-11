import type { GridBlank, Lesson } from '../types';

const alts = (...xs: string[]): string[] => {
  const out = new Set<string>();
  for (const s of xs) {
    out.add(s);
    out.add(s.replace(/[.,!?] /g, ' '));
  }
  return [...out];
};
const blank = (s: string): GridBlank => ({ answer: s });

const JIMAN_ANY = '지만';
const B_ANY = '추워|더워|쉬워|어려워|추웠|더웠|쉬웠|어려웠';

const day41: Lesson = {
  id: 'm3-w1-d1',
  month: 3,
  week: 1,
  day: 41,
  title: 'Mais… -지만',
  summary: 'Relier deux idées opposées dans une seule phrase : 비싸지만 맛있어요, 한국어가 어렵지만 재미있어요.',
  cards: [
    { id: 'm3-ko-jiman', kind: 'grammar', ko: '비싸지만 맛있어요', fr: 'c’est cher, mais c’est bon — radical + 지만 (mais)', note: '⚖️ Infinitif sans [[다]] + [[지만]], **sans aucun changement** : [[좋지만]], [[크지만]], [[좋아하지만]]. Règle : [[opposition|p:contrast]]' },
    { id: 'm3-ko-hajiman', kind: 'vocab', ko: '하지만', fr: 'mais (en début de phrase)', note: '⚖️ Comme [[그리고]] et [[그래서]] : entre deux phrases. [[비싸요. 하지만 맛있어요.]]' },
    { id: 'm3-ko-bissayo', kind: 'phrase', ko: '비싸요', fr: 'c’est cher (poli)', note: '💸 Infinitif : [[비싸다]]. Contraire : [[싸요]].' },
    { id: 'm3-ko-ssayo', kind: 'phrase', ko: '싸요', fr: 'ce n’est pas cher (poli)', note: '🪙 Infinitif : [[싸다]]. Contraire : [[비싸요]].' },
    { id: 'm3-ko-masisseoyo', kind: 'phrase', ko: '맛있어요', fr: 'c’est bon, c’est délicieux (poli)', note: '😋 [[맛|t:goût]] + [[있어요]] : « il y a du goût ». Se prononce [[마시써요]].' },
    { id: 'm3-ko-jaemiisseoyo', kind: 'phrase', ko: '재미있어요', fr: 'c’est amusant, c’est intéressant (poli)', note: '🎉 [[재미|t:amusement]] + [[있어요]]. Contraire : [[재미없어요]] (c’est ennuyeux).' },
    { id: 'm3-ko-eoryeopjiman', kind: 'phrase', ko: '한국어가 어렵지만 재미있어요', fr: 'Le coréen est difficile, mais c’est intéressant.', note: '📚 [[어렵다|t:être difficile]] + [[지만|p:contrast]]. Au présent, verbe en ㅂ : [[어려워요]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Oui… mais ! ⚖️' },
        { type: 'tip', text: 'Bienvenue au **3ᵉ mois** ! Regarde-moi : je suis devenu(e) **chrysalide** ! Ce mois-ci, tes phrases vont devenir plus **nuancées** : « c’est cher… **mais** c’est bon ». Et tu connais déjà le secret : [[미안하지만…|t:je suis désolé(e), mais…]]', mood: 'happy' },
        { type: 'text', text: '[[미안하지만]], c’est [[미안하다]] + **지만** = « je suis désolé(e), **mais**… ». Ce **-지만** se colle à n’importe quel verbe ou adjectif.' },
        { type: 'text', text: 'Et la règle est la plus facile du coréen : on enlève [[다]], on colle **지만**. Pas de ㅏ/ㅓ, pas de voyelle qui fusionne, rien !' },
        { type: 'table', head: ['Infinitif', '− 다 + 지만', ''], rows: [
          ['[[좋다]]', '[[좋지만]]', 'c’est bien, mais…'],
          ['[[크다]]', '[[크지만]]', 'c’est grand, mais… (le [[ㅡ]] reste !)'],
          ['[[먹다]]', '[[먹지만]]', 'je mange, mais…'],
          ['[[좋아하다]]', '[[좋아하지만]]', 'j’aime, mais…'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[작다]] + « mais » :', choices: ['작지만', '작아지만', '작어지만'], answer: 0, explain: 'On enlève [[다]] et on colle [[지만]]. C’est tout !' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[나쁘다]] + « mais » :', answer: '나쁘지만', explain: 'Devant [[지만]], le [[ㅡ]] ne s’efface pas : [[나쁘지만]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les contraires 🔄' },
        { type: 'text', text: 'Activité de la classe : chercher des **adjectifs contraires**. Tu connais déjà [[커요]] / [[작아요]] et [[좋아요]] / [[나빠요]]. Voici trois nouvelles paires :' },
        { type: 'letters', items: [
          { char: '비싸요', mnemonic: '💸 c’est cher' },
          { char: '싸요', mnemonic: '🪙 ce n’est pas cher' },
          { char: '재미있어요', mnemonic: '🎉 c’est amusant' },
          { char: '재미없어요', mnemonic: '🥱 c’est ennuyeux' },
          { char: '맛있어요', mnemonic: '😋 c’est bon' },
        ] },
        { type: 'text', text: '[[재미있어요]] et [[맛있어요]] sont construits avec [[있어요]] : « il y a du **plaisir** », « il y a du **goût** ». Et le contraire avec [[없어요]] !' },
        { type: 'liaison', items: [
          { written: '맛있어요', spoken: '마시써요', fr: 'c’est bon' },
          { written: '재미있어요', spoken: '재미이써요', fr: 'c’est amusant' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie les contraires.', pairs: [['커요', '작아요'], ['좋아요', '나빠요'], ['비싸요', '싸요'], ['재미있어요', '재미없어요']] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '맛있어요', choices: ['맛있어요', '재미있어요', '비싸요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les cartes tournantes 🃏' },
        { type: 'text', text: 'Méthode : une carte 🟥 **A**, la carte **지만**, une carte 🟦 **B** qui dit le contraire.' },
        { type: 'breakdown', segments: [
          { ko: '사과', role: 'subject', gloss: 'la pomme', particle: { ko: '가', key: 'subject' } },
          { ko: '비싸지만', role: 'verb', gloss: 'est chère, mais' },
          { ko: '맛있어요', role: 'verb', gloss: 'est bonne' },
        ], translation: 'La pomme est chère, mais elle est bonne.', note: 'Le temps et la politesse se mettent **à la fin** : [[맛있어요]]. Devant [[지만]], juste le radical.' },
        { type: 'breakdown', segments: [
          { ko: '한국어', role: 'subject', gloss: 'le coréen', particle: { ko: '가', key: 'subject' } },
          { ko: '어렵지만', role: 'verb', gloss: 'est difficile, mais' },
          { ko: '재미있어요', role: 'verb', gloss: 'est intéressant' },
        ], translation: 'Le coréen est difficile, mais c’est intéressant.', note: 'Nouveau : [[어렵다|t:être difficile]]. Devant [[지만]], aucun souci : [[어렵지만]]. Au présent, il fait une petite magie… réponse mercredi !' },
      ],
    },
    { kind: 'practice', exercise: { type: 'order', translation: 'C’est cher, mais c’est bon.', tiles: ['비싸지만', '맛있어요'], distractors: ['비싸요', '맛있지만'] } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Le coréen est difficile, mais c’est intéressant.', tiles: ['한국어가', '어렵지만', '재미있어요'], distractors: ['어려지만', '재미없어요'] } },
    { kind: 'practice', exercise: { type: 'cloze', before: '가방이 ', after: ' 좋아요.', choices: ['작지만', '작아서', '작아요'], answer: 0, translation: 'Le sac est petit, mais il est bien.', explain: 'Deux idées **opposées** (petit 👎 / bien 👍) → [[지만|p:contrast]]. Une cause → [[서|p:cause]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Pour opposer deux choses' },
        { type: 'text', text: 'Avec [[는|p:topic]], on compare : « **les pommes**, j’aime, mais **le lait**, je n’aime pas ».' },
        { type: 'text', text: '[[사과는 좋아하지만 우유는 싫어해요.|t:j’aime les pommes, mais pas le lait]]' },
        { type: 'text', text: 'Au passé, le [[passé|p:past]] se glisse aussi devant **지만** : [[갔지만]], [[먹었지만]], [[공부했지만]].' },
        { type: 'text', text: 'Et pour commencer une **nouvelle phrase** par « mais », comme [[그리고]] et [[그래서]] : [[하지만|t:mais]]. [[비싸요. 하지만 맛있어요.]]' },
        { type: 'tip', text: '[[그리고]] ➕ · [[그래서]] ➡️ · [[하지만]] ⚖️ : ta boîte à liens est complète !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'type', prompt: '🍎 👍 / 🥛 👎 : « J’aime les pommes, mais pas le lait. »', answer: alts('사과는 좋아하지만 우유는 싫어해요', '사과를 좋아하지만 우유를 싫어해요') } },
    { kind: 'practice', exercise: { type: 'cloze', before: '어제 비가 왔', after: ' 축구를 했어요.', choices: ['지만', '어서', '어요'], answer: 0, translation: 'Hier, il a plu, mais on a joué au foot.', explain: 'Passé + [[지만|p:contrast]] : [[왔지만]]. Jamais de passé devant [[서|p:cause]] !' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[비싸요. 하지만 맛있어요.]] veut dire…', choices: ['C’est cher. Mais c’est bon.', 'C’est cher. Donc c’est bon.', 'Ce n’est pas cher. Et c’est bon.'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'À toi : décris quelque chose avec **-지만** (ton école, ton sac, le coréen…). [[쓰세요!]]', placeholder: '한국어가 어렵지만 재미있어요', mustInclude: [JIMAN_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '한국어가 어렵지만 재미있어요!', fr: 'Le coréen est difficile, mais c’est intéressant !', prompt: 'Mise en pratique : dis-le avec conviction 💪' } },
  ],
  interleave: [
    { type: 'cloze', before: '비가 ', after: ' 우산을 써요.', choices: ['와서', '오지만'], answer: 0, translation: 'Il pleut, donc je prends un parapluie.' },
    { type: 'type', prompt: '🙏 « Répétez, s’il vous plaît » :', answer: alts('다시 말해 주세요', '다시 말해주세요') },
    { type: 'mcq', prompt: '[[미안하지만…]] veut dire…', choices: ['Je suis désolé(e), mais…', 'Merci, et…', 'Pardon, donc…'], answer: 0 },
    { type: 'cloze', before: '교실에서 ', after: ' 안 돼요.', choices: ['먹으면', '먹지만'], answer: 0, translation: 'Il ne faut pas manger dans la classe.' },
  ],
};

const day42: Lesson = {
  id: 'm3-w1-d2',
  month: 3,
  week: 1,
  day: 42,
  title: 'Le ㄷ qui devient ㄹ',
  summary: '듣다 → 들어요, 걷다 → 걸어요 : pourquoi le ㄷ se transforme, et 음악을 들어요.',
  cards: [
    { id: 'm3-ko-irreg-d', kind: 'grammar', ko: '듣다 → 들어요 · 들었어요', fr: 'écouter → j’écoute · j’ai écouté — ㄷ devient ㄹ devant une voyelle', note: '👂 [[ㄷ]] + voyelle → [[ㄹ]] : [[들어요]], [[들을 거예요]], [[들으세요]]. Devant une consonne, il reste : [[듣지만]]. Règle : [[verbes en ㄷ|p:irreg-d]]' },
    { id: 'm3-ko-deureoyo', kind: 'phrase', ko: '들어요', fr: 'j’écoute, j’entends (poli)', note: '👂 Infinitif : [[듣다]]. Se prononce [[드러요]].' },
    { id: 'm3-ko-georeoyo', kind: 'phrase', ko: '걸어요', fr: 'je marche (poli)', note: '🚶 Infinitif : [[걷다]] (ㄷ → ㄹ). Se prononce [[거러요]].' },
    { id: 'm3-ko-eumak', kind: 'vocab', ko: '음악', fr: 'musique', note: '🎵 Se prononce en liaison : [[음악을]] → [[으마글]].' },
    { id: 'm3-ko-eumak-deureoyo', kind: 'phrase', ko: '음악을 들어요', fr: 'J’écoute de la musique.', note: '🎧 Consigne du professeur : [[음악을 들으세요.|t:écoutez la musique]]' },
    { id: 'm3-ko-georeoseo', kind: 'phrase', ko: '걸어서 학교에 가요', fr: 'Je vais à l’école à pied.', note: '🚶 [[걸어서]] = « en marchant » = **à pied** (la forme en [[서|p:cause]] de [[걷다]]).' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Un vieux mot qui cache un secret 👂' },
        { type: 'text', text: 'Depuis la toute première semaine, le professeur te dit [[들으세요!|t:écoutez]] Mais l’infinitif, c’est… [[듣다|t:écouter]], avec un **ㄷ** ! Où est passé le ㄷ ?' },
        { type: 'table', head: ['', 'ㄷ ➜ ㄹ'], rows: [
          ['[[듣다]]', '[[들으세요]]'],
          ['[[듣다]]', '[[들어요]]'],
          ['[[듣다]]', '[[들었어요]]'],
        ] },
        { type: 'tip', text: 'La règle de la classe : pour certains verbes, quand le **ㄷ** final rencontre une **voyelle**, il se transforme en **ㄹ**. Ça coule mieux dans la bouche : [[드더요]] ❌ → [[드러요]] ✅', mood: 'thinking' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le schéma de base' },
        { type: 'text', text: '**ㄷ + voyelle → ㄹ**. Regarde ce qui vient après le radical [[듣]] :' },
        { type: 'table', head: ['Après [[듣]]…', 'Forme', ''], rows: [
          ['🔴 une voyelle (어요)', '[[들어요]]', 'j’écoute'],
          ['🔴 une voyelle (었어요)', '[[들었어요]]', 'j’ai écouté'],
          ['🔴 une voyelle (을 거예요)', '[[들을 거예요]]', 'j’écouterai'],
          ['🔴 une voyelle (으세요)', '[[들으세요]]', 'écoutez'],
          ['🔵 une consonne (지만)', '[[듣지만]]', 'j’écoute, mais… (le ㄷ reste !)'],
        ] },
        { type: 'text', text: 'Même chose pour [[걷다|t:marcher]] : [[걸어요]], [[걸었어요]], [[걸을 거예요]]… mais [[걷지만]].' },
        { type: 'liaison', items: [
          { written: '들어요', spoken: '드러요', fr: 'j’écoute' },
          { written: '걸어요', spoken: '거러요', fr: 'je marche' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[듣다]] au présent poli :', choices: ['들어요', '듣어요', '드어요'], answer: 0, explain: 'ㄷ + voyelle ([[어요]]) → ㄹ : [[들어요]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[걷다]] au présent poli :', answer: '걸어요' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[듣다]] au **passé** poli :', answer: '들었어요', explain: '[[들어요]] → un **ㅆ** dessous → [[들었어요]].' } },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Le ㄷ devient-il ㄹ ?', buckets: ['🔴 ㄹ (voyelle après)', '🔵 ㄷ reste'], items: [
      { text: '들어요', bucket: 0 }, { text: '걸었어요', bucket: 0 }, { text: '들을 거예요', bucket: 0 }, { text: '들으세요', bucket: 0 },
      { text: '듣지만', bucket: 1 }, { text: '걷지만', bucket: 1 },
    ], explain: 'Voyelle après → [[ㄹ]]. Consonne après ([[지만|p:contrast]]) → le [[ㄷ]] reste.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'En classe de musique 🎵' },
        { type: 'text', text: 'Nouveau mot : [[음악|t:musique]]. Et la consigne du professeur :' },
        { type: 'breakdown', segments: [
          { ko: '음악', role: 'object', gloss: 'la musique', particle: { ko: '을', key: 'object' } },
          { ko: '들으세요', role: 'verb', gloss: 'écoutez' },
        ], translation: 'Écoutez la musique.', note: 'Consigne en [[-으세요|p:seyo]] : [[듣]] → [[들]] + [[으세요]].' },
        { type: 'breakdown', segments: [
          { ko: '음악', role: 'object', gloss: 'de la musique', particle: { ko: '을', key: 'object' } },
          { ko: '들어요', role: 'verb', gloss: 'j’écoute' },
        ], translation: 'J’écoute de la musique.' },
        { type: 'liaison', items: [{ written: '음악을', spoken: '으마글', fr: 'deux liaisons de suite !' }] },
      ],
    },
    { kind: 'practice', exercise: { type: 'listen', audio: '음악을 들어요', choices: ['음악을 들어요', '음악을 들었어요', '음악을 들으세요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '👩‍🏫 [[음악을 들으세요.]] Que fais-tu ?', choices: ['🎧 J’écoute la musique.', '🚶 Je marche.', '✍️ J’écris.'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Hier, j’ai écouté de la musique.', tiles: ['어제', '음악을', '들었어요'], distractors: ['듣었어요', '음악이'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'À pied ! 🚶' },
        { type: 'text', text: 'La cause de [[걷다]], c’est [[걸어서]] : « en marchant ». Les Coréens l’utilisent pour dire **à pied** :' },
        { type: 'text', text: '[[걸어서 학교에 가요.|t:je vais à l’école à pied]]' },
        { type: 'dialog', lines: [
          { who: '루이', ko: '마리, 어제 뭐 했어요?' },
          { who: '마리', ko: '공원에서 걸었어요. 그리고 음악을 들었어요.' },
          { who: '루이', ko: '내일 같이 걸을까요?' },
          { who: '마리', ko: '좋아요! 걸어서 공원에 가요.' },
        ] },
        { type: 'tip', text: 'Attention : **pas tous** les verbes en ㄷ font ça ! [[받다|t:recevoir]] reste sage : [[받아요]]. Pour l’instant, retiens nos deux voyous : [[듣다]] et [[걷다]].', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’a fait Marie hier ?', choices: ['🚶 Elle a marché au parc et 🎧 écouté de la musique.', '⚽ Elle a joué au foot.', '📖 Elle a lu à la bibliothèque.'], answer: 0, explain: '[[공원에서 걸었어요. 그리고 음악을 들었어요.]]' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🤝 Propose avec [[걷다]] : « On marche ensemble ? »', answer: alts('같이 걸을까요?', '같이 걸을까요'), explain: '[[까요?|p:suggest]] commence par une voyelle (을) → ㄹ : [[걸을까요?]]' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '', after: ' 학교에 가요.', choices: ['걸어서', '걷어서', '걷지만'], answer: 0, translation: 'Je vais à l’école à pied.' } },
    { kind: 'practice', exercise: { type: 'read', ko: '음악을 들어요. 그리고 공원에서 걸어요.', fr: 'J’écoute de la musique. Et je marche au parc.', prompt: 'Mise en pratique : lis à voix haute, en faisant bien couler le ㄹ 🎵' } },
  ],
  interleave: [
    { type: 'type', prompt: '[[비싸다]] + « mais » :', answer: '비싸지만' },
    { type: 'cloze', before: '사과는 좋아하', after: ' 고기는 싫어해요.', choices: ['지만', '아서'], answer: 0, translation: 'J’aime les pommes, mais pas la viande.' },
    { type: 'mcq', prompt: '[[재미있어요]] veut dire…', choices: ['C’est amusant.', 'C’est bon.', 'C’est cher.'], answer: 0 },
    { type: 'type', prompt: '[[쓰다]] → « je peux écrire » :', answer: alts('쓸 수 있어요', '쓸수있어요', '쓸 수있어요', '쓸수 있어요') },
  ],
};

const day43: Lesson = {
  id: 'm3-w1-d3',
  month: 3,
  week: 1,
  day: 43,
  title: 'Le ㅂ qui devient 우',
  summary: '춥다 → 추워요, 쉽다 → 쉬워요, 어렵다 → 어려워요 (et le secret de 더워요), puis 오늘 날씨가 어때요?',
  cards: [
    { id: 'm3-ko-irreg-b', kind: 'grammar', ko: '춥다 → 추워요 · 추웠어요', fr: 'avoir froid, faire froid → il fait froid · il a fait froid — ㅂ devient 우 devant une voyelle', note: '🥶 [[ㅂ]] + voyelle → [[우]] : [[추]] + 우 + 어요 = [[추워요]]. Devant une consonne, il reste : [[춥지만]]. Règle : [[verbes en ㅂ|p:irreg-b]]' },
    { id: 'm3-ko-chuwoyo', kind: 'phrase', ko: '추워요', fr: 'il fait froid ; j’ai froid (poli)', note: '🥶 Infinitif : [[춥다]]. Contraire : [[더워요]].' },
    { id: 'm3-ko-swiwoyo', kind: 'phrase', ko: '쉬워요', fr: 'c’est facile (poli)', note: '😌 Infinitif : [[쉽다]]. Contraire : [[어려워요]].' },
    { id: 'm3-ko-eoryeowoyo', kind: 'phrase', ko: '어려워요', fr: 'c’est difficile (poli)', note: '😵 Infinitif : [[어렵다]]. [[어렵]] + 어요 → [[어려워요]].' },
    { id: 'm3-ko-dowayo', kind: 'phrase', ko: '도와요', fr: 'j’aide (poli)', note: '🤝 Infinitif : [[돕다]]. Exception : [[ㅗ]] → [[와]]. D’où [[도와주세요]] !' },
    { id: 'm3-ko-eottaeyo', kind: 'phrase', ko: '날씨가 어때요?', fr: 'Quel temps fait-il ? (comment est le temps ?)', note: '🌦️ [[어때요?|t:comment est-ce ?]] marche pour tout : [[한국어가 어때요?]]' },
    { id: 'm3-ko-oneul-chuwoyo', kind: 'phrase', ko: '오늘 날씨가 추워요', fr: 'Aujourd’hui, il fait froid.', note: '🧣 Plus nuancé : [[날씨가 좋지만 추워요.|t:il fait beau mais froid]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le mystère de 더워요 🥵' },
        { type: 'text', text: 'Il y a deux semaines, tu as appris [[더워요]] « tel quel ». L’infinitif est [[덥다]] : où est passé le **ㅂ** ? Et d’où vient ce **워** ?' },
        { type: 'tip', text: 'Aujourd’hui, on perce le mystère ! Et lundi, tu as vu [[어렵지만]] : au présent, [[어렵다]] fait la même magie.', mood: 'thinking' },
        { type: 'text', text: 'La règle : quand le **ㅂ** final rencontre une **voyelle**, il **s’efface** et devient **우**. Puis 우 + 어 fusionnent en **워** :' },
        { type: 'table', head: ['Radical', '🎨 ㅂ s’efface → 우', '+ 어요'], rows: [
          ['[[덥]]', '더 + **우**', '[[더워요]] 🥵'],
          ['[[춥]]', '추 + **우**', '[[추워요]] 🥶'],
          ['[[쉽]]', '쉬 + **우**', '[[쉬워요]] 😌'],
          ['[[어렵]]', '어려 + **우**', '[[어려워요]] 😵'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[춥다]] au présent poli :', choices: ['추워요', '춥어요', '추어요'], answer: 0, explain: 'ㅂ → 우, puis 우 + 어요 → [[워요]] : [[추워요]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[쉽다]] au présent poli :', answer: '쉬워요' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[어렵다]] au présent poli :', answer: '어려워요' } },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie l’infinitif à sa forme polie.', pairs: [['덥다', '더워요'], ['춥다', '추워요'], ['쉽다', '쉬워요'], ['어렵다', '어려워요']] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ma fiche couleur 🎨' },
        { type: 'text', text: 'Comme pour le **ㄷ**, tout dépend de ce qui vient après :' },
        { type: 'table', head: ['Après [[춥]]…', 'Forme', ''], rows: [
          ['🔴 une voyelle (어요)', '[[추워요]]', 'il fait froid'],
          ['🔴 une voyelle (었어요)', '[[추웠어요]]', 'il a fait froid'],
          ['🔴 une voyelle (어서)', '[[추워서]]', 'il fait froid, donc…'],
          ['🔴 une voyelle (을 거예요)', '[[추울 거예요]]', 'il fera froid'],
          ['🔵 une consonne (지만)', '[[춥지만]]', 'il fait froid, mais… (le ㅂ reste !)'],
        ] },
        { type: 'tip', text: 'Le truc : au [[passé|p:past]] et pour la [[cause|p:cause]], pars toujours du présent : [[추워요]] → [[추웠어요]] → [[추워서]]. Tu connais déjà ce chemin !', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[어려워요]] → au **passé** :', answer: '어려웠어요' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '', after: ' 집에 있어요.', choices: ['추워서', '춥어서', '춥지만'], answer: 0, translation: 'Il fait froid, donc je reste à la maison.' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '한국어가 ', after: ' 재미있어요.', choices: ['어렵지만', '어려워지만', '어려워서'], answer: 0, translation: 'Le coréen est difficile, mais c’est intéressant.', explain: 'Devant [[지만]] (une consonne), le [[ㅂ]] reste : [[어렵지만]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le petit rebelle : 돕다 🤝' },
        { type: 'text', text: '[[돕다|t:aider]] suit la règle… avec une variante : après [[ㅗ]], le ㅂ devient **오**, et ça donne **와** : [[도와요|t:j’aide]], [[도왔어요|t:j’ai aidé]].' },
        { type: 'text', text: 'Tu le connais déjà : [[도와주세요!|t:aidez-moi]] = [[도와]] + [[주세요|p:request]]. Le mystère est résolu ! 🕵️' },
        { type: 'tip', text: 'Et pas tous les verbes en ㅂ ! [[입다|t:mettre (un vêtement)]] reste sage : [[옷을 입어요]]. Les adjectifs en ㅂ, eux, suivent presque toujours la règle.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[돕다]] au présent poli :', choices: ['도와요', '도워요', '돕아요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La météo du jour 🌡️' },
        { type: 'text', text: 'Activité de la classe : décrire la météo et ce qu’on ressent. La question : [[날씨가 어때요?|t:quel temps fait-il ?]]' },
        { type: 'dialog', lines: [
          { who: '선생님', ko: '오늘 날씨가 어때요?' },
          { who: '마리', ko: '오늘 날씨가 추워요.' },
          { who: '루이', ko: '날씨가 좋지만 조금 추워요.' },
          { who: '선생님', ko: '어제는 더웠어요. 하지만 오늘은 추워요!' },
        ] },
        { type: 'tip', text: '[[추워요]] veut dire « il fait froid »… et aussi « **j’ai** froid ». [[저는 추워요]] : facile !', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'listen', audio: '오늘 날씨가 추워요', choices: ['오늘 날씨가 추워요', '오늘 날씨가 더워요', '오늘 날씨가 좋아요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quel temps faisait-il **hier** ?', choices: ['🥵 chaud', '🥶 froid', '☔ il pleuvait'], answer: 0, explain: '[[어제는 더웠어요.]]' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Il fait beau, mais il fait un peu froid.', tiles: ['날씨가', '좋지만', '조금', '추워요'], distractors: ['춥어요', '좋아서'] } },
    { kind: 'practice', exercise: { type: 'write', prompt: '🌡️ [[오늘 날씨가 어때요?]] Réponds avec un adjectif en ㅂ. [[쓰세요!]]', placeholder: '오늘 날씨가 추워요', mustInclude: [B_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '오늘 날씨가 추워요.', fr: 'Aujourd’hui, il fait froid.', prompt: 'Mise en pratique : dis-le en frissonnant 🥶' } },
  ],
  interleave: [
    { type: 'type', prompt: '[[듣다]] au présent poli :', answer: '들어요' },
    { type: 'mcq', prompt: '🚶 « à pied » :', choices: ['걸어서', '걷어서', '걸지만'], answer: 0 },
    { type: 'cloze', before: '비싸', after: ' 맛있어요.', choices: ['지만', '서'], answer: 0, translation: 'C’est cher, mais c’est bon.' },
    { type: 'cloze', before: '선생님, 질문', after: ' 돼요?', choices: ['해도', '하면'], answer: 0, translation: 'Monsieur / Madame, je peux poser une question ?' },
  ],
};

const TALE: [string, string][] = [
  ['👨‍👦', '[[옛날에 형 놀부와 동생 흥부가 살았어요.]]'],
  ['💰', '[[놀부는 돈이 있었지만 나빴어요.]] [[흥부는 돈이 없었지만 착했어요.]]'],
  ['❄️', '[[겨울에 날씨가 추웠어요.]] [[흥부 가족은 배가 고팠어요.]]'],
  ['🐦', '[[봄에 흥부는 제비를 봤어요.]] [[제비는 다리가 아팠어요.]] [[흥부는 제비를 도왔어요.]]'],
  ['🌱', '[[가을에 제비가 박씨를 줬어요.]] [[흥부는 박씨를 심었어요.]]'],
  ['✨', '[[박이 아주 컸어요.]] [[박 안에 금이 있었어요!]]'],
  ['👂', '[[놀부는 이 이야기를 들었어요.]] [[놀부는 금을 좋아해서 제비 다리를 부러뜨렸어요.]]'],
  ['👹', '[[놀부도 박씨를 심었어요.]] [[하지만 박 안에 도깨비가 있었어요!]]'],
  ['🤝', '[[놀부는 돈이 없었어요.]] [[그래서 흥부는 형을 도왔어요.]] [[그리고 같이 살았어요.]]'],
];

const day44: Lesson = {
  id: 'm3-w1-d4',
  month: 3,
  week: 1,
  day: 44,
  title: 'Mon premier conte : 흥부와 놀부',
  summary: 'Lire un conte coréen célèbre (version simplifiée), repérer -지만, 추웠어요, 들었어요, et comprendre les personnages.',
  cards: [
    { id: 'm3-ko-don', kind: 'vocab', ko: '돈', fr: 'argent (la monnaie)', note: '💰 [[돈이 있어요]] · [[돈이 없어요]]. Les prix se comptent en [[원]].' },
    { id: 'm3-ko-chakhaeyo', kind: 'phrase', ko: '착해요', fr: 'il / elle est gentil(le) (poli)', note: '😇 Infinitif : [[착하다|p:hada]]. [[흥부는 착해요.]]' },
    { id: 'm3-ko-iyagi', kind: 'vocab', ko: '이야기', fr: 'histoire, conte', note: '📖 [[이야기를 들었어요.|t:j’ai entendu l’histoire]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'L’heure du conte 📖' },
        { type: 'tip', text: 'Aujourd’hui, comme les élèves coréens, tu lis un **vrai conte** : [[흥부와 놀부|t:Heungbu et Nolbu]]. Tous les petits Coréens le connaissent !', mood: 'happy' },
        { type: 'text', text: 'Deux frères : [[놀부]], le grand frère, et [[흥부]], le petit frère. Le texte est **simplifié**, avec un glossaire en marge. D’abord, les mots nouveaux (pas de carte pour la plupart : il suffit de les **reconnaître**) :' },
        { type: 'table', head: ['', 'Mot', 'Sens'], rows: [
          ['🕰️', '[[옛날에]]', 'il était une fois'],
          ['🏠', '[[살았어요]]', 'ils vivaient ([[살다]])'],
          ['➕', '[[와|t:et]]', 'et (entre deux noms)'],
          ['💰', '[[돈]]', 'argent'],
          ['😇', '[[착했어요]]', 'il était gentil ([[착하다]])'],
          ['❄️ 🌸 🍂', '[[겨울]] · [[봄]] · [[가을]]', 'hiver · printemps · automne'],
          ['🐦', '[[제비]]', 'hirondelle'],
          ['🦵', '[[다리]]', 'patte, jambe'],
          ['🌱', '[[박씨]] · [[박]]', 'graine de courge · courge'],
          ['🎁', '[[줬어요]]', 'a donné ([[주다]], comme [[주세요]])'],
          ['🪴', '[[심었어요]]', 'a planté'],
          ['⬛', '[[안|t:dedans]]', 'dedans (comme [[위]], [[아래]], [[옆]])'],
          ['🪙', '[[금]]', 'or'],
          ['💥', '[[부러뜨렸어요]]', 'a cassé'],
          ['👹', '[[도깨비]]', 'gobelins (esprits farceurs)'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Le glossaire en images : relie.', pairs: [['돈', '💰'], ['제비', '🐦'], ['금', '🪙'], ['도깨비', '👹'], ['겨울', '❄️']] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: '흥부와 놀부' },
        { type: 'text', text: 'Lis doucement. Touche une phrase pour l’entendre. Les verbes sont au [[passé|p:past]] : c’est un conte !' },
        { type: 'table', head: ['', ''], rows: TALE.map(([emoji, line]) => [emoji, line]) },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**Question 1** — [[흥부는 어땠어요?|t:comment était Heungbu ?]]', choices: ['돈이 없었지만 착했어요.', '돈이 있었지만 나빴어요.', '돈이 없어서 나빴어요.'], answer: 0, explain: '[[흥부는 돈이 없었지만 착했어요.]] Pauvre, mais gentil.' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**Question 2** — Pourquoi Nolbu a-t-il cassé la patte de l’hirondelle ?', choices: ['🪙 Parce qu’il aimait l’or.', '🥶 Parce qu’il avait froid.', '🍚 Parce qu’il avait faim.'], answer: 0, explain: '[[놀부는 금을 좋아해서…]] Il voulait de l’or, comme son frère.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La chasse aux formes 🔍' },
        { type: 'text', text: 'Méthode de la classe : **surligner** les verbes. Voici ceux de la semaine, cachés dans le conte :' },
        { type: 'table', head: ['Dans le conte', 'Infinitif', 'Pourquoi ?'], rows: [
          ['[[있었지만]] · [[없었지만]]', '[[있다]] · [[없다]]', '⚖️ passé + [[지만|p:contrast]]'],
          ['[[추웠어요]]', '[[춥다]]', '🥶 ㅂ → 우 ([[ㅂ|p:irreg-b]])'],
          ['[[도왔어요]]', '[[돕다]]', '🤝 ㅂ → 오 ([[ㅂ|p:irreg-b]])'],
          ['[[들었어요]]', '[[듣다]]', '👂 ㄷ → ㄹ ([[ㄷ|p:irreg-d]])'],
          ['[[하지만]]', '', '⚖️ « mais » en début de phrase'],
          ['[[좋아해서]]', '[[좋아하다]]', '💡 [[cause|p:cause]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Range les formes du conte.', buckets: ['⚖️ opposition (지만)', '🔀 verbe irrégulier'], items: [
      { text: '있었지만', bucket: 0 }, { text: '없었지만', bucket: 0 }, { text: '하지만', bucket: 0 },
      { text: '추웠어요', bucket: 1 }, { text: '들었어요', bucket: 1 }, { text: '도왔어요', bucket: 1 },
    ] } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[추웠어요]] : quel est l’infinitif ?', answer: '춥다' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[들었어요]] : quel est l’infinitif ?', answer: '듣다' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Pourquoi ? 🤔' },
        { type: 'text', text: 'Activité de la classe : réfléchir aux **motivations** des personnages. Réponds avec une [[cause|p:cause]] en **-서** !' },
        { type: 'text', text: '[[흥부는 착해서 제비를 도왔어요.|t:Heungbu a aidé l’hirondelle parce qu’il était gentil]]' },
        { type: 'text', text: '[[놀부는 금을 좋아해서 제비 다리를 부러뜨렸어요.|t:Nolbu a cassé la patte parce qu’il aimait l’or]]' },
        { type: 'tip', text: 'La morale : la **gentillesse** est récompensée, la **cupidité** est punie. Et à la fin, [[흥부]] aide quand même son grand frère… [[착해요!]]', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '[[흥부는 왜 제비를 도왔어요?]]', before: '흥부는 ', after: ' 제비를 도왔어요.', choices: ['착해서', '배가 고파서', '추워서'], answer: 0, translation: 'Heungbu a aidé l’hirondelle parce qu’il était gentil.' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Nolbu avait de l’argent, mais il était méchant.', tiles: ['놀부는', '돈이', '있었지만', '나빴어요'], distractors: ['있어서', '착했어요'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '흥부는 돈이 없었지만 착했어요. 그래서 제비를 도왔어요.', fr: 'Heungbu n’avait pas d’argent, mais il était gentil. Donc il a aidé l’hirondelle.', prompt: 'Raconte la fin à voix haute, comme un conteur 📖' } },
  ],
  interleave: [
    { type: 'type', prompt: '[[춥다]] au présent poli :', answer: '추워요' },
    { type: 'mcq', prompt: '[[날씨가 어때요?]] veut dire…', choices: ['Quel temps fait-il ?', 'Il fait beau ?', 'Il pleut ?'], answer: 0 },
    { type: 'cloze', before: '어제 음악을 ', after: '.', choices: ['들었어요', '듣었어요'], answer: 0, translation: 'Hier, j’ai écouté de la musique.' },
    { type: 'type', prompt: '[[쉽다]] au présent poli :', answer: '쉬워요' },
  ],
};

const DICTATION = ['한국어가 어렵지만 재미있어요', '음악을 들어요', '오늘 날씨가 추워요', '어제 공원에서 걸었어요', '비싸지만 맛있어요'];

const day45: Lesson = {
  id: 'm3-w1-d5',
  month: 3,
  week: 1,
  day: 45,
  title: 'Bilan de la semaine & évaluation n°9',
  summary: 'Les dominos des verbes irréguliers, une dictée, la petite évaluation n°9 et le journal de Nabi.',
  cards: [],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ta semaine en un coup d’œil' },
        { type: 'table', head: ['Tu sais…', 'Exemple'], rows: [
          ['**opposer** deux idées ([[지만|p:contrast]])', '[[비싸지만 맛있어요]] · [[하지만]]'],
          ['conjuguer les verbes en **ㄷ** ([[ㄷ → ㄹ|p:irreg-d]])', '[[듣다]] → [[들어요]] · [[걷다]] → [[걸어요]]'],
          ['conjuguer les adjectifs en **ㅂ** ([[ㅂ → 우|p:irreg-b]])', '[[춥다]] → [[추워요]] · [[어렵다]] → [[어려워요]] · [[돕다]] → [[도와요]]'],
          ['parler de la **météo**', '[[날씨가 어때요?]] · [[날씨가 좋지만 추워요.]]'],
          ['lire un **conte**', '[[흥부와 놀부]]'],
        ] },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les dominos 🁫' },
        { type: 'text', text: 'Jeu de la semaine : chaque domino a un **infinitif** d’un côté… trouve sa forme conjuguée !' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: '🁫 Assemble les dominos.', pairs: [['듣다', '들어요'], ['걷다', '걸어요'], ['춥다', '추워요'], ['쉽다', '쉬워요'], ['돕다', '도와요']] } },
    { kind: 'practice', exercise: { type: 'match', prompt: '🁫 Encore ! Cette fois au passé.', pairs: [['듣다', '들었어요'], ['덥다', '더웠어요'], ['어렵다', '어려웠어요'], ['걷다', '걸었어요']] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La dictée ✍️' },
        { type: 'text', text: '[[들으세요!]] Puis [[쓰세요!]] Cinq phrases avec **-지만**, des verbes en **ㄷ** et des adjectifs en **ㅂ**.' },
      ],
    },
    ...DICTATION.map((s, i) => ({
      kind: 'practice' as const,
      exercise: { type: 'type' as const, prompt: `Dictée ${i + 1}/${DICTATION.length}`, audio: s, answer: s },
    })),
    { kind: 'learn', blocks: [{ type: 'tip', text: '**Grammaire de la classe** — Conjugue à la forme en 요, au présent puis au passé.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Touche une case vide, puis écris.', head: ['Infinitif', 'Présent', 'Passé'], rows: [
      ['듣다', blank('들어요'), '들었어요'],
      ['걷다', '걸어요', blank('걸었어요')],
      ['춥다', blank('추워요'), '추웠어요'],
      ['어렵다', blank('어려워요'), blank('어려웠어요')],
      ['돕다', blank('도와요'), '도왔어요'],
    ] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Évaluation n°9' },
        { type: 'text', text: 'Trois parties, toujours sans chrono ni piège. Chaque erreur reviendra simplement en révision.' },
        { type: 'table', head: ['Partie', 'Contenu'], rows: [
          ['A', 'Conjugaison des verbes irréguliers'],
          ['B', 'Relier deux phrases avec [[지만|p:contrast]]'],
          ['C', 'À l’oral : la météo'],
        ] },
        { type: 'tip', text: '**A — Complète la transformation.**', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'type', prompt: '**A · 1/3** — [[듣다]] + 어요 →', answer: '들어요' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '**A · 2/3** — [[춥다]] + 어요 →', answer: '추워요' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '**A · 3/3** — [[어렵다]] + 어요 →', answer: '어려워요' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'tip', text: '**B — Relie les deux phrases en une seule.**', mood: 'encourage' },
        { type: 'text', text: 'Deux mots nouveaux : [[약|t:médicament]] et [[효과|t:effet]]. Et [[쓰다]] a un **deuxième** sens : « être amer » ! [[약이 써요.|t:le médicament est amer]]' },
        { type: 'table', head: ['🟥', '🟦'], rows: [['[[약이 써요.|t:le médicament est amer]]', '[[효과가 좋아요.|t:il est efficace]]']] },
      ],
    },
    { kind: 'practice', exercise: { type: 'order', prompt: '**B · 1/2**', translation: 'Le médicament est amer, mais il est efficace.', tiles: ['약이', '쓰지만', '효과가', '좋아요'], distractors: ['써지만', '써서'], explain: 'Devant [[지만]], le [[ㅡ]] reste : [[쓰지만]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '**B · 2/2** — [[사과가 비싸요.]] + [[맛있어요.]] → une seule phrase :', answer: alts('사과가 비싸지만 맛있어요') } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**C — À l’oral.** Le professeur te demande : [[오늘 날씨가 어때요?]] Réponds avec un adjectif en **ㅂ** (et un **-지만**, si tu oses !).', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'write', prompt: '**C · 1/2** — Prépare ta réponse : [[오늘 날씨가 어때요?]]', placeholder: '날씨가 좋지만 추워요', mustInclude: [B_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '날씨가 좋지만 조금 추워요.', fr: 'Il fait beau, mais il fait un peu froid.', prompt: '**C · 2/2** — Dis ta réponse à voix haute, puis écoute le modèle.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le journal de Nabi 📔' },
        { type: 'text', text: 'Un journal **entièrement en coréen**. Touche une ligne pour l’entendre.' },
        { type: 'dialog', lines: [
          { who: '📔', ko: '어제 날씨가 추웠어요.' },
          { who: '📔', ko: '하지만 나비는 걸어서 학교에 갔어요.' },
          { who: '📔', ko: '교실에서 선생님이 이야기를 읽었어요. 나비는 이야기를 들었어요.' },
          { who: '📔', ko: '흥부와 놀부! 조금 어려웠지만 재미있었어요.' },
          { who: '📔', ko: '그래서 오늘도 한국어를 공부할 거예요!' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[나비는 어떻게 학교에 갔어요?|t:comment Nabi est-il allé à l’école ?]]', choices: ['걸어서', '친구와', '우산을 써서'], answer: 0, explain: '[[하지만 나비는 걸어서 학교에 갔어요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’a pensé Nabi du conte ?', choices: ['Un peu difficile, mais amusant.', 'Facile et ennuyeux.', 'Trop difficile.'], answer: 0, explain: '[[조금 어려웠지만 재미있었어요.]]' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Bravo, semaine 9 terminée ! 🎉' },
        { type: 'text', text: 'Tu sais maintenant **nuancer** avec [[지만|p:contrast]], tu ne trébuches plus sur [[들어요]] ni sur [[추워요]], et tu as lu ton **premier conte** coréen !' },
        { type: 'tip', text: '[[한국어가 어렵지만 재미있어요!]] ✨ À demain !', mood: 'happy' },
      ],
    },
  ],
};

export const m3w1: Lesson[] = [day41, day42, day43, day44, day45];
