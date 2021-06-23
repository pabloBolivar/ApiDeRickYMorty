import { FETCH_CHARACTERS } from "../types/charactersTypes";

export const pullCharacters = () => async (dispatch) => {
  try {
    const request = await fetch("https://rickandmortyapi.com/api/character");
    const response = await request.json();
    dispatch({
      type: FETCH_CHARACTERS,
      payload: response.results
    });
  } catch (error) {
    console.log(("error: ", error.message));
  }
};
