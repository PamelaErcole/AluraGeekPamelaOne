const formulario = document.querySelector ("[data-form-contacto]");

btnEnter.addEventListener = ("submit", (evento) => {

    evento.preventDefault;
    const email = document.querySelector("[data-sesion-mail]").value;
    const contrasenha = document.querySelector("[data-sesion-passw]").value;

    if (contrasenha.lenght>8 && email.lenght>8){

        window.location.href="./galeria.html"

    }else{

        alert ("La contraseña debe tener al menos 8 caracteres");
    }
        
});

