import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemon = async (nameOrId) => {
    try {
      const response = await axios.get(`${API_URL}/${nameOrId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
      return null;
    }
  };
  
  export const getPokemonList = async (limit = 50, offset = 0) => {
    try {
      const response = await axios.get(`${API_URL}?limit=${limit}&offset=${offset}`);
      const results = response.data.results;
      const totalCount = response.data.count;
  
      // Fetch detailed data for each Pokémon
      const detailedPokemonPromises = results.map(async (pokemon) => {
        const res = await axios.get(pokemon.url);
        return res.data;
      });
  
      const detailedPokemonData = await Promise.all(detailedPokemonPromises);
  
      return { pokemonList: detailedPokemonData, totalCount };
    } catch (error) {
      console.error("Error fetching Pokémon list:", error);
      return { pokemonList: [], totalCount: 0 };
    }
  };

export const getRandomPokemonSprites = async (count) => {
  const sprites = [];
  const maxPokemonId = 898; // Total number of Pokémon as of Gen 8

  for (let i = 0; i < count; i++) {
    const id = Math.floor(Math.random() * maxPokemonId) + 1;
    sprites.push(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    );
  }

  return sprites;
};

export const getAllPokemonBasicData = async () => {
  try {
    const response = await axios.get(`${API_URL}?limit=898`);
    const results = response.data.results;

    // Include IDs for each Pokémon
    const pokemonList = results.map((pokemon) => {
      // Extract the ID from the URL
      const urlParts = pokemon.url.split("/").filter(Boolean);
      const id = parseInt(urlParts[urlParts.length - 1], 10);
      return { name: pokemon.name, id };
    });

    return pokemonList;
  } catch (error) {
    console.error("Error fetching all Pokémon data:", error);
    return [];
  }
};

export const getPokemonListByType = async (type) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
    const pokemonList = response.data.pokemon;
    const pokemonIds = pokemonList.map((p) => {
      // Extract ID from Pokémon URL
      const urlParts = p.pokemon.url.split("/").filter(Boolean);
      const id = parseInt(urlParts[urlParts.length - 1], 10);
      return id;
    });
    return pokemonIds;
  } catch (error) {
    console.error(`Error fetching Pokémon of type ${type}:`, error);
    return [];
  }
};
