import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Users from './pages/Users/Users';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';

const App = () => {

  return (    
    <div>
      <Navigation />

      <main className="row justify-content-center pt-md-3">
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Users /> } />
            <Route path="/profile" element={ <Profile /> } />
            <Route path="/login" element={ <Login /> } />
          </Routes>
        </BrowserRouter>

      </main>
    </div>
  );
}

export default App;
