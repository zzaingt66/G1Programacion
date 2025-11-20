const carrito = [
{ item: "Poción", precio: 300 },
{ item: "Pokebola", precio: 200 },
{ item: "Antídoto", precio: 150 }
];

// 1. Devolver solo los precios
const soloPrecios = carrito.map(producto => producto.precio);

// 2. Filtrar items mayores a 200
const mayoresA200 = carrito.filter(producto => producto.precio > 200);

// 3. Calcular descuento del 20%
const conDescuento = carrito.map(producto => producto.precio * 0.8);

// 4. Convertir a formato "NOMBRE - $PRECIO"
const formatoTexto = carrito.map(producto => `${producto.item} - $${producto.precio}`);

// 5. EXTRA: Sumar impuestos del 16%
const conImpuestos = carrito.map(producto => producto.precio * 1.16);

// 6. TABLA FINAL
console.log("TABLA FINAL - TIENDA POKEMON\n");

carrito.forEach((producto, index) => {
console.log(`${index + 1}. ${producto.item}`);
console.log(`   Precio original:     $${producto.precio}`);
console.log(`   Con descuento 20%:   $${conDescuento[index]}`);
console.log(`   Con IVA 16%:         $${conImpuestos[index]}`);
console.log(`   Precio final:        $${(conDescuento[index] * 1.16).toFixed(2)}`);
console.log(`   Categoria:           ${producto.precio > 200 ? 'PREMIUM' : 'BASICO'}`);
console.log("");
});

// Totales
const totalOriginal = soloPrecios.reduce((sum, precio) => sum + precio, 0);
const totalDescuento = conDescuento.reduce((sum, precio) => sum + precio, 0);
const totalFinal = conDescuento.reduce((sum, precio) => sum + (precio * 1.16), 0);

console.log("RESUMEN DE TOTALES");
console.log(`Total original:      $${totalOriginal}`);
console.log(`Total con descuento: $${totalDescuento}`);
console.log(`Total a pagar:       $${totalFinal.toFixed(2)}\n`);

// Resultados individuales de cada tarea
console.log("RESULTADOS POR TAREA:");
console.log("1. Solo precios:", soloPrecios);
console.log("2. Mayores a 200:", mayoresA200);
console.log("3. Con descuento 20%:", conDescuento);
console.log("4. Formato texto:", formatoTexto);
console.log("5. Con impuestos 16%:", conImpuestos);