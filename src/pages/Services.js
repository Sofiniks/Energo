import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Form from '../components/ContactUs/ContactUs';
import MainBanner from '../components/MainBanner/MainBanner';
import ServicesComponent from '../components/ServicesComponent/ServicesComponent';
import ServicesImage from '../assets/servicesBanner.jpg';
import mobileServicesImage from '../assets/mainMobile2.jpg';
import { useTranslation } from 'react-i18next';
import i18next from '../i18next';

const Services = () => {
    const isTablet = useMediaQuery({ maxWidth: 1023 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const { t } = useTranslation();
    return (
        <>
            <Header />
            <Hero bannerImage={isMobile ? mobileServicesImage : ServicesImage} titleText={i18next.t(`heroServicesTitle`)} text={i18next.t(`heroServicesSubtitle`)} />
            {!isTablet && <MainBanner />}
            <ServicesComponent />
            <Form />
            <Footer />
        </>

    )
}

export default Services;
