// usando let
/*  Exercise 1 */
let pokemon1 = "Pikachu";
let pokemon2 = "Charizard";
let pokemon3 = "Bulbasaur";
let pokemon4 = "Squirtle";
let pokemon5 = "Mewtwo";
let pokemon6 = "Eevee";

// pokemon1 = "kilowatt";

console.log(pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6);

/*  Exercise 2 */

if (true) {
    let pokemon1 = "Snorlax"; // nueva variable local
    let pokemon2 = "Jigglypuff";
    console.log(pokemon1, pokemon2);
}



let team = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6];
console.log(team); // [ 'Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle', 'Mewtwo', 'Eevee' ] y no cambian los valores de pokemon1 y pokemon2

