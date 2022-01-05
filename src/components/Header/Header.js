import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from '../../store/actions';
import { contacts } from '../../data';
import styles from './Header.module.scss';
import i18next from '../../i18next';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import ContactsImg from '../../assets/contact.svg';
import Eng from '../../assets/eng.svg';
import Lat from '../../assets/lat.svg';
import Rus from '../../assets/rus.svg';
import Burger from '../../assets/burger.svg';
import Cross from '../../assets/cross.svg';
import Logo from '../../assets/energoLogo.png';

const Header = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ maxWidth: 1023 });
    const [toggleBurger, setToggleBurger] = useState(false);
    const [toggleLanguage, setToggleLanguage] = useState(false);
    const { i18n, t } = useTranslation();

    const dispatch = useDispatch();
    const nav = [
        {
            title: 'services',
            to: '/services'
        },
        // {
        //     title: 'Renewable Energy',
        //     to: '/Energo/energy'
        // }
    ]

    const languagesList = [
        {
            img: Eng,
            key: 'en',
            title: 'English'
        },
        {
            img: Lat,
            key: 'lv',
            title: 'Latviski'
        },
        {
            img: Rus,
            key: 'ru',
            title: 'Русский'
        }
    ]
    const [activeLink, setActiveLink] = useState(-1);

    const handleChangeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        dispatch(setLanguage(lng))
        setToggleLanguage(false);
    }

    const toggleActiveLink = (index) => {
        setActiveLink(index);
    }
    const handleToggleBurger = () => {
        setToggleBurger(!toggleBurger)
    }

    const handleToggleLanguage = () => {
        setToggleLanguage(!toggleLanguage);
    }

    const activeLanguage = useSelector(state => state.language.language);
    const activeLanguageFlag = languagesList.find(item => item.key === activeLanguage).img;
    const languageButtons = languagesList.map((item, index) => {
        return (
            <li onClick={() => handleChangeLanguage(`${item.key}`)} style={item.key === activeLanguage ? { backgroundColor: '#fff' } : { backgroundColor: 'unset' }}>
                <img key={index} src={item.img} alt="language" />
                <p>{item.title}</p>
            </li>
        )
    })

    const navLinks = nav.map((item, index) => {
        return (
            <li
                key={index}
                onClick={() => {
                    toggleActiveLink(index)
                    setToggleBurger(false)
                }}
                style={activeLink === index ? isTablet ? { color: '#ffc91e' } : { borderBottom: '5px solid #ffc91e' } : isMobile ? { color: '#fff' } : { borderBottom: '5px solid transparent' }}>
                <Link to={item.to}>{i18next.t(`${item.title}`)}</Link>
            </li>
        )
    })
    return (
        <header className={styles.header}>
            {isTablet ?
                <div className={styles.header_mobile}>
                    {toggleBurger && <div className={styles.overlay} id="overlay" onClick={handleToggleBurger}></div>}
                    <div className={styles.header_burger} onClick={handleToggleBurger}>
                        <img src={toggleBurger ? Cross : Burger} alt="burger_menu" />
                    </div>
                    <div className={styles.toggle_burger} style={toggleBurger ? { opacity: 1 } : { opacity: 0, top: '-200px', zIndex: '-3' }}>
                        <ul>
                            {navLinks}
                        </ul>
                    </div>
                    <div className={styles.header_logo} onClick={() => toggleActiveLink(-1)}>
                        <Link to="/">
                            <img src={Logo} alt="logo" />
                        </Link>
                    </div>
                    <div className={styles.header_language}>
                        <div className={styles.header_language_box} onClick={handleToggleLanguage}>
                            <img src={activeLanguageFlag} alt="language" />
                        </div>
                        <div className={styles.header_toggle_languages} style={toggleLanguage ? { opacity: 1 } : { opacity: 0, top: '30px', zIndex: '-3' }}>
                            <ul>
                                {languageButtons}
                            </ul>
                        </div>
                    </div>
                </div> :
                <>
                    <div className={styles.header_left}>
                        <div className={styles.header_logo} onClick={() => toggleActiveLink(-1)}>
                            <Link to="/">
                                <img src={Logo} alt="logo" />
                            </Link>
                        </div>
                        <nav className={styles.header_nav}>
                            <ul>
                                {navLinks}
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.header_right}>
                        <div className={styles.header_contacts}>
                            <img src={ContactsImg} alt="contacts" />
                            <div>
                                <p>{i18next.t(`contactUs`)}</p>
                                <a href={`tel:${contacts.phone}`} className={styles.header_contacts_phone}>{contacts.phone}</a>
                            </div>
                        </div>
                        <div className={styles.header_language}>
                            <div className={styles.header_language_box}>
                                <img src={activeLanguageFlag} alt="language" onClick={handleToggleLanguage} />
                            </div>
                            <div className={styles.header_toggle_languages} style={toggleLanguage ? { opacity: 1 } : { opacity: 0, top: '30px', zIndex: '-3' }}>
                                <ul>
                                    {languageButtons}
                                </ul>
                            </div>
                        </div>
                    </div>
                </>}
        </header>
    )
}

export default Header;