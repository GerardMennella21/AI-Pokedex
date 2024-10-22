// src/components/ScrollingCarousel.jsx
import React, { useEffect, useState } from 'react';
import { Box, Image, usePrefersReducedMotion } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { getRandomPokemonSprites } from '../api/pokeApi';

const MotionBox = motion.create(Box);

const ScrollingCarousel = () => {
  const [sprites, setSprites] = useState([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const fetchSprites = async () => {
      const spritesData = await getRandomPokemonSprites(15);
      setSprites(spritesData);
    };

    fetchSprites();
  }, []);

  if (sprites.length === 0) {
    return null; // Or a loading indicator
  }

  const duplicatedSprites = [...sprites, ...sprites];

  const totalWidth = duplicatedSprites.length * 100; // Each sprite is 100px wide

  const carouselAnimation = prefersReducedMotion
    ? {}
    : {
        x: [0, -totalWidth / 2],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        },
      };

  return (
    <Box overflow="hidden" width="100%" mt={8}>
      <MotionBox
        display="flex"
        animate={carouselAnimation}
        style={{ width: `${totalWidth}px` }}
      >
        {duplicatedSprites.map((sprite, index) => (
          <Image
            key={index}
            src={sprite}
            alt={`Pokémon Sprite ${index + 1}`}
            boxSize="100px"
            objectFit="contain"
          />
        ))}
      </MotionBox>
    </Box>
  );
};

export default ScrollingCarousel;
