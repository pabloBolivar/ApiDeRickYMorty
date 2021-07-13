import { FETCH_CHARACTERS, LOADING, ERROR } from "../charactersTypes";

export const pullCharacters = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const request = await fetch("https://rickandmortyapi.com/api/character");
    const response = await request.json();
    response.results instanceof Array
      ? dispatch({
          type: FETCH_CHARACTERS,
          payload: response.results,
        })
      : dispatch({
          type: ERROR,
          payload: `${response.error}. Please, try it later`
        });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: `${error}. Please, try it again later`
    });
  }
};
