import { FETCH_CHARACTERS, LOADING } from "../charactersTypes";

const INITIAL_STATE = { characters: [], loading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        characters: [...state.characters, ...action.payload],
        loading: false,
      };
    case LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
