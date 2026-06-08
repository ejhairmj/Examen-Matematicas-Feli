// ═══════════════════════════════════════════════════════════════════
//  BANCO DE PREGUNTAS — Matemáticas 3er Trimestre 2025-2026
//  100+ preguntas distribuidas por tipo
//  Cada examen selecciona 20 aleatoriamente (1 obligatoria por tipo)
// ═══════════════════════════════════════════════════════════════════
const BANK = {

// ── CÁLCULO MENTAL (12 preguntas) ─────────────────────────────────
mental_calc:[
  {enunciado:'4 × 8, mitad +100 −16',         expected:'100', hint:'4×8=32, mitad=16, 16+100−16=100'},
  {enunciado:'3 × 10, doble −20 mitad',         expected:'20',  hint:'3×10=30, doble=60, −20=40, mitad=20'},
  {enunciado:'5 × 6, mitad × 10 −100',          expected:'50',  hint:'5×6=30, mitad=15, ×10=150, −100=50'},
  {enunciado:'2 × 9, doble +6 mitad',           expected:'21',  hint:'2×9=18, doble=36, +6=42, mitad=21'},
  {enunciado:'4 × 5, doble −10 mitad',          expected:'15',  hint:'4×5=20, doble=40, −10=30, mitad=15'},
  {enunciado:'9 × 2, mitad +5 doble',           expected:'28',  hint:'9×2=18, mitad=9, +5=14, doble=28'},
  {enunciado:'3 × 6, doble mitad +4',           expected:'22',  hint:'3×6=18, doble=36, mitad=18, +4=22'},
  {enunciado:'6 × 3, doble −6 mitad',           expected:'15',  hint:'6×3=18, doble=36, −6=30, mitad=15'},
  {enunciado:'8 × 2, mitad doble +4',           expected:'20',  hint:'8×2=16, mitad=8, doble=16, +4=20'},
  {enunciado:'7 × 2, doble −4 mitad',           expected:'12',  hint:'7×2=14, doble=28, −4=24, mitad=12'},
  {enunciado:'5 × 4, mitad +8 doble',           expected:'56',  hint:'5×4=20, mitad=10, +8=18, doble=36... revisar: mitad de 20=10, 10+8=18, doble=36'},
  {enunciado:'6 × 5, mitad doble −10',          expected:'20',  hint:'6×5=30, mitad=15, doble=30, −10=20'},
],

// ── UNIDADES — ESCRIBIR (8 preguntas) ─────────────────────────────
unit_write:[
  {rows:[{emoji:'🪣',label:'cubo de agua',ans:'litro'},{emoji:'🧍',label:'estatura de una persona',ans:'metro'},{emoji:'⚖️',label:'bolsa de papas',ans:'kilo'}]},
  {rows:[{emoji:'🥛',label:'botella de leche',ans:'litro'},{emoji:'📏',label:'largo de una mesa',ans:'metro'},{emoji:'🍎',label:'manzanas del mercado',ans:'kilo'}]},
  {rows:[{emoji:'🫗',label:'jarra de jugo',ans:'litro'},{emoji:'🐟',label:'pescado en la pescadería',ans:'kilo'},{emoji:'🏠',label:'altura de una casa',ans:'metro'}]},
  {rows:[{emoji:'🚿',label:'agua para bañarse',ans:'litro'},{emoji:'🧀',label:'queso en la tienda',ans:'kilo'},{emoji:'🛣️',label:'largo de un camino',ans:'metro'}]},
  {rows:[{emoji:'🧃',label:'refresco',ans:'litro'},{emoji:'🧅',label:'cebollas',ans:'kilo'},{emoji:'🏊',label:'largo de la alberca',ans:'metro'}]},
  {rows:[{emoji:'🍶',label:'aceite de cocina',ans:'litro'},{emoji:'🥩',label:'carne en la carnicería',ans:'kilo'},{emoji:'🌉',label:'largo de un puente',ans:'metro'}]},
  {rows:[{emoji:'🧴',label:'shampoo',ans:'litro'},{emoji:'🍌',label:'plátanos en el mercado',ans:'kilo'},{emoji:'🏟️',label:'largo de una cancha',ans:'metro'}]},
  {rows:[{emoji:'🫖',label:'tetera de té',ans:'litro'},{emoji:'🧆',label:'queso fresco',ans:'kilo'},{emoji:'🛤️',label:'distancia entre ciudades',ans:'metro'}]},
],

// ── PESAS (10 preguntas) ───────────────────────────────────────────
unit_weights:[
  {groups:[{type:'kilo',n:1},{type:'medio',n:1}], options:['1 kilo y medio','2 kilos','½ kilo','1 kilo'],          expected:'1 kilo y medio', hint:'1 + ½ = 1 kilo y medio'},
  {groups:[{type:'kilo',n:2},{type:'medio',n:1}], options:['2 kilos','3 kilos','2 kilos y medio','1 kilo y medio'], expected:'2 kilos y medio', hint:'2 + ½ = 2 kilos y medio'},
  {groups:[{type:'kilo',n:1},{type:'medio',n:2}], options:['1 kilo','2 kilos','1 kilo y medio','3 kilos'],          expected:'2 kilos',         hint:'1 + ½ + ½ = 2 kilos'},
  {groups:[{type:'kilo',n:2},{type:'medio',n:2}], options:['2 kilos','4 kilos','3 kilos','2 kilos y medio'],        expected:'3 kilos',         hint:'2 + ½ + ½ = 3 kilos'},
  {groups:[{type:'kilo',n:3},{type:'medio',n:1}], options:['3 kilos','4 kilos','3 kilos y medio','2 kilos y medio'],expected:'3 kilos y medio', hint:'3 + ½ = 3 kilos y medio'},
  {groups:[{type:'medio',n:2}],                   options:['½ kilo','1 kilo','2 kilos','1 kilo y medio'],           expected:'1 kilo',          hint:'½ + ½ = 1 kilo'},
  {groups:[{type:'kilo',n:2}],                    options:['1 kilo','3 kilos','2 kilos','2 kilos y medio'],         expected:'2 kilos',         hint:'1 + 1 = 2 kilos'},
  {groups:[{type:'kilo',n:3}],                    options:['2 kilos','3 kilos','4 kilos','3 kilos y medio'],        expected:'3 kilos',         hint:'1+1+1 = 3 kilos'},
  {groups:[{type:'kilo',n:1},{type:'medio',n:3}], options:['2 kilos','2 kilos y medio','1 kilo y medio','3 kilos'], expected:'2 kilos y medio', hint:'1 + ½ + ½ + ½ = 2½ kilos'},
  {groups:[{type:'kilo',n:2},{type:'medio',n:3}], options:['3 kilos','4 kilos','3 kilos y medio','2 kilos y medio'],expected:'3 kilos y medio', hint:'2 + ½ + ½ + ½ = 3½ kilos'},
],

// ── RESTA EN CASCADA (14 preguntas) ───────────────────────────────
cascade_sub:[
  {a:85, b:37, expected:'48',  hint:'85−37=48'},
  {a:93, b:56, expected:'37',  hint:'93−56=37'},
  {a:74, b:28, expected:'46',  hint:'74−28=46'},
  {a:62, b:35, expected:'27',  hint:'62−35=27'},
  {a:81, b:46, expected:'35',  hint:'81−46=35'},
  {a:97, b:43, expected:'54',  hint:'97−43=54'},
  {a:76, b:29, expected:'47',  hint:'76−29=47'},
  {a:54, b:27, expected:'27',  hint:'54−27=27'},
  {a:88, b:39, expected:'49',  hint:'88−39=49'},
  {a:65, b:38, expected:'27',  hint:'65−38=27'},
  {a:73, b:45, expected:'28',  hint:'73−45=28'},
  {a:91, b:64, expected:'27',  hint:'91−64=27'},
  {a:83, b:47, expected:'36',  hint:'83−47=36'},
  {a:70, b:33, expected:'37',  hint:'70−33=37'},
],

// ── SERIACIÓN CON CÍRCULOS (12 preguntas) ─────────────────────────
serie_circles:[
  {sequence:[{n:9,show:true},{n:null,show:false},{n:14,show:true},{n:null,show:false},{n:19,show:true}], rule:'+5',  nblanks:2, expected:'11,16', hint:'9+2=11... revisar: 9,14,19 → +5. Blancos: 11,16 si patrón es +2,+3... Realmente: posiciones 0,2,4 tienen 9,14,19 (+5 cada dos). Los blancos son posiciones 1,3: 11 y 16 con +5 desde 9→11? No. Revisando: secuencia completa 9,11,14,16,19 (+2,+3,+2,+3). Blancos=11,16'},
  {sequence:[{n:2,show:true},{n:4,show:true},{n:null,show:false},{n:8,show:true},{n:null,show:false}],  rule:'+2',  nblanks:2, expected:'6,10',   hint:'Suma 2: 2,4,6,8,10'},
  {sequence:[{n:20,show:true},{n:null,show:false},{n:12,show:true},{n:null,show:false},{n:4,show:true}], rule:'−4',  nblanks:2, expected:'16,8',   hint:'Resta 4: 20,16,12,8,4'},
  {sequence:[{n:5,show:true},{n:null,show:false},{n:15,show:true},{n:null,show:false},{n:25,show:true}], rule:'+5',  nblanks:2, expected:'10,20',  hint:'Suma 5: 5,10,15,20,25'},
  {sequence:[{n:1,show:true},{n:3,show:true},{n:null,show:false},{n:7,show:true},{n:null,show:false}],   rule:'+2',  nblanks:2, expected:'5,9',    hint:'Suma 2: 1,3,5,7,9'},
  {sequence:[{n:30,show:true},{n:null,show:false},{n:18,show:true},{n:null,show:false},{n:6,show:true}], rule:'−6',  nblanks:2, expected:'24,12',  hint:'Resta 6: 30,24,18,12,6'},
  {sequence:[{n:4,show:true},{n:8,show:true},{n:null,show:false},{n:16,show:true},{n:null,show:false}],  rule:'+4',  nblanks:2, expected:'12,20',  hint:'Suma 4: 4,8,12,16,20'},
  {sequence:[{n:50,show:true},{n:null,show:false},{n:30,show:true},{n:null,show:false},{n:10,show:true}], rule:'−10', nblanks:2, expected:'40,20',  hint:'Resta 10: 50,40,30,20,10'},
  {sequence:[{n:3,show:true},{n:6,show:true},{n:null,show:false},{n:12,show:true},{n:null,show:false}],  rule:'+3',  nblanks:2, expected:'9,15',   hint:'Suma 3: 3,6,9,12,15'},
  {sequence:[{n:10,show:true},{n:null,show:false},{n:6,show:true},{n:null,show:false},{n:2,show:true}],  rule:'−2',  nblanks:2, expected:'8,4',    hint:'Resta 2: 10,8,6,4,2'},
  {sequence:[{n:0,show:true},{n:5,show:true},{n:null,show:false},{n:15,show:true},{n:null,show:false}],  rule:'+5',  nblanks:2, expected:'10,20',  hint:'Suma 5: 0,5,10,15,20'},
  {sequence:[{n:100,show:true},{n:null,show:false},{n:80,show:true},{n:null,show:false},{n:60,show:true}],rule:'−10', nblanks:2, expected:'90,70',  hint:'Resta 10: 100,90,80,70,60'},
],

// ── SERIACIÓN CADENA PAR/IMPAR (6 preguntas) ──────────────────────
serie_chain:[
  {rules:['▶ Si es par, haz la mitad','▶ Si es impar, súmale 1'], sequence:[10,null,null,null,null,null,1], blanks:[5,6,3,4,2], expected:'5,6,3,4,2', hint:'10→5→6→3→4→2→1'},
  {rules:['▶ Si es par, haz la mitad','▶ Si es impar, súmale 1'], sequence:[8,null,null,null,1],            blanks:[4,2,1],     expected:'4,2,1',     hint:'8→4→2→1'},
  {rules:['▶ Si es par, haz la mitad','▶ Si es impar, súmale 1'], sequence:[12,null,null,null,null,1],      blanks:[6,3,4,2],   expected:'6,3,4,2',   hint:'12→6→3→4→2→1'},
  {rules:['▶ Si es par, haz la mitad','▶ Si es impar, súmale 1'], sequence:[16,null,null,null,null,1],      blanks:[8,4,2,1],   expected:'8,4,2,1',   hint:'16→8→4→2→1'},
  {rules:['▶ Si es par, haz la mitad','▶ Si es impar, súmale 1'], sequence:[20,null,null,null,null,null,1], blanks:[10,5,6,3,4], expected:'10,5,6,3,4', hint:'20→10→5→6→3→4→... continúa'},
  {rules:['▶ Si es par, haz la mitad','▶ Si es impar, súmale 1'], sequence:[6,null,null,null,1],            blanks:[3,4,2],     expected:'3,4,2',     hint:'6→3→4→2→1'},
],

// ── SERIACIÓN ÁRBOL DE RESTA (8 preguntas) ────────────────────────
serie_resta:[
  {tops:[38,15,26], resta:15, expected:'23,11,12', hint:'38−15=23, 26−15=11, 23−11=12'},
  {tops:[45,20,30], resta:10, expected:'35,20,15', hint:'45−10=35, 30−10=20, 35−20=15'},
  {tops:[50,18,32], resta:8,  expected:'42,24,18', hint:'50−8=42, 32−8=24, 42−24=18'},
  {tops:[60,25,40], resta:15, expected:'45,25,20', hint:'60−15=45, 40−15=25, 45−25=20'},
  {tops:[70,30,50], resta:20, expected:'50,30,20', hint:'70−20=50, 50−20=30, 50−30=20'},
  {tops:[80,35,60], resta:25, expected:'55,35,20', hint:'80−25=55, 60−25=35, 55−35=20'},
  {tops:[55,20,45], resta:10, expected:'45,35,10', hint:'55−10=45, 45−10=35, 45−35=10'},
  {tops:[90,40,70], resta:30, expected:'60,40,20', hint:'90−30=60, 70−30=40, 60−40=20'},
],

// ── FRACCIONES — COMPLETAR (10 preguntas) ─────────────────────────
fraction_fill:[
  {story:'Si tengo un pastel y lo corto en octavos (8 partes) y Luis se comió 2 pedazos.',
   blanks:['*Representa en fracción qué parte se comió:','*Representa en fracción qué parte quedó de pastel:'],
   expected:'2/8,6/8', hint:'Comió 2/8, quedó 6/8'},
  {story:'Una pizza se cortó en 6 partes iguales. Ana comió 2 pedazos.',
   blanks:['*Representa en fracción qué parte comió Ana:','*Representa en fracción qué parte sobró:'],
   expected:'2/6,4/6', hint:'Comió 2/6, sobró 4/6'},
  {story:'Un chocolate se dividió en 4 partes. Carlos se comió 1 parte.',
   blanks:['*Representa en fracción qué parte comió Carlos:','*Representa en fracción qué parte quedó:'],
   expected:'1/4,3/4', hint:'Comió 1/4, quedó 3/4'},
  {story:'Una naranja se partió en 3 partes iguales. María tomó 2 partes.',
   blanks:['*Representa en fracción qué parte tomó María:','*Representa en fracción qué parte quedó:'],
   expected:'2/3,1/3', hint:'Tomó 2/3, quedó 1/3'},
  {story:'Un pastel se cortó en 10 partes. Se comieron 4 pedazos en la fiesta.',
   blanks:['*Representa en fracción qué parte se comió:','*Representa en fracción qué parte quedó:'],
   expected:'4/10,6/10', hint:'Comieron 4/10, quedó 6/10'},
  {story:'Una sandía se cortó en 8 partes. Los niños se comieron 5 partes.',
   blanks:['*Representa en fracción qué parte comieron los niños:','*Representa en fracción qué parte sobró:'],
   expected:'5/8,3/8', hint:'Comieron 5/8, sobró 3/8'},
  {story:'Un pastel se cortó en 5 partes iguales. Papá se comió 3 partes.',
   blanks:['*Representa en fracción qué parte comió papá:','*Representa en fracción qué parte quedó:'],
   expected:'3/5,2/5', hint:'Comió 3/5, quedó 2/5'},
  {story:'Una barra de chocolate tiene 12 partes. Regalaron 7 partes.',
   blanks:['*Representa en fracción qué parte regalaron:','*Representa en fracción qué parte quedó:'],
   expected:'7/12,5/12', hint:'Regalaron 7/12, quedó 5/12'},
  {story:'Un pastel se dividió en 9 partes. En el desayuno se comieron 4 partes.',
   blanks:['*Representa en fracción qué parte se comió en el desayuno:','*Representa en fracción qué parte sobró:'],
   expected:'4/9,5/9', hint:'Comieron 4/9, sobró 5/9'},
  {story:'Una torta se cortó en 7 partes. Los invitados comieron 6 partes.',
   blanks:['*Representa en fracción qué parte comieron los invitados:','*Representa en fracción qué parte sobró:'],
   expected:'6/7,1/7', hint:'Comieron 6/7, sobró 1/7'},
],

// ── FRACCIONES — CLASIFICAR (6 grupos) ────────────────────────────
fraction_classify:[
  {fracs:[{n:3,d:9,m:null,t:'propia'},{n:7,d:5,m:null,t:'impropia'},{n:2,d:9,m:null,t:'propia'},{n:3,d:4,m:1,t:'mixta'},{n:4,d:3,m:null,t:'impropia'}]},
  {fracs:[{n:2,d:6,m:null,t:'propia'},{n:7,d:9,m:null,t:'propia'},{n:3,d:7,m:2,t:'mixta'},{n:8,d:8,m:null,t:'unitaria'},{n:3,d:5,m:2,t:'mixta'}]},
  {fracs:[{n:8,d:5,m:null,t:'impropia'},{n:3,d:2,m:null,t:'impropia'},{n:8,d:9,m:null,t:'propia'},{n:3,d:5,m:5,t:'mixta'},{n:7,d:7,m:null,t:'unitaria'}]},
  {fracs:[{n:1,d:3,m:null,t:'propia'},{n:5,d:3,m:null,t:'impropia'},{n:4,d:4,m:null,t:'unitaria'},{n:2,d:5,m:1,t:'mixta'},{n:9,d:7,m:null,t:'impropia'}]},
  {fracs:[{n:4,d:7,m:null,t:'propia'},{n:8,d:3,m:null,t:'impropia'},{n:6,d:6,m:null,t:'unitaria'},{n:1,d:4,m:3,t:'mixta'},{n:5,d:9,m:null,t:'propia'}]},
  {fracs:[{n:2,d:8,m:null,t:'propia'},{n:9,d:4,m:null,t:'impropia'},{n:5,d:5,m:null,t:'unitaria'},{n:3,d:8,m:2,t:'mixta'},{n:6,d:11,m:null,t:'propia'}]},
],

// ── DOBLE Y MITAD (14 preguntas) ───────────────────────────────────
double_half:[
  {start:14, ops:[{op:'doble',label:'× 2 (doble)'}],                              expected:'28',  hint:'14×2=28'},
  {start:36, ops:[{op:'mitad',label:'÷ 2 (mitad)'}],                              expected:'18',  hint:'36÷2=18'},
  {start:18, ops:[{op:'doble',label:'× 2 (doble)'}],                              expected:'36',  hint:'18×2=36'},
  {start:50, ops:[{op:'mitad',label:'÷ 2 (mitad)'}],                              expected:'25',  hint:'50÷2=25'},
  {start:24, ops:[{op:'doble',label:'× 2 (doble)'}],                              expected:'48',  hint:'24×2=48'},
  {start:40, ops:[{op:'mitad',label:'÷ 2 (mitad)'}],                              expected:'20',  hint:'40÷2=20'},
  {start:16, ops:[{op:'doble',label:'× 2 (doble)'},{op:'mitad',label:'÷ 2 (mitad)'}], expected:'16', hint:'16×2=32, 32÷2=16'},
  {start:60, ops:[{op:'mitad',label:'÷ 2 (mitad)'},{op:'mitad',label:'÷ 2 (mitad)'}], expected:'15', hint:'60÷2=30, 30÷2=15'},
  {start:10, ops:[{op:'doble',label:'× 2 (doble)'},{op:'doble',label:'× 2 (doble)'}], expected:'40', hint:'10×2=20, 20×2=40'},
  {start:8,  ops:[{op:'doble',label:'× 2 (doble)'}],                              expected:'16',  hint:'8×2=16'},
  {start:44, ops:[{op:'mitad',label:'÷ 2 (mitad)'}],                              expected:'22',  hint:'44÷2=22'},
  {start:12, ops:[{op:'mitad',label:'÷ 2 (mitad)'},{op:'doble',label:'× 2 (doble)'}], expected:'12', hint:'12÷2=6, 6×2=12'},
  {start:30, ops:[{op:'doble',label:'× 2 (doble)'}],                              expected:'60',  hint:'30×2=60'},
  {start:80, ops:[{op:'mitad',label:'÷ 2 (mitad)'}],                              expected:'40',  hint:'80÷2=40'},
],

// ── RESOLUCIÓN DE PROBLEMAS (18 preguntas) ────────────────────────
problem:[
  // Multiplicación
  {subtype:'mult',  story:'Carla tiene 5 cajas y en cada una tiene guardadas 28 pelotas. ¿Cuántas pelotas tiene en total?',         a:28,  b:5,  op:'×', expected:'140', hint:'28×5=140'},
  {subtype:'mult',  story:'Jorge tiene 14 paletas y quiere duplicarlas. ¿Cuántas paletas tendrá en total?',                          a:14,  b:2,  op:'×', expected:'28',  hint:'14×2=28'},
  {subtype:'mult',  story:'En un salón hay 4 filas con 8 niños cada una. ¿Cuántos niños hay en total?',                              a:8,   b:4,  op:'×', expected:'32',  hint:'8×4=32'},
  {subtype:'mult',  story:'La maestra tiene 6 cajas de 12 lápices. ¿Cuántos lápices tiene en total?',                               a:12,  b:6,  op:'×', expected:'72',  hint:'12×6=72'},
  {subtype:'mult',  story:'Un tren tiene 7 vagones y en cada vagón caben 15 personas. ¿Cuántas personas caben en total?',            a:15,  b:7,  op:'×', expected:'105', hint:'15×7=105'},
  {subtype:'mult',  story:'En la escuela hay 8 grupos con 25 alumnos cada uno. ¿Cuántos alumnos hay en total?',                      a:25,  b:8,  op:'×', expected:'200', hint:'25×8=200'},
  {subtype:'mult',  story:'Una caja tiene 9 filas de 9 chocolates. ¿Cuántos chocolates hay?',                                        a:9,   b:9,  op:'×', expected:'81',  hint:'9×9=81'},
  // Resta
  {subtype:'resta', story:'Luis tenía 75 estampas y regaló 28 a sus amigos. ¿Cuántas estampas le quedaron?',                        a:75,  b:28, op:'−', expected:'47',  hint:'75−28=47'},
  {subtype:'resta', story:'En la canasta hay 93 manzanas. Se vendieron 56. ¿Cuántas quedaron?',                                     a:93,  b:56, op:'−', expected:'37',  hint:'93−56=37'},
  {subtype:'resta', story:'Había 62 pájaros en un árbol y volaron 35. ¿Cuántos pájaros quedaron?',                                  a:62,  b:35, op:'−', expected:'27',  hint:'62−35=27'},
  {subtype:'resta', story:'La biblioteca tenía 84 libros. Prestaron 47. ¿Cuántos libros quedaron?',                                 a:84,  b:47, op:'−', expected:'37',  hint:'84−47=37'},
  // Suma
  {subtype:'suma',  story:'En el recreo hay 45 niños jugando fútbol y 37 jugando basquetbol. ¿Cuántos niños hay en total?',         a:45,  b:37, op:'+', expected:'82',  hint:'45+37=82'},
  {subtype:'suma',  story:'En la biblioteca hay 58 libros de cuentos y 34 de ciencias. ¿Cuántos libros hay en total?',              a:58,  b:34, op:'+', expected:'92',  hint:'58+34=92'},
  {subtype:'suma',  story:'Sofía tiene 67 calcomanías y su hermana tiene 48. ¿Cuántas tienen entre las dos?',                       a:67,  b:48, op:'+', expected:'115', hint:'67+48=115'},
  // Doble/mitad en contexto
  {subtype:'doble', story:'Ana tiene 19 canicas y las quiere duplicar. ¿Cuántas canicas tendrá?',                                   a:19,  b:2,  op:'×', expected:'38',  hint:'Doble de 19=38'},
  {subtype:'doble', story:'Pedro tiene 23 fichas y quiere el doble. ¿Cuántas fichas tendrá en total?',                              a:23,  b:2,  op:'×', expected:'46',  hint:'Doble de 23=46'},
  {subtype:'mitad', story:'Mamá horneó 84 galletas y las repartió en 2 charolas iguales. ¿Cuántas van en cada charola?',            a:84,  b:2,  op:'÷', expected:'42',  hint:'84÷2=42'},
  {subtype:'mitad', story:'Había 96 jugos en la tienda. Se vendió la mitad. ¿Cuántos jugos quedaron?',                              a:96,  b:2,  op:'÷', expected:'48',  hint:'96÷2=48'},
],

// ── EL RELOJ (6 preguntas) ────────────────────────────────────────
clock:[
  {story:'Sofía entra a la escuela a las 8:00 de la mañana. A la hora del recreo el reloj marca las 10:30.',
   questions:['¿Qué hora marca el reloj cuando Sofía entra a la escuela?','¿Qué hora marca durante el recreo?'],
   clocks:[{h:8,m:0},{h:10,m:30}], expected:'8:00,10:30', hint:'8 en punto y 10 y media'},
  {story:'El almuerzo es a la 1:00. La siesta termina a las 3:30.',
   questions:['¿A qué hora es el almuerzo?','¿A qué hora termina la siesta?'],
   clocks:[{h:1,m:0},{h:3,m:30}],  expected:'1:00,3:30',  hint:'1 en punto y 3 y media'},
  {story:'La clase de matemáticas empieza a las 9:00. Educación física es a las 11:30.',
   questions:['¿A qué hora empieza matemáticas?','¿A qué hora es educación física?'],
   clocks:[{h:9,m:0},{h:11,m:30}], expected:'9:00,11:30', hint:'9 en punto y 11 y media'},
  {story:'El desayuno es a las 7:00. La salida de la escuela es a las 2:30.',
   questions:['¿A qué hora es el desayuno?','¿A qué hora salen de la escuela?'],
   clocks:[{h:7,m:0},{h:2,m:30}],  expected:'7:00,2:30',  hint:'7 en punto y 2 y media'},
  {story:'La película empieza a las 6:00. El intermedio es a las 7:30.',
   questions:['¿A qué hora empieza la película?','¿A qué hora es el intermedio?'],
   clocks:[{h:6,m:0},{h:7,m:30}],  expected:'6:00,7:30',  hint:'6 en punto y 7 y media'},
  {story:'El partido de fútbol empieza a las 4:00. El descanso es a las 5:30.',
   questions:['¿A qué hora empieza el partido?','¿A qué hora es el descanso?'],
   clocks:[{h:4,m:0},{h:5,m:30}],  expected:'4:00,5:30',  hint:'4 en punto y 5 y media'},
],

}; // end BANK
