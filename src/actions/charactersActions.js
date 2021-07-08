import { FETCH_CHARACTERS, LOADING, ERROR } from "../charactersTypes";

export const pullCharacters = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const request = await fetch("https://rickandmortyapi.com/api/character");
    const response = await request.json();
    dispatch({
      type: FETCH_CHARACTERS,
      payload: response.results,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message + "Por favor, inténtelo un poco más tarde",
    });
  }
};
