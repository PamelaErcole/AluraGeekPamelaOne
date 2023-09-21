//GET
const listaProductos = () =>
  fetch("http://127.0.0.1:5500/galeria.html")
    .then((resp) => resp.json())
    .catch((error) => console.log(error));

const listarUnProducto = (id) => {              
  return fetch(`http://127.0.0.1:5500/galeria.html/${id}`).then((respuesta) => {
    return respuesta.json();
  });
};

//POST
const creaProdutos = (nombre, imagen, precio) => {  
    return fetch(`http://127.0.0.1:5500/galeria.html`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        imagen,
        precio,
      }),
    }).then((respuesta) => {
      if (respuesta.ok) {
        return respuesta.body;
      }
      throw new Error("No se ha cargado el producto");
    });
  };


// PUT/PATCH
const modificaProducto = async (id, nombre, precio, descripcion) => {
    return fetch(`http://127.0.0.1:5500/galeria.html/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        precio,
        descripcion,
      }),
    })
      .then((respuesta) => {
        return respuesta.json();
      })
      .catch((error) => console.log(error));
  };
  
  // DELETE
  const eliminaProducto = async (id) => {
    return await fetch(`http://127.0.0.1:5500/galeria.html/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  
  export const productoSweet = {
    listaProductos,
    listarUnProducto,
    creaProdutos,
    modificaProducto,
    eliminaProducto,
  };

  