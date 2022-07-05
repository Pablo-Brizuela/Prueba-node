function alturaArbolUtopico(cantCiclos){
    let altura = 1; 
 
     for( let ciclo = 1 ; ciclo <= cantCiclos ; ciclo++ ){
         if(ciclo % 2 == 0){
             altura++  
         }
         else{
             altura = altura * 2;
         }
     }
     return altura
 }
 
 
console.log(alturaArbolUtopico(5))