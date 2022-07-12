const celulares = require("./celulares");

const DBZ = {
    celulares: celulares,
    buscarCelulares: function(codigo){
        for(let i=0; i < celulares.length; i++){
            if(celulares[i].codigo === codigo){
                return celulares[i]
            }
           
        } return null               
    },

    venderCelular: function(codigo){
        const celular = this.buscarCelulares(codigo)
        if(celular){
            celular.vendido = true
        } 
    }, 

    celularesParaLaVenta: function (){
        const celualres = this.celulares.filter(elemento => elemento.vendido !==true)
        return celualres   
    },

    celularesNuevos : function (){
        const ventas = this.celularesParaLaVenta()
        const celularesHoras = ventas.filter(elemento => elemento.horas < 50)
        return  celularesHoras
    }

}
        
DBZ.venderCelular("GALAXYA03")
console.log(DBZ.celulares)
