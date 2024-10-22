// src/pages/Home.jsx
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchBar from "../components/SearchBar";
import PokemonCard from "../components/PokemonCard";
import { getPokemonList } from "../api/pokeApi";

const AllPokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPokemonCount, setTotalPokemonCount] = useState(null);
  const [loading, setLoading] = useState(false);

  const limit = 50;

  useEffect(() => {
    fetchMoreData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMoreData = async () => {
    setLoading(true);
    const { pokemonList: newPokemons, totalCount } = await getPokemonList(limit, offset);

    if (totalPokemonCount === null) {
      setTotalPokemonCount(totalCount);
    }

    if (newPokemons.length === 0) {
      setHasMore(false);
      setLoading(false);
      return;
    }

    setPokemonList((prevList) => {
      const existingIds = new Set(prevList.map((p) => p.id));
      const uniqueNewPokemons = newPokemons.filter((pokemon) => !existingIds.has(pokemon.id));
      return [...prevList, ...uniqueNewPokemons];
    });

    setOffset((prevOffset) => prevOffset + limit);

    if (offset + limit >= totalCount) {
      setHasMore(false);
    }

    setLoading(false);
  };

  const handleSearch = useCallback((term) => {
    setSearchTerm(term.toLowerCase());
  }, []);

  const filteredPokemonList = useMemo(() => {
    return pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm)
    );
  }, [pokemonList, searchTerm]);

  return (
    <Box p={[2, 4, 6]} maxW="1200px" mx="auto" overflowX="hidden">
      <SearchBar onSearch={handleSearch} />
      {pokemonList.length === 0 && !hasMore ? (
        <Text>No Pokémon found.</Text>
      ) : (
        <InfiniteScroll
          dataLength={filteredPokemonList.length}
          next={searchTerm ? undefined : fetchMoreData}
          hasMore={searchTerm ? false : hasMore}
          loader={!searchTerm && loading ? <Spinner size="xl" /> : null}
          endMessage={
            !searchTerm && (
              <Text textAlign="center" mt={4}>
                All Pokémon loaded!
              </Text>
            )
          }
          className="hide-scrollbar"
          style={{ overflow: 'visible' }}
        >
          {filteredPokemonList.length > 0 ? (
            <SimpleGrid columns={[2, 3, 4]} spacing={6}>
              {filteredPokemonList.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))}
            </SimpleGrid>
          ) : (
            <Text>No Pokémon found.</Text>
          )}
        </InfiniteScroll>
      )}
    </Box>
  );
};

export default AllPokemon;
