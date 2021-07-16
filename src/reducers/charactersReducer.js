import { FETCH_CHARACTERS, LOADING, ERROR } from "../charactersTypes";

const INITIAL_STATE = { loading: false, error: null, characters: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        characters: [...action.payload],
        loading: false
      };
    case LOADING:
      return { ...state, loading: true, error: null };
    case ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
