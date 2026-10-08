import type { CardSeed, Lesson } from '../types';

const num = (n: number, ko: string, note?: string): CardSeed => ({ id: `m1-ko-num-${n}`, kind: 'vocab', ko, fr: String(n), note });

const DAYS = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];

const day11: Lesson = {
  id: 'm1-w3-d1',
  month: 1,
  week: 3,
  day: 11,
  title: 'Compter jusqu’à 10 & les jours de la semaine',
  summary: 'Les nombres sino-coréens de 1 à 10, les 7 jours, et 오늘은 월요일이에요.',
  cards: [
    num(1, '일', 'Même son que « jour » / « soleil » : [[일요일|t:dimanche]].'),
    num(2, '이'),
    num(3, '삼'),
    num(4, '사', 'Même son que [[사요|t:j’achète]] : seul le contexte les distingue.'),
    num(5, '오', '✋ Cinq doigts : « oh ! »'),
    num(6, '육'),
    num(7, '칠'),
    num(8, '팔', '팔 veut aussi dire « bras » 💪.'),
    num(9, '구'),
    num(10, '십'),
    { id: 'm1-ko-woryoil', kind: 'vocab', ko: '월요일', fr: 'lundi', note: '🌙 jour de la lune' },
    { id: 'm1-ko-hwayoil', kind: 'vocab', ko: '화요일', fr: 'mardi', note: '🔥 jour du feu' },
    { id: 'm1-ko-suyoil', kind: 'vocab', ko: '수요일', fr: 'mercredi', note: '💧 jour de l’eau' },
    { id: 'm1-ko-mogyoil', kind: 'vocab', ko: '목요일', fr: 'jeudi', note: '🌳 jour du bois' },
    { id: 'm1-ko-geumyoil', kind: 'vocab', ko: '금요일', fr: 'vendredi', note: '🪙 jour du métal (de l’or)' },
    { id: 'm1-ko-toyoil', kind: 'vocab', ko: '토요일', fr: 'samedi', note: '⛰️ jour de la terre' },
    { id: 'm1-ko-iryoil', kind: 'vocab', ko: '일요일', fr: 'dimanche', note: '☀️ jour du soleil' },
    { id: 'm1-ko-oneul', kind: 'vocab', ko: '오늘', fr: 'aujourd’hui', note: '[[오늘은 월요일이에요|t:aujourd’hui, c’est lundi]]' },
    { id: 'm1-ko-ieyo', kind: 'grammar', ko: '…이에요 / …예요', fr: 'c’est… (« être », poli courant)', speak: '월요일이에요', note: '[[이에요|p:yeyo]] après consonne : [[월요일이에요]]. [[예요|p:yeyo]] après voyelle : [[뭐예요?]]' },
    { id: 'm1-ko-museun-yoil', kind: 'phrase', ko: '오늘은 무슨 요일이에요?', fr: 'Quel jour sommes-nous ? (jour de la semaine)', note: '[[무슨|t:quel]] + [[요일|t:jour de la semaine]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Tu lis seul maintenant ! 📖' },
        { type: 'text', text: 'Plus d’aides de prononciation : tu lis le hangul **tout seul**. Touche un mot si tu as un doute, la voix est toujours là.' },
        { type: 'title', text: 'Deux façons de compter' },
        { type: 'text', text: 'Le coréen a **deux systèmes de nombres** : un système venu du chinois, dit **sino-coréen**, et un système **coréen natif**.' },
        { type: 'table', head: ['Système', 'Sert pour…'], rows: [
          ['Sino-coréen', 'les dates, l’argent, les minutes, les numéros… **cette semaine !**'],
          ['Coréen natif', 'l’âge, les heures, compter des objets… **plus tard**'],
        ] },
        { type: 'tip', text: 'Un seul système à la fois : ton cerveau te remerciera. Le sino-coréen est aussi le plus **logique**, tu vas voir.', mood: 'happy' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'De 1 à 10' },
        { type: 'text', text: 'Touche chaque nombre pour l’entendre, puis répète-le à voix haute.' },
        { type: 'letters', items: [
          { char: '일', mnemonic: '1' }, { char: '이', mnemonic: '2' }, { char: '삼', mnemonic: '3' }, { char: '사', mnemonic: '4' },
          { char: '오', mnemonic: '5 ✋' }, { char: '육', mnemonic: '6' }, { char: '칠', mnemonic: '7' }, { char: '팔', mnemonic: '8' },
          { char: '구', mnemonic: '9' }, { char: '십', mnemonic: '10' },
        ] },
        { type: 'tip', text: '**Le comptage rythmé** 👏 : tape dans tes mains à chaque nombre, en 3 mesures : [[일 이 삼 사]] · [[오 육 칠 팔]] · [[구 십]] ! Recommence 3 fois, de plus en plus vite.', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'read', ko: '일 이 삼 사 오 육 칠 팔 구 십', fr: '1 2 3 4 5 6 7 8 9 10', prompt: 'Compte à voix haute **en tapant dans tes mains**, puis écoute le modèle.' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '삼', choices: ['삼', '사', '십'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '칠', choices: ['칠', '팔', '일'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quel nombre est [[팔]] ?', choices: ['8', '6', '4', '2'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque nombre à son chiffre.', pairs: [['이', '2'], ['사', '4'], ['육', '6'], ['구', '9'], ['십', '10']] } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Combien de doigts ? ✋', choices: ['오', '사', '육', '구'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'order', translation: '1, 2, 3, 4, 5', tiles: ['일', '이', '삼', '사', '오'] } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Écris le nombre que tu entends :', audio: '육', answer: '육' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les jours de la semaine : …요일' },
        { type: 'text', text: 'Chaque jour = un **élément de la nature** + [[요일|t:jour de la semaine]].' },
        { type: 'table', head: ['Jour', 'Coréen', 'Élément'], rows: [
          ['lundi', '[[월요일]]', '🌙 lune'],
          ['mardi', '[[화요일]]', '🔥 feu'],
          ['mercredi', '[[수요일]]', '💧 eau'],
          ['jeudi', '[[목요일]]', '🌳 bois'],
          ['vendredi', '[[금요일]]', '🪙 métal, or'],
          ['samedi', '[[토요일]]', '⛰️ terre'],
          ['dimanche', '[[일요일]]', '☀️ soleil'],
        ] },
        { type: 'tip', text: 'Le secret : ce sont **les mêmes planètes qu’en français** ! Lundi = la Lune, mardi = Mars (la planète rouge, le feu 🔥), mercredi = Mercure, jeudi = Jupiter, vendredi = Vénus. En coréen, chaque planète porte le nom d’un élément.', mood: 'thinking' },
        { type: 'text', text: 'Deux remarques : [[일]] veut dire « 1 » **et** « soleil, jour » (ce sont deux mots qui sonnent pareil). Et [[수]] est l’eau dans les mots savants ; dans la vie de tous les jours, l’eau, c’est [[물]] 💧.' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque jour à son élément.', pairs: [['월요일', '🌙'], ['화요일', '🔥'], ['수요일', '💧'], ['목요일', '🌳'], ['일요일', '☀️']] } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quel jour vient **après** [[수요일]] ?', choices: ['목요일', '화요일', '금요일', '토요일'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '금요일', choices: ['금요일', '목요일', '일요일'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Jour d’école ou week-end ?', buckets: ['École 🏫', 'Week-end 🎈'], items: [
      { text: '월요일', bucket: 0 }, { text: '화요일', bucket: 0 }, { text: '수요일', bucket: 0 }, { text: '목요일', bucket: 0 },
      { text: '금요일', bucket: 0 }, { text: '토요일', bucket: 1 }, { text: '일요일', bucket: 1 },
    ] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Quel jour sommes-nous ?' },
        { type: 'text', text: 'Chaque matin, la classe coréenne écrit le jour au tableau. Le professeur demande : [[오늘은 무슨 요일이에요?|t:quel jour sommes-nous ?]]' },
        { type: 'breakdown', segments: [
          { ko: '오늘', role: 'topic', gloss: 'aujourd’hui', particle: { ko: '은', key: 'topic' } },
          { ko: '월요일이에요', role: 'verb', gloss: 'c’est lundi' },
        ], translation: 'Aujourd’hui, c’est lundi.', note: '[[오늘]] finit par une consonne → [[은|p:topic]], pas [[는|p:topic]]. Liaison : [[오늘은]] se dit [[오느른]].' },
        { type: 'text', text: '[[이에요|p:yeyo]] / [[예요|p:yeyo]] = « c’est… ». Tu le connais déjà sans le savoir : [[뭐예요?|t:qu’est-ce que c’est ?]] · [[어디예요?|t:où est-ce ?]]' },
        { type: 'table', head: ['Le mot finit par…', 'On ajoute', 'Exemple'], rows: [
          ['une consonne', '[[이에요|p:yeyo]]', '[[월요일이에요]] · [[책이에요]]'],
          ['une voyelle', '[[예요|p:yeyo]]', '[[뭐예요]] · [[의자예요]]'],
        ] },
        { type: 'tip', text: 'Tous les jours finissent par [[일]] (une consonne) : c’est donc **toujours** [[이에요|p:yeyo]]. Facile !', mood: 'happy' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le rituel du matin ☀️' },
        { type: 'dialog', lines: [
          { who: 'Professeur', ko: '안녕하세요!', fr: 'Bonjour !' },
          { who: 'Élèves', ko: '안녕하세요!', fr: 'Bonjour !' },
          { who: 'Professeur', ko: '오늘은 무슨 요일이에요?', fr: 'Quel jour sommes-nous ?' },
          { who: 'Marie', ko: '월요일이에요!', fr: 'C’est lundi !' },
          { who: 'Professeur', ko: '네! 오늘은 월요일이에요.', fr: 'Oui ! Aujourd’hui, c’est lundi.' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', before: '오늘은 금요일', after: '.', choices: ['이에요', '예요', '을'], answer: 0, translation: 'Aujourd’hui, c’est vendredi.', explain: '[[금요일]] finit par une consonne → [[이에요|p:yeyo]].' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '이게 뭐', after: '?', choices: ['예요', '이에요', '를'], answer: 0, translation: 'Qu’est-ce que c’est ?', explain: '[[뭐]] finit par une voyelle → [[예요|p:yeyo]].' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '📅 Le calendrier indique **jeudi**. [[오늘은 무슨 요일이에요?]]', choices: ['목요일이에요', '금요일이에요', '화요일이에요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Aujourd’hui, c’est samedi.', tiles: ['오늘은', '토요일이에요'], distractors: ['오늘는', '토요일예요'] } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Écris : « Aujourd’hui, c’est dimanche. »', answer: ['오늘은 일요일이에요', '오늘은 일요일입니다'] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Et en vrai ? Écris quel jour on est **aujourd’hui**, puis lis ta phrase à voix haute.', placeholder: '오늘은 월요일이에요', mustInclude: ['오늘은', '요일'] } },
  ],
  interleave: [
    { type: 'cloze', before: '학교', after: ' 가요.', choices: ['에', '을', '는'], answer: 0, translation: 'Je vais à l’école.' },
    { type: 'mcq', prompt: '[[이게 뭐예요?]] ✏️', choices: ['연필', '공책', '의자', '책상'], answer: 0 },
    { type: 'listen', audio: '한국어', choices: ['한국어', '한국', '학교'], answer: 0 },
    { type: 'mcq', prompt: 'Tu as soif. Tu dis :', choices: ['물 주세요', '밥을 먹어요', '자요'], answer: 0 },
  ],
};

const day12: Lesson = {
  id: 'm1-w3-d2',
  month: 1,
  week: 3,
  day: 12,
  title: 'Les dates & la question « Quand ? »',
  summary: 'Nombre + 월 = le mois, nombre + 일 = le jour, et 생일이 언제예요 ?',
  cards: [
    { id: 'm1-ko-months', kind: 'grammar', ko: '오월', fr: 'mai (nombre + 월 = le mois)', note: '[[오|t:5]] + [[월|t:mois]]. Mois 1 à 12 : [[일월]] … [[십이월]].' },
    { id: 'm1-ko-yuwol', kind: 'vocab', ko: '유월', fr: 'juin', note: '⚠️ Pas [[육월]] : le [[ㄱ]] tombe.' },
    { id: 'm1-ko-siwol', kind: 'vocab', ko: '시월', fr: 'octobre', note: '⚠️ Pas [[십월]] : le [[ㅂ]] tombe.' },
    { id: 'm1-ko-date', kind: 'grammar', ko: '삼월 오일', fr: 'le 5 mars (mois, puis jour)', note: 'Du plus grand au plus petit : [[삼월|t:mars]] + [[오일|t:le 5]].' },
    { id: 'm1-ko-myeot', kind: 'vocab', ko: '몇', fr: 'combien ? / quel ? (+ unité)', note: '[[몇 월|t:quel mois ?]]' },
    { id: 'm1-ko-myeochil', kind: 'vocab', ko: '며칠', fr: 'quel jour (du mois) ?', note: 'On écrit [[며칠]], jamais « 몇 일 ».' },
    { id: 'm1-ko-oneul-date', kind: 'phrase', ko: '오늘은 몇 월 며칠이에요?', fr: 'Quelle est la date d’aujourd’hui ?', note: 'Réponse : [[시월 구일이에요|t:c’est le 9 octobre]]' },
    { id: 'm1-ko-eonje', kind: 'vocab', ko: '언제', fr: 'quand ?', note: '[[언제예요?|t:c’est quand ?]]' },
    { id: 'm1-ko-saengil', kind: 'vocab', ko: '생일', fr: 'anniversaire', note: '🎂 [[생일이 언제예요?|t:c’est quand, ton anniversaire ?]]' },
    { id: 'm1-ko-je', kind: 'vocab', ko: '제', fr: 'mon, ma, mes (poli)', note: 'Vient de [[저|t:moi]] : [[제 생일|t:mon anniversaire]].' },
    { id: 'm1-ko-e-time', kind: 'particle', ko: '오월에', fr: 'en mai (에 = moment)', note: '[[에|p:time]] se colle au moment : [[오월에 한국에 가요|t:en mai, je vais en Corée]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les mois : nombre + 월' },
        { type: 'text', text: 'Rien à apprendre par cœur : le mois, c’est **son numéro** + [[월|t:mois]]. Mai est le 5e mois → [[오월]].' },
        { type: 'table', head: ['Mois', 'Coréen', 'Mois', 'Coréen'], rows: [
          ['janvier', '[[일월]]', 'juillet', '[[칠월]]'],
          ['février', '[[이월]]', 'août', '[[팔월]]'],
          ['mars', '[[삼월]]', 'septembre', '[[구월]]'],
          ['avril', '[[사월]]', 'octobre ⚠️', '[[시월]]'],
          ['mai', '[[오월]]', 'novembre', '[[십일월]]'],
          ['juin ⚠️', '[[유월]]', 'décembre', '[[십이월]]'],
        ] },
        { type: 'tip', text: '⚠️ Deux exceptions, pour que ça sonne mieux : [[유월]] (pas « 육월 ») et [[시월]] (pas « 십월 »). La consonne finale tombe.', mood: 'thinking' },
        { type: 'text', text: 'Et novembre, décembre ? 11 = 10 + 1 et 12 = 10 + 2. On les colle, tout simplement :' },
        { type: 'compose', items: [
          { parts: ['십', '일'], result: '십일' },
          { parts: ['십', '이'], result: '십이' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque mois.', pairs: [['삼월', 'mars'], ['오월', 'mai'], ['팔월', 'août'], ['유월', 'juin'], ['시월', 'octobre']] } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Comment dit-on **juin** ?', choices: ['유월', '육월', '오월'], answer: 0, explain: 'Exception : le [[ㄱ]] de [[육]] tombe → [[유월]].' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '칠월', choices: ['칠월', '팔월', '일월'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Écris **décembre** en coréen :', answer: '십이월' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les jours du mois : nombre + 일' },
        { type: 'text', text: 'Même logique : le jour, c’est **son numéro** + [[일|t:jour]]. Le 5 → [[오일]]. Le 10 → [[십일]].' },
        { type: 'text', text: 'Pour une date complète, on va **du plus grand au plus petit** : le mois, **puis** le jour. (Et l’année, plus tard, viendra en premier !)' },
        { type: 'breakdown', segments: [
          { ko: '삼월', role: 'time', gloss: 'mars' },
          { ko: '오일', role: 'time', gloss: 'le 5' },
        ], translation: 'le 5 mars' },
        { type: 'tip', text: 'Attention : [[십일]] veut dire « 11 » **et** « le 10 du mois » ([[십]] + [[일|t:jour]]). Le contexte suffit toujours. Promis !', mood: 'thinking' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Quelle est la date ?' },
        { type: 'text', text: '[[몇|t:combien]] devant une unité = « quel… ? ». Donc [[몇 월|t:quel mois ?]]. Pour le jour, on a un mot spécial : [[며칠|t:quel jour ?]].' },
        { type: 'breakdown', segments: [
          { ko: '오늘', role: 'topic', gloss: 'aujourd’hui', particle: { ko: '은', key: 'topic' } },
          { ko: '몇 월', role: 'time', gloss: 'quel mois' },
          { ko: '며칠이에요?', role: 'verb', gloss: 'quel jour est-ce ?' },
        ], translation: 'Quelle est la date d’aujourd’hui ?', note: 'Comme avec [[어디]], le mot-question reste **à sa place** dans la phrase : pas besoin de le mettre au début.' },
        { type: 'tip', text: 'Piège d’orthographe : on pourrait croire que « quel jour » s’écrit [[몇]] + [[일]]… mais non ! On écrit toujours [[며칠]], en un seul mot. Même beaucoup de Coréens se trompent !', mood: 'thinking' },
        { type: 'dialog', lines: [
          { who: 'Professeur', ko: '오늘은 몇 월 며칠이에요?', fr: 'Quelle est la date d’aujourd’hui ?' },
          { who: 'Élèves', ko: '시월 구일이에요!', fr: 'C’est le 9 octobre !' },
          { who: 'Professeur', ko: '무슨 요일이에요?', fr: 'Quel jour de la semaine ?' },
          { who: 'Élèves', ko: '금요일이에요!', fr: 'C’est vendredi !' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '📅 Le calendrier indique **le 8 mai**. Tu lis :', choices: ['오월 팔일', '팔월 오일', '오일 팔월'], answer: 0, explain: 'Le mois d’abord : [[오월]], puis le jour : [[팔일]].' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '이월 십일', choices: ['이월 십일', '십이월 일일', '이월 칠일'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'cloze', before: '오늘은 몇 월 ', after: '이에요?', choices: ['며칠', '몇 일', '언제'], answer: 0, translation: 'Quelle est la date d’aujourd’hui ?', explain: 'On écrit toujours [[며칠]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '📅 Le 9 octobre — écris la date en coréen :', answer: ['시월 구일', '시월구일'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Quand ? 언제' },
        { type: 'text', text: '[[언제|t:quand]] fonctionne comme [[어디|t:où]] : on le colle à [[예요|p:yeyo]] → [[언제예요?|t:c’est quand ?]]' },
        { type: 'breakdown', segments: [
          { ko: '생일', role: 'subject', gloss: 'anniversaire', particle: { ko: '이', key: 'subject' } },
          { ko: '언제예요?', role: 'verb', gloss: 'c’est quand ?' },
        ], translation: 'C’est quand, ton anniversaire ?', note: 'Même modèle que [[화장실이 어디예요?]] : on change juste le mot-question.' },
        { type: 'text', text: 'Pour répondre, on parle de **son** anniversaire avec [[제|t:mon]] (le « mon » poli, cousin de [[저]]) :' },
        { type: 'breakdown', segments: [
          { ko: '제 생일', role: 'topic', gloss: 'mon anniversaire', particle: { ko: '은', key: 'topic' } },
          { ko: '오월 오일이에요', role: 'verb', gloss: 'c’est le 5 mai' },
        ], translation: 'Mon anniversaire, c’est le 5 mai.' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le 에 du temps' },
        { type: 'text', text: 'Tu connais [[에|p:place]] pour **où l’on va**. Le même [[에|p:time]] sert aussi pour **quand** quelque chose se passe :' },
        { type: 'breakdown', segments: [
          { ko: '오월', role: 'time', gloss: 'mai', particle: { ko: '에', key: 'time' } },
          { ko: '한국', role: 'place', gloss: 'Corée', particle: { ko: '에', key: 'place' } },
          { ko: '가요', role: 'verb', gloss: 'vais' },
        ], translation: 'En mai, je vais en Corée.', note: 'Le moment vient en général **en premier**, puis le lieu, puis le verbe.' },
        { type: 'tip', text: 'Exception : jamais de [[에|p:time]] après [[오늘]]. On dit [[오늘 학교에 가요|t:aujourd’hui, je vais à l’école]].', mood: 'thinking' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le sondage des anniversaires 🎂' },
        { type: 'text', text: 'En classe, chacun interroge ses camarades et place leur anniversaire sur un grand graphique des 12 mois.' },
        { type: 'dialog', lines: [
          { who: 'Marie', ko: '생일이 언제예요?', fr: 'C’est quand, ton anniversaire ?' },
          { who: 'Louis', ko: '제 생일은 칠월 삼일이에요.', fr: 'Mon anniversaire, c’est le 3 juillet.' },
          { who: 'Louis', ko: '마리, 생일이 언제예요?', fr: 'Marie, c’est quand, ton anniversaire ?' },
          { who: 'Marie', ko: '제 생일은 십이월 구일이에요.', fr: 'Mon anniversaire, c’est le 9 décembre.' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Louis dit : [[제 생일은 칠월 삼일이에요.]] Son anniversaire est le…', choices: ['3 juillet', '7 mars', '13 juillet'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'order', translation: 'C’est quand, ton anniversaire ?', tiles: ['생일이', '언제예요?'], distractors: ['생일을', '어디예요?'] } },
    { kind: 'practice', exercise: { type: 'cloze', before: '팔월', after: ' 한국에 가요.', choices: ['에', '을', '이에요'], answer: 0, translation: 'En août, je vais en Corée.' } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ton tour ! Écris la date de **ton** anniversaire : « Mon anniversaire, c’est le … ».', placeholder: '제 생일은 오월 오일이에요', mustInclude: ['제 생일은', '월', '일이에요'] } },
  ],
  interleave: [
    { type: 'listen', audio: '목요일', choices: ['목요일', '금요일', '토요일'], answer: 0 },
    { type: 'mcq', prompt: 'Que veut dire [[오늘은 무슨 요일이에요?]] ?', choices: ['Quel jour sommes-nous ?', 'C’est quand, ton anniversaire ?', 'Où vas-tu ?'], answer: 0 },
    { type: 'type', prompt: 'Écris le nombre que tu entends :', audio: '칠', answer: '칠' },
    { type: 'cloze', before: '꽃', after: ' 사요.', choices: ['을', '를', '에'], answer: 0, translation: 'J’achète des fleurs.' },
  ],
};

const day13: Lesson = {
  id: 'm1-w3-d3',
  month: 1,
  week: 3,
  day: 13,
  title: 'Jusqu’à 100, l’argent & « Combien ? »',
  summary: 'Construire n’importe quel nombre jusqu’à 100, les wons, et 얼마예요 ?',
  cards: [
    { id: 'm1-ko-tens', kind: 'grammar', ko: '삼십오', fr: '35 (3 × 10 + 5)', note: '[[삼|t:3]] [[십|t:10]] [[오|t:5]]. Pas de [[일]] devant [[십]] : 10 = [[십]], 11 = [[십일]].' },
    { id: 'm1-ko-isip', kind: 'vocab', ko: '이십', fr: '20' },
    { id: 'm1-ko-osip', kind: 'vocab', ko: '오십', fr: '50' },
    { id: 'm1-ko-baek', kind: 'vocab', ko: '백', fr: '100', note: 'Jamais « 일백 » : comme « cent » en français.' },
    { id: 'm1-ko-cheon', kind: 'vocab', ko: '천', fr: '1 000', note: '💵 [[천 원|t:1 000 wons]]' },
    { id: 'm1-ko-won', kind: 'vocab', ko: '원', fr: 'won (₩, monnaie coréenne)', note: '🪙 [[오백 원|t:500 wons]]' },
    { id: 'm1-ko-eolmayeyo', kind: 'phrase', ko: '얼마예요?', fr: 'Combien ça coûte ?', note: '[[연필이 얼마예요?|t:combien coûte le crayon ?]]' },
    { id: 'm1-ko-ige-eolma', kind: 'phrase', ko: '이게 얼마예요?', fr: 'Combien coûte ceci ?', note: 'On montre l’objet du doigt 👉' },
    { id: 'm1-ko-ga', kind: 'particle', ko: '이 / 가', fr: 'particule de sujet', note: '[[이|p:subject]] après consonne : [[연필이]]. [[가|p:subject]] après voyelle : [[의자가]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Compter comme avec des Lego' },
        { type: 'text', text: 'Avec seulement **10 mots**, tu peux dire tous les nombres jusqu’à 99. Pas de « quatre-vingt-dix-sept » : le coréen dit simplement « neuf-dix-sept » !' },
        { type: 'text', text: '**Les nombres de 11 à 19** : 10 + le chiffre.' },
        { type: 'compose', items: [
          { parts: ['십', '이'], result: '십이' },
          { parts: ['십', '오'], result: '십오' },
          { parts: ['십', '구'], result: '십구' },
        ] },
        { type: 'text', text: '**Les dizaines** : le chiffre **devant** [[십]] = « tant de fois dix ».' },
        { type: 'table', head: ['Nombre', 'Logique', 'Coréen'], rows: [
          ['20', '2 × 10', '[[이십]]'],
          ['30', '3 × 10', '[[삼십]]'],
          ['23', '2 × 10 + 3', '[[이십삼]]'],
          ['47', '4 × 10 + 7', '[[사십칠]]'],
          ['99', '9 × 10 + 9', '[[구십구]]'],
          ['100', '—', '[[백]]'],
        ] },
        { type: 'tip', text: 'Devant [[십]], [[백]] ou [[천]], on ne dit **jamais** [[일]] : 10 = [[십]], 100 = [[백]], 1 000 = [[천]]. Comme en français : on dit « cent », pas « un cent ».', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[사십칠]] = ?', choices: ['47', '74', '417', '407'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '이십오', choices: ['이십오', '오십이', '십오'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque nombre à son chiffre.', pairs: [['십일', '11'], ['십오', '15'], ['이십', '20'], ['오십', '50'], ['백', '100']] } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Comment dit-on **10** ?', choices: ['십', '일십', '십일'], answer: 0, explain: 'Pas de [[일]] devant [[십]]. Et [[십일]], c’est 11 !' } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Écris **30** en coréen :', answer: '삼십' } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Écris le nombre que tu entends :', audio: '구십구', answer: '구십구' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'L’argent coréen : le won ₩' },
        { type: 'text', text: 'En Corée, on paie en [[원|t:wons]]. Les centaines et les milliers se construisent comme les dizaines : [[오백|t:5 × 100]] = 500.' },
        { type: 'table', head: ['Pièce / billet', 'On dit'], rows: [
          ['🪙 100 ₩', '[[백 원]]'],
          ['🪙 500 ₩', '[[오백 원]]'],
          ['💵 1 000 ₩', '[[천 원]]'],
          ['💵 5 000 ₩', '[[오천 원]]'],
        ] },
        { type: 'text', text: 'On met un petit espace entre le nombre et [[원]] (mais tu verras souvent [[오백원]] collé : les deux se lisent pareil).' },
        { type: 'tip', text: 'Pour te faire une idée : 1 000 ₩ ≈ 0,70 €. Un crayon coûte environ 500 ₩, un repas simple 8 000 ₩.', mood: 'happy' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Combien ça coûte ? 얼마예요?' },
        { type: 'text', text: '[[얼마|t:combien]] + [[예요|p:yeyo]] = « c’est combien ? ». Encore un mot-question qui se colle à [[예요|p:yeyo]], comme [[어디]] et [[언제]] !' },
        { type: 'breakdown', segments: [
          { ko: '연필', role: 'subject', gloss: 'crayon', particle: { ko: '이', key: 'subject' } },
          { ko: '얼마예요?', role: 'verb', gloss: 'c’est combien ?' },
        ], translation: 'Combien coûte le crayon ?' },
        { type: 'table', head: ['Le mot finit par…', 'Particule de sujet', 'Exemple'], rows: [
          ['une consonne', '[[이|p:subject]]', '[[연필이 얼마예요?]]'],
          ['une voyelle', '[[가|p:subject]]', '[[의자가 얼마예요?]]'],
        ] },
        { type: 'text', text: 'Pour répondre : le prix + [[이에요|p:yeyo]] (car [[원]] finit par une consonne) → [[오백 원이에요|t:c’est 500 wons]].' },
        { type: 'tip', text: 'Tu ne connais pas le nom de l’objet ? Montre-le du doigt 👉 et dis : [[이게 얼마예요?|t:combien coûte ceci ?]]', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', before: '연필', after: ' 얼마예요?', choices: ['이', '가', '을'], answer: 0, translation: 'Combien coûte le crayon ?', explain: '[[연필]] finit par une consonne → [[이|p:subject]].' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '의자', after: ' 얼마예요?', choices: ['가', '이', '를'], answer: 0, translation: 'Combien coûte la chaise ?', explain: '[[의자]] finit par une voyelle → [[가|p:subject]].' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🪙 Une pièce de 500 ₩. [[얼마예요?]]', choices: ['오백 원이에요', '오십 원이에요', '오천 원이에요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '천 원이에요', choices: ['천 원이에요', '칠 원이에요', '백 원이에요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Jeu de la marchande 🛒' },
        { type: 'text', text: 'Lis la scène à voix haute, en jouant les deux rôles. Si tu as des pièces, fais semblant de payer !' },
        { type: 'dialog', lines: [
          { who: 'Marie', ko: '안녕하세요! 이게 얼마예요?', fr: 'Bonjour ! Combien coûte ceci ? (👉 ✏️)' },
          { who: 'Vendeur', ko: '오백 원이에요.', fr: 'C’est 500 wons.' },
          { who: 'Marie', ko: '공책이 얼마예요?', fr: 'Combien coûte le cahier ?' },
          { who: 'Vendeur', ko: '천 원이에요.', fr: 'C’est 1 000 wons.' },
          { who: 'Marie', ko: '연필 주세요. 감사합니다!', fr: 'Un crayon, s’il vous plaît. Merci !' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'order', translation: 'Combien coûte le cahier ?', tiles: ['공책이', '얼마예요?'], distractors: ['공책을', '언제예요?'] } },
    { kind: 'practice', exercise: { type: 'type', prompt: '💵 Un billet de 1 000 ₩. [[얼마예요?]] — réponds :', answer: ['천 원이에요', '천원이에요'] } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🧮 Calcul mental : un crayon coûte [[오백 원]], un cahier [[천 원]]. Les deux ensemble ?', choices: ['천오백 원', '오천 원', '천오 원'], answer: 0, explain: '1 000 + 500 = 1 500 → [[천]] + [[오백]] = [[천오백 원]].' } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Tu es dans une papeterie. Demande le prix du livre 📕.', placeholder: '책이 얼마예요?', mustInclude: ['책이', '얼마예요'] } },
  ],
  interleave: [
    { type: 'mcq', prompt: '📅 Le 3 juin. Tu lis :', choices: ['유월 삼일', '육월 삼일', '삼월 유일'], answer: 0 },
    { type: 'listen', audio: '화요일', choices: ['화요일', '수요일', '토요일'], answer: 0 },
    { type: 'cloze', before: '생일이 ', after: '예요?', choices: ['언제', '며칠', '몇'], answer: 0, translation: 'C’est quand, ton anniversaire ?' },
    { type: 'mcq', prompt: 'Que veut dire [[오늘]] ?', choices: ['aujourd’hui', 'quand ?', 'lundi'], answer: 0 },
  ],
};

const TPR = ['✏️ sur le livre', '✏️ sous le livre', '✏️ à côté du livre'];

const day14: Lesson = {
  id: 'm1-w3-d4',
  month: 1,
  week: 3,
  day: 14,
  title: 'Sur, sous, à côté & la question « Où ? »',
  summary: '연필이 어디에 있어요 ? Situer les objets avec 위, 아래, 옆.',
  cards: [
    { id: 'm1-ko-eodi', kind: 'vocab', ko: '어디', fr: 'où ?', note: '[[어디에 있어요?|t:où est-ce ?]] · [[어디에 가요?|t:où vas-tu ?]]' },
    { id: 'm1-ko-isseoyo', kind: 'phrase', ko: '있어요', fr: 'il y a / se trouver (poli)', note: 'Se prononce [[이써요]]. Infinitif : [[있다]].' },
    { id: 'm1-ko-eopseoyo', kind: 'phrase', ko: '없어요', fr: 'il n’y a pas / ne pas être là (poli)', note: 'Se prononce [[업써요]]. Le contraire de [[있어요]].' },
    { id: 'm1-ko-wi', kind: 'vocab', ko: '위', fr: 'dessus, sur', note: '⬆️ [[책상 위에|t:sur le bureau]]' },
    { id: 'm1-ko-arae', kind: 'vocab', ko: '아래', fr: 'dessous, sous', note: '⬇️ [[의자 아래에|t:sous la chaise]]' },
    { id: 'm1-ko-yeop', kind: 'vocab', ko: '옆', fr: 'à côté', note: '↔️ [[책 옆에|t:à côté du livre]]' },
    { id: 'm1-ko-gabang', kind: 'vocab', ko: '가방', fr: 'sac (cartable)', note: '🎒' },
    { id: 'm1-ko-aniyo', kind: 'vocab', ko: '아니요', fr: 'non (poli)', note: 'Le contraire de [[네|t:oui]].' },
    { id: 'm1-ko-noeuseyo', kind: 'phrase', ko: '놓으세요', fr: 'Posez', note: 'Le [[ㅎ]] ne s’entend pas : [[노으세요]]. [[책 위에 놓으세요|t:posez-le sur le livre]]' },
    { id: 'm1-ko-eodie-isseoyo', kind: 'phrase', ko: '연필이 어디에 있어요?', fr: 'Où est le crayon ?', note: 'Réponse : [[책상 위에 있어요|t:il est sur le bureau]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Où ? 어디' },
        { type: 'text', text: 'Tu connais déjà [[어디]] : [[화장실이 어디예요?]] et [[어디에 가요?]]. Aujourd’hui, on cherche des objets avec un nouveau verbe : [[있어요|t:se trouver, il y a]].' },
        { type: 'breakdown', segments: [
          { ko: '연필', role: 'subject', gloss: 'crayon', particle: { ko: '이', key: 'subject' } },
          { ko: '어디', role: 'place', gloss: 'où', particle: { ko: '에', key: 'location' } },
          { ko: '있어요?', role: 'verb', gloss: 'se trouve' },
        ], translation: 'Où est le crayon ?', note: 'Avec [[있어요]], [[에|p:location]] marque l’endroit **où l’on est** (et non plus où l’on va).' },
        { type: 'text', text: 'Son contraire : [[없어요|t:il n’y a pas, ne pas être là]]. Attention à la liaison : on dit [[이써요]] et [[업써요]].' },
        { type: 'liaison', items: [
          { written: '있어요', spoken: '이써요', fr: 'il y a' },
          { written: '없어요', spoken: '업써요', fr: 'il n’y a pas' },
        ] },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Sur, sous, à côté' },
        { type: 'letters', items: [
          { char: '위', mnemonic: '⬆️ dessus, sur' },
          { char: '아래', mnemonic: '⬇️ dessous, sous' },
          { char: '옆', mnemonic: '↔️ à côté' },
        ] },
        { type: 'text', text: 'L’ordre est **inversé** par rapport au français : on dit d’abord l’objet de repère, **puis** la position. « Sur le bureau » = « le bureau — dessus — à ».' },
        { type: 'breakdown', segments: [
          { ko: '연필', role: 'subject', gloss: 'crayon', particle: { ko: '이', key: 'subject' } },
          { ko: '책상 위', role: 'place', gloss: 'bureau-dessus', particle: { ko: '에', key: 'location' } },
          { ko: '있어요', role: 'verb', gloss: 'se trouve' },
        ], translation: 'Le crayon est sur le bureau.' },
        { type: 'tip', text: 'Les élèves coréens apprennent aussi [[앞|t:devant]] et [[뒤|t:derrière]]. On les gardera pour plus tard : trois positions, c’est déjà très bien !', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque position à sa flèche.', pairs: [['위', '⬆️'], ['아래', '⬇️'], ['옆', '↔️']] } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Le crayon ✏️ est **sur** le livre 📕. Tu dis :', choices: ['책 위에 있어요', '책 아래에 있어요', '책 옆에 있어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que veut dire [[가방이 의자 아래에 있어요]] ?', choices: ['Le sac est sous la chaise.', 'La chaise est sous le sac.', 'Le sac est sur la chaise.'], answer: 0, explain: '[[가방이]] : c’est le sac (le sujet) qui se trouve [[의자 아래에]] : sous la chaise.' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '옆에 있어요', choices: ['옆에 있어요', '위에 있어요', '옆에 없어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'cloze', before: '공책이 책상 ', after: ' 있어요.', choices: ['위에', '위를', '위는'], answer: 0, translation: 'Le cahier est sur le bureau.' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Le livre est à côté du cahier.', tiles: ['책이', '공책', '옆에', '있어요'], distractors: ['공책을'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Jacques a dit ✋' },
        { type: 'text', text: 'Prends un **vrai** crayon et un livre. Écoute la consigne, et **fais le geste** avant de répondre : le corps aide la mémoire !' },
        { type: 'text', text: 'Nouveau verbe-consigne : [[놓으세요|t:posez]]. Le [[ㅎ]] ne s’entend pas : [[노으세요]].' },
        { type: 'breakdown', segments: [
          { ko: '연필', role: 'object', gloss: 'crayon', particle: { ko: '을', key: 'object' } },
          { ko: '책 위', role: 'place', gloss: 'livre-dessus', particle: { ko: '에', key: 'location' } },
          { ko: '놓으세요', role: 'verb', gloss: 'posez' },
        ], translation: 'Posez le crayon sur le livre.', note: 'Une consigne en [[세요|p:seyo]], comme [[앉으세요]] et [[보세요]].' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Le professeur dit… Fais le geste ! ✋', audio: '연필을 책 위에 놓으세요', choices: TPR, answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Le professeur dit… Fais le geste ! ✋', audio: '연필을 책 옆에 놓으세요', choices: TPR, answer: 2 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Le professeur dit… Fais le geste ! ✋', audio: '연필을 책 아래에 놓으세요', choices: TPR, answer: 1 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Il y en a… ou pas ?' },
        { type: 'text', text: 'Pour répondre à une question en [[있어요?]], tu as besoin de [[네|t:oui]]… et de [[아니요|t:non]] !' },
        { type: 'dialog', lines: [
          { who: 'Marie', ko: '연필이 어디에 있어요?', fr: 'Où est le crayon ?' },
          { who: 'Louis', ko: '가방 옆에 있어요.', fr: 'Il est à côté du sac.' },
          { who: 'Marie', ko: '공책이 있어요?', fr: 'Tu as un cahier ? (Il y a un cahier ?)' },
          { who: 'Louis', ko: '네, 있어요. 책상 위에 있어요.', fr: 'Oui. Il est sur le bureau.' },
          { who: 'Marie', ko: '물이 있어요?', fr: 'Il y a de l’eau ?' },
          { who: 'Louis', ko: '아니요, 없어요.', fr: 'Non, il n’y en a pas.' },
        ] },
        { type: 'tip', text: '[[공책이 있어요?]] veut dire « il y a un cahier ? » mais aussi « tu as un cahier ? ». En coréen, on n’a pas un objet : l’objet **est là** pour nous.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Comment dit-on « Il n’y a pas d’eau » ?', choices: ['물이 없어요', '물이 있어요', '물을 없어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[가방이 있어요?]] — Tu n’as pas de sac. Tu réponds :', choices: ['아니요, 없어요', '네, 있어요', '아니요, 있어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[연필이 어디에 있어요?]] — ✏️ est **sur le bureau**. Réponds :', answer: ['책상 위에 있어요', '책상위에 있어요', '책상 위에 있어요', '연필이 책상 위에 있어요'] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Regarde autour de toi : où est ton téléphone ? Utilise [[위]], [[아래]] ou [[옆]] avec un objet que tu connais.', placeholder: '책상 위에 있어요', mustInclude: ['에 있어요'] } },
  ],
  interleave: [
    { type: 'mcq', prompt: '🪙 100 ₩. [[얼마예요?]]', choices: ['백 원이에요', '천 원이에요', '십 원이에요'], answer: 0 },
    { type: 'listen', audio: '삼십팔', choices: ['삼십팔', '팔십삼', '삼팔'], answer: 0 },
    { type: 'mcq', prompt: 'Que veut dire [[생일이 언제예요?]] ?', choices: ['C’est quand, ton anniversaire ?', 'Quelle est la date ?', 'Combien ça coûte ?'], answer: 0 },
    { type: 'cloze', before: '오늘은 토요일', after: '.', choices: ['이에요', '예요', '에'], answer: 0, translation: 'Aujourd’hui, c’est samedi.' },
  ],
};

const QUESTION_BANK = ['언제', '어디', '얼마'];

const DICTATION: [string, string, string[]][] = [
  ['칠', '7', ['7', '1', '8']],
  ['십사', '14', ['14', '40', '41']],
  ['이십삼', '23', ['23', '32', '203']],
  ['삼십팔', '38', ['38', '83', '308']],
  ['사십오', '45', ['45', '54', '405']],
];

const day15: Lesson = {
  id: 'm1-w3-d5',
  month: 1,
  week: 3,
  day: 15,
  title: 'Bilan de la semaine & évaluation n°3',
  summary: 'Nombres, jours, dates, prix et positions : le point, puis une petite évaluation.',
  cards: [],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ta semaine en un coup d’œil' },
        { type: 'text', text: '**Les nombres** : 10 mots suffisent jusqu’à 99, plus [[백]] et [[천]].' },
        { type: 'letters', items: [
          { char: '일', mnemonic: '1' }, { char: '이', mnemonic: '2' }, { char: '삼', mnemonic: '3' }, { char: '사', mnemonic: '4' },
          { char: '오', mnemonic: '5' }, { char: '육', mnemonic: '6' }, { char: '칠', mnemonic: '7' }, { char: '팔', mnemonic: '8' },
          { char: '구', mnemonic: '9' }, { char: '십', mnemonic: '10' }, { char: '백', mnemonic: '100' }, { char: '천', mnemonic: '1 000' },
        ] },
        { type: 'text', text: '**Les jours** : [[월요일]] · [[화요일]] · [[수요일]] · [[목요일]] · [[금요일]] · [[토요일]] · [[일요일]]' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Trois questions clés' },
        { type: 'table', head: ['Mot', 'Sens', 'Exemple'], rows: [
          ['[[언제]]', 'quand ?', '[[생일이 언제예요?]]'],
          ['[[어디]]', 'où ?', '[[연필이 어디에 있어요?]]'],
          ['[[얼마]]', 'combien ? (prix)', '[[이게 얼마예요?]]'],
        ] },
        { type: 'text', text: 'Et le rituel de la date : [[오늘은 몇 월 며칠이에요?]] · [[무슨 요일이에요?]]' },
        { type: 'tip', text: 'Remarque : en coréen, le mot-question reste **à sa place**, juste avant le verbe. Pas de grand chamboulement comme en français !', mood: 'happy' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Jeu de mémoire 🧠' },
        { type: 'text', text: 'Avant l’évaluation, un petit échauffement : relie le plus vite possible, sans regarder au-dessus !' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Les nombres', pairs: [['팔', '8'], ['십이', '12'], ['삼십', '30'], ['육십육', '66'], ['백', '100']] } },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Les jours', pairs: [['화요일', 'mardi'], ['목요일', 'jeudi'], ['토요일', 'samedi'], ['수요일', 'mercredi'], ['금요일', 'vendredi']] } },
    { kind: 'practice', exercise: { type: 'match', prompt: 'L’argent', pairs: [['백 원', '🪙 100 ₩'], ['오백 원', '🪙 500 ₩'], ['천 원', '💵 1 000 ₩'], ['오천 원', '💵 5 000 ₩']] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Évaluation n°3' },
        { type: 'text', text: 'Trois parties, toujours sans chrono ni piège. Chaque erreur reviendra simplement en révision.' },
        { type: 'table', head: ['Partie', 'Contenu'], rows: [
          ['A', 'Dictée de nombres (5) et jours dans l’ordre'],
          ['B', 'Les mots-questions : 언제, 어디, 얼마'],
          ['C', 'À l’oral : un prix et la date'],
        ] },
        { type: 'tip', text: '**A — Dictée.** Pour chaque nombre : d’abord le chiffre, puis le même nombre en hangul. Réécoute autant que tu veux.', mood: 'encourage' },
      ],
    },
    ...DICTATION.flatMap(([ko, digits, choices], i) => [
      { kind: 'practice' as const, exercise: { type: 'mcq' as const, prompt: `**A · ${i + 1}/5** — quel nombre entends-tu ?`, audio: ko, choices, answer: choices.indexOf(digits) } },
      { kind: 'practice' as const, exercise: { type: 'type' as const, prompt: `**A · ${i + 1}/5** — maintenant, écris ${digits} en hangul :`, audio: ko, answer: ko } },
    ]),
    { kind: 'practice', exercise: { type: 'order', prompt: '**A · jours** — remets la semaine dans l’ordre.', translation: 'lundi → dimanche', tiles: DAYS } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**B — Les mots-questions.** Complète avec [[언제]] · [[어디]] · [[얼마]].', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '**B · 1/4**', before: '생일이 ', after: '예요?', choices: QUESTION_BANK, answer: 0, translation: 'C’est quand, ton anniversaire ?' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '**B · 2/4**', before: '가방이 ', after: '에 있어요?', choices: QUESTION_BANK, answer: 1, translation: 'Où est le sac ?' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '**B · 3/4**', before: '이게 ', after: '예요?', choices: QUESTION_BANK, answer: 2, translation: 'Combien coûte ceci ?' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '**B · 4/4**', before: '화장실이 ', after: '예요?', choices: QUESTION_BANK, answer: 1, translation: 'Où sont les toilettes ?' } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**C — À l’oral.** Réponds **à voix haute** comme si le professeur était devant toi, puis écris ta réponse.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'type', prompt: '**C · 1/3** — Le professeur montre 🪙 500 ₩ : [[얼마예요?]]', answer: ['오백 원이에요', '오백원이에요'] } },
    { kind: 'practice', exercise: { type: 'type', prompt: '**C · 2/3** — Il montre une étiquette : ✏️ 1 500 ₩. [[얼마예요?]]', answer: ['천오백 원이에요', '천오백원이에요'] } },
    { kind: 'practice', exercise: { type: 'type', prompt: '**C · 3/3** — Il pointe le calendrier : 📅 **5 mai**. [[오늘은 몇 월 며칠이에요?]]', answer: ['오월 오일이에요', '오월오일이에요', '오늘은 오월 오일이에요'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '오늘은 몇 월 며칠이에요?', fr: 'Quelle est la date d’aujourd’hui ?', prompt: 'Pour finir, lis la question du rituel du matin à voix haute, puis réponds-y avec la vraie date d’aujourd’hui !' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Bravo ! 🎉' },
        { type: 'text', text: 'Cette semaine, tu as appris à **compter**, à dire **la date**, à demander **un prix** et **où** se trouve un objet. Tu peux suivre le rituel du matin avec toute la classe !' },
        { type: 'tip', text: 'Chaque jour, de nouvelles phrases t’attendent. À demain !', mood: 'happy' },
      ],
    },
  ],
};

export const m1w3: Lesson[] = [day11, day12, day13, day14, day15];
