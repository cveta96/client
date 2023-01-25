import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

// Test prot routes
import RequireAuth from './data/RequireAuth';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={'HOME'} />
        <Route path='login' element={'LOGIN'} />
        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path='home' element={<Home />}>
            <Route path='ecommerce' element={'oke'} />
            <Route path='orders' element={'orders'} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
