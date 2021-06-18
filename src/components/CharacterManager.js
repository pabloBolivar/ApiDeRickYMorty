import React, { useEffect } from "react";

export default function CharacterManager() {
  const [characters, setCharacters] = React.useState([]);

  const pullCharacters = async () => {
    try {
      const request = await fetch("https://rickandmortyapi.com/api/characters");
      const response = await request.json();
      const textResponse = JSON.parse(response);
      setCharacters([...characters, textResponse.results]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return pullCharacters;
  });

  const charactersDisplayer = () => {
    if (characters.length > 0) {
      return characters.map((character) => {
        return (
          <li key={character.id.toString()}>
            <img src={character.image} alt={`avatar de ${character.name}`} />
            <h4>{character.name}</h4>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Planet: {character.origin.name}</p>
          </li>
        );
      });
    }
  };

  return (
    <div>
      <h3>Characters</h3>
      <ul>
        {charactersDisplayer}
      </ul>
    </div>
  );
}
