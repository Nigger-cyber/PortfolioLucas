// Motor AdivinApp 2.0
//let input = require("readline-sync")
//////////////////////////////////////////////////////
function main() {
    ////////
    //intro()
    //hacerPregunta()
    let numero = buscarNumero()
    let respuesta = darRespuesta(numero)
    //mostrar(respuesta)
    ////////

    //!!!!!!!!!!ESTe RETURN FUE AGREGADO!!!!!!!
    return respuesta
}
//////////////////////////////////////////////////////

function intro() {
    console.log("Bienvenido a tu destino! Woooo")
}

function hacerPregunta() {
    let rta = input.question("Que queres saber? ")
}

function buscarNumero() {
    let suerte = Math.floor(Math.random() * 5)

    return suerte
}

function darRespuesta(suerte) {
    //////////////
    let respuesta = ""

    if (suerte == 1) {

        respuesta = "Cuenta con ello!"

    } else if (suerte == 2) {

        respuesta = "Es posible..."

    } else if (suerte == 3) {

        respuesta = "Tu suerte aún... no esta hecha!"

    } else if (suerte == 4) {

        respuesta = "Mmm... no es probable"

    } else {
        respuesta = "Ni en tus sueños!"
    }
    //////////////

    return respuesta

}

function mostrar(mensaje) {
    console.log(mensaje)
}

//cambiamos el nombre a .adivinar
exports.adivinar = main
