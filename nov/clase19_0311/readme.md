## Proyecto del mes: API REST básica para gestionar tareas

### Objetivo: Crear una API REST completa para gestionar tareas usando CRUD en memoria

## Herramientas necesarias

- **Node.js**
- **pnpm**
- **Express.js**
- **Insomnia o Postman**

**Estructura de carpetas**

```
clase18_2410/
      |-- package.json
      |-- readme.md
      |-- .gitignore
      |-- src/
            |-- app.js        # Config de Express
            |-- server.js     # Punto de entrada
            |-- controllers/  # Lógica de negocio
                    |-- tareasController.js
            |-- routes/       # Definición de rutas
                    |-- tareasRoutes.js
            |-- middleware/   # Middleware personalizados
                    |-- errorHandler.js
            |-- models/       # Modelo de datos
                    |-- Tarea.js
            |-- utils/        # Utilidades
                    |-- validators.js
                    |-- validators.js
```
