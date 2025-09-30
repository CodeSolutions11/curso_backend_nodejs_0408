import http from "http";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Obtener __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Tipos MIME
const tiposMime = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".gif": "image/gif",
};

// Función de logging;
const log = async (mensaje) => {
  const timestamp = new Date().toISOString();
  const linea = `[${timestamp}] ${mensaje}\n`;

  console.log(linea.trim());

  try {
    await fs.mkdir("logs", { recursive: true });
    await fs.appendFile("logs/server.log", linea);
  } catch (err) {
    console.error("Error escribiendo log:", err);
  }
};

// Crear servidor básico
const servidor = http.createServer(async (req, res) => {
  console.log(`${req.method} ${req.url}`);

  // si es la raiz, servir index.html
  let rutaArchivo = req.url === "/" ? "index.html" : req.url;

  // Construir ruta completa
  const rutaCompleta = path.join(__dirname, "public", rutaArchivo);

  // Seguridad: Verificar que esté dentro de public/
  const directorioPublico = path.resolve(__dirname, "public");
  const rutaResuelta = path.resolve(rutaCompleta);

  if (!rutaResuelta.startsWith(directorioPublico)) {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>403 - Acceso Prohibido</h1>");
    await log(`403 ${req.method} ${req.url} - Acceso Prohibido`);
    return;
  }

  try {
    // Leer archivo
    const contenido = await fs.readFile(rutaCompleta);

    // Obtener extensión y tipo MIME
    const extension = path.extname(rutaCompleta);
    const tipoMime = tiposMime[extension] || "text/plain";

    // Enviar respuesta exitosa
    res.writeHead(200, {
      "content-type": tipoMime,
      "cache-control": "public, max-age=3600",
    });
    res.end(contenido);
  } catch (err) {
    // Archivo no encontrado
    res.writeHead(404, { "content-type": "text/html" });
    res.end(`
      <h1>404 - Archivo no encontrado</h1>
      <p>El archivo ${req.url} no existe</p>
      <a href="/">Volver al inicio</a>
    `);
  }
});

// Iniciar servidor
servidor.listen(3005, () => {
  console.log("servidor en  http://localhost:3005");
});

// Manejo de cierre limpio
process.on("SIGINT", async () => {
  console.log("\n Cerrando servidor...");
  await log("servidor detenido");
  process.exit(0);
});
