import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import { ContainerHeader, TextFlix, ContainerNav } from './styles';

function Header() {
  return (
    <ContainerHeader>
      <Link to='/'>
        <TextFlix>Flix</TextFlix>
      </Link>

      <ContainerNav>
        <Link to='/favoritos'>Meus Filmes</Link>
      </ContainerNav>
    </ContainerHeader>
  );
}

export default Header;
