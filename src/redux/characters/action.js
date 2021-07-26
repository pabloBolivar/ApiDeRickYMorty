import { FETCH_CHARACTERS, LOADING, ERROR } from "./types";

export const loading = () => ({ type: LOADING });

export const fetchCharacters = (payload) => ({
  type: FETCH_CHARACTERS,
  payload
});

export const error = (payload) => ({ type: ERROR, payload });

export const pullCharacters = () => async (dispatch) => {
  dispatch(loading());
  try {
    const request = await fetch("https://rickandmortyapi.com/api/character");
    const response = await request.json();
    response.results instanceof Array
      ? dispatch(fetchCharacters(response.results))
      : dispatch(error(`${response.error}. Please, try it later`));
  } catch (error) {
    dispatch(error(`${error}. Please, try it again later`));
  }
};
