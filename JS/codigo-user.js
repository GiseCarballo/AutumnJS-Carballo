//Todo el codigo de index.html

// Solicitud de Usuario y contraseña para acceder al calendario

let email = document.getElementById("email");
let contrasenia = document.getElementById("pass");
let formulario = document.getElementById("formulario");


formulario.addEventListener("submit",(e) => {
    e.preventDefault();
    for(let i=1;i<=3;i++){
        if (email.value=="giselacarballo3@gmail.com" && contrasenia.value=="Autumn2020"){
            console.log("OK");
            window.location.assign("calendario.html");
            break;
        }else{
            alert("Usuario y/o contraseña erroneos! Restan "+(3-i)+" intentos.");
        }
    }
});


email.oninput = () => {
    if(isNaN(email.value)){
        email.style.color="black";
    }else{
        email.style.color="red";
    }
}


