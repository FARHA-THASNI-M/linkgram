import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; 
import Footer from './Footer';
import { Homepage } from './Homepage'; 
import Privacy from './Privacy'; 
import Terms from './Terms'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <div className="main-content mt-16">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
