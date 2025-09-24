// Manejo de rutas Básico

import http from "http";
import url from "url";

//console.log(url);
//

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const ruta = parsedUrl.pathname;
  const metodo = req.method;

  //console.log(req);
  console.log("metodo", metodo);
  console.log("parseUrl", parsedUrl);
  console.log("ruta", ruta);

  //res.writeHead(200, { "Content-Type": "application/json" });

  if (ruta === "/" && metodo === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ mensaje: "Página de inicio" }));
  } else if (ruta === "/api/users" && metodo === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ users: ["Mercedes", "Juan", "Jesus"] }));
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: "Ruta no encontrada" }));
  }
});

server.listen(3000);
