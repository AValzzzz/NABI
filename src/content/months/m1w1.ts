import type { Lesson } from '../types';
import { letter } from './helpers';

const day1: Lesson = {
  id: 'm1-w1-d1',
  month: 1,
  week: 1,
  day: 1,
  title: 'Premières consonnes & salutations',
  summary: '9 consonnes, le langage poli (존댓말) et 3 phrases de survie.',
  cards: [
    letter('c-g', 'ㄱ', 'g/k', 'consonne douce, entre « g » et « k »', 'Une potence : le dos de la langue se lève vers le fond du palais.'),
    letter('c-n', 'ㄴ', 'n', '« n » comme dans « nez »', 'Un nez de profil : le bout de la langue derrière les dents du haut.'),
    letter('c-d', 'ㄷ', 'd/t', 'consonne douce, entre « d » et « t »', '[[ㄴ|r:n]] avec un couvercle.'),
    letter('c-r', 'ㄹ', 'r/l', '« r » d’un seul coup de langue, ou « l »', 'Un zigzag, comme une langue qui roule.'),
    letter('c-m', 'ㅁ', 'm', '« m » comme dans « maman »', 'Un carré : la bouche fermée qui fait « mmm ».'),
    letter('c-b', 'ㅂ', 'b/p', 'consonne douce, entre « b » et « p »', 'Un seau à deux anses : [[ㅁ|r:m]] avec des oreilles.'),
    letter('c-s', 'ㅅ', 's', '« s » comme dans « sac »', 'Une petite tente, ou une dent : le « s » siffle entre les dents.'),
    letter('c-ng', 'ㅇ', 'muet/ng', 'muette au début de syllabe, « ng » à la fin', 'Un rond, comme la gorge ouverte.'),
    letter('c-j', 'ㅈ', 'j', 'consonne douce, entre « dj » et « tch »', '[[ㅅ|r:s]] avec un chapeau.'),
    { id: 'm1-ko-annyeonghaseyo', kind: 'phrase', ko: '안녕하세요', fr: 'Bonjour (poli)', note: 'Avec une petite inclinaison de la tête. Version familière entre amis : [[안녕]].' },
    { id: 'm1-ko-gamsahamnida', kind: 'phrase', ko: '감사합니다', fr: 'Merci (poli)', note: 'Version familière entre amis : [[고마워]].' },
    { id: 'm1-ko-hwajangsil-eodi', kind: 'phrase', ko: '화장실이 어디예요?', fr: 'Où sont les toilettes ?', note: '[[화장실|t:toilettes]] + [[이|p:subject]] + [[어디예요?|t:où est-ce ?]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le hangul, un alphabet malin' },
        { type: 'text', text: 'Le hangul a été inventé en **1443** par le roi Sejong pour que tout le monde puisse apprendre à lire, même sans être savant. C’est un **vrai alphabet** : des consonnes et des voyelles qu’on assemble en petits blocs (les syllabes).' },
        { type: 'text', text: 'Son secret : la forme des consonnes **dessine la bouche** qui les prononce. Aujourd’hui, tu découvres **9 consonnes** et **3 phrases de survie**.' },
        { type: 'tip', text: 'Touche chaque lettre pour l’entendre. Une consonne seule ne se prononce pas : tu l’entendras accompagnée d’une voyelle, que tu apprendras demain.', mood: 'happy' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les consonnes de la langue' },
        { type: 'letters', items: [
          { char: 'ㄱ', roman: 'g/k', mnemonic: 'Une potence : le dos de la langue monte vers le fond du palais.' },
          { char: 'ㄴ', roman: 'n', mnemonic: 'Un nez de profil 👃 : le bout de la langue derrière les dents.' },
          { char: 'ㄷ', roman: 'd/t', mnemonic: 'ㄴ avec un couvercle : même place, son plus net.' },
          { char: 'ㄹ', roman: 'r/l', mnemonic: 'Un zigzag, comme une langue qui roule.' },
        ] },
        { type: 'tip', text: '[[ㄱ|r:g/k]] et [[ㄷ|r:d/t]] sont des consonnes **douces** : pour une oreille française, elles sonnent à mi-chemin entre deux sons. C’est normal !', mood: 'thinking' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les consonnes des lèvres, des dents et de la gorge' },
        { type: 'letters', items: [
          { char: 'ㅁ', roman: 'm', mnemonic: 'Un carré : la bouche fermée qui fait « mmm ».' },
          { char: 'ㅂ', roman: 'b/p', mnemonic: 'Un seau à deux anses : ㅁ avec des oreilles.' },
          { char: 'ㅅ', roman: 's', mnemonic: 'Une petite tente ⛺ : le « s » siffle entre les dents.' },
          { char: 'ㅇ', roman: 'muet/ng', mnemonic: 'Un rond, la gorge. Muet au début, « ng » à la fin.' },
          { char: 'ㅈ', roman: 'j', mnemonic: 'ㅅ avec un chapeau 🎩.' },
        ] },
        { type: 'text', text: 'Les lettres vont **par familles** : un trait de plus et on passe de [[ㄴ|r:n]] à [[ㄷ|r:d/t]], de [[ㅁ|r:m]] à [[ㅂ|r:b/p]], de [[ㅅ|r:s]] à [[ㅈ|r:j]]. Même endroit dans la bouche, son un peu plus fort.' },
      ],
    },
    { kind: 'practice', exercise: { type: 'trace', char: 'ㄴ', roman: 'n', prompt: 'Trace le nez de profil : de haut en bas, puis vers la droite.' } },
    { kind: 'practice', exercise: { type: 'trace', char: 'ㅁ', roman: 'm', prompt: 'Trace la bouche fermée, en suivant les numéros.' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quelle lettre ressemble à une **bouche fermée** ?', choices: ['ㅁ', 'ㅇ', 'ㅂ', 'ㄷ'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quelle lettre est un [[ㅅ|r:s]] avec un **chapeau** ?', choices: ['ㅈ', 'ㄷ', 'ㄹ', 'ㄱ'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Associe chaque lettre à son image.', pairs: [
      ['ㄴ', '👃 Un nez de profil'],
      ['ㅁ', '⬜ Une bouche fermée'],
      ['ㅅ', '⛺ Une petite tente'],
      ['ㅇ', '⭕ Un rond, la gorge'],
      ['ㄹ', '〰️ Un zigzag'],
    ] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'À l’oreille !' },
        { type: 'tip', text: 'Tu vas entendre une consonne **avec une voyelle** (souvent un « a »). Ne t’occupe pas de la voyelle, tu la découvriras demain : écoute seulement **le tout début** du son.', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Écoute : par quelle consonne commence ce son ?', audio: '나', choices: ['ㄴ', 'ㅁ', 'ㄹ', 'ㅇ'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Écoute : par quelle consonne commence ce son ?', audio: '마', choices: ['ㅁ', 'ㅂ', 'ㄴ', 'ㅅ'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Deux façons de parler' },
        { type: 'text', text: 'En coréen, on ne parle pas pareil à un professeur et à un ami. Il y a deux grands registres :' },
        { type: 'table', head: ['Registre', 'Avec qui ?'], rows: [
          ['[[존댓말|t:langage poli]]', 'Adultes, inconnus, professeurs… **par défaut !**'],
          ['[[반말|t:langage familier]]', 'Amis proches du même âge, enfants'],
        ] },
        { type: 'dialog', lines: [
          { who: 'Élève', ko: '안녕하세요!', fr: 'Bonjour ! (poli)' },
          { who: 'Professeur', ko: '안녕하세요!', fr: 'Bonjour !' },
        ] },
        { type: 'dialog', lines: [
          { who: 'Minho', ko: '안녕!', fr: 'Salut ! (familier)' },
          { who: 'Jisu', ko: '안녕! 고마워!', fr: 'Salut ! Merci ! (familier)' },
        ] },
        { type: 'tip', text: 'En tant qu’apprenant, utilise **toujours** le langage poli. Un indice : beaucoup de phrases polies finissent par [[요]] ou par [[니다]].', mood: 'thinking' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Trois phrases de survie' },
        { type: 'tip', text: 'Ces phrases sont pleines de voyelles et de lettres que tu ne connais **pas encore** : c’est normal ! Ne cherche pas à tout lire. Apprends-les **comme une mélodie** et amuse-toi à repérer les consonnes du jour : [[ㄱ|r:g/k]] [[ㄴ|r:n]] [[ㅁ|r:m]] [[ㅅ|r:s]]…', mood: 'encourage' },
        { type: 'text', text: '[[안녕하세요|t:bonjour]] — littéralement « êtes-vous en paix ? ». On l’accompagne d’une petite inclinaison de la tête 🙇.' },
        { type: 'text', text: '[[감사합니다|t:merci]] — le merci poli, valable partout.' },
        { type: 'text', text: '[[화장실이 어디예요?|t:où sont les toilettes ?]] — la phrase qui sauve !' },
        { type: 'breakdown', segments: [
          { ko: '화장실', role: 'subject', gloss: 'toilettes', particle: { ko: '이', key: 'subject' } },
          { ko: '어디예요?', role: 'verb', gloss: 'où est-ce ?' },
        ], translation: 'Où sont les toilettes ?', note: 'Le mot-question « où » vient **à la fin**, pas au début comme en français. En coréen, ce qui compte le plus arrive toujours en dernier.' },
      ],
    },
    { kind: 'practice', exercise: { type: 'listen', audio: '감사합니다', choices: ['감사합니다', '안녕하세요', '화장실이 어디예요?'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '화장실이 어디예요?', choices: ['화장실이 어디예요?', '감사합니다', '안녕하세요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Langage **poli** ([[존댓말]]) ou **familier** ([[반말]]) ?', buckets: ['존댓말 · poli', '반말 · familier'], items: [
      { text: '안녕하세요', bucket: 0 },
      { text: '안녕', bucket: 1 },
      { text: '감사합니다', bucket: 0 },
      { text: '고마워', bucket: 1 },
      { text: '화장실이 어디예요?', bucket: 0 },
    ], explain: 'Les fins en [[요]] et [[니다]] sont des marques de politesse.' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Jeu de rôle 🎭 — Tu entres en classe, le professeur te regarde. Tu dis :', choices: ['안녕하세요', '안녕', '고마워'], answer: 0, explain: 'Avec un professeur → langage poli : [[안녕하세요]].' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Un camarade te prête son crayon. Tu le remercies poliment :', choices: ['감사합니다', '안녕하세요', '화장실이 어디예요?'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'En plein cours, tu as besoin d’aller aux toilettes. Tu demandes :', choices: ['화장실이 어디예요?', '감사합니다', '안녕'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Mission du jour' },
        { type: 'tip', text: 'Aujourd’hui, dis [[안녕하세요]] à voix haute (avec la petite inclinaison 🙇) à trois personnes… ou à trois objets si personne n’est là ! Les lettres, elles, reviendront demain en révision.', mood: 'happy' },
      ],
    },
  ],
  interleave: [
    { type: 'mcq', prompt: 'Quelle lettre est muette au début d’une syllabe ?', choices: ['ㅇ', 'ㅁ', 'ㄴ', 'ㄹ'], answer: 0 },
    { type: 'mcq', prompt: 'On ajoute un trait à [[ㄴ|r:n]]. Quelle lettre obtient-on ?', choices: ['ㄷ', 'ㄹ', 'ㅁ', 'ㄱ'], answer: 0 },
    { type: 'listen', audio: '안녕하세요', choices: ['안녕하세요', '안녕', '감사합니다'], answer: 0 },
    { type: 'mcq', prompt: 'Quelle phrase est **familière** ?', choices: ['고마워', '감사합니다', '안녕하세요'], answer: 0 },
  ],
};

const day2: Lesson = {
  id: 'm1-w1-d2',
  month: 1,
  week: 1,
  day: 2,
  title: 'Voyelles, syllabes & présentation',
  summary: '6 voyelles, assembler consonne + voyelle, et dire « je suis… ».',
  cards: [
    letter('v-a', 'ㅏ', 'a', '« a » comme dans « papa »', 'Branche tournée vers la droite.'),
    letter('v-eo', 'ㅓ', 'eo', '« o » ouvert, comme dans « or »', 'Branche tournée vers la gauche.'),
    letter('v-o', 'ㅗ', 'o', '« ô » fermé, comme dans « eau »', 'Branche vers le ciel.'),
    letter('v-u', 'ㅜ', 'u', '« ou » comme dans « loup »', 'Branche vers le sol.'),
    letter('v-eu', 'ㅡ', 'eu', '« eu » lèvres étirées, en souriant', 'Plat comme l’horizon.'),
    letter('v-i', 'ㅣ', 'i', '« i » comme dans « lit »', 'Debout, comme une personne.'),
    { id: 'm1-ko-jeoneun-imnida', kind: 'grammar', ko: '저는 …입니다', fr: 'Je suis … (poli)', speak: '저는 마리입니다', note: '[[저|t:moi]] + [[는|p:topic]] + nom + [[입니다|p:copula]]' },
    { id: 'm1-ko-neun', kind: 'particle', ko: '는', fr: 'particule de thème (« quant à… »)', note: 'Après une voyelle : [[저는]]. Touche pour en savoir plus : [[는|p:topic]]' },
    { id: 'm1-ko-namu', kind: 'vocab', ko: '나무', fr: 'arbre' },
    { id: 'm1-ko-bada', kind: 'vocab', ko: '바다', fr: 'mer' },
    { id: 'm1-ko-moja', kind: 'vocab', ko: '모자', fr: 'chapeau' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les voyelles : trois traits magiques' },
        { type: 'text', text: 'Les voyelles sont construites avec trois symboles : **le ciel** (un petit trait), **la terre** (plate, ㅡ) et **l’humain** (debout, ㅣ). La direction de la petite branche change le son.' },
        { type: 'letters', items: [
          { char: 'ㅏ', roman: 'a', mnemonic: 'Branche à droite → « a » de « papa ».' },
          { char: 'ㅓ', roman: 'eo', mnemonic: 'Branche à gauche → « o » ouvert de « or ».' },
          { char: 'ㅗ', roman: 'o', mnemonic: 'Branche vers le ciel → « ô » de « eau ».' },
          { char: 'ㅜ', roman: 'u', mnemonic: 'Branche vers le sol → « ou » de « loup ».' },
          { char: 'ㅡ', roman: 'eu', mnemonic: 'Plat → « eu », lèvres étirées en souriant.' },
          { char: 'ㅣ', roman: 'i', mnemonic: 'Debout → « i » de « lit ».' },
        ] },
        { type: 'tip', text: 'Deux pièges pour un Français : [[ㅓ|r:eo]] ne se dit pas « é-o » mais comme le « o » de « porte », et [[ㅜ|r:u]] se dit « ou », jamais « u ».', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'listen', audio: 'ㅓ', choices: ['ㅓ', 'ㅏ', 'ㅗ', 'ㅜ'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: 'ㅜ', choices: ['ㅜ', 'ㅗ', 'ㅡ', 'ㅣ'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quelle voyelle a sa branche tournée **vers le ciel** ?', choices: ['ㅗ', 'ㅜ', 'ㅏ', 'ㅓ'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Assembler une syllabe, comme des Lego' },
        { type: 'text', text: 'Une syllabe coréenne est un **bloc** : au minimum une consonne + une voyelle. Touche un bloc pour l’entendre.' },
        { type: 'compose', items: [
          { parts: ['ㄱ', 'ㅏ'], result: '가', roman: 'ga' },
          { parts: ['ㄴ', 'ㅓ'], result: '너', roman: 'neo' },
          { parts: ['ㅁ', 'ㅗ'], result: '모', roman: 'mo' },
          { parts: ['ㄹ', 'ㅜ'], result: '루', roman: 'ru' },
          { parts: ['ㅅ', 'ㅡ'], result: '스', roman: 'seu' },
          { parts: ['ㅈ', 'ㅣ'], result: '지', roman: 'ji' },
        ] },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Où va la consonne ?' },
        { type: 'text', text: 'Tout dépend de la **forme de la voyelle**. Regarde son grand trait :' },
        { type: 'syllables', items: [
          { example: '가', label: 'Voyelle **debout** → consonne **à gauche**' },
          { example: '모', label: 'Voyelle **couchée** → consonne **au-dessus**' },
        ] },
        { type: 'table', head: ['Voyelle', 'Consonne', 'Exemples'], rows: [
          ['**debout** │ [[ㅏ|r:a]] [[ㅓ|r:eo]] [[ㅣ|r:i]]', '**à gauche**', '[[가|r:ga]] [[너|r:neo]] [[지|r:ji]]'],
          ['**couchée** ─ [[ㅗ|r:o]] [[ㅜ|r:u]] [[ㅡ|r:eu]]', '**au-dessus**', '[[모|r:mo]] [[루|r:ru]] [[스|r:seu]]'],
        ] },
        { type: 'tip', text: 'Un bloc se lit toujours **de gauche à droite, puis de haut en bas** : la consonne vient donc toujours en premier. Demain, tu verras qu’on peut ajouter un 3e étage en dessous.', mood: 'thinking' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le rôle secret de ㅇ' },
        { type: 'text', text: 'Une syllabe ne commence **jamais** par une voyelle seule. Quand on veut dire juste une voyelle, on met [[ㅇ|r:muet]] devant, comme une case vide :' },
        { type: 'compose', items: [
          { parts: ['ㅇ', 'ㅏ'], result: '아', roman: 'a' },
          { parts: ['ㅇ', 'ㅗ'], result: '오', roman: 'o' },
          { parts: ['ㅇ', 'ㅣ'], result: '이', roman: 'i' },
        ] },
        { type: 'tip', text: 'Le clavier de l’appli assemble les blocs tout seul : tape une consonne puis une voyelle, et regarde la syllabe se former.', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Assemble [[ㄷ|r:d]] + [[ㅏ|r:a]] avec le clavier :', answer: '다' } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Assemble [[ㅂ|r:b]] + [[ㅗ|r:o]] :', answer: '보' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[ㄴ|r:n]] + [[ㅜ|r:u]] = ?', choices: ['누', '노', '너', '나'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Avec la voyelle [[ㅗ|r:o]], où se place la consonne ?', choices: ['Au-dessus', 'À gauche', 'En dessous'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '너', choices: ['너', '나', '노', '누'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '고', choices: ['고', '구', '거', '가'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Écris la syllabe que tu entends :', audio: '지', answer: '지' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Tu sais déjà lire de vrais mots !' },
        { type: 'text', text: 'Avec 15 lettres, tu peux lire : [[나무|t:arbre]] · [[바다|t:mer]] · [[모자|t:chapeau]]' },
        { type: 'tip', text: 'Lis chaque mot **syllabe par syllabe** avant de le toucher pour vérifier.', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Que veut dire [[바다]] ?', choices: ['mer', 'arbre', 'chapeau'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Écris le mot que tu entends :', audio: '나무', answer: '나무' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Se présenter : 저는 … 입니다' },
        { type: 'breakdown', segments: [
          { ko: '저', role: 'topic', gloss: 'moi', particle: { ko: '는', key: 'topic' } },
          { ko: '마리', role: 'other', gloss: 'Marie' },
          { ko: '입니다', role: 'verb', gloss: 'suis' },
        ], translation: 'Je suis Marie.', note: 'On colle [[입니다|p:copula]] au prénom, sans espace : [[마리입니다]]. Le verbe est **toujours à la fin** : c’est la règle d’or du coréen.' },
        { type: 'text', text: '[[저|t:moi]] est le « moi » poli. La petite particule [[는|p:topic]] signale **de qui on parle** — touche-la pour en savoir plus.' },
        { type: 'text', text: 'Les prénoms s’écrivent **selon leur son**, pas leur orthographe : [[마리|t:Marie]] · [[루이|t:Louis]] · [[노아|t:Noah]] · [[사라|t:Sarah]]' },
        { type: 'dialog', lines: [
          { who: 'Marie', ko: '안녕하세요. 저는 마리입니다.', fr: 'Bonjour. Je suis Marie.' },
          { who: 'Louis', ko: '안녕하세요! 저는 루이입니다.', fr: 'Bonjour ! Je suis Louis.' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Comment dit-on « Je suis Noah » ?', choices: ['저는 노아입니다', '노아는 저입니다', '저는 너아입니다'], answer: 0, explain: '[[저는]] d’abord, le verbe [[입니다]] à la fin, collé au prénom.' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '저는 루이', after: '.', choices: ['입니다', '안녕하세요', '감사합니다'], answer: 0, translation: 'Je suis Louis.' } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Ton badge 🏷️ : écris **ton prénom** en hangul, comme il sonne.', placeholder: '마리', explain: 'Écoute si ça ressemble à ton prénom. S’il contient des sons pas encore vus, fais au mieux : tu pourras le réécrire plus tard.' } },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Présente-toi à ton voisin : « Je suis [ton prénom]. »', placeholder: '저는 마리입니다', mustInclude: ['저는', '입니다'], explain: 'Modèle : [[저는 마리입니다]]. Lis-le à voix haute !' } },
  ],
  interleave: [
    { type: 'mcq', prompt: 'Par quelle consonne commence [[나무]] ?', choices: ['ㄴ', 'ㅁ', 'ㄷ', 'ㄹ'], answer: 0 },
    { type: 'mcq', prompt: 'Pour te présenter à un adulte, tu commences par :', choices: ['안녕하세요', '안녕', '고마워'], answer: 0 },
    { type: 'listen', audio: '모자', choices: ['모자', '바다', '나무'], answer: 0 },
    { type: 'mcq', prompt: 'Dans [[감사합니다]], quelle est la première consonne ?', choices: ['ㄱ', 'ㅅ', 'ㅁ', 'ㄷ'], answer: 0 },
  ],
};

const day3: Lesson = {
  id: 'm1-w1-d3',
  month: 1,
  week: 1,
  day: 3,
  title: 'Ordre des traits & objets de la classe',
  summary: 'Bien tracer les lettres, la consonne finale (받침) et étiqueter la classe.',
  cards: [
    { id: 'm1-ko-batchim', kind: 'grammar', ko: '받침', fr: 'consonne finale (sous la syllabe)', note: 'Le 3e étage du bloc : [[감]] = [[가]] + [[ㅁ]] en dessous.' },
    letter('c-ch', 'ㅊ', 'ch', '« tch » soufflé', '[[ㅈ|r:j]] avec un petit trait au-dessus.'),
    letter('v-ae', 'ㅐ', 'ae', '« è » comme dans « mère »', '[[ㅏ|r:a]] avec un trait debout en plus.'),
    { id: 'm1-ko-chaek', kind: 'vocab', ko: '책', fr: 'livre', note: '📕' },
    { id: 'm1-ko-gongchaek', kind: 'vocab', ko: '공책', fr: 'cahier', note: '📓 [[공]] + [[책|t:livre]]' },
    { id: 'm1-ko-yeonpil', kind: 'vocab', ko: '연필', fr: 'crayon (à papier)', note: '✏️' },
    { id: 'm1-ko-chaeksang', kind: 'vocab', ko: '책상', fr: 'bureau (table d’écolier)', note: '[[책|t:livre]] + [[상|t:table]]' },
    { id: 'm1-ko-uija', kind: 'vocab', ko: '의자', fr: 'chaise', note: '🪑' },
    { id: 'm1-ko-mul', kind: 'vocab', ko: '물', fr: 'eau', note: '💧' },
    { id: 'm1-ko-ige-mwoyeyo', kind: 'phrase', ko: '이게 뭐예요?', fr: 'Qu’est-ce que c’est ?', note: 'On répond simplement par le nom : [[책|t:livre]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'L’ordre des traits' },
        { type: 'text', text: 'Les Coréens tracent toujours les lettres dans le même ordre. Deux règles suffisent :' },
        { type: 'table', head: ['Règle', ''], rows: [
          ['1', 'De **haut en bas**'],
          ['2', 'De **gauche à droite**'],
        ] },
        { type: 'text', text: 'Touche une lettre pour revoir l’animation. Les numéros jaunes montrent l’ordre.' },
        { type: 'strokes', chars: ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ'] },
        { type: 'tip', text: 'Le rond [[ㅇ|r:muet/ng]] commence en haut et tourne vers la gauche, sans lever le doigt.', mood: 'thinking' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les voyelles, puis la syllabe' },
        { type: 'strokes', chars: ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅡ', 'ㅣ'] },
        { type: 'text', text: 'Dans une syllabe, on trace **la consonne d’abord**, puis la voyelle — toujours de haut en bas, de gauche à droite :' },
        { type: 'strokes', chars: ['가', '모', '지'] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Dans quel sens trace-t-on un trait horizontal ?', choices: ['De gauche à droite', 'De droite à gauche', 'Peu importe'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Dans [[ㅏ|r:a]], quel trait vient en premier ?', choices: ['Le grand trait debout', 'La petite branche'], answer: 0, explain: 'De gauche à droite : le grand trait (à gauche) d’abord.' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Combien de traits pour [[ㅂ|r:b/p]] ?', choices: ['4', '3', '2', '5'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'trace', char: 'ㄹ', roman: 'r/l', prompt: 'Trace ㄹ dans l’ordre : 1, 2, 3.' } },
    { kind: 'practice', exercise: { type: 'trace', char: 'ㅂ', roman: 'b/p', prompt: 'Trace ㅂ : les deux traits debout, puis les deux couchés.' } },
    { kind: 'practice', exercise: { type: 'trace', char: '가', roman: 'ga', prompt: 'Trace la syllabe : la consonne d’abord, puis la voyelle.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le 3e étage : la consonne finale' },
        { type: 'text', text: 'Un bloc peut avoir une consonne **en dessous** : c’est le [[받침|t:consonne finale]]. Tu en as déjà entendu dans tes phrases de survie !' },
        { type: 'compose', items: [
          { parts: ['ㄱ', 'ㅏ', 'ㅁ'], result: '감', roman: 'gam' },
          { parts: ['ㅇ', 'ㅏ', 'ㄴ'], result: '안', roman: 'an' },
          { parts: ['ㅁ', 'ㅜ', 'ㄹ'], result: '물', roman: 'mul' },
          { parts: ['ㄱ', 'ㅗ', 'ㅇ'], result: '공', roman: 'gong' },
        ] },
        { type: 'syllables', items: [
          { example: '감', label: 'debout + finale' },
          { example: '물', label: 'couchée + finale' },
        ] },
        { type: 'text', text: '[[감|r:gam]] comme dans [[감사합니다]], [[안|r:an]] comme dans [[안녕하세요]].' },
        { type: 'table', head: ['En finale', 'Se prononce'], rows: [
          ['[[ㄴ|r:n]] [[ㅁ|r:m]] [[ㄹ|r:l]]', 'comme en français, bien net'],
          ['[[ㅇ|r:ng]]', '« ng » de « parking »'],
          ['[[ㄱ|r:k]] [[ㅂ|r:p]]', 'bouche en place, **sans relâcher** le son'],
          ['[[ㄷ|r:t]] [[ㅅ|r:t]] [[ㅈ|r:t]]', 'tous un « t » retenu'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Assemble [[ㅁ|r:m]] + [[ㅜ|r:u]] + [[ㄹ|r:l]] :', answer: '물' } },
    { kind: 'practice', exercise: { type: 'listen', audio: '감', choices: ['감', '가', '강', '갑'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Dans [[안녕하세요]], quelle syllabe finit par [[ㄴ|r:n]] ?', choices: ['안', '하', '세', '요'], answer: 0 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Étiquetons la classe 🏫' },
        { type: 'text', text: 'Imagine une étiquette sur chaque objet de ta table. Touche pour écouter :' },
        { type: 'letters', items: [
          { char: '책', mnemonic: '📕 livre' },
          { char: '공책', mnemonic: '📓 cahier' },
          { char: '연필', mnemonic: '✏️ crayon (à papier)' },
          { char: '책상', mnemonic: 'bureau, table d’écolier' },
          { char: '의자', mnemonic: '🪑 chaise' },
          { char: '물', mnemonic: '💧 eau' },
        ] },
        { type: 'tip', text: 'Tu remarques ? [[책|t:livre]] revient dans [[공책|t:cahier]] et [[책상|t:bureau]] : le coréen construit ses mots comme des Lego.', mood: 'happy' },
        { type: 'text', text: 'Pour lire [[책|t:livre]], deux lettres bonus : [[ㅊ|r:ch]] (un [[ㅈ|r:j]] avec un petit trait au-dessus) et [[ㅐ|r:ae]] (un « è » de « mère »). On les reverra bientôt.' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Qu’est-ce que c’est ?' },
        { type: 'text', text: '[[이게 뭐예요?|t:qu’est-ce que c’est ?]] — on répond simplement par le nom de l’objet.' },
        { type: 'dialog', lines: [
          { who: 'Professeur', ko: '이게 뭐예요?', fr: 'Qu’est-ce que c’est ? (📕)' },
          { who: 'Élève', ko: '책.', fr: 'Un livre.' },
          { who: 'Professeur', ko: '이게 뭐예요?', fr: 'Qu’est-ce que c’est ? (✏️)' },
          { who: 'Élève', ko: '연필.', fr: 'Un crayon.' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Colle chaque étiquette sur son objet.', pairs: [['책', '📕'], ['공책', '📓'], ['연필', '✏️'], ['의자', '🪑'], ['물', '💧']] } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[이게 뭐예요?]] ✏️', choices: ['연필', '책', '물', '의자'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '책상', choices: ['책상', '책', '공책', '의자'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: '[[이게 뭐예요?]] 📕 — réponds avec le clavier :', answer: '책' } },
    { kind: 'practice', exercise: { type: 'trace', char: '책', prompt: 'Trace [[책|t:livre]] : ㅊ, puis ㅐ, puis ㄱ en dessous.' } },
  ],
  interleave: [
    { type: 'mcq', prompt: 'Comment dit-on « Je suis Sarah » ?', choices: ['저는 사라입니다', '사라는 저입니다', '저는 사라감사합니다'], answer: 0 },
    { type: 'type', prompt: 'Écris le mot que tu entends :', audio: '바다', answer: '바다' },
    { type: 'mcq', prompt: '[[이게 뭐예요?]] 💧', choices: ['물', '모자', '나무', '책'], answer: 0 },
    { type: 'sort', prompt: 'Langage **poli** ([[존댓말]]) ou **familier** ([[반말]]) ?', buckets: ['존댓말 · poli', '반말 · familier'], items: [
      { text: '감사합니다', bucket: 0 }, { text: '고마워', bucket: 1 }, { text: '저는 루이입니다', bucket: 0 }, { text: '안녕', bucket: 1 },
    ] },
  ],
};

const TPR_CHOICES = ['🪑 Je m’assieds', '🧍 Je me lève', '👂 J’écoute', '👀 Je regarde'];

const day4: Lesson = {
  id: 'm1-w1-d4',
  month: 1,
  week: 1,
  day: 4,
  title: 'Écoute active & consignes de classe',
  summary: '4 consignes à mimer, un coup d’œil sur 을/를, et l’oreille affûtée.',
  cards: [
    { id: 'm1-ko-anjeuseyo', kind: 'phrase', ko: '앉으세요', fr: 'Asseyez-vous', note: '🪑 Fais le geste !' },
    { id: 'm1-ko-ireonaseyo', kind: 'phrase', ko: '일어나세요', fr: 'Levez-vous', note: '🧍 Fais le geste !' },
    { id: 'm1-ko-deureuseyo', kind: 'phrase', ko: '들으세요', fr: 'Écoutez', note: '👂 À ne pas confondre avec [[드세요|t:servez-vous]].' },
    { id: 'm1-ko-boseyo', kind: 'phrase', ko: '보세요', fr: 'Regardez', note: '👀 [[책을 보세요|t:regardez le livre]]' },
    { id: 'm1-ko-eul-reul', kind: 'particle', ko: '을 / 를', fr: 'particule d’objet', note: '[[을|p:object]] après consonne : [[책을]]. [[를|p:object]] après voyelle : [[의자를]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Écoute et bouge !' },
        { type: 'text', text: 'Aujourd’hui, on apprend avec le **corps** : à chaque consigne, fais **vraiment** le geste. Le cerveau retient bien mieux un mot associé à un mouvement.' },
        { type: 'table', head: ['Consigne', 'Geste'], rows: [
          ['[[앉으세요]]', '🪑 Asseyez-vous'],
          ['[[일어나세요]]', '🧍 Levez-vous'],
          ['[[들으세요]]', '👂 Écoutez'],
          ['[[보세요]]', '👀 Regardez'],
        ] },
        { type: 'text', text: 'Elles finissent toutes par [[세요|p:seyo]] : c’est la façon **polie** de demander quelque chose.' },
        { type: 'tip', text: 'Attention aux faux jumeaux : [[들으세요|t:écoutez]] et [[드세요|t:servez-vous]]. Écoute bien la différence !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Le professeur dit… Que fais-tu ? (fais le geste !)', audio: '앉으세요', choices: TPR_CHOICES, answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Le professeur dit… Que fais-tu ?', audio: '보세요', choices: TPR_CHOICES, answer: 3 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Le professeur dit… Que fais-tu ?', audio: '일어나세요', choices: TPR_CHOICES, answer: 1 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Le professeur dit… Que fais-tu ?', audio: '들으세요', choices: TPR_CHOICES, answer: 2 } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Une petite histoire en classe' },
        { type: 'text', text: 'Lis et écoute la scène. Repère les **verbes d’action** : où sont-ils dans chaque phrase ?' },
        { type: 'dialog', lines: [
          { who: 'Professeur', ko: '안녕하세요!', fr: 'Bonjour !' },
          { who: 'Élèves', ko: '안녕하세요!', fr: 'Bonjour !' },
          { who: 'Professeur', ko: '앉으세요.', fr: 'Asseyez-vous.' },
          { who: 'Professeur', ko: '책을 보세요.', fr: 'Regardez le livre.' },
          { who: 'Professeur', ko: '들으세요.', fr: 'Écoutez.' },
          { who: 'Marie', ko: '화장실이 어디예요?', fr: 'Où sont les toilettes ?' },
        ] },
        { type: 'tip', text: 'Les verbes sont **toujours à la fin**. Même avec un objet : on dit « le livre — regardez ».', mood: 'happy' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Coup d’œil : la particule d’objet' },
        { type: 'breakdown', segments: [
          { ko: '책', role: 'object', gloss: 'livre', particle: { ko: '을', key: 'object' } },
          { ko: '보세요', role: 'verb', gloss: 'regardez' },
        ], translation: 'Regardez le livre.', note: 'La particule [[을|p:object]] colle une étiquette « objet » sur le mot : c’est **ce qu’on regarde**.' },
        { type: 'table', head: ['Le mot finit par…', 'Particule', 'Exemple'], rows: [
          ['une consonne', '[[을|p:object]]', '[[책을]] · [[물을]]'],
          ['une voyelle', '[[를|p:object]]', '[[의자를]] · [[나무를]]'],
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Consigne ou objet ?', buckets: ['Consigne', 'Objet'], items: [
      { text: '보세요', bucket: 0 }, { text: '책', bucket: 1 }, { text: '앉으세요', bucket: 0 }, { text: '연필', bucket: 1 },
      { text: '들으세요', bucket: 0 }, { text: '의자', bucket: 1 }, { text: '일어나세요', bucket: 0 }, { text: '공책', bucket: 1 },
    ] } },
    { kind: 'practice', exercise: { type: 'cloze', before: '책', after: ' 보세요.', choices: ['을', '를', '는'], answer: 0, translation: 'Regardez le livre.', explain: '[[책]] finit par la consonne [[ㄱ|r:k]] → [[을|p:object]].' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '의자', after: ' 보세요.', choices: ['를', '을', '는'], answer: 0, translation: 'Regardez la chaise.', explain: '[[의자]] finit par la voyelle [[ㅏ|r:a]] → [[를|p:object]].' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Regardez le cahier.', tiles: ['공책을', '보세요'], distractors: ['공책를'] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Entraîne ton oreille 👂' },
        { type: 'text', text: 'Comme en classe : le professeur prononce une syllabe, tu montres la bonne carte. Les cartes se ressemblent beaucoup — c’est fait exprès !' },
        { type: 'tip', text: 'Utilise le bouton 🐢 pour réécouter lentement autant de fois que tu veux.', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'listen', audio: '거', choices: ['거', '가', '고', '구'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '노', choices: ['노', '너', '누', '느'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '바', choices: ['바', '마', '다', '사'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '자', choices: ['자', '사', '차', '아'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '물', choices: ['물', '몰', '멀', '말'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '그', choices: ['그', '기', '구', '거'], answer: 0 } },
  ],
  interleave: [
    { type: 'mcq', prompt: '[[이게 뭐예요?]] 🪑', choices: ['의자', '책상', '연필', '물'], answer: 0 },
    { type: 'type', prompt: 'Écris le mot que tu entends :', audio: '모자', answer: '모자' },
    { type: 'mcq', prompt: 'Comment dit-on « Je suis Louis » ?', choices: ['저는 루이입니다', '저를 루이입니다', '루이는 저입니다'], answer: 0 },
    { type: 'listen', audio: '감사합니다', choices: ['감사합니다', '앉으세요', '보세요'], answer: 0 },
  ],
};

const day5: Lesson = {
  id: 'm1-w1-d5',
  month: 1,
  week: 1,
  day: 5,
  title: 'Bilan de la semaine & évaluation n°1',
  summary: 'Révision des 15 lettres et des 5 expressions clés, puis une petite évaluation sans stress.',
  cards: [],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Ta semaine en un coup d’œil' },
        { type: 'text', text: '**15 lettres** — touche pour réécouter :' },
        { type: 'letters', items: [
          { char: 'ㄱ', roman: 'g/k' }, { char: 'ㄴ', roman: 'n' }, { char: 'ㄷ', roman: 'd/t' }, { char: 'ㄹ', roman: 'r/l' },
          { char: 'ㅁ', roman: 'm' }, { char: 'ㅂ', roman: 'b/p' }, { char: 'ㅅ', roman: 's' }, { char: 'ㅇ', roman: 'muet/ng' },
          { char: 'ㅈ', roman: 'j' }, { char: 'ㅏ', roman: 'a' }, { char: 'ㅓ', roman: 'eo' }, { char: 'ㅗ', roman: 'o' },
          { char: 'ㅜ', roman: 'u' }, { char: 'ㅡ', roman: 'eu' }, { char: 'ㅣ', roman: 'i' },
        ] },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: '5 expressions clés' },
        { type: 'table', head: ['Coréen', 'Français'], rows: [
          ['[[안녕하세요]]', 'Bonjour'],
          ['[[감사합니다]]', 'Merci'],
          ['[[화장실이 어디예요?]]', 'Où sont les toilettes ?'],
          ['[[저는 마리입니다]]', 'Je suis Marie'],
          ['[[이게 뭐예요?]]', 'Qu’est-ce que c’est ?'],
        ] },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Évaluation n°1 — sans stress' },
        { type: 'text', text: 'Se tester, c’est **apprendre** : chaque fois que tu vas chercher une réponse dans ta mémoire, tu la renforces (c’est l’« effet test »).' },
        { type: 'text', text: 'Pas de chrono, pas de piège. Une erreur n’est pas un échec : elle reviendra simplement en révision.' },
        { type: 'tip', text: '**Partie A — Lire et écrire.** Relier, dictée, reconnaissance.', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque mot à son dessin.', pairs: [['책', '📕'], ['연필', '✏️'], ['물', '💧'], ['의자', '🪑']] } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Dictée 1/5 — écris ce que tu entends :', audio: '가', answer: '가' } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Dictée 2/5 — écris ce que tu entends :', audio: '너', answer: '너' } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Dictée 3/5 — écris ce que tu entends :', audio: '다', answer: '다' } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Dictée 4/5 — écris ce que tu entends :', audio: '책', answer: '책', explain: '[[ㅊ|r:ch]] + [[ㅐ|r:ae]] + [[ㄱ|r:k]] en dessous.' } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Dictée 5/5 — écris ce que tu entends :', audio: '물', answer: '물' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Écoute, puis trouve la voyelle que tu entends :', audio: 'ㅏ', choices: ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅣ'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quelle syllabe contient la voyelle [[ㅏ|r:a]] ?', choices: ['다', '너', '모', '루'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: 'Choisis la bonne particule.', before: '저', after: ' 마리입니다.', choices: ['는', '을', '를'], answer: 0, translation: 'Je suis Marie.' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: 'Choisis la bonne particule.', before: '연필', after: ' 보세요.', choices: ['을', '를', '는'], answer: 0, translation: 'Regardez le crayon.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'tip', text: '**Partie B — À l’oral.** Dis chaque réponse **à voix haute** avant de l’écrire, comme si le professeur était devant toi.', mood: 'encourage' },
      ],
    },
    { kind: 'practice', exercise: { type: 'write', prompt: 'Présente-toi : « Bonjour. Je suis [ton prénom]. »', placeholder: '안녕하세요 저는 마리입니다', mustInclude: ['안녕하세요', '저는', '입니다'], explain: 'Modèle : [[안녕하세요. 저는 마리입니다.]]' } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Le professeur montre un livre : [[이게 뭐예요?]] 📕', answer: '책' } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Puis une bouteille : [[이게 뭐예요?]] 💧', answer: '물' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Le professeur dit… Que fais-tu ?', audio: '일어나세요', choices: TPR_CHOICES, answer: 1 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Le cours se termine, le professeur t’a aidé. Tu dis :', choices: ['감사합니다', '고마워', '앉으세요'], answer: 0 } },
  ],
};

export const m1w1: Lesson[] = [day1, day2, day3, day4, day5];
