function obtenerListaPokemon() {
  const listaPokemon = document.querySelector("#pokedex");
  return listaPokemon;
}

async function obtenerPokemons() {
  const cantidadDePokemons = 150;
  const url = "https://pokeapi.co/api/v2/pokemon/";

  try {
    for (let i = 1; i <= cantidadDePokemons; i++) {
      const response = await fetch(`${url}${i}`);
      const data = await response.json();
      const pokemon = {
        name: data.name,
        image: data.sprites.front_default,
        type: data.types.map((type) => type.type.name),
        id: data.id,
      };
      mostrarPokemonEnLista(pokemon);
    }
  } catch (error) {
    console.error("Error al obtener los Pokemones:", error);
  }
}

function mostrarPokemonEnLista(pokemon) {
  const listaPokemon = obtenerListaPokemon();

  const li = document.createElement("li");
  li.className = "card";
  listaPokemon.appendChild(li);
  const nuevoP1 = document.createElement("p");
  nuevoP1.className = "card-title";
  nuevoP1.textContent = ` ${pokemon.name}`;
  li.appendChild(nuevoP1);
  const nuevoP2 = document.createElement("p");
  nuevoP2.className = "card-subtitle";
  nuevoP2.textContent = `ID: ${pokemon.id}`;
  li.appendChild(nuevoP2);
  const nuevoP3 = document.createElement("p");
  nuevoP3.className = "card-subtitle";
  nuevoP3.textContent = `Tipo: ${pokemon.type}`;
  li.appendChild(nuevoP3);
  const img = document.createElement("img");
  img.className = "card-image";
  img.setAttribute("src", `${pokemon.image}`);
  img.setAttribute("alt", `${pokemon.name}`);
  li.appendChild(img);
}

obtenerPokemons();
