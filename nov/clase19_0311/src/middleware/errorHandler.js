// Middleware para errores

export const manejarError404 = (req, res) => {
  res.status(404).json({
    error: "Endpoint no encontrado",
    metodo: req.method,
    url: req.originalUrl,
    suregencia: "Verifica la documentacion en GET /",
  });
};

export const manejarErrores = (error, req, res, next) => {
  console.error("Error", error);
  res.status(500).json({
    error: "Error interno del servidor",
    mensaje: "Algo salió mal con el servidor",
  });
};

// Middleware de logging usando template literals
export const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp} ${req.method} ${req.url}]`);
  next();
};

// Middleware de validación de JSON usando try-catch
//
export const validarJSON = (error, req, res, next) => {
  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    return res.status(400).json({
      error: "JSON inválido",
      mensaje: "El cuerpo de la petición contiene JSON malformado",
    });
  }
  next(error);
};
