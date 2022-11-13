// Todo el codigo de calendario.html

//Luxon
const DateTime = luxon.DateTime;


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


// VALINDANDO FORMULARIO

const nombreUsuario = document.getElementById("nombre");
const opcionElegida = document.getElementById("selectProd");
const fechaCompra = document.getElementById("fecha");

function enviarFormulario (e){
    if (nombreUsuario.value === null || nombreUsuario.value === "" || nombreUsuario.length <= 30 || nombreUsuario.value === ([0-9])){
        console.log("No ingresó un nombre correctamente");
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



//ON SUBMIT
//Escuchar el select y la fecha para poder trabajar en la función para calcular la fecha.

const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", (e) => {  
        e.preventDefault(); enviarFormulario(); //Para que no se recargue la página

        const idSolicitado = opcionElegida.options[opcionElegida.selectedIndex].value;
        const productoSolicitado = juegos.find((juego) => juego.id == idSolicitado);
       
        let date = new Date(fechaCompra.valueAsDate.getTime());
        date.setDate(date.getDate() + productoSolicitado.dias); //sin el +1 no queda
        console.log(date.toLocaleDateString());

        //pruebas
        console.log(productoSolicitado.dias); //para chequear si ve los días que tarda
        console.log(date.getDate() + productoSolicitado.dias); //chequear suma
        console.log(date.getDate()); //es 1 menos
        console.log(fechaCompra.valueAsDate.getTime()); //Valor en milisegundos. Tiene que ver con que me de un día menos? El problema es por el horario

        Swal.fire({
            icon: 'success',
            title: 'Tu producto estará listo el '+date.toLocaleDateString(),
            text: 'Comunicate con nosotros para coordinar la entrega!'
        })
    
});


// FETCH
let comentarios=[];

function obtenerComentarios(){
    const URLGET='https://jsonplaceholder.typicode.com/comments';
    fetch(URLGET)
        .then(resultado => resultado.json())
        .then(data =>{
            console.log(data);
            let comentarios = data;

            const comentarioDiv = document.createElement("div");
            comentarioDiv.className="card";
            document.getElementById("comentarios").innerHTML +=`
            <div class="card-header">
              Algunas experiencias de compras!
            </div>`;

            const aleatorio = comentarios[Math.floor(Math.random()*comentarios.length)];
            console.log(aleatorio); //Para chequear si aparece aleatoriamente

            document.getElementById("comentarios").innerHTML +=`
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p>${aleatorio.body}</p>
                    <footer class="blockquote-footer">${aleatorio.email}</footer>
                  </blockquote>
                </div>
            </div>
            `;                
        })
};
obtenerComentarios();
