// TODO: Ejemplo de programación basada en eventos
const EventEmitter = require("events")
const emisor = new EventEmitter()

// console.log(EventEmitter)
// console.log(emisor)

emisor.on("mensaje", (data)=>{
 console.log("mensaje recibido: ", data)
})

emisor.emit("mensaje", "HOLA MUNDO desde node.js!!")