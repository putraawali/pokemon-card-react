import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingPage from "../../components/LoadingPage";
import { Card, Container } from "react-bootstrap";
import CardDetail from "./components/CardDetail";
import { useDispatch, useSelector } from "react-redux";
import { fetchByIdAsync } from "../../store/actions/pokemon";

function Pokemon() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detail = useSelector((state) => state.fetchPokemon.pokemonInfo);
  const isLoading = useSelector((state) => state.fetchPokemon.isLoading);
  useEffect(() => {
    dispatch(fetchByIdAsync(id));
  }, []);

  function toUrl() {
    window.open(detail.tcgplayer.url, "_blank"); //to open new page
  }

  if (!detail.name || isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <Container className="pt-4">
        <Card>
          <CardDetail detail={detail} toUrl={toUrl} />
        </Card>
      </Container>
    </>
  );
}
export default Pokemon;
