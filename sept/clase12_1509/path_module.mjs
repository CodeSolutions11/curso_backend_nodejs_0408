import { fileURLToPath } from 'url';
import path from "path"


// * Info sobre rutas
console.log(path.basename("../../test_directory/test_file.txt"))
console.log(path.dirname("../../test_directory/test_file.txt"))
console.log(path.extname("../../test_directory/test_file.txt"))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename)
console.log(__dirname)

// * Construir rutas de forma segura
const fileRoute = path.join(__dirname, "data", "users.json")
console.log(fileRoute)

// * Resolver rutas absolutas
const absoluteRoute = path.resolve("data", "config.json")
console.log(absoluteRoute)


// * Información del sistem
console.log(path.sep) // ? Separador de rutas ( / Unix, \ Windows)
console.log(path.delimiter) // ? Separador de PATH (: Unix, ; Windows)