import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styles from './Footer.module.scss';
import Location from '../../assets/location.svg';
import Letter from '../../assets/message.svg';
import Phone from '../../assets/phone.svg';

const Footer = () => {
    const isTablet = useMediaQuery({ maxWidth: 1023 });
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_top}>
                    <div className={styles.footer_logo}>
                        <Link to="/Energo">
                            <h1 style={{ color: 'white' }}>Logo</h1>
                        </Link>

                    </div>
                    <div className={styles.footer_contacts}>
                        {isTablet && <h4 className={styles.footer_mobile}>Contacts</h4>}
                        <ul>
                            <li>
                                <img src={Location} alt="location" />
                                <p>20540 Deer Wood Park Dr, Leonardtown, MD, 20650</p>
                            </li>
                            <li>
                                <img src={Letter} alt="letter" />
                                <p>company_name@mail.com</p>
                            </li>
                            <li>
                                <img src={Phone} alt="phone" />
                                <p>+329-3291-32-41</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footer_bottom}>
                    <div className={styles.footer_credentials}>Developed by: <span>Webbynavia</span></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;