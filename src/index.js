import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header' 
import Creators  from './Creators';
import Apparition from './Apparition';
import Gallery from './Gallery';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Creators/>
    <Apparition/>
    <Gallery/>
    <Footer/>
  </React.StrictMode>
);

