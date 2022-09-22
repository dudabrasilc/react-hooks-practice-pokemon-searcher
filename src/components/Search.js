import React, {useState} from "react";

function Search({pokemons, handlePokemons}) {
  const [searchInput, setSearchInput] = useState("")

  function handleSearch(e) {
    setSearchInput(e.target.value)
    console.log(e.target.value)
    const filterSearch = pokemons.filter(pokemon => {
      // console.log(searchInput)
      return pokemon.name.includes(searchInput)
    })
    console.log(filterSearch)
    handlePokemons(filterSearch)
  }


  return (
    <div className="ui search">
      <form>
      <div className="ui icon input">
        <input className="prompt" value={searchInput} onChange={handleSearch}/>
        <i className="search icon"/>
      </div>
      </form>
    </div>
  );
}

export default Search;
