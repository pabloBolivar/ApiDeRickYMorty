const INITIAL_STATE = { characters: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "fetch_characters":
      return { characters: [...state.characters, ...action.payload] };
    default:
      return state;
  }
};
