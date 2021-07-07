import { FETCH_CHARACTERS, LOADING } from "../charactersTypes";

export const pullCharacters = () => async (dispatch) => {
  const request = await fetch("https://rickandmortyapi.com/api/character");
  const response = await request.json();
  dispatch({ type: LOADING });
  dispatch({
    type: FETCH_CHARACTERS,
    payload: response.results,
  });
};
