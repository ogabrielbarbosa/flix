import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import Movies from './pages/Movies';
import Favorites from './pages/Favorites';
import Error from './pages/Error';

export default function RoutesApp() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/filme/:id' element={<Movies />} />
      <Route path='/favoritos' element={<Favorites />} />

      <Route path='*' element={<Error />} />
    </Routes>
  );
}