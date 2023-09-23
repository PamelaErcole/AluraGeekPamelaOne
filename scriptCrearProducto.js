import { productoSweet } from "../AluraGeek/productos.js";

const form = document.querySelector("[data-form-producto]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombreP = document.querySelector("[data-nombre-producto]").value;
  const urlP = document.querySelector("[data-url-producto]").value;
  const precioP = document.querySelector("[data-precio-preducto]").value;

  productoSweet
    .creaProdutos(nombreP, urlP, precioP)
    .then((respuesta) => {
      window.location.href = "../Alurageek/index.html";
      console.log(respuesta);
    })
    .catch((err) => {
      console.log(err);
    });
});