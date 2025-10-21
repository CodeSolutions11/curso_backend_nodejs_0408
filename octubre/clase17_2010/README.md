### Middleware en Express.js

## Herramientas necesarias

- **Node.js** (Versión 20+)
- **pnpm** (gestor de paquetes)
- **Insomnia** o **Postman** para probar APIs
- **Editor de código** (VS Code recomendado o NeoVim)

### 1. Qué es Middleware?

## Conceptos clave

- **Middleware**: Función que se ejecuta entre la petición y la respuesta
- **Request-Response Cycle**: flujo completo de una petición
- **Next Function**: Función que pasa control al siguiente middleware

### Concepto fundamenta

El **middleware** es una Función que se ejecuta durante el ciclo de vida de una petición HTTP, entre la petición del cliente y la respuesta del servidor

```javascript
// Estructura básica de Middleware
function middleware(req, res, next) {
  // Lógica del middleware
  console.log("Middleware ejecutado");
  next(); // Pasa al siguiente middleware
}
```

### Flujo de ejecución

- Cliente -> Middleware 1 -> Middleware 2 -> Ruta ->Respuesta

## Middleware de terceros

# **Conceptos clave**

- **Third-party middleware**: Paquetes externos que extienden funcionalidad
- **Body parsing**: Conversión de datos de perición a objetos javascript
- **Logging**: Registro de actividad del servidor
- **CORS**: Cross-Origin Resourse Sharing para peticiones entre dominios
