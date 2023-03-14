import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.scss';
import Users from './pages/Users/Users';
import Login from './pages/Login/Login';
import Navigation from './components/Navigation/Navigation';

const App = () => {

  return (    
    <div>
      <Navigation />

      <main className="row justify-content-center pt-md-3">
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Users /> } />
            <Route path="/login" element={ <Login /> } />
          </Routes>
        </BrowserRouter>

      </main>
    </div>
  );
}

export default App;
