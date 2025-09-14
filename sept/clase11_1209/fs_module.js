// todo: fs Module - Módulo fs -> fs (File System)
// ? Operaciones Síncronas
/* 
    ! Descomentar

// const fs = require("fs");

// * Leer archivo
try {
  const data = fs.readFileSync("./file.txt", "utf8");
  // console.log(data)
} catch (err) {
  // console.error("Error: ", err.message)
}

// * Escribir en el archivo
fs.writeFileSync("./file.txt", "Contenido del archivo");

fs.writeFileSync("./new_file.txt", "Contenido del nuevo archivo");

// * Verificar si existe el archivo
if (fs.existsSync("./new_file.txt")) {
  // console.log("El archivo existe")
}

// ? Operaciones Asíncronas (Callbacks)

//* Leer archivo
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    // console.error("Error:", err);
    return;
  }

//   console.log(data);
});

// * Escribir archivo
fs.writeFile("./new_file2.txt", "Conenido actualizado", (err) => {
  if (err) {
    // console.error("Error:", err);
    return;
  }

//   console.log("Archivo creado exitosamente");
});
*/

// ? Operaciones Asíncronas (Promises)
const fs = require("fs").promises;

// ** Usando async/await
const leerArchivo = async () => {
  try {
    const data = await fs.readFile("./file.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error("Error:", err.message);
  }
};


// ** Usando .then()
fs.readFile("new_file.txt", "utf8")
    .then(data => console.log(data))
    .catch(err => console.error("Error:", err.message))


leerArchivo()