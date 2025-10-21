import express from "express";
const app = express();

// Ruta que genera el error
app.get("/error", (req, res, next) => {
  const error = new Error("Algo salió mal");
  error.status = 500;
  next(error); // Pasa el error al middleware de error
});

// Middleware de manejo de errores (DEBE IR AL FINAL )
//
app.use((err, req, res, next) => {
  console.error("Error capturado:", err.message);

  res.status(err.status || 500).json({
    error: {
      message: err.message,
      status: err.status || 500,
      timestamp: new Date().toISOString(),
    },
  });
});

app.listen(3002);
