let express = require("express");
let fs = require("fs");
let adivinApp = require("./lib/motorAdivinApp");

let server = express();

let interfaces = express.static("interfaces");

let encode = express.urlencoded();

server.listen(80);

server.use(interfaces);

server.use(encode);

server.get("/", saludar)

server.post("/respuesta", function(request,response){
    let laPregunta = request.body.pregunta;
    let laRespuesta = adivinApp.adivinar();

    /*
    response.write("La pregunta: " + laPregunta);
    response.end("La respuesta: " + laRespuesta);
    */

    fs.readFile("interfaces/interfaz_output.html", function (error, archivo) {
        let plantilla = archivo.toString();

        plantilla = plantilla.replace("{{PREGUNTA}}", laPregunta);
        plantilla = plantilla.replace("{{RESPUESTA}}", laRespuesta);

        response.end(plantilla);
    });

    
});

function saludar(request, response) {

    response.write("<h1>Hola...</h1>")
    response.write("<p>Bienvenidos al server de <b>Silvio</b> y <b>Martin</b> :D</p>")
    response.end("<a href='interfaz_input.html'>Ir a AdivinApp!</a>")

}
