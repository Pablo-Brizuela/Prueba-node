const celulares = require('./celulares')

const dbz = {
  celulares: celulares,
  // buscarCelular: function(codigo){
  //   for (let index = 0; index < this.celulares.length; index++) {
  //       if(celulares[index].codigo == codigo){
  //         return celulares[index];
  //       }  
  //       // else{
  //       //   // return null
  //       // } 
  //   }
  //   // return null           
  // },
  buscarCelular: function(codigo) {
    const celular = this.celulares.find((celu) => celu.codigo === codigo)
    // return (celular !== undefined) ? celular : null;
    return celular ? celular : null;
  },
  venderCelular: function(codigo){
    const celular = this.buscarCelular(codigo);
    if(celular){
      celular.vendido = true
    }
  },
  celularesParaLaVenta: function(){
    const celulares = this.celulares.filter( (celu) => celu.vendido !== true )
    return celulares
  },
  celularesNuevos: function(){
    const celularesParaLaVenta = this.celularesParaLaVenta()
    let celularesNuevos = celularesParaLaVenta.filter( (celular) => celular.horasDeUso < 50 )
    return celularesNuevos;
  },
   /*     
  celularesNuevos2 : function(){
    let celularesNuevos = []
    const celulares = this.celularesParaLaVenta();
    for(i = 0; i < celulares.length; i++){
        if(celulares[i].horasDeUso < 100){
            celularesNuevos.push(celulares[i])
        }
    }
    return celularesNuevos;
  } */
  listaDeVentas: function(){
    const vendidos = this.celulares.filter( celular => celular.vendido === true)
    const precios = vendidos.map( celular => celular.precio )
    return precios;
  },
  totalDeVentas:function(){
    const precios = this.listaDeVentas();
    const total = precios.reduce((acumulador, elemento) => acumulador + elemento, 0)
    return total;
  },
  puedeComprar:function(celular, persona){
    const noEsCaro = celular.precio < persona.capacidadDePagoTotal;
    const puedePagar = ( celular.precio /celular.cuotas ) < persona.capacidadDePagoEnCuotas;
    return noEsCaro && puedePagar; // true && true = true
  },
  celularesQuePuedeComprar:'',

  

};

// console.log(dbz.buscarCelular("GALAXYA03"))

// dbz.venderCelular("GALAXYA03")
// dbz.celularesParaLaVenta()

const persona = {
  nombre: "Juan",
  capacidadDePagoEnCuotas: 20000,
  capacidadDePagoTotal: 100000
}
  
const celular1 = dbz.buscarCelular("GALAXYA03")
const celular2 = celulares[0];

console.log(dbz.puedeComprar(celular1, persona))
console.log(dbz.puedeComprar(celular2, persona))