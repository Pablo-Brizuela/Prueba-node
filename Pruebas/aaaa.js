function laClaveSecreta(clave) {
    let reves = ""
    for (let i = clave.length - 1; i >= 0; i--) {
      
        if (clave[i] !== "*") {
            reves = reves + clave[i]
        }
    }

    return reves


}
console.log(laClaveSecreta(["s", "", "e", "n", "u", "l", " ", "s", "", "e", " ", "a", "í", "", "d", " ", "l", "", "E", "*"]))
console.log(laClaveSecreta( ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"] ))  

