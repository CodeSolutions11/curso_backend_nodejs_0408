// Todo: Bucle for
const names = ["Jesus", "Juan", "Julio"];

// * for tradicional
for (let i = 0; i < 3; i++) {
  console.log(i);
}
for (let i = 0; i < 3; i++) {
  console.log(names[i]);
}

console.log(names[0].length);
console.log(names.length);

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// * for of => obtengo el valor de cada elemento del array
for (name of names) {
  console.log(name);
}

// * for in => obtengo la posición de cada elemento del array
for (pos in names) {
  console.log(names[pos]);
}
