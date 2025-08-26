const API_PRODUCTS = "https://fakestoreapi.com/products";
/* 
?Código generado por Julio

fetch(API_PRODUCTS)
    .then((response) => response.json()) // Convertir la respuesta a JSON
    .then((products) => {
      // Recorrer el array de productos con un bucle for
      for (let i = 0; i < products.length; i++) {
        console.log(products[i]); // Imprime cada producto
      }
    });*/
/*
let productos = []
fetch(API_PRODUCTS)
    .then((response) => response.json()) 
    .then((products) => productos = products)
*/

//console.log(productos);

// TODO async/await
// ? async function getProducts () {}
// ? const getProducts = async () => {}

const getProducts = async () => {
  const response = await fetch(API_PRODUCTS);
  const products = await response.json();

  //console.log(products);

  for (let i = 0; i < 5; i++) {
    console.log(
      "Precio: " + products[i].price,
      "Cantidad: " + products[i].rating.count
    );
  }
};
//getProducts();

// TODO Manejo de errores: try/catch

async function handleErrors(id) {
  console.log("Antes de la petición");

  try {
    //!console.log(status); //este error no dejara ejecutar todo lo demas y se irá directamente al catch

    //const response = await fetch(API_PRODUCTS + "/" + id);
    const API_PRODUCTS_ID = `${API_PRODUCTS}/${id}`;
    const response = await fetch(API_PRODUCTS_ID);

    //console.log(response);

    //!if (!response.ok) console.log("Página no encontrada")
    //if (!response.ok) throw new Error("Página no encontrada");
    if (!response.ok)
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);

    const product = await response.json();
    // console.log(product);
    console.log(`✅ Producto obtenido: ${product.title}`);
  } catch (error) {
    // console.log("Estamos en el catch");
    // console.log(error);
    console.log(`❌ Error capturado: ${error.message}`);

    if (error.message.includes("404")) {
      console.log(
        `🔍 Producto no encontrado, mostrando productos similares...`
      );
    }
  }
}

handleErrors(1);
