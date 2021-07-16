import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as charactersActions from "../actions/charactersActions";
import CharacterItems from "./CharacterItems";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";

export default function CharacterItemsContainer(props) {
  const characters = useSelector((state) => state.charactersReducer);
  const actions = useDispatch();
  console.log(actions);
  useEffect(() => {
    actions(charactersActions.pullCharacters());
  }, []);

  if (characters.loading) {
    return <Loader />;
  }
  if (characters.error) {
    return <Error message={characters.error} />;
  }

  return (
    <div>
      {characters.characters && characters.characters.length > 0 ? (
        <ul className="character-container">
          {characters.characters.map((character, i) => {
            return <CharacterItems Key={i} character={character} />;
          })}
        </ul>
      ) : (
        <h3> No hay personajes. </h3>
      )}
    </div>
  );
}
