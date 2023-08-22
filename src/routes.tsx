import * as React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import {Routes, Route} from 'react-router-dom';

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path='home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default CustomRoutes;
