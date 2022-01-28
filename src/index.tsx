import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import './styles/css/main.css';
import './styles/css/board.css';
import './styles/css/game-view.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

import Login from './routes/login';
import Signup from './routes/signup';
import Game from './routes/game';
import Browse from './routes/browse';
import Profile from './routes/profile';

render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Browse />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/game' element={<Game />} />
      <Route path='/browse' element={<Browse />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
