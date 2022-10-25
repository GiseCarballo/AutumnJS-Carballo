//Todo el codigo de index.html

// Solicitud de Usuario y contraseña para acceder al calendario

let email = document.getElementByID("email").value;
let contrasenia = document.getElementByID("pass").value;

console.log("email")
console.log("contrasenia")

{
let signin = document.getElementByID("signin");

sigin.addEventListener("click",ingresar => {
    for(let i=1;i<=3;i++){
        if (email=="giselacarballo3@gmail.com"&&(contrasenia=="Autumn2020")){
            // No sé si se puede usar window.location para redirigir desde acá
        break;
}else{
    alert("Usuario y/o contraseña erroneos! Restan "+(3-i)+" intentos.");
}
}
});

}

email.oninput = () => {
    if(isNaN(email.value)){
        email.style.color="black";
    }else{
        email.style.color="red";
    }
}


let formulario = document.getElementById("formulario");
formulario.addEventListener("submit",validar);

function validar(e){
    if((email.value=="")||(contrasenia.value=="")){
        e.preventDefault();
        alert("Ingrese datos validos");
    }
}