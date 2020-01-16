import React from 'react';

import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
