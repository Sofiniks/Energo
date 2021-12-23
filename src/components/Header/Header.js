import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import ContactsImg from '../../assets/contact.svg';
import Eng from '../../assets/eng.svg';

const Header = () => {
    const nav = [
        {
            title: 'Service',
            to: '/services'
        },
        {
            title: 'Renewable Energy',
            to: '/energy'
        },
        {
            title: 'Contacts',
            to: '/contacts'
        }
    ]
    const [activeLink, setActiveLink] = useState(-1);

    const toggleActiveLink = (index) => {
        setActiveLink(index);
    }
    const navLinks = nav.map((item, index) => {
        return (
            <li key={index} onClick={() => toggleActiveLink(index)} style={activeLink === index ? { borderBottom: '5px solid #ffc91e' } : { borderBottom: '5px solid transparent' }}>
                <Link to={item.to}>{item.title}</Link>
            </li>
        )
    })
    return (
        <header className={styles.header}>
            <div className={styles.header_left}>
                <div className={styles.header_logo} onClick={() => toggleActiveLink(-1)}>
                    <Link to="/">
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
        </header>
    )
}

export default Header;