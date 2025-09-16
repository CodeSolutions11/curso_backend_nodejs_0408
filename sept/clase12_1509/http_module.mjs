// TODO: Servidor HTTP Básico

import http from "http"
// console.log(http)
// console.log(http.createServer())

const servidor = http.createServer((req, res)=>{
    // console.log(res)
    // console.log(req)
    // * Cofigurar headers
    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
        "Access-Control-Allow-Origin": '*'
    })

    // Enviar respuesta
    res.end("<h1>Hola Mundo desde NodeJS!!</h1>")

})

// console.log(servidor)
servidor.listen(3000, ()=>{
    console.log("Servidor ejecutandose en http://localhost:3000")
})