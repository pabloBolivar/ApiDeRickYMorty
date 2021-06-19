import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as charactersActions from "../actions/charactersActions";
import CharacterManager from "./components/CharacterManager";

function CharacterManagerContainer(props) {
  useEffect(() => {
    return props.pullCharacters;
  });

  const charactersDisplayer = () => {
    if (props.store.characters.length > 0) {
      return props.store.characters.map((character) => {
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

  return <CharacterManager displayer={charactersDisplayer} />;
}

const mapStateToProps = (reducers) => {
  return reducers.charactersReducer;
};

export default connect(
  mapStateToProps,
  charactersActions
)(CharacterManagerContainer);