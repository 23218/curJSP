/*
const precioOriginal = 120 ; 
const descuento = .18 ;
const valorDescuento = precioOriginal * descuento;
const precioConDescuento = precioOriginal - valorDescuento;

console.log({
precioOriginal,
descuento,
valorDescuento,
precioConDescuento
});
*/

//Precio con función
function PrecioConDescuento (precio,descuento){
    const aux = descuento / 100 ;
    const valorDescuento = precio * aux;
    const precioConDescuento = precio - valorDescuento;
    return precioConDescuento;
}

function calcPrecioConDescuento (){
    const precio = document.getElementById("precio");
    const descuento = document.getElementById("descuento");
    const calculo = PrecioConDescuento(precio.value,descuento.value);
    const mensaje = document.getElementById("calculoDescuento");
    mensaje.innerText = "El precio con descuento es:  " + calculo;
}