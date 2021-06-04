export const FETCH_ALL = "pokemon/fetchAll";
export const FETCH_BY_NAME = "pokemon/fetchByName";
export const FETCH_BY_TYPE = "pokemon/fetchByType";
export const FETCH_BY_ID = "pokemon/fetchById";
export const CHANGE_LOADING = "isLoading/changeFalse";
const initialState = {
  allPokemon: [],
  pokemonInfo: {},
  isLoading: true,
};

export function fetchPokemon(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ALL:
      return { ...state, allPokemon: payload, isLoading: false };
    case FETCH_BY_NAME:
      return { ...state, allPokemon: payload, isLoading: false };
    case FETCH_BY_TYPE:
      return { ...state, allPokemon: payload, isLoading: false };
    case FETCH_BY_ID:
      return { ...state, pokemonInfo: payload, isLoading: false };
    case CHANGE_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
