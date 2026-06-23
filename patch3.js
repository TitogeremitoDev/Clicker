const fs = require('fs');
let code = fs.readFileSync('clicker.js', 'utf8');

code = code.replace(
    /document\.querySelector\("\.oro-texto"\)\.innerText =player\.economia\.oro;/g,
    `oroTextoDOM.innerText =player.economia.oro;`
);

code = code.replace(
    /document\.querySelector\("\.mult-daño-texto"\)\.innerText=daño;/g,
    `multDañoTexto.innerText=daño;`
);

fs.writeFileSync('clicker.js', code);
console.log("Successfully patched clicker.js remaining ones");
