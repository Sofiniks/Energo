import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { contacts } from '../../data';
import styles from './Footer.module.scss';
import Location from '../../assets/location.svg';
import Letter from '../../assets/message.svg';
import Phone from '../../assets/phone.svg';
import { useTranslation } from 'react-i18next';
import i18next from '../../i18next';
import Logo from '../../assets/energoLogo.png';

const Footer = () => {
    const isTablet = useMediaQuery({ maxWidth: 1023 });
    const { t } = useTranslation();
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_top}>
                    <div className={styles.footer_logo}>
                        <Link to="/">
                            <img src={Logo} alt="logo" />
                        </Link>

                    </div>
                    <div className={styles.footer_contacts}>
                        {isTablet && <h4 className={styles.footer_mobile}>{i18next.t('contacts')}</h4>}
                        <ul>
                            <li>
                                <img src={Location} alt="location" />
                                <p>{contacts.address}</p>
                            </li>
                            <li>
                                <img src={Letter} alt="letter" />
                                <p>{contacts.email}</p>
                            </li>
                            <li>
                                <img src={Phone} alt="phone" />
                                <p><a href={`tel:${contacts.phone}`}>{contacts.phone}</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footer_bottom}>
                    <div className={styles.footer_credentials}>{i18next.t('developedBy')} <span>Webbynavia</span></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;