import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Form from '../components/ContactUs/ContactUs';
import MainBanner from '../components/MainBanner/MainBanner';
import ServicesComponent from '../components/ServicesComponent/ServicesComponent';
import ServicesImage from '../assets/servicesBanner.jpg';

const Services = () => {
    const isTablet = useMediaQuery({ maxWidth: 1023 });
    return (
        <>
            <Header />
            <Hero bannerImage={ServicesImage} />
            {!isTablet && <MainBanner />}
            <ServicesComponent />
            <Form />
            <Footer />
        </>

    )
}

export default Services;