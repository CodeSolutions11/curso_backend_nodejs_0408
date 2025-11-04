// Validaciones
//
export const validarTarea = (datos) => {
  const errores = [];
  if (!datos.titulo || !datos.titulo.trim()) {
    errores.push("El título es obligatorio");
  }

  if (datos.titulo && datos.titulo.trim().length < 3) {
    errores.push("El título debe tener al menos 3 caracteres");
  }

  return {
    esValido: errores.length === 0,
    errores,
  };
};
