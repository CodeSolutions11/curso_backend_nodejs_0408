// Ejemplo de node.js
import http from "http";

//console.log(http);
//

const server = http.createServer((req, res) => {
  // Configurar los headers
  res.writeHead(200, {
    "content-type": "text/html; charset=utf-8",
    "access-control-allow-origin": "*",
  });

  // Enviar respuesta
  res.end("<h1>Mensaje desde el servidor node.js</h1>");
});

server.listen(3000, () => {
  console.log("Servidor ejecutandose en el puerto http://localhost:3000");
});
