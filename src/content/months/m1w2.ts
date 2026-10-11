import type { Lesson } from '../types';
import { letter } from './helpers';

const day6: Lesson = {
  id: 'm1-w2-d1',
  month: 1,
  week: 2,
  day: 6,
  title: 'Consonnes qui soufflent & aller quelque part',
  summary: 'Les consonnes aspirées et tendues, puis 학교에 가요 : je vais à l’école.',
  cards: [
    letter('c-k', 'ㅋ', 'k', '« k » avec un souffle d’air', '[[ㄱ|r:g/k]] + un trait = + du souffle.'),
    letter('c-t', 'ㅌ', 't', '« t » avec un souffle d’air', '[[ㄷ|r:d/t]] + un trait au milieu.'),
    letter('c-p', 'ㅍ', 'p', '« p » avec un souffle d’air', 'Dérivée de [[ㅂ|r:b/p]] : mêmes lèvres, avec un souffle.'),
    letter('c-h', 'ㅎ', 'h', '« h » soufflé, comme pour réchauffer ses mains', '[[ㅇ|r:ng]] + des traits au-dessus : son de gorge, soufflé.'),
    letter('c-kk', 'ㄲ', 'kk', '« k » tendu, sans souffle', 'Deux [[ㄱ|r:g/k]] : la gorge se serre.'),
    letter('c-tt', 'ㄸ', 'tt', '« t » tendu, sans souffle', 'Deux [[ㄷ|r:d/t]] : la gorge se serre.'),
    letter('c-pp', 'ㅃ', 'pp', '« p » tendu, sans souffle', 'Deux [[ㅂ|r:b/p]] : les lèvres se serrent.'),
    letter('c-ss', 'ㅆ', 'ss', '« s » appuyé, bien sifflé', 'Deux [[ㅅ|r:s]].'),
    letter('c-jj', 'ㅉ', 'jj', '« tch » tendu, sans souffle', 'Deux [[ㅈ|r:j]].'),
    { id: 'm1-ko-gayo', kind: 'phrase', ko: '가요', fr: 'je vais / il va… (poli)', note: 'Infinitif : [[가다|t:aller]]. Le sujet est souvent sous-entendu.' },
    { id: 'm1-ko-hakgyo', kind: 'vocab', ko: '학교', fr: 'école', note: '🏫 [[학교에 가요|t:je vais à l’école]]' },
    { id: 'm1-ko-e', kind: 'particle', ko: '에', fr: 'à, vers (destination)', note: 'Se colle au lieu où l’on va : [[집에 가요|t:je rentre à la maison]]. [[에|p:place]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les consonnes qui soufflent 💨' },
        { type: 'text', text: 'Un trait de plus sur une consonne douce = **un souffle d’air** en plus : [[ㄱ|r:g/k]] → [[ㅋ|r:k]], [[ㄷ|r:d/t]] → [[ㅌ|r:t]], [[ㅂ|r:b/p]] → [[ㅍ|r:p]], [[ㅈ|r:j]] → [[ㅊ|r:ch]].' },
        { type: 'letters', items: [
          { char: 'ㅋ', roman: 'k', mnemonic: 'ㄱ + un trait : « k » soufflé.' },
          { char: 'ㅌ', roman: 't', mnemonic: 'ㄷ + un trait : « t » soufflé.' },
          { char: 'ㅍ', roman: 'p', mnemonic: 'Dérivée de ㅂ : « p » soufflé.' },
          { char: 'ㅊ', roman: 'ch', mnemonic: 'ㅈ + un trait : « tch » soufflé.' },
          { char: 'ㅎ', roman: 'h', mnemonic: 'ㅇ + des traits : « h » soufflé.' },
        ] },
        { type: 'tip', text: 'En français, on ne prononce jamais le « h ». En coréen, si ! Souffle comme pour réchauffer tes mains : [[하|r:ha]].', mood: 'thinking' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les consonnes tendues 💪' },
        { type: 'text', text: 'Une lettre **doublée** = la gorge se serre, **aucun souffle**, un son sec et un peu plus aigu.' },
        { type: 'letters', items: [
          { char: 'ㄲ', roman: 'kk', mnemonic: 'Deux ㄱ' },
          { char: 'ㄸ', roman: 'tt', mnemonic: 'Deux ㄷ' },
          { char: 'ㅃ', roman: 'pp', mnemonic: 'Deux ㅂ' },
          { char: 'ㅆ', roman: 'ss', mnemonic: 'Deux ㅅ' },
          { char: 'ㅉ', roman: 'jj', mnemonic: 'Deux ㅈ' },
        ] },
        { type: 'tip', text: 'Bonne nouvelle : les « p », « t », « k » français sont déjà assez proches des consonnes tendues. Les aspirées sont le vrai défi !', mood: 'happy' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Trois sons, une famille' },
        { type: 'table', head: ['Douce', 'Aspirée 💨', 'Tendue 💪'], rows: [
          ['[[가|r:ga]]', '[[카|r:ka]]', '[[까|r:kka]]'],
          ['[[다|r:da]]', '[[타|r:ta]]', '[[따|r:tta]]'],
          ['[[바|r:ba]]', '[[파|r:pa]]', '[[빠|r:ppa]]'],
          ['[[자|r:ja]]', '[[차|r:cha]]', '[[짜|r:jja]]'],
          ['[[사|r:sa]]', '—', '[[싸|r:ssa]]'],
        ] },
        { type: 'tip', text: '**Le test de la feuille** 🍃 : tiens une feuille de papier devant ta bouche. Avec [[카|r:ka]], elle bouge. Avec [[까|r:kka]], elle reste immobile. Essaie !', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'listen', audio: '카', choices: ['카', '가', '까'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '따', choices: ['따', '다', '타'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '파', choices: ['파', '바', '빠'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '짜', choices: ['짜', '자', '차'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quelle lettre ajoute un **souffle** à [[ㄷ|r:d/t]] ?', choices: ['ㅌ', 'ㄸ', 'ㄹ', 'ㅁ'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Aspirée (souffle) ou tendue (gorge serrée) ?', buckets: ['Aspirée 💨', 'Tendue 💪'], items: [
      { text: 'ㅋ', bucket: 0 }, { text: 'ㄲ', bucket: 1 }, { text: 'ㅌ', bucket: 0 }, { text: 'ㄸ', bucket: 1 },
      { text: 'ㅍ', bucket: 0 }, { text: 'ㅃ', bucket: 1 }, { text: 'ㅊ', bucket: 0 }, { text: 'ㅉ', bucket: 1 },
    ] } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Bien les tracer' },
        { type: 'strokes', chars: ['ㅋ', 'ㅌ', 'ㅍ', 'ㅎ', 'ㄲ', 'ㅆ'] },
      ],
    },
    { kind: 'practice', exercise: { type: 'trace', char: 'ㅎ', roman: 'h', prompt: 'Trace ㅎ : le petit trait, la barre, puis le rond.' } },
    { kind: 'practice', exercise: { type: 'trace', char: 'ㅍ', roman: 'p', prompt: 'Trace ㅍ dans l’ordre : 1, 2, 3, 4.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Aller quelque part : 가요' },
        { type: 'text', text: 'Dans le dictionnaire, les verbes finissent par [[다]] : [[가다|t:aller]]. Pour parler poliment, on dit [[가요|t:je vais]].' },
        { type: 'breakdown', segments: [
          { ko: '학교', role: 'place', gloss: 'école', particle: { ko: '에', key: 'place' } },
          { ko: '가요', role: 'verb', gloss: 'vais' },
        ], translation: 'Je vais à l’école.', note: '[[에|p:place]] = « à », collé au lieu. Pas besoin de « je » : le contexte suffit. Et le verbe reste **à la fin**.' },
        { type: 'text', text: 'Des lieux : [[학교|t:école]] · [[집|t:maison]] · [[화장실|t:toilettes]]' },
        { type: 'tip', text: 'Dans [[학교]], le [[교]] cache une voyelle que tu découvriras mercredi. Retiens le mot en entier pour l’instant.', mood: 'thinking' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'La carte de la classe 🗺️' },
        { type: 'text', text: 'Chaque élève pose son pion sur la carte et dit où il va :' },
        { type: 'dialog', lines: [
          { who: 'Professeur', ko: '어디에 가요?', fr: 'Où vas-tu ?' },
          { who: 'Marie', ko: '학교에 가요.', fr: 'Je vais à l’école. (🏫)' },
          { who: 'Louis', ko: '집에 가요.', fr: 'Je rentre à la maison. (🏠)' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Ton pion est sur l’école 🏫. Tu dis :', choices: ['학교에 가요', '집에 가요', '화장실에 가요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Ton pion est sur la maison 🏠. Tu dis :', choices: ['집에 가요', '학교에 가요', '집을 가요'], answer: 0, explain: 'Pour une destination : [[에|p:place]], pas [[을|p:object]].' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '화장실', after: ' 가요.', choices: ['에', '을', '는'], answer: 0, translation: 'Je vais aux toilettes.' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Moi, je vais à l’école.', tiles: ['저는', '학교에', '가요'], distractors: ['학교를'] } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Écris : « Je rentre à la maison. »', answer: ['집에 가요', '집에가요'] } },
  ],
  interleave: [
    { type: 'listen', audio: '까', choices: ['까', '가', '카'], answer: 0 },
    { type: 'mcq', prompt: 'Que veut dire [[이게 뭐예요?]] ?', choices: ['Qu’est-ce que c’est ?', 'Où sont les toilettes ?', 'Je vais à l’école.'], answer: 0 },
    { type: 'mcq', prompt: 'Le professeur dit [[앉으세요]]. Tu…', choices: ['🪑 t’assieds', '🧍 te lèves', '👀 regardes'], answer: 0 },
    { type: 'cloze', before: '책', after: ' 보세요.', choices: ['을', '에', '는'], answer: 0, translation: 'Regardez le livre.' },
  ],
};

const day7: Lesson = {
  id: 'm1-w2-d2',
  month: 1,
  week: 2,
  day: 7,
  title: 'Les 7 sons du 받침 & au magasin',
  summary: 'Lire n’importe quelle consonne finale, des mots du quotidien, et 사요 : j’achète.',
  cards: [
    { id: 'm1-ko-bap', kind: 'vocab', ko: '밥', fr: 'riz cuit / repas', note: '🍚' },
    { id: 'm1-ko-jip', kind: 'vocab', ko: '집', fr: 'maison', note: '🏠' },
    { id: 'm1-ko-nun', kind: 'vocab', ko: '눈', fr: 'œil / neige', note: '👁️ ❄️ Même mot pour les deux !' },
    { id: 'm1-ko-ot', kind: 'vocab', ko: '옷', fr: 'vêtement', note: '👕 Le [[ㅅ]] final s’entend comme un [[ㄷ]].' },
    { id: 'm1-ko-kkot', kind: 'vocab', ko: '꽃', fr: 'fleur', note: '🌸 Le [[ㅊ]] final s’entend comme un [[ㄷ]].' },
    { id: 'm1-ko-sayo', kind: 'phrase', ko: '사요', fr: 'j’achète (poli)', note: 'Infinitif : [[사다|t:acheter]]. [[꽃을 사요|t:j’achète des fleurs]]' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le 받침 : seulement 7 sons' },
        { type: 'text', text: 'Presque toutes les consonnes peuvent se placer au 3e étage. Mais bonne nouvelle : à la fin d’une syllabe, on n’entend que **7 sons**.' },
        { type: 'table', head: ['On entend', 'On peut écrire'], rows: [
          ['[[ㄱ|r:k]]', '[[ㄱ]] [[ㅋ]] [[ㄲ]]'],
          ['[[ㄴ|r:n]]', '[[ㄴ]]'],
          ['[[ㄷ|r:t]]', '[[ㄷ]] [[ㅅ]] [[ㅆ]] [[ㅈ]] [[ㅊ]] [[ㅌ]] [[ㅎ]]'],
          ['[[ㄹ|r:l]]', '[[ㄹ]]'],
          ['[[ㅁ|r:m]]', '[[ㅁ]]'],
          ['[[ㅂ|r:p]]', '[[ㅂ]] [[ㅍ]]'],
          ['[[ㅇ|r:ng]]', '[[ㅇ]]'],
        ] },
        { type: 'tip', text: 'Pourquoi ? En fin de syllabe, la bouche se met en place mais **ne relâche pas** : impossible d’entendre le souffle ou la tension. Tout se réduit au son de base.', mood: 'thinking' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Des mots à 받침' },
        { type: 'letters', items: [
          { char: '물', mnemonic: '💧 eau' },
          { char: '밥', mnemonic: '🍚 riz cuit, repas' },
          { char: '집', mnemonic: '🏠 maison' },
          { char: '눈', mnemonic: '👁️ œil · ❄️ neige' },
          { char: '옷', mnemonic: '👕 vêtement — fin en ㄷ' },
          { char: '꽃', mnemonic: '🌸 fleur — fin en ㄷ' },
        ] },
        { type: 'text', text: 'Parfois, un bloc a **4 lettres** : deux consonnes en bas. Seule, la syllabe n’en fait entendre qu’une.' },
        { type: 'compose', items: [
          { parts: ['ㄲ', 'ㅗ', 'ㅊ'], result: '꽃', roman: 'kkot' },
          { parts: ['ㅇ', 'ㅏ', 'ㄴ', 'ㅈ'], result: '앉', roman: 'an' },
        ] },
        { type: 'tip', text: 'Tu reconnais [[앉]] ? C’est le début de [[앉으세요]] ! On verra jeudi pourquoi le [[ㅈ]] se réveille dans ce mot.', mood: 'happy' },
      ],
    },
    { kind: 'practice', exercise: { type: 'listen', audio: '밥', choices: ['밥', '밤', '방', '박'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: '눈', choices: ['눈', '눔', '눙', '눌'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quel son entend-on à la fin de [[옷]] ?', choices: ['ㄷ', 'ㅅ', 'ㅇ', 'ㄹ'], answer: 0, explain: '[[ㅅ]] en finale se prononce comme [[ㄷ|r:t]].' } },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Quel son entend-on à la fin ?', buckets: ['Son ㄷ', 'Son ㅂ'], items: [
      { text: '옷', bucket: 0 }, { text: '꽃', bucket: 0 }, { text: '낮', bucket: 0 },
      { text: '밥', bucket: 1 }, { text: '집', bucket: 1 }, { text: '앞', bucket: 1 },
    ] } },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Relie chaque mot à son dessin.', pairs: [['밥', '🍚'], ['집', '🏠'], ['눈', '❄️'], ['옷', '👕'], ['꽃', '🌸']] } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Écris le mot que tu entends :', audio: '집', answer: '집' } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Écris le mot que tu entends :', audio: '밥', answer: '밥' } },
    { kind: 'practice', exercise: { type: 'trace', char: '꽃', roman: 'kkot', prompt: 'Trace [[꽃|t:fleur]] : ㄲ, puis ㅗ, puis ㅊ en dessous.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Au magasin : 사요' },
        { type: 'text', text: '[[사다|t:acheter]] devient [[사요|t:j’achète]]. Ce qu’on achète prend la particule d’objet [[을|p:object]] / [[를|p:object]].' },
        { type: 'breakdown', segments: [
          { ko: '저', role: 'topic', gloss: 'moi', particle: { ko: '는', key: 'topic' } },
          { ko: '꽃', role: 'object', gloss: 'fleurs', particle: { ko: '을', key: 'object' } },
          { ko: '사요', role: 'verb', gloss: 'achète' },
        ], translation: 'J’achète des fleurs.', note: 'Même ordre que [[책을 보세요]] : l’objet, puis le verbe **à la fin**.' },
        { type: 'text', text: 'Ne mélange pas : [[에|p:place]] pour **où l’on va**, [[을|p:object]] / [[를|p:object]] pour **ce qu’on achète**.' },
        { type: 'dialog', lines: [
          { who: 'Vendeur', ko: '안녕하세요!', fr: 'Bonjour !' },
          { who: 'Marie', ko: '안녕하세요. 꽃을 사요.', fr: 'Bonjour. J’achète des fleurs.' },
          { who: 'Louis', ko: '저는 옷을 사요.', fr: 'Moi, j’achète un vêtement.' },
        ] },
      ],
    },
    { kind: 'practice', exercise: { type: 'order', translation: 'J’achète des fleurs.', tiles: ['꽃을', '사요'], distractors: ['꽃를', '꽃에'] } },
    { kind: 'practice', exercise: { type: 'cloze', before: '옷', after: ' 사요.', choices: ['을', '를', '에'], answer: 0, translation: 'J’achète un vêtement.', explain: '[[옷]] finit par une consonne → [[을|p:object]].' } },
    { kind: 'practice', exercise: { type: 'cloze', before: '집', after: ' 가요.', choices: ['에', '을', '를'], answer: 0, translation: 'Je rentre à la maison.', explain: 'Destination → [[에|p:place]].' } },
  ],
  interleave: [
    { type: 'listen', audio: '타', choices: ['타', '다', '따'], answer: 0 },
    { type: 'mcq', prompt: 'Que veut dire [[학교에 가요]] ?', choices: ['Je vais à l’école.', 'J’achète un livre.', 'Je rentre à la maison.'], answer: 0 },
    { type: 'mcq', prompt: '[[이게 뭐예요?]] 🍚', choices: ['밥', '물', '집', '눈'], answer: 0 },
    { type: 'type', prompt: 'Écris le mot que tu entends :', audio: '공책', answer: '공책' },
  ],
};

const day8: Lesson = {
  id: 'm1-w2-d3',
  month: 1,
  week: 2,
  day: 8,
  title: 'Toutes les voyelles & verbes du quotidien',
  summary: 'Les voyelles en « y », ㅐ/ㅔ, les voyelles composées, puis manger, boire, dormir.',
  cards: [
    letter('v-ya', 'ㅑ', 'ya', '« ya » comme dans « yak »', '[[ㅏ|r:a]] + un trait.'),
    letter('v-yeo', 'ㅕ', 'yeo', '« yo » ouvert : un « y » devant ㅓ', '[[ㅓ|r:eo]] + un trait.'),
    letter('v-yo', 'ㅛ', 'yo', '« yô » comme dans « yoyo »', '[[ㅗ|r:o]] + un trait.'),
    letter('v-yu', 'ㅠ', 'yu', '« you » comme dans « youpi »', '[[ㅜ|r:u]] + un trait.'),
    letter('v-e', 'ㅔ', 'e', '« è », comme ㅐ', '[[ㅓ|r:eo]] + un trait debout.'),
    letter('v-wa', 'ㅘ', 'wa', '« oi » comme dans « moi »', '[[ㅗ|r:o]] + [[ㅏ|r:a]].'),
    letter('v-wo', 'ㅝ', 'wo', '« wo » comme dans « woah »', '[[ㅜ|r:u]] + [[ㅓ|r:eo]].'),
    letter('v-oe', 'ㅚ', 'oe', '« wè », presque comme ㅙ et ㅞ', '[[ㅗ|r:o]] + [[ㅣ|r:i]].'),
    letter('v-wi', 'ㅟ', 'wi', '« oui »', '[[ㅜ|r:u]] + [[ㅣ|r:i]].'),
    letter('v-ui', 'ㅢ', 'ui', '« eu-i » enchaîné, lèvres étirées', '[[ㅡ|r:eu]] + [[ㅣ|r:i]].'),
    { id: 'm1-ko-ne', kind: 'vocab', ko: '네', fr: 'oui (poli)' },
    { id: 'm1-ko-meogeoyo', kind: 'phrase', ko: '먹어요', fr: 'je mange (poli)', note: '🍽️ Infinitif : [[먹다|t:manger]]. [[밥을 먹어요|t:je mange]]' },
    { id: 'm1-ko-masyeoyo', kind: 'phrase', ko: '마셔요', fr: 'je bois (poli)', note: '🥤 Infinitif : [[마시다|t:boire]]. [[물을 마셔요|t:je bois de l’eau]]' },
    { id: 'm1-ko-jayo', kind: 'phrase', ko: '자요', fr: 'je dors (poli)', note: '😴 Infinitif : [[자다|t:dormir]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Un trait de plus = un « y »' },
        { type: 'letters', items: [
          { char: 'ㅑ', roman: 'ya', mnemonic: 'ㅏ + un trait : « ya ».' },
          { char: 'ㅕ', roman: 'yeo', mnemonic: 'ㅓ + un trait : « yo » ouvert.' },
          { char: 'ㅛ', roman: 'yo', mnemonic: 'ㅗ + un trait : « yô ».' },
          { char: 'ㅠ', roman: 'yu', mnemonic: 'ㅜ + un trait : « you ».' },
        ] },
        { type: 'text', text: 'Maintenant, tu peux lire [[학교]] en entier ([[교|r:gyo]] = [[ㄱ|r:g]] + [[ㅛ|r:yo]]) et le [[녕|r:nyeong]] de [[안녕하세요]] !' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'ㅐ et ㅔ, de faux jumeaux' },
        { type: 'letters', items: [
          { char: 'ㅐ', roman: 'ae', mnemonic: 'Déjà vu dans 책 : « è ».' },
          { char: 'ㅔ', roman: 'e', mnemonic: 'ㅓ + un trait debout : « è » aussi !' },
          { char: 'ㅒ', roman: 'yae', mnemonic: 'Version « y », rare.' },
          { char: 'ㅖ', roman: 'ye', mnemonic: 'Version « y », rare.' },
        ] },
        { type: 'text', text: 'Aujourd’hui, presque tous les Coréens prononcent [[ㅐ|r:ae]] et [[ㅔ|r:e]] **pareil**. Il faut juste retenir l’orthographe de chaque mot.' },
        { type: 'text', text: 'Un mot précieux : [[네|t:oui]] — le « oui » poli. Et tu retrouves [[ㅔ|r:e]] dans le [[세|r:se]] de [[안녕하세요]].' },
      ],
    },
    { kind: 'practice', exercise: { type: 'listen', audio: 'ㅕ', choices: ['ㅕ', 'ㅓ', 'ㅑ', 'ㅛ'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'listen', audio: 'ㅠ', choices: ['ㅠ', 'ㅜ', 'ㅛ', 'ㅡ'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Écris le mot que tu entends :', audio: '학교', answer: '학교' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Les voyelles composées' },
        { type: 'text', text: 'On assemble deux voyelles. [[ㅗ|r:o]] va avec le côté « a » ([[ㅏ|r:a]] [[ㅐ|r:ae]]), [[ㅜ|r:u]] avec le côté « eo » ([[ㅓ|r:eo]] [[ㅔ|r:e]]) :' },
        { type: 'compose', items: [
          { parts: ['ㅗ', 'ㅏ'], result: 'ㅘ', roman: 'wa' },
          { parts: ['ㅜ', 'ㅓ'], result: 'ㅝ', roman: 'wo' },
          { parts: ['ㅗ', 'ㅐ'], result: 'ㅙ', roman: 'wae' },
          { parts: ['ㅜ', 'ㅔ'], result: 'ㅞ', roman: 'we' },
          { parts: ['ㅗ', 'ㅣ'], result: 'ㅚ', roman: 'oe' },
          { parts: ['ㅜ', 'ㅣ'], result: 'ㅟ', roman: 'wi' },
          { parts: ['ㅡ', 'ㅣ'], result: 'ㅢ', roman: 'ui' },
        ] },
        { type: 'tip', text: '[[ㅙ|r:wae]], [[ㅞ|r:we]] et [[ㅚ|r:oe]] se prononcent presque pareil (« wè »). Ouf !', mood: 'happy' },
        { type: 'text', text: 'Tu peux enfin lire **lettre par lettre** : [[화장실]] ([[화|r:hwa]]), [[뭐예요]] ([[뭐|r:mwo]]), [[의자]] ([[의|r:ui]]). **Tu connais tout l’alphabet !** 🎉' },
        { type: 'strokes', chars: ['ㅘ', 'ㅝ', 'ㅢ', '화'] },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '[[ㅗ|r:o]] + [[ㅏ|r:a]] = ?', choices: ['ㅘ', 'ㅝ', 'ㅚ', 'ㅟ'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Écris [[와|r:wa]] avec le clavier : ㅇ, puis ㅗ, puis ㅏ.', answer: '와' } },
    { kind: 'practice', exercise: { type: 'read', ko: '뭐예요', fr: 'qu’est-ce que c’est ?' } },
    { kind: 'practice', exercise: { type: 'trace', char: '화', roman: 'hwa', prompt: 'Trace [[화]] : ㅎ, puis ㅗ, puis ㅏ.' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Manger, boire, dormir' },
        { type: 'table', head: ['Infinitif', 'Poli', 'Sens'], rows: [
          ['[[먹다]]', '[[먹어요]]', '🍽️ manger'],
          ['[[마시다]]', '[[마셔요]]', '🥤 boire'],
          ['[[자다]]', '[[자요]]', '😴 dormir'],
          ['[[가다]]', '[[가요]]', '🚶 aller'],
        ] },
        { type: 'text', text: 'On enlève [[다]] et on ajoute [[-아요 / -어요|p:present]] (touche pour la règle). Les voyelles fusionnent : [[마시]] + 어요 → [[마셔요]].' },
        { type: 'breakdown', segments: [
          { ko: '저', role: 'topic', gloss: 'moi', particle: { ko: '는', key: 'topic' } },
          { ko: '물', role: 'object', gloss: 'eau', particle: { ko: '을', key: 'object' } },
          { ko: '마셔요', role: 'verb', gloss: 'bois' },
        ], translation: 'Je bois de l’eau.' },
      ],
    },
    { kind: 'practice', exercise: { type: 'match', prompt: 'Associe chaque verbe à son geste.', pairs: [['먹어요', '🍽️ mange'], ['마셔요', '🥤 boit'], ['자요', '😴 dort'], ['가요', '🚶 va']] } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: '🍚 Qu’est-ce que tu fais ?', choices: ['밥을 먹어요', '물을 마셔요', '자요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'order', translation: 'Je bois de l’eau.', tiles: ['물을', '마셔요'], distractors: ['물를', '먹어요'] } },
    { kind: 'practice', exercise: { type: 'cloze', before: '밥', after: ' 먹어요.', choices: ['을', '를', '에'], answer: 0, translation: 'Je mange (un repas).' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Quel est l’infinitif de [[마셔요]] ?', choices: ['마시다', '마셔다', '마다'], answer: 0 } },
  ],
  interleave: [
    { type: 'listen', audio: '꽃', choices: ['꽃', '꼬', '곳'], answer: 0 },
    { type: 'cloze', before: '학교', after: ' 가요.', choices: ['에', '을', '를'], answer: 0, translation: 'Je vais à l’école.' },
    { type: 'mcq', prompt: 'Que veut dire [[옷을 사요]] ?', choices: ['J’achète un vêtement.', 'Je mange.', 'Je rentre à la maison.'], answer: 0 },
    { type: 'mcq', prompt: 'Comment dit-on « oui » poliment ?', choices: ['네', '눈', '너'], answer: 0 },
  ],
};

const day9: Lesson = {
  id: 'm1-w2-d4',
  month: 1,
  week: 2,
  day: 9,
  title: 'La liaison & exprimer un besoin',
  summary: 'Pourquoi 집에 se dit [지베], et demander poliment avec 주세요.',
  cards: [
    { id: 'm1-ko-liaison', kind: 'grammar', ko: '집에', fr: 'à la maison — se prononce en liaison', note: 'Le [[ㅂ]] glisse dans le [[ㅇ]] muet : [[지베]].' },
    { id: 'm1-ko-juseyo', kind: 'phrase', ko: '주세요', fr: 'donnez-moi, s’il vous plaît', note: '[[물 주세요|t:de l’eau, s’il vous plaît]]' },
    { id: 'm1-ko-hanguk', kind: 'vocab', ko: '한국', fr: 'Corée', note: '🇰🇷' },
    { id: 'm1-ko-hangugeo', kind: 'vocab', ko: '한국어', fr: 'le coréen (la langue)', note: 'Se prononce en liaison : [[한구거]].' },
  ],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Quand la consonne glisse' },
        { type: 'text', text: 'Quand une syllabe finit par une consonne et que la suivante commence par le [[ㅇ|r:muet]] muet, la consonne **glisse** dans la case vide. Touche pour écouter :' },
        { type: 'liaison', items: [
          { written: '집에', spoken: '지베', fr: 'à la maison' },
          { written: '물을', spoken: '무를', fr: 'l’eau (objet)' },
          { written: '책을', spoken: '채글', fr: 'le livre (objet)' },
          { written: '먹어요', spoken: '머거요', fr: 'je mange' },
          { written: '한국어', spoken: '한구거', fr: 'le coréen' },
        ] },
        { type: 'tip', text: 'C’est exactement comme la liaison en français : « les‿amis » se dit « lé-za-mi ». On **écrit** [[집에]], on **dit** « 지베 ».', mood: 'happy' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'C’est la vraie lettre qui glisse' },
        { type: 'text', text: 'Seul, [[옷]] se termine par un son [[ㄷ|r:t]]. Mais devant une voyelle, c’est le **vrai** [[ㅅ|r:s]] qui glisse :' },
        { type: 'liaison', items: [
          { written: '옷을', spoken: '오슬', fr: 'le vêtement (objet)' },
          { written: '꽃을', spoken: '꼬츨', fr: 'les fleurs (objet)' },
          { written: '앉으세요', spoken: '안즈세요', fr: 'asseyez-vous' },
        ] },
        { type: 'text', text: 'Voilà le mystère de [[앉으세요]] résolu : le [[ㅈ]] endormi se réveille devant [[으]].' },
        { type: 'tip', text: 'Exception : le [[ㅇ|r:ng]] final ne glisse jamais, il reste « ng » : [[가방에|t:dans le sac]] ne fait pas de liaison.', mood: 'thinking' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Comment se prononce [[집에]] ?', choices: ['[지베]', '[집 에] séparé', '[지페]'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'sort', prompt: 'Liaison ou pas ?', buckets: ['Liaison', 'Pas de liaison'], items: [
      { text: '집에', bucket: 0 }, { text: '책을', bucket: 0 }, { text: '먹어요', bucket: 0 }, { text: '한국어', bucket: 0 },
      { text: '학교에', bucket: 1 }, { text: '의자를', bucket: 1 }, { text: '가요', bucket: 1 }, { text: '마셔요', bucket: 1 },
    ], explain: 'Il faut une consonne finale **suivie de** [[ㅇ]] muet.' } },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Un élève a écrit « 지베 가요 ». Corrige-le :', choices: ['집에 가요', '지베 가요', '집베 가요'], answer: 0, explain: 'On écrit [[집에]] ; seule la prononciation fait la liaison.' } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Écris ce que tu entends — avec l’**orthographe**, pas la prononciation !', audio: '먹어요', answer: '먹어요' } },
    { kind: 'practice', exercise: { type: 'type', prompt: 'Même consigne : écris l’orthographe.', audio: '한국어', answer: '한국어' } },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Demander poliment : 주세요' },
        { type: 'text', text: '[[주세요|t:donnez-moi, s’il vous plaît]] se met **après** ce que tu demandes :' },
        { type: 'text', text: '[[물 주세요|t:de l’eau, s’il vous plaît]] · [[밥 주세요|t:un repas, s’il vous plaît]] · [[연필 주세요|t:un crayon, s’il vous plaît]]' },
        { type: 'tip', text: 'À l’oral, on laisse souvent tomber [[을|p:object]] / [[를|p:object]] : [[밥 먹어요|t:je mange]] = [[밥을 먹어요]].', mood: 'thinking' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Lecture à voix haute' },
        { type: 'text', text: 'Lis la scène à voix haute, puis repère les liaisons : elles se cachent dans [[밥을]] et [[먹어요]].' },
        { type: 'dialog', lines: [
          { who: 'Jisu', ko: '안녕하세요!', fr: 'Bonjour !' },
          { who: 'Minho', ko: '안녕하세요. 물 주세요.', fr: 'Bonjour. De l’eau, s’il vous plaît.' },
          { who: 'Jisu', ko: '네. 밥을 먹어요?', fr: 'Oui. Tu manges ?' },
          { who: 'Minho', ko: '네, 밥을 먹어요. 감사합니다!', fr: 'Oui, je mange. Merci !' },
        ] },
        { type: 'text', text: 'Remarque : une question, c’est la même phrase avec une intonation **montante** : [[밥을 먹어요?]]' },
      ],
    },
    { kind: 'practice', exercise: { type: 'mcq', prompt: 'Tu as soif. Tu dis :', choices: ['물 주세요', '물을 사요', '자요'], answer: 0 } },
    { kind: 'practice', exercise: { type: 'cloze', before: '밥 ', after: '.', choices: ['주세요', '가요', '자요'], answer: 0, translation: 'Un repas, s’il vous plaît.' } },
    { kind: 'practice', exercise: { type: 'order', translation: 'De l’eau, s’il vous plaît.', tiles: ['물', '주세요'], distractors: ['자요', '에'] } },
    { kind: 'practice', exercise: { type: 'read', ko: '한국어', fr: 'le coréen', prompt: 'Lis à voix haute **avec la liaison**, puis vérifie.' } },
  ],
  interleave: [
    { type: 'mcq', prompt: '😴 Qu’est-ce que tu fais ?', choices: ['자요', '먹어요', '마셔요'], answer: 0 },
    { type: 'listen', audio: '눈', choices: ['눈', '눌', '눔'], answer: 0 },
    { type: 'cloze', before: '꽃', after: ' 사요.', choices: ['을', '를', '에'], answer: 0, translation: 'J’achète des fleurs.' },
    { type: 'mcq', prompt: 'Que veut dire [[네]] ?', choices: ['oui', 'non', 'merci'], answer: 0 },
  ],
};

const BANK = ['입니다', '에', '주세요'];

const day10: Lesson = {
  id: 'm1-w2-d5',
  month: 1,
  week: 2,
  day: 10,
  title: 'Bilan de la quinzaine & Grande évaluation n°1',
  summary: 'Le hangul complet, puis la grande évaluation : lecture, dictée, vocabulaire, production.',
  cards: [],
  steps: [
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le hangul complet : les consonnes' },
        { type: 'letters', items: [
          { char: 'ㄱ', roman: 'g/k' }, { char: 'ㄴ', roman: 'n' }, { char: 'ㄷ', roman: 'd/t' }, { char: 'ㄹ', roman: 'r/l' },
          { char: 'ㅁ', roman: 'm' }, { char: 'ㅂ', roman: 'b/p' }, { char: 'ㅅ', roman: 's' }, { char: 'ㅇ', roman: 'muet/ng' },
          { char: 'ㅈ', roman: 'j' }, { char: 'ㅊ', roman: 'ch' }, { char: 'ㅋ', roman: 'k' }, { char: 'ㅌ', roman: 't' },
          { char: 'ㅍ', roman: 'p' }, { char: 'ㅎ', roman: 'h' },
        ] },
        { type: 'text', text: 'Les tendues :' },
        { type: 'letters', items: [
          { char: 'ㄲ', roman: 'kk' }, { char: 'ㄸ', roman: 'tt' }, { char: 'ㅃ', roman: 'pp' }, { char: 'ㅆ', roman: 'ss' }, { char: 'ㅉ', roman: 'jj' },
        ] },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Le hangul complet : les voyelles' },
        { type: 'letters', items: [
          { char: 'ㅏ', roman: 'a' }, { char: 'ㅓ', roman: 'eo' }, { char: 'ㅗ', roman: 'o' }, { char: 'ㅜ', roman: 'u' },
          { char: 'ㅡ', roman: 'eu' }, { char: 'ㅣ', roman: 'i' }, { char: 'ㅑ', roman: 'ya' }, { char: 'ㅕ', roman: 'yeo' },
          { char: 'ㅛ', roman: 'yo' }, { char: 'ㅠ', roman: 'yu' }, { char: 'ㅐ', roman: 'ae' }, { char: 'ㅔ', roman: 'e' },
          { char: 'ㅒ', roman: 'yae' }, { char: 'ㅖ', roman: 'ye' }, { char: 'ㅘ', roman: 'wa' }, { char: 'ㅝ', roman: 'wo' },
          { char: 'ㅙ', roman: 'wae' }, { char: 'ㅞ', roman: 'we' }, { char: 'ㅚ', roman: 'oe' }, { char: 'ㅟ', roman: 'wi' },
          { char: 'ㅢ', roman: 'ui' },
        ] },
        { type: 'tip', text: 'C’est la dernière leçon avec les aides de prononciation : dès la semaine 3, tu lis **seul** ! Tu en es capable.', mood: 'encourage' },
      ],
    },
    {
      kind: 'learn',
      blocks: [
        { type: 'title', text: 'Grande évaluation n°1' },
        { type: 'text', text: 'Quatre parties pour faire le point sur tes 2 premières semaines. Comme toujours : pas de piège, pas de chrono, et chaque erreur reviendra en révision.' },
        { type: 'table', head: ['Partie', 'Contenu'], rows: [
          ['A', 'Lecture à voix haute (10 mots)'],
          ['B', 'Dictée (5 syllabes + 5 mots)'],
          ['C', 'Vocabulaire et images (10 mots)'],
          ['D', 'Phrases à compléter (3)'],
        ] },
        { type: 'tip', text: '**A — Lecture.** Lis chaque mot à voix haute **avant** d’écouter, puis sois honnête avec toi-même.', mood: 'encourage' },
      ],
    },
    ...(['학교', '연필', '한국', '물', '안녕', '꽃', '화장실', '의자', '먹어요', '집에'] as const).map((ko, i) => ({
      kind: 'practice' as const,
      exercise: { type: 'read' as const, ko, prompt: `**A · ${i + 1}/10** — lis à voix haute, puis vérifie.` },
    })),
    { kind: 'learn', blocks: [{ type: 'tip', text: '**B — Dictée.** Écoute (autant de fois que tu veux), puis écris.', mood: 'encourage' }] },
    ...['까', '퍼', '뭐', '의', '쌀', '학교', '밥', '한국', '마셔요', '주세요'].map((audio, i) => ({
      kind: 'practice' as const,
      exercise: { type: 'type' as const, prompt: `**B · ${i + 1}/10** — écris ce que tu entends :`, audio, answer: audio },
    })),
    { kind: 'learn', blocks: [{ type: 'tip', text: '**C — Vocabulaire.** Relie chaque mot à son image.', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'match', prompt: '**C · 1/2** — relie les mots aux images.', pairs: [['학교', '🏫'], ['물', '💧'], ['책', '📕'], ['연필', '✏️'], ['집', '🏠']] } },
    { kind: 'practice', exercise: { type: 'match', prompt: '**C · 2/2** — relie les mots aux images.', pairs: [['먹어요', '🍽️'], ['마셔요', '🥤'], ['화장실', '🚻'], ['밥', '🍚'], ['자요', '😴']] } },
    { kind: 'learn', blocks: [{ type: 'tip', text: '**D — Production.** Complète chaque phrase avec un mot de la banque : [[입니다]] · [[에]] · [[주세요]].', mood: 'encourage' }] },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '**D · 1/3**', before: '저는 마리', after: '.', choices: BANK, answer: 0, translation: 'Je suis Marie.' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '**D · 2/3**', before: '학교', after: ' 가요.', choices: BANK, answer: 1, translation: 'Je vais à l’école.' } },
    { kind: 'practice', exercise: { type: 'cloze', prompt: '**D · 3/3**', before: '물 ', after: '.', choices: BANK, answer: 2, translation: 'De l’eau, s’il vous plaît.' } },
  ],
};

export const m1w2: Lesson[] = [day6, day7, day8, day9, day10];
