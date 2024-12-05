import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; // Your navbar component
import Footer from './Footer'; // Your footer component
import { Homepage } from './Homepage'; // Homepage component
import Privacy from './Privacy'; // Privacy page component
import Terms from './Terms'; // Terms page component

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar Component */}
        <Navbar />
        
        {/* Main Content with spacing from the navbar */}
        <div className="main-content mt-16">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
