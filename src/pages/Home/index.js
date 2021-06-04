import React from "react";
import PokemonCard from "./components/Card";
import { CardDeck, Container } from "react-bootstrap";
import PokemonPagination from "./components/Pagination";
import useHomeLogic from "../../hooks/useHomeLogic.js";
import Loading from "../../components/LoadingPage";
import { useSelector } from "react-redux";
function HomePage() {
  const isLoading = useSelector((state) => state.fetchPokemon.isLoading);
  const {
    paginate,
    currentPokemon,
    pokemonPerPage,
    allPokemon,
    currentPage,
  } = useHomeLogic();

  if (isLoading || allPokemon.length === 0) {
    return <Loading />;
  }

  return (
    //return JSX
    <>
      <Container>
        <h1 className="mb-4">
          <center>Pokemon List</center>
        </h1>
        <CardDeck>
          {currentPokemon.map((data) => (
            <PokemonCard data={data} key={data.id} />
          ))}
        </CardDeck>
        <PokemonPagination
          pokemonPerPage={pokemonPerPage}
          allPokemon={allPokemon}
          paginate={paginate}
          currentPage={currentPage}
        />
      </Container>
    </>
  );
}

export default HomePage;
