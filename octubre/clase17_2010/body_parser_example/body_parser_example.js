import express from "express";
const app = express();

// Middleware para persear JSON
app.use(express.json());

// Middleware para parsear datos de formularios
//
app.use(express.urlencoded({ extended: true }));

app.post("/users", (req, res) => {
  console.log("Datos recibidos:", req.body);

  res.json({
    message: "Usuario creado",
    data: req.body,
  });
});

app.listen(3003, () => {
  console.log("Servidor ejecutandose en http://localhost:3003");
});
