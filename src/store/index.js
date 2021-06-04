import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { fetchPokemon } from "./reducers/pokemon";
import { anotherAction } from "./reducers/anotherAction";
import thunk from "redux-thunk";
const reducer = combineReducers({
  fetchPokemon,
  anotherAction,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
