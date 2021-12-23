import React from 'react';
import Hero from '../components/Hero/Hero';
import Form from '../components/ContactUs/ContactUs';
import MainBanner from '../components/MainBanner/MainBanner';
import ServicesComponent from '../components/ServicesComponent/ServicesComponent';
import ServicesImage from '../assets/servicesBanner.jpg';

const Services = () => {
    return (
        <>
            <Hero bannerImage={ServicesImage} />
            <MainBanner />
            <ServicesComponent />
            <Form />
        </>

    )
}

export default Services;