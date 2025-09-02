//TODO Estructuras de Datos y Algoritmos básicos en JS
//* Arrays -> son estructuras de datos ordenadas que pueden contener multiples valores de cualquier tipo -> []

const nros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const names = [
  "Juan",
  "Pedro",
  "Maria",
  "Jose",
  "Luis",
  "Ana",
  "Carlos",
  "Marta",
  "Lucas",
  "Sofia",
];
const booleans = [true, false, true, false, true];

// console.log(nros[5]);
// console.log(names[1]);
// console.log(booleans[2]);

const mixto = [1, "texto", true, null, { name: "Juan", age: 30 }];
const vacio = [];
const frutas = [
  ["fresa", 20],
  ["manzana", 30],
  ["pera", [40, "algo mas"]],
];

// console.log(mixto[4].name)
// console.log(vacio)
// console.log(frutas[2][1][1])

const products = [
  { name: "Laptop", price: 1000, stock: 10 },
  { name: "Mouse", price: 20, stock: 20 },
  { name: "Teclado", price: 50, stock: 30 },
  { name: "Monitor", price: 200, stock: 40 },
  { name: "Impresora", price: 100, stock: 50 },
  { name: "Escritorio", price: 300, stock: 60 },
  { name: "Silla", price: 200, stock: 70 },
  { name: "Mesa", price: 400, stock: 80 },
  { name: "Cama", price: 500, stock: 90 },
  { name: "Sofa", price: 600, stock: 100 },
];

//console.log(`Producto: ${products[3].name} - Precio: ${products[3].price}$ - Stock: ${products[3].stock}`)

const conConstructor = new Array(5); // [undefined, undefined, undefined, undefined, undefined]
//console.log(conConstructor)

// console.log(products.length)
// console.log(mixto.length)
// console.log(vacio.length)
// console.log(conConstructor.length)

// TODO Métodos fundamentales de Arrays: Métodos que modifican el array original - Métodos que no modifican el array original

//? Métodos que modifican el array original
const carros = ["Audi", "BMW"];

//push -> agrega un elemento al final
carros.push("Mercedes");
//console.log(carros)

//pop -> elimina el último elemento
const carroEliminado = carros.pop();
//console.log(carroEliminado, carros)

//unshift -> agrega un elemento al inicio
carros.unshift("Volvo");
//console.log(carros)

//shift -> elimina el primer elemento
const primerCarro = carros.shift();
//console.log(primerCarro, carros)

//splice -> agregar/quitar un elemento en una posición específica
carros.splice(1, 0, "Ferrari"); // (posición, cantidad a eliminar, elemento a agregar)
//console.log(carros)

carros.splice(2, 1); // (posición, cantidad a eliminar)
//console.log(carros)

// ? Métodos que no modifican el array original
const animales = ["perro", "gato", "conejo", "vaca", "caballo"];

// map() - transformar elementos
const animalesMayusculas = animales.map((animal) => animal.toUpperCase());
// console.log(animalesMayusculas);
// console.log(animales);

const animalesConCuatroLetras = animales.map((animal) => {
  if (animal.length === 4) return animal;
});
// console.log(animalesConCuatroLetras);

// filter() - filtrar elementos
const animalesConC = animales.filter((animal) => animal.includes("c"));
console.log(animalesConC);

//find() - encontrar el primer elemento que coincida con la busqueda
const animalEncontrado = animales.find((animal) => animal.includes("c"));
console.log(animalEncontrado);

// reduce() - reducir a un solo valor
const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((acc, num) => acc + num, 1);
console.log(suma);

// slice() - extraer una porción del array
const porcionAnimales = animales.slice(1, 3);
console.log(porcionAnimales);

const porcionNumeros = numeros.slice(2, 4);
console.log(porcionNumeros);

// concat() - concatenar arrays
const newAnimales = ["cocodrilo", "tigre"]
const animalesUnidos = animales.concat(newAnimales);
console.log(animales);
console.log(animalesUnidos);

const nrosUnidos = numeros.concat([80, 95, 115]);
console.log(numeros);
console.log(nrosUnidos);

// * desestructuración de objetos
const user = {nombre: "Jesus", edad: 28};

const {nombre, edad} = user  //const name = user.nombre
console.log(nombre, edad)

// * desestructuración de arrays

const colores = ["rojo", "verde", "azul"];

const [color1, color2, color3] = colores;
const [,,color4] = colores;
console.log(color1, color2, color3)
console.log(color4)

const funcionesSaludar = [
  function saludar1() {
    console.log("Hola 1");
  },
  function saludar2() {
    console.log("Hola 2");
  },
  function saludar3() {
    console.log("Hola 3");
  },
];

funcionesSaludar[0]()
const [saludar1, saludar2, saludar3] = funcionesSaludar;

saludar2()
saludar3()

// ? Ejercicio practico

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"
]

const obtenerProductos = async url => {
    const response = await fetch(url)
    const data = await response.json()
    //console.log(data)

    // Filtrar productos por categoria
    const electronics = data.filter(p => p.category === categories[0])
    console.log('Electronics:', electronics)

    // calcular precio total de productos de categoria electronics
    const totalElectronics = electronics.reduce((acc, prod) => acc + prod.price, 0)
    console.log('Total Electronics: $', totalElectronics)

    // Obtener solo los nombres de los productos de la categoria de electronics
    const productNames = electronics.map(p => p.title)
    console.log('Product Names:', productNames)

    // Buscar producto con mayor precio
    const maxPrice = electronics.reduce((max, prod) => 
        prod.price > max ? prod.price : max, 0)
    console.log('Max Price:', maxPrice)
}
obtenerProductos('https://fakestoreapi.com/products')

