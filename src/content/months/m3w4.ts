import type { GridBlank, Lesson } from '../types';

const COLLAPSE: [RegExp, string][] = [
  [/고 있/g, '고있'],
  [/고 계/g, '고계'],
  [/뛰어가/g, '뛰어 가'],
  [/숙제를 해/g, '숙제해'],
];
const alts = (...xs: string[]): string[] => {
  const out = new Set(xs);
  for (const [re, to] of COLLAPSE) for (const s of [...out]) out.add(s.replace(re, to));
  for (const s of [...out]) out.add(s.replace(/[.,!?] /g, ' '));
  for (const s of [...out]) out.add(s.replace(/[.!?]$/, ''));
  return [...out];
};
const blank = (s: string): GridBlank => ({ answer: alts(s) });

const WHILE_ANY = '면서';
const PROG_ANY = '고 있|고있|고 계|고계';

const day56: Lesson = {
  id: 'm3-w4-d1',
  month: 3,
  week: 4,
  day: 56,
  title: 'En même temps : -(으)면서',
  summary: 'Deux actions à la fois : 밥을 먹으면서 텔레비전을 봐요. Voyelle → 면서, consonne → 으면서. Nouveaux : 텔레비전, 노래해요.',
  cards: [
    { id: 'm4-ko-bomyeonseo', kind: 'grammar', ko: '보면서 · 먹으면서', fr: 'en regardant · en mangeant — voyelle → 면서, consonne → 으면서', note: '🎧 Même sujet, deux actions à la fois. L’action **principale** est à la fin : [[음악을 들으면서 숙제를 해요]]. ㄹ → [[놀면서]] · ㄷ → [[들으면서]]. Règle : [[en même temps|p:while]]' },
    { id: 'm4-ko-tellebijeon', kind: 'vocab', ko: '텔레비전', fr: 'télévision', note: '📺 On écrit aussi « TV », lu [[티브이]]. [[텔레비전을 봐요.]]' },
    { id: 'm4-ko-bap-meogeumyeonseo', kind: 'phrase', ko: '밥을 먹으면서 텔레비전을 봐요', fr: 'Je regarde la télé en mangeant.', note: '🍚📺 [[먹]] + [[으면서]]. Le temps se met **à la fin** : [[먹으면서 텔레비전을 봤어요]].' },
    { id: 'm4-ko-eumak-deureumyeonseo', kind: 'phrase', ko: '음악을 들으면서 숙제를 해요', fr: 'Je fais mes devoirs en écoutant de la musique.', note: '🎧📝 [[듣다|p:irreg-d]] → [[들으면서]] (ㄷ → ㄹ devant une voyelle).' },
    { id: 'm4-ko-noraehaeyo', kind: 'phrase', ko: '노래해요', fr: 'je chante (poli)', note: '🎤 [[노래|t:chanson]] + [[해요|p:hada]]. [[노래하면서 걸어요.]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Deux choses à la fois 🎧' },
        { type: 'tip', text: '[[지난주에 대요, 재요, 래요를 배웠어요.|t:la semaine dernière, on a appris 대요, 재요, 래요]] Dernière semaine du 3ᵉ mois ! Aujourd’hui : faire **deux choses en même temps**.', mood: 'happy' },
        { type: 'text', text: 'En français : « Je fais mes devoirs **en écoutant** de la musique. » En coréen, on colle **(으)면서** au premier verbe :' },
        { type: 'breakdown', segments: [
          { ko: '음악', role: 'object', gloss: 'la musique', particle: { ko: '을', key: 'object' } },
          { ko: '들으면서', role: 'verb', gloss: 'en écoutant' },
          { ko: '숙제', role: 'object', gloss: 'les devoirs', particle: { ko: '를', key: 'object' } },
          { ko: '해요', role: 'verb', gloss: 'je fais' },
        ], translation: 'Je fais mes devoirs en écoutant de la musique.', note: 'L’action **principale** est toujours à la **fin**. Celle avec **면서** l’accompagne.' },
        { type: 'tip', text: 'Les deux actions ont **le même sujet** : c’est moi qui écoute **et** moi qui fais mes devoirs.', mood: 'thinking' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La règle : 면서 / 으면서 🔍' },
        { type: 'text', text: 'Tu connais déjà [[먹으면 안 돼요|p:rules]]. Bonne nouvelle : **면서**, c’est ce même **면** + **서**. Mêmes règles !' },
        { type: 'table', head: ['Le radical finit par…', 'Infinitif', 'En …ant'], rows: [
          ['🟢 une voyelle → **면서**', '[[보다]] · [[마시다]]', '[[보면서]] · [[마시면서]]'],
          ['⭐ [[하다|p:hada]] → **하면서**', '[[공부하다]] · [[노래하다]]', '[[공부하면서]] · [[노래하면서]]'],
          ['🟤 une consonne → **으면서**', '[[먹다]] · [[읽다]]', '[[먹으면서]] · [[읽으면서]]'],
          ['🪁 ㄹ → **면서** (sans 으)', '[[놀다]]', '[[놀면서]]'],
          ['🔀 [[ㄷ|p:irreg-d]] → ㄹ + **으면서**', '[[듣다]] · [[걷다]]', '[[들으면서]] · [[걸으면서]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[보다]] → « en regardant » :', choices: ['보면서', '보으면서', '봐면서'], answer: 0, explain: '[[보]] finit par une voyelle : [[보]] + [[면서]].' } },
    { kind: 'practice', exercise: { type: 'sort', prompt: '🟢 면서 ou 🟤 으면서 ?', buckets: ['🟢 면서', '🟤 으면서'], items: [
      { text: '마시다', bucket: 0 }, { text: '공부하다', bucket: 0 }, { text: '놀다', bucket: 0 }, { text: '그리다', bucket: 0 },
      { text: '먹다', bucket: 1 }, { text: '읽다', bucket: 1 }, { text: '듣다', bucket: 1 },
    ], explain: '[[마시면서]] · [[공부하면서]] · [[놀면서]] (ㄹ : pas de 으) · [[그리면서]]. [[먹으면서]] · [[읽으면서]] · [[들으면서]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[먹다]] → « en mangeant » :', answer: '먹으면서' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[걷다]] → « en marchant » :', answer: '걸으면서', explain: '[[걷다|p:irreg-d]] : devant une voyelle, ㄷ → ㄹ.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les pictogrammes 🖼️' },
        { type: 'text', text: 'Deux mots nouveaux : [[텔레비전|t:télévision]] (on écrit aussi « TV ») et [[노래해요|t:je chante]]. Combine deux images en une phrase :' },
        { type: 'table', head: ['Images', 'Une seule phrase'], rows: [
          ['🍚 + 📺', '[[밥을 먹으면서 텔레비전을 봐요.]]'],
          ['🎧 + 📝', '[[음악을 들으면서 숙제를 해요.]]'],
          ['🚶 + 🎤', '[[걸으면서 노래해요.]]'],
          ['🥛 + 📖', '[[우유를 마시면서 책을 읽어요.]]'],
        ] },
        { type: 'tip', text: 'Le **temps** (passé, futur) se met seulement sur le **dernier** verbe : [[어제 밥을 먹으면서 텔레비전을 봤어요.|t:hier, j’ai regardé la télé en mangeant]] Jamais [[먹었으면서]] !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque image à sa phrase.', pairs: [['🍚 + 📺', '먹으면서 봐요'], ['🎧 + 📝', '들으면서 숙제해요'], ['🚶 + 🎤', '걸으면서 노래해요']] } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Je regarde la télé en mangeant.', tiles: ['밥을', '먹으면서', '텔레비전을', '봐요.'], distractors: ['먹면서', '먹어서'] } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🕘 Hier soir :', before: '어제 저녁에 음악을 ', after: ' 책을 읽었어요.', choices: ['들으면서', '들었으면서', '듣면서'], answer: 0, translation: 'Hier soir, j’ai lu un livre en écoutant de la musique.', explain: 'Le passé est sur [[읽었어요]] seulement.' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🎧 + 📝 « Je fais mes devoirs en écoutant de la musique. »', answer: alts('음악을 들으면서 숙제를 해요') } },
    { kind: 'practice', exercise: { type: 'listen', audio: '걸으면서 노래해요', choices: ['걸으면서 노래해요', '걸어서 노래해요', '걷지만 노래해요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Nos habitudes 📝' },
        { type: 'text', text: 'Activité de la classe : chacun raconte ce qu’il fait **en même temps** que ses devoirs. **Tout en coréen** :' },
        { type: 'dialog', lines: [
          { who: '선생님', ko: '여러분, 집에서 숙제하면서 뭐 해요?' },
          { who: '수아', ko: '저는 음악을 들으면서 숙제를 해요.' },
          { who: '지훈', ko: '저는 텔레비전을 보면서 숙제를 해요!' },
          { who: '선생님', ko: '지훈, 텔레비전을 보면서 숙제하면 안 돼요!' },
          { who: '민수', ko: '저는 우유를 마시면서 숙제를 해요.' },
          { who: '나비', ko: '저는 노래하면서 숙제를 해요. 그래서 동생이 못 자요!' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Qui se fait gronder par le professeur ?', choices: ['지훈', '수아', '민수'], answer: 0, explain: '[[텔레비전을 보면서 숙제하면 안 돼요!]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi le petit frère de Nabi ne peut-il pas dormir ?', choices: ['Nabi chante en faisant ses devoirs.', 'Nabi regarde la télé.', 'Il a faim.'], answer: 0, explain: '[[노래하면서 숙제를 해요. 그래서 동생이 못 자요!]]' } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Et toi ? Écris une de tes habitudes avec **(으)면서**. [[쓰세요!]]', placeholder: '저는 음악을 들으면서 걸어요', mustInclude: [WHILE_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '저는 밥을 먹으면서 텔레비전을 봐요.', fr: 'Je regarde la télé en mangeant.', prompt: 'Mise en pratique : dis-le à voix haute 📺' } },
  ],
  interleave: [
    { type: 'type', prompt: '« [[앉으세요.]] » → « le professeur dit de s’asseoir » :', answer: alts('선생님이 앉으래요') },
    { type: 'mcq', prompt: 'Sua : « [[같이 걸을까요?]] » →', choices: ['수아가 같이 걷재요.', '수아가 같이 걸재요.', '수아가 같이 걷는대요.'], answer: 0 },
    { type: 'cloze', before: '배가 ', after: ' 밥을 먹어요.', choices: ['고파서', '고프면서'], answer: 0, translation: 'J’ai faim, alors je mange.' },
    { type: 'type', prompt: '[[읽다]] → « en lisant » :', answer: '읽으면서' },
  ],
};

const MIMES: [string, string[]][] = [
  ['🏃', ['달리고 있어요', '뛰고 있어요']],
  ['📖', ['책을 읽고 있어요', '읽고 있어요']],
  ['😴', ['자고 있어요']],
];

const day57: Lesson = {
  id: 'm3-w4-d2',
  month: 3,
  week: 4,
  day: 57,
  title: 'En train de… : -고 있어요',
  summary: 'Dire ce qu’on fait à l’instant : 지금 뭐 하고 있어요? — 한국어를 공부하고 있어요. Au passé : -고 있었어요 ; pour un aîné : -고 계세요.',
  cards: [
    { id: 'm4-ko-meokgo-isseoyo', kind: 'grammar', ko: '먹고 있어요 · 가고 있어요', fr: 'je suis en train de manger · d’y aller — radical + 고 있어요', note: '⏳ Aucun changement : [[먹]] + [[고 있어요]], [[듣]] + [[고 있어요]] (ㄷ reste). Pour une **action**, pas un état. Règle : [[en train de|p:progressive]]' },
    { id: 'm4-ko-jigeum-mwo-hago', kind: 'phrase', ko: '지금 뭐 하고 있어요?', fr: 'Qu’est-ce que tu es en train de faire ?', note: '🤔 [[하]] + [[고 있어요]]. Réponse : [[…고 있어요.]]' },
    { id: 'm4-ko-gongbuhago-isseoyo', kind: 'phrase', ko: '한국어를 공부하고 있어요', fr: 'Je suis en train d’étudier le coréen.', note: '📚 [[지금 한국어를 공부하고 있어요.]]' },
    { id: 'm4-ko-hago-isseosseoyo', kind: 'grammar', ko: '보고 있었어요', fr: 'j’étais en train de regarder — passé : 고 있었어요', note: '🕘 [[있어요]] → [[있었어요]]. [[어제 저녁에 텔레비전을 보고 있었어요.]]' },
    { id: 'm4-ko-ilkgo-gyeseyo', kind: 'phrase', ko: '선생님이 책을 읽고 계세요', fr: 'Le professeur est en train de lire un livre.', note: '🙇 Pour un aîné : [[있어요]] → [[계세요|p:honor-words]]. [[할머니가 쉬고 계세요.]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'En ce moment ⏳' },
        { type: 'tip', text: '[[어제는 면서를 배웠어요.|t:hier, on a appris 면서]] Aujourd’hui : dire ce qu’on est **en train de** faire, à l’instant même.', mood: 'happy' },
        { type: 'text', text: 'On enlève [[다]] et on colle **고 있어요**. C’est tout : voyelle ou consonne, **aucun changement** !' },
        { type: 'table', head: ['Infinitif', '', '⏳ Je suis en train de…'], rows: [
          ['[[가다]]', '➜', '[[가고 있어요]]'],
          ['[[먹다]]', '➜', '[[먹고 있어요]]'],
          ['[[공부하다]]', '➜', '[[공부하고 있어요]]'],
          ['[[듣다]]', '➜', '[[듣고 있어요]] (ㄷ reste devant une consonne)'],
          ['[[놀다]]', '➜', '[[놀고 있어요]]'],
        ] },
        { type: 'breakdown', segments: [
          { ko: '지금', role: 'time', gloss: 'maintenant' },
          { ko: '한국어', role: 'object', gloss: 'le coréen', particle: { ko: '를', key: 'object' } },
          { ko: '공부하고 있어요', role: 'verb', gloss: 'suis en train d’étudier' },
        ], translation: 'Je suis en train d’étudier le coréen.' },
        { type: 'tip', text: '[[공부해요]] peut déjà vouloir dire « j’étudie ». [[공부하고 있어요]] insiste : **en ce moment précis**, ça dure.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[읽다]] → « je suis en train de lire » :', choices: ['읽고 있어요', '읽으고 있어요', '읽어 있어요'], answer: 0, explain: 'Radical [[읽]] + [[고 있어요]], sans rien ajouter.' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[마시다]] → « je suis en train de boire » :', answer: alts('마시고 있어요') } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[듣다]] → « je suis en train d’écouter » :', answer: alts('듣고 있어요'), explain: 'Devant [[고]] (une consonne), le ㄷ reste : [[듣고]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Mime et devinette 🎭' },
        { type: 'text', text: 'Jeu de la classe : un élève mime, les autres demandent [[지금 뭐 하고 있어요?|t:qu’est-ce que tu es en train de faire ?]]' },
        { type: 'dialog', lines: [
          { who: '선생님', ko: '나비, 지금 뭐 하고 있어요?' },
          { who: '나비', ko: '🏃' },
          { who: '수아', ko: '달리고 있어요?' },
          { who: '나비', ko: '네! 달리고 있어요.' },
        ] },
      ],
    },
    ...MIMES.map(([mime, answer], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'type' as const, prompt: `Devinette ${i + 1}/${MIMES.length} — Nabi mime ${mime}. [[지금 뭐 하고 있어요?]]`, answer: alts(...answer) },
    })),
    { kind: 'practice', exercise: { type: 'listen', audio: '지금 뭐 하고 있어요?', choices: ['지금 뭐 하고 있어요?', '지금 뭐 할 거예요?', '어제 뭐 했어요?'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Au passé, et pour un aîné 🕘' },
        { type: 'text', text: 'Au **passé** : [[있어요]] → [[있었어요]]. « J’étais en train de… » :' },
        { type: 'dialog', lines: [
          { who: '선생님', ko: '나비, 어제 저녁에 뭐 하고 있었어요?' },
          { who: '나비', ko: '텔레비전을 보고 있었어요.' },
        ] },
        { type: 'text', text: 'Pour une personne **respectée**, tu connais déjà le truc : [[있어요]] → [[계세요|p:honor-words]].' },
        { type: 'table', head: ['Qui ?', '⏳ En train de…'], rows: [
          ['👧 [[수아]]', '[[수아가 책을 읽고 있어요.]]'],
          ['👩‍🏫 [[선생님]]', '[[선생님이 책을 읽고 계세요.]]'],
          ['👵 [[할머니]]', '[[할머니가 쉬고 계세요.]]'],
        ] },
        { type: 'tip', text: 'Seulement pour les **actions** : pour « il fait froid », on garde [[추워요]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '🕘 Hier, à 7 heures :', before: '어제 일곱 시에 숙제를 하고 ', after: '.', choices: ['있었어요', '있어요', '있을까요'], answer: 0, translation: 'Hier à 7 heures, j’étais en train de faire mes devoirs.' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '👩‍🏫 Le professeur est en train de lire :', choices: ['선생님이 책을 읽고 계세요.', '선생님이 책을 읽고 있어요.', '선생님이 책을 읽으래요.'], answer: 0, explain: 'Pour un aîné : [[계세요]].' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La grande image 🖼️' },
        { type: 'text', text: 'Activité de la classe : décrire une grande image. Que fait **chaque** personnage ?' },
        { type: 'table', head: ['', 'Qui ?', 'Que fait-il ?'], rows: [
          ['⚽', '[[지훈]]', '[[지훈이는 축구를 하고 있어요.]]'],
          ['🎨', '[[수아]]', '[[수아는 그림을 그리고 있어요.]]'],
          ['🎧', '[[민수]]', '[[민수는 음악을 듣고 있어요.]]'],
          ['🥛', '[[마리]]', '[[마리는 우유를 마시고 있어요.]]'],
          ['📖', '[[선생님]]', '[[선생님은 책을 읽고 계세요.]]'],
        ] },
        { type: 'tip', text: 'Ha ! [[그리고 있어요]] (en train de dessiner, de [[그리다]]) ressemble à [[그리고]] (et). Le contexte t’aide !', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque personnage à son action.', pairs: [['지훈', '⚽'], ['수아', '🎨'], ['민수', '🎧'], ['마리', '🥛']] } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Sua est en train de dessiner.', tiles: ['수아는', '그림을', '그리고', '있어요.'], distractors: ['그려', '있었어요.'] } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Et toi, [[지금 뭐 하고 있어요?]] Réponds avec **고 있어요**. [[쓰세요!]]', placeholder: '지금 한국어를 공부하고 있어요', mustInclude: [PROG_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '지금 한국어를 공부하고 있어요.', fr: 'Je suis en train d’étudier le coréen.', prompt: 'Mise en pratique : réponds à voix haute. [[지금 뭐 하고 있어요?]]' } },
  ],
  interleave: [
    { type: 'type', prompt: '[[보다]] → « en regardant » :', answer: '보면서' },
    { type: 'cloze', before: '선생님이 숙제를 ', after: '.', choices: ['하래요', '하재요'], answer: 0, translation: 'Le professeur dit de faire les devoirs.' },
    { type: 'mcq', prompt: '[[음악을 들으면서 숙제를 해요]] — l’action principale est…', choices: ['faire les devoirs', 'écouter de la musique'], answer: 0 },
    { type: 'type', prompt: '[[민수가 학교에 가요.]] → « Minsu dit qu’il va à l’école » :', answer: alts('민수가 학교에 간대요') },
  ],
};

const PLAYGROUND: [string, string][] = [
  ['⚽😄', '[[지훈이는 축구를 하고 있어요.]] [[그리고 웃으면서 뛰어가요.]]'],
  ['🌳🎧', '[[수아는 나무 아래에서 음악을 들으면서 그림을 그리고 있어요.]]'],
  ['🪁', '[[아이들이 운동장에서 놀고 있어요.]]'],
  ['🎤🚶', '[[마리는 노래하면서 걷고 있어요.]]'],
  ['👩‍🏫👀', '[[선생님은 운동장 옆에서 아이들을 보고 계세요.]]'],
];

const day58: Lesson = {
  id: 'm3-w4-d3',
  month: 3,
  week: 4,
  day: 58,
  title: 'Reportage dans la cour',
  summary: 'Décrire une scène en deux phrases liées : 지훈이는 축구를 하고 있어요. 그리고 웃으면서 뛰어가요. Avec -대요 : 축구하고 있대요. Nouveaux : 웃다, 뛰어가요, 운동장, 아이들.',
  cards: [
    { id: 'm4-ko-useoyo', kind: 'phrase', ko: '웃어요', fr: 'je ris, je souris (poli)', note: '😄 Infinitif : [[웃다]]. [[웃으면서]] · [[웃고 있어요]].' },
    { id: 'm4-ko-ttwieogayo', kind: 'phrase', ko: '뛰어가요', fr: 'j’y vais en courant, je cours (vers…)', note: '🏃 [[뛰어요]] + [[가요]] collés : un seul verbe. [[운동장에 뛰어가요.]]' },
    { id: 'm4-ko-undongjang', kind: 'vocab', ko: '운동장', fr: 'cour de récréation, terrain de sport (de l’école)', note: '🏟️ [[쉬는 시간에 운동장에서 놀아요.]]' },
    { id: 'm4-ko-aideul', kind: 'vocab', ko: '아이들', fr: 'les enfants', note: '🧒 [[아이|t:enfant]] + [[들]] (pluriel). [[아이들이 놀고 있어요.]]' },
    { id: 'm4-ko-jihun-useumyeonseo', kind: 'phrase', ko: '지훈이는 축구를 하고 있어요. 그리고 웃으면서 뛰어가요.', fr: 'Jihoon est en train de jouer au foot. Et il court en riant.', note: '⏳ [[고 있어요|p:progressive]] + 🎧 [[면서|p:while]] : deux phrases liées par [[그리고]].' },
    { id: 'm4-ko-hago-itdaeyo', kind: 'grammar', ko: '축구하고 있대요', fr: 'il / elle dit qu’il est en train de jouer au foot — 있어요 → 있대요', note: '🔵 [[있다]] est un état : [[있어요]] → [[있대요|p:report]]. [[민수가 도서관에서 책을 읽고 있대요.]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le reporter de la récré 🎙️' },
        { type: 'tip', text: 'Aujourd’hui, tu **combines** tout : [[고 있어요|p:progressive]], [[면서|p:while]] et même [[대요|p:report]]. Tu deviens reporter !', mood: 'happy' },
        { type: 'text', text: 'Quatre mots pour la cour : [[운동장|t:cour de récré]] · [[아이들|t:les enfants]] · [[웃어요|t:je ris]] · [[뛰어가요|t:j’y vais en courant]]' },
        { type: 'table', head: ['Infinitif', 'En …ant', 'En train de…'], rows: [
          ['[[웃다]] 😄', '[[웃으면서]]', '[[웃고 있어요]]'],
          ['[[뛰어가다]] 🏃', '[[뛰어가면서]]', '[[뛰어가고 있어요]]'],
        ] },
        { type: 'text', text: 'La phrase modèle de la classe, en **deux phrases liées** :' },
        { type: 'breakdown', segments: [
          { ko: '지훈이', role: 'topic', gloss: 'Jihoon', particle: { ko: '는', key: 'topic' } },
          { ko: '축구', role: 'object', gloss: 'le foot', particle: { ko: '를', key: 'object' } },
          { ko: '하고 있어요', role: 'verb', gloss: 'est en train de jouer' },
        ], translation: 'Jihoon est en train de jouer au foot.' },
        { type: 'breakdown', segments: [
          { ko: '그리고', role: 'other', gloss: 'et' },
          { ko: '웃으면서', role: 'verb', gloss: 'en riant' },
          { ko: '뛰어가요', role: 'verb', gloss: 'il court' },
        ], translation: 'Et il court en riant.' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '😄 + 🏃 « Il court en riant » :', choices: ['웃으면서 뛰어가요.', '웃면서 뛰어가요.', '웃고 있으면서 뛰어가요.'], answer: 0, explain: '[[웃]] finit par une consonne : [[웃]] + [[으면서]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '🪁 « Les enfants sont en train de jouer. »', answer: alts('아이들이 놀고 있어요') } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le grand poster de la cour 🏫' },
        { type: 'text', text: 'Support de la classe : une grande affiche de la [[운동장|t:cour]] pendant la [[쉬는 시간|t:récré]]. Lis chaque ligne, touche pour l’entendre.' },
        { type: 'table', head: ['', ''], rows: PLAYGROUND.map(([emoji, line]) => [emoji, line]) },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Où est Sua ?', choices: ['sous l’arbre', 'à la bibliothèque', 'dans la classe'], answer: 0, explain: '[[나무 아래에서]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que fait Sua **en même temps** qu’elle dessine ?', choices: ['Elle écoute de la musique.', 'Elle chante.', 'Elle boit du lait.'], answer: 0, explain: '[[음악을 들으면서 그림을 그리고 있어요.]]' } },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Qui fait quoi ?', pairs: [['지훈', '웃으면서 뛰어가요'], ['마리', '노래하면서 걷고 있어요'], ['선생님', '아이들을 보고 계세요']] } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Et il court en riant.', tiles: ['그리고', '웃으면서', '뛰어가요.'], distractors: ['웃어서', '뛰어가고'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Rapporter une scène 🔵' },
        { type: 'text', text: 'Minsu n’est pas dans la cour. Il t’a dit : [[“도서관에서 책을 읽고 있어요.”]] Tu le rapportes avec [[대요|p:report]]. [[있다]] est un **état** : [[있어요]] → **있대요**.' },
        { type: 'table', head: ['Il a dit…', '🔵 Il dit que…'], rows: [
          ['[[책을 읽고 있어요.]]', '[[책을 읽고 있대요.]]'],
          ['[[축구하고 있어요.]]', '[[축구하고 있대요.]]'],
          ['[[음악을 들으면서 숙제해요.]]', '[[음악을 들으면서 숙제한대요.]]'],
        ] },
        { type: 'dialog', lines: [
          { who: '선생님', ko: '나비, 민수는 어디에 있어요?' },
          { who: '나비', ko: '민수는 도서관에 있대요. 책을 읽고 있대요.' },
          { who: '선생님', ko: '지훈이는요?' },
          { who: '나비', ko: '지훈이는 운동장에서 축구를 하고 있어요. 그리고 웃으면서 뛰어가요!' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'cloze', prompt: 'Minsu : « [[책을 읽고 있어요.]] »', before: '민수가 책을 읽고 ', after: '.', choices: ['있대요', '있재요', '있는대요'], answer: 0, translation: 'Minsu dit qu’il est en train de lire.', explain: '[[있다]] : un état → radical + [[대요]].' } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Jihoon : « [[축구하고 있어요.]] » → [[지훈이가…]]', answer: alts('지훈이가 축구하고 있대요', '축구하고 있대요') } },
    { kind: 'practice', exercise: { type: 'listen', audio: '웃으면서 뛰어가요', choices: ['웃으면서 뛰어가요', '웃고 있어요', '뛰어가고 있어요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ton compte rendu : décris un camarade pendant la récré en **deux phrases liées** : une avec **고 있어요**, une avec **면서**. [[쓰세요!]]', placeholder: '수아는 그림을 그리고 있어요. 그리고 노래하면서 웃어요.', mustInclude: [PROG_ANY, WHILE_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '지훈이는 축구를 하고 있어요. 그리고 웃으면서 뛰어가요.', fr: 'Jihoon est en train de jouer au foot. Et il court en riant.', prompt: 'Mise en pratique : fais ton reportage à voix haute 🎙️' } },
  ],
  interleave: [
    { type: 'type', prompt: '[[놀다]] → « en jouant » :', answer: '놀면서' },
    { type: 'mcq', prompt: '👵 Grand-mère est en train de se reposer :', choices: ['할머니가 쉬고 계세요.', '할머니가 쉬고 있어요.', '할머니가 쉬래요.'], answer: 0 },
    { type: 'cloze', before: '어제 저녁에 텔레비전을 보고 ', after: '.', choices: ['있었어요', '있을 거예요'], answer: 0, translation: 'Hier soir, j’étais en train de regarder la télé.' },
    { type: 'type', prompt: '« [[조용히 하세요!]] » → « le chef de classe dit de faire silence » :', answer: alts('반장이 조용히 하래요') },
  ],
};

const GUIDED: [string, string][] = [
  ['[[민수가 음악을…]]', '민수가 음악을 들으면서 걸어요'],
  ['[[선생님이…]]', '선생님이 책을 읽고 계세요'],
  ['[[수아가 같이…]]', '수아가 같이 놀재요'],
];

const RIDDLES: [string, string[]][] = [
  ['[[이 친구는 지금 도서관에 있어요. 음악을 들으면서 책을 읽고 있어요. 누구예요?]]', ['📚🎧 민수', '⚽ 지훈', '🎨 수아']],
  ['[[이 친구는 운동장에서 놀고 있어요. 공을 차면서 웃어요. 누구예요?]]', ['⚽ 지훈', '📚🎧 민수', '🎨 수아']],
  ['[[이 친구는 교실에 있어요. 노래하면서 그림을 그리고 있어요. 누구예요?]]', ['🎨 수아', '⚽ 지훈', '📚🎧 민수']],
];

const day59: Lesson = {
  id: 'm3-w4-d4',
  month: 3,
  week: 4,
  day: 59,
  title: 'Révision du 3ᵉ mois',
  summary: 'La fiche bilan du mois (대요 · 재요 · 래요, -(으)시-, -면서, -고 있어요), une dictée guidée, une analyse de texte et des énigmes : 누구예요?',
  cards: [
    { id: 'm4-ko-nugu', kind: 'phrase', ko: '누구예요?', fr: 'Qui est-ce ?', note: '🕵️ [[누구|t:qui]] + [[예요|p:yeyo]]. [[이 친구는 누구예요?]]' },
    { id: 'm4-ko-gongeul-chayo', kind: 'phrase', ko: '공을 차요', fr: 'je tape dans le ballon (poli)', note: '⚽ [[공|t:ballon]] + [[차다|t:taper du pied]]. [[공을 차면서 웃어요.]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La fiche bilan 📋' },
        { type: 'tip', text: 'Demain, la **Grande évaluation n°6** ! Aujourd’hui, on prépare l’épreuve ensemble, sans stress.', mood: 'encourage' },
        { type: 'table', head: ['Notion', 'Repère', 'Exemple modèle'], rows: [
          ['🔵 [[Il dit que…|p:report]]', 'action ㄴ/는대요 · état 대요', '[[민수가 학교에 간대요.]]'],
          ['🟢 [[Il propose…|p:report-let]]', 'radical + 재요', '[[지훈이가 같이 축구하재요.]]'],
          ['🔴 [[Il dit de…|p:report-cmd]]', '세요 → 래요', '[[선생님이 앉으래요.]]'],
          ['🙇 [[Respect|p:honor]]', '(으)세요 · 계세요 · 드세요', '[[선생님이 교실에 계세요.]]'],
          ['🎧 [[En même temps|p:while]]', '면서 / 으면서', '[[음악을 들으면서 숙제를 해요.]]'],
          ['⏳ [[En train de|p:progressive]]', 'radical + 고 있어요', '[[한국어를 공부하고 있어요.]]'],
        ] },
        { type: 'text', text: 'Touche un repère coloré pour revoir sa règle complète.' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque forme à son sens.', pairs: [['먹는대요', 'il dit qu’il mange'], ['먹재요', 'il propose de manger'], ['먹으래요', 'il dit de manger'], ['먹으면서', 'en mangeant'], ['먹고 있어요', 'en train de manger']] } },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Le tableau du mois : touche une case vide et complète.', head: ['Infinitif', '🎧 -(으)면서', '⏳ -고 있어요'], rows: [
      ['[[보다]]', blank('보면서'), blank('보고 있어요')],
      ['[[읽다]]', blank('읽으면서'), blank('읽고 있어요')],
      ['[[듣다]]', blank('들으면서'), blank('듣고 있어요')],
    ], explain: '[[면서]] : voyelle / consonne + 으 · [[ㄷ|p:irreg-d]] → ㄹ devant 으. [[고 있어요]] : aucun changement.' } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**Dictée guidée.** Le début est donné. Écoute, puis écris la phrase **entière**.', mood: 'encourage' }] },
    ...GUIDED.map(([start, s], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'type' as const, prompt: `Dictée ${i + 1}/${GUIDED.length} — 🎧 ${start}`, audio: s, answer: alts(s) },
    })),
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Analyse de texte 🔎' },
        { type: 'text', text: 'Le cahier de Nabi. Lis-le, puis retrouve chaque notion du mois.' },
        { type: 'table', head: ['', ''], rows: [
          ['1', '[[지금 쉬는 시간이에요. 저는 운동장에서 친구들을 보고 있어요.]]'],
          ['2', '[[수아는 노래하면서 그림을 그려요.]]'],
          ['3', '[[지훈이가 같이 축구하재요.]]'],
          ['4', '[[그런데 선생님이 교실에 들어오래요.]]'],
          ['5', '[[선생님은 교실에서 우리를 기다리고 계세요.]]'],
        ] },
        { type: 'tip', text: 'Petits mots : [[들어오다|t:entrer]] · [[우리|t:nous]] · [[기다리다|t:attendre]] · [[그런데|t:mais, au fait]].', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque phrase à sa notion.', pairs: [['1 · 보고 있어요', '⏳ en train de'], ['2 · 노래하면서', '🎧 en même temps'], ['3 · 축구하재요', '🟢 proposition'], ['4 · 들어오래요', '🔴 ordre'], ['5 · 기다리고 계세요', '🙇 respect']] } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi Nabi ne peut pas jouer au foot ?', choices: ['Le professeur dit de rentrer en classe.', 'Jihoon est fatigué.', 'Il pleut.'], answer: 0, explain: '[[선생님이 교실에 들어오래요.]] — 🔴 un ordre.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les énigmes 🕵️' },
        { type: 'text', text: 'Activité de la classe : résoudre des énigmes en petits groupes. Nouveaux : [[누구예요?|t:qui est-ce ?]] · [[공을 차요|t:je tape dans le ballon]] · [[이 친구|t:cet ami]].' },
        { type: 'table', head: ['Les suspects', ''], rows: [
          ['📚🎧', '[[민수]]'],
          ['⚽', '[[지훈]]'],
          ['🎨', '[[수아]]'],
        ] },
      ],
    },
    ...RIDDLES.map(([clue, choices], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'mcq' as const, prompt: `Énigme ${i + 1}/${RIDDLES.length} — ${clue}`, choices, answer: 0 },
    })),
    { kind: 'practice', exercise: { type: 'write', prompt: 'À toi d’inventer une énigme ! Décris un ami avec **고 있어요** ou **면서**, et termine par [[누구예요?]] [[쓰세요!]]', placeholder: '이 친구는 우유를 마시면서 책을 읽어요. 누구예요?', mustInclude: [`${WHILE_ANY}|${PROG_ANY}`, '누구'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '이 친구는 지금 도서관에 있어요. 음악을 들으면서 책을 읽고 있어요. 누구예요?', fr: 'Cet ami est à la bibliothèque. Il est en train de lire en écoutant de la musique. Qui est-ce ?', prompt: 'Lis l’énigme à voix haute à ton groupe 🕵️' } },
  ],
  interleave: [
    { type: 'mcq', prompt: '« [[축구하자!]] » →', choices: ['축구하재요', '축구하래요', '축구한대요'], answer: 0 },
    { type: 'type', prompt: '« [[공부하세요.]] » → « il dit d’étudier » :', answer: '공부하래요' },
    { type: 'cloze', before: '할아버지가 텔레비전을 보고 ', after: '.', choices: ['계세요', '있으세요'], answer: 0, translation: 'Grand-père est en train de regarder la télé.' },
    { type: 'type', prompt: '[[웃다]] → « en riant » :', answer: '웃으면서' },
  ],
};

const DICTATION = [
  '지금 한국어를 공부하고 있어요',
  '음악을 들으면서 숙제를 해요',
  '밥을 먹으면서 텔레비전을 봐요',
  '선생님이 공책을 펴래요',
  '지훈이가 같이 축구하재요',
  '민수가 도서관에서 책을 읽고 있대요',
  '아이들이 웃으면서 뛰어가요',
  '어제 저녁에 텔레비전을 보고 있었어요',
];

const FILL: [string, string, string[], number, string][] = [
  ['📖 지금 책을 ', ' 있어요.', ['읽고', '읽으면서', '읽어서'], 0, 'Je suis en train de lire un livre.'],
  ['🎧 음악을 ', ' 공부해요.', ['들으면서', '듣고 있어요', '듣면서'], 0, 'J’étudie en écoutant de la musique.'],
];

const RELAY: [string, string][] = [
  ['공부하세요', '공부하래요'],
  ['축구하자', '축구하재요'],
];

const day60: Lesson = {
  id: 'm3-w4-d5',
  month: 3,
  week: 4,
  day: 60,
  title: 'Bilan du 3ᵉ mois & Grande évaluation n°6',
  summary: 'La dictée de la classe, la Grande évaluation bimensuelle n°6, ton entretien de bilan et une dernière histoire de récré entièrement en coréen.',
  cards: [],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le grand jour 🎓' },
        { type: 'tip', text: 'Soixante leçons ! Aujourd’hui, l’épreuve de la classe puis la **Grande évaluation n°6**. [[천천히 가도 돼요]] : sans stress !', mood: 'encourage' },
        { type: 'text', text: 'D’abord, la **dictée** de la classe : huit phrases. [[들으세요!]] Puis [[쓰세요!]]' },
      ],
    },
    ...DICTATION.map((s, i) => ({
      kind: 'practice' as const,
      exercise: { type: 'type' as const, prompt: `Dictée ${i + 1}/${DICTATION.length}`, audio: s, answer: alts(s) },
    })),
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Grammaire & production ✏️' },
        { type: 'text', text: 'Épreuve de la classe : **transformer** des phrases simples, puis **rédiger** une scène de la vie de l’école au présent progressif.' },
      ],
    },
    { kind: 'practice', exercise: { type: 'grid', prompt: 'Deux actions → une phrase avec **(으)면서**. Touche une case vide.', head: ['Action 1', 'Action 2', 'Une seule phrase'], rows: [
      ['[[우유를 마셔요]]', '[[책을 읽어요]]', blank('우유를 마시면서 책을 읽어요')],
      ['[[걸어요]]', '[[노래해요]]', blank('걸으면서 노래해요')],
    ], explain: '[[마시]] + [[면서]] · [[걷다|p:irreg-d]] → [[걸으면서]]. Le dernier verbe ne change pas.' } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[아이들이 그림을 그려요.]] → « en train de » :', answer: alts('아이들이 그림을 그리고 있어요') } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Rédaction : décris une scène de l’école en **trois phrases** au moins, avec **고 있어요** et **면서**. [[쓰세요!]]', placeholder: '쉬는 시간이에요. 아이들이 운동장에서 놀고 있어요. 수아는 웃으면서 뛰어가요.', mustInclude: [PROG_ANY, WHILE_ANY] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Grande évaluation n°6' },
        { type: 'text', text: 'Quatre parties, toujours sans piège ni chrono. Chaque erreur reviendra simplement en révision.' },
        { type: 'table', head: ['Partie', 'Contenu'], rows: [
          ['A', 'Progressif & simultanéité'],
          ['B', 'Rapporter un message'],
          ['C', 'Compréhension de texte'],
          ['D', 'Description orale'],
        ] },
        { type: 'tip', text: '**A — Progressif & simultanéité.** Complète selon l’image.', mood: 'encourage' },
      ],
    },
    ...FILL.map(([before, after, choices, answer, translation], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'cloze' as const, prompt: `**A · ${i + 1}/${FILL.length}**`, before, after, choices, answer, translation },
    })),
    { kind: 'learn', blocks: [{ type: 'tip', text: '**B — Rapporter un message.** Écris la forme rapportée.', mood: 'encourage' }] },
    ...RELAY.map(([said, reported], i) => ({
      kind: 'practice' as const,
      exercise: { type: 'type' as const, prompt: `**B · ${i + 1}/${RELAY.length}** — « [[${said}]] » →`, answer: reported },
    })),
    {
      kind: 'learn',
      blocks: [
        { type: 'tip', text: '**C — Compréhension.** Lis le paragraphe (touche une phrase pour l’entendre), puis réponds.', mood: 'encourage' },
        { type: 'table', head: ['La pause'], rows: [
          ['[[쉬는 시간이에요.]] [[지훈이는 운동장에서 축구를 하고 있어요.]] [[수아는 음악을 들으면서 그림을 그리고 있어요.]] [[민수는 교실에서 숙제를 하고 있어요.]] [[선생님은 도서관에서 책을 읽고 계세요.]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 1/3** — Que fait Sua ?', choices: ['Elle dessine en écoutant de la musique.', 'Elle joue au foot.', 'Elle fait ses devoirs.'], answer: 0, explain: '[[수아는 음악을 들으면서 그림을 그리고 있어요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 2/3** — Vrai ou faux ? « Minsu joue dans la cour. »', choices: ['Faux', 'Vrai'], answer: 0, explain: '[[민수는 교실에서 숙제를 하고 있어요.]]' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '**C · 3/3** — Où est le professeur ?', choices: ['à la bibliothèque', 'dans la cour', 'dans la classe'], answer: 0, explain: '[[선생님은 도서관에서 책을 읽고 계세요.]]' } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**D — À l’oral.** Le professeur montre une image : 🧒🧒🎨 Explique ce que font les enfants avec **고 있어요**.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'write', prompt: '**D · 1/2** — Prépare ta description.', placeholder: '아이들이…', mustInclude: ['아이들', PROG_ANY] } },
    { kind: 'practice', exercise: { type: 'read', ko: '아이들이 그림을 그리고 있어요.', fr: 'Les enfants sont en train de dessiner.', prompt: '**D · 2/2** — Dis-la à voix haute, puis écoute le modèle.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La dernière récré du mois 📖' },
        { type: 'text', text: 'Une histoire **entièrement en coréen**. Touche une bulle pour l’entendre.' },
        { type: 'dialog', lines: [
          { who: '📖', ko: '금요일 오후예요. 쉬는 시간이에요.' },
          { who: '선생님', ko: '나비, 운동장에서 친구들이 뭐 하고 있어요?' },
          { who: '나비', ko: '지훈이는 축구를 하고 있어요. 그리고 웃으면서 뛰어가요.' },
          { who: '나비', ko: '수아는 나무 아래에서 음악을 들으면서 그림을 그리고 있어요.' },
          { who: '선생님', ko: '민수는요?' },
          { who: '나비', ko: '민수는 도서관에 있대요. 책을 읽고 있대요.' },
          { who: '📖', ko: '그런데 민수가 운동장에 왔어요.' },
          { who: '민수', ko: '나비, 같이 놀자!' },
          { who: '나비', ko: '선생님, 민수가 같이 놀재요. 나가도 돼요?' },
          { who: '선생님', ko: '네, 나가도 돼요. 하지만 뛰면 안 돼요! 천천히 걸으세요.' },
          { who: '📖', ko: '나비는 웃으면서 운동장에 뛰어가요…' },
          { who: '선생님', ko: '나비! 뛰면 안 돼요!' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Où est Minsu au début ?', choices: ['à la bibliothèque', 'dans la cour', 'à la maison'], answer: 0, explain: '[[민수는 도서관에 있대요.]] — 🔵 il **dit** qu’il y est.' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Pourquoi le professeur crie-t-il « [[나비!]] » à la fin ?', choices: ['Nabi court alors que c’est interdit.', 'Nabi bavarde en classe.', 'Nabi n’a pas fait ses devoirs.'], answer: 0, explain: '[[뛰면 안 돼요!]] … [[나비는 웃으면서 운동장에 뛰어가요…]] 😅' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ton bilan du 3ᵉ mois 🎓' },
        { type: 'text', text: 'Trois mois sur six, soixante leçons. Tu peux suivre une vraie journée d’école coréenne :' },
        { type: 'table', head: ['Domaine', 'Acquis'], rows: [
          ['Temps & aspects', 'présent, [[passé|p:past]], [[futur|p:future]], [[en train de|p:progressive]] ([[공부하고 있어요]]), [[en même temps|p:while]] ([[들으면서]])'],
          ['Rapporter', '[[대요|p:report]] · [[재요|p:report-let]] · [[래요|p:report-cmd]] : [[선생님이 앉으래요]]'],
          ['Respecter', 'le [[존댓말]] de base : [[가세요|p:honor]] · [[계세요|p:honor-words]] · [[읽고 계세요]]'],
          ['Décrire', 'une scène vivante en phrases liées : [[웃으면서 뛰어가요]]'],
          ['Lire', 'deux contes et des histoires entières en coréen'],
          ['Vocabulaire', '**environ 300 mots et expressions** dans tes cartes de révision'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'read', ko: '선생님, 저는 지금 한국어를 공부하고 있어요. 음악을 들으면서 공부해요. 한국어가 어렵지만 재미있어요!', fr: 'Monsieur / Madame, je suis en train d’étudier le coréen. J’étudie en écoutant de la musique. Le coréen est difficile, mais intéressant !', prompt: 'Ton entretien de bilan : parle de ton apprentissage au professeur, à voix haute.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Bravo, 3ᵉ mois terminé ! 🎉' },
        { type: 'text', text: 'Tu sais rapporter les paroles des autres, dire ce qui se passe **en ce moment** et décrire une scène pleine de vie. Dans sa chrysalide, Nabi bouge de plus en plus… Les ailes arrivent bientôt !' },
        { type: 'tip', text: '[[나비가 웃으면서 기다리고 있어요!|t:Nabi t’attend en souriant !]] ✨ À demain pour le 4ᵉ mois !', mood: 'happy' },
      ],
    },
  ],
};

export const m3w4: Lesson[] = [day56, day57, day58, day59, day60];
