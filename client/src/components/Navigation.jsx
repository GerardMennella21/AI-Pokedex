// src/components/Navigation.jsx
import React from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionButton = motion.create(Button);

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Pokéball Icon in the Top Left Corner */}
      <MotionButton
        position="fixed"
        top="4"
        left="4"
        zIndex="overlay"
        variant="ghost"
        onClick={onOpen}
        aria-label="Open Menu"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <img
          src="/pokeball.png"
          alt="Pokéball"
          style={{ width: '40px' }}
        />
      </MotionButton>

      {/* Drawer with Navigation Links */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack align="start" spacing={4} mt={8}>
              <Button as={RouterLink} to="/" variant="ghost" onClick={onClose}>
                Home
              </Button>
              <Button as={RouterLink} to="/allpokemon" variant="ghost" onClick={onClose}>
                All Pokémon
              </Button>
              <Button as={RouterLink} to="/items" variant="ghost" onClick={onClose}>
                Items
              </Button>
              <Button as={RouterLink} to="/locations" variant="ghost" onClick={onClose}>
                Locations
              </Button>
              <Button as={RouterLink} to="/ai-chat" variant="ghost" onClick={onClose}>
                AI Chat
              </Button>
              <Button as={RouterLink} to="/login" variant="ghost" onClick={onClose}>
                Login / Sign Up
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navigation;
