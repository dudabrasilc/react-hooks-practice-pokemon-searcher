import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons}) {
  // console.log(pokemons)

  const pokemonsList = pokemons.map(pokemon => {
    return (
      <PokemonCard name={pokemon.name} key={pokemon.id} hp={pokemon.hp} frontSprite={pokemon.sprites.front} backSprite={pokemon.sprites.back}/>
    )
  })

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonsList}
    </Card.Group>
  );
}

export default PokemonCollection;
