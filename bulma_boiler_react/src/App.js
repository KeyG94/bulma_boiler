import React from 'react';
import './css/mystyles.css';
import CardLayout from './components/CardLayout';
import FooterLayout from './components/FooterLayout';
import HeroLayout from './components/HeroLayout';
import Navgation from './components/Navigation';

function App() {
	return (
    <>
      <Navgation />
      <HeroLayout />
      <CardLayout />
      <FooterLayout />
    </>
	);
}

export default App;
