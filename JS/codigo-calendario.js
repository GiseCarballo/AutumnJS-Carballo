// Todo el codigo de calendario.html


//CARDS - Tarjetas informativas para que el cliente sepa cuándo tarda cada producto.
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
            </div>`;
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
//Sweet Alert para que el cliente pueda saber lo que tarda cada producto.

function verTiempo(juegoAVisualizar){
      Swal.fire({
            title: juegoAVisualizar.nombre,
            text: 'El producto "'+juegoAVisualizar.nombre+ '", tarda '+juegoAVisualizar.dias+' días en estar listo',
            imageUrl: juegoAVisualizar.foto,
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: juegoAVisualizar.nombre,
          });
};

// SELECT
// Armar un select que esté asociado directamente con los objetos del array para luego generar la función de CalcularFecha,
//y para que se modifique cada vez que sea necesario modificar el array.

const selectProd = document.getElementById("selectProd");

function seleccionarProd (){
    selectProd.innerHTML = '<option value="">Seleccionar un juego</option>';
    juegos.forEach(juegoSelect => {
        selectProd.innerHTML += `
            <option value="${juegoSelect.id}" id="seleccionadorProd${juegoSelect.id}">${juegoSelect.nombre}</option>
        `;
        selectProd.append();
    });
};
seleccionarProd();


//ONSUBMIT
/*
-Utilizamos la función que te pasé para sumarle esa cantidad de días a la fecha que ingresó el usuario y listo, tendríamos la fecha estimada de envío.
-Entonces obtenemos ese ID del value, iteramos sobre el array de objetos, cuando coincide el ID del FORM con el ID del producto, devolvemos los días de demora.

*/


// VALINDANDO FORMULARIO

const nombreUsuario = document.getElementById("nombre");
const opcionElegida = document.getElementById("selectProd");
const fechaCompra = document.getElementById("fecha");

function enviarFormulario (e){
    if (nombreUsuario.value === null || nombreUsuario.value === ""){
        e.preventDefault();
        console.log("No ingresó un nombre");
    }
    if (opcionElegida.value === null || opcionElegida.value === ""){
        e.preventDefault();
        console.log("No seleccionó un producto");
    }
    if (fechaCompra.value === null || fechaCompra.value === ""){
        e.preventDefault();
        console.log("No ingresó fecha");
    }
    return false;
};

window.addEventListener('load', function () {
    fechaCompra.addEventListener('change', function (){
        console.log(this.value);
    });
});


//ON SUBMIT
//Escuchar el select y la fecha para poder trabajar en la función para calcular la fecha.

let miBoton = document.getElementById("miBoton");

const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", (e) => {  
        e.preventDefault(); //Para que no se recargue la página
        const idSolicitado =
        opcionElegida.options[opcionElegida.selectedIndex].value;
        const productoSolicitado = juegos.find((juego) => juego.id == idSolicitado);
       
       
        function CalcularFecha(){
        let date = new Date(fechaCompra.valueAsDate.getTime());
        date.setDate(date.getDate() + productoSolicitado.dias);
        return date; //Acá debería haber un Sweet Alert que diga "Tu producto estará listo el NuevaFecha"
        };
        console.log(productoSolicitado.dias); //para chequear si ve los días que tarda


        CalcularFecha();
    });











/*const plazosDeEntregas = [10, 15, 20]

plazosDeEntregas.forEach(plazo => {

     // acá deberías modelar una option con el value "plazo" y agregarla dentro de un select

})*/



//usar fromISO para .value de las fechas del input

