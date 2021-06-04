// fetch all pokemon from 3rd party api
export function getAllPokemon() {
  return fetch("https://api.pokemontcg.io/v2/cards")
    .then((response) => response.json())
    .then(({ data }) => data);
}

// fetch pokemon base on id from 3rd party api
export function pokemonById(id) {
  return fetch(`https://api.pokemontcg.io/v2/cards/${id}`)
    .then((response) => response.json())
    .then(({ data }) => data);
}

// fetch pokemon by pokemon name
export function pokemonByName(name) {
  return fetch(`https://api.pokemontcg.io/v2/cards?q=name:${name}`)
    .then((response) => response.json())
    .then(({ data }) => data);
}

// fetch all pokemon order by pokemon type (e.g dragon, normal, water, grass, etc)
export function pokemonByType(type) {
  return fetch(`https://api.pokemontcg.io/v2/cards?q=types:${type}`)
    .then((response) => response.json())
    .then(({ data }) => data);
}

// fetch all pokemon types
export function getTypes() {
  return fetch("https://api.pokemontcg.io/v2/types")
    .then((response) => response.json())
    .then(({ data }) => data);
}
