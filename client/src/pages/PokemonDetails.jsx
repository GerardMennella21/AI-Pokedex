// src/pages/PokemonDetails.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, Spinner } from '@chakra-ui/react';
import { getPokemon } from '../api/pokeApi';

const PokemonDetails = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await getPokemon(name.toLowerCase());
      setPokemon(data);
      setLoading(false);
    };
    fetchPokemon();
  }, [name]);

  if (loading) return <Spinner size="xl" />;

  if (!pokemon) return <Text>Pokémon not found.</Text>;

  return (
    <Box p={4} textAlign="center">
      <Text fontSize="2xl" fontWeight="bold" textTransform="capitalize">
        {pokemon.name}
      </Text>
      <Image src={pokemon.sprites.front_default} alt={pokemon.name} />
      <Text>Height: {pokemon.height}</Text>
      <Text>Weight: {pokemon.weight}</Text>
      {/* Add more details as needed */}
    </Box>
  );
};

export default PokemonDetails;
