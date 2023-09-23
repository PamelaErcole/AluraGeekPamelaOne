import { productoSweet } from "../productos.js ";

const nuevaURL = new URL(window.location);

const id = nuevaURL.searchParams.get("id");

const imagenProducto = document.querySelector("[data-url-producto]");
const nombreProducto = document.querySelector("[data-nombre-producto]");
const precioProducto = document.querySelector("[data-precio-producto]");
const descripcionProducto = document.querySelector("[data-descripcion-producto]");

productoSweet.listarUnProducto(id).then((info) => {
  imagenProducto.setAttribute("src", info.imagen); 
  nombreProducto.value = info.nombre;
  precioProducto.value = info.precio;  
  descripcionProducto.value = info.descripcion;
});

const formulario = document.querySelector("[data-form-producto]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  productoSweet
    .modificaProducto(
      id,
      nombreProducto.value,
      precioProducto.value,
      descripcionProducto.value
    )
    .then(() => {
      window.location.href = "../Alurageek/index.html"
    });
});
