import express from "express";
const app = express();

// Middleware global - se ejecuta en todas las rutas
app.use((req, res, next) => {
  req.timestamp = Date.now();
  console.log("Middleware global ejecutado");
  next();
});

// Middleware para rutas especificas
//
app.use("/api", (req, res, next) => {
  console.log("Middleware solo para las rutas /api/*  ");
  next();
});

app.get("/", (req, res) => {
  res.json({
    message: "Inicio",
    timestamp: req.timestamp,
  });
});

app.get("/api/users", (req, res) => {
  res.json({
    users: [],
    timestamp: req.timestamp,
  });
});

app.listen(3001, () => {
  console.log("server ejecuntandose ");
});
