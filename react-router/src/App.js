import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Card from './components/Card';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={< Contact />} />
          {/* for redirecting a pages */}
          {/* <Route path='/contact' element={< Navigate replace to='/about' />} /> */}

          {/* for params */}
          <Route path='/:user' element={<Card />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;


