// TODO: NON-BLOCKING I/O (E/S NO BLOQUEANTE)
// ? ❌ Bloqueante (síncrono)
const fs = require("fs");
// const data = fs.readFileSync("archivo.txt", "utf8")
const data = fs.readFileSync("event_driven.js", "utf8");

// console.log(data);
// console.log("Esto se ejecuta después de leer el archivo");

// todo: ✅ No bloqueante (asíncrono)
fs.readFile("event_drivenn.js", "utf8", (err, data) => {
  if (err) throw err;

  console.log(data);
});

console.log("Esto se ejecuta inmediatamente");
