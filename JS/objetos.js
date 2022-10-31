//Arrays

const juegos = [{
    id: "b001",
    nombre: "Bloques",
    precio: 999,
    dias: 10,
    tipo: "Bloques",
    foto: "/assets/Card-bloques.jpg",
},
{
    id: "b002",
    nombre: "Cajón con 12 cubos",
    precio: 2500,
    dias: 15,
    tipo: "Bloques",
    foto: "/assets/Card-Cajonbloques.jpg",
},
{
    id:"b003",
    nombre: "Vagón de tren 24 bloques",
    precio: 3500,
    dias: 20,
    tipo: "Bloques",
    foto: '/assets/Card-bloquescolores.jpg'
},
{
    id:"i001",
    nombre: "Cubo de Ingenio",
    precio: 1500,
    dias: 10,
    tipo: "Ingenio",
    foto: '/assets/Card-cubo.jpg'
},
{
    id: "i002",
    nombre: "Tangram",
    precio: 1700,
    dias: 15,
    tipo: "Ingenio",
    foto: "/assets/Card-tangram.jpg"
},
{
    id: "i003",
    nombre: "Dominó",
    precio: 1300,
    dias: 10,
    tipo: "Ingenio",
    foto: "/assets/Card-Dominó.jpg"
},
{
    id: "e001",
    nombre: "Encastre numérico",
    precio: 2000,
    dias: 10,
    tipo: "Encastre",
    foto: "/assets/Card-numero.png",
},
{
    id: "e002",
    nombre: "Figuras Geométricas",
    precio: 2500,
    dias: 15,
    tipo: "Encastre",
    foto: "/assets/Card-geometrica.jpg",
},
{
    id: "e003",
    nombre: "Torre de encastre",
    precio: 2300,
    dias: 10,
    tipo: "Encastre",
    foto: "/assets/Card-encastrecuadrado.jpg",   
},
{
    id: "j001",
    nombre: "Locomotora",
    precio: 3500,
    dias: 20,
    tipo: "Juguetes",
    foto: "/assets/Card-Tren.jpg",
},
{
    id: "j002",
    nombre: "Tractor",
    precio: 3500,
    dias: 20,
    tipo: "Juguetes",
    foto: "/assets/Card-Tractor.jpg",
},
{
    id: "j003",
    nombre: "Avión",
    precio: 3500,
    dias: 20, 
    tipo: "Jueguetes",
    foto: "/assets/Card-avion.jpg"
}
]

console.log(juegos.length);


/*for (const juego of Juego){
    console.log(Juego.nombre+" "+Juego.tiempo)
}

const produccionMenor = Juego.filter((juego) => Juego.tiempo.includes ('10 días'));
console.log(produccionMenor);

const produccionMedia = Juego.filter((juego) => Juego.tiempo.includes ('15 días'));
console.log(produccionMedia);

const produccionMayor = Juego.filter((juego) => Juego.tiempo.includes ('20 días'));
console.log(produccionMayor);



// Fechas

let hoy = document.getElementsByClassName("hoy");
console.log(hoy[0].innerText);
hoy[0].innerText = new Date().toLocaleDateString();
*/