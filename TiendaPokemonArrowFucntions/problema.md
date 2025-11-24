# Tienda Pokemon con Arrow Functions Compactas

**Tema:** Arrow functions cortas y expresiones  
**Duracion:** 1 hora

---

## Misión

Gestionar una tienda Pokemon usando **arrow functions** para cálculos rápidos.

---

## Codigo Base

```javascript
const carrito = [
  { item: "Poción", precio: 300 },
  { item: "Pokebola", precio: 200 },
  { item: "Antídoto", precio: 150 }
];
```

---

## Tareas

1. Crear una flecha que devuelva **solo los precios** → `map`
2. Crear otra que filtre **items mayores a 200** → `filter`
3. Crear otra que calcule un **descuento del 20%** sobre cada precio
4. Crear otra que convierta cada item literal a:
   ```
   "NOMBRE - $PRECIO"
   ```
5. Crear **1 flecha extra** que invente el grupo (ej: sumar impuestos)
6. Hacer una **"tabla final"** de la tienda usando sus resultados