let autos = [{
    marca:"Ford",
    modelo: "Fiesta",
    precio: 15000,
    km: 200,
    color:"azul",
    cuotas: 12,
    anio: 2019,
    patente: "APL123",
    vendido:false
    },

{
    marca:"Toyota",
    modelo:"Corolla",
    precio: 10000,
    km:  0,
    color:"blanco",
    cuotas: 14,
    anio: 2019,
    patente: "JJK116",
    vendido:false
}


]



let concesionaria = {
   autos: autos,
 
   buscarAuto: function(patente){
      for(let i=0; i<autos.length;i++){
         if(autos[i].patente === patente){
            return autos[i]
         }else{
            return null
         }
   }
   
   },

   venderAuto: function(buscar) { 
        let autoBuscado = this.buscarAuto(buscar);
      return autoBuscado.vendido = true;
   },

 autosParaLaVenta: function()
{const autos = this.autos.filter( (elemento) => elemento.vendido !== true)
    return autos
  },

   
  
}
   