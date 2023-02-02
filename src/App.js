import React from 'react';
import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';

// Test prot routes #it works
import RequireAuth from './data/RequireAuth';
import { Home, Login, Register, Landing } from './pages/';

//test current user and jwt cookie
import { useDispatch } from 'react-redux';
import { setCredentials } from './slices/authSlice';
import { useCheckMutation, useLogoutMutation } from './api/authApiSlice';

const App = () => {
  const [check] = useCheckMutation();
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userData = await check().unwrap();
        dispatch(setCredentials({ ...userData }));
        navigate('/home');
      } catch (err) {
        logout();
      }
    };
    checkUser();
    // eslint-disable-next-line
  }, []);

  return (
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
  );
};

export default App;
