// src/components/SearchBar.jsx
import { Input, HStack } from '@chakra-ui/react';
import debounce from 'lodash.debounce';
import { useCallback } from 'react';

const SearchBar = ({ onSearch }) => {
  const debouncedChangeHandler = useCallback(
    debounce((value) => {
      onSearch(value);
    }, 300),
    [onSearch]
  );

  const handleInputChange = (e) => {
    debouncedChangeHandler(e.target.value);
  };

  return (
    <HStack mb={6}>
      <Input
        placeholder="Search Pokémon by name or ID"
        onChange={handleInputChange}
      />
    </HStack>
  );
};

export default SearchBar;
