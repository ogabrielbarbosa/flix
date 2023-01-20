import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import {
  Link
} from "react-router-dom";

import { Container, ContainerFavorites, SubContainerFavorites, SubContainer, Title, SubTitle } from './styles';

import Header from '../../components/Header';

function Error() {
  return (
    <Container>
      <ContainerFavorites>
        <SubContainer>
          <Header />
          <SubContainerFavorites>
            <Title>404</Title>
            <SubTitle>SOS...SOS... Algo de certo não está errado, OPS!</SubTitle>
            <Link to='/'>Voltar ao menu</Link>
          </SubContainerFavorites>
        </SubContainer>
      </ContainerFavorites>
    </Container>
  );
}

export default Error;
