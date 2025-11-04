import { Router } from "express";

import {
  obtenerTareas,
  obtenerEstadisticas,
  obtenerTareaPorId,
  crearTarea,
  actualizarTarea,
  actualizarTareaParcial,
  eliminarTarea,
} from "../controllers/tareasController.js";

const router = Router();

// Rutas CRUD
router.get("/", obtenerTareas);
router.get("/stats", obtenerEstadisticas);

router.get("/:id", obtenerTareaPorId);

router.post("/", crearTarea);

router.put("/:id", actualizarTarea);

router.patch("/:id", actualizarTareaParcial);

router.delete("/:id", eliminarTarea);

export default router;
