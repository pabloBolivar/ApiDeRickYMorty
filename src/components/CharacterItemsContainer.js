import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as charactersActions from "../actions/charactersActions";
import CharacterItems from "./CharacterItems";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";

function CharacterItemsContainer(props) {
  useEffect(() => {
    props.pullCharacters();
  }, []);

  if (props.loading) {
    return <Loader />;
  }
  if (props.error) {
    return <Error message={props.error} />;
  }

  return (
    <div>
      {props.characters && props.characters.length > 0 ? (
        <ul className="character-container">
          {props.characters.map((character, i) => {
            return <CharacterItems Key={i} character={character} />;
          })}
        </ul>
      ) : (
        <h3> No hay personajes. </h3>
      )}
    </div>
  );
}

const mapStateToProps = (store) => {
  return store.charactersReducer;
};

export default connect(
  mapStateToProps,
  charactersActions
)(CharacterItemsContainer);
