import express from "express";
import {
  manejarError404,
  manejarErrores,
  logger,
  validarJSON,
} from "./middleware/errorHandler.js";
import tareasRoutes from "./routes/tareasRoutes.js";

const app = express();

// middleware global
app.use(express.json());
app.use(logger);
app.use(validarJSON);

// Documentación de la API usando object shorthand
const endpoints = {
  "GET /api/tareas":
    "Obtener todas las tareas (query: ?completada=true&buscar=texto)",
  "GET /api/tareas/:id": "Obtener tarea por id",
  "GET /api/tareas/stats": "Estadisticas de tareas",
  "POST /api/tareas": "Craer nueva tarea",
  "PUT /api/tareas/:id": "Actualizar tarea completa",
  "PATCH /api/tareas/:id": "Actualizar parcialmente",
  "DELETE /api/tareas/:id": "Eliminar tarea",
};

app.get("/", (req, res) =>
  res.json({
    mensaje: "API de tareas funcionando",
    version: "1.0.0",
    endpoints,
  }),
);

app.use("/api/tareas", tareasRoutes);

// Middleware de manejo de erroes
app.use(manejarError404);
app.use(manejarErrores);

export default app;
