import React from "react";
import Pagination from "react-bootstrap/Pagination";
function PokemonPagination(props) {
  // get variable from props
  const { pokemonPerPage, allPokemon, paginate, currentPage } = props;

  // get number of page for pagination
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(allPokemon.length / pokemonPerPage); i++) {
    pageNumber.push(i);
  }

  // return html
  return (
    <Pagination>
      {pageNumber.map((page) => {
        const activeClass = currentPage === page ? "active" : "";
        return (
          <Pagination.Item
            className={`controls ${activeClass}`}
            onClick={() => paginate(page)}
            key={page}
          >
            {page}
          </Pagination.Item>
        );
      })}
    </Pagination>
  );
}

export default PokemonPagination;
