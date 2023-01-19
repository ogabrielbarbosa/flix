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
      <TextFlix>Flix</TextFlix>

      <ContainerNav>
        <Link to='/'>Filmes</Link>
      </ContainerNav>
    </ContainerHeader>
  );
}

export default Header;
