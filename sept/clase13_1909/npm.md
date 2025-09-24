### NPM

es el gestor de paquetes de Node.js y el registro de software más grande del mundo.

#### Comandos Básicos de NPM

```bash
# Verificar version
npm --version


# Inicializar un proyecto
npm init
npm init -y # Con valores por defecto

# Instalar paquetes
npm install express # Dependencia de producción
npm install nodemon --save-dev # Dependencia de desarrollo
npm install -g typescript # Instalacion global

# Instalar desde el package.json
npm install

# Desinstalar paquetes
npm uninstall express
npm uninstall -g typescript

# Actualizar paquetes
npm update
npm update express

# Listar paquetes instalados
npm list
npm list -g --depth=0 # Globales
```
