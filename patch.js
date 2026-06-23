const fs = require('fs');
let code = fs.readFileSync('clicker.js', 'utf8');

const searchRegex = /const boss=document\.getElementById\("boss"\)\r?\n\r?\n\r?\nlet barrainicial/;

const replace = `const boss=document.getElementById("boss")

// DOM Element Caching for performance
const saludBarra = document.getElementById("salud");
const saludTieneTexto = document.getElementById("salud-tiene-texto");
const saludTotalTexto = document.getElementById("salud-total-texto");
const hitSound = document.getElementById("hit1");
const bossGrito = document.getElementById("gritoboss1");
const multDañoTexto = document.querySelector(".mult-daño-texto");
const oroTextoDOM = document.querySelector(".oro-texto");
const multPuntosTexto = document.querySelector(".mult-puntos-texto");
const attackImgCached = document.getElementById("ataquealboss");

let barrainicial`;

if(searchRegex.test(code)) {
    code = code.replace(searchRegex, replace);
    fs.writeFileSync('clicker.js', code);
    console.log("Successfully patched clicker.js");
} else {
    console.log("Search string not found!");
}
