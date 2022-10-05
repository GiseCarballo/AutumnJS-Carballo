for(let i=1;i<=3;i++){
    let usuario=prompt("Ingresa usuario");
let contrasenia=prompt("Ingresa contrasea para "+usuario);

if (usuario=="Gise1995"&&(contrasenia=="Autumn2020")){
    alert("Bienvenido al calendario de Autumn Deco");
    break;
}else{
    alert("Usuario y/o contraseña erroneos! Restan "+(3-i)+" intentos.");
}
}

let producto=prompt("Ingrese el código de su pedido para saber en cuánto tiempo estará listo desde su compra");
while(producto !="OK"){
    switch(producto.toLowerCase()){
        case "t001":
        case "d002":
          alert("El tangram y el dominó, estarán listos 10 días después de su compra");
          break;
        case "t003":
            alert("El tractor estará listo 20 días después de su compra");
            break;
        case "b004":
            alert("El juego de bloques estará listo 5 días después de su compra");
            break;
        case "i005":
            alert("El juego de Ingenio estará listo 15 días después de su compra");
            break;
        default:
            alert("Producto no disponible");
            break;
        }
        producto=prompt("ingresa el código del producto que adquiriste (OK para finalizar)")
    }while(producto=="OK"){
           alert("Gracias por comprar en Autumn Deco!")
           break
    }

 
    function sumarProductos(producto1,producto2){
        console.log("Adquirió: "+producto1+" "+producto2+"");
    }
    
    let juego1=prompt("Ingresa el primer producto que compraste:");
    let juego2=prompt("Ingresa el segundo producto que compraste:");
    
    sumarProductos(juego1,juego2);