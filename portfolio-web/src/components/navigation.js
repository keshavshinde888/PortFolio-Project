import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { PortfolioRegister } from '../pages/portfolioRegister';
import { PortfolioView } from '../pages/portfolioView';
import MenuBar from './menuBar';
const Navigation = () => {
  return (
      <BrowserRouter>
      <MenuBar/>
      <Routes>
        <Route path="/" Component={PortfolioRegister} />
        <Route path="/view" Component={PortfolioView} />
      </Routes>  
      </BrowserRouter>
  );
};
export default Navigation;