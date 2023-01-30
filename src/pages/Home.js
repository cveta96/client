import React, { useEffect } from 'react';
import { FiSettings } from 'react-icons/fi';
import { Outlet } from 'react-router-dom';
import { Navbar, Footer, Sidebar, ThemeSettings } from '../components';

//redux
import { selectCurrentUser, selectCurrentToken } from '../slices/authSlice';
import { useSelector } from 'react-redux';

import { useStateContext } from '../contexts/ContextProvider';
const Home = () => {
  //redux
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  console.log(`${user} and ${token}`);

  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
          <button
            type='button'
            onClick={() => setThemeSettings(true)}
            style={{ background: currentColor, borderRadius: '50%' }}
            className='text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray'
          >
            <FiSettings />
          </button>
        </div>
        {activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white '>
            <Sidebar />
          </div>
        ) : (
          <div className='w-0 dark:bg-secondary-dark-bg'>
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
              : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
          }
        >
          <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full '>
            <Navbar />
          </div>
          <div>
            {themeSettings && <ThemeSettings />}
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
