// ! CommomJS (tradicional)
//? ES Modules (moderno)
// TODO: Directorios -> Carpetas
// import fs from "fs.promises";
import * as fs from "node:fs/promises";
import path from "path";
// fs = fs.promises
// console.log(fs);
// console.log(path)

const explorarDirectorio = async (dirPath) => {
  try {
    const files = await fs.readdir(dirPath);
    console.log(files);

    for (const file of files) {
      const pathComplete = path.join(dirPath, file);
      console.log("pathComplete", pathComplete)

      const stats = await fs.stat(pathComplete);
      console.log("stats", stats)

      if (stats.isDirectory()) {
        console.log(`📂 ${file}/`);
      } else {
        console.log(`📝 ${file} (${stats.size} bytes)`);
      }
    }
  } catch (error) {}
};

// explorarDirectorio("./")
explorarDirectorio("../../test_directory");
