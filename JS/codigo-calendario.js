// Todo el codigo de calendario.html


//cards
let tarjeta = document.getElementById("tarjetas");

function crearTarjetas(){
    juegos.forEach(juego => {
        const tarjetaDiv = document.createElement("div");
        tarjetaDiv.className="card col-md-2";
        tarjetaDiv.innerHTML = `
            <div class="row card-body">
                <img src=../assets/${juego.foto} class="card-img-top" alt="${juego.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${juego.nombre}</h5>
                    <p class="card-text">Código: ${juego.id}</p>
                    <button id='btn${juego.dias}' class="btn btn-primary">Ver tiempo</button>
                </div>
            </div>
        `;
        tarjeta.append(tarjetaDiv);
  
}) 
}


crearTarjetas();

//EVENTOS
//Sweet Alert
function verTiempo(juegoAVisualizar){
    Swal.fire({
            title: juegoAVisualizar.nombre,
            text: 'El producto que adquiriste tarda '+juegoAVisualizar.dias+' días en estar listo',
            imageUrl: juegoAVisualizar.foto,
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: juegoAVisualizar.nombre,
          })
}


juegos.forEach((juego)=>{
    document.getElementById(`btn${juego.dias}`).addEventListener("click",function(){
        verTiempo(juego);
    });
});



// VALINDANDO FORMULARIO


const nombreUsuario = document.getElementsByClassName("nombre");
const productos = document.getElementsByClassName("seleccionadorProd");
const fecha = document.getElementsByClassName("fecha");

function enviarFormulario (){
    if (nombreUsuario.value === null || nombreUsuario.value === ""){
        console.log("No ingresó su nombre");
    }
    if (productos.value === null || productos.value === ""){
        console.log("No seleccionó un producto");
    }
    if (fecha.value === null || fecha.value === ""){
        console.log("No ingresó fecha");
    }
    return false;
};


// Funcion del boton "Calcular fecha" - trabajar con Luxon e imput de fecha + juego.dias
//function calcularFecha ()

let opcion = document.getElementsByTagName("option");
const DateTime = luxon.DateTime


//const fechaCompra = DateTime.now(document.getElementById("Compra"))
//const fechaListo = fechaCompra.plus(${juego.dias});


//usar fromISO para .value de las fechas del input

