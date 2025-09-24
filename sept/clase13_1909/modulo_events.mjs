import EventEmmiter from "events";

//console.log(EventEmmiter);
// Crear un emisor personalizado

class MiEmisor extends EventEmmiter {}

const miEmisor = new MiEmisor();

// Escuchar events

miEmisor.on("mensaje", (data) => {
  console.log("Mensaje recibido:", data);
});

miEmisor.on("error", (err) => {
  console.error("Error:", err.message);
});

// Emitir eventos
miEmisor.emit("error", new Error("Algo salió mal"));

miEmisor.emit("mensaje", "Primer mensaje");

miEmisor.emit("mensaje", "Otro mensaje");

// Evento que se ejecuta una sola vez
miEmisor.once("inicio", () => {
  console.log("Aplicación iniciada");
});

miEmisor.emit("inicio");
miEmisor.emit("inicio");
