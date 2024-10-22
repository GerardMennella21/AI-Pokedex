// src/components/ScrollingCarousel.jsx
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Image } from '@chakra-ui/react';
import { getRandomPokemonSprites } from '../api/pokeApi';

const ScrollingCarousel = () => {
  const [sprites, setSprites] = useState([]);

  useEffect(() => {
    const fetchSprites = async () => {
      const spritesData = await getRandomPokemonSprites(30);
      setSprites(spritesData);
    };

    fetchSprites();
  }, []);

  if (sprites.length === 0) {
    return null; // Or a loading indicator
  }

  return (
    <Marquee gradient={false} speed={50}>
      {sprites.map((sprite, index) => (
        <Image
          key={index}
          src={sprite}
          alt={`Pokémon Sprite ${index + 1}`}
          boxSize="100px"
          objectFit="contain"
          mx={2}
        />
      ))}
    </Marquee>
  );
};

export default ScrollingCarousel;
