import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import Nosotros from './components/Nosotros/Nosotros';
import Servicios from './components/Servicios/Servicios';
import Contacto from './components/Contacto/Contacto';
/*Pagina de TEC*/
ReactDOM.render(
  <Router>
    <div>
      <Routes>
        {/* Páginas */}
        <Route exact path='/' component={Home} />
        <Route path='/nosotros' component={Nosotros} />
        <Route path='/servicios' component={Servicios} />
        <Route path='/contacto' component={Contacto} /> 
      </Routes>
    </div>
  </Router>,
  document.getElementById('root')
);