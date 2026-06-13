import sys
content = open('clicker.js', 'r').read()

part1 = """
const domSalud = document.getElementById("salud");
const domSaludTieneTexto = document.getElementById("salud-tiene-texto");
const domSaludTotalTexto = document.getElementById("salud-total-texto");
const domHit1 = document.getElementById("hit1");
const domGritoBoss1 = document.getElementById("gritoboss1");
const domMultDanoTexto = document.querySelector(".mult-daño-texto");
const domOroTexto = document.querySelector(".oro-texto");
const domMultPuntosTexto = document.querySelector(".mult-puntos-texto");
const domAttackImg = document.getElementById('ataquealboss');
"""

content = content.replace('let multOro =1\n', 'let multOro =1\n\n' + part1)
content = content.replace('document.querySelector(".oro-texto").innerText =player.economia.oro;', 'domOroTexto.innerText =player.economia.oro;')

content = content.replace('let hit =  document.getElementById("hit1");\n    hit.play();', 'domHit1.currentTime = 0;\n    domHit1.play();')

content = content.replace('let barra=document.getElementById("salud");\n    barrainicial -= (player.caracteristicas.daño*anchovida)/vidainicial;\n    barra.style.width= barrainicial+"%";', 'barrainicial -= (player.caracteristicas.daño*anchovida)/vidainicial;\n    domSalud.style.width= barrainicial+"%";')

content = content.replace('document.getElementById("salud-tiene-texto").textContent=saludqueda.toFixed(2);', 'domSaludTieneTexto.textContent=saludqueda.toFixed(2);')
content = content.replace('document.getElementById("salud-total-texto").textContent=saludinicial.toFixed(2);', 'domSaludTotalTexto.textContent=saludinicial.toFixed(2);')

content = content.replace('let barra=document.getElementById("salud");\n    damage = player.caracteristicas.daño*0.1\n    barrainicial -= (damage*anchovida)/vidainicial;\n    barra.style.width= barrainicial+"%";', 'damage = player.caracteristicas.daño*0.1\n    barrainicial -= (damage*anchovida)/vidainicial;\n    domSalud.style.width= barrainicial+"%";')

content = content.replace('let boss1grito =  document.getElementById("gritoboss1");\n                        boss1grito.play();', 'domGritoBoss1.currentTime = 0;\n                        domGritoBoss1.play();')

content = content.replace('document.querySelector(".mult-daño-texto").innerText=player.caracteristicas.daño;', 'domMultDanoTexto.innerText=player.caracteristicas.daño;')
content = content.replace('document.querySelector(".oro-texto").innerText =player.economia.oro;', 'domOroTexto.innerText =player.economia.oro;')
content = content.replace('document.querySelector(".mult-puntos-texto").innerText =player.progresion.etapa;', 'domMultPuntosTexto.innerText =player.progresion.etapa;')


content = content.replace('const attackImg = document.getElementById(\'ataquealboss\');\n\n    // VOY A PONERLE QUE APAREZCA DE MANERA ALEATORIO CON UN MARGEN\n    let ataque_izquierda=Math.floor(Math.random()*(50-20)+20)\n    let ataque_abajo=Math.floor(Math.random()*(50-20)+20)\n    //AQUI LE DAMOS LA POSICION EN EL CSS A LA IMAGEN DE ATAQUE.\n    attackImg.style.left = ataque_izquierda + "%";\n    attackImg.style.bottom = ataque_abajo +"%";\n\n    //APARECE LA IMAGEN DE ATAQUE.\n    attackImg.style.display = \'block\';\n\n    // A LOS 500ms DESAPARECE DE NUEVO ESTA IMAGEN QUITANDOLA EN EL CSS\n    setTimeout(function() {\n        attackImg.style.display = \'none\';\n    }, 200);', '// VOY A PONERLE QUE APAREZCA DE MANERA ALEATORIO CON UN MARGEN\n    let ataque_izquierda=Math.floor(Math.random()*(50-20)+20)\n    let ataque_abajo=Math.floor(Math.random()*(50-20)+20)\n    //AQUI LE DAMOS LA POSICION EN EL CSS A LA IMAGEN DE ATAQUE.\n    domAttackImg.style.left = ataque_izquierda + "%";\n    domAttackImg.style.bottom = ataque_abajo +"%";\n\n    //APARECE LA IMAGEN DE ATAQUE.\n    domAttackImg.style.display = \'block\';\n\n    // A LOS 500ms DESAPARECE DE NUEVO ESTA IMAGEN QUITANDOLA EN EL CSS\n    setTimeout(function() {\n        domAttackImg.style.display = \'none\';\n    }, 200);')


open('clicker.js', 'w').write(content)
