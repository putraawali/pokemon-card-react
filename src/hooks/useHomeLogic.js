import { useEffect, useState } from "react";
import {
  fetchAllAsync,
  fetchByNameAsync,
  fetchByTypeAsync,
} from "../store/actions/pokemon";
import useDebounce from "./useDebounce";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
function useHomeLogic() {
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonPerPage = 15;
  const searchValue = useSelector((state) => state.anotherAction.searchValue);
  const allPokemon = useSelector((state) => state.fetchPokemon.allPokemon);
  const dispatch = useDispatch();
  const query = new URLSearchParams(useLocation().search).get("type");
  let currentPokemon;

  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  currentPokemon = allPokemon.slice(indexOfFirstPokemon, indexOfLastPokemon);

  //trigger call pokemon card base on logic of pagination when change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const debouncedValue = useDebounce(searchValue, 200);
  useEffect(() => {
    if (!searchValue && !query) {
      // first fetch
      dispatch(fetchAllAsync());
    } else if (searchValue && !query) {
      // fetch search by name
      dispatch(fetchByNameAsync(searchValue));
    } else {
      // fetch by type
      dispatch(fetchByTypeAsync(query));
    }
  }, [debouncedValue, query]);
  return { paginate, currentPokemon, pokemonPerPage, allPokemon };
}

export default useHomeLogic;
