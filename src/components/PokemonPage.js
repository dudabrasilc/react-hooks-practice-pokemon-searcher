import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])


  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(r => r.json())
    .then(pokemonsData => {
      // console.log(pokemonsData)
      setPokemons(pokemonsData)
    })
  }, [])

  function handlePokemons(pokemon) {
    setPokemons(pokemon)
  }

  function addPokemon(newPokemon) {
    console.log("in pokemonpage: ", newPokemon)
    const newArray=[...pokemons, newPokemon]
    setPokemons(newArray)
  }


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemons={pokemons} addPokemon={addPokemon}/>
      <br />
      <Search pokemons={pokemons} handlePokemons={handlePokemons}/>
      <br />
      <PokemonCollection pokemons={pokemons} setPokemons={setPokemons}/>
    </Container>
  );
}

export default PokemonPage;
