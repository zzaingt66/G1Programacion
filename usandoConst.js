// usando const
/*  Exercise 1 */
const pokemon1 = "Pikachu";
const pokemon2 = "Charizard";
const pokemon3 = "Bulbasaur";
const pokemon4 = "Squirtle";
const pokemon5 = "Mewtwo";
const pokemon6 = "Eevee";

// pokemon1 = "kilowatt";

console.log(pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6);

/*  Exercise 2 */

if (true) {
    const pokemon1 = "Snorlax";
    const pokemon2 = "Jigglypuff";
    console.log(pokemon1, pokemon2);
}

// usando const tiene ambito de bloque y no permite reasignacion
const team = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6];
console.log(team); // [ 'Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle', 'Mewtwo', 'Eevee' ] y no cambian los valores de pokemon1 y pokemon2