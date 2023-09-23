import { productoSweet } from "../productos.js";
import { formatPrice } from "../formatterPrices.js";

const nuevoProducto = (nombre, precio, imagen, id) => {
  const card = document.createElement("div");
  const contenido = `
        <div class="sweet__chocolate-imgenes">  
            <img src="${imagen}" alt="imagenEnlace">     
            <p class="sweet__nombre">${nombre}</p>
            <p class="sweet__precio">${formatPrice(precio)}</p>
            <a class="ver__producto" href="./galeria.html?id=${id}">Ver Producto</a>  
        </div>   
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;

  return card;
};

const dulzuras = document.querySelector("[data-producto]");

const render = async () => {
  try {
    const listaProductos = await productoSweet.listaProductos();
    listaProductos.forEach((elem) => {
      dulzuras.appendChild(
        nuevoProducto(
          elem.nombre,
          elem.precio,
          elem.imagen,
          elem.id
        )
      );
    });
  } catch (error) {
    console.log(error);
  }
};

render();