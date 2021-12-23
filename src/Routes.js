import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Energy from './pages/Energy';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const RoutesComponent = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/energy" element={<Energy />} />
            </Routes>
            <Footer />
        </>

    )
}

export default RoutesComponent;