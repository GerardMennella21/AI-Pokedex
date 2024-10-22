import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const PokemonCard = ({ pokemon }) => {
  const [imageSrc, setImageSrc] = useState(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`
  );

  const handleImageError = () => {
    // Switch to static image if animated sprite fails to load
    setImageSrc(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
    );
  };

  return (
    <Box
      as={Link}
      to={`/pokemon/${pokemon.name}`}
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
    >
      <Image
        src={imageSrc}
        alt={pokemon.name}
        onError={handleImageError}
        boxSize="120px"
        objectFit="contain"
        mb={2}
      />
      <Text fontWeight="bold" textTransform="capitalize" textAlign="center">
        {pokemon.name}
      </Text>
    </Box>
  );
};

export default PokemonCard;
