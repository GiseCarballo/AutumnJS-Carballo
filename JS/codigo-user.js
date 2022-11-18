//Todo el codigo de index.html

// Solicitud de Usuario y contraseña para acceder al calendario (Simulador)

let email = document.getElementById("email");
let contrasenia = document.getElementById("pass");
let formulario = document.getElementById("formulario");
let textEmail = document.getElementById("textEmail");

let intentos = 3; //inicio contador

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
  
     if(intentos > 0) {
        if (email.value == "giselacarballo3@gmail.com" && contrasenia.value == "Autumn2020") {
            console.log("OK");
            window.location.assign("calendario.html");
        } else {
            intentos -= 1;
            Swal.fire("Usuario y/o contraseña erroneos! Restan " + (intentos) + " intentos.");
        }}
});


// función para que el email contenga su estructura básica,
//más allá de haberlo declarado en el simulador y que tenga que ser sí o sí ese.


function validarEmail (){
    let patronEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //Puede contener signos y letras
    let form = document.getElementById("formulario");

    if (email.match(patronEmail)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        textEmail.innerHTML = "Tu email es válido";
        textEmail.style.color = "#00ff00";
    }else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Por favor ingrese un email válido";
        text.style.color = "#ff0000";
    }if(email == ""){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        textEmail.innerHTML = "";
        textEmail.style.color = "#00ff00";
    }
};

validarEmail();

