import React, { useEffect } from 'react';
import { initGA } from './utilities/tracking.utils';

import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';

import './App.css';

function App() {
  useEffect(() => {
    initGA('UA-156429141-1');
  });
  
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
