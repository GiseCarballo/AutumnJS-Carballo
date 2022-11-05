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




// SELECT// 


const selectProd = document.getElementById("selectProd");

function seleccionarProd (){
    juegos.forEach(juegoSelect => {
        selectProd.innerHTML += `
            <option value="">Seleccionar un juego</option>
            <option value="${juegoSelect.id}" id="seleccionadorProd${juegoSelect.id}">${juegoSelect.nombre}</option>
        `;
        selectProd.append();
    });


}
seleccionarProd();


//ONSUBMIT
/*
- Escuchar el submit del formulario con un onSubmit.
- En ese momento, necesitamos obtener 1. el value del producto seleccionado en el select de productos, con su ID.
-También necesitamos la fecha, como objeto Date.
-Con el ID del producto, buscamos con un find el producto en tu lista de juegos y obtenemos la demora del envío.
-Utilizamos la función que te pasé para sumarle esa cantidad de días a la fecha que ingresó el usuario y listo, tendríamos la fecha estimada de envío.
-Entonces obtenemos ese ID del value, iteramos sobre el array de objetos, cuando coincide el ID del FORM con el ID del producto, devolvemos los días de demora.

*/


// VALINDANDO FORMULARIO
const nombreUsuario = document.getElementById("nombre");
const opcionElegida = document.getElementById("selectProd");
const fechaCompra = document.getElementById("fecha");

function enviarFormulario (){
    if (nombreUsuario.value === null || nombreUsuario.value === ""){
        console.log("No ingresó su nombre");
    }
    if (opcionElegida.value === null || opcionElegida.value === ""){
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



//Funcion del boton "Calcular fecha" - trabajar con Luxon e imput de fecha + juego.dias
//function calcularFecha ()


const plazosDeEntregas = [10, 15, 20]

plazosDeEntregas.forEach(plazo => {

     // acá deberías modelar una option con el value "plazo" y agregarla dentro de un select

})



//usar fromISO para .value de las fechas del input

