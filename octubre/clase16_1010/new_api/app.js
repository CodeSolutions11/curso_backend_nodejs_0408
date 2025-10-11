import express from "express";

const PORT = 3002;
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Home Page" });
});

app.get("/demo-req", (req, res) => {
  console.log("Info de la solicitud");
  // Object req

  // URL Y Método
  console.log("URL:", req.url);
  console.log("Método:", req.method);

  //Headers
  console.log("Headers:", req.headers);
  console.log("User-Agent:", req.get("User-Agent"));

  // Query parameters (localhost:3002/demo?name=jesus&age=28)
  console.log("Query params", req.query);

  // Parámetros de ruta
  console.log("Route params:", req.params);

  res.json({
    url: req.url,
    method: req.method,
    query: req.query,
    params: req.params,
  });
});

app.get("/demo-res", (req, res) => {
  // Diferentes formas de responder

  // Texto plano
  // res.send("Texto simple")
  //
  // JSON
  // res.json({message: "Respuesta json"})
  //
  // Con código de estado
  // res.status(201).json({created: true})
  //
  // Establecer headers
  res.set("X-Custom-Header", "Mi valor personalizado");

  // Respuesta final
  res.status(200).json({
    message: "Respuesta completa",
    timestamp: new Date().toISOString(),
  });
});

// Manejo de errores
app.get("/error-demo", (req, res) => {
  try {
    // Simular error
    throw new Error("Algo salió mal");
  } catch (error) {
    res.status(500).json({
      error: "Error interno del servidor",
      message: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log("Servidor ejecutandose perfectamente en: localhost:" + PORT);
});
