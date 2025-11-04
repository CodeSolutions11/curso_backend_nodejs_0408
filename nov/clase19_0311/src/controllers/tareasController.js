import { tareas, generarNuevoId } from "../models/Tarea.js";
import { validarTarea } from "../utils/validators.js";

// GET /api/tareas - Obtener todas la tareas con filtros
export const obtenerTareas = (req, res) => {
  const { completada, buscar } = req.query;
  let tareasFiltradas = [...tareas];

  // filtrar por estado usando operador ternario
  if (completada !== undefined) {
    tareasFiltradas = tareasFiltradas.filter(
      (t) => t.completada === (completada === "true"),
    );
  }

  if (buscar) {
    const termino = buscar.toLowerCase();
    tareasFiltradas = tareasFiltradas.filter((t) =>
      [t.titulo, t.descripcion].some((campo) =>
        campo.toLowerCase().includes(termino),
      ),
    );
  }

  res.json({
    total: tareasFiltradas.length,
    filtros: { completada, buscar },
    tareas: tareasFiltradas,
  });
};

// GET /api/tareas/stats - Estadísticas
export const obtenerEstadisticas = (req, res) => {
  const total = tareas.length;
  const completadas = tareas.filter((t) => t.completada).length;
  const pendientes = total - completadas;

  res.json({
    total,
    completadas,
    pendientes,
    porcentajeCompletado: `${total > 0 ? Math.round((completadas / total) * 100) : 0}%`,
  });
};

// GET /api/tareas/:id - Obtener tarea por ID
export const obtenerTareaPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const tarea = tareas.find((t) => t.id === id);

  if (!tarea) {
    return res.status(404).json({
      error: "Tarea no encontrada",
      id,
    });
  }

  res.json(tarea);
};

// POST /api/tareas - Crear nueva tarea
export const crearTarea = (req, res) => {
  const { titulo, descripcion } = req.body;

  const validacion = validarTarea({ titulo, descripcion });

  if (!validacion.esValido) {
    return res.status(400).json({
      error: "Datos inválidos",
      errores: validacion.errores,
    });
  }

  const nuevaTarea = {
    id: generarNuevoId(),
    titulo: titulo.trim(),
    descripcion: descripcion?.trim ?? "", // Nullish coalescing
    completada: false,
    fechaCreacion: new Date().toISOString(),
  };

  tareas.push(nuevaTarea);

  res.status(201).json({
    mensaje: "Tarea creada exitosamente",
    tarea: nuevaTarea,
  });
};

// PUT /api/tareas/:id - Actualizar tarea completa

export const actualizarTarea = (req, res) => {
  const id = parseInt(req.params.id);
  const { titulo, descripcion, completada } = req.body;

  const indice = tareas.findIndex((t) => t.id === id);
  if (indice === -1) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  const validacion = validarTarea({ titulo, descripcion });

  if (!validacion.esValido) {
    return res.status(400).json({
      error: "Datos inválidos",
      errores: validacion.errores,
    });
  }

  // Usando spread operator y object shorthand
  tareas[indice] = {
    ...tareas[indice],
    titulo: titulo.trim(),
    descripcion: descripcion?.trim() ?? "",
    completada: Boolean(completada),
    fechaModificacion: new Date().toISOString(),
  };

  res.json({
    mensaje: "Tarea actualizada exitosamente",
    tarea: tareas[indice],
  });
};

// PATCH /api/tareas/:id - Actualizar parcialmente
//
export const actualizarTareaParcial = (req, res) => {
  const id = parseInt(req.params.id);
  const actualizaciones = req.body;

  const indice = tareas.findIndex((t) => t.id === id);

  if (indice === -1) res.status(404).json({ error: "Tarea no encontrada" });

  // Validar solo campos presentes usando optional chaining
  if (actualizaciones.titulo !== undefined) {
    const validacion = validarTarea({ titulo: actualizaciones.titulo });

    if (!validacion.esValido) {
      return res.status(400).json({
        error: "Datos inválidos",
        errores: validacion.errores,
      });
    }

    tareas[indice].titulo = actualizaciones.titulo.trim();
  }

  // Usando Nullish coalescing assignment
  actualizaciones.descripcion !== undefined &&
    (tareas[indice].descripcion = actualizaciones.descripcion.trim());

  actualizaciones.completada !== undefined &&
    (tareas[indice].completada = Boolean(actualizaciones.completada));

  tareas[indice].fechaModificacion = new Date().toISOString();

  res.json({
    mensaje: "Tarea actualizada parcialmente",
    tarea: tareas[indice],
  });
};

// DELETE /api/tareas/:id - Eliminar tarea
//
export const eliminarTarea = (req, res) => {
  const id = parseInt(req.params.id);
  const indice = tareas.findIndex((t) => t.id === id);

  if (indice === -1) res.status(404).json({ error: "Tarea no encontrada" });

  const [tareaEliminada] = tareas.splice(indice, 1); // Destructuring

  res.json({
    mensaje: "Tarea eliminada exitosamente",
    tarea: tareaEliminada,
  });
};
