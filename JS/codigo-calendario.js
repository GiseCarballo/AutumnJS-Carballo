// Todo el codigo de calendario.html


// Luxon
const DateTime = luxon.DateTime

const fechaCompra = DateTime.now(document.getElementById("Compra"))
const fechaListo = fechaCompra.plus({days:10});


//usar fromISO para .value de las fechas del input


//cards
let tarjeta = document.getElementById("tarjetas");

function crearTarjetas(){
  for(const juego of juegos){
    let tarjeta = document.createElement("div");
    tarjeta.className="card col-md-2";
    tarjeta.innerHTML = `
        <div class="row card-body">
            <img src=${juego.foto} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${juego.nombre}</h5>
                <p class="card-text">Código: ${juego.id}</p>
                <button id='btn${juego.dias}' class="btn btn-primary">Ver tiempo</a>
            </div>
        </div>
    `;
}
}

//EVENTOS
    juegos.forEach((juego)=>{
        //evento para cada boton
        document.getElementById(`btn${juego.dias}`).addEventListener("click",function(){
            verTiempo(juego);
        });
    });

crearTarjetas();

//Sweet Alert

 

function verTiempo(juegoAVisualizar){
    Swal.fire({
        text: "El producto que adquiriste tarda " +juegoAVisualizar.dias,
    })
}




// Funcion del boton "Calcular fecha" - trabajar con Luxon e imput de fecha + juego.dias
//function calcularFecha ()