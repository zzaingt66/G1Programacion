/*  punto 1 */
const carrito = [
  { item: "Poción", precio: 300 },
  { item: "Pokebola", precio: 200 },
  { item: "Antídoto", precio: 150 }
];
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
   return carrito.map(p => p.precio * 0.8 )
}

console.log(conDescuento());
/* punto 4 */
const productos = () => {
   return carrito.map(p => `${p.item} - $${p.precio}` );
}
console.log(productos());
/* punto 5 */
const sumarimpuestos = () => {
     return carrito.map(p => p.precio * 0.1 + p.precio );
}
console.log(sumarimpuestos());
// Versión sencilla: usar `console.table` con formato de moneda
const formattedRows = carrito.map(p => ({
   Item: p.item,
   Precio: `$${p.precio.toFixed(2)}`,
   '20% desc': `$${(p.precio * 0.8).toFixed(2)}`,
   '10% imp': `$${(p.precio * 1.1).toFixed(2)}`
}));
// Título coloreado (cian). Si tu consola no soporta ANSI, verás códigos en crudo.
console.log('\x1b[36m%s\x1b[0m', '=== Carrito de compra ===');
console.table(formattedRows);