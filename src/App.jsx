import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.scss';
import Users from './pages/Users/Users';
import Login from './pages/Login/Login';

const App = () => {

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Login', link: '/login' },
  ];

  return (    
    <div className="App container">
      <div className="row justify-content-center pt-md-3">

        <nav>
          <ul>
            {menuItems.map((item) => (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Users /> } />
            <Route path="/login" element={ <Login /> } />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
