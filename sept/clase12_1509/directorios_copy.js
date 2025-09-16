// TODO: Directorios -> Carpetas
const fs = require("fs").promises

// console.log(fs);
// console.log(path)

const leerArchivo = async () => {
    try {
        const data = await fs.readFile("../clase11_1209/file.txt", "utf8")
        console.log(data)
    } catch (error) {
        console.log("Error", error)
    }
}
leerArchivo()