import React from "react";
import { Wrap, WrapItem, Checkbox } from "@chakra-ui/react";

const pokemonTypes = [
  "normal",
  "fire",
  "water",
  "grass",
  "electric",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dark",
  "dragon",
  "steel",
  "fairy",
];

const TypeFilter = ({ selectedTypes, setSelectedTypes }) => {
  const handleTypeChange = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  return (
    <Wrap spacing={2} mb={4}>
      {pokemonTypes.map((type) => (
        <WrapItem key={type}>
          <Checkbox
            colorScheme={typeColors[type]}
            isChecked={selectedTypes.includes(type)}
            onChange={() => handleTypeChange(type)}
            textTransform="capitalize"
          >
            {type}
          </Checkbox>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default TypeFilter;
