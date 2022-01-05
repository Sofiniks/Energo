import React from 'react';
import Hero from '../components/Hero/Hero';
import Form from '../components/ContactUs/ContactUs';
import EnergyImage from '../assets/energyBanner.jpg';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import EnergyBanner from '../components/EnergyBanner/EnergyBanner';
import WhatWeDo from '../components/WhatWeDo/WhatWeDo';
import Donations from '../components/Donations/Donations';
import Projects from '../components/Projects/Projects';

const Energy = () => {

    return (
        <>
            <Header />
            <Hero withOverlay bannerImage={EnergyImage} />
            <EnergyBanner />
            <WhatWeDo />
            <Projects />
            <Donations />
            <Form />
            <Footer />
        </>

    )
}

export default Energy;