//Arrays

const juegos = [{
    id: "b001",
    nombre: "Bloques",
    precio: 999,
    tiempo: "10 días"
},
{
    id: "b002",
    nombre: "Cajón con Bloques",
    precio: 2500,
    tiempo: "15 días"
},
{
    id: "b002",
    nombre: "Vagón con Bloques",
    precio: 3000,
    tiempo: "20 días"
},
{
    id: "i001",
    nombre: "Cubo de Ingenio",
    precio: 1500,
    tiempo: "10 días"
},
{
    id: "i002",
    nombre: "Tangram",
    precio: 1700,
    tiempo: "15 días"
},
{
    id: "i003",
    nombre: "Dominó",
    precio: 1300,
    tiempo: "10 días"
},
{
    id: "e001",
    nombre: "Juego de encastre",
    precio: 2000,
    tiempo: "10 días"
},
{
    id: "e002",
    nombre: "Figuras geométricas",
    precio: 2000,
    tiempo: "15 días"
}
]                        



console.log(juegos.length);

for (const juego of juegos){
    console.log(juego.nombre+" "+juego.tiempo)
}

const produccionMenor = juegos.filter((juego) => juego.tiempo.includes ('10 días'));
console.log(produccionMenor);

const produccionMedia = juegos.filter((juego) => juego.tiempo.includes ('15 días'));
console.log(produccionMedia);

const produccionMayor = juegos.filter((juego) => juego.tiempo.includes ('20 días'));
console.log(produccionMayor);



// Fechas

let hoy = document.getElementsByClassName("hoy");
console.log(hoy[0].innerText);
hoy[0].innerText = new Date().toLocaleDateString();



//style

let seccion = document.getElementById("calendario");
seccion.style.background="#FEF9EF";