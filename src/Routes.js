import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Energy from './pages/Energy';


const RoutesComponent = () => {
    return (
        <>
            <Routes>
                <Route exact path="/Energo" element={<Home />} />
                <Route exact path="/Energo/services" element={<Services />} />
                <Route exact path="/Energo/energy" element={<Energy />} />
            </Routes>
        </>

    )
}

export default RoutesComponent;