export const SEARCH = "pokemon/search";
export const ADD_FAVORITE = "pokemon/addFavorites";

const initialState = {
  searchValue: "",
  favoritesPokemon: [],
};

export function anotherAction(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SEARCH:
      return { ...state, searchValue: payload };
    case ADD_FAVORITE:
      return {
        ...state,
        favoritesPokemon: state.favoritesPokemon.concat(payload),
      };
    default:
      return state;
  }
}
