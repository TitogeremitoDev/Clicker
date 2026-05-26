const fs = require('fs');
let code = fs.readFileSync('clicker.js', 'utf8');

code = code.replace(/const DOM_multDanoTexto = DOM_multDanoTexto;/g, 'const DOM_multDanoTexto = document.querySelector(".mult-daño-texto");');
code = code.replace(/const DOM_oroTexto = DOM_oroTexto;/g, 'const DOM_oroTexto = document.querySelector(".oro-texto");');
code = code.replace(/const DOM_multPuntosTexto = DOM_multPuntosTexto;/g, 'const DOM_multPuntosTexto = document.querySelector(".mult-puntos-texto");');

fs.writeFileSync('clicker.js', code);
