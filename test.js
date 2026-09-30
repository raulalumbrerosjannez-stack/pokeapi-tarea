const {
    getAllPokemons,
    getPokemonById,
    getPokemonsAbility,
    getPokemonType,
    getPokemonAbility
} = require("./pokemon");

async function main() {

    // 1. Probar getAllPokemons()
    console.log("========== TODOS LOS POKEMON ==========");

    const pokemons = await getAllPokemons();

    console.log("Cantidad de Pokemon:", pokemons.length);
    console.log("Primer Pokemon:", pokemons[0]);


    // 2. Probar getPokemonById()
    console.log("\n========== POKEMON POR ID ==========");

    const pokemon = await getPokemonById(25);

    console.log("Nombre:", pokemon.name);
    console.log("ID:", pokemon.id);


    // 3. Probar getPokemonsAbility()
    console.log("\n========== POKEMON CON ABILITY STATIC ==========");

    const staticPokemon = await getPokemonsAbility("static");

    console.log("Cantidad:", staticPokemon.length);
    console.log("Primer resultado:", staticPokemon[0]);


    // 4. Probar getPokemonType()
    console.log("\n========== POKEMON DE TIPO FIRE ==========");

    const firePokemon = await getPokemonType("fire");

    console.log("Cantidad:", firePokemon.length);
    console.log("Primer resultado:", firePokemon[0]);


    // 5. Probar getPokemonAbility()
    console.log("\n========== ABILITY DE PIKACHU ==========");

    const ability = await getPokemonAbility(25, "static");

    console.log(ability);
}

main().catch(error => {
    console.error("ERROR:");
    console.error(error);
});