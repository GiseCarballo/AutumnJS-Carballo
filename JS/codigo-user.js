//Todo el codigo de index.html

// Solicitud de Usuario y contraseña para acceder al calendario

let email = document.getElementById("email");
let contrasenia = document.getElementById("pass");
let formulario = document.getElementById("formulario");

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
        }
     }
    
});


email.oninput = () => {
    if(isNaN(email.value)){
        email.style.color="#ffffff";
    }else{
        email.style.color="red";
    }
}





