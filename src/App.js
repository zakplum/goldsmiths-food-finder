import React from 'react';
import './styles.css';
import Navbar from './components/index';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import SignIn from './pages/signin';
import Results from './pages/results';
import Privacy from './pages/privacy';
import Sitemap from './pages/sitemap';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/results' element={<Results/>} />
        <Route path='/privacy' element={<Privacy/>} />
        <Route path='/sitemap' element={<Sitemap/>} />
    </Routes>
    <Footer />
    </Router>
  );
}

export default App;
