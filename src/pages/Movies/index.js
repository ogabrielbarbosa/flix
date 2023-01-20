import React, { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import api from '../../services/api';

import { Container, ContainerMovie, SubContainer, SubContainerMovie, ButtonTralier, CollumDatas, RowDatas, ButtonSave, Title, SubTitle, Tagline, SubText, Img, SubContainerDatas } from './styles';
import Header from '../../components/Header';

import { AiFillHeart } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';

import { toast } from 'react-toastify';

function Movies() {
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const navigation = useNavigate();

  useEffect(() => {
    async function loadMovie() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: 'c66b13c68c336358c4eb3587f581a98e',
          language: "pt-BR"
        }
      }).then((response) => {
        setFilme(response.data);
        setLoading(false);
      }).catch(() => {
        navigation("/", { replace: true });
        return;
      })
    }

    loadMovie();
  }, [navigation, id]);

  function saveMovies() {
    const minhaLista = localStorage.getItem("@flix");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id)

    if (hasFilme) {
      toast.error('Esse filme ja tem!');
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@flix", JSON.stringify(filmesSalvos));
    toast.success('Filme salvo');
  }

  if (loading) {
    return (
      <Container>
        <Header />

        <SubContainerMovie>
          <Img alt="Carregando..."></Img>

          <SubContainerDatas>
            <Title>Carregando...</Title>
            <SubTitle>Carregando...</SubTitle>
            <SubTitle>Carregando...</SubTitle>
          </SubContainerDatas>
        </SubContainerMovie>

      </Container>
    )
  }

  function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
  }

  const date = filme.release_date.split("-");

  return (
    <Container>
      <ContainerMovie style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${filme.backdrop_path})` }}>
        <SubContainer>
          <Header />
          <SubContainerMovie>
            <Img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}></Img>
            <SubContainerDatas>
              <Title>{filme.title} {`(${date[0]})`}</Title>
              <SubText>{`${date[2]}/${date[1]}/${date[0]}`} · {filme.genres.map(genre => genre.name).join(', ')} · {toHoursAndMinutes(filme.runtime)}</SubText>

              <RowDatas>
                <SubTitle>{Math.floor(filme.vote_average * 10)}% Avaliação dos usuários</SubTitle>
                <ButtonSave onClick={saveMovies}>
                  <AiFillHeart color='#fff' size={20} />
                </ButtonSave>
                <ButtonTralier target="blank" href={`https://youtube.com/results?search_query=${filme.title} Tralier`}>
                  <BsFillPlayFill color='#fff' size={20} />
                  Reproduzir trailer
                </ButtonTralier>
              </RowDatas>

              <Tagline>{filme.tagline}</Tagline>

              <CollumDatas>
                <SubTitle>Sinopse</SubTitle>
                <SubText>{filme.overview}</SubText>
              </CollumDatas>
            </SubContainerDatas>
          </SubContainerMovie>
        </SubContainer>
      </ContainerMovie>
    </Container>
  );
}

export default Movies;
