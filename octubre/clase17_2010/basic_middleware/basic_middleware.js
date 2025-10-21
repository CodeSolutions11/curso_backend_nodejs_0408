import express from "express";
const app = express();

// Middleware que se ejecuta en todas las rutas
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
});

app.get("/", (req, res) => {
  res.send("HOLA MUNDO!!");
});

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
