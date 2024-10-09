import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import History from './components/History';
import EditOrder from './components/EditOrder';
import About from './components/About';


const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<History/>}/>
                <Route path="/home" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/edit/:id" element={<EditOrder />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;