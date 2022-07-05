let unArray1= [1, 2, 3];
let otroArray1 = [4, 5];

function trasladar (unArray, otroArray){
    
    let elemento = unArray.pop()
   
    otroArray.push(elemento);
    console.log(unArray)
    console.log(otroArray)
}

trasladar(unArray1, otroArray1)