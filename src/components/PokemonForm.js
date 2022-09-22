import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({pokemons, addPokemon}) {
  const [name, setName] = useState("")
  const [hp, setHp] = useState("")
  const [urlFront, setUrlFront] = useState("")
  const [urlBack, setUrlBack] = useState("")

  // console.log(pokemons.length + 1)

  function handleSubmit(e) {
    e.preventDefault()
    // console.log(name)
    // console.log(hp)
    // console.log(urlFront)
    // console.log(urlBack)
    let pokemonId = pokemons.length + 1

    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        hp: hp,
        sprites: {
          front: urlFront,
          back: urlBack
        }
      })
    })
    .then(r => r.json())
    .then(obj => {
      console.log(obj)
      addPokemon(obj)
    })
  }

  function handleName(e) {
    setName(e.target.value)
  }
  
  function handleHp(e) {
    setHp(e.target.value)
  }

  function handleFront(e) {
    setUrlFront(e.target.value)
  }

  function handleBack(e) {
    setUrlBack(e.target.value)
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={handleName} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={handleHp} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={urlFront}
            onChange={handleFront}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={urlBack}
            onChange={handleBack}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
