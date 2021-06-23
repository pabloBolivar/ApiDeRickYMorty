import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as charactersActions from "../actions/charactersActions";
import CharacterManager from "./CharacterManager";

function CharacterManagerContainer(props) {
  useEffect(() => {
    if (!props.characters.length > 0) {
      return props.pullCharacters();
    }
  });

  function charactersDisplayer() {
    if (props.characters.length > 0) {
      return props.characters.map((character) => {
        return (
          <li key={character.id.toString()} className="character-item">
            <img src={character.image} alt={`avatar de ${character.name}`} />
            <h4>{character.name}</h4>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Planet: {character.origin.name}</p>
          </li>
        );
      });
    }
  }

  return <CharacterManager displayer={charactersDisplayer} />;
}

const mapStateToProps = (store) => {
  return store.charactersReducer;
};

export default connect(
  mapStateToProps,
  charactersActions
)(CharacterManagerContainer);
