// Todo: Maps: son colecciones de pares clave-valor donde las claves pueden ser de cualquier tipo
// ? creación de Maps
const mapa = new Map();
console.log(mapa);

const mapaConDatos = new Map([
  ["nombre", "Jesus"],
  ["edad", 30],
  [1, "uno"],
  [null, "null"],
  [false, "falso"],
]);

console.log(mapaConDatos);

// ? Métodos de Maps
const cache = new Map();

// * set() - establecer clave-valor
cache.set("user:1", { nombre: "Juan", edad: 25 });
cache.set("user:2", { nombre: "Julio", edad: 30 });
console.log(cache);

// * get() - obtener valor
const user = cache.get("user:1");
console.log(user);

// * has() - verificar existencia
let response = cache.has("user:3");
console.log(response);

// * delete() - eliminar
cache.delete("user:2");
console.log(cache);

// * size() - obtener tamaño
response = cache.size;
console.log(response);

// * clear() - limpiar todo
cache.clear();
console.log(cache);

// * keys(), values(), entries()
const config = new Map([
  ["host", "localhost"],
  ["port", 3000],
  ["debug", true],
]);

for (clave of config.keys()) {
  console.log(clave);
}
for (valor of config.values()) {
  console.log(valor);
}
for ([clave, valor] of config.entries()) {
  console.log(`${clave}: ${valor}`);
}

// ? Maps vs objects

// * Ventajas de Maps sobre objetos:

// * 1. Claves de cualquier tipo
const map = new Map();
map.set(1, "nro");
map.set("1", "str");
map.set(true, "bool");

// * 2. Tamaño directo
console.log(map.size);

// * 3. Iteración directa
for ([key, value] of map) {
  console.log(key, value);
}

// * 4. No tiene propiedades por defecto
const obj = {};
console.log(obj.toString); // Función heredada

const cleanMap = new Map();
console.log(cleanMap.get("toString")); // undefined

// ? Casos Prácticos
function contarFrecuencias(array) {
  const frecuencias = new Map();
  for (item of array) {
    frecuencias.set(item, (frecuencias.get(item) || 0) + 1);
  }
  return frecuencias;
}

const nroFrecuencias = contarFrecuencias([
  "Js",
  "Ts",
  "NodeJS",
  "Js",
  "Js",
  "Ts",
]);
console.log(nroFrecuencias);
