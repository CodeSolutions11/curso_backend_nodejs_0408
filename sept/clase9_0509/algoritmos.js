// Todo: Algoritmos de busqueda
// ? Busqueda lineal
const busquedaLineal = (array, objetivo) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === objetivo) {
      return "El objetivo ha sido encontrado en la posicion: " + i;
    }
  }
  return "El objetivo no existe";
};
// * uso
const nros = [3, 7, 1, 9, 4];
const names = ["jesus", "Juan", "Julio"];
console.log(busquedaLineal(nros, 9));
console.log(busquedaLineal(names, "Juann"));

// ? Busqueda binaria ( array ordenado )

const busquedaBinaria = (array, objetivo) => {
  let izq = 0;
  let der = array.length - 1;

  while (izq <= der) {
    const medio = Math.floor((izq + der) / 2);
    console.log(medio);

    if (array[medio] === objetivo) {
      return "El objetivo ha sido encontrado en la pos: " + medio;
    } else if (array[medio] < objetivo) {
      izq = medio + 1;
    } else {
      der = medio - 1;
    }
  }
  return false;
};

// * Uso
const nrosOrdenados = [1, 3, 5, 7, 9, 11];
console.log(busquedaBinaria(nrosOrdenados, 11));


// ! Algoritmos que todo programador deberia dominar => busquedas, ordenación, 