/*
 * VexABC - ABC notation parser and renderer for VexFlow
 *
 * Copyright (c) 2012-2013 Mikael Nousiainen
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var moduleDefinitions = [];
var testDefinitions = [];

moduleDefinitions.push({
  name: "Header definitions",
  tests: [
    {
      name: "Treble clef",
      settings: { stavesPerLine: 2 },
      input: "\
K:clef=treble\n\
C2 z2 z4 | C D E F GABC'\n"
    },
    {
      name: "Alto clef",
      settings: { stavesPerLine: 2 },
      input: "\
K:clef=alto\n\
C2 z2 z4 | C D E F GABC'\n"
    },
    {
      name: "Tenor clef",
      settings: { stavesPerLine: 2 },
      input: "\
K:clef=tenor\n\
C2 z2 z4 | C D E F GABC'\n"
    },
    {
      name: "Bass clef",
      settings: { stavesPerLine: 2 },
      input: "\
K:clef=bass\n\
F,2 z2 z4 | C, D, E, F, G,A,B,C\n"
    },
    {
      name: "Clef changes",
      settings: { stavesPerLine: 2 },
      input: "\
K:clef=treble\n\
C2 z2 z4 | C D E F GABC' |\n\
K:clef=alto\n\
C2 z2 z4 | C D E F GABC' |\n\
K:clef=tenor\n\
C2 z2 z4 | C D E F GABC' |\n\
K:clef=bass\n\
F,2 z2 z4 | C, D, E, F, G,A,B,C |\n\
[K:clef=treble] C2 z2 z4 | C D E F GABC' |\n\
[K:clef=alto] C2 z2 z4 | C D E F GABC' |\n\
[K:clef=tenor] C2 z2 z4 | C D E F GABC' |\n\
[K:clef=bass] F,2 z2 z4 | C, D, E, F, G,A,B,C\n"
    },
    {
      name: "Treble clef, F#-major key",
      settings: { stavesPerLine: 2 },
      input: "\
K:F# clef=treble\n\
C2 z2 z4 | C D E F GABC'\n"
    },
    {
      name: "Alto clef, Ab-minor key",
      settings: { stavesPerLine: 2 },
      input: "\
K:Abm clef=alto\n\
C2 z2 z4 | C D E F GABC'\n"
    },
    {
      name: "Tenor clef, F#-major key",
      settings: { stavesPerLine: 2 },
      input: "\
K:F# clef=tenor\n\
C2 z2 z4 | C D E F GABC'\n"
    },
    {
      name: "Bass clef, Ab-minor key",
      settings: { stavesPerLine: 2 },
      input: "\
K:Abm clef=bass\n\
C2 z2 z4 | C D E F GABC'\n"
    },
    {
      name: "Clef and key changes",
      settings: { stavesPerLine: 2 },
      input: "\
K:C clef=treble\n\
\"@Major, sharps\"C2 z2 z4 | C D E F GABC' |\n\
[K:G]C2 z2 z4 | C D E F GABC' |\n\
[K:D]C2 z2 z4 | C D E F GABC' |\n\
[K:A]C2 z2 z4 | C D E F GABC' |\n\
[K:E]C2 z2 z4 | C D E F GABC' |\n\
[K:B]C2 z2 z4 | C D E F GABC' |\n\
[K:F#]C2 z2 z4 | C D E F GABC' |\n\
[K:C#]C2 z2 z4 | C D E F GABC' |\n\
[K:C]\"@Major, flats\"C2 z2 z4 | C D E F GABC' |\n\
[K:F]C2 z2 z4 | C D E F GABC' |\n\
[K:Bb]C2 z2 z4 | C D E F GABC' |\n\
[K:Eb]C2 z2 z4 | C D E F GABC' |\n\
[K:Ab]C2 z2 z4 | C D E F GABC' |\n\
[K:Db]C2 z2 z4 | C D E F GABC' |\n\
[K:Gb]C2 z2 z4 | C D E F GABC' |\n\
[K:Cb]C2 z2 z4 | C D E F GABC' |\n\
[K:C]\"@Minor, sharps\"C2 z2 z4 | [K:Am]C D E F GABC' |\n\
C2 z2 z4 | [K:Em]C D E F GABC' |\n\
C2 z2 z4 | [K:Bm]C D E F GABC' |\n\
C2 z2 z4 | [K:F#m]C D E F GABC' |\n\
C2 z2 z4 | [K:C#m]C D E F GABC' |\n\
C2 z2 z4 | [K:G#m]C D E F GABC' |\n\
C2 z2 z4 | [K:D#m]C D E F GABC' |\n\
C2 z2 z4 | [K:A#m]C D E F GABC' |\n\
[K:C]\"@Minor, flats\"C2 z2 z4 | [K:Dm]C D E F GABC' |\n\
C2 z2 z4 | [K:Gm]C D E F GABC' |\n\
C2 z2 z4 | [K:Cm]C D E F GABC' |\n\
C2 z2 z4 | [K:Fm]C D E F GABC' |\n\
C2 z2 z4 | [K:Bbm]C D E F GABC' |\n\
C2 z2 z4 | [K:Ebm]C D E F GABC' |\n\
C2 z2 z4 | [K:Abm]C D E F GABC' |\n"
    },
    {
      name: "Meter: C (4/4)",
      settings: { stavesPerLine: 2 },
      input: "\
K:D clef=treble\n\
M:C\n\
|\n\
M:4/4\n\
|]\n"
    },
    {
      name: "Meter: C| (2/2)",
      settings: { stavesPerLine: 2 },
      input: "\
K:D clef=bass\n\
M:C|\n\
|\n\
M:2/2\n\
|]\n"
    },
    {
      name: "Meter changes",
      settings: { stavesPerLine: 2 },
      input: "\
K:D clef=treble\n\
M:4/4\n\
C8|\n\
M:3/4\n\
C8|\n\
[K:Am][M:7/8] E'EAEBE/C'E/|\n\
D'DGDAD/BD/|\n\
[M:12/16] D6|\n\
[M:5/8] C8|]\n"
    },
  ]
});

moduleDefinitions.push({
  name: "Basic constructs",
  tests: [
    {
      name: "Notes",
      settings: { stavesPerLine: 4 },
      input: "\
X:1\n\
T:Notes\n\
M:C\n\
L:1/4\n\
K:C\n\
C, D, E, F,|G, A, B, C|D E F G|A B c d|e f g a|b c' d' e'|f' g' a' b'|]"
    },
    {
      name: "Note lengths and default note length",
      settings: null,
      input: "\
X:1\n\
T:Note lengths and default note length\n\
M:C\n\
K:C\n\
L:1/16\n\
        A/2 A/ A A2 A3 A4 A6 A7 A8 A12 A15 A16|]\n\
L:1/8\n\
    A/4 A/2 A/ A A2 A3 A4 A6 A7 A8|]\n\
L:1/4\n\
A/8 A/4 A/2 A/ A A2 A3 A4|]\n"
    },
    {
      name: "Rests, invisible rests and multi-measure rests",
      settings: null,
      input: "\
X:1\n\
T:Rests, invisible rests and multi-measure rests\n\
M:C\n\
K:C\n\
L:1/16\n\
        z/2 z/ z z2 z3 z4 z6 z7 z8 z12 z15 z16|]\n\
        x/2 x/ x x2 x3 x4 x6 x7 x8 x12 x15 x16|]\n\
L:1/8\n\
    z/4 z/2 z/ z z2 z3 z4 z6 z7 z8|]\n\
    x/4 x/2 x/ x x2 x3 x4 x6 x7 x8|]\n\
L:1/4\n\
z/8 z/4 z/2 z/ z z2 z3 z4|]\n\
x/8 x/4 x/2 x/ x x2 x3 x4|]\n\
z C z/2 D/2 z/4 D/4|]\n\
x C x/2 D/2 x/4 D/4|]\n\
Z A Z2 A Z3 A Z4|]\n\
X A X2 A X3 A X4|]\n"
    },
    {
      name: "Accidentals",
      settings: null,
      input: "\
X:1\n\
T:Accidentals\n\
M:C\n\
K:C\n\
__A _A =A ^A ^^A|]\n"
    },
    {
      name: "Broken rhythm markers",
      settings: null,
      input: "\
X:1\n\
T:Broken rhythm markers\n\
M:C\n\
K:C\n\
A>A A2>A2 A>>A A2>>>A2|]\n"
    },
    {
      name: "Beams",
      settings: null,
      input: "\
X:1\n\
T:Beams\n\
M:C\n\
K:C\n\
A B c d AB cd|ABcd ABc2|\n\
A/C/c/d/ A/4B/4C/4d/4|^d/8A/8_B,/8D/8\n"
    },
    {
      name: "Tuplets",
      settings: { stavesPerLine: 2 },
      input: "\
X:1\n\
T:Tuplets\n\
M:C\n\
K:C\n\
(2AB (3ABA | (4ABAB (5ABABA | (6ABABAB (7ABABABA |\n\
(2zB (3AzB | (4zBAz (5Az2zA | (3A2B2A2 (3A4B4A4 |\n\
(3z2B2z2 | (3A2z2B2 | (3:2z2B2z2 | (3:4A2z2B2 \n"
    },
    {
      name: "Ties",
      settings: { stavesPerLine: 4 },
      input: "\
X:1\n\
T:Ties\n\
M:C\n\
K:C\n\
C-C A2-A2 | C4- C4 |\n\
[C2E2G2]-[CEG] | [DFA]-[DGB] |\n\
[C2E2G2]- [CEG] | [DFA]- [DGB]\n"
    },
    {
      name: "Slurs",
      settings: { stavesPerLine: 4 },
      input: "\
X:1\n\
T:Slurs\n\
M:C\n\
K:C\n\
(DEFG) |\n\
( D E F G ) |\n\
(c (d e f) g a) |\n\
(c d (e) f g a)\n"
    },
    {
      name: "Ties and slurs",
      settings: null,
      input: "\
X:1\n\
T:Ties and Slurs\n\
M:C\n\
K:C\n\
(AA) (A(A)A) ((AA)A) (A|A) A-A A-A-A A2-|A4|]\n"
    },
    {
      name: "Bar lines and repeats",
      settings: { stavesPerLine: 8 },
      input: "\
X:1\n\
L:1/1\n\
T:Bar lines and repeats\n\
| || :| |: :|: :||: :: |\n\
[| A |] [|] .| |\n"
    },
    {
      name: "Variant endings",
      settings: { stavesPerLine: 4 },
      input: "\
X:1\n\
L:1/1\n\
T:Variant endings\n\
|: A |1 A :|2  A |] \n\
|1 A :|[2 A :| [3 A |] \n\
|1 A ||[2,4 B || [3,5-7,8,9-15 A |] \n\
|1,15 A | A || |] \n\
|2,16 A | A | |] \n"
    },
    {
      name: "Grace notes",
      settings: null,
      input: "\
X:1\n\
T:Grace notes\n\
M:6/8\n\
K:C\n\
{g}A3 A{g}AA|{gAGAG}A3 {g}A{d}A{e}A|]\n"
    },
    {
      name: "Chords",
      settings: null,
      input: "\
X:1\n\
T:Chords\n\
M:2/4\n\
K:C\n\
[CEGc] [C2G2] [CE][DF]|[D2F2][EG][FA] [A4d4]|]\n"
    },
    {
      name: "Chord symbols",
      settings: null,
      input: '\
X:1\n\
T:Chord symbols\n\
M:C\n\
K:C\n\
"A"A "Gm7"D "Bb"F "F#"A|\n'
    },
    {
      name: "Decoration shortcuts",
      settings: null,
      input: '\
X:1\n\
T:Decoration shorcuts\n\
M:C\n\
K:C\n\
"_~"~A "_~"~c "_.".A "_.".c "_H"HA "_H"Hc "_L"LA "_L"Lc |\n\
"_M"MA "_M"Mc "_O"OA "_O"Oc "_P"PA "_P"Pc "_S"SA "_S"Sc |\n\
"_T"TA "_T"Tc "_u"uA "_u"uc "_v"vA "_v"vc |\n\
(3.D.G.E |\n'
    },
    {
      name: "Decorations",
      settings: { stavesPerLine: 8 },
      input: '\
X:1\n\
T:Decorations\n\
M:C\n\
K:C\n\
L:1/1\n\
!trill!A | !trill(!A | !trill)!A | !lowermordent!A |\n\
!uppermordent!A | !mordent!A | !pralltriller!A | !roll!A |\n\
!turn!A | !turnx!A | !invertedturn!A | !invertedturnx!A |\n\
!arpeggio!A | !>!A | !accent!A | !emphasis!A |\n\
!fermata!A | !invertedfermata!A | !tenuto!A | !0!A |\n\
!1!A | !2!A | !3!A | !4!A |\n\
!5!A | !+!A | !plus!A | !snap!A |\n\
!slide!A | !wedge!A | !upbow!A | !downbow!A |\n\
!open!A | !thumb!A | !breath!A | !pppp!A |\n\
!ppp!A | !pp!A | !p!A | !mp!A |\n\
!mf!A | !f!A | !ff!A | !fff!A |\n\
!ffff!A | !sfz!A | !crescendo(!A | !<(!A |\n\
!crescendo)!A | !<)!A | !diminuendo(!A | !>(!A |\n\
!diminuendo)!A | !>)!A | !segno!A | !coda!A |\n\
!D.S.!A | !D.C.!A | !dacoda!A | !dacapo!A |\n\
!fine!A | !shortphrase!A | !mediumphrase!A | !longphrase!A |\n'
    },
    {
      name: "Annotations",
      settings: null,
      input: '\
X:1\n\
T:Chord symbols\n\
M:C\n\
K:C\n\
"^above"A "<left"D ">right"F "_below"A "@free"c||\n'
    },
  ]
});

moduleDefinitions.push({
  name: "Combined constructs",
  tests: [
    {
      name: "Decorations attached to different constructs",
      settings: { stavesPerLine: 2 },
      input: "\
[!1!C!3!E!5!G]  !coda! y  !p! !trill! C   !fermata!|"
    },
    {
      name: "Chords with annotations and decorations",
      settings: { stavesPerLine: 2 },
      input: '\
( "^I" !f! [CEG]- > [CEG] "^IV" [F=AC]3/2"^V"[GBD]/  H[CEG]2 )'
    },
    {
      name: "Order of ABC constructs",
      settings: { stavesPerLine: 2 },
      input: '\
"C"[CEGc] | "Gm7"[.=G,^c\'] |\n\
"Gm7"(v.=G,2~^c\'2)\n'
    },
  ]
});

testDefinitions.push({name: "Durations",
  tests: [
    {
      name: "Standard Durations",
      test: function() {
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 1),{ value: "1", dots: 0 },"Whole");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 2 + VexAbc.Def.DURATION_RESOLUTION / 4 + VexAbc.Def.DURATION_RESOLUTION / 8 + VexAbc.Def.DURATION_RESOLUTION / 16),{ value: "2", dots: 3 },"Triple-Dotted Half");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 2 + VexAbc.Def.DURATION_RESOLUTION / 4 + VexAbc.Def.DURATION_RESOLUTION / 8),{ value: "2", dots: 2 },"Double-Dotted Half");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 2 + VexAbc.Def.DURATION_RESOLUTION / 4),{ value: "2", dots: 1 },"Dotted Half");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 2),{ value: "2", dots: 0 },"Half");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 4 + VexAbc.Def.DURATION_RESOLUTION / 8 + VexAbc.Def.DURATION_RESOLUTION / 16 + VexAbc.Def.DURATION_RESOLUTION / 32),{ value: "4", dots: 3 },"Triple-Dotted Quarter");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 4 + VexAbc.Def.DURATION_RESOLUTION / 8 + VexAbc.Def.DURATION_RESOLUTION / 16),{ value: "4", dots: 2 },"Double-Dotted Quarter");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 4 + VexAbc.Def.DURATION_RESOLUTION / 8),{ value: "4", dots: 1 },"Dotted Quarter");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 4),{ value: "4", dots: 0 },"Quarter");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 8 + VexAbc.Def.DURATION_RESOLUTION / 16 + VexAbc.Def.DURATION_RESOLUTION / 32 + VexAbc.Def.DURATION_RESOLUTION / 64),{ value: "8", dots: 3 },"Triple-Dotted Eighth");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 8 + VexAbc.Def.DURATION_RESOLUTION / 16 + VexAbc.Def.DURATION_RESOLUTION / 32),{ value: "8", dots: 2 },"Double-Dotted Eighth");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 8 + VexAbc.Def.DURATION_RESOLUTION / 16 ),{ value: "8", dots: 1 },"Dotted Eighth");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 8),{ value: "8", dots: 0 },"Eighth");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 16 + VexAbc.Def.DURATION_RESOLUTION / 32 + VexAbc.Def.DURATION_RESOLUTION / 64 + VexAbc.Def.DURATION_RESOLUTION / 128),{ value: "16", dots: 3 },"Triple-Dotted Sixteenth");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 16 + VexAbc.Def.DURATION_RESOLUTION / 32 + VexAbc.Def.DURATION_RESOLUTION / 64),{ value: "16", dots: 2 },"Double-Dotted Sixteenth");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 16 + VexAbc.Def.DURATION_RESOLUTION / 32),{ value: "16", dots: 1 },"Dotted Sixteenth");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 16),{ value: "16", dots: 0 },"Sixteenth");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 32 + VexAbc.Def.DURATION_RESOLUTION / 64 + VexAbc.Def.DURATION_RESOLUTION / 128 + VexAbc.Def.DURATION_RESOLUTION / 256),{ value: "32", dots: 3 },"Triple-Dotted Thirtysecond");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 32 + VexAbc.Def.DURATION_RESOLUTION / 64 + VexAbc.Def.DURATION_RESOLUTION / 128),{ value: "32", dots: 2 },"Double-Dotted Thirtysecond");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 32 + VexAbc.Def.DURATION_RESOLUTION / 64),{ value: "32", dots: 1 },"Dotted Thirtysecond");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 32),{ value: "32", dots: 0 },"Thirtysecond");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 64 + VexAbc.Def.DURATION_RESOLUTION / 128 + VexAbc.Def.DURATION_RESOLUTION / 256 + VexAbc.Def.DURATION_RESOLUTION / 512),{ value: "64", dots: 3 },"Triple-Dotted Sixtyfourth");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 64 + VexAbc.Def.DURATION_RESOLUTION / 128 + VexAbc.Def.DURATION_RESOLUTION / 256),{ value: "64", dots: 2 },"Double-Dotted Sixtyfourth");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 64 + VexAbc.Def.DURATION_RESOLUTION / 128),{ value: "64", dots: 1 },"Dotted Sixtyfourth");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 64),{ value: "64", dots: 0 },"Sixtyfourth");
      }
    },
    {
      name: "Irregular durations",
      test: function() {
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION / 2 + VexAbc.Def.DURATION_RESOLUTION / 4 + VexAbc.Def.DURATION_RESOLUTION / 8 + VexAbc.Def.DURATION_RESOLUTION / 16 +
          VexAbc.Def.DURATION_RESOLUTION / 32 + VexAbc.Def.DURATION_RESOLUTION / 64 + VexAbc.Def.DURATION_RESOLUTION / 128 + VexAbc.Def.DURATION_RESOLUTION / 256 +
          VexAbc.Def.DURATION_RESOLUTION / 512 + VexAbc.Def.DURATION_RESOLUTION / 1024 + VexAbc.Def.DURATION_RESOLUTION / 2048 + VexAbc.Def.DURATION_RESOLUTION / 4096
          ),{ value: "2", dots: 11 },"Eleven dots");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION  - 1),{ value: "2", dots: 17},"Seventeen dots");
      }
    },
    {
      name: "Invalid durations",
      test: function() {
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(VexAbc.Def.DURATION_RESOLUTION * -1),{ value: "NaN", dots: 0 },"Negative duration");
        deepEqual(VexAbc.Util.fractionDurationToVexFlowDuration(0),{ value: "Infinity", dots: 0 },"Zero duration");
      }
    }
  ]
});
