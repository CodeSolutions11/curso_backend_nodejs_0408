// TODO Objectos -> object -> {}
// * Diferencias de crear objetos

const persona1 = {
  nombre: "Juan",
  edad: 20,
  ciudad: "Caracas",
};
persona1.ci = "00112233";

const persona2 = new Object();
persona2.nombre = "Maria";
persona2.edad = 25;
persona2.ciudad = "Barquisimeto";

const persona3 = Object.create(persona1);
persona3.nombre = "Pedro";

// console.log(persona1);
// console.log(persona2);
// console.log(persona3);

// TODO Métodos Importantes de Object
const user = {
  name: "Juan",
  age: 20,
  city: "Caracas",
  direction: "Calle 123",
  email: "user@gmail.com",
  phone: "04141234567",
};

// Object.keys() - obtener las claves de un objeto
const claves = Object.keys(user);
// console.log(claves);

// Object.values() - obtener los valores de un objeto
const valores = Object.values(user);
// console.log(valores);

// Object.entries() - obtener las entradas (pares clave-valor) de un objeto
const entradas = Object.entries(user);
// console.log(entradas);

// Object.assign() - copiar propiedades de un objeto a otro
const copyUser = Object.assign({}, user);
// console.log(copyUser);

// Destructuring - desestructuración de objetos
const { name, age, city } = user;
// console.log(name, age, city);

// Spread operator - operador de propagación
const copyUser2 = { ...user, name: "Adrian", email: "adrian@gmail.com" };
// console.log(copyUser2);

// TODO Métodos avanzados
const user2 = {
  name: "Juan",
  age: 20,
  city: "Caracas",
  direction: "Calle 123",
  email: "XXXXXXXXXXXXXX",
  phone: "04141234567",
};

// * Object.freeze() -> hacer el objeto inmutable
// Object.freeze(user2);
// user2.name = "Pedro"; // ! No se puede modificar
// console.log(user2);

// * Object.seal() -> hacer el objeto no extensible
// Object.seal(user2);
// user2.age = 30; // ! Se puede modificar
// console.log(user2);
// user2.country = "Venezuela"; // ! No se puede agregar
// console.log(user2);

// * Object.hasOwnProperty() -> Verificar propiedad
// console.log(user2.hasOwnProperty("country"));
// * Operador in
// console.log("country" in user2);

// * Operador delete
delete user2.direction;
// console.log(user2);

// PascalCase, snake_case, camelCase
// const mi_variable = "Hola"; // snake_case
// const MiVariable = "Hola"; // PascalCase
// const miVariableFunciona = "Hola"; // camelCase

// TODO Ejercicio Práctico
// * Sistema de usuarios
const users = [
  { id: 1, nombre: "Jesus", rol: "admin", activo: true },
  { id: 2, nombre: "Maria", rol: "student", activo: false },
  { id: 3, nombre: "Pedro", rol: "student", activo: true },
  { id: 4, nombre: "Ana", rol: "admin", activo: true },
  { id: 5, nombre: "Luis", rol: "student", activo: false },
  { id: 6, nombre: "Carmen", rol: "student", activo: true },
  { id: 7, nombre: "Sofia", rol: "analist", activo: true },
];

// * Covertir array a objeto indexado por id
const usersById = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

// console.log(usersById);

// * Contar los usuarios por rol
const usuariosPorRol = users.reduce((acc, user) => {
  acc[user.rol] = (acc[user.rol] || 0) + 1;
  return acc;
}, {});

// console.log(usuariosPorRol);

// TODO: Sets -> Son colecciones de valores únicos, sin duplicados

const set = new Set();
const nros = new Set([1, 2, 3]);
const letters = new Set(["a", "b", "c", "d"]);
console.log(nros);
console.log(letters);

// * Métodos de Set
// add() -> agregar un elemento al set
const colors = new Set();
colors.add("red");
colors.add("green");
colors.add("blue");
colors.add("red"); // ! No se agrega porque ya existe
console.log(colors);

// has() -> verificar si un elemento existe en el set
console.log(colors.has("green"));
console.log(colors.has("yellow"));

// delete() -> eliminar un elemento del set
colors.delete("green");
console.log(colors);

// size -> obtener el tamaño del set
console.log(letters.size);

// clear() -> eliminar todos los elementos del set
colors.clear();
console.log(colors);

// Iteración de sets con: for of  - forEach
const fruits = new Set(["apple", "banana", "orange"]);
for (const fruit of fruits) {
  console.log(fruit);
}

fruits.forEach((fruit) => console.log(fruit));

// TODO: Casos de uso práctico
// * 1. Eliminar duplicados de un array
const numbers = [1, 3, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 4, 8, 9, 10];
const numbersUniques = [...new Set(numbers)];
console.log(numbersUniques);

// * 2. Verificar elementos unicos
const tieneElementosUnicos = (array) => array.length === new Set(array).size;

console.log(tieneElementosUnicos(numbers));
console.log(tieneElementosUnicos(["a", "b", "c"]));

// * 3. Interseccion de arrays
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const intersection = (arr1, arr2) => {
  const set1 = new Set(arr1);

  return arr2.filter((x) => set1.has(x));
};

console.log(intersection(array1, array2));


// * 4. Diferencia entre arrays
const difference = (arr1, arr2) => {
    const set2 = new Set(arr2);

    return arr1.filter(x => !set2.has(x));
}

console.log(difference(array1, array2));