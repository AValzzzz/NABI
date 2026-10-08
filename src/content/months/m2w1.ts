import type { CardSeed, Lesson } from '../types';

const nat = (n: number, ko: string, note?: string): CardSeed => ({ id: `m2-ko-nat-${n}`, kind: 'vocab', ko, fr: `${n} (coréen natif)`, note });

const PAST_ANY = [
  '갔어요', '샀어요', '잤어요', '봤어요', '했어요', '먹었어요', '마셨어요', '읽었어요',
  '있었어요', '없었어요', '좋았어요', '작았어요', '컸어요', '나빴어요',
].join('|');

const day21: Lesson = {
  id: 'm2-w1-d1',
  month: 2,
  week: 1,
  day: 21,
  title: 'Quelle heure est-il ? 지금 몇 시예요?',
  summary: 'Les nombres coréens natifs pour les heures (한 시, 두 시…), les minutes en sino-coréen, et l’emploi du temps.',
  cards: [
    nat(1, '하나', 'Devant une unité, il raccourcit : [[한 시|t:1 h]].'),
    nat(2, '둘', 'Devant une unité : [[두 시|t:2 h]].'),
    nat(3, '셋', 'Devant une unité : [[세 시|t:3 h]].'),
    nat(4, '넷', 'Devant une unité : [[네 시|t:4 h]]. (Même son que [[네|t:oui]] !)'),
    nat(5, '다섯', '[[다섯 시|t:5 h]] : pas de changement.'),
    nat(6, '여섯', '[[여섯 시|t:6 h]]'),
    nat(7, '일곱', '[[일곱 시|t:7 h]]'),
    nat(8, '여덟', 'Le [[ㅂ]] final ne s’entend pas : [[여덜]].'),
    nat(9, '아홉', '[[아홉 시|t:9 h]]'),
    nat(10, '열', '[[열 시|t:10 h]]'),
    { id: 'm2-ko-yeoldu-si', kind: 'grammar', ko: '열한 시 · 열두 시', fr: '11 h · 12 h (열 + 한 / 열 + 두)', speak: '열한 시, 열두 시', note: '[[열|t:10]] + [[하나]] → [[열한 시]] · [[열|t:10]] + [[둘]] → [[열두 시]]' },
    { id: 'm2-ko-si', kind: 'vocab', ko: '시', fr: 'heure (… heures)', note: 'Avec les nombres **natifs** : [[한 시]], [[두 시]], [[세 시]]…' },
    { id: 'm2-ko-bun', kind: 'vocab', ko: '분', fr: 'minute(s)', note: 'Avec les nombres **sino-coréens** : [[오 분]], [[십 분]], [[삼십 분]].' },
    { id: 'm2-ko-ban', kind: 'vocab', ko: '반', fr: 'et demie (30 minutes)', note: '[[세 시 반|t:3 h 30]]' },
    { id: 'm2-ko-jigeum', kind: 'vocab', ko: '지금', fr: 'maintenant', note: '⏰ [[지금 몇 시예요?|t:quelle heure est-il ?]]' },
    { id: 'm2-ko-myeot-si', kind: 'phrase', ko: '지금 몇 시예요?', fr: 'Quelle heure est-il (maintenant) ?', note: 'Réponse : [[세 시예요|t:il est 3 h]] · [[세 시 반이에요|t:il est 3 h 30]].' },
    { id: 'm2-ko-time', kind: 'grammar', ko: '세 시 십 분', fr: '3 h 10 (heure en natif, minutes en sino-coréen)', note: '[[세|t:3 natif]] [[시]] · [[십|t:10 sino]] [[분]]' },
    { id: 'm2-ko-si-e', kind: 'particle', ko: '아홉 시에', fr: 'à 9 h (에 = moment)', note: '[[에|p:time]] après l’heure : [[아홉 시에 학교에 가요|t:à 9 h, je vais à l’école]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le deuxième système : les nombres natifs' },
        { type: 'text', text: 'Tu te souviens ? Le coréen a **deux façons de compter**. Tu connais déjà le sino-coréen : [[일]], [[이]], [[삼]]… Voici maintenant les nombres **coréens natifs**. Ils servent pour **l’heure**, l’âge et pour compter les objets.' },
        { type: 'letters', items: [
          { char: '하나', mnemonic: '1' }, { char: '둘', mnemonic: '2' }, { char: '셋', mnemonic: '3' }, { char: '넷', mnemonic: '4' },
          { char: '다섯', mnemonic: '5 ✋' }, { char: '여섯', mnemonic: '6' }, { char: '일곱', mnemonic: '7' }, { char: '여덟', mnemonic: '8' },
          { char: '아홉', mnemonic: '9' }, { char: '열', mnemonic: '10 🙌' },
        ] },
        { type: 'tip', text: 'Les enfants coréens les apprennent en comptant sur leurs doigts, en chantant : [[하나, 둘, 셋!]] Fais pareil : un doigt par nombre ✋🤚', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'read', ko: '하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열', fr: '1 2 3 4 5 6 7 8 9 10', prompt: 'Compte à voix haute **sur tes doigts**, puis écoute le modèle.' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '셋', choices: ['셋', '넷', '세'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '여덟', choices: ['여덟', '여섯', '열'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque nombre natif à son chiffre.', pairs: [['하나', '1'], ['넷', '4'], ['다섯', '5'], ['일곱', '7'], ['열', '10']] } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quel nombre est [[아홉]] ?', choices: ['9', '8', '6', '2'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les heures : nombre natif + 시' },
        { type: 'text', text: '[[시|t:heure]] se met **après** le nombre natif. Attention : devant [[시]], quatre nombres **raccourcissent** (ils perdent leur dernière lettre) :' },
        { type: 'table', head: ['Nombre', 'Devant 시', 'Heure'], rows: [
          ['[[하나]]', '[[한]] ✂️', '[[한 시]] · 1 h'],
          ['[[둘]]', '[[두]] ✂️', '[[두 시]] · 2 h'],
          ['[[셋]]', '[[세]] ✂️', '[[세 시]] · 3 h'],
          ['[[넷]]', '[[네]] ✂️', '[[네 시]] · 4 h'],
          ['[[다섯]] … [[열]]', 'pas de changement', '[[다섯 시]] · [[열 시]]'],
          ['[[열]] + [[하나]]', '[[열한]] ✂️', '[[열한 시]] · 11 h'],
          ['[[열]] + [[둘]]', '[[열두]] ✂️', '[[열두 시]] · 12 h'],
        ] },
        { type: 'clock', h: 3, m: 0 },
        { type: 'tip', text: 'Petit jeu de mots : [[네]] veut dire « oui »… et « 4 » devant [[시]] ! [[네, 네 시예요!|t:oui, il est 4 h !]] 😄', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🕓 4:00', choices: ['네 시', '넷 시', '사 시'], answer: 0, explain: 'Nombre **natif** pour l’heure, raccourci devant [[시]] : [[넷]] → [[네 시]].' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🕘 9:00', choices: ['아홉 시', '구 시', '아홉 분'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '열두 시', choices: ['열두 시', '열한 시', '두 시'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'clock', prompt: '[[일곱 시]] — place les aiguilles.', h: 7, m: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Écris **2 h** en coréen :', answer: ['두 시', '두시'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les minutes : retour du sino-coréen' },
        { type: 'text', text: 'Pour les minutes, on reprend les nombres **sino-coréens** de la semaine 3, + [[분|t:minute]]. Une heure complète mélange donc **les deux systèmes** :' },
        { type: 'breakdown', segments: [
          { ko: '세 시', role: 'time', gloss: '3 h (natif)' },
          { ko: '십 분', role: 'time', gloss: '10 min (sino)' },
        ], translation: '3 h 10' },
        { type: 'table', head: ['Minutes', 'Coréen'], rows: [
          [':05', '[[오 분]]'],
          [':10', '[[십 분]]'],
          [':15', '[[십오 분]]'],
          [':20', '[[이십 분]]'],
          [':30', '[[삼십 분]] ou [[반|t:et demie]]'],
          [':45', '[[사십오 분]]'],
        ] },
        { type: 'tip', text: 'Le truc de Nabi : la **petite** aiguille (les heures) parle coréen **natif**, la **grande** aiguille (les minutes) parle **sino-coréen**.', mood: 'thinking' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'L’horloge de la classe ⏰' },
        { type: 'text', text: 'Fais tourner les aiguilles et touche l’heure pour l’écouter. Essaie [[세 시 반]], puis [[여덟 시 십오 분]], puis [[열한 시 사십오 분]].' },
        { type: 'clock', h: 3, m: 30, interactive: true },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🕒 3:10', choices: ['세 시 십 분', '삼 시 십 분', '세 시 열 분'], answer: 0, explain: 'Heures en **natif** ([[세]]), minutes en **sino-coréen** ([[십]]).' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '일곱 시 반', choices: ['일곱 시 반', '여덟 시 반', '일곱 시 십 분'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'clock', prompt: '[[네 시 이십 분]] — place les aiguilles.', h: 4, m: 20 } },
    { kind: 'practice', exercise: { type: 'clock', prompt: '[[들으세요!]] 🎧 Place les aiguilles.', audio: '여덟 시 반', h: 8, m: 30 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🕐 1:30 — écris l’heure en coréen :', answer: ['한 시 반', '한시 반', '한 시 삼십 분', '한시 삼십분', '한 시 삼십분'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: '지금 몇 시예요?' },
        { type: 'text', text: '[[지금|t:maintenant]] + [[몇 시|t:quelle heure]] + [[예요|p:yeyo]] : tu connais déjà presque toutes les pièces !' },
        { type: 'breakdown', segments: [
          { ko: '지금', role: 'time', gloss: 'maintenant' },
          { ko: '몇 시예요?', role: 'verb', gloss: 'quelle heure est-ce ?' },
        ], translation: 'Quelle heure est-il ?' },
        { type: 'table', head: ['L’heure finit par…', 'On ajoute', 'Exemple'], rows: [
          ['[[시]] (voyelle)', '[[예요|p:yeyo]]', '[[세 시예요]]'],
          ['[[반]], [[분]] (consonne)', '[[이에요|p:yeyo]]', '[[세 시 반이에요]] · [[세 시 십 분이에요]]'],
        ] },
        { type: 'dialog', lines: [
          { who: 'Marie', ko: '지금 몇 시예요?', fr: 'Quelle heure est-il ?' },
          { who: 'Louis', ko: '여덟 시 반이에요.', fr: 'Il est 8 h 30.' },
          { who: 'Marie', ko: '아! 학교에 가요!', fr: 'Ah ! Je vais à l’école !' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', before: '지금 두 시', after: '.', choices: ['예요', '이에요', '에'], answer: 0, translation: 'Il est 2 h.', explain: '[[시]] finit par une voyelle → [[예요|p:yeyo]].' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '지금 세 시 반', after: '.', choices: ['이에요', '예요', '을'], answer: 0, translation: 'Il est 3 h 30.', explain: '[[반]] finit par une consonne → [[이에요|p:yeyo]].' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[지금 몇 시예요?]] 🕙 10:00', choices: ['열 시예요', '십 시예요', '열 분이에요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'L’emploi du temps 🗓️' },
        { type: 'text', text: 'Pour dire **à quelle heure** on fait quelque chose, on colle le [[에|p:time]] du temps à l’heure, comme pour les mois ([[오월에]]).' },
        { type: 'breakdown', segments: [
          { ko: '아홉 시', role: 'time', gloss: '9 h', particle: { ko: '에', key: 'time' } },
          { ko: '학교', role: 'place', gloss: 'école', particle: { ko: '에', key: 'place' } },
          { ko: '가요', role: 'verb', gloss: 'vais' },
        ], translation: 'À 9 h, je vais à l’école.', note: 'Toujours le même ordre : **quand** → **où** → **verbe**.' },
        { type: 'table', head: ['Heure', 'Activité'], rows: [
          ['[[여덟 시에]]', '🍚 [[밥을 먹어요]]'],
          ['[[아홉 시에]]', '🏫 [[학교에 가요]]'],
          ['[[열두 시 반에]]', '🥛 [[우유를 마셔요]]'],
          ['[[세 시에]]', '🏠 [[집에 가요]]'],
          ['[[열 시에]]', '😴 [[자요]]'],
        ] },
        { type: 'tip', text: 'Et la question : [[몇 시에 학교에 가요?|t:à quelle heure vas-tu à l’école ?]]', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'D’après l’emploi du temps : [[몇 시에 집에 가요?]]', choices: ['세 시에 가요', '아홉 시에 가요', '열 시에 가요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'order', translation: 'À 10 h, je dors.', tiles: ['열 시에', '자요'], distractors: ['십 시에', '열 시를'] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ton emploi du temps : à quelle heure manges-tu ? Écris l’heure + [[에|p:time]] + l’action.', placeholder: '여덟 시에 밥을 먹어요', mustInclude: ['시에'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '지금 몇 시예요?', fr: 'Quelle heure est-il ?', prompt: 'Lis la question à voix haute… puis regarde une vraie horloge et réponds-y en coréen !' } },
  ],
  interleave: [
    { type: 'mcq', prompt: '😊 + 🥛', choices: ['우유를 좋아해요', '우유를 싫어해요', '우유가 커요'], answer: 0 },
    { type: 'listen', audio: '십오', choices: ['십오', '오십', '십오일'], answer: 0 },
    { type: 'cloze', before: '동생', after: ' 있어요?', choices: ['이', '가', '을'], answer: 0, translation: 'As-tu un petit frère ou une petite sœur ?' },
    { type: 'mcq', prompt: 'Louis 👦 parle de son **grand frère** :', choices: ['형', '오빠', '누나'], answer: 0 },
  ],
};

const day22: Lesson = {
  id: 'm2-w1-d2',
  month: 2,
  week: 1,
  day: 22,
  title: 'Le passé : 갔어요, 먹었어요',
  summary: 'Raconter ce qu’on a fait : -았어요 (voyelles claires), -었어요 (voyelles sombres), 했어요.',
  cards: [
    { id: 'm2-ko-gongbuhaeyo', kind: 'phrase', ko: '공부해요', fr: 'j’étudie (poli)', note: '📚 Infinitif : [[공부하다]]. [[한국어를 공부해요|t:j’étudie le coréen]]' },
    { id: 'm2-ko-ilgeoyo', kind: 'phrase', ko: '읽어요', fr: 'je lis (poli)', note: '📖 Infinitif : [[읽다]]. Se prononce [[일거요]].' },
    { id: 'm2-ko-bwayo', kind: 'phrase', ko: '봐요', fr: 'je regarde, je vois (poli)', note: '👀 Infinitif : [[보다]], comme dans [[보세요]]. [[보]] + 아요 → [[봐요]].' },
    { id: 'm2-ko-haeyo', kind: 'phrase', ko: '해요', fr: 'je fais (poli)', note: '✋ Infinitif : [[하다|p:hada]]. [[뭐 해요?|t:qu’est-ce que tu fais ?]]' },
    { id: 'm2-ko-achim', kind: 'vocab', ko: '아침', fr: 'matin ; petit-déjeuner', note: '🌅 [[아침에|t:le matin]] · [[아침을 먹어요|t:je prends le petit-déjeuner]]' },
    { id: 'm2-ko-past-a', kind: 'grammar', ko: '갔어요', fr: 'je suis allé(e) — ㅏ / ㅗ → -았어요', note: '🔴 [[가]] + 았어요 → [[갔어요]]. Aussi : [[잤어요]] · [[샀어요]] · [[봤어요]]' },
    { id: 'm2-ko-past-eo', kind: 'grammar', ko: '먹었어요', fr: 'j’ai mangé — autres voyelles → -었어요', note: '🔵 [[먹]] + 었어요 → [[먹었어요]]. Aussi : [[읽었어요]] · [[마셨어요]]' },
    { id: 'm2-ko-past-ha', kind: 'grammar', ko: '공부했어요', fr: 'j’ai étudié — 하다 → 했어요', note: '⭐ [[해요]] → [[했어요]]. Aussi : [[좋아했어요]]. Règle : [[passé|p:past]]' },
    { id: 'm2-ko-mwo-haesseoyo', kind: 'phrase', ko: '뭐 했어요?', fr: 'Qu’as-tu fait ?', note: '[[아침에 뭐 했어요?|t:qu’as-tu fait ce matin ?]] — [[밥을 먹었어요|t:j’ai mangé]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Quatre nouveaux verbes' },
        { type: 'letters', items: [
          { char: '공부해요', mnemonic: '📚 j’étudie' },
          { char: '읽어요', mnemonic: '📖 je lis' },
          { char: '봐요', mnemonic: '👀 je regarde' },
          { char: '해요', mnemonic: '✋ je fais' },
        ] },
        { type: 'text', text: '[[공부하다]] et [[하다]] sont des verbes en [[하다|p:hada]] → [[해요]]. [[봐요]] vient de [[보다]] (tu connais [[보세요]]) : [[보]] + 아요 → [[봐요]], les deux voyelles **fusionnent**.' },
        { type: 'liaison', items: [{ written: '읽어요', spoken: '일거요', fr: 'je lis' }] },
        { type: 'text', text: 'Et un nouveau mot : [[아침|t:matin]] 🌅. Il veut aussi dire « petit-déjeuner » : [[아침을 먹어요]].' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque verbe à son image.', pairs: [['공부해요', '📚'], ['읽어요', '📖'], ['봐요', '👀'], ['자요', '😴'], ['마셔요', '🥤']] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '읽어요', choices: ['읽어요', '일어나세요', '있어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'cloze', before: '책을 ', after: '.', choices: ['읽어요', '마셔요', '자요'], answer: 0, translation: 'Je lis un livre.' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '한국어를 ', after: '.', choices: ['공부해요', '먹어요', '가요'], answer: 0, translation: 'J’étudie le coréen.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le son du passé : ㅆ' },
        { type: 'text', text: 'Jusqu’ici, tous tes verbes étaient au présent. Pour raconter ce que tu as **fait**, le coréen glisse un petit **ㅆ** dans le verbe : c’est le [[passé|p:past]]. Écoute la différence :' },
        { type: 'table', head: ['Présent', 'Passé'], rows: [
          ['[[가요]] · je vais', '[[갔어요]] · je suis allé(e)'],
          ['[[먹어요]] · je mange', '[[먹었어요]] · j’ai mangé'],
          ['[[공부해요]] · j’étudie', '[[공부했어요]] · j’ai étudié'],
        ] },
        { type: 'liaison', items: [
          { written: '갔어요', spoken: '가써요', fr: 'je suis allé(e)' },
          { written: '먹었어요', spoken: '머거써요', fr: 'j’ai mangé' },
        ] },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Voyelles claires 🔴, voyelles sombres 🔵' },
        { type: 'text', text: 'Comme au présent, tout dépend de la **dernière voyelle** de l’infinitif (sans [[다]]) :' },
        { type: 'table', head: ['Dernière voyelle', 'Passé', 'Exemples'], rows: [
          ['🔴 [[ㅏ]] ou [[ㅗ]] (claires ☀️)', '**-았어요**', '[[가다]] → [[갔어요]] · [[보다]] → [[봤어요]]'],
          ['🔵 toutes les autres (sombres 🌙)', '**-었어요**', '[[먹다]] → [[먹었어요]] · [[읽다]] → [[읽었어요]]'],
          ['⭐ [[하다]]', '**했어요**', '[[공부하다]] → [[공부했어요]]'],
        ] },
        { type: 'compose', items: [
          { parts: ['먹', '었어요'], result: '먹었어요' },
          { parts: ['읽', '었어요'], result: '읽었어요' },
        ] },
        { type: 'tip', text: 'C’est **la même règle** qu’au [[présent|p:present]] ! Tu dis [[먹어요]] ? Alors ce sera [[먹었어요]].', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'sort', prompt: '🔴 -았어요 ou 🔵 -었어요 ?', buckets: ['🔴 -았어요', '🔵 -었어요'], items: [
      { text: '가다', bucket: 0 }, { text: '자다', bucket: 0 }, { text: '사다', bucket: 0 }, { text: '보다', bucket: 0 },
      { text: '먹다', bucket: 1 }, { text: '읽다', bucket: 1 }, { text: '마시다', bucket: 1 }, { text: '있다', bucket: 1 },
    ], explain: 'Dernière voyelle [[ㅏ]] ou [[ㅗ]] → 🔴 [[-았어요]]. Sinon → 🔵 [[-었어요]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Quand les voyelles fusionnent' },
        { type: 'text', text: 'Si le radical finit par une voyelle, elle fusionne avec la terminaison, **exactement comme au présent** :' },
        { type: 'compose', items: [
          { parts: ['가', '았어요'], result: '갔어요' },
          { parts: ['자', '았어요'], result: '잤어요' },
          { parts: ['보', '았어요'], result: '봤어요' },
          { parts: ['마시', '었어요'], result: '마셨어요' },
        ] },
        { type: 'tip', text: '**L’astuce de Nabi** 🐛 : prends le présent que tu connais, enlève [[요]], glisse un **ㅆ** sous la dernière syllabe, puis ajoute [[어요]]. Ça marche avec tous tes verbes !', mood: 'happy' },
        { type: 'compose', items: [
          { parts: ['가', 'ㅆ', '어요'], result: '갔어요' },
          { parts: ['마셔', 'ㅆ', '어요'], result: '마셨어요' },
          { parts: ['해', 'ㅆ', '어요'], result: '했어요' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Passé de [[자다]] (dormir) :', choices: ['잤어요', '자었어요', '잣어요'], answer: 0, explain: '[[자]] + 았어요 → [[잤어요]] : les voyelles fusionnent.' } },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque infinitif à son passé.', pairs: [['가다', '갔어요'], ['먹다', '먹었어요'], ['공부하다', '공부했어요'], ['마시다', '마셨어요'], ['보다', '봤어요']] } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Passé de [[사다]] (acheter) :', answer: '샀어요' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[읽어요]] → au passé :', answer: '읽었어요' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '마셨어요', choices: ['마셨어요', '마셔요', '먹었어요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: '아침에 뭐 했어요?' },
        { type: 'text', text: 'Avec [[뭐|t:quoi]] et [[했어요|t:as fait]], tu peux poser LA question du passé : [[뭐 했어요?|t:qu’as-tu fait ?]]' },
        { type: 'breakdown', segments: [
          { ko: '아침', role: 'time', gloss: 'matin', particle: { ko: '에', key: 'time' } },
          { ko: '밥', role: 'object', gloss: 'riz, repas', particle: { ko: '을', key: 'object' } },
          { ko: '먹었어요', role: 'verb', gloss: 'ai mangé' },
        ], translation: 'Ce matin, j’ai mangé.', note: 'Le [[에|p:time]] du temps se colle à [[아침]], comme à l’heure.' },
        { type: 'dialog', lines: [
          { who: 'Marie', ko: '루이, 아침에 뭐 했어요?', fr: 'Louis, qu’as-tu fait ce matin ?' },
          { who: 'Louis', ko: '밥을 먹었어요. 우유를 마셨어요.', fr: 'J’ai mangé. J’ai bu du lait.' },
          { who: 'Louis', ko: '마리, 아침에 뭐 했어요?', fr: 'Marie, qu’as-tu fait ce matin ?' },
          { who: 'Marie', ko: '책을 읽었어요!', fr: 'J’ai lu un livre !' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’a fait **Marie** ce matin ?', choices: ['📖 lire un livre', '🍚 manger', '🥛 boire du lait'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Du présent au passé ✏️' },
        { type: 'text', text: 'Activité de la classe : on prend un petit texte au présent, et on le **raconte au passé**. [[보세요!]]' },
        { type: 'table', head: ['Présent', 'Passé'], rows: [
          ['[[학교에 가요.]]', '[[학교에 갔어요.]]'],
          ['[[한국어를 공부해요.]]', '[[한국어를 공부했어요.]]'],
          ['[[집에 가요.]]', '[[집에 갔어요.]]'],
        ] },
        { type: 'text', text: 'À toi : [[쓰세요!]] ✍️' },
      ],
    },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Mets au passé : [[우유를 마셔요.]]', answer: '우유를 마셨어요' } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Mets au passé : [[꽃을 사요.]]', answer: '꽃을 샀어요' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que veut dire [[한국어를 공부했어요]] ?', choices: ['J’ai étudié le coréen.', 'J’étudie le coréen.', 'J’aime le coréen.'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Ce matin, j’ai mangé.', tiles: ['아침에', '밥을', '먹었어요'], distractors: ['먹어요', '밥이'] } },
    { kind: 'practice', exercise: { type: 'write', prompt: '[[아침에 뭐 했어요?]] Écris ce que **tu** as fait ce matin.', placeholder: '아침에 밥을 먹었어요', mustInclude: ['아침에', PAST_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '아침에 밥을 먹었어요.', fr: 'Ce matin, j’ai mangé.' } },
  ],
  interleave: [
    { type: 'clock', prompt: '[[열 시]] — place les aiguilles.', h: 10, m: 0 },
    { type: 'mcq', prompt: '[[지금 몇 시예요?]] 🕝 2:30', choices: ['두 시 반이에요', '이 시 반이에요', '두 시 삼 분이에요'], answer: 0 },
    { type: 'listen', audio: '다섯', choices: ['다섯', '여섯', '셋'], answer: 0 },
    { type: 'cloze', before: '아홉 시', after: ' 학교에 가요.', choices: ['에', '를', '는'], answer: 0, translation: 'À 9 h, je vais à l’école.' },
  ],
};

const day23: Lesson = {
  id: 'm2-w1-d3',
  month: 2,
  week: 1,
  day: 23,
  title: 'Et puis… donc ! 그리고 · 그래서',
  summary: 'Enchaîner deux phrases au passé avec 그리고 et 그래서, et raconter sa journée : 아침, 점심, 저녁.',
  cards: [
    { id: 'm2-ko-jeomsim', kind: 'vocab', ko: '점심', fr: 'midi ; déjeuner', note: '🌞 [[점심에|t:à midi]] · [[점심을 먹어요|t:je déjeune]]' },
    { id: 'm2-ko-jeonyeok', kind: 'vocab', ko: '저녁', fr: 'soir ; dîner', note: '🌙 [[저녁에|t:le soir]] · [[저녁을 먹어요|t:je dîne]]' },
    { id: 'm2-ko-geurigo', kind: 'vocab', ko: '그리고', fr: 'et, et puis (entre deux phrases)', note: '➡️ [[학교에 갔어요. 그리고 공부했어요.|t:je suis allé(e) à l’école, et j’ai étudié]]' },
    { id: 'm2-ko-geuraeseo', kind: 'vocab', ko: '그래서', fr: 'donc, alors (conséquence)', note: '💡 [[한국어를 좋아해요. 그래서 한국어를 공부해요.|t:j’aime le coréen, donc je l’étudie]]' },
    { id: 'm2-ko-geurigo-gram', kind: 'grammar', ko: '학교에 갔어요. 그리고 공부했어요.', fr: 'Je suis allé(e) à l’école. Et j’ai étudié.', note: '[[그리고]] ouvre la **deuxième** phrase, après le point.' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: '아침 · 점심 · 저녁' },
        { type: 'letters', items: [
          { char: '아침', mnemonic: '🌅 matin · petit-déj' },
          { char: '점심', mnemonic: '🌞 midi · déjeuner' },
          { char: '저녁', mnemonic: '🌙 soir · dîner' },
        ] },
        { type: 'text', text: 'Ces trois mots désignent à la fois **le moment** et **le repas** : [[점심에|t:à midi]] · [[저녁을 먹었어요|t:j’ai dîné]].' },
        { type: 'tip', text: '[[아침에 밥을 먹어요. 점심에 밥을 먹어요. 저녁에 밥을 먹어요!]] 🍚🍚🍚 En Corée, le riz est à tous les repas. C’est pour ça que [[밥]] veut aussi dire « repas » !', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque moment de la journée.', pairs: [['아침', '🌅'], ['점심', '🌞'], ['저녁', '🌙']] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '저녁', choices: ['저녁', '점심', '지금'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'cloze', before: '점심', after: ' 우유를 마셨어요.', choices: ['에', '을', '이'], answer: 0, translation: 'À midi, j’ai bu du lait.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: '그리고 : et puis…' },
        { type: 'text', text: 'En français, on relie deux phrases avec « et ». En coréen, on **termine** la première phrase, puis on commence la deuxième par [[그리고|t:et, et puis]]. Comme des cartes qu’on pose côte à côte 🃏 :' },
        { type: 'table', head: ['Carte 1', '', 'Carte 2'], rows: [
          ['[[학교에 갔어요.]]', '[[그리고]]', '[[공부했어요.]]'],
          ['[[밥을 먹었어요.]]', '[[그리고]]', '[[우유를 마셨어요.]]'],
          ['[[책을 읽었어요.]]', '[[그리고]]', '[[잤어요.]]'],
        ] },
        { type: 'tip', text: '⚠️ [[그리고]] relie des **phrases**. Pour « du lait **et** une pomme », il existe un autre petit mot : on le verra plus tard.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'order', translation: 'Je suis allé(e) à l’école. Et j’ai étudié.', tiles: ['학교에 갔어요.', '그리고', '공부했어요.'], distractors: ['공부해요.'] } },
    { kind: 'practice', exercise: { type: 'cloze', before: '책을 읽었어요. ', after: ' 잤어요.', choices: ['그리고', '저녁', '네'], answer: 0, translation: 'J’ai lu un livre. Et puis j’ai dormi.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: '그래서 : donc' },
        { type: 'text', text: '[[그래서|t:donc]] annonce une **conséquence** : la phrase 1 est la cause, la phrase 2 le résultat.' },
        { type: 'table', head: ['Cause', '', 'Résultat'], rows: [
          ['[[한국어를 좋아해요.]]', '[[그래서]]', '[[한국어를 공부해요.]]'],
          ['[[물이 없었어요.]]', '[[그래서]]', '[[우유를 마셨어요.]]'],
          ['[[사과를 좋아해요.]]', '[[그래서]]', '[[사과를 샀어요.]]'],
        ] },
        { type: 'text', text: '**그리고 ou 그래서 ?** Demande-toi : la phrase 2 est-elle **une suite** ➡️ ([[그리고]]) ou **un résultat** 💡 ([[그래서]]) ?' },
        { type: 'tip', text: 'Les élèves coréens apprennent aussi [[그러니까|t:c’est pour ça que]], un cousin de [[그래서]]. Tu le rencontreras plus tard !', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', before: '물이 없었어요. ', after: ' 우유를 마셨어요.', choices: ['그래서', '그리고'], answer: 0, translation: 'Il n’y avait pas d’eau. Donc j’ai bu du lait.', explain: 'Pas d’eau 👉 c’est **pour ça** que j’ai bu du lait : un résultat 💡.' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '아침을 먹었어요. ', after: ' 학교에 갔어요.', choices: ['그리고', '그래서'], answer: 0, translation: 'J’ai pris mon petit-déjeuner. Et puis je suis allé(e) à l’école.', explain: 'Aller à l’école n’est pas un **résultat** du petit-déjeuner : c’est une suite ➡️.' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '고기를 좋아해요. ', after: ' 고기를 샀어요.', choices: ['그래서', '그리고'], answer: 0, translation: 'J’aime la viande. Donc j’ai acheté de la viande.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le petit paragraphe de Marie 📝' },
        { type: 'text', text: 'En classe, chacun raconte sa journée en quelques phrases. Voici celle de Marie, **sans traduction**. [[들으세요!]] Touche chaque ligne.' },
        { type: 'text', text: '[[아침에 밥을 먹었어요. 그리고 우유를 마셨어요.]]' },
        { type: 'text', text: '[[여덟 시 반에 학교에 갔어요. 한국어를 공부했어요.]]' },
        { type: 'text', text: '[[한국어를 좋아해요. 그래서 저녁에 책을 읽었어요.]]' },
        { type: 'text', text: '[[열 시에 잤어요.]] 😴' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[몇 시에 학교에 갔어요?]]', choices: ['여덟 시 반에 갔어요', '아홉 시 반에 갔어요', '열 시에 갔어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi Marie a-t-elle lu un livre le soir ?', choices: ['Elle aime le coréen.', 'Il n’y avait pas d’eau.', 'Il était 10 h.'], answer: 0, explain: '[[한국어를 좋아해요. 그래서…]] : [[그래서]] annonce le résultat.' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[몇 시에 잤어요?]]', choices: ['열 시에 잤어요', '여덟 시에 잤어요', '열두 시에 잤어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Le soir, j’ai lu un livre. Et puis j’ai dormi.', tiles: ['저녁에', '책을', '읽었어요.', '그리고', '잤어요.'] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'À toi : deux phrases au passé, reliées par [[그리고]]. [[쓰세요!]]', placeholder: '학교에 갔어요. 그리고 공부했어요.', mustInclude: ['그리고', PAST_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '한국어를 좋아해요. 그래서 한국어를 공부해요.', fr: 'J’aime le coréen. Donc j’étudie le coréen.', prompt: 'Lis à voix haute, avec conviction 💪' } },
  ],
  interleave: [
    { type: 'type', prompt: '[[자요]] → au passé :', answer: '잤어요' },
    { type: 'clock', prompt: '[[열한 시 반]] — place les aiguilles.', h: 11, m: 30 },
    { type: 'mcq', prompt: '🔴 ou 🔵 ? Passé de [[보다]] :', choices: ['봤어요', '보었어요', '봐어요'], answer: 0 },
    { type: 'mcq', prompt: '[[지금 몇 시예요?]] 🕗 8:00', choices: ['여덟 시예요', '팔 시예요', '여덟 분이에요'], answer: 0 },
  ],
};

const day24: Lesson = {
  id: 'm2-w1-d4',
  month: 2,
  week: 1,
  day: 24,
  title: 'Hier, aujourd’hui, demain : 어제 · 오늘 · 내일',
  summary: '어제 + passé, 오늘 / 내일 + présent, et la question 어제 뭐 했어요 ?',
  cards: [
    { id: 'm2-ko-eoje', kind: 'vocab', ko: '어제', fr: 'hier', note: '⬅️ Avec le passé : [[어제 학교에 갔어요|t:hier, je suis allé(e) à l’école]]' },
    { id: 'm2-ko-naeil', kind: 'vocab', ko: '내일', fr: 'demain', note: '➡️ Avec le présent : [[내일 학교에 가요|t:demain, je vais à l’école]]' },
    { id: 'm2-ko-eoje-mwo', kind: 'phrase', ko: '어제 뭐 했어요?', fr: 'Qu’as-tu fait hier ?', note: 'Réponse au passé : [[책을 읽었어요]] · [[집에 갔어요]]' },
    { id: 'm2-ko-tense', kind: 'grammar', ko: '어제 먹었어요 · 내일 먹어요', fr: 'hier → passé ; aujourd’hui, demain → présent', note: 'Comme [[오늘]], [[어제]] et [[내일]] ne prennent **jamais** [[에|p:time]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La ligne du temps ⬅️ ➡️' },
        { type: 'text', text: 'Tu connais [[오늘|t:aujourd’hui]]. Voici ses deux voisins : [[어제|t:hier]] et [[내일|t:demain]]. Déplace le curseur sur la route :' },
        { type: 'timeline', start: 1, points: [
          { label: '어제 ⬅️', ko: '어제 학교에 갔어요.', fr: 'Hier, je suis allé(e) à l’école.' },
          { label: '오늘 📍', ko: '오늘 학교에 가요.', fr: 'Aujourd’hui, je vais à l’école.' },
          { label: '내일 ➡️', ko: '내일 학교에 가요.', fr: 'Demain, je vais à l’école.' },
        ] },
        { type: 'text', text: 'Comme en français (« demain, je **vais** à l’école »), le présent coréen sert aussi pour un futur proche. Donc :' },
        { type: 'table', head: ['Repère', 'Temps du verbe', 'Exemple'], rows: [
          ['[[어제]] ⬅️', 'passé', '[[어제 밥을 먹었어요]]'],
          ['[[오늘]] 📍', 'présent (ou passé si c’est déjà fait !)', '[[오늘 밥을 먹어요]]'],
          ['[[내일]] ➡️', 'présent', '[[내일 밥을 먹어요]]'],
        ] },
        { type: 'tip', text: 'Comme [[오늘]], [[어제]] et [[내일]] ne prennent pas [[에|p:time]] : [[어제 갔어요]], jamais « 어제에 ». Et le futur a aussi sa propre forme en coréen : bientôt !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque repère.', pairs: [['어제', '⬅️ hier'], ['오늘', '📍 aujourd’hui'], ['내일', '➡️ demain']] } },
    { kind: 'practice', exercise: { type: 'listen', audio: '내일', choices: ['내일', '어제', '오늘'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '⬅️ [[어제]] + [[가다]]', choices: ['어제 갔어요', '어제 가요', '어제 가세요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '➡️ [[내일]] + [[공부하다]]', choices: ['내일 공부해요', '내일 공부했어요', '내일에 공부해요'], answer: 0, explain: '[[내일]] + présent, et jamais de [[에|p:time]] après [[내일]].' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '어제 책을 ', after: '.', choices: ['읽었어요', '읽어요'], answer: 0, translation: 'Hier, j’ai lu un livre.' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '내일 한국에 ', after: '.', choices: ['가요', '갔어요'], answer: 0, translation: 'Demain, je vais en Corée.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: '어제 뭐 했어요?' },
        { type: 'text', text: 'La question préférée du lundi matin, en Corée comme en France 😄 :' },
        { type: 'breakdown', segments: [
          { ko: '어제', role: 'time', gloss: 'hier' },
          { ko: '뭐', role: 'object', gloss: 'quoi' },
          { ko: '했어요?', role: 'verb', gloss: 'as fait ?' },
        ], translation: 'Qu’as-tu fait hier ?', note: '[[뭐]] prend la place de l’objet. Le verbe : [[하다|p:hada]] → [[했어요]].' },
        { type: 'dialog', lines: [
          { who: 'Professeur', ko: '마리, 어제 뭐 했어요?', fr: 'Marie, qu’as-tu fait hier ?' },
          { who: 'Marie', ko: '책을 읽었어요. 그리고 잤어요.', fr: 'J’ai lu un livre. Et puis j’ai dormi.' },
          { who: 'Professeur', ko: '루이, 어제 뭐 했어요?', fr: 'Louis, qu’as-tu fait hier ?' },
          { who: 'Louis', ko: '한국어를 공부했어요! 내일 한국에 가요.', fr: 'J’ai étudié le coréen ! Demain, je vais en Corée.' },
          { who: 'Professeur', ko: '네, 좋아요!', fr: 'Très bien !' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que fait Louis **demain** ?', choices: ['🇰🇷 il va en Corée', '📚 il étudie le coréen', '😴 il dort'], answer: 0, explain: '[[내일 한국에 가요]]. Le coréen, il l’a étudié **hier** : [[공부했어요]].' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que veut dire [[어제 뭐 했어요?]] ?', choices: ['Qu’as-tu fait hier ?', 'Que fais-tu demain ?', 'Quelle heure est-il ?'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le texte à fautes 🕵️' },
        { type: 'text', text: 'Activité de la classe : dans un texte, **les verbes ne vont pas avec les repères de temps**. À toi de repérer les erreurs, puis de les corriger !' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🕵️ Quelle phrase est **incohérente** ?', choices: ['내일 학교에 갔어요', '어제 학교에 갔어요', '내일 학교에 가요'], answer: 0, explain: '[[내일]] (demain) avec un passé ? Impossible ! On dit [[내일 학교에 가요]].' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🕵️ Quelle phrase est **incohérente** ?', choices: ['어제 우유를 마셔요', '어제 우유를 마셨어요', '오늘 우유를 마셔요'], answer: 0, explain: '[[어제]] demande le passé : [[마셨어요]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🕵️ Corrige : « 어제 책을 읽어요. »', answer: '어제 책을 읽었어요' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🕵️ Corrige : « 내일 밥을 먹었어요. »', answer: '내일 밥을 먹어요' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: 'Quel repère de temps ?', before: '', after: ' 한국어를 공부했어요.', choices: ['어제', '내일'], answer: 0, translation: 'Hier, j’ai étudié le coréen.' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: 'Quel repère de temps ?', before: '', after: ' 꽃을 사요.', choices: ['내일', '어제'], answer: 0, translation: 'Demain, j’achète des fleurs.' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '📅 [[오늘은 수요일이에요.]] Quel jour était [[어제]] ?', choices: ['화요일', '목요일', '금요일'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'write', prompt: '[[어제 뭐 했어요?]] [[쓰세요!]] (une phrase au passé)', placeholder: '어제 책을 읽었어요', mustInclude: ['어제', PAST_ANY] } },
    { kind: 'practice', exercise: { type: 'write', prompt: '[[내일 뭐 해요?]] (Que fais-tu demain ?)', placeholder: '내일 학교에 가요', mustInclude: ['내일'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '어제 학교에 갔어요. 그리고 공부했어요.', fr: 'Hier, je suis allé(e) à l’école. Et puis j’ai étudié.' } },
  ],
  interleave: [
    { type: 'cloze', before: '사과를 좋아해요. ', after: ' 사과를 샀어요.', choices: ['그래서', '그리고'], answer: 0, translation: 'J’aime les pommes. Donc j’ai acheté des pommes.' },
    { type: 'clock', prompt: '[[들으세요!]] 🎧 Place les aiguilles.', audio: '두 시 십오 분', h: 2, m: 15 },
    { type: 'type', prompt: '[[공부해요]] → au passé :', answer: '공부했어요' },
    { type: 'match', prompt: 'Relie chaque moment.', pairs: [['아침', '🌅'], ['점심', '🌞'], ['저녁', '🌙']] },
  ],
};

const CLOCKS: [string, number, number][] = [
  ['세 시 십 분', 3, 10],
  ['일곱 시 반', 7, 30],
  ['아홉 시 사십오 분', 9, 45],
  ['열두 시 이십 분', 12, 20],
];

const TO_PAST: [string, string][] = [
  ['먹어요', '먹었어요'],
  ['공부해요', '공부했어요'],
  ['자요', '잤어요'],
  ['읽어요', '읽었어요'],
];

const day25: Lesson = {
  id: 'm2-w1-d5',
  month: 2,
  week: 1,
  day: 25,
  title: 'Bilan de la semaine & évaluation n°5',
  summary: 'Le jeu des dés chronologiques, une dictée, la petite évaluation n°5 et une histoire au passé, tout en coréen.',
  cards: [],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ta semaine en un coup d’œil' },
        { type: 'table', head: ['Tu sais…', 'Exemple'], rows: [
          ['lire l’heure', '[[세 시 십 분]] · [[일곱 시 반]]'],
          ['raconter au [[passé|p:past]]', '[[갔어요]] · [[먹었어요]] · [[공부했어요]]'],
          ['enchaîner deux idées', '[[그리고]] ➡️ · [[그래서]] 💡'],
          ['situer dans le temps', '[[어제]] · [[오늘]] · [[내일]]'],
        ] },
        { type: 'tip', text: '[[어제 한국어를 공부했어요. 오늘 한국어를 공부해요. 내일 한국어를 공부해요!]] 💪', mood: 'happy' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le jeu des dés chronologiques 🎲' },
        { type: 'text', text: 'Deux dés : le **dé des heures** et le **dé des actions**. On lance, on lit l’heure, et on raconte **au passé** : l’heure + [[에|p:time]] + l’action.' },
        { type: 'table', head: ['🎲', 'Heure', 'Action'], rows: [
          ['⚀', '[[일곱 시]]', '[[밥을 먹다]]'],
          ['⚁', '[[여덟 시 반]]', '[[학교에 가다]]'],
          ['⚂', '[[열두 시]]', '[[우유를 마시다]]'],
          ['⚃', '[[세 시 십 분]]', '[[한국어를 공부하다]]'],
          ['⚄', '[[다섯 시]]', '[[책을 읽다]]'],
          ['⚅', '[[열 시]]', '[[자다]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'type', prompt: '🎲 ⚀ + ⚀ — raconte au passé !', answer: ['일곱 시에 밥을 먹었어요'] } },
    { kind: 'practice', exercise: { type: 'order', prompt: '🎲 ⚃ + ⚃', translation: 'À 3 h 10, j’ai étudié le coréen.', tiles: ['세 시 십 분에', '한국어를', '공부했어요'], distractors: ['공부해요', '삼 시'] } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🎲 ⚅ + ⚅ — raconte au passé !', answer: ['열 시에 잤어요'] } },
    { kind: 'practice', exercise: { type: 'order', prompt: '🎲 ⚁ + ⚄ (oui, lire à 8 h 30, c’est permis 📖)', translation: 'À 8 h 30, j’ai lu un livre.', tiles: ['여덟 시 반에', '책을', '읽었어요'], distractors: ['팔 시', '읽어요'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Petite dictée ✍️' },
        { type: 'text', text: '[[들으세요!]] Puis [[쓰세요!]] Réécoute autant que tu veux.' },
      ],
    },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Dictée 1/2', audio: '어제 학교에 갔어요', answer: '어제 학교에 갔어요' } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Dictée 2/2', audio: '아홉 시에 밥을 먹었어요', answer: '아홉 시에 밥을 먹었어요' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Évaluation n°5' },
        { type: 'text', text: 'Trois parties, toujours sans chrono ni piège. Chaque erreur reviendra simplement en révision.' },
        { type: 'table', head: ['Partie', 'Contenu'], rows: [
          ['A', 'Écoute & horloge : 4 heures à placer'],
          ['B', 'Conjugaison guidée au passé'],
          ['C', 'Production : [[어제 뭐 했어요?]]'],
        ] },
        { type: 'tip', text: '**A — Écoute & horloge.** [[들으세요!]] Place les aiguilles sur l’heure entendue.', mood: 'encourage' },
      ],
    },
    ...CLOCKS.map(([audio, h, m], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'clock' as const, prompt: `**A · ${i + 1}/4** — 🎧 place les aiguilles.`, audio, h, m },
    })),
    { kind: 'learn', blocks: [{ type: 'tip', text: '**B — Conjugaison guidée.** Modèle : [[가요]] → [[갔어요]]. À toi !', mood: 'encourage' }] },
    ...TO_PAST.map(([present, past], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'type' as const, prompt: `**B · ${i + 1}/4** — [[가요]] → [[갔어요]] · [[${present}]] → ?`, answer: past },
    })),
    { kind: 'learn', blocks: [{ type: 'tip', text: '**C — Production.** Le professeur te demande : [[어제 뭐 했어요?]] Réponds avec **au moins une phrase au passé**, puis écoute-la.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'write', prompt: '**C · 1/2** — [[어제 뭐 했어요?]]', placeholder: '책을 읽었어요', mustInclude: [PAST_ANY] } },
    { kind: 'practice', exercise: { type: 'write', prompt: '**C · 2/2** — Bonus : ajoute une deuxième phrase avec [[그리고]] ou [[그래서]].', placeholder: '집에 갔어요. 그리고 잤어요.', mustInclude: ['그리고|그래서', PAST_ANY] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La journée de Nabi 📖' },
        { type: 'text', text: 'Une histoire **entièrement au passé** et entièrement en coréen : tu connais tous les mots ! Touche une phrase pour l’entendre.' },
        { type: 'text', text: '[[어제 나비는 일곱 시에 아침을 먹었어요.]] [[사과를 먹었어요. 그리고 우유를 마셨어요.]]' },
        { type: 'text', text: '[[여덟 시 반에 학교에 갔어요.]] [[그리고 한국어를 공부했어요.]]' },
        { type: 'text', text: '[[점심에 밥을 먹었어요.]] [[세 시에 집에 갔어요.]]' },
        { type: 'text', text: '[[나비는 한국어를 좋아해요.]] [[그래서 저녁에 한국어 책을 읽었어요.]]' },
        { type: 'text', text: '[[열 시에 잤어요.]] 😴 [[내일 학교에 가요!]]' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qu’est-ce que Nabi a bu au petit-déjeuner ?', choices: ['🥛 du lait', '💧 de l’eau', '🍎 du jus de pomme'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[나비는 몇 시에 학교에 갔어요?]]', choices: ['여덟 시 반에 갔어요', '일곱 시에 갔어요', '세 시에 갔어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Le soir, Nabi a lu un livre en coréen. Pourquoi ?', choices: ['Nabi aime le coréen.', 'Nabi n’aime pas le lait.', 'C’était midi.'], answer: 0, explain: '[[나비는 한국어를 좋아해요. 그래서…]]' } },
    { kind: 'practice', exercise: { type: 'read', ko: '나비는 한국어를 좋아해요. 그래서 저녁에 한국어 책을 읽었어요.', fr: 'Nabi aime le coréen. Donc le soir, Nabi a lu un livre en coréen.', prompt: 'Lis ce passage à voix haute, comme un conteur !' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Bravo, semaine 5 terminée ! 🎉' },
        { type: 'text', text: 'Cette semaine, tu as franchi une grande étape : tu sais **lire l’heure**, **raconter au passé**, **situer** une action dans le temps et **enchaîner** deux idées. Ce sont les briques de tous les récits !' },
        { type: 'tip', text: '[[오늘 한국어를 공부했어요. 좋아요!]] 🦋 [[안녕!]] À demain !', mood: 'happy' },
      ],
    },
  ],
};

export const m2w1: Lesson[] = [day21, day22, day23, day24, day25];
