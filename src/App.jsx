import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import './App.scss';
import Users from './pages/Users/Users';

const queryClient = new QueryClient();

const App = () => {

  return (    
    <QueryClientProvider client={queryClient}>
      <div className="App container">
        <div className="row justify-content-center pt-md-3">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={ <Users /> } />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
