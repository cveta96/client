import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

// Test prot routes
import RequireAuth from './data/RequireAuth';
import { Home, Login, Register, Landing } from './pages/';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path='home' element={<Home />}>
            <Route path='ecommerce' element={'oke'} />
            <Route path='orders' element={'orders'} />
            <Route path='customers' element={'customers'} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
