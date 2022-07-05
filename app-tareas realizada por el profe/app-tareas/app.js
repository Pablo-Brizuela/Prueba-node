const archivo = require('./funcionesDeTareas');

let tareas = archivo.leerArchivo();

function listar() {
    console.log("\n Listado de tareas. \n \n - - - - - - - - - - - - - - - - - - - -")
    for(let i = 0; i < tareas.length; i++) {
        console.log(i+1 + ". " + tareas[i].titulo + " - " + tareas[i].estado);
    }
}

function crearTarea(nombre){
    tareas.push({
        titulo: nombre,
        estado: "pendiente"
    });
    archivo.guardarArchivo(tareas);
}

const accion = process.argv[2];

switch (accion){
    case 'listar':
        listar();
        break;
    case 'crear':
        let nombreTareaNueva = process.argv[3];
        if(nombreTareaNueva){
            crearTarea(nombreTareaNueva);
            listar();
            break;
        }
        console.log("Error: Debe colocar un nombre");
        break;
    case undefined:
        console.log('Atención - Tienes que pasar una acción.');
        break;
    default:
        console.log('No entiendo qué quieres hacer');
}