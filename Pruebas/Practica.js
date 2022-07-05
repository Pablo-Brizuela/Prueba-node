function noParesDeContarImparesHasta(numero){
    // Escribe aqui tu código
   let impar=0
    for(let i=0; i<=numero; i++){
        if(i % 2 == 1){
            impar=impar + 1
        }

    }return impar
}

console.log(noParesDeContarImparesHasta(5))