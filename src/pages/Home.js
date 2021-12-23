import React from 'react';
import Hero from '../components/Hero/Hero';
import MainBanner from '../components/MainBanner/MainBanner';
import Form from '../components/ContactUs/ContactUs';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import BannerImage from '../assets/mainBanner.jpg';

const Home = () => {
    return (
        <>
            <Hero withOverlay isMainPage bannerImage={BannerImage} />
            <MainBanner />
            <WhyChooseUs />
            <Form />
        </>

    )
}

export default Home;