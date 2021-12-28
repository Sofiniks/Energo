import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Hero from '../components/Hero/Hero';
import Form from '../components/ContactUs/ContactUs';
import MainBanner from '../components/MainBanner/MainBanner';
import ServicesComponent from '../components/ServicesComponent/ServicesComponent';
import ServicesImage from '../assets/servicesBanner.jpg';

const Services = () => {
    const isTablet = useMediaQuery({ maxWidth: 1023 });
    return (
        <>
            <Hero bannerImage={ServicesImage} />
            {!isTablet && <MainBanner />}
            <ServicesComponent />
            <Form />
        </>

    )
}

export default Services;