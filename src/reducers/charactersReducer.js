import { FETCH_CHARACTERS } from "../types/charactersTypes";

const INITIAL_STATE = { characters: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return { characters: [...state.characters, ...action.payload] };
    default:
      return state;
  }
};
