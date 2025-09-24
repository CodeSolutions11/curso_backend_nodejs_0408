const http = require("http");
const fs = require("fs").promises;
const path = require("path");
const url = require("url");

class ServidorEstatico {
  constructor(puerto = 3000, directorioPublico = "public") {
    this.puerto = puerto;
    this.directorioPublico = directorioPublico;
    this.servidor = null;

    // Tipos MIME
    this.tiposMime = {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "application/javascript",
      ".json": "application/json",
      ".png": "image/png",
    };
  }

  async iniciar() {
    this.servidor = http.createServer(this.manejarSolicitud.bind(this));

    this.servidor.listen(this.puerto, () => {
      console.log("Servidor ejecutandose");
      this.log("Servidor iniciado");
    });
  }
}
