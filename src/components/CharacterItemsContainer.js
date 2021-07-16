import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import * as charactersActions from "../actions/charactersActions";
import CharacterItems from "./CharacterItems";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";
//
export default function CharacterItemsContainer(props) {
  const characters = useSelector((state) => state.characters);
  const stateLoading = useSelector((state) => state.loading);
  const stateError = useSelector((state) => state.error);
  const actions = useDispatch();
  console.log(actions);
  useEffect(() => {
    props.pullCharacters();
  }, []);

  if (stateLoading) {
    return <Loader />;
  }
  if (stateError) {
    return <Error message={props.error} />;
  }

  return (
    <div>
      {characters && characters.length > 0 ? (
        <ul className="character-container">
          {characters.map((character, i) => {
            return <CharacterItems Key={i} character={character} />;
          })}
        </ul>
      ) : (
        <h3> No hay personajes. </h3>
      )}
    </div>
  );
}
