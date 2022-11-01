//Arrays

const juegos = [{
    id: "b001",
    nombre: "Bloques",
    precio: 999,
    dias: 10,
    tipo: "Bloques",
    foto: "Card-bloques.jpg",
},
{
    id: "b002",
    nombre: "Cajón con 12 cubos",
    precio: 2500,
    dias: 15,
    tipo: "Bloques",
    foto: "Card-Cajonbloques.jpg",
},
{
    id:"b003",
    nombre: "Vagón de tren 24 bloques",
    precio: 3500,
    dias: 20,
    tipo: "Bloques",
    foto: 'Card-bloquescolores.jpg'
},
{
    id:"i001",
    nombre: "Cubo de Ingenio",
    precio: 1500,
    dias: 10,
    tipo: "Ingenio",
    foto: 'Card-cubo.jpg'
},
{
    id: "i002",
    nombre: "Tangram",
    precio: 1700,
    dias: 15,
    tipo: "Ingenio",
    foto: "Card-tangram.jpg"
},
{
    id: "i003",
    nombre: "Dominó",
    precio: 1300,
    dias: 10,
    tipo: "Ingenio",
    foto: "Card-Dominó.jpg"
},
{
    id: "e001",
    nombre: "Encastre numérico",
    precio: 2000,
    dias: 10,
    tipo: "Encastre",
    foto: "Card-numero.png",
},
{
    id: "e002",
    nombre: "Figuras Geométricas",
    precio: 2500,
    dias: 15,
    tipo: "Encastre",
    foto: "Card-geometrica.jpg",
},
{
    id: "e003",
    nombre: "Torre de encastre",
    precio: 2300,
    dias: 10,
    tipo: "Encastre",
    foto: "Card-encastrecuadrado.jpg",   
},
{
    id: "j001",
    nombre: "Locomotora",
    precio: 3500,
    dias: 20,
    tipo: "Juguetes",
    foto: "Card-Tren.jpg",
},
{
    id: "j002",
    nombre: "Tractor",
    precio: 3500,
    dias: 20,
    tipo: "Juguetes",
    foto: "Card-Tractor.jpg",
},
{
    id: "j003",
    nombre: "Avión",
    precio: 3500,
    dias: 20, 
    tipo: "Jueguetes",
    foto: "Card-avion.jpg"
}
]

console.log(juegos.length);

//JSON

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
guardarLocal("listaJuegos", JSON.stringify(juegos));