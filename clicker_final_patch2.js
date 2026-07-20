const fs = require('fs');
let code = fs.readFileSync('clicker.js', 'utf8');

const cacheString = `
// Cache frequently accessed DOM elements for performance
const barraSalud = document.getElementById("salud");
const saludTieneTexto = document.getElementById("salud-tiene-texto");
const saludTotalTexto = document.getElementById("salud-total-texto");
const bossHitSound = document.getElementById("hit1");
const ataqueImg = document.getElementById('ataquealboss');
const multDanoTexto = document.querySelector(".mult-daño-texto");
const multPuntosTexto = document.querySelector(".mult-puntos-texto");
const oroTexto = document.querySelector(".oro-texto");
const bossGrito = document.getElementById("gritoboss1");
`;

code = code.replace(
    'const boss=document.getElementById("boss")',
    'const boss=document.getElementById("boss")\n' + cacheString
);

code = code.replace(
    'document.querySelector(".oro-texto").innerText =player.economia.oro;',
    'oroTexto.innerText =player.economia.oro;'
);

code = code.replace(
    'let hit =  document.getElementById("hit1");\r\n    hit.play();',
    'bossHitSound.play();'
);
code = code.replace(
    'let hit =  document.getElementById("hit1");\n    hit.play();',
    'bossHitSound.play();'
);


code = code.replace(
    /let barra=document\.getElementById\("salud"\);\s*barrainicial -= \(player\.caracteristicas\.daño\*anchovida\)\/vidainicial;\s*barra\.style\.width= barrainicial\+"%";/g,
    'barrainicial -= (player.caracteristicas.daño*anchovida)/vidainicial;\n    barraSalud.style.width= barrainicial+"%";'
);

code = code.replace(
    /document\.getElementById\("salud-tiene-texto"\)\.textContent=saludqueda\.toFixed\(2\);\s*document\.getElementById\("salud-total-texto"\)\.textContent=saludinicial\.toFixed\(2\);/g,
    'saludTieneTexto.textContent=saludqueda.toFixed(2);\n    saludTotalTexto.textContent=saludinicial.toFixed(2);'
);

code = code.replace(
    /let barra=document\.getElementById\("salud"\);\s*damage = player\.caracteristicas\.daño\*0\.1\s*barrainicial -= \(damage\*anchovida\)\/vidainicial;\s*barra\.style\.width= barrainicial\+"%";/g,
    'damage = player.caracteristicas.daño*0.1;\n    barrainicial -= (damage*anchovida)/vidainicial;\n    barraSalud.style.width= barrainicial+"%";'
);

code = code.replace(
    /let boss1grito =  document\.getElementById\("gritoboss1"\);\s*boss1grito\.play\(\);/g,
    'bossGrito.play();'
);

code = code.replace(
    /document\.querySelector\("\.mult-daño-texto"\)\.innerText=player\.caracteristicas\.daño;\s*document\.querySelector\("\.oro-texto"\)\.innerText =player\.economia\.oro;\s*document\.querySelector\("\.mult-puntos-texto"\)\.innerText =player\.progresion\.etapa;/g,
    'multDanoTexto.innerText=player.caracteristicas.daño;\n            oroTexto.innerText =player.economia.oro;\n            multPuntosTexto.innerText =player.progresion.etapa;'
);

code = code.replace(
    /document\.getElementById\('boss'\)\.addEventListener\('click', function\(\) {/g,
    'boss.addEventListener(\'click\', function() {'
);

code = code.replace(
    /const attackImg = document\.getElementById\('ataquealboss'\);/g,
    '// Uses cache: ataqueImg'
);
code = code.replace(/attackImg/g, 'ataqueImg');

code = code.replace(
    /document\.querySelector\("\.mult-daño-texto"\)\.innerText=daño;\s*document\.querySelector\("\.oro-texto"\)\.innerText =player\.economia\.oro;/g,
    'multDanoTexto.innerText=player.caracteristicas.daño;\n        oroTexto.innerText =player.economia.oro;'
);

fs.writeFileSync('clicker.js', code);
