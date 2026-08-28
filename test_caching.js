const fs = require('fs');

// Simple mock for DOM caching
const domMocks = {
    hit1: { play: () => console.log('play hit1') },
    salud: { style: { width: '' } },
    'salud-tiene-texto': { textContent: '' },
    'salud-total-texto': { textContent: '' },
    gritoboss1: { play: () => console.log('play grito') },
    ataquealboss: { style: { left: '', bottom: '', display: '' } },
    'fondo-home': { style: {} },
    'fondo-mejoras': { style: {} },
    'fondo-boss': { style: {} },
    'fondo-heroes': { style: {} },
    'fondo-compras': { style: {} },
    'fondo-configuracion': { style: {} },
    'fondo-clasificacion': { style: {} },
    boss: { addEventListener: () => {}, src: '' },
    'comprar_mejora_daño': { addEventListener: () => {} },
    'texto-daño-actual': { innerText: '' },
    'texto-daño-actual_oro': { innerText: '' },
    'viaje-hab': { addEventListener: () => {} },
    'viaje-boss': { addEventListener: () => {} },
    'viaje-heroes': { addEventListener: () => {} },
    'viaje-compras': { addEventListener: () => {} },
    'viaje-configuracion': { addEventListener: () => {} },
    'viaje-clasificacion': { addEventListener: () => {} },
    'imagen_guerrero': { addEventListener: () => {} },
    'espec1': { addEventListener: () => {}, style: {} },
    'imagen_cazador': { addEventListener: () => {} },
    'espec3': { addEventListener: () => {}, style: {} },
    'imagen_druida': { addEventListener: () => {} },
    'espec4': { addEventListener: () => {}, style: {} },
    'imagen_paladin': { addEventListener: () => {} },
    'espec2': { addEventListener: () => {}, style: {} },
    'salvar-partida': { addEventListener: () => {} },
};

const queryMocks = {
    '.mult-daño-texto': { innerText: '' },
    '.oro-texto': { innerText: '' },
    '.mult-puntos-texto': { innerText: '' }
};

global.document = {
    getElementById: (id) => {
        return domMocks[id] || { addEventListener: () => {}, style: {} };
    },
    querySelector: (sel) => {
        return queryMocks[sel] || { innerText: '' };
    },
    getElementsByTagName: (tag) => {
        if(tag === 'body') return [{ addEventListener: () => {} }];
        return [];
    },
    getElementsByClassName: (className) => {
        return [{ addEventListener: () => {} }];
    }
};

global.window = {
    getComputedStyle: () => ({ zIndex: 0 })
};

global.localStorage = {
    getItem: () => null,
    setItem: () => {}
};

global.prompt = () => "TestUser";
global.alert = () => {};

// Run clicker.js in this context to ensure it initializes without error
try {
    const code = fs.readFileSync('clicker.js', 'utf8');
    eval(code);
    console.log("Successfully initialized clicker.js with cached DOM elements.");
} catch(e) {
    console.error("Failed to initialize:", e);
}
