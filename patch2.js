const fs = require('fs');
let code = fs.readFileSync('clicker.js', 'utf8');

// Replace in boss.addEventListener("click")
code = code.replace(
    /let hit =  document.getElementById\("hit1"\);\s*hit\.play\(\);\s*\/\/BAJAR LA BARRA DE VIDA\.\s*let barra=document\.getElementById\("salud"\);/g,
    `hitSound.play();\n\n    //BAJAR LA BARRA DE VIDA.\n    let barra=saludBarra;`
);

code = code.replace(
    /document\.getElementById\("salud-tiene-texto"\)\.textContent=saludqueda\.toFixed\(2\);\s*document\.getElementById\("salud-total-texto"\)\.textContent=saludinicial\.toFixed\(2\);/g,
    `saludTieneTexto.textContent=saludqueda.toFixed(2);\n    saludTotalTexto.textContent=saludinicial.toFixed(2);`
);

// Replace in dañocontinuo()
code = code.replace(
    /function dañocontinuo\(damage\){\s*let barra=document.getElementById\("salud"\);/g,
    `function dañocontinuo(damage){\n    let barra=saludBarra;`
);

// Replace in muerteboss()
code = code.replace(
    /let boss1grito =  document\.getElementById\("gritoboss1"\);\s*boss1grito\.play\(\);/g,
    `bossGrito.play();`
);

code = code.replace(
    /document\.querySelector\("\.mult-daño-texto"\)\.innerText=player\.caracteristicas\.daño;\s*document\.querySelector\("\.oro-texto"\)\.innerText =player\.economia\.oro;\s*document\.querySelector\("\.mult-puntos-texto"\)\.innerText =player\.progresion\.etapa;/g,
    `multDañoTexto.innerText=player.caracteristicas.daño;\n            oroTextoDOM.innerText =player.economia.oro;\n            multPuntosTexto.innerText =player.progresion.etapa;`
);

// Replace in document.getElementById('boss').addEventListener('click', ...)
code = code.replace(
    /document\.getElementById\('boss'\)\.addEventListener\('click', function\(\) {\s*\/\/PRIMERO COGEMOS LA IMAGEN DEL ATAQUE\s*const attackImg = document\.getElementById\('ataquealboss'\);/g,
    `boss.addEventListener('click', function() {\n    //PRIMERO COGEMOS LA IMAGEN DEL ATAQUE\n    const attackImg = attackImgCached;`
);

fs.writeFileSync('clicker.js', code);
console.log("Successfully patched clicker.js with optimizations");
