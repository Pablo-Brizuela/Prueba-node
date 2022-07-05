let pablob = require("./pablo")

function presentar (persona) {
    return 'Hola, soy ' + persona[0] + ', disfruto ' + persona[1] + ' y soy de ' + persona[2] + '.'
};

console.log(presentar(pablob))