function dividir(numeroA, numero2){
    if(numeroA === 0 || numero2 === 0){
        return "No se puede dividir por cero"
        }
    return numeroA / numero2
}
module.exports = dividir

