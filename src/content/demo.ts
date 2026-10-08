import type { Lesson } from './types';

export const DEMO_LESSON: Lesson = {
  id: 'demo',
  month: 1,
  week: 0,
  day: 0,
  title: 'Démo des composants',
  summary: 'Aperçu de tous les types de contenus et d’exercices.',
  cards: [],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les blocs syllabiques' },
        { type: 'text', text: 'Le coréen s’écrit en **blocs** : une consonne + une voyelle (+ parfois une consonne finale). Touche un mot pour l’écouter : [[안녕하세요|t:bonjour]].' },
        { type: 'letters', items: [
          { char: 'ㄱ', roman: 'g/k', mnemonic: 'Une potence, la langue touche le fond du palais.' },
          { char: 'ㄴ', roman: 'n', mnemonic: 'La langue contre les dents du haut.' },
          { char: 'ㅁ', roman: 'm', mnemonic: 'Une bouche fermée, un carré.' },
        ] },
        { type: 'tip', text: 'Les explications de grammaire s’ouvrent en touchant une particule : [[는|p:topic]], [[가|p:subject]], [[를|p:object]].', mood: 'thinking' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ordre de la phrase : SOV' },
        { type: 'breakdown', segments: [
          { ko: '저', role: 'topic', gloss: 'moi', particle: { ko: '는', key: 'topic' } },
          { ko: '사과', role: 'object', gloss: 'pomme', particle: { ko: '를', key: 'object' } },
          { ko: '먹어요', role: 'verb', gloss: 'manger' },
        ], translation: 'Je mange une pomme.', note: 'Le verbe est **toujours à la fin**.' },
        { type: 'dialog', lines: [
          { who: 'A', ko: '안녕하세요!', fr: 'Bonjour !' },
          { who: 'B', ko: '안녕하세요! 감사합니다.', fr: 'Bonjour ! Merci.' },
        ] },
        { type: 'table', head: ['Forme', 'Après'], rows: [['은', 'consonne'], ['는', 'voyelle']] },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Assemblage & ordre des traits' },
        { type: 'compose', items: [{ parts: ['ㄱ', 'ㅏ'], result: '가', roman: 'ga' }, { parts: ['ㅁ', 'ㅜ', 'ㄹ'], result: '물', roman: 'mul' }] },
        { type: 'strokes', chars: ['ㄹ', 'ㅂ', '가'] },
        { type: 'liaison', items: [{ written: '집에', spoken: '지베', fr: 'à la maison' }] },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Horloge & ligne du temps' },
        { type: 'clock', h: 3, m: 10, interactive: true },
        { type: 'timeline', start: 1, points: [
          { label: '어제', ko: '어제 갔어요', fr: 'hier' },
          { label: '오늘', ko: '오늘 가요', fr: 'aujourd’hui' },
          { label: '내일', ko: '내일 가요', fr: 'demain' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que veut dire [[감사합니다]] ?', choices: ['Bonjour', 'Merci', 'Au revoir'], answer: 1 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '안녕하세요', choices: ['안녕하세요', '감사합니다', '화장실'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'cloze', before: '저', after: ' 학생이에요.', choices: ['는', '은', '를'], answer: 0, translation: 'Je suis étudiant.', explain: '저 finit par une voyelle → [[는|p:topic]].' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Je mange une pomme.', tiles: ['저는', '사과를', '먹어요'], distractors: ['가'] } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Écris « bonjour » avec le clavier :', answer: '안녕하세요', audio: '안녕하세요' } },
    { kind: 'practice', exercise: { type: 'trace', char: 'ㄴ', roman: 'n', prompt: 'Trace la lettre en suivant le modèle.' } },
    { kind: 'practice', exercise: { type: 'read', ko: '학교', fr: 'école' } },
    { kind: 'practice', exercise: { type: 'clock', prompt: '[[세 시 반]] — place les aiguilles.', h: 3, m: 30 } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Écris ton prénom en hangul :', placeholder: '마리' } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Complète le tableau des temps.', head: ['Verbe', '어제', '오늘', '내일'], rows: [
      ['가다', '갔어요', '가요', { answer: ['갈 거예요', '갈거예요'] }],
      ['먹다', { answer: '먹었어요' }, '먹어요', '먹을 거예요'],
    ] } },
    { kind: 'practice', exercise: { type: 'match', pairs: [['안녕하세요', 'Bonjour'], ['감사합니다', 'Merci'], ['화장실', 'Toilettes']] } },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Poli (존댓말) ou familier (반말) ?', buckets: ['존댓말', '반말'], items: [
      { text: '안녕하세요', bucket: 0 }, { text: '안녕', bucket: 1 }, { text: '고마워', bucket: 1 }, { text: '감사합니다', bucket: 0 },
    ] } },
  ],
  interleave: [],
};
