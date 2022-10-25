//Arrays

class Juego{
    constructor(id, nombre, precio, tiempo, tipo){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.tiempo = tiempo;
        this.tipo = tipo;
    }
}

// constructor de juegos

const juego0 = new Juego("b001", "Bloques", 999, "10 días", "Bloques");
const juego1 = new Juego("b002", "Cajón con 12 cubos", 2500, "15 días", "Bloques");
const juego2 = new Juego("b003", "Vagón de tren 24 bloques", 3500, "20 días", "Bloques");
const juego3 = new Juego("i001", "Cubo de Ingenio", 1500, "10 días", "Ingenio");
const juego4 = new Juego("i002", "Tangram", 1700, "15 días", "Ingenio");
const juego5 = new Juego("i003", "Dominó", 1300, "10 días", "Ingenio");
const juego6 = new Juego("e001", "Encastre numérico", 2000, "10 días", "Encastre");
const juego7 = new Juego("e002", "Figuras Geométricas", 2500, "15 días", "Encastre");
const juego8 = new Juego("e003", "Torre de encastre", 2300, "10 días", "Encastre");
const juego9 = new Juego("j001", "Locomotora", 3500, "20 días", "Juguetes");
const juego10 = new Juego("j002", "Tractor", 3500, "20 días", "Juguetes");
const juego11 = new Juego("j003", "Avión", 3500, "20 días", "Jueguetes");



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