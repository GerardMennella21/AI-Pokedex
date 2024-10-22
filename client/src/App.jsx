// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PokemonDetails from './pages/PokemonDetails';
import AllPokemon from './pages/AllPokemon';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="pokemon/:name" element={<PokemonDetails />} />
        <Route path="AllPokemon" element={<AllPokemon />} />
      </Route>
    </Routes>
  );
};

export default App;
