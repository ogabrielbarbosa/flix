import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import {
  Link
} from "react-router-dom";

import { Container, ContainerFavorites, SubContainerFavorites, SubContainer, Title, ContainerMovies, Movie, Img, SubContainerMovies, SubTitle, ButtonDeleted } from './styles';

import Header from '../../components/Header';

import { FiTrash } from 'react-icons/fi';
import { toast } from 'react-toastify';

function Favorites() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@flix");

    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function deletedMovie(id) {
    let filtroFilmes = filmes.filter((item) => {
      return (item.id !== id)
    })

    setFilmes(filtroFilmes);
    localStorage.setItem("@flix", JSON.stringify(filtroFilmes));
    toast.success('Filme deletado');
  }

  return (
    <Container>
      <ContainerFavorites>
        <SubContainer>
          <Header />
          <SubContainerFavorites>
            {filmes.length === 0 ? (
              <Title>Você não tem nenhum filme salvo!</Title>
            ) : (
              <>
                <Title>Favoritos</Title>
                <ContainerMovies>
                  {filmes.map((filme) => {
                    return (
                      <Movie key={filme.id}>
                        <Link to={`/filme/${filme.id}`}>
                          <Img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}></Img>
                        </Link>
                        <SubContainerMovies>
                          <ButtonDeleted onClick={() => deletedMovie(filme.id)}>
                            <FiTrash color='#fff' size={20} />
                          </ButtonDeleted>
                        </SubContainerMovies>
                      </Movie>
                    )
                  })}
                </ContainerMovies>
              </>
            )}
          </SubContainerFavorites>
        </SubContainer>
      </ContainerFavorites>
    </Container>
  );
}

export default Favorites;
