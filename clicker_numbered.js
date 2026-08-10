1 //!FUNCION PARA CARGAR PARTIDA.
2 let cargar_partida = function (nombre){
3     player_lista=localStorage.getItem(nombre);
4     player_objeto = JSON.parse(player_lista);
5     player=player_objeto;
6 }
7
8
9
10 let player = {
11     nombre: "",
12     progresion: {
13         etapa: 1,
14         contadormuertos:0,
15         contadormuertosboss:0
16         },
17
18     economia:{
19         oro:1,
20         gemas:0
21         },
22
23     caracteristicas:{
24         daño: 1
25         //AQUI AÑADIREMOS OTRAS CARACTERISTICAS COMO PROB CRITICO O DAÑO CRITICO.
26     }
27
28 }
29 player.nombre = prompt("¿Cual es tu nombre aventurero?");
30
31 if (localStorage.getItem(player.nombre)){cargar_partida(player.nombre)};
32
33
34 // LO QUE SE ME HA OCURRIDO PARA AUDIO SEMIAUTOMATICO.
35 const cualquierlugar = document.getElementsByTagName("body")
36 const audiohome = document.getElementById('audiohome');
37 cualquierlugar[0].addEventListener('click', function() {
38         audiohome.play();
39 });
40 //! VARIABLES DE LA PANTALLA DE MEJORAS
41 let comprardaño=document.getElementById("comprar_mejora_daño");
42
43 //*Aqui van a ir el texto que informa de daño y oro.
44 let textdaño = document.getElementById("texto-daño-actual");
45 let textdaño_oro = document.getElementById("texto-daño-actual_oro");
46
47
48 //! TODA LA PARTE DE CAMBIAR DE PANTALLA
49 const home=document.getElementsByClassName("returnhome")
50 const viajemejoras=document.getElementById("viaje-hab")
51 const viajeboss=document.getElementById("viaje-boss")
52 const viajeheroes=document.getElementById("viaje-heroes")
53 const viajecompras=document.getElementById("viaje-compras")
54 const viajeconfiguracion=document.getElementById("viaje-configuracion")
55 const viajeclasificacion=document.getElementById("viaje-clasificacion")
56
57 //RECOGER LOS ZTIPE DE LOS DIVS
58 const fondos = {
59     home: document.getElementById("fondo-home"),
60     mejoras: document.getElementById("fondo-mejoras"),
61     boss: document.getElementById("fondo-boss"),
62     heroes: document.getElementById("fondo-heroes"),
63     compras: document.getElementById("fondo-compras"),
64     configuracion:document.getElementById("fondo-configuracion"),
65     clasificacion:document.getElementById("fondo-clasificacion")
66
67 };
68
69 const zIndices = {
70     zIndexHome: window.getComputedStyle(fondos.home).zIndex,
71     zIndexMejoras: window.getComputedStyle(fondos.mejoras).zIndex,
72     zIndexBoss: window.getComputedStyle(fondos.boss).zIndex,
73     zIndexHeroes: window.getComputedStyle(fondos.heroes).zIndex,
74     zIndexCompras: window.getComputedStyle(fondos.compras).zIndex,
75     zIndexConfiguracion: window.getComputedStyle(fondos.configuracion).zIndex,
76     zIndexClasificacion: window.getComputedStyle(fondos.clasificacion).zIndex
77
78 };
79
80 // AQUI ES DONDE VAMOS A DAR LOS VALORES A TODOS LOS ZINDEX
81 function actualizarzIndex (zIndexHome, zIndexMejoras, zIndexBoss, zIndexHeroes, zIndexCompras, zIndexConfiguracion, zIndexClasificacion){
82     fondos.home.style.zIndex = zIndexHome;          //0
83     fondos.mejoras.style.zIndex = zIndexMejoras;    //1
84     fondos.boss.style.zIndex = zIndexBoss;          //2
85     fondos.heroes.style.zIndex = zIndexHeroes       //3
86     fondos.compras.style.zIndex=zIndexCompras       //4
87     fondos.clasificacion.style.zIndex=zIndexClasificacion       //5
88     fondos.configuracion.style.zIndex=zIndexConfiguracion       //6
89 }
90
91 //HOME
92 for(let listahome=0;listahome<home.length;listahome++){
93     home[listahome].addEventListener("click",function(){
94         actualizarzIndex(1,0,0,0,0,0,0)
95     }
96 )}
97
98 // VIAJES DESDE EL HOME.
99     //VIAJE A LAS MEJORAS.
100 viajemejoras.addEventListener("click",function(){
101     actualizarzIndex(0,1,0,0,0,0,0)
102     })
103
104     // VIAJE A LOS BOSSEs.
105 viajeboss.addEventListener("click",function(){
106     actualizarzIndex(0,0,1,0,0,0,0)
107 })
108
109     //VIAJE A LOS HEROES
110 viajeheroes.addEventListener("click",function(){
111     actualizarzIndex(0,0,0,1,0,0,0)
112     })
113
114 //VIAJE A LOS COMPRAS
115 viajecompras.addEventListener("click",function(){
116     actualizarzIndex(0,0,0,0,1,0,0)
117     })
118
119 //VIAJE A LA CONFIGURACION.
120 viajeconfiguracion.addEventListener("click",function(){
121     actualizarzIndex(0,0,0,0,0,1,0)
122     })
123
124 //VIAJE A LA CLASIFICACION.
125 viajeclasificacion.addEventListener("click",function(){
126     actualizarzIndex(0,0,0,0,0,0,1)
127     })
128
129 const boss=document.getElementById("boss")
130
131
132 let barrainicial = 60;
133 let vidainicial = 10;
134 const anchovida = 60;
135
136 let saludinicial = 10;
137 let saludqueda = 10;
138
139 let multOro =1
140
141
142 document.querySelector(".oro-texto").innerText =player.economia.oro;
143
144 // let Oro = parseInt(document.querySelector(".oro-texto").innerText,10);
145
146 const slimes= ["Monstruos/slimes/0 (1).png","Monstruos/slimes/0 (2).png","Monstruos/slimes/0 (3).png",
147                "Monstruos/slimes/0 (4).png","Monstruos/slimes/0 (5).png","Monstruos/slimes/0 (6).png",
148                "Monstruos/slimes/0 (7).png","Monstruos/slimes/0 (8).png","Monstruos/slimes/0 (9).png",
149                "Monstruos/slimes/0 (10).png","Monstruos/slimes/0 (11).png","Monstruos/slimes/0 (12).png",
150                "Monstruos/slimes/0 (13).png","Monstruos/slimes/0 (14).png","Monstruos/slimes/0 (15).png",
151 ]
152
153 const bossesEspeciales = ["bossesp1.png"]
154 let boss10aparecer= false;
155 let boss10ejecutado =false;
156
157 const bossesfinales = []
158 listabossessinusar=[].concat(slimes);
159
160
161
162
163 //* FUNCION DE DAÑO AL HACER CLICK.
164 boss.addEventListener("click",function(){
165     //SONIDO AL GOLPEAR ESPADA.
166     let hit =  document.getElementById("hit1");
167     hit.play();
168
169     //BAJAR LA BARRA DE VIDA.
170     let barra=document.getElementById("salud");
171     barrainicial -= (player.caracteristicas.daño*anchovida)/vidainicial;
172     barra.style.width= barrainicial+"%";
173     saludqueda-=player.caracteristicas.daño;
174     //BAJAR PUNTOS DE VIDA
175     document.getElementById("salud-tiene-texto").textContent=saludqueda.toFixed(2);
176     document.getElementById("salud-total-texto").textContent=saludinicial.toFixed(2);
177
178     muerteboss();
179 })
180
181
182 //* FUNCION DE DAÑO CONTINO, DEBE SER COMO LA DE HACER CLICK.
183 function dañocontinuo(damage){
184     let barra=document.getElementById("salud");
185     damage = player.caracteristicas.daño*0.1
186     barrainicial -= (damage*anchovida)/vidainicial;
187     barra.style.width= barrainicial+"%";
188     saludqueda-=damage;
189     //BAJAR PUNTOS DE VIDA
190     document.getElementById("salud-tiene-texto").textContent=saludqueda.toFixed(2);
191     document.getElementById("salud-total-texto").textContent=saludinicial.toFixed(2);
192     // CONDICIONES CUANDO MUERE EL BOSS.
193     muerteboss()
194 }
195
196 //* CONDICIONES CUANDO MUERE EL BOSS.
197 //? AQUI VOY A IR DEJANDO LAS FUNCIONES
198 const dañocontinuorep = setInterval(function() {
199     dañocontinuo(player.caracteristicas.daño);}, 500);
200
201 function muerteboss(){
202
203     let aleatorio = Math.floor(Math.random()*listabossessinusar.length);
204         if (saludqueda<=0){
205             boss.src = listabossessinusar[aleatorio];
206
207         //ELIMINAR EL BOSS DE LA LISTA NORMAL PARA QUE NO SE REPITAN.
208         listabossessinusar.splice(aleatorio,1);
209
210             if (listabossessinusar.length===0){
211                 listabossessinusar=[].concat(slimes);
212             }
213
214                 //!BOSS ESPECIAL 10
215                     if (boss10aparecer===false && player.progresion.etapa === 9){
216                         boss.src = bossesEspeciales[0];
217                         let boss1grito =  document.getElementById("gritoboss1");
218                         boss1grito.play();
219                         boss10aparecer =true;}
220
221                     if (boss10aparecer===true && saludqueda<=0 && player.progresion.etapa===10){
222                         player.progresion.contadormuertosboss+=1;
223                         boss10ejecutado = true;
224                         boss10aparecer = false;
225                         alert("Enhorabuena, has matado al elemental de sombra.");
226                         multOro = multOro*10;
227                     }
228
229             barrainicial=60;
230             saludinicial+=1;
231             vidainicial+=1;
232             saludqueda=saludinicial;
233             player.progresion.contadormuertos+=1;
234             player.progresion.etapa+=1;
235
236
237
238             // AGREGAR LA Oro POR CADA BOSS.
239             player.economia.oro += 1*multOro;
240
241
242             //TENGO QUE ACTUALIZAR TODOS LOS TEXTOS TANTO EN EL BOSS COMO EN MEJORAS. ESTE ES EN EL BOSS
243             document.querySelector(".mult-daño-texto").innerText=player.caracteristicas.daño;
244             document.querySelector(".oro-texto").innerText =player.economia.oro;
245             document.querySelector(".mult-puntos-texto").innerText =player.progresion.etapa;
246
247             textdaño_oro.innerText = player.economia.oro;
248
249         } }
250
251 //*FUNCION PARA QUE CUANDO HAGA CLICK APAREZCA LA IMAGEN
252 document.getElementById('boss').addEventListener('click', function() {
253     //PRIMERO COGEMOS LA IMAGEN DEL ATAQUE
254     const attackImg = document.getElementById('ataquealboss');
255
256     // VOY A PONERLE QUE APAREZCA DE MANERA ALEATORIO CON UN MARGEN
257     let ataque_izquierda=Math.floor(Math.random()*(50-20)+20)
258     let ataque_abajo=Math.floor(Math.random()*(50-20)+20)
259     //AQUI LE DAMOS LA POSICION EN EL CSS A LA IMAGEN DE ATAQUE.
260     attackImg.style.left = ataque_izquierda + "%";
261     attackImg.style.bottom = ataque_abajo +"%";
262
263     //APARECE LA IMAGEN DE ATAQUE.
264     attackImg.style.display = 'block';
265
266     // A LOS 500ms DESAPARECE DE NUEVO ESTA IMAGEN QUITANDOLA EN EL CSS
267     setTimeout(function() {
268         attackImg.style.display = 'none';
269     }, 200);
270 });
271
272
273 //!A PARTIR DE AQUI VOY A HACER LAS FUNCIONES DE LA PANTALLA DE MEJORAS
274 comprardaño.addEventListener("click",function(){
275
276     if (player.caracteristicas.daño<=10 && player.economia.oro>0){
277         player.economia.oro-=1
278         player.caracteristicas.daño+=1;
279         }
280
281     else if(player.caracteristicas.daño>=10 && player.economia.oro>=10){
282         player.economia.oro-=10
283         player.caracteristicas.daño+=1;
284         }
285
286 //AQUI TENEMOS DOS EJEMPLOS DE COMO HACER UNA ENTRADA DE TEXTO EN HTML
287
288         document.querySelector(".mult-daño-texto").innerText=daño;
289         document.querySelector(".oro-texto").innerText =player.economia.oro;
290         textdaño_oro.innerText = player.economia.oro;
291         textdaño.innerText = player.caracteristicas.daño;
292
293
294 })
295
296 //!FUNCION PARA QUE APAREZCAN LOS CUADROS DESCRIPTIVOS DE LOS HEROES.
297 //SI PINCHAMOS EN LA IMAGEN DEL GUERRERO SU ICONO
298 document.getElementById('imagen_guerrero').addEventListener('click', function() {
299     //CREAMOS LA CONSTANTE DE EL GUERRERO
300     const imagenespecguerrero = document.getElementById('espec1');
301     //APARECE LA IMAGEN COMPLETA DEL GUERRERO.
302     imagenespecguerrero.style.display = 'flex';
303 });
304 // PARA QUITAR LA IMAGEN PINCHAMOS ESTA VEZ EN EL DIV QUE APARECE
305 document.getElementById('espec1').addEventListener('click', function() {
306     const imagenespecguerrero = document.getElementById('espec1');
307     //APARECE LA IMAGEN DE ATAQUE.
308     imagenespecguerrero.style.display = 'none';
309 });
310
311 document.getElementById('imagen_cazador').addEventListener('click', function() {
312     //CREAMOS LA CONSTANTE DE EL GUERRERO
313     const imagenespeccazador = document.getElementById('espec3');
314     //APARECE LA IMAGEN COMPLETA DEL GUERRERO.
315     imagenespeccazador.style.display = 'flex';
316 });
317 // PARA QUITAR LA IMAGEN PINCHAMOS ESTA VEZ EN EL DIV QUE APARECE
318 document.getElementById('espec3').addEventListener('click', function() {
319     const imagenespeccazador = document.getElementById('espec3');
320     //APARECE LA IMAGEN DE ATAQUE.
321     imagenespeccazador.style.display = 'none';
322 })
323
324 document.getElementById('imagen_druida').addEventListener('click', function() {
325     //CREAMOS LA CONSTANTE DE EL GUERRERO
326     const imagenespecdruida = document.getElementById('espec4');
327     //APARECE LA IMAGEN COMPLETA DEL GUERRERO.
328     imagenespecdruida.style.display = 'flex';
329 });
330 // PARA QUITAR LA IMAGEN PINCHAMOS ESTA VEZ EN EL DIV QUE APARECE
331 document.getElementById('espec4').addEventListener('click', function() {
332     const imagenespecdruida = document.getElementById('espec4');
333     //APARECE LA IMAGEN DE ATAQUE.
334     imagenespecdruida.style.display = 'none';
335 })
336
337 document.getElementById('imagen_paladin').addEventListener('click', function() {
338     //CREAMOS LA CONSTANTE DE EL GUERRERO
339     const imagenespecpaladin = document.getElementById('espec2');
340     //APARECE LA IMAGEN COMPLETA DEL GUERRERO.
341     imagenespecpaladin.style.display = 'flex';
342 });
343 // PARA QUITAR LA IMAGEN PINCHAMOS ESTA VEZ EN EL DIV QUE APARECE
344 document.getElementById('espec2').addEventListener('click', function() {
345     const imagenespecpaladin = document.getElementById('espec2');
346     //APARECE LA IMAGEN DE ATAQUE.
347     imagenespecpaladin.style.display = 'none';
348 })
349
350 //! FUNCION PARA GUARDAR LA PARTIDA.
351 document.getElementById('salvar-partida').addEventListener('click', function() {
352     //GENERAMOS UNA LISTA CON EL OBJETO DESEADO
353     player_lista = JSON.stringify(player);
354     //GUARDAMOS EN NUESTRO LOCAL STORE.º
355     localStorage.setItem(player.nombre,player_lista)
356 });
357
