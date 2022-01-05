import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import MainBanner from '../components/MainBanner/MainBanner';
import Form from '../components/ContactUs/ContactUs';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import BannerImage from '../assets/mainBanner.jpg';

const Home = () => {
    return (
        <>
            <Header />
            <Hero withOverlay isMainPage bannerImage={BannerImage} />
            <MainBanner />
            <WhyChooseUs />
            <Form />
            <Footer />
        </>

    )
}

export default Home;