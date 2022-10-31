// Todo el codigo de calendario.html

//cards
let tarjeta = document.getElementById("tarjetas");

function crearTarjetas(){
  for(const juego of juegos){
    let tarjeta = document.createElement("div");
    tarjeta.className="card col-md-2";
    tarjeta.innerHTML = `
        <div class="row card-body">
            <img src=${juego.foto} class="card-img-top" alt="${juego.nombre}">
            <div class="card-body">
                <h5 class="card-title">${juego.nombre}</h5>
                <p class="card-text">Código: ${juego.id}</p>
                <button id='btn${juego.dias}' class="btn btn-primary">Ver tiempo</a>
            </div>
        </div>
    `;
}
}

crearTarjetas();

//EVENTOS
    juegos.forEach((juego)=>{
        document.getElementById(`btn${juego.dias}`).addEventListener("click",function(){
            verTiempo(juego);
        });
    });



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



// Funcion del boton "Calcular fecha" - trabajar con Luxon e imput de fecha + juego.dias
//function calcularFecha ()

let opcion = document.getElementsByTagName("option");


const DateTime = luxon.DateTime
//const fechaCompra = DateTime.now(document.getElementById("Compra"))
//const fechaListo = fechaCompra.plus({days:10});


//usar fromISO para .value de las fechas del input

