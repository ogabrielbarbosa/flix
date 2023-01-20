import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import Movies from './pages/Movies';
import Favorites from './pages/Favorites';

import RoutesApp from './routes';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <Router>
      <ToastContainer autoClose={2000}/>
      <RoutesApp/>
    </Router>
  );
}