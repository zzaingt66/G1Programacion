/*  Exercise 1 */
var pokemon1 = "Pikachu";
var pokemon2 = "Charizard";
var pokemon3 = "Bulbasaur";
var pokemon4 = "Squirtle";
var pokemon5 = "Mewtwo";
var pokemon6 = "Eevee";

console.log(pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6);

/*  Exercise 2 */

if (true) {
    var pokemon1 = "Snorlax";
    var pokemon2 = "Jigglypuff";
    console.log(pokemon1, pokemon2);
}
// usando var tiene ambito de funcion o global lo que significa que al cambiar dentro del bloque if, cambia la variable global y permite reasignacion

var team = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6];
console.log(team); // [ 'Snorlax', 'Jigglypuff', 'Bulbasaur', 'Squirtle', 'Mewtwo', 'Eevee' ] y cambian los valores de pokemon1 y pokemon2

/*  Este código muestra cómo funciona 'var'. 
 Las variables declaradas con 'var' **no respetan el alcance de bloque**, 
 por lo que si las cambiamos dentro de un 'if', también cambian fuera.
 Por ejemplo, pokemon1 originalmente es "Pikachu", 
 pero dentro del 'if' se reasigna a "Snorlax" y al imprimir el arreglo, el cambio se refleja globalmente.*/
