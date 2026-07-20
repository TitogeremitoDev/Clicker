const fs = require('fs');
let code = fs.readFileSync('clicker.js', 'utf8');
code = code.replace(/multDanoTexto\.innerText=daño;/g, 'multDanoTexto.innerText=player.caracteristicas.daño;');
fs.writeFileSync('clicker.js', code);
