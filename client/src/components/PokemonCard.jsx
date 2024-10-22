import { Box, Image, Text, Badge, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";

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
  bug: 'green',
  rock: 'orange',
  ghost: 'purple',
  dark: 'gray',
  dragon: 'purple',
  steel: 'gray',
  fairy: 'pink',
};

const PokemonCard = ({ pokemon, onClick }) => {
  const [imageSrc, setImageSrc] = useState(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`
  );

  const handleImageError = () => {
    setImageSrc(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
    );
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="md"
      width="200px"
      height="260px"
      mx="auto"
      bg="white"
      display="flex"
      flexDirection="column"
      alignItems="center"
      cursor="pointer"
      onClick={() => onClick(pokemon)}
    >
      <Image
        src={imageSrc}
        alt={pokemon.name}
        onError={handleImageError}
        boxSize="120px"
        objectFit="contain"
        mb={2}
      />
      <VStack spacing={2}>
        <Text fontWeight="bold" textTransform="capitalize" textAlign="center">
          {pokemon.name}
        </Text>
        <HStack justify="center">
          {pokemon.types.map((typeInfo) => (
            <Badge
              key={typeInfo.slot}
              colorScheme={typeColors[typeInfo.type.name]}
              px={2}
              py={1}
              borderRadius="md"
              textTransform="capitalize"
            >
              {typeInfo.type.name}
            </Badge>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default PokemonCard;
