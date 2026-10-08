import type { GridBlank, Lesson } from '../types';

const COLLAPSE: [RegExp, string][] = [
  [/야 돼요/g, '야 해요'],
  [/야 (돼|해|했|됐)/g, '야$1'],
  [/도 돼요/g, '도돼요'],
  [/안 돼요/g, '안돼요'],
  [/지 않/g, '지않'],
  [/러 (가|와|갈|갔|왔)/g, '러$1'],
  [/ 거예요/g, '거예요'],
];
const alts = (...xs: string[]): string[] => {
  const out = new Set(xs);
  for (const [re, to] of COLLAPSE) for (const s of [...out]) out.add(s.replace(re, to));
  for (const s of [...out]) out.add(s.replace(/[.,!?] /g, ' '));
  for (const s of [...out]) out.add(s.replace(/[.!?]$/, ''));
  return [...out];
};
const blank = (...s: string[]): GridBlank => ({ answer: alts(...s) });

const MUST_ANY = '야 돼|야돼|야 해|야해|야 했|야했|야 됐|야됐|야 할|야할';
const NO_NEED_ANY = '않아도|안 해도|안해도|안 가도|안가도|안 와도|안 써도|안 읽어도|안 가져가도';

const day106: Lesson = {
  id: 'm6-w2-d1',
  month: 6,
  week: 2,
  day: 106,
  title: 'Il faut… : 숙제를 해야 돼요',
  summary: 'L’obligation : le présent sans 요 + 야 돼요 (ou 야 해요). 숙제를 해야 돼요 · 매일 공부해야 돼요 · 일찍 일어나야 돼요. Liste des tâches de la classe. Nouveaux : 가방을 싸요, 청소해요, 손을 씻어요, 전에 · 후에.',
  cards: [
    { id: 'w22-ko-aya-dwaeyo', kind: 'grammar', ko: '해야 돼요 · 먹어야 돼요', fr: 'il faut faire · il faut manger (devoir) — le présent sans 요 + 야 돼요 / 야 해요', note: '🟢 [[해요]] → [[해야 돼요]] · [[가요]] → [[가야 돼요]] · [[먹어요]] → [[먹어야 돼요]]. Même famille que [[가도 돼요|p:rules]] : on change seulement 도 → **야**. [[해야 해요]] = même sens, un peu plus écrit. Règle : [[야 돼요|p:must]]' },
    { id: 'w22-ko-maeil-gongbuhaeya', kind: 'phrase', ko: '매일 공부해야 돼요', fr: 'Il faut étudier tous les jours.', note: '📚 [[공부해요]] → [[공부해]] + [[야 돼요|p:must]].' },
    { id: 'w22-ko-gabang-ssayo', kind: 'phrase', ko: '가방을 싸요', fr: 'je fais mon sac (je range mes affaires dans mon sac)', note: '🎒 [[싸다]] a deux sens : « emballer, faire (un sac) » et « pas cher » ([[싸요]] de [[비싸요]] / [[싸요]]). [[저녁에 가방을 싸야 돼요.]]' },
    { id: 'w22-ko-cheongso', kind: 'vocab', ko: '청소해요', fr: 'je fais le ménage, je nettoie (청소하다)', note: '🧹 En Corée, les élèves nettoient eux-mêmes leur classe : [[수업 후에 교실을 청소해야 돼요.]]' },
    { id: 'w22-ko-son-ssiseoyo', kind: 'phrase', ko: '손을 씻어요', fr: 'je me lave les mains', note: '🧼 [[씻다]] → [[씻어요]] · [[씻어야 돼요]]. ≠ [[손을 드세요|t:levez la main]].' },
    { id: 'w22-ko-jeone-hue', kind: 'vocab', ko: '전에 · 후에', fr: 'avant · après (nom + 전에 / 후에)', note: '⏳ [[점심 전에|t:avant le déjeuner]] · [[수업 후에|t:après le cours]] · [[방학 전에|t:avant les vacances]]. [[점심 전에 손을 씻어야 돼요.]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'À faire impérativement ! ⏰' },
        { type: 'tip', text: 'Les grandes vacances approchent, et avec elles… les **règles** ! Cette semaine, on apprend à dire **ce qu’il faut faire**.', mood: 'happy' },
        { type: 'text', text: 'La fiche « À faire impérativement » de la classe :' },
        { type: 'table', head: ['', '🟢 Il faut…', 'Sens'], rows: [
          ['📚', '[[숙제를 해야 돼요.]]', 'Il faut faire ses devoirs.'],
          ['🎒', '[[가방을 싸야 돼요.]]', 'Il faut faire son sac.'],
          ['⏰', '[[일찍 일어나야 돼요.]]', 'Il faut se lever tôt.'],
        ] },
        { type: 'text', text: 'Mot nouveau : [[가방을 싸요|t:je fais mon sac]] — oui, comme [[싸요|t:pas cher]] : un même mot, deux sens.' },
        { type: 'breakdown', segments: [
          { ko: '매일', role: 'time', gloss: 'tous les jours' },
          { ko: '공부해야 돼요', role: 'verb', gloss: 'il faut étudier' },
        ], translation: 'Il faut étudier tous les jours.' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La règle : 도 → 야 🟢' },
        { type: 'text', text: 'Tu connais déjà [[가도 돼요?|p:rules]] (« je peux y aller ? »). Pour l’obligation, on garde le même début et on change **도** en **야** : le présent sans [[요]] + **야 돼요**.' },
        { type: 'table', head: ['Verbe', 'Présent', '🔵 Permis', '🟢 Obligatoire'], rows: [
          ['[[가다]]', '[[가요]]', '[[가도 돼요]]', '[[가야 돼요]]'],
          ['[[하다]]', '[[해요]]', '[[해도 돼요]]', '[[해야 돼요]]'],
          ['[[먹다]]', '[[먹어요]]', '[[먹어도 돼요]]', '[[먹어야 돼요]]'],
          ['[[읽다]]', '[[읽어요]]', '[[읽어도 돼요]]', '[[읽어야 돼요]]'],
          ['[[듣다]] (ㄷ)', '[[들어요]]', '[[들어도 돼요]]', '[[들어야 돼요]]'],
          ['[[일어나다]]', '[[일어나요]]', '[[일어나도 돼요]]', '[[일어나야 돼요]]'],
        ] },
        { type: 'tip', text: '[[해야 돼요]] ou [[해야 해요]] ? Même sens ! [[돼요]] est plus fréquent à l’oral, [[해요]] un peu plus écrit. La question : [[뭐 해야 돼요?|t:qu’est-ce qu’il faut faire ?]] Au passé, seule la fin change : [[어제 숙제를 해야 했어요|t:hier, j’ai dû faire mes devoirs]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '📚 « Il faut faire ses devoirs. »', choices: ['숙제를 해야 돼요.', '숙제를 해도 돼요.', '숙제를 하면 안 돼요.'], answer: 0, explain: '**야** = il faut · **도** = on peut · **면 안 돼요** = interdit.' } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Il faut… Touche une case vide.', head: ['Verbe', 'Présent', '🟢 + 야 돼요'], rows: [
      ['[[가다]]', '[[가요]]', blank('가야 돼요')],
      ['[[공부하다]]', '[[공부해요]]', blank('공부해야 돼요')],
      ['[[먹다]]', '[[먹어요]]', blank('먹어야 돼요')],
      ['[[자다]]', '[[자요]]', blank('자야 돼요')],
      ['[[듣다]]', '[[들어요]]', blank('들어야 돼요')],
    ], explain: 'Présent sans [[요]] + **야 돼요** ([[해야 해요]] est accepté aussi).' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '⏰ « Il faut se lever tôt. »', before: '일찍 ', after: ' 돼요.', choices: ['일어나야', '일어나도', '일어나면'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La liste des tâches de la classe 🧹' },
        { type: 'text', text: 'Activité de la classe : on écrit au tableau ce qu’il faut faire **chaque jour**. Trois mots nouveaux : [[청소해요|t:je nettoie]] · [[손을 씻어요|t:je me lave les mains]] · [[전에|t:avant]] / [[후에|t:après]] (après un nom).' },
        { type: 'table', head: ['⏳ Quand', '🟢 Il faut…'], rows: [
          ['🌅 [[아침에]]', '[[일찍 일어나야 돼요.]]'],
          ['🏫 [[수업 시간에]]', '[[선생님 말을 잘 들어야 돼요.]]'],
          ['🍚 [[점심 전에]]', '[[손을 씻어야 돼요.]]'],
          ['🧹 [[수업 후에]]', '[[교실을 청소해야 돼요.]]'],
          ['🏠 [[저녁에]]', '[[숙제를 하고 가방을 싸야 돼요.]]'],
        ] },
        { type: 'tip', text: 'En Corée, ce sont les élèves qui font le ménage de leur classe : c’est le [[청소 시간|t:l’heure du ménage]] ! Petit mot : [[말|t:la parole, ce qu’on dit]]. Et [[숙제를 하고]] : [[고]] relie deux actions (« et »), comme dans [[하고 있어요]].', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie le moment à la tâche.', pairs: [
      ['아침에', '일찍 일어나야 돼요'],
      ['점심 전에', '손을 씻어야 돼요'],
      ['수업 후에', '교실을 청소해야 돼요'],
      ['저녁에', '가방을 싸야 돼요'],
    ] } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Avant le déjeuner, il faut se laver les mains.', tiles: ['점심', '전에', '손을', '씻어야 돼요.'], distractors: ['후에', '씻어도 돼요.'] } },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Permis ou obligatoire ?', buckets: ['🔵 on peut', '🟢 il faut'], items: [
      { text: '화장실에 가도 돼요', bucket: 0 },
      { text: '물을 마셔도 돼요', bucket: 0 },
      { text: '질문해도 돼요', bucket: 0 },
      { text: '숙제를 해야 돼요', bucket: 1 },
      { text: '손을 씻어야 돼요', bucket: 1 },
      { text: '일찍 자야 해요', bucket: 1 },
    ], explain: '**도** → permis · **야** → obligatoire.' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '수업 후에 교실을 청소해야 돼요', choices: ['수업 후에 교실을 청소해야 돼요', '수업 전에 교실을 청소해도 돼요', '수업 후에 교실에서 공부해야 돼요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '📚 « Il faut étudier tous les jours. »', answer: alts('매일 공부해야 돼요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ta fiche « À faire impérativement » : écris 2 ou 3 choses qu’il te faut faire chaque jour, avec **야 돼요**. [[쓰세요!]]', placeholder: '아침에 일찍 일어나야 돼요. 매일 한국어를 공부해야 돼요.', mustInclude: [MUST_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '매일 공부해야 돼요. 점심 전에 손을 씻어야 돼요. 그리고 저녁에 가방을 싸야 돼요.', fr: 'Il faut étudier tous les jours. Avant le déjeuner, il faut se laver les mains. Et le soir, il faut faire son sac.', prompt: 'Mise en pratique : dis-le à voix haute ⏰' } },
  ],
  interleave: [
    { type: 'type', prompt: '📚 « Je vais à la bibliothèque pour lire un livre. »', answer: alts('도서관에 책을 읽으러 가요', '책을 읽으러 도서관에 가요') },
    { type: 'cloze', before: '시험을 잘 ', after: ' 열심히 공부해요.', choices: ['보려고', '보러'], answer: 0, translation: 'J’étudie sérieusement pour réussir l’examen.' },
    { type: 'mcq', prompt: '1️⃣ [[먼저]] =', choices: ['d’abord', 'enfin', 'ensuite'], answer: 0 },
    { type: 'mcq', prompt: '« Il ne faut pas courir dans la classe. »', choices: ['교실에서 뛰면 안 돼요.', '교실에서 뛰어도 돼요.', '교실에 뛰러 가요.'], answer: 0 },
  ],
};

const day107: Lesson = {
  id: 'm6-w2-d2',
  month: 6,
  week: 2,
  day: 107,
  title: 'Pas la peine : 하지 않아도 돼요',
  summary: 'La négation longue (radical + 지 않아요 = 안 + verbe), puis la non-obligation -지 않아도 돼요 : 오늘 숙제는 하지 않아도 돼요. Panneaux : 🔴 interdit · 🟢 obligatoire · ⚪ facultatif. Nouveaux : 꼭, 문제.',
  cards: [
    { id: 'w22-ko-ji-anayo', kind: 'grammar', ko: '가지 않아요 = 안 가요', fr: 'je n’y vais pas — négation longue : radical + 지 않아요', note: '✍️ Même sens que [[안|p:neg]] + verbe, un peu plus écrit. Radical + **지 않아요**, sans changement (comme [[지만|p:contrast]]) : [[먹지 않아요]], [[하지 않아요]], [[듣지 않아요]]. Prononciation : [[않아요]] [아나요].' },
    { id: 'w22-ko-ji-anado', kind: 'grammar', ko: '하지 않아도 돼요 · 안 해도 돼요', fr: 'ce n’est pas la peine de faire, pas obligé — radical + 지 않아도 돼요', note: '⚪ [[않아요]] → [[않아도]] + [[돼요]] : « même si tu ne le fais pas, ça va ». À l’oral : [[안 해도 돼요]]. Règle : [[지 않아도 돼요|p:no-need]]' },
    { id: 'w22-ko-sukje-anado', kind: 'phrase', ko: '오늘 숙제는 하지 않아도 돼요', fr: 'Ce n’est pas la peine de faire les devoirs aujourd’hui.', note: '🎉 [[는|p:topic]] met « les devoirs » en thème : quant aux devoirs d’aujourd’hui…' },
    { id: 'w22-ko-an-gado-trap', kind: 'phrase', ko: '안 가도 돼요 ≠ 가면 안 돼요', fr: 'pas besoin d’y aller ≠ il ne faut pas y aller (interdit)', note: '⚠️ Les deux ont [[안]] et [[돼요]] ! ⚪ [[안 가도 돼요]] = pas obligé · 🔴 [[가면 안 돼요|p:rules]] = interdit. Regarde où est [[안]] : **devant** le verbe → facultatif ; **devant** [[돼요]] → interdit.' },
    { id: 'w22-ko-kkok', kind: 'vocab', ko: '꼭', fr: 'absolument, sans faute', note: '❗ Renforce l’obligation : [[숙제를 꼭 해야 돼요.]]' },
    { id: 'w22-ko-munje', kind: 'vocab', ko: '문제', fr: 'exercice, question (d’un devoir, d’un examen), problème', note: '📄 [[1번 문제|t:l’exercice n°1]] se lit [[일 번 문제]]. [[2번 문제는 하지 않아도 돼요.]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Une autre négation : 지 않아요 ✍️' },
        { type: 'tip', text: 'Tu sais dire « je n’y vais pas » avec [[안|p:neg]] : [[안 가요]]. Il existe une négation **longue**, qui veut dire la même chose : radical + **지 않아요**.', mood: 'happy' },
        { type: 'table', head: ['Verbe', 'Courte (oral)', 'Longue (+ écrit)'], rows: [
          ['[[가다]]', '[[안 가요]]', '[[가지 않아요]]'],
          ['[[먹다]]', '[[안 먹어요]]', '[[먹지 않아요]]'],
          ['[[하다]]', '[[안 해요]]', '[[하지 않아요]]'],
          ['[[듣다]]', '[[안 들어요]]', '[[듣지 않아요]]'],
        ] },
        { type: 'text', text: 'Facile : on enlève [[다]] et on colle **지**, sans rien changer — comme pour [[지만|p:contrast]] ([[듣지만]], [[듣지 않아요]]). Le ㅎ de [[않아요]] ne se prononce pas : [아나요].' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ce n’est pas la peine… ⚪' },
        { type: 'text', text: '[[않아요]] se conjugue comme les autres verbes : [[않아요]] → [[않아도 돼요|p:no-need]], « même si on ne le fait pas, ça va ». Autrement dit : **pas obligé**, ce n’est pas la peine.' },
        { type: 'breakdown', segments: [
          { ko: '오늘', role: 'time', gloss: 'aujourd’hui' },
          { ko: '숙제', role: 'topic', gloss: 'les devoirs', particle: { ko: '는', key: 'topic' } },
          { ko: '하지 않아도 돼요', role: 'verb', gloss: 'pas la peine de faire' },
        ], translation: 'Ce n’est pas la peine de faire les devoirs aujourd’hui.' },
        { type: 'tip', text: 'À l’oral, on raccourcit souvent avec [[안]] + [[아도 돼요|p:rules]] : [[숙제를 안 해도 돼요]], [[학교에 안 가도 돼요]]. Même sens !', mood: 'thinking' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les panneaux de la classe 🚦' },
        { type: 'table', head: ['Panneau', 'Forme', 'Exemple'], rows: [
          ['🔴 Interdit', '[[-(으)면 안 돼요|p:rules]]', '[[교실에서 뛰면 안 돼요.]]'],
          ['🟢 Obligatoire', '[[-아/어야 돼요|p:must]]', '[[숙제를 해야 돼요.]]'],
          ['⚪ Facultatif', '[[-지 않아도 돼요|p:no-need]]', '[[그림은 그리지 않아도 돼요.]]'],
          ['🔵 Permis', '[[-아/어도 돼요|p:rules]]', '[[물을 마셔도 돼요.]]'],
        ] },
        { type: 'tip', text: '⚠️ Le grand piège : [[안 가도 돼요]] (⚪ pas besoin d’y aller) ≠ [[가면 안 돼요]] (🔴 interdit d’y aller). Regarde **où** est [[안]] : collé au **verbe** → facultatif ; collé à [[돼요]] → interdit.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🎉 « Ce n’est pas la peine de faire les devoirs aujourd’hui. »', choices: ['오늘 숙제는 하지 않아도 돼요.', '오늘 숙제는 하면 안 돼요.', '오늘 숙제는 해야 돼요.'], answer: 0, explain: '⚪ **지 않아도 돼요** = pas obligé. 🔴 [[하면 안 돼요]] = interdit !' } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Pas la peine… Touche une case vide.', head: ['Verbe', '✍️ Négation longue', '⚪ Pas la peine'], rows: [
      ['[[가다]]', blank('가지 않아요'), blank('가지 않아도 돼요', '안 가도 돼요')],
      ['[[먹다]]', blank('먹지 않아요'), blank('먹지 않아도 돼요', '안 먹어도 돼요')],
      ['[[하다]]', blank('하지 않아요'), blank('하지 않아도 돼요', '안 해도 돼요')],
    ], explain: 'Radical + **지 않아요** → **지 않아도 돼요** (oral : [[안 가도 돼요]]).' } },
    { kind: 'practice', exercise: { type: 'sort', prompt: '🚦 Interdit ou facultatif ?', buckets: ['🔴 interdit', '⚪ facultatif'], items: [
      { text: '교실에서 뛰면 안 돼요', bucket: 0 },
      { text: '수업 시간에 자면 안 돼요', bucket: 0 },
      { text: '도서관에서 떠들면 안 돼요', bucket: 0 },
      { text: '내일은 일찍 일어나지 않아도 돼요', bucket: 1 },
      { text: '그림은 그리지 않아도 돼요', bucket: 1 },
      { text: '우산을 안 가져가도 돼요', bucket: 1 },
    ], explain: '🔴 **면 안 돼요** · ⚪ **지 않아도 돼요** / [[안]] + verbe + **도 돼요**.' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '⚠️ [[학교에 안 가도 돼요.]] =', choices: ['Pas besoin d’aller à l’école.', 'Il est interdit d’aller à l’école.', 'Il faut aller à l’école.'], answer: 0, explain: '[[안]] est collé au **verbe** → ⚪ facultatif. L’interdit serait [[학교에 가면 안 돼요]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La feuille d’exercices facultatifs 📄' },
        { type: 'text', text: 'Activité de la classe : on lit les consignes d’une feuille de devoirs et on colorie chaque exercice — 🟢 obligatoire, ⚪ facultatif, 🔴 interdit. Mots nouveaux : [[문제|t:exercice, question]] · [[꼭|t:absolument]] · [[1번|t:n°1]] ([[일 번]]).' },
        { type: 'table', head: ['📄 [[오늘 숙제|t:les devoirs d’aujourd’hui]]'], rows: [
          ['[[1번 문제는 꼭 해야 돼요.]]'],
          ['[[2번 문제는 하지 않아도 돼요.]]'],
          ['[[3번 문제는 공책에 써야 돼요. 책에 쓰면 안 돼요.]]'],
          ['[[4번 문제는 그림을 그리는 문제예요. 그림은 그리지 않아도 돼요.]]'],
          ['[[어려우면 선생님에게 질문해도 돼요.]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quel exercice est **absolument** obligatoire ?', choices: ['L’exercice n°1.', 'L’exercice n°2.', 'L’exercice n°4.'], answer: 0, explain: '[[1번 문제는 꼭 해야 돼요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pour l’exercice n°3, qu’est-ce qui est **interdit** ?', choices: ['Écrire dans le livre.', 'Écrire dans le cahier.', 'Poser une question.'], answer: 0, explain: '[[책에 쓰면 안 돼요.]]' } },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie la consigne à son panneau.', pairs: [
      ['꼭 해야 돼요', '🟢 obligatoire'],
      ['하지 않아도 돼요', '⚪ facultatif'],
      ['쓰면 안 돼요', '🔴 interdit'],
      ['질문해도 돼요', '🔵 permis'],
    ] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '2번 문제는 하지 않아도 돼요', choices: ['2번 문제는 하지 않아도 돼요', '2번 문제는 하면 안 돼요', '2번 문제는 꼭 해야 돼요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🎉 « Ce n’est pas la peine de faire les devoirs aujourd’hui. »', answer: alts('오늘 숙제는 하지 않아도 돼요', '오늘 숙제는 안 해도 돼요', '오늘은 숙제를 하지 않아도 돼요', '오늘은 숙제를 안 해도 돼요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Tu es le professeur ! Écris les consignes des devoirs du week-end : un 🟢 (**야 돼요**) et un ⚪ (**지 않아도 돼요**). [[쓰세요!]]', placeholder: '1번 문제는 꼭 해야 돼요. 2번 문제는 하지 않아도 돼요.', mustInclude: [MUST_ANY, NO_NEED_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '오늘 숙제는 하지 않아도 돼요. 하지만 내일은 일찍 일어나야 돼요. 그리고 교실에서 뛰면 안 돼요!', fr: 'Pas la peine de faire les devoirs aujourd’hui. Mais demain, il faut se lever tôt. Et il ne faut pas courir dans la classe !', prompt: 'Mise en pratique : lis les trois panneaux à voix haute 🚦' } },
  ],
  interleave: [
    { type: 'type', prompt: '⏰ « Il faut se lever tôt. »', answer: alts('일찍 일어나야 돼요') },
    { type: 'mcq', prompt: '🧹 [[청소해요]] =', choices: ['je fais le ménage', 'je fais mon sac', 'je me lave les mains'], answer: 0 },
    { type: 'cloze', before: '점심 ', after: ' 손을 씻어야 돼요.', choices: ['전에', '후에'], answer: 0, translation: 'Avant le déjeuner, il faut se laver les mains.' },
    { type: 'mcq', prompt: '🍚 « On va manger ensemble ? »', choices: ['같이 먹으러 갈까요?', '같이 먹으려고 갈까요?', '같이 먹어야 갈까요?'], answer: 0 },
  ],
};

const day108: Lesson = {
  id: 'm6-w2-d3',
  month: 6,
  week: 2,
  day: 108,
  title: 'Les consignes d’examen : 이름을 적으세요',
  summary: 'Déchiffrer seul les consignes d’une épreuve : 이름을 적으세요 · 맞는 답을 고르세요 · 시험지를 제출하세요 · 연필로 써야 돼요. Test à blanc aux consignes uniquement en coréen. Nouveaux : 이름, 적다, 고르다, 제출하다, 시험지, 답.',
  cards: [
    { id: 'w22-ko-ireum', kind: 'vocab', ko: '이름', fr: 'nom, prénom', note: '🏷️ [[시험지에 이름을 적으세요.]] · [[이름이 뭐예요?|t:comment tu t’appelles ?]]' },
    { id: 'w22-ko-jeokda', kind: 'vocab', ko: '적어요 · 적으세요', fr: 'noter, inscrire (적다) · notez', note: '✍️ ≈ [[써요]], surtout pour une information courte (nom, date, réponse). Consonne → [[적으세요|p:seyo]], [[적어야 돼요|p:must]].' },
    { id: 'w22-ko-goreuda', kind: 'vocab', ko: '고르세요 · 골라요', fr: 'choisissez · je choisis (고르다)', note: '☑️ [[고르세요]], [[고르면]], [[고르는]] : réguliers. Mais au présent : [[골라요]], [[골라야 돼요]] — forme spéciale à retenir telle quelle, comme [[불러요]].' },
    { id: 'w22-ko-jechul', kind: 'vocab', ko: '제출하세요', fr: 'rendez (votre copie), remettez (제출하다)', note: '📤 [[시험지를 선생님에게 제출하세요.]] Mot formel des examens et des devoirs.' },
    { id: 'w22-ko-siheomji', kind: 'vocab', ko: '시험지', fr: 'copie, feuille d’examen', note: '📝 [[시험|t:examen]] + [[지|t:papier]].' },
    { id: 'w22-ko-matneun-dap', kind: 'phrase', ko: '맞는 답을 고르세요', fr: 'Choisissez la bonne réponse.', note: '✅ [[답|t:réponse]] ; [[맞는]] = [[맞다|t:être juste]] + [[는|p:relative]] (comme [[맛있는|p:adj-mod]]).' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le lexique des consignes 📝' },
        { type: 'tip', text: 'Vendredi, c’est la Grande évaluation n°10 ! Aujourd’hui, tu apprends à lire **toutes les consignes** d’une épreuve, sans aide.', mood: 'encourage' },
        { type: 'table', head: ['Mot', 'Consigne', 'Sens'], rows: [
          ['🏷️ [[이름]]', '[[이름을 적으세요.]]', 'Écrivez votre nom.'],
          ['✍️ [[적다]]', '[[답을 적으세요.]]', 'Notez la réponse.'],
          ['☑️ [[고르다]]', '[[맞는 답을 고르세요.]]', 'Choisissez la bonne réponse.'],
          ['📤 [[제출하다]]', '[[시험지를 제출하세요.]]', 'Rendez votre copie.'],
        ] },
        { type: 'text', text: 'Et deux noms : [[시험지|t:copie d’examen]] · [[답|t:réponse]]. [[맞는 답]] = « la réponse juste » ([[맞아요]] → [[맞는|p:relative]]).' },
        { type: 'tip', text: '[[고르다]] est sage devant [[세요]], [[면]], [[는]] : [[고르세요]], [[고르면]], [[고르는]]. Mais au présent, il change : [[골라요]], [[골라야 돼요]]. Retiens-le tel quel, comme [[노래를 불러요]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie la consigne à son sens.', pairs: [
      ['이름을 적으세요', 'Écrivez votre nom.'],
      ['맞는 답을 고르세요', 'Choisissez la bonne réponse.'],
      ['시험지를 제출하세요', 'Rendez votre copie.'],
      ['손을 드세요', 'Levez la main.'],
    ] } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '☑️ « Choisissez la bonne réponse. »', before: '맞는 답을 ', after: '.', choices: ['고르세요', '제출하세요', '드세요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les règles de l’épreuve 🟢🔴' },
        { type: 'text', text: 'Avant l’épreuve, le professeur explique les règles — avec tout ce que tu as appris cette semaine :' },
        { type: 'dialog', lines: [
          { who: '선생님', ko: '여러분, 지금부터 시험 시간이에요.' },
          { who: '선생님', ko: '먼저 시험지에 이름을 적어야 돼요.' },
          { who: '선생님', ko: '연필로 써야 돼요. 볼펜으로 쓰면 안 돼요.' },
          { who: '선생님', ko: '친구하고 이야기하면 안 돼요. 질문이 있으면 손을 드세요.' },
          { who: '선생님', ko: '5번 문제는 어려워요. 그래서 하지 않아도 돼요.' },
          { who: '선생님', ko: '다 쓰면 시험지를 선생님에게 제출하세요.' },
        ] },
        { type: 'tip', text: 'Petits mots : [[지금부터|t:à partir de maintenant]] ([[부터|t:à partir de]]) · [[연필로|t:au crayon]] ([[로|t:avec]], comme [[돋보기로]]) · [[볼펜|t:stylo bille]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Avec quoi faut-il écrire ?', choices: ['Au crayon.', 'Au stylo bille.', 'Peu importe.'], answer: 0, explain: '[[연필로 써야 돼요. 볼펜으로 쓰면 안 돼요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quel exercice est facultatif ?', choices: ['Le n°5, parce qu’il est difficile.', 'Le n°1, parce qu’il est facile.', 'Aucun.'], answer: 0, explain: '[[5번 문제는 어려워요. 그래서 하지 않아도 돼요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’est-ce qu’on fait **en premier** ?', choices: ['On écrit son nom sur la copie.', 'On rend sa copie.', 'On lève la main.'], answer: 0, explain: '[[먼저 시험지에 이름을 적어야 돼요.]]' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Il faut écrire au crayon.', tiles: ['연필로', '써야 돼요.'], distractors: ['써도 돼요.', '쓰면 안 돼요.'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Sur une vraie copie coréenne 🧐' },
        { type: 'text', text: 'Sur les copies imprimées, les consignes sont encore plus formelles : **(으)십시오** au lieu de **(으)세요**. Même verbe, même sens — tu sais déjà les lire !' },
        { type: 'table', head: ['Copie (très formel)', '= À l’oral', 'Sens'], rows: [
          ['[[이름을 적으십시오.]]', '[[이름을 적으세요.]]', 'Écrivez votre nom.'],
          ['[[맞는 답을 고르십시오.]]', '[[맞는 답을 고르세요.]]', 'Choisissez la bonne réponse.'],
          ['[[시험지를 제출하십시오.]]', '[[시험지를 제출하세요.]]', 'Rendez votre copie.'],
        ] },
        { type: 'tip', text: 'Juste à reconnaître : tu n’as pas besoin de l’écrire.', mood: 'happy' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Test à blanc ⏱️' },
        { type: 'tip', text: 'Simulation d’épreuve : à partir d’ici, les consignes sont **uniquement en coréen**. Pas de traduction ! Lis, comprends, exécute. 💪', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'write', prompt: '**1.** [[시험지에 이름을 적으세요.]]', placeholder: '나비' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**2.** [[맞는 답을 고르세요.]] — [[매일 한국어를 공부]]___ [[돼요.]]', choices: ['해야', '하러', '하려고'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**3.** [[맞는 답을 고르세요.]] — [[도서관에 책을]] ___ [[가요.]]', choices: ['빌리러', '빌려야', '빌리지 않아도'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '**4.** [[답을 적으세요.]] — [[오늘 숙제는 하지 않아도 돼요.]] = [[오늘 숙제는 안]] ___ [[돼요.]]', answer: alts('해도', '오늘 숙제는 안 해도 돼요') } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**5.** [[다 쓰면 시험지를 선생님에게 제출하세요.]] — Que fais-tu maintenant ?', choices: ['Je rends ma copie au professeur.', 'J’écris mon nom.', 'Je lève la main.'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Écoute la consigne du professeur. Que fais-tu ? ✋', audio: '질문이 있으면 손을 드세요', choices: ['Je lève la main si j’ai une question.', 'Je rends ma copie.', 'Je choisis la bonne réponse.'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '✏️ « Il faut écrire au crayon. »', answer: alts('연필로 써야 돼요', '연필로 적어야 돼요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'À ton tour : écris **3 consignes** pour l’épreuve de vendredi (une 🟢 avec **야 돼요**, une 🔴 avec **면 안 돼요**, une avec **세요**). [[쓰세요!]]', placeholder: '이름을 적어야 돼요. 친구하고 이야기하면 안 돼요. 다 쓰면 시험지를 제출하세요.', mustInclude: [MUST_ANY, '안 돼|안돼'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '먼저 시험지에 이름을 적으세요. 그다음에 맞는 답을 고르세요. 마지막으로 시험지를 제출하세요.', fr: 'D’abord, écrivez votre nom sur la copie. Ensuite, choisissez la bonne réponse. Enfin, rendez votre copie.', prompt: 'Mise en pratique : lis la suite de consignes, comme le professeur 📝' } },
  ],
  interleave: [
    { type: 'type', prompt: '🎉 « Pas la peine de faire les devoirs aujourd’hui. »', answer: alts('오늘 숙제는 하지 않아도 돼요', '오늘 숙제는 안 해도 돼요') },
    { type: 'mcq', prompt: '⚠️ [[가면 안 돼요]] =', choices: ['il ne faut pas y aller', 'pas besoin d’y aller', 'il faut y aller'], answer: 0 },
    { type: 'mcq', prompt: '❗ [[꼭]] =', choices: ['absolument', 'souvent', 'lentement'], answer: 0 },
    { type: 'cloze', before: '한국어를 잘', after: ' 매일 연습해요.', choices: ['하려고', '하러'], answer: 0, translation: 'Je m’entraîne chaque jour pour bien parler coréen.' },
  ],
};

const QCM: [string, string[]][] = [
  ['« Je vais au parc pour voir un ami. »', ['친구를 만나러 공원에 가요.', '친구를 만나야 공원에 가요.', '친구를 만나지 않아도 공원에 가요.']],
  ['« Il faut étudier sérieusement pour réussir l’examen. »', ['시험을 잘 보려고 열심히 공부해야 돼요.', '시험을 잘 보러 열심히 공부해야 돼요.', '시험을 잘 보려고 열심히 공부해도 돼요.']],
  ['« Pas besoin d’apporter un parapluie. »', ['우산을 안 가져가도 돼요.', '우산을 가져가면 안 돼요.', '우산을 가져가야 돼요.']],
  ['« Il ne faut pas parler pendant l’examen. »', ['시험 시간에 이야기하면 안 돼요.', '시험 시간에 이야기하지 않아도 돼요.', '시험 시간에 이야기해야 돼요.']],
  ['« On va jouer ensemble ? »', ['같이 놀러 갈까요?', '같이 놀려고 갈까요?', '같이 놀아야 갈까요?']],
];

const FIXES: [string, string, string[]][] = [
  ['한국어를 잘하러 매일 연습해요.', 'Je m’entraîne chaque jour pour bien parler coréen.', ['한국어를 잘하려고 매일 연습해요']],
  ['숙제를 해도 돼요. 꼭 해야 돼요!', 'Il faut faire ses devoirs. Absolument !', ['숙제를 해야 돼요']],
  ['도서관에서 책을 빌리러 가요.', 'Je vais à la bibliothèque pour emprunter un livre.', ['도서관에 책을 빌리러 가요', '책을 빌리러 도서관에 가요']],
  ['오늘은 학교에 가면 안 돼요. 일요일이에요!', 'Pas besoin d’aller à l’école aujourd’hui. C’est dimanche !', ['오늘은 학교에 가지 않아도 돼요', '오늘은 학교에 안 가도 돼요']],
];

const day109: Lesson = {
  id: 'm6-w2-d4',
  month: 6,
  week: 2,
  day: 109,
  title: 'Révision : le but et l’obligation',
  summary: 'Révision intégrative des semaines 21–22 : -(으)러 · -(으)려고 · -아/어야 돼요 · -지 않아도 돼요 · -(으)면 안 돼요. Fiche d’auto-évaluation, QCM, correction croisée de la copie de Minsu.',
  cards: [
    { id: 'w22-ko-boryeogo-haeya', kind: 'phrase', ko: '시험을 잘 보려고 열심히 공부해야 돼요', fr: 'Il faut étudier sérieusement pour réussir l’examen.', note: '🧩 but [[려고|p:in-order]] + obligation [[야 돼요|p:must]] : le **야** va sur le dernier verbe.' },
    { id: 'w22-ko-billireo-gaya', kind: 'phrase', ko: '책을 빌리러 도서관에 가야 돼요', fr: 'Il faut que j’aille à la bibliothèque emprunter un livre.', note: '🚶 [[러|p:purpose-go]] devant [[가다]] → [[가야 돼요]] : seule la fin change.' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ma fiche d’auto-évaluation 📋' },
        { type: 'tip', text: 'Avant la Grande évaluation, fais le point : pour chaque ligne, demande-toi si tu sais **former** et **utiliser** la structure.', mood: 'encourage' },
        { type: 'table', head: ['Je sais…', 'Forme', 'Exemple'], rows: [
          ['🚶 dire le but d’un déplacement', '[[(으)러 가요|p:purpose-go]]', '[[책을 빌리러 가요.]]'],
          ['🎯 dire le but d’une action', '[[(으)려고|p:in-order]]', '[[잘하려고 연습해요.]]'],
          ['🟢 dire ce qu’il faut faire', '[[-아/어야 돼요|p:must]]', '[[숙제를 해야 돼요.]]'],
          ['⚪ dire que ce n’est pas la peine', '[[-지 않아도 돼요|p:no-need]]', '[[숙제는 하지 않아도 돼요.]]'],
          ['🔴 dire ce qui est interdit', '[[-(으)면 안 돼요|p:rules]]', '[[떠들면 안 돼요.]]'],
          ['📝 lire les consignes', '[[적으세요]] · [[고르세요]] · [[제출하세요]]', '[[맞는 답을 고르세요.]]'],
        ] },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Combiner but et obligation 🧩' },
        { type: 'text', text: 'Les deux familles s’emboîtent : le **but** d’abord, l’**obligation** sur le dernier verbe.' },
        { type: 'table', head: ['🎯 But', '🟢 Obligation'], rows: [
          ['[[시험을 잘 보려고]]', '[[열심히 공부해야 돼요.]]'],
          ['[[책을 빌리러]]', '[[도서관에 가야 돼요.]]'],
          ['[[한국어를 잘하려고]]', '[[매일 연습해야 돼요.]]'],
        ] },
        { type: 'tip', text: 'Jamais ❌ 빌려야러 ni ❌ 보려고야 : les terminaisons **러** et **려고** se collent au radical, et **야 돼요** se met à la toute fin.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'La grande grille : touche une case vide.', head: ['Verbe', '🚶 러 가요', '🟢 야 돼요', '⚪ 지 않아도 돼요'], rows: [
      ['[[보다]]', blank('보러 가요'), blank('봐야 돼요'), blank('보지 않아도 돼요', '안 봐도 돼요')],
      ['[[먹다]]', blank('먹으러 가요'), blank('먹어야 돼요'), blank('먹지 않아도 돼요', '안 먹어도 돼요')],
      ['[[공부하다]]', blank('공부하러 가요'), blank('공부해야 돼요'), blank('공부하지 않아도 돼요', '공부 안 해도 돼요')],
    ], explain: '**러** : règle de [[면|p:if]] · **야 돼요** : présent sans 요 · **지 않아도** : radical + 지.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'QCM de consolidation ✅' },
        { type: 'text', text: 'Cinq questions, une seule bonne réponse à chaque fois.' },
      ],
    },
    ...QCM.map(([prompt, choices], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'mcq' as const, prompt: `QCM ${i + 1}/${QCM.length} — ${prompt}`, choices, answer: 0, explain: `[[${choices[0]}]]` },
    })),
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Correction croisée ✏️' },
        { type: 'tip', text: 'Atelier en binôme : tu échanges ta copie avec Minsu. Il a fait **une erreur** dans chaque phrase — à toi de la corriger ! (Écris seulement la phrase fausse, corrigée.)', mood: 'happy' },
      ],
    },
    ...FIXES.map(([wrong, fr, right], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'type' as const, prompt: `Copie de Minsu ${i + 1}/${FIXES.length} — ❌ [[${wrong}]] (« ${fr} »)`, answer: alts(...right), explain: `✅ [[${right[0]}]]` },
    })),
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Correct ou pas ?', buckets: ['✅ correct', '❌ faux'], items: [
      { text: '책을 빌리러 도서관에 가야 돼요', bucket: 0 },
      { text: '시험을 잘 보려고 공부해야 돼요', bucket: 0 },
      { text: '오늘은 일찍 일어나지 않아도 돼요', bucket: 0 },
      { text: '맞는 답을 고르세요', bucket: 0 },
      { text: '같이 먹으려고 갈까요?', bucket: 1 },
      { text: '숙제를 하야 돼요', bucket: 1 },
      { text: '연습하러 열심히 공부해요', bucket: 1 },
      { text: '학교에 가지 안아도 돼요', bucket: 1 },
    ], explain: '[[해야]] (de [[해요]]) · [[않아도]] avec ㄶ · **러** seulement devant un déplacement · **려고** jamais devant [[까요]].' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Il faut étudier sérieusement pour réussir l’examen.', tiles: ['시험을', '잘 보려고', '열심히', '공부해야 돼요.'], distractors: ['잘 보러', '공부해도 돼요.'] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '책을 빌리러 도서관에 가야 돼요', choices: ['책을 빌리러 도서관에 가야 돼요', '책을 빌리러 도서관에 가도 돼요', '책을 빌려야 도서관에 가요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Avant vendredi, qu’est-ce que tu dois faire, et pourquoi ? Combine un **려고** (ou **러**) et un **야 돼요**. [[쓰세요!]]', placeholder: '시험을 잘 보려고 매일 공부해야 돼요. 그리고 책을 빌리러 도서관에 가야 돼요.', mustInclude: [MUST_ANY, '려고|러 가|러가'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '시험을 잘 보려고 열심히 공부해야 돼요. 그래서 오늘 책을 빌리러 도서관에 가야 돼요. 하지만 그림은 그리지 않아도 돼요!', fr: 'Il faut étudier sérieusement pour réussir l’examen. Alors aujourd’hui, je dois aller à la bibliothèque emprunter un livre. Mais pas la peine de dessiner !', prompt: 'Mise en pratique : lis à voix haute, puis écoute le modèle.' } },
  ],
  interleave: [
    { type: 'type', prompt: '🏷️ « Écrivez votre nom. »', answer: alts('이름을 적으세요', '이름을 쓰세요') },
    { type: 'mcq', prompt: '📤 [[제출하세요]] =', choices: ['rendez (votre copie)', 'choisissez', 'notez'], answer: 0 },
    { type: 'mcq', prompt: '« le livre que j’ai lu hier »', choices: ['어제 읽은 책', '어제 읽는 책', '어제 읽을 책'], answer: 0 },
    { type: 'cloze', before: '날씨가 정말 ', after: '!', choices: ['덥네요', '더워네요'], answer: 0, translation: 'Qu’est-ce qu’il fait chaud !' },
  ],
};

const DICTATION = [
  '매일 한국어를 공부해야 돼요',
  '점심 전에 손을 씻어야 돼요',
  '오늘 숙제는 하지 않아도 돼요',
  '책을 빌리러 도서관에 가야 돼요',
  '시험지에 이름을 꼭 적어야 돼요',
  '내일은 일찍 일어나지 않아도 돼요',
  '수업 후에 친구를 만나러 공원에 갈 거예요',
  '시험을 잘 보려고 열심히 공부해야 돼요',
];

const RULES_TEXT = [
  '시험은 아홉 시에 시작해요.',
  '학생들은 여덟 시 오십 분까지 교실에 와야 돼요.',
  '먼저 시험지에 이름을 적어야 돼요.',
  '연필로 써야 돼요. 볼펜으로 쓰면 안 돼요.',
  '마지막 문제는 하지 않아도 돼요.',
  '다 쓰면 시험지를 선생님에게 제출하세요.',
];

const day110: Lesson = {
  id: 'm6-w2-d5',
  month: 6,
  week: 2,
  day: 110,
  title: 'Bilan & Grande évaluation n°10',
  summary: 'Dictée de 8 phrases, rédaction « les règles d’un bon élève avant les vacances », Grande évaluation bimensuelle n°10 (A–D), entretien bilan et une histoire entièrement en coréen. Plus que 2 semaines !',
  cards: [],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le bilan de la semaine 22 📋' },
        { type: 'tip', text: 'Grand jour : la **Grande évaluation bimensuelle n°10** ! Prends ton temps, lis bien chaque consigne… tu sais toutes les lire maintenant.', mood: 'encourage' },
        { type: 'table', head: ['Panneau', 'Forme', 'Exemple'], rows: [
          ['🟢 obligatoire', '[[-아/어야 돼요|p:must]]', '[[학교에 일찍 가야 돼요.]]'],
          ['⚪ facultatif', '[[-지 않아도 돼요|p:no-need]]', '[[오늘 숙제는 하지 않아도 돼요.]]'],
          ['🔴 interdit', '[[-(으)면 안 돼요|p:rules]]', '[[교실에서 뛰면 안 돼요.]]'],
          ['🚶 but', '[[(으)러|p:purpose-go]] · [[(으)려고|p:in-order]]', '[[책을 빌리러 가야 돼요.]]'],
        ] },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Dictée ✍️' },
        { type: 'text', text: 'Épreuve de la classe : huit phrases avec des obligations, des tournures facultatives et des buts. [[들으세요!]] Puis [[쓰세요!]]' },
      ],
    },
    ...DICTATION.map((s, i) => ({
      kind: 'practice' as const,
      exercise: { type: 'type' as const, prompt: `Dictée ${i + 1}/${DICTATION.length}`, audio: s, answer: alts(s) },
    })),
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Rédaction : le bon élève 🏅' },
        { type: 'text', text: 'Épreuve de la classe : un texte de **8 à 10 phrases** sur les règles d’un bon élève et ce qu’il faut faire **avant les vacances** ([[방학 전에]]).' },
        { type: 'table', head: ['Étape', 'Pense à…'], rows: [
          ['1️⃣ Les règles de chaque jour', '[[매일]] · [[아침에]] · [[수업 시간에]] + [[야 돼요]]'],
          ['2️⃣ Les interdits', '[[교실에서]] … [[면 안 돼요]]'],
          ['3️⃣ Avant les vacances', '[[방학 전에]] + [[야 돼요]] · [[도서관 책을 돌려줘야 돼요|t:il faut rendre les livres de la bibliothèque]]'],
          ['4️⃣ Ce qui est facultatif', '[[방학에는]] … [[지 않아도 돼요]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Rédaction 1/2 — **Les règles d’un bon élève** : 4 ou 5 phrases avec **야 돼요** et **면 안 돼요**. [[쓰세요!]]', placeholder: '좋은 학생은 매일 일찍 일어나야 돼요. 수업 시간에 선생님 말을 잘 들어야 돼요. 교실에서 뛰면 안 돼요…', mustInclude: [MUST_ANY, '안 돼|안돼'] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Rédaction 2/2 — **Avant les vacances** : 4 ou 5 phrases avec [[방학 전에]], **야 돼요**, et un **지 않아도 돼요**.', placeholder: '방학 전에 교실을 청소해야 돼요. 도서관 책을 돌려줘야 돼요. 방학에는 일찍 일어나지 않아도 돼요!', mustInclude: ['방학', MUST_ANY, NO_NEED_ANY] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Grande évaluation bimensuelle n°10' },
        { type: 'table', head: ['Partie', 'Contenu'], rows: [
          ['A', 'Expression de l’obligation (écrit à trous)'],
          ['B', 'Distinctions : obligation, interdiction, facultatif (relier)'],
          ['C', 'Compréhension de texte : le règlement de l’examen (QCM)'],
          ['D', 'Expression orale'],
        ] },
        { type: 'tip', text: '**A — Obligation.** [[빈칸에 쓰세요|t:écris dans la case vide]] : complète avec **-아/어야 돼요**.', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'grid', prompt: '**A** — [[-아/어야 돼요]]', head: ['Phrase', 'Verbe', '✍️ ______'], rows: [
      ['[[학교에 일찍]] ______.', '[[가다]]', blank('가야 돼요')],
      ['[[책을]] ______.', '[[읽다]]', blank('읽어야 돼요')],
      ['[[숙제를 꼭]] ______.', '[[하다]]', blank('해야 돼요')],
      ['[[점심 전에 손을]] ______.', '[[씻다]]', blank('씻어야 돼요')],
    ], explain: 'Présent sans [[요]] + **야 돼요** : [[가야]], [[읽어야]], [[해야]], [[씻어야]].' } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**B — Distinctions.** Associe chaque consigne à sa nuance.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'match', prompt: '**B · 1/2** — Relie la consigne à sa nuance.', pairs: [
      ['시험지에 이름을 적어야 돼요', '🟢 Obligation'],
      ['시험 시간에 이야기하면 안 돼요', '🔴 Interdiction'],
      ['5번 문제는 하지 않아도 돼요', '⚪ Facultatif'],
    ] } },
    { kind: 'practice', exercise: { type: 'match', prompt: '**B · 2/2** — Relie la consigne à sa nuance.', pairs: [
      ['내일은 학교에 안 가도 돼요', '⚪ Facultatif'],
      ['도서관에서 떠들면 안 돼요', '🔴 Interdiction'],
      ['매일 공부해야 해요', '🟢 Obligation'],
    ] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'tip', text: '**C — Compréhension de texte.** Lis le règlement, puis réponds aux 4 questions.', mood: 'encourage' },
        { type: 'table', head: ['📜 [[시험 규칙|t:le règlement de l’examen]]'], rows: RULES_TEXT.map((s) => [`[[${s}]]`]) },
        { type: 'text', text: 'Petits mots : [[시작해요|t:ça commence]] · [[까지|t:jusqu’à, au plus tard à]].' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 1/4** — À quelle heure les élèves doivent-ils être en classe ?', choices: ['À 8 h 50 au plus tard.', 'À 9 h.', 'À 8 h 30.'], answer: 0, explain: '[[여덟 시 오십 분까지 교실에 와야 돼요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 2/4** — Qu’est-ce qui est interdit ?', choices: ['Écrire au stylo bille.', 'Écrire au crayon.', 'Écrire son nom.'], answer: 0, explain: '[[볼펜으로 쓰면 안 돼요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 3/4** — Que dit le règlement sur le dernier exercice ?', choices: ['Ce n’est pas la peine de le faire.', 'Il faut absolument le faire.', 'Il faut le faire au stylo.'], answer: 0, explain: '[[마지막 문제는 하지 않아도 돼요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 4/4** — Quand on a fini, que faut-il faire ?', choices: ['Rendre sa copie au professeur.', 'Choisir la bonne réponse.', 'Sortir de la classe.'], answer: 0, explain: '[[다 쓰면 시험지를 선생님에게 제출하세요.]]' } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**D — À l’oral.** Le professeur te demande : [[오늘 수업 후에 뭐 해야 돼요?]] Explique **2 choses** que tu dois faire.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'write', prompt: '**D · 1/2** — 👩‍🏫 [[오늘 수업 후에 뭐 해야 돼요?]] Prépare ta réponse (2 choses).', placeholder: '오늘 수업 후에 집에서 숙제를 해야 돼요. 그리고 가방을 싸야 돼요.', mustInclude: [MUST_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '오늘 수업 후에 집에서 숙제를 해야 돼요. 그리고 책을 빌리러 도서관에 가야 돼요. 하지만 청소는 하지 않아도 돼요!', fr: 'Aujourd’hui après les cours, je dois faire mes devoirs à la maison. Et je dois aller à la bibliothèque emprunter un livre. Mais pas besoin de faire le ménage !', prompt: '**D · 2/2** — Réponds à voix haute, puis écoute le modèle.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'L’entretien bilan 🗣️' },
        { type: 'text', text: 'Pour finir, dix minutes seul à seul avec le professeur. Écoute la conversation, puis réponds à ton tour.' },
        { type: 'dialog', lines: [
          { who: '선생님', ko: '나비야, 오늘 시험이 어땠어요?' },
          { who: '나비', ko: '조금 어려웠지만 재미있었어요.' },
          { who: '선생님', ko: '방학 전에 뭐 해야 돼요?' },
          { who: '나비', ko: '도서관 책을 돌려줘야 돼요. 그리고 교실을 청소해야 돼요.' },
          { who: '선생님', ko: '좋아요. 방학에도 한국어를 공부할 거예요?' },
          { who: '나비', ko: '네! 한국어를 잘하려고 매일 연습할 거예요.' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'read', ko: '시험이 조금 어려웠지만 재미있었어요. 방학 전에 숙제를 다 해야 돼요. 그리고 한국어를 잘하려고 매일 연습할 거예요.', fr: 'L’examen était un peu difficile, mais intéressant. Avant les vacances, je dois finir tous mes devoirs. Et je vais m’entraîner chaque jour pour bien parler coréen.', prompt: 'Entretien : réponds au professeur à voix haute.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le crayon oublié 📖' },
        { type: 'text', text: 'Une histoire **entièrement en coréen**. Touche une bulle pour l’entendre.' },
        { type: 'dialog', lines: [
          { who: '📖', ko: '금요일 아침이에요. 오늘은 시험이 있어요. 그런데 나비가 늦게 일어났어요!' },
          { who: '나비', ko: '아, 빨리 학교에 가야 돼요!' },
          { who: '📖', ko: '나비는 교실에 뛰어갔어요. 여덟 시 오십 분이었어요.' },
          { who: '지훈', ko: '나비야, 교실에서 뛰면 안 돼요! 😄' },
          { who: '나비', ko: '미안해요! 그런데… 가방에 연필이 없어요! 볼펜으로 써도 돼요?' },
          { who: '지훈', ko: '아니요, 연필로 써야 돼요. 제 연필을 빌려 줄게요.' },
          { who: '선생님', ko: '여러분, 시험지에 이름을 적으세요. 마지막 문제는 하지 않아도 돼요.' },
          { who: '📖', ko: '나비는 열심히 썼어요. 그리고 시험지를 제출했어요.' },
          { who: '선생님', ko: '나비야, 시험지에 이름이 없네요!' },
          { who: '나비', ko: '앗! 이름을 꼭 적어야 돼요… 😅' },
          { who: '선생님', ko: '괜찮아요. 그리고 여러분, 오늘 숙제는 하지 않아도 돼요!' },
          { who: '📖', ko: '모두 웃었어요. 와! 🦋' },
        ] },
        { type: 'tip', text: 'Petits mots : [[늦게|t:tard]] · [[빌려 줄게요|t:je vais te le prêter]] · [[앗|t:oups !]] · [[괜찮아요|t:ce n’est pas grave]] · [[모두|t:tout le monde]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi Nabi ne peut-il pas écrire au stylo bille ?', choices: ['Parce qu’il faut écrire au crayon.', 'Parce que Jihoon n’a pas de stylo.', 'Parce qu’il est en retard.'], answer: 0, explain: '[[아니요, 연필로 써야 돼요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’a oublié Nabi sur sa copie ?', choices: ['Son nom.', 'La dernière question.', 'De choisir la bonne réponse.'], answer: 0, explain: '[[시험지에 이름이 없네요!]]' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Bilan attendu ✅' },
        { type: 'table', head: ['À la fin de la semaine 22, tu…'], rows: [
          ['🟢 exprimes tes obligations : [[숙제를 해야 돼요.]]'],
          ['🚦 distingues 🔴 [[하면 안 돼요]] · ⚪ [[하지 않아도 돼요]] · 🔵 [[해도 돼요]]'],
          ['📝 lis seul toutes les consignes d’une épreuve : [[맞는 답을 고르세요.]]'],
        ] },
        { type: 'tip', text: '22 semaines sur 24 : il ne reste plus que **2 semaines** avant le grand bilan final des 6 mois ! [[다음 주에도 열심히 공부해야 돼요!]] 🦋', mood: 'happy' },
      ],
    },
  ],
  interleave: [
    { type: 'type', prompt: '☑️ « Choisissez la bonne réponse. »', answer: alts('맞는 답을 고르세요') },
    { type: 'mcq', prompt: '⚠️ [[안 가도 돼요]] =', choices: ['pas besoin d’y aller', 'il ne faut pas y aller', 'il faut y aller'], answer: 0 },
    { type: 'cloze', before: '친구를 ', after: ' 공원에 가야 돼요.', choices: ['만나러', '만나야'], answer: 0, translation: 'Je dois aller au parc pour voir un ami.' },
    { type: 'mcq', prompt: '« ce que je ferai demain » (les devoirs)', choices: ['내일 할 숙제', '내일 한 숙제', '내일 하는 숙제'], answer: 0 },
  ],
};

export const m6w2: Lesson[] = [day106, day107, day108, day109, day110];
