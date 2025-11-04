// Datos iniciales en memoria

export let tareas = [
  {
    id: 1,
    titulo: "Aprender Node.js",
    descripcion: "Completar curso de backend",
    completada: false,
    fechaCreacion: new Date().toISOString(),
  },
  {
    id: 2,
    titulo: "Hacer ejercicio",
    descripcion: "Correr 30 minutos",
    completada: true,
    fechaCreacion: new Date().toISOString(),
  },
  {
    id: 3,
    titulo: "Estudiar express",
    descripcion: "Repasar todas la clases del curso",
    completada: false,
    fechaCreacion: new Date().toISOString(),
  },
];

// Arrow function para generar un nuevo ID
export const generarNuevoId = () =>
  tareas.length > 0 ? Math.max(...tareas.map((t) => t.id)) + 1 : 1;

// Funciones helper usando Arrow fonctions
export const buscarTareaPorId = (id) => tareas.find((t) => t.id === id);

export const filtrarTareas = ({ completada, buscar }) => {
  return tareas.filter((tarea) => {
    const cumpleEstado =
      completada === undefined || tarea.completada === (completada === "true");
    const cumpleBusqueda =
      !buscar ||
      [tarea.titulo, tarea.descripcion].some((campo) =>
        campo.toLowerCase().includes(buscar.toLowerCase()),
      );
    return cumpleEstado && cumpleBusqueda;
  });
};
