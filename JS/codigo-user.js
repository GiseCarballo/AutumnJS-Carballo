//Todo el codigo de index.html

// Solicitud de Usuario y contraseña para acceder al calendario (Simulador)

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
        }}
});


// función para que el email contenga su estructura básica,
//más allá de haberlo declarado en el simulador y que tenga que ser sí o sí ese.

function validarEmail (){
    let validacionDeEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; //Puede contener signos y 
    if(validacionDeEmail.test(email.value)){
        console.log('Email escrito correctamente');
		return true;
	}else{
		console.log('El Email contiene un error en su escritura');
		return false;
	}
};   

validarEmail();

email.oninput = () => {
    if(isNaN(email.value)){
        email.style.color="black";
    }else{
        email.style.color="red";
    }
};