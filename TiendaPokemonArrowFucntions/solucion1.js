/* base code */
const carrito = [
    { item: "Poción", precio: 300 },
    { item: "Pokebola", precio: 200 },
    { item: "Antídoto", precio: 150 }
];

/*  punto 1 */
const precios = () => {
    return carrito.map(p => p.precio);
}

console.log(precios());

/* punto 2 */

const filtrarPrecios = () => {
    return carrito.filter(p => p.precio > 200);
}


console.log(filtrarPrecios());

/* punto 3 */
const conDescuento = () => {
    return carrito.map(p => p.precio * 0.8)
}


console.log(conDescuento());

/* punto 4 */

const productos = () => {
    return carrito.map(p => `${p.item} - $${p.precio}`);
}
console.log(productos());

/* punto 5 */

const sumarimpuestos = () => {
    return carrito.map(p => p.precio * 0.16 + p.precio);
}

console.log(sumarimpuestos());

 
// Precio final despues de descuento e impuestos
const precioFinal = () => {
    return carrito.map(p => (p.precio * 0.8) * 1.16);
}

const categorias = () => {
    return carrito.map(p => p.precio > 200 ? 'PREMIUM' : 'BASICO');
}


console.table({
    "Precios originales": precios(),
    "Mayores a 200": filtrarPrecios(),
    "Precios con 20% desc": conDescuento(),
    "Formato texto": productos(),
    "Con impuesto 10%": sumarimpuestos(),
    "Precio final (desc + imp)": precioFinal(),
    "Categoria": categorias()

});





