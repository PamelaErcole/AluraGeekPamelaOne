import { productoSweet } from "./productos.js";
import { formatPrice } from "../formatterPrices.js";

const getProducts = (nombre, precio, imagen, id) => {
  const card = document.createElement("div");

  const contenido = `
    <div class="producto">
        <div class="container">
            <button class="buttonDelete" type="button">
              <img class="deleteImage" src="./imagenes/eliminar.png" alt="Eliminar" />
            </button>
            
            <a href="./modificarProducto.html?id=${id}">
            
              <button class="buttonEdit" type="button">
                <img class="editImage" src="./imagenes/editar.png" alt="Editar" />
              </button>
            
            </a>
        </div>
        
        <img src="${imagen}" alt="img">
        <h1 class="producto-nombre"> ${nombre} </h1>
        <p class="precio">${formatPrice(price)}</p>
    </div>
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;
  return card;
};

const sweet = document.querySelector("[data-galeria-productos]");

sweet.addEventListener("click", async (evento) => {
  let deleteButton = evento.target.className === "deleteImage";
  if (deleteButton) {
    const producto = evento.target.closest("[data-id]");
    let id = producto.dataset.id;
    productoServices
      .deleteProducto(id)
      .then((res) => {
        producto.remove();
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
});

const render = async () => {
  try {
    const listaProductos = await productoSweet.listaProductos();

    listaProductos.forEach((producto) => {
      sweet.appendChild(
        getProducts(
          producto.nombre,
          producto.precio,
          producto.imagen,
          producto.id
        )
      );
    });
  } catch (err) {
    console.log(err);
  }
};

render();