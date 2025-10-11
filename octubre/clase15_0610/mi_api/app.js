// Servidor básico
//
import express from "express";

const app = express();
const PORT = 3005;

// Middleware para parsear JSON
app.use(express.json());

// GET - Obtener datos
app.get("/", (req, res) => {
  res.send("Hola desde Express!!");
});

app.get("/users", (req, res) => {
  res.json({
    message: "Lista de Usuarios",
    users: ["Mercedes", "Julio", "Juan"],
  });
});

// POST - Crear datos
app.post("/users", (req, res) => {
  const newUser = req.body;
  res.status(201).json({
    message: "Usuario Creado",
    user: newUser,
  });
});

// PUT - Actualizar datos completos
app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  res.json({
    message: `Usuario ${userId} actualizado`,
    user: userData,
  });
});

// DELETE - Eliminar datos
app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.json({
    message: `Usuario ${userId} eliminado`,
  });
});

// Múltiples parámetros
app.get("/users/:id/posts/:postId", (req, res) => {
  console.log(req.params);
  const { id, postId } = req.params;
  res.json({ userId: id, postId });
});

// parámetros opcionales
app.get("/products/:productId?", (req, res) => {
  const productId = req.params.productId;
  if (productId) {
    res.json({ product: `Producto ${productId}` });
  } else {
    res.json({ products: "Todos los productos" });
  }
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:" + PORT);
});
