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
    },
    listaDeVentas:  function(){
       const vendidos = this.celulares.filter(celular => celular.vendido === true)
       const precios = vendidos.map(celular => celular.precio) 
       return precios

    },

    totalDeVentas: function(){
       const precios = this.listaDeVentas()
       const total = precios.reduce((acumulador, elemento) => acumulador + elemento) 
       return total
    }

 


}
        
//DBZ.venderCelular("GALAXYA03")
//console.log(DBZ.celulares)
console.log(DBZ.listaDeVentas())
console.log(DBZ.totalDeVentas())
