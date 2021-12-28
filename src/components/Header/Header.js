import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import ContactsImg from '../../assets/contact.svg';
import Eng from '../../assets/eng.svg';
import Burger from '../../assets/burger.svg';
import Cross from '../../assets/cross.svg';

const Header = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ maxWidth: 1023 });
    const [toggleBurger, setToggleBurger] = useState(false);
    const nav = [
        {
            title: 'Service',
            to: '/Energo/services'
        },
        {
            title: 'Renewable Energy',
            to: '/Energo/energy'
        },
        {
            title: 'Contacts',
            to: '/Energo/contacts'
        }
    ]
    const [activeLink, setActiveLink] = useState(-1);

    const toggleActiveLink = (index) => {
        setActiveLink(index);
    }
    const handleToggleBurger = () => {
        setToggleBurger(!toggleBurger)
    }

    const navLinks = nav.map((item, index) => {
        return (
            <li
                key={index}
                onClick={() => {
                    toggleActiveLink(index)
                    setToggleBurger(false)
                }}
                style={activeLink === index ? isTablet ? { color: '#ffc91e' } : { borderBottom: '5px solid #ffc91e' } : isMobile ? { color: '#fff' } : { borderBottom: '5px solid transparent' }}>
                <Link to={item.to}>{item.title}</Link>
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
                        <Link to="/Energo">
                            <h1>Logo</h1>
                        </Link>
                    </div>
                    <div className={styles.header_language}>
                        <div className={styles.header_language_box}>
                            <img src={Eng} alt="language" />
                        </div>
                    </div>
                </div> :
                <>
                    <div className={styles.header_left}>
                        <div className={styles.header_logo} onClick={() => toggleActiveLink(-1)}>
                            <Link to="/Energo">
                                <h1>Logo</h1>
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
                                <p>Contact us</p>
                                <p className={styles.header_contacts_phone}>873-2934 1230</p>
                            </div>
                        </div>
                        <div className={styles.header_language}>
                            <div className={styles.header_language_box}>
                                <img src={Eng} alt="language" />
                            </div>
                        </div>
                    </div>
                </>}
        </header>
    )
}

export default Header;