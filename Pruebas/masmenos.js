function caloriasDeTrote(X){
    let caloriasConsumida = 0; 
 
     for( let vuelta = 1 ; vuelta <= X ; vuelta++ ){
             caloriasConsumida = caloriasConsumida + vuelta * 5; 
     }
     return caloriasConsumida
 }
 
 console.log(caloriasDeTrote(5))