import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './global.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Locations from './pages/Locations';
import Location from './pages/Location';
import About from './pages/About';
import Error from './pages/Error';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Header />
      <Router>
         <Routes>
            <Route path="/" element={<Locations />} />
            <Route path="/location/:id" element={<Location />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </Router>
      <Footer />
   </React.StrictMode>,
);
