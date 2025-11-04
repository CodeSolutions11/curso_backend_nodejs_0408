import app from "./app.js";

const PORT = 3000;

const iniciarServidor = () => {
  console.log("Servidor corriendo en http://localhost:" + PORT);
  console.log("Documentacion disponible en  http://localhost:" + PORT);
};

app.listen(PORT, iniciarServidor);
