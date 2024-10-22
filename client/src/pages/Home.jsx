// src/pages/Home.jsx
import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ScrollingCarousel from '../components/ScrollingCarousel';

const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);
const MotionImage = motion.create(Image);

const Home = () => {
  return (
    <MotionBox
      width="100vw"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      overflowX="hidden"
      textAlign="center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <MotionText
        fontSize={['4xl', '5xl', '6xl']}
        fontWeight="bold"
        mb={4}
        fontFamily="heading"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        color="yellow.400"
        textShadow="2px 2px 4px #3B4CCA"
      >
        Welcome to the AI-Powered Pokedex
      </MotionText>
      <MotionImage
        src="/pokeball.png"
        alt="Pokéball"
        boxSize="150px"
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />
      <ScrollingCarousel />
    </MotionBox>
  );
};

export default Home;
