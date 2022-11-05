// Todo el codigo de calendario.html


//cards
let tarjeta = document.getElementById("tarjetas");

function crearTarjetas(){
    juegos.forEach(juego => {
        const tarjetaDiv = document.createElement("div");
        tarjetaDiv.className="card col-sm-2 cardJuegos";
        tarjetaDiv.innerHTML = `
                <img src=../assets/${juego.foto} class="card-img-top" alt="${juego.nombre}">
            <div class="card-body">
                    <h5 class="card-title">${juego.nombre}</h5>
                    <p class="card-text">Código: ${juego.id}</p>
                    <button id='btn${juego.id}' class="btn botonTiempo">Ver tiempo</button>
            </div>
        `;
        tarjeta.append(tarjetaDiv);
  
}) 

    juegos.forEach((juego)=>{
        document.getElementById(`btn${juego.id}`).addEventListener("click",function(){
        verTiempo(juego);
        });
    });

 
}
crearTarjetas();   

//EVENTOS
//Sweet Alert

function verTiempo(juegoAVisualizar){
      Swal.fire({
            title: juegoAVisualizar.nombre,
            text: 'El producto "'+juegoAVisualizar.nombre+ '", tarda '+juegoAVisualizar.dias+' días en estar listo',
            imageUrl: juegoAVisualizar.foto,
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: juegoAVisualizar.nombre,
          })
}



// VALINDANDO FORMULARIO


const nombreUsuario = document.getElementById("nombre");
const select = document.getElementById("seleccionadorProd");
const fechaCompra = document.getElementById("fecha");

function enviarFormulario (){
    if (nombreUsuario.value === null || nombreUsuario.value === ""){
        console.log("No ingresó su nombre");
    }
    if (select.value === null || select.value === ""){
        console.log("No seleccionó un producto");
    }
    if (fechaCompra.value === null || fechaCompra.value === ""){
        console.log("No ingresó fecha");
    }
    return false;
};

window.addEventListener('load', function () {
    fechaCompra.addEventListener('change', function (){
        console.log(this.value);
    });
});



// Funcion del boton "Calcular fecha" - trabajar con Luxon e imput de fecha + juego.dias
//function calcularFecha ()


const DateTime = luxon.DateTime
const dur10 = Duration.fromObject ({ days:10 });
const dur15  = Duration.fromObject ({ days:15 });
const dur20 = Duration.fromObject ({ days:20 });

function calcularFecha (

)


const fechaListo = fechaCompra.plus(dur10);
console.log(suma.toLocaleString(DateTime.DATE_SHORT))

//const fechaCompra = DateTime.now(document.getElementById("Compra"))
//const fechaListo = fechaCompra.plus(${juego.dias});


//usar fromISO para .value de las fechas del input

