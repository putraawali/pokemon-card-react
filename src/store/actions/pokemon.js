import {
  FETCH_ALL,
  FETCH_BY_NAME,
  FETCH_BY_TYPE,
  FETCH_BY_ID,
  CHANGE_LOADING,
} from "../reducers/pokemon";
import {
  getAllPokemon,
  pokemonById,
  pokemonByName,
  pokemonByType,
} from "../../helpers/fetch";

// ---------- ALL POKEMON ----------
export function fetchAllAsync() {
  return (dispatch) => {
    getAllPokemon()
      .then((data) => {
        dispatch(fetchAll(data));
      })
      .finally(() => dispatch({ type: CHANGE_LOADING }));
  };
}

function fetchAll(data) {
  return { type: FETCH_ALL, payload: data };
}

// ---------- POKEMON BY NAME ----------
export function fetchByNameAsync(name) {
  return (dispatch) => {
    pokemonByName(name)
      .then((data) => {
        dispatch(fetchByName(data));
      })
      .finally(() => dispatch({ type: CHANGE_LOADING }));
  };
}

function fetchByName(data) {
  return { type: FETCH_BY_NAME, payload: data };
}

// ---------- POKEMON BY TYPE ----------
export function fetchByTypeAsync(type) {
  return (dispatch) => {
    pokemonByType(type)
      .then((data) => dispatch(fetchByType(data)))
      .finally(() => dispatch({ type: CHANGE_LOADING }));
  };
}

function fetchByType(data) {
  return { type: FETCH_BY_TYPE, payload: data };
}

// ---------- POKEMON BY ID ----------
export function fetchByIdAsync(id) {
  return (dispatch) => {
    pokemonById(id)
      .then((data) => dispatch(fetchById(data)))
      .finally(() => dispatch({ type: CHANGE_LOADING }));
  };
}

function fetchById(data) {
  return { type: FETCH_BY_ID, payload: data };
}
