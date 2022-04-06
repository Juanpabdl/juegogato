import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
  
  // ========================================
  
  ReactDOM.render(
    <Router>
      <div>
        <Routes>
          <Route exact path='/' component={Home}/>
        </Routes>
      </div>
    </Router>,
    document.getElementById('root')
  );