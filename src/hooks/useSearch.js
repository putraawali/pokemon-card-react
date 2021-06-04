import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { SEARCH } from "../store/reducers/anotherAction";
function useSearch() {
  const dispatch = useDispatch();
  const history = useHistory();
  const value = useSelector((state) => state.searchValue);
  function search(event) {
    event.preventDefault();
  }
  function changeHandler(event) {
    dispatch({ type: SEARCH, payload: event.target.value });
    history.push("/");
  }

  return { value, changeHandler, search };
}

export default useSearch;
