import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.scss';
import Users from './pages/Users/Users';
const App = () => {

  return (
    <div className="App container">
      <div className="row justify-content-center pt-md-3">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Users /> } />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
