const API_URL = "https://pokeapi.co/api/v2";

// Obtener todos los Pokémon
async function getAllPokemons() {
    const response = await fetch(`${API_URL}/pokemon?limit=1302`);

    if (!response.ok) {
        throw new Error("Error al obtener los Pokémon");
    }

    const data = await response.json();

    return data.results;
}

// Obtener un Pokémon por su ID
async function getPokemonById(id) {
    const response = await fetch(`${API_URL}/pokemon/${id}`);

    if (!response.ok) {
        throw new Error(`No se encontró el Pokémon con ID ${id}`);
    }

    const data = await response.json();

    return data;
}

// Obtener los Pokémon que tienen una determinada habilidad
async function getPokemonsAbility(abilityName) {
    const response = await fetch(
        `${API_URL}/ability/${abilityName.toLowerCase()}`
    );

    if (!response.ok) {
        throw new Error(`No se encontró la habilidad: ${abilityName}`);
    }

    const data = await response.json();

    return data.pokemon;
}

// Obtener los Pokémon de un determinado tipo
async function getPokemonType(typeName) {
    const response = await fetch(
        `${API_URL}/type/${typeName.toLowerCase()}`
    );

    if (!response.ok) {
        throw new Error(`No se encontró el tipo: ${typeName}`);
    }

    const data = await response.json();

    return data.pokemon;
}

// Obtener una habilidad concreta de un Pokémon
async function getPokemonAbility(id, abilityName) {
    const pokemon = await getPokemonById(id);

    const ability = pokemon.abilities.find(
        (item) =>
            item.ability.name.toLowerCase() === abilityName.toLowerCase()
    );

    if (!ability) {
        throw new Error(
            `El Pokémon con ID ${id} no tiene la habilidad ${abilityName}`
        );
    }

    return ability;
}

module.exports = {
    getAllPokemons,
    getPokemonById,
    getPokemonsAbility,
    getPokemonType,
    getPokemonAbility
};