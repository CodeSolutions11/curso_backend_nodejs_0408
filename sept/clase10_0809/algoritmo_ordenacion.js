const bubbleSort = (array) => {
  const arr = [...array]; // * No modificar el original
  console.log("arr", arr);

  const n = arr.length;
  console.log("n", n);

  for (let i = 0; i < n - 1; i++) {
    console.log("i:", i);
    for (let j = 0; j < n - i - 1; j++) {
      console.log("j:", j, "i: ", i);
      if (arr[j] > arr[j + 1]) {
        // Intercambiar
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        console.log("arr", arr);
      }
    }
  }
  return arr;
};

// const result = bubbleSort([5, 2, 3, 72, 15, 8]);
// console.log(result);
// const result2 = bubbleSort(["caracas", "falcon", "anzoategui"]);
// console.log(result2);

const selectionSort = (array) => {
  const arr = [...array]; // * No modificar el original
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
};
// const result2 = selectionSort([
//   "Caracas",
//   "Valencia",
//   "Apure",
//   "Falcon",
//   "Anzoategui",
// ]);
// console.log(result2);

// TODO: Método mas eficiente
const quickSort = (array) => {
  if (array.length <= 1) return array;
  console.log("Arr inicial:", array);

  const pivot = array[Math.floor(array.length / 2)];
  console.log("pivot:", pivot);
  const menores = array.filter((x) => x < pivot);
  console.log("menores", menores);
  const iguales = array.filter((x) => x === pivot);
  console.log("iguales:", iguales);
  const mayores = array.filter((x) => x > pivot);
  console.log("mayores: ", mayores);

  return [...quickSort(menores), ...iguales, ...quickSort(mayores)];
};
/*
const result2 = quickSort([
  "Caracas",
  "Valencia",
  "Apure",
  "Falcon",
  "Anzoategui",
]);
*/
// console.log(result2);

// TODO: Ejercicio: Analisis de Datos de Ventas

const ventas = [
  {
    id: 1,
    producto: "Laptop",
    categoria: "Tecnología",
    precio: 1000,
    fecha: "2025-09-08",
  },
  {
    id: 2,
    producto: "Mouse",
    categoria: "Tecnología",
    precio: 25,
    fecha: "2025-09-05",
  },
  {
    id: 3,
    producto: "Libro",
    categoria: "Educación",
    precio: 15,
    fecha: "2025-09-03",
  },
  {
    id: 4,
    producto: "Silla",
    categoria: "Muebles",
    precio: 150,
    fecha: "2025-09-01",
  },
  {
    id: 5,
    producto: "Laptop",
    categoria: "Tecnología",
    precio: 1000,
    fecha: "2025-09-08",
  },
  {
    id: 6,
    producto: "Mouse",
    categoria: "Tecnología",
    precio: 25,
    fecha: "2025-09-05",
  },
  {
    id: 7,
    producto: "Libro",
    categoria: "Educación",
    precio: 15,
    fecha: "2025-09-03",
  },
  {
    id: 8,
    producto: "Silla",
    categoria: "Muebles",
    precio: 150,
    fecha: "2025-09-01",
  },
];

const analizarVentas = (ventas) => {
  // * 1. Ventas por categoría usando Map
  const ventasPorCategoria = ventas.reduce((map, venta) => {
    const categoria = venta.categoria;
    if (!map.has(categoria)) map.set(categoria, []);

    map.get(categoria).push(venta);
    return map;
  }, new Map());

  // * 2. Productos únicos usando Set
  const productosUnicos = new Set(ventas.map((v) => v.producto));

  // * 3. Resumen por categoría usando Object
  const resumenPorCategorias = ventas.reduce((acc, venta) => {
    const cat = venta.categoria;
    if (!acc[cat]) acc[cat] = { total: 0, cantidad: 0, productos: [] };

    // acc[cat].total = acc[cat].total + venta.precio
    acc[cat].total += venta.precio;
    acc[cat].cantidad += 1;
    acc[cat].productos.push(venta.producto);
    return acc;
  }, {});

  // * 4. top productos por precio (ordenamiento)
  const topProductos = [...ventas]
    .sort((a, b) => b.precio - a.precio)
    .slice(0, 3);

  return {
    ventasPorCategoria,
    productosUnicos,
    resumenPorCategorias,
    topProductos,
  };
};

console.log(analizarVentas(ventas));
