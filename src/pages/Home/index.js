import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import {
  Link
} from "react-router-dom";

import { Container, ContainerMovie, SubContainerMovie, ContainerDataTop, TitleMovie, OverviewMovie, ButtonTralier, SubContainer, Title, ContainerMovies, Movie, Img } from './styles';

import Header from '../../components/Header';
import { BsFillPlayFill } from 'react-icons/bs';

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: 'c66b13c68c336358c4eb3587f581a98e',
          language: "pt-BR",
          page: 1
        }
      })

      setFilmes(response.data.results);
      setLoading(false);
    }

    loadFilmes();
  }, []);

  let x = Math.trunc(Math.random() * (19 - 0) + 0);

  if (loading) {
    return (
      <Container>
        <Header />

        <SubContainer>
          <Title>Carregando...</Title>
        </SubContainer>
      </Container>
    )
  }

  return (
    <Container>
      <ContainerMovie style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${filmes[x].backdrop_path})` }}>
        <SubContainer>
          <Header />
          <ContainerDataTop>
            <TitleMovie>{filmes[x].title}</TitleMovie>
            <OverviewMovie>{filmes[x].overview}</OverviewMovie>
            <ButtonTralier target="blank" href={`https://youtube.com/results?search_query=${filmes[x].title} Tralier`}>
              <BsFillPlayFill color='#fff' size={20} />
              Reproduzir trailer
            </ButtonTralier>
          </ContainerDataTop>
          <SubContainerMovie>
            <Title>Todos os filmes em exibição</Title>
            <ContainerMovies>
              {filmes.map((filme) => {
                return (
                  <Link to={`/filme/${filme.id}`}>
                    <Movie key={filme.id}>
                      <Img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}></Img>
                    </Movie>
                  </Link>
                )
              })}
            </ContainerMovies>
          </SubContainerMovie>
        </SubContainer>
      </ContainerMovie>
    </Container>
  );
}

export default Home;
