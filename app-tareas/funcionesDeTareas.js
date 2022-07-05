const fs = require('fs');

let archivoTareas = {
    archivo : 'tareas.json',
    leerArchivo: function(){
        let tareas = fs.readFileSync(this.archivo, 'utf-8');
        return JSON.parse(tareas);
    }
}
module.exports = archivoTareas;