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


/*email.oninput = () => {
    if(isNaN(email.value)){
        email.style.color="#ffffff";
    }else{
        email.style.color="red";
    }
}*/

// función para que el email contenga su estructura básica, más allá de haberlo declarado en el simulador
function validarEmail (){
    let validacionDeEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if(validacionDeEmail.test(email.value)){
        email.style.color="#ffffff";
        console.log('Email escrito correctamente');
		return true;
	}else{
        email.style.color="red";
		console.log('El Email contiene un error en su escritura');
		return false;
	}
}   

validarEmail();
