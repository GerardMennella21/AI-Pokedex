import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Image,
  Text,
  Spinner,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  HStack,
  Badge,
  Progress,
} from '@chakra-ui/react';
import { getPokemon } from '../api/pokeApi';
import { capitalizeFirstLetter } from '../utils/helpers';

const typeColors = {
  normal: 'gray',
  fire: 'red',
  water: 'blue',
  grass: 'green',
  electric: 'yellow',
  ice: 'cyan',
  fighting: 'orange',
  poison: 'purple',
  ground: 'yellow',
  flying: 'teal',
  psychic: 'pink',
  bug: 'lime',
  rock: 'orange',
  ghost: 'purple',
  dark: 'gray',
  dragon: 'purple',
  steel: 'gray',
  fairy: 'pink',
};

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
      <VStack spacing={4} align="center">
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          boxSize="200px"
          objectFit="contain"
        />
        <Text fontSize="3xl" fontWeight="bold" textTransform="capitalize">
          {pokemon.name}
        </Text>
        <HStack>
          {pokemon.types.map((typeInfo) => (
            <Badge
              key={typeInfo.slot}
              colorScheme={typeInfo.type.name}
              px={3}
              py={1}
              borderRadius="md"
              textTransform="capitalize"
            >
              {typeInfo.type.name}
            </Badge>
          ))}
        </HStack>
      </VStack>

      <Tabs mt={8} variant="enclosed">
        <TabList>
          <Tab>Stats</Tab>
          <Tab>Abilities</Tab>
          <Tab>Moves</Tab>
        </TabList>

        <TabPanels>
          {/* Stats Tab */}
          <TabPanel>
            {pokemon.stats.map((statInfo) => (
              <Box key={statInfo.stat.name} mb={4}>
                <Text textTransform="capitalize" fontWeight="bold">
                  {statInfo.stat.name}: {statInfo.base_stat}
                </Text>
                <Progress value={statInfo.base_stat} max={255} />
              </Box>
            ))}
          </TabPanel>

          {/* Abilities Tab */}
          <TabPanel>
            <VStack align="start">
              {pokemon.abilities.map((abilityInfo) => (
                <Text key={abilityInfo.slot} textTransform="capitalize">
                  - {abilityInfo.ability.name}
                </Text>
              ))}
            </VStack>
          </TabPanel>

          {/* Moves Tab */}
          <TabPanel>
            <VStack align="start" maxH="400px" overflowY="auto">
              {pokemon.moves.map((moveInfo) => (
                <Text key={moveInfo.move.name} textTransform="capitalize">
                  - {moveInfo.move.name}
                </Text>
              ))}
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default PokemonDetails;
