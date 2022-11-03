import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import MainBanner from '../components/MainBanner/MainBanner';
import { useMediaQuery } from 'react-responsive';
import Form from '../components/ContactUs/ContactUs';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import BannerImage from '../assets/mainBanner.jpg';
import MobileMainBanner from '../assets/mainMobile1.jpg';
import { useTranslation } from 'react-i18next';
import i18next from '../i18next';

const Home = () => {
    const { t } = useTranslation();
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return (
        <>
            <Header />
            <Hero withOverlay isMainPage bannerImage={isMobile ? MobileMainBanner : BannerImage} titleText={i18next.t(`title`)} text={i18next.t(`heroHomeSubtitle`)} buttonLink='/services/#services' />
            <MainBanner />
            <WhyChooseUs />
            <Form />
            <Footer />
        </>

    )
}

export default Home;
