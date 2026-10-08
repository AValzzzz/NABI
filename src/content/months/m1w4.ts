import type { Lesson } from '../types';

const day16: Lesson = {
  id: 'm1-w4-d1',
  month: 1,
  week: 4,
  day: 16,
  title: 'Grand, petit, bien, mauvais',
  summary: '커요, 작아요, 좋아요, 나빠요 : en coréen, les adjectifs sont des verbes !',
  cards: [
    { id: 'm1-ko-keoyo', kind: 'phrase', ko: '커요', fr: 'c’est grand (poli)', note: '🙆 Infinitif : [[크다]]. Le [[ㅡ]] s’efface : [[크]] + 어요 → [[커요]].' },
    { id: 'm1-ko-jagayo', kind: 'phrase', ko: '작아요', fr: 'c’est petit (poli)', note: '🤏 Infinitif : [[작다]]. Liaison : [[자가요]].' },
    { id: 'm1-ko-joayo', kind: 'phrase', ko: '좋아요', fr: 'c’est bien, c’est bon (poli)', note: '👍 Infinitif : [[좋다]]. Le [[ㅎ]] ne s’entend pas : [[조아요]]. [[네, 좋아요!|t:oui, d’accord !]]' },
    { id: 'm1-ko-nappayo', kind: 'phrase', ko: '나빠요', fr: 'c’est mauvais (poli)', note: '👎 Infinitif : [[나쁘다]]. Le [[ㅡ]] s’efface : [[나쁘]] + 아요 → [[나빠요]].' },
    { id: 'm1-ko-adj', kind: 'grammar', ko: '가방이 커요', fr: 'Le sac est grand. (nom + 이/가 + adjectif)', note: 'Pas de [[이에요|p:yeyo]] : l’adjectif est un [[verbe|p:adjective]], il se conjugue tout seul.' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les adjectifs sont des verbes !' },
        { type: 'text', text: 'En français, on dit « le sac **est** grand ». En coréen, pas besoin de « être » : « grand » est lui-même un verbe, [[크다|t:être grand]]. Il se conjugue comme [[먹다]] et se place **à la fin** de la phrase.' },
        { type: 'table', head: ['Infinitif', 'Poli', 'Sens', 'Geste'], rows: [
          ['[[크다]]', '[[커요]]', 'c’est grand', '🙆 grands bras'],
          ['[[작다]]', '[[작아요]]', 'c’est petit', '🤏 mains serrées'],
          ['[[좋다]]', '[[좋아요]]', 'c’est bien, bon', '👍 pouce levé'],
          ['[[나쁘다]]', '[[나빠요]]', 'c’est mauvais', '👎 pouce baissé'],
        ] },
        { type: 'tip', text: '**Fais le geste à chaque fois** que tu dis le mot : ouvre grand les bras pour [[커요]], rapproche tes mains pour [[작아요]]. Ton corps retient avec toi !', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque mot à son geste.', pairs: [['커요', '🙆'], ['작아요', '🤏'], ['좋아요', '👍'], ['나빠요', '👎']] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '커요', choices: ['커요', '작아요', '좋아요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '나빠요', choices: ['나빠요', '커요', '좋아요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La conjugaison, sans surprise' },
        { type: 'text', text: 'C’est la règle du [[présent|p:present]] que tu connais : on enlève [[다]], puis **-아요** après [[ㅏ]] ou [[ㅗ]], sinon **-어요**.' },
        { type: 'compose', items: [
          { parts: ['작', '아요'], result: '작아요' },
          { parts: ['좋', '아요'], result: '좋아요' },
        ] },
        { type: 'liaison', items: [
          { written: '작아요', spoken: '자가요', fr: 'c’est petit' },
          { written: '좋아요', spoken: '조아요', fr: 'c’est bien' },
        ] },
        { type: 'text', text: 'Dans [[좋아요]], le [[ㅎ]] devient **muet** devant une voyelle : on dit [[조아요]].' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le ㅡ qui s’efface' },
        { type: 'text', text: 'Quand le verbe finit par [[ㅡ]], ce [[ㅡ]] **disparaît** et laisse sa place à la terminaison :' },
        { type: 'compose', items: [
          { parts: ['크', '어요'], result: '커요' },
          { parts: ['나쁘', '아요'], result: '나빠요' },
        ] },
        { type: 'text', text: 'Pour [[나쁘다]], c’est la syllabe **d’avant** qui décide : [[나]] contient [[ㅏ]] → **-아요**. Pour [[크다]], il n’y a pas de syllabe avant → **-어요**.' },
        { type: 'tip', text: 'Les élèves coréens apprennent aussi [[많다|t:être nombreux]] et [[적다|t:être peu nombreux]]. On les verra plus tard : quatre adjectifs, c’est parfait pour commencer !', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quel est l’infinitif de [[커요]] ?', choices: ['크다', '커다', '카다'], answer: 0, explain: 'Le [[ㅡ]] de [[크]] s’efface devant [[어요]].' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Comment se prononce [[좋아요]] ?', choices: ['[조아요]', '[조하요]', '[졷아요]'], answer: 0, explain: 'Le [[ㅎ]] final est muet devant une voyelle.' } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Conjugue au présent poli : [[작다]] →', answer: '작아요' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Décrire un objet' },
        { type: 'text', text: 'L’objet que l’on décrit prend la particule de sujet [[이|p:subject]] / [[가|p:subject]], puis vient l’adjectif.' },
        { type: 'breakdown', segments: [
          { ko: '연필', role: 'subject', gloss: 'crayon', particle: { ko: '이', key: 'subject' } },
          { ko: '커요', role: 'verb', gloss: 'est grand' },
        ], translation: 'Le crayon est grand.', note: 'Jamais « 커예요 » ni « 커입니다 » : [[커요]] est déjà un [[verbe complet|p:adjective]].' },
        { type: 'table', head: ['Phrase', 'Sens'], rows: [
          ['[[가방이 커요]]', 'Le sac est grand.'],
          ['[[의자가 작아요]]', 'La chaise est petite.'],
          ['[[책이 좋아요]]', 'Le livre est bien.'],
        ] },
        { type: 'tip', text: '[[좋아요]] sert aussi à dire « d’accord ! ». Essaie : [[네, 좋아요!]]', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', before: '가방', after: ' 커요.', choices: ['이', '가', '을'], answer: 0, translation: 'Le sac est grand.', explain: '[[가방]] finit par une consonne → [[이|p:subject]].' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '의자', after: ' 작아요.', choices: ['가', '이', '를'], answer: 0, translation: 'La chaise est petite.', explain: '[[의자]] finit par une voyelle → [[가|p:subject]].' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🐘 Un éléphant ! Tu dis :', choices: ['커요', '작아요', '나빠요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🐜 Une fourmi ! Tu dis :', choices: ['작아요', '커요', '좋아요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que veut dire [[연필이 나빠요]] ?', choices: ['Le crayon est mauvais.', 'Le crayon est petit.', 'Le crayon est sur le bureau.'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Le cahier est petit.', tiles: ['공책이', '작아요'], distractors: ['공책을', '작아예요'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ta trousse ✏️' },
        { type: 'text', text: 'Comme en classe coréenne, prends tes vraies affaires : un crayon, un cahier, ton sac… Pour chacun, dis à voix haute s’il est grand ou petit, **avec le geste**.' },
        { type: 'dialog', lines: [
          { who: 'Marie', ko: '이게 뭐예요?', fr: 'Qu’est-ce que c’est ?' },
          { who: 'Louis', ko: '가방이에요. 가방이 커요!', fr: 'C’est un sac. Le sac est grand !' },
          { who: 'Marie', ko: '연필이 작아요.', fr: 'Le crayon est petit.' },
          { who: 'Louis', ko: '네, 좋아요!', fr: 'Oui, c’est bien !' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Écris : « Le livre est grand. »', answer: ['책이 커요'] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Regarde ton bureau : décris un objet avec [[커요]], [[작아요]], [[좋아요]] ou [[나빠요]].', placeholder: '공책이 작아요' } },
  ],
  interleave: [
    { type: 'mcq', prompt: '[[연필이 어디에 있어요?]] ✏️⬇️📕', choices: ['책 아래에 있어요', '책 위에 있어요', '책 옆에 있어요'], answer: 0 },
    { type: 'listen', audio: '사십육', choices: ['사십육', '육십사', '사육'], answer: 0 },
    { type: 'cloze', before: '오늘은 수요일', after: '.', choices: ['이에요', '예요', '을'], answer: 0, translation: 'Aujourd’hui, c’est mercredi.' },
    { type: 'mcq', prompt: '[[가방이 있어요?]] — Tu n’as pas de sac. Tu réponds :', choices: ['아니요, 없어요', '네, 있어요', '네, 없어요'], answer: 0 },
  ],
};

const day17: Lesson = {
  id: 'm1-w4-d2',
  month: 1,
  week: 4,
  day: 17,
  title: 'J’aime 😊, je n’aime pas ☹️',
  summary: '저는 사과를 좋아해요 : dire ce que l’on aime avec 을/를 + 좋아해요 / 싫어해요.',
  cards: [
    { id: 'm1-ko-joahaeyo', kind: 'phrase', ko: '좋아해요', fr: 'j’aime (poli)', note: '😊 Infinitif : [[좋아하다]]. Se dit [[조아해요]]. [[사과를 좋아해요|t:j’aime les pommes]]' },
    { id: 'm1-ko-sireohaeyo', kind: 'phrase', ko: '싫어해요', fr: 'je n’aime pas, je déteste (poli)', note: '☹️ Infinitif : [[싫어하다]]. Se dit [[시러해요]].' },
    { id: 'm1-ko-sagwa', kind: 'vocab', ko: '사과', fr: 'pomme', note: '🍎' },
    { id: 'm1-ko-uyu', kind: 'vocab', ko: '우유', fr: 'lait', note: '🥛' },
    { id: 'm1-ko-gogi', kind: 'vocab', ko: '고기', fr: 'viande', note: '🍖' },
    { id: 'm1-ko-like', kind: 'grammar', ko: '저는 사과를 좋아해요', fr: 'J’aime les pommes. (objet + 을/를 + 좋아해요)', note: 'Ce qu’on aime est l’**objet** : [[을|p:object]] / [[를|p:object]]. [[저는 고기를 싫어해요|t:je n’aime pas la viande]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'J’aime 😊 · Je n’aime pas ☹️' },
        { type: 'text', text: 'Deux nouveaux verbes : [[좋아해요|t:j’aime]] et [[싫어해요|t:je n’aime pas]]. Ce que l’on aime, c’est l’**objet** du verbe : il prend [[을|p:object]] / [[를|p:object]], comme dans [[물을 마셔요]].' },
        { type: 'breakdown', segments: [
          { ko: '저', role: 'topic', gloss: 'moi', particle: { ko: '는', key: 'topic' } },
          { ko: '사과', role: 'object', gloss: 'pomme', particle: { ko: '를', key: 'object' } },
          { ko: '좋아해요', role: 'verb', gloss: 'aime' },
        ], translation: 'J’aime les pommes.', note: 'Toujours le même ordre : **qui** → **quoi** → **verbe**.' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Au menu 🍽️' },
        { type: 'letters', items: [
          { char: '사과', mnemonic: '🍎 pomme' },
          { char: '우유', mnemonic: '🥛 lait' },
          { char: '고기', mnemonic: '🍖 viande' },
        ] },
        { type: 'text', text: 'Et tu connais déjà [[밥]] 🍚 et [[물]] 💧 !' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque aliment à son image.', pairs: [['사과', '🍎'], ['우유', '🥛'], ['고기', '🍖'], ['밥', '🍚'], ['물', '💧']] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '우유', choices: ['우유', '오이', '유월'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Écris le mot que tu entends :', audio: '고기', answer: '고기' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: '을 ou 를 ?' },
        { type: 'table', head: ['Le mot finit par…', 'Particule', 'Exemples'], rows: [
          ['une voyelle', '[[를|p:object]]', '[[사과를]] · [[우유를]] · [[고기를]]'],
          ['une consonne', '[[을|p:object]]', '[[밥을]] · [[물을]] · [[꽃을]]'],
        ] },
        { type: 'tip', text: 'Les trois nouveaux aliments finissent tous par une voyelle : c’est toujours [[를|p:object]]. Facile !', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'sort', prompt: '을 ou 를 ?', buckets: ['을', '를'], items: [
      { text: '밥', bucket: 0 }, { text: '물', bucket: 0 }, { text: '책', bucket: 0 }, { text: '꽃', bucket: 0 },
      { text: '사과', bucket: 1 }, { text: '우유', bucket: 1 }, { text: '고기', bucket: 1 }, { text: '한국어', bucket: 1 },
    ], explain: 'Consonne finale → [[을|p:object]] ; voyelle finale → [[를|p:object]].' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '우유', after: ' 좋아해요.', choices: ['를', '을', '가'], answer: 0, translation: 'J’aime le lait.' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '밥', after: ' 좋아해요.', choices: ['을', '를', '이'], answer: 0, translation: 'J’aime le riz.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les verbes en 하다' },
        { type: 'text', text: '[[좋아하다]] et [[싫어하다]] finissent par [[하다|p:hada]]. Pour eux, une règle spéciale : [[하다]] devient [[해요]].' },
        { type: 'table', head: ['Infinitif', 'Poli'], rows: [
          ['[[좋아하다]]', '[[좋아해요]]'],
          ['[[싫어하다]]', '[[싫어해요]]'],
        ] },
        { type: 'liaison', items: [
          { written: '좋아해요', spoken: '조아해요', fr: 'j’aime' },
          { written: '싫어해요', spoken: '시러해요', fr: 'je n’aime pas' },
        ] },
        { type: 'tip', text: 'Bonne nouvelle : des centaines de verbes coréens finissent par [[하다|p:hada]]. Tu connais déjà leur conjugaison !', mood: 'happy' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: '좋아요 ou 좋아해요 ?' },
        { type: 'text', text: 'Attention aux faux jumeaux :' },
        { type: 'table', head: ['Mot', 'Sens', 'Exemple'], rows: [
          ['[[좋아요]]', 'c’est bien (adjectif)', '[[책이 좋아요]]'],
          ['[[좋아해요]]', 'j’aime (+ objet)', '[[책을 좋아해요]]'],
        ] },
        { type: 'tip', text: 'Petit indice : [[좋아해요]] va avec [[을|p:object]] / [[를|p:object]], [[좋아요]] avec [[이|p:subject]] / [[가|p:subject]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '😊 + 🍎', choices: ['사과를 좋아해요', '사과를 싫어해요', '사과가 커요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '☹️ + 🥛', choices: ['우유를 싫어해요', '우유를 좋아해요', '우유를 마셔요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quelle phrase est correcte ?', choices: ['저는 고기를 좋아해요', '저는 고기가 좋아해요', '저는 고기를 좋아요'], answer: 0, explain: '[[좋아해요]] demande un objet : [[고기를]].' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'J’aime la viande.', tiles: ['저는', '고기를', '좋아해요'], distractors: ['고기가', '좋아요'] } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Écris : « Je n’aime pas le lait. »', answer: ['우유를 싫어해요', '저는 우유를 싫어해요'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le sondage de la classe 📋' },
        { type: 'text', text: 'En classe, chacun interroge ses camarades sur leurs aliments préférés. Pour poser la question, il suffit de **monter la voix** à la fin.' },
        { type: 'dialog', lines: [
          { who: 'Marie', ko: '루이, 사과를 좋아해요?', fr: 'Louis, tu aimes les pommes ?' },
          { who: 'Louis', ko: '네, 좋아해요!', fr: 'Oui, j’aime !' },
          { who: 'Marie', ko: '우유를 좋아해요?', fr: 'Tu aimes le lait ?' },
          { who: 'Louis', ko: '아니요, 싫어해요. 고기를 좋아해요.', fr: 'Non, je n’aime pas. J’aime la viande.' },
        ] },
        { type: 'tip', text: '[[싫어해요]] est assez fort, comme « je déteste ». Entre amis, ça va. À table chez quelqu’un, on reste plus doux !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'D’après le sondage, qu’est-ce que Louis **n’aime pas** ?', choices: ['🥛 le lait', '🍎 les pommes', '🍖 la viande'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'read', ko: '저는 사과를 좋아해요.', fr: 'J’aime les pommes.', prompt: 'Lis à voix haute **avec un grand sourire** 😊, puis vérifie.' } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'À toi ! Écris un aliment (ou une chose) que **tu aimes**.', placeholder: '저는 사과를 좋아해요', mustInclude: ['좋아해요'] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Et un aliment (ou une chose) que **tu n’aimes pas**.', placeholder: '저는 우유를 싫어해요', mustInclude: ['싫어해요'] } },
  ],
  interleave: [
    { type: 'mcq', prompt: '🙆 Tu ouvres grand les bras. Tu dis :', choices: ['커요', '작아요', '나빠요'], answer: 0 },
    { type: 'cloze', before: '의자', after: ' 작아요.', choices: ['가', '이', '를'], answer: 0, translation: 'La chaise est petite.' },
    { type: 'listen', audio: '칠월 십일', choices: ['칠월 십일', '십일월 칠일', '칠월 일일'], answer: 0 },
    { type: 'mcq', prompt: 'Que veut dire [[이게 얼마예요?]] ?', choices: ['Combien coûte ceci ?', 'Qu’est-ce que c’est ?', 'Où est-ce ?'], answer: 0 },
  ],
};

const day18: Lesson = {
  id: 'm1-w4-d3',
  month: 1,
  week: 4,
  day: 18,
  title: 'Ma famille',
  summary: 'Père, mère, frères et sœurs — et 동생이 있어요 ? pour en parler.',
  cards: [
    { id: 'm1-ko-gajok', kind: 'vocab', ko: '가족', fr: 'famille', note: '👨‍👩‍👧‍👦' },
    { id: 'm1-ko-abeoji', kind: 'vocab', ko: '아버지', fr: 'père', note: '👨 En famille, on dit souvent [[아빠|t:papa]].' },
    { id: 'm1-ko-eomeoni', kind: 'vocab', ko: '어머니', fr: 'mère', note: '👩 En famille, on dit souvent [[엄마|t:maman]].' },
    { id: 'm1-ko-hyeong', kind: 'vocab', ko: '형', fr: 'grand frère (dit par un garçon)', note: '👦 Une fille dit [[오빠]].' },
    { id: 'm1-ko-oppa', kind: 'vocab', ko: '오빠', fr: 'grand frère (dit par une fille)', note: '👧 Un garçon dit [[형]].' },
    { id: 'm1-ko-nuna', kind: 'vocab', ko: '누나', fr: 'grande sœur (dit par un garçon)', note: '👦 Une fille dit [[언니]].' },
    { id: 'm1-ko-eonni', kind: 'vocab', ko: '언니', fr: 'grande sœur (dit par une fille)', note: '👧 Un garçon dit [[누나]].' },
    { id: 'm1-ko-dongsaeng', kind: 'vocab', ko: '동생', fr: 'petit frère, petite sœur', note: 'Le même mot pour tous, garçon ou fille.' },
    { id: 'm1-ko-dongsaeng-isseoyo', kind: 'phrase', ko: '동생이 있어요?', fr: 'As-tu un petit frère ou une petite sœur ?', note: '[[네, 있어요|t:oui]] · [[아니요, 없어요|t:non]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La famille : 가족' },
        { type: 'letters', items: [
          { char: '아버지', mnemonic: '👨 père' },
          { char: '어머니', mnemonic: '👩 mère' },
          { char: '동생', mnemonic: '🧒 petit frère, petite sœur' },
        ] },
        { type: 'text', text: '[[동생]] désigne un frère **ou** une sœur plus jeune : en coréen, on dit d’abord **qui est le plus âgé**, avant de dire garçon ou fille !' },
        { type: 'tip', text: 'À la maison, les enfants coréens disent plutôt [[엄마|t:maman]] et [[아빠|t:papa]]. [[아버지]] et [[어머니]] sont les formes polies, pour l’école.', mood: 'happy' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les aînés : ça dépend de qui parle !' },
        { type: 'text', text: 'Pour un grand frère ou une grande sœur, le mot change selon que **c’est un garçon ou une fille qui parle** :' },
        { type: 'table', head: ['', 'Louis dit 👦', 'Marie dit 👧'], rows: [
          ['grand frère', '[[형]]', '[[오빠]]'],
          ['grande sœur', '[[누나]]', '[[언니]]'],
          ['petit frère / sœur', '[[동생]]', '[[동생]]'],
        ] },
        { type: 'tip', text: 'Curiosité : en Corée, on appelle aussi ses amis plus âgés [[형]], [[오빠]], [[누나]] ou [[언니]]. Ce sont des mots de **tendresse et de respect** !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque membre de la famille.', pairs: [['아버지', '👨 père'], ['어머니', '👩 mère'], ['동생', '🧒 petit frère, petite sœur'], ['가족', '👨‍👩‍👧 famille']] } },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Qui utilise ce mot pour un aîné ?', buckets: ['Louis 👦', 'Marie 👧'], items: [
      { text: '형', bucket: 0 }, { text: '누나', bucket: 0 }, { text: '오빠', bucket: 1 }, { text: '언니', bucket: 1 },
    ], explain: 'Garçon : [[형]], [[누나]]. Fille : [[오빠]], [[언니]].' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Marie 👧 parle de son **grand frère** :', choices: ['오빠', '형', '동생'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Louis 👦 parle de sa **grande sœur** :', choices: ['누나', '언니', '어머니'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '어머니', choices: ['어머니', '아버지', '언니'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'As-tu… ? 있어요?' },
        { type: 'text', text: 'Tu te souviens de [[공책이 있어요?|t:tu as un cahier ?]] Pour la famille, c’est **exactement pareil** : on ne « possède » pas un frère, il **est là** pour nous.' },
        { type: 'breakdown', segments: [
          { ko: '동생', role: 'subject', gloss: 'petit frère / sœur', particle: { ko: '이', key: 'subject' } },
          { ko: '있어요?', role: 'verb', gloss: 'il y a ?' },
        ], translation: 'As-tu un petit frère ou une petite sœur ?' },
        { type: 'breakdown', segments: [
          { ko: '저', role: 'topic', gloss: 'moi', particle: { ko: '는', key: 'topic' } },
          { ko: '형', role: 'subject', gloss: 'grand frère', particle: { ko: '이', key: 'subject' } },
          { ko: '있어요', role: 'verb', gloss: 'il y a' },
        ], translation: 'J’ai un grand frère.', note: '[[는|p:topic]] pour « moi » (de qui on parle), [[이|p:subject]] pour ce qui **existe**.' },
        { type: 'table', head: ['Le mot finit par…', 'On dit'], rows: [
          ['une consonne', '[[형이 있어요]] · [[동생이 있어요]]'],
          ['une voyelle', '[[누나가 있어요]] · [[언니가 있어요]] · [[오빠가 있어요]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', before: '누나', after: ' 있어요.', choices: ['가', '이', '를'], answer: 0, translation: 'J’ai une grande sœur.', explain: '[[누나]] finit par une voyelle → [[가|p:subject]].' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '동생', after: ' 있어요?', choices: ['이', '가', '은'], answer: 0, translation: 'As-tu un petit frère ou une petite sœur ?' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[동생이 있어요?]] — Tu n’as pas de petit frère ni de petite sœur. Tu réponds :', choices: ['아니요, 없어요', '네, 있어요', '아니요, 있어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'order', translation: 'J’ai une grande sœur. (Marie parle)', tiles: ['저는', '언니가', '있어요'], distractors: ['누나가', '언니를'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Dans la cour de récré' },
        { type: 'dialog', lines: [
          { who: 'Marie', ko: '루이, 동생이 있어요?', fr: 'Louis, tu as un petit frère ou une petite sœur ?' },
          { who: 'Louis', ko: '네, 있어요. 누나가 있어요.', fr: 'Oui. Et j’ai une grande sœur.' },
          { who: 'Louis', ko: '마리, 동생이 있어요?', fr: 'Marie, tu as un petit frère ou une petite sœur ?' },
          { who: 'Marie', ko: '아니요, 없어요. 오빠가 있어요.', fr: 'Non. J’ai un grand frère.' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qui a une **grande sœur** ?', choices: ['Louis', 'Marie', 'Les deux'], answer: 0, explain: 'Louis dit [[누나가 있어요]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🧒 Tu as une petite sœur. [[동생이 있어요?]] Réponds :', answer: ['네, 있어요', '네 있어요', '네, 동생이 있어요', '네 동생이 있어요'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ton arbre généalogique 🌳' },
        { type: 'text', text: 'Sur une feuille, dessine ta famille : un petit rond par personne. Sous chaque rond, écris le mot coréen **en hangul** ([[아버지]], [[어머니]], [[동생]]…).' },
        { type: 'tip', text: 'Garde ton dessin : demain, il rejoint ton portfolio du mois !', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Écris les membres de **ta** famille, séparés par des espaces, puis lis-les à voix haute.', placeholder: '아버지 어머니 동생' } },
    { kind: 'practice', exercise: { type: 'read', ko: '저는 동생이 있어요.', fr: 'J’ai un petit frère / une petite sœur.' } },
  ],
  interleave: [
    { type: 'mcq', prompt: '😊 + 🍖', choices: ['고기를 좋아해요', '고기를 싫어해요', '고기가 작아요'], answer: 0 },
    { type: 'cloze', before: '사과', after: ' 좋아해요.', choices: ['를', '을', '가'], answer: 0, translation: 'J’aime les pommes.' },
    { type: 'listen', audio: '작아요', choices: ['작아요', '좋아요', '나빠요'], answer: 0 },
    { type: 'mcq', prompt: '📅 Le 6 juin. Tu lis :', choices: ['유월 육일', '육월 육일', '유월 유일'], answer: 0 },
  ],
};

const TPR_CLASS = ['📖 ouvrir le livre', '✍️ écrire', '🪑 s’asseoir', '👂 écouter'];

const day19: Lesson = {
  id: 'm1-w4-d4',
  month: 1,
  week: 4,
  day: 19,
  title: 'Le portfolio du mois',
  summary: 'Révision des 4 grands acquis, deux dernières consignes de classe, énigmes et cadavre exquis.',
  cards: [
    { id: 'm1-ko-pyeoseyo', kind: 'phrase', ko: '펴세요', fr: 'Ouvrez (un livre, un cahier)', note: '📖 [[책을 펴세요|t:ouvrez le livre]]' },
    { id: 'm1-ko-sseuseyo', kind: 'phrase', ko: '쓰세요', fr: 'Écrivez', note: '✍️ [[공책에 쓰세요|t:écrivez dans le cahier]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ton portfolio 📒' },
        { type: 'text', text: 'Un mois déjà ! Aujourd’hui, on feuillette ensemble tout ce que tu as appris, en **4 grandes pages** :' },
        { type: 'table', head: ['Page', 'Tu sais…', 'Exemple'], rows: [
          ['1 · Hangul', 'lire et écrire toutes les syllabes', '[[한국어]] · [[화장실]]'],
          ['2 · Nombres', 'compter, dire la date et un prix', '[[시월 구일]] · [[천 원]]'],
          ['3 · Verbes', 'agir et décrire au présent poli', '[[가요]] · [[먹어요]] · [[커요]]'],
          ['4 · Toi', 'parler de ta famille et de tes goûts', '[[동생이 있어요]] · [[사과를 좋아해요]]'],
        ] },
        { type: 'tip', text: '[[한국어를 좋아해요?]] [[저는 한국어를 좋아해요!]]', mood: 'happy' },
      ],
    },
    { kind: 'learn', blocks: [{ type: 'title', text: 'Page 1 · Hangul' }, { type: 'text', text: 'Lecture, liaison et dictée : les trois clés du hangul.' }] },
    { kind: 'practice', exercise: { type: 'read', ko: '아버지, 어머니, 동생', fr: 'père, mère, petit frère / petite sœur' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Comment se prononce [[싫어해요]] ?', choices: ['[시러해요]', '[실어해요]', '[실허해요]'], answer: 0, explain: 'Le [[ㅎ]] est muet et le [[ㄹ]] glisse dans la syllabe suivante.' } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Écris ce que tu entends :', audio: '가족', answer: '가족' } },
    { kind: 'learn', blocks: [{ type: 'title', text: 'Page 2 · Nombres' }, { type: 'text', text: 'Rappel : on construit les nombres comme des Lego, et la date va **du mois au jour**.' }] },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[이십칠]] = ?', choices: ['27', '72', '207'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '시월 이십일', choices: ['시월 이십일', '십월 이십일', '시월 십이일'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🍎 Une pomme coûte 💵 2 000 ₩. [[사과가 얼마예요?]] Réponds :', answer: ['이천 원이에요', '이천원이에요'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Page 3 · Verbes' },
        { type: 'text', text: 'Tous tes verbes au présent poli, en un tableau :' },
        { type: 'table', head: ['Action', 'Description', 'Goûts & existence'], rows: [
          ['[[가요]] · [[사요]]', '[[커요]] · [[작아요]]', '[[좋아해요]] · [[싫어해요]]'],
          ['[[먹어요]] · [[마셔요]]', '[[좋아요]] · [[나빠요]]', '[[있어요]] · [[없어요]]'],
          ['[[자요]]', '', ''],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque infinitif à sa forme polie.', pairs: [['먹다', '먹어요'], ['마시다', '마셔요'], ['크다', '커요'], ['나쁘다', '나빠요'], ['좋아하다', '좋아해요']] } },
    { kind: 'practice', exercise: { type: 'cloze', before: '저는 집에 ', after: '.', choices: ['가요', '좋아해요', '커요'], answer: 0, translation: 'Je rentre à la maison.' } },
    { kind: 'learn', blocks: [{ type: 'title', text: 'Page 4 · Toi' }, { type: 'text', text: 'Ta famille et tes goûts : ce sont les phrases que tu diras le plus souvent en Corée !' }] },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que veut dire [[저는 형이 있어요]] ?', choices: ['J’ai un grand frère.', 'J’ai une grande sœur.', 'Je n’ai pas de grand frère.'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '☹️ + 🍎', choices: ['사과를 싫어해요', '사과가 작아요', '사과를 좋아해요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Deux dernières consignes ✍️' },
        { type: 'text', text: 'Pour comprendre **toutes** les consignes de la classe, il t’en manque deux :' },
        { type: 'table', head: ['Consigne', 'Sens', 'Geste'], rows: [
          ['[[펴세요]]', 'ouvrez', '📖'],
          ['[[쓰세요]]', 'écrivez', '✍️'],
        ] },
        { type: 'breakdown', segments: [
          { ko: '책', role: 'object', gloss: 'livre', particle: { ko: '을', key: 'object' } },
          { ko: '펴세요', role: 'verb', gloss: 'ouvrez' },
        ], translation: 'Ouvrez le livre.' },
        { type: 'breakdown', segments: [
          { ko: '공책', role: 'place', gloss: 'cahier', particle: { ko: '에', key: 'location' } },
          { ko: '쓰세요', role: 'verb', gloss: 'écrivez' },
        ], translation: 'Écrivez dans le cahier.', note: '[[에|p:location]] marque l’endroit où l’on écrit.' },
        { type: 'text', text: 'Avec [[앉으세요]], [[일어나세요]], [[들으세요]], [[보세요]] et [[놓으세요]], tu as toute la panoplie de l’élève coréen !' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Le professeur dit… Fais le geste ! ✋', audio: '책을 펴세요', choices: TPR_CLASS, answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Le professeur dit… Fais le geste ! ✋', audio: '들으세요', choices: TPR_CLASS, answer: 3 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Le professeur dit… Fais le geste ! ✋', audio: '공책에 쓰세요', choices: TPR_CLASS, answer: 1 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Le professeur dit… Fais le geste ! ✋', audio: '앉으세요', choices: TPR_CLASS, answer: 2 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Énigmes grammaticales 🕵️' },
        { type: 'text', text: 'Un élève distrait a fait des fautes. À toi de trouver **la seule phrase correcte** !' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🕵️ Énigme 1', choices: ['가방이 커요', '가방이 커예요', '가방을 커요'], answer: 0, explain: '[[커요]] est déjà un verbe : pas de [[예요|p:yeyo]]. Et ce qu’on décrit prend [[이|p:subject]].' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🕵️ Énigme 2', choices: ['저는 우유를 좋아해요', '저는 우유을 좋아해요', '저를 우유는 좋아해요'], answer: 0, explain: '[[우유]] finit par une voyelle → [[를|p:object]].' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🕵️ Énigme 3', choices: ['언니가 있어요', '언니이 있어요', '언니가 있다요'], answer: 0, explain: '[[언니]] finit par une voyelle → [[가|p:subject]]. Et la forme polie est [[있어요]].' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🕵️ Énigme 4', choices: ['학교에 가요', '학교를 가요에', '가요 학교에'], answer: 0, explain: 'Le verbe va toujours **à la fin**.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Cadavre exquis 🎲' },
        { type: 'text', text: 'Le jeu préféré de la classe : prends **un morceau dans chaque colonne**, au hasard. Ta phrase sera peut-être absurde… mais grammaticalement parfaite !' },
        { type: 'table', head: ['Qui ?', 'Quoi ?', 'Verbe'], rows: [
          ['[[저는]]', '[[사과를]]', '[[먹어요]]'],
          ['[[형은]]', '[[우유를]]', '[[마셔요]]'],
          ['[[어머니는]]', '[[꽃을]]', '[[사요]]'],
          ['[[동생은]]', '[[고기를]]', '[[좋아해요]]'],
          ['[[누나는]]', '[[의자를]]', '[[싫어해요]]'],
        ] },
        { type: 'tip', text: '[[동생은 의자를 먹어요]]… 🪑😋 Oups ! Mais la grammaire est parfaite, bravo !', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'order', translation: 'Mon grand frère boit du lait. (Louis parle)', tiles: ['형은', '우유를', '마셔요'], distractors: ['오빠는', '우유가'] } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Ma mère achète des fleurs.', tiles: ['어머니는', '꽃을', '사요'], distractors: ['꽃이', '사다'] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Invente ta phrase de cadavre exquis, la plus drôle possible, puis lis-la à voix haute !', placeholder: '누나는 꽃을 먹어요' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Demain : le grand bilan 🎓' },
        { type: 'text', text: 'Demain, la **Grande évaluation n°2** fait le point sur tout le mois : lecture, écoute, vocabulaire et une petite présentation de toi.' },
        { type: 'tip', text: 'Pas de stress : tu viens de tout réviser. [[네, 좋아요!]]', mood: 'encourage' },
      ],
    },
  ],
  interleave: [
    { type: 'mcq', prompt: 'Marie 👧 parle de sa **grande sœur** :', choices: ['언니', '누나', '오빠'], answer: 0 },
    { type: 'listen', audio: '목요일', choices: ['목요일', '금요일', '월요일'], answer: 0 },
    { type: 'cloze', before: '가방이 책상 ', after: ' 있어요.', choices: ['옆에', '옆을', '옆이'], answer: 0, translation: 'Le sac est à côté du bureau.' },
    { type: 'mcq', prompt: '🐜 Une fourmi ! Tu dis :', choices: ['작아요', '커요', '좋아해요'], answer: 0 },
  ],
};

const READING = ['학교에 가요.', '사과를 좋아해요.', '동생이 있어요.', '가방이 커요.', '물을 마셔요.'];

const LISTENING: [string, string[], number][] = [
  ['사과를 먹어요', ['🍎 manger une pomme', '🥛 boire du lait', '🍖 manger de la viande'], 0],
  ['우유를 마셔요', ['💧 boire de l’eau', '🥛 boire du lait', '🍚 manger du riz'], 1],
  ['가방이 의자 아래에 있어요', ['🎒 sur la chaise', '🎒 à côté de la chaise', '🎒 sous la chaise'], 2],
  ['동생이 없어요', ['🚫 pas de petit frère / petite sœur', '🧒 un petit frère / une petite sœur', '👦 un grand frère'], 0],
  ['고기를 싫어해요', ['😊 🍖', '☹️ 🍎', '☹️ 🍖'], 2],
];

const EXIST = ['있어요', '없어요'];

const day20: Lesson = {
  id: 'm1-w4-d5',
  month: 1,
  week: 4,
  day: 20,
  title: 'Bilan du 1er mois & Grande évaluation n°2',
  summary: 'La grande évaluation du mois, une petite histoire en coréen, et ton bilan.',
  cards: [],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Grande évaluation n°2' },
        { type: 'text', text: 'Quatre parties pour faire le point sur ton **premier mois**. Comme toujours : pas de piège, pas de chrono, et chaque erreur reviendra simplement en révision.' },
        { type: 'table', head: ['Partie', 'Contenu'], rows: [
          ['A', 'Lecture à voix haute (5 phrases)'],
          ['B', 'Compréhension orale (5 phrases)'],
          ['C', 'Vocabulaire & grammaire'],
          ['D', 'Ta fiche de présentation'],
        ] },
        { type: 'tip', text: '**A — Lecture.** Lis chaque phrase à voix haute **avant** d’écouter le modèle, puis sois honnête avec toi-même.', mood: 'encourage' },
      ],
    },
    ...READING.map((ko, i) => ({
      kind: 'practice' as const,
      exercise: { type: 'read' as const, ko, prompt: `**A · ${i + 1}/5** — lis à voix haute, puis vérifie.` },
    })),
    { kind: 'learn', blocks: [{ type: 'tip', text: '**B — Compréhension orale.** Écoute la phrase (autant de fois que tu veux), puis choisis l’image qui correspond.', mood: 'encourage' }] },
    ...LISTENING.map(([audio, choices, answer], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'mcq' as const, prompt: `**B · ${i + 1}/5** — quelle image correspond ?`, audio, choices, answer },
    })),
    { kind: 'learn', blocks: [{ type: 'tip', text: '**C — Vocabulaire & grammaire.** D’abord, relie les contraires. Puis complète avec [[있어요]] ou [[없어요]] selon l’image.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'match', prompt: '**C · 1/5** — relie les contraires.', pairs: [['크다', '작다'], ['좋다', '나쁘다'], ['있다', '없다'], ['좋아하다', '싫어하다']] } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '**C · 2/5** — 🎒 ✏️✏️', before: '가방에 연필이 ', after: '.', choices: EXIST, answer: 0, translation: 'Il y a des crayons dans le sac.' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '**C · 3/5** — 🥤 vide 🚫', before: '물이 ', after: '.', choices: EXIST, answer: 1, translation: 'Il n’y a pas d’eau.' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '**C · 4/5** — 📕 sur 🪑', before: '책이 의자 위에 ', after: '.', choices: EXIST, answer: 0, translation: 'Le livre est sur la chaise.' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '**C · 5/5** — 👧 Marie est enfant unique.', before: '마리는 동생이 ', after: '.', choices: EXIST, answer: 1, translation: 'Marie n’a pas de petit frère ni de petite sœur.' } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**D — Ta fiche de présentation.** Trois phrases rien que sur **toi**. Écris-les, puis lis-les à voix haute.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'write', prompt: '**D · 1/3** — Présente-toi : « Je suis [ton prénom]. »', placeholder: '저는 마리입니다', mustInclude: ['저는', '입니다'] } },
    { kind: 'practice', exercise: { type: 'write', prompt: '**D · 2/3** — Un aliment que tu aimes. Attention à [[을|p:object]] / [[를|p:object]] !', placeholder: '저는 사과를 좋아해요', mustInclude: ['저는', '좋아해요'] } },
    { kind: 'practice', exercise: { type: 'write', prompt: '**D · 3/3** — Un membre de ta famille. Attention à [[이|p:subject]] / [[가|p:subject]] !', placeholder: '저는 동생이 있어요', mustInclude: ['저는', '있어요'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Une petite histoire 📖' },
        { type: 'text', text: 'En fin de mois, la classe coréenne lit un conte. Voici le tien, **entièrement en coréen** : tu connais tous les mots ! (Et [[나비]], c’est mon nom : il veut dire « papillon » 🦋.) Touche une phrase pour l’entendre.' },
        { type: 'text', text: '[[나비는 사과를 좋아해요.]] [[나무 위에 사과가 있어요.]]' },
        { type: 'text', text: '[[사과가 커요!]] [[나비는 작아요.]]' },
        { type: 'text', text: '[[나비는 사과를 먹어요.]] [[물을 마셔요.]]' },
        { type: 'text', text: '[[나비는 집에 가요. 자요.]] 😴' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’est-ce que Nabi aime ?', choices: ['🍎 les pommes', '🥛 le lait', '🍖 la viande'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Où est la pomme ?', choices: ['sur l’arbre 🌳', 'sous l’arbre', 'à la maison 🏠'], answer: 0, explain: '[[나무 위에]] : sur l’arbre.' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qui est **petit** ?', choices: ['Nabi 🐛', 'la pomme 🍎', 'l’arbre 🌳'], answer: 0, explain: '[[나비는 작아요]], mais [[사과가 커요]] !' } },
    { kind: 'practice', exercise: { type: 'read', ko: '나비는 사과를 좋아해요. 나무 위에 사과가 있어요.', fr: 'Nabi aime les pommes. Il y a une pomme sur l’arbre.', prompt: 'Lis le début du conte à voix haute, comme un vrai conteur !' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ton bilan du 1er mois 🎓' },
        { type: 'text', text: 'En un mois, en partant de zéro, voilà tout ce que tu sais faire :' },
        { type: 'table', head: ['Domaine', 'Acquis'], rows: [
          ['Hangul', 'tu lis et écris **toutes** les syllabes, seul'],
          ['Vocabulaire', '**plus de 60 mots** : école, nombres, dates, famille, nourriture, positions'],
          ['Particules', '[[은/는|p:topic]] · [[이/가|p:subject]] · [[을/를|p:object]] · [[에|p:place]]'],
          ['Verbes', 'le présent poli en [[-아요 / -어요|p:present]], et [[있어요]] / [[없어요]]'],
          ['En classe', 'tu comprends toutes les consignes : [[앉으세요]] · [[펴세요]] · [[들으세요]] · [[쓰세요]]…'],
        ] },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le petit entretien avec Nabi' },
        { type: 'text', text: 'Dans une école coréenne, le professeur prend 10 minutes avec chaque élève pour parler de sa **confiance**. Prends un instant pour toi : qu’est-ce qui a été **facile** ? Qu’est-ce qui te semble **encore difficile** ?' },
        { type: 'tip', text: 'Ce qui te semble difficile reviendra tout seul en révision, au bon moment. Tu n’as rien à forcer. [[한국어를 좋아해요?]]', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'read', ko: '네! 저는 한국어를 좋아해요!', fr: 'Oui ! J’aime le coréen !', prompt: 'Nabi te demande si tu aimes le coréen. Réponds-lui **à voix haute** !' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Bravo, premier mois terminé ! 🎉' },
        { type: 'text', text: 'Il y a un mois, le hangul était un mystère. Aujourd’hui, tu lis un conte, tu te présentes et tu parles de ta famille **en coréen**.' },
        { type: 'tip', text: 'Le mois prochain : **le passé et le futur**, les lieux, et des phrases qui s’enchaînent. [[감사합니다!]] À demain !', mood: 'happy' },
      ],
    },
  ],
};

export const m1w4: Lesson[] = [day16, day17, day18, day19, day20];
