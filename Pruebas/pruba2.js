function sumatoriaBajoImporte(unPeriodo) {
    let resultado = 0 //porque yo acá quiero guardar el total, si no lo pierdo
    for (let i = 0; i < unPeriodo.length; i++) { //i la uso como indice para acceder a cada elemento del array
        //.length es una función que te devuelve un numero entero que es el total del array
        if (unPeriodo[i] > 0 && unPeriodo[i] <= 1000) {
            //if lo que busco que todos los periodos mayor a 0 y que no supere los mil  
            let mes = unPeriodo[i];//variable para guardar el importe del mes

            resultado = resultado + mes //sumo lo que tenía mas el mes actual
        }

    }
    return resultado //devuelvo el total

}

function asientosDisponibles(asientosDisponibles, ubicacion) {
    for (let i = 0; i < asientosDisponibles.length; i++) { //recorremos los asientos disponibles y lo voy comparando con el asiento que pidio el cl.
        if (ubicacion == asientosDisponibles[i]) {
            return "Felicitaciones, el asiento número " + ubicacion + " está disponible"
        } //si lo encuentra me voy de la función devolviendo el mensaje
    }
    return "Lo sentimos, el asiento número " + ubicacion + " está ocupado, pero aún quedan " + asientos.length + " asientos disponibles"
} //si dentro del array no encontro nada devolvemos el mensaje

function reporteDePasajeros(cantidadEstaciones) { //parametro recibe la cantidad de estaciones por la que va a pasar
    let reporteCadaEstacion = [] //guardo la información de la cantidad pasajeros por estación
    let pasajeros = 200 //acumulador
    for (let i = 0; i <= cantidadEstaciones; i++) {//aca recorremos las estaciones
        if (i == 0) {//si es la primera estación sólo agrego al reportecadaestación, el mensaje a devolver
            reporteCadaEstacion.push("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren")
            
        } else if (i == 5) { //si la estación es la numero 5hacemos el calculco de que bajan 80 y suben 120 y agrgo el mensaje a cada estación
            pasajeros = pasajeros + 120 - 80
            reporteCadaEstacion.push("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren")
        }
        else {

            pasajeros = pasajeros + 50 - 30 //y si no al total suben 50 - 30 y le agregamos el mensaje
            
            reporteCadaEstacion.push("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren")
        }

    }

    return reporteCadaEstacion

}