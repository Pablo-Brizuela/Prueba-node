const archivo = require("./funcionesDeTareas")

 let tareas = archivo.leerArchivo();

 function listar(){
    for(let i=0; i < tareas.length; i++){
        console.log(i+1 + ". " + tareas[i].titulo + " - " + tareas[i].estado);
    }
    
 }

function cerarTarea(nombre){
    tareas.push({
        titulo:nombre,
        estado:"pendiente"
    })
}

const accion = process.argv[2]

switch (accion){
    case "listar" :
        listar();
        break
    case "crear":
        crearTarea(process.argv[3])
        listar()  
        break
    case undefined:    
        console.log("atencion - tiene que pasar una accion");
        break 
        default:
        console.log("no entiendo que quieres hacer");    

}