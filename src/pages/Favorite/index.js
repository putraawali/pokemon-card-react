import React from "react";
import { useSelector } from "react-redux";
import { CardDeck, Container } from "react-bootstrap";
import PokemonCard from "./Card";
import LoadingPage from "../../components/LoadingPage";
function Favorite() {
  const favoritesPokemon = useSelector(
    (state) => state.anotherAction.favoritesPokemon
  );

  return (
    <>
      <Container>
        <h1 className="mb-4">
          <center>Your Favourites Pokemon</center>
        </h1>
        <CardDeck>
          {favoritesPokemon.map((data) => (
            <PokemonCard data={data} key={data.id} />
          ))}
        </CardDeck>
      </Container>
    </>
  );
}
export default Favorite;
