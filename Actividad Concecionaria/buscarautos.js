let autos = require("./autos")

let concesionaria = {
   autos: autos,
 
   buscarAuto: function (patente){
        for(let i=0; i<autos.length; i++ ){
       if(autos[i].patente===patente){
         return auto
         
       }      
        
     }  
        
   }
} 

