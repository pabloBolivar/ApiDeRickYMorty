export const pullCharacters = () => async (dispatch) => {
  const request = await fetch("https://rickandmortyapi.com/api/characters");
  const response = await request.json();
  dispatch({
    type: "fetch_characters",
    payload: response.results
  });
};
