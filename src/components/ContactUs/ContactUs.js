import React, { useState } from 'react';
import styles from './ContactUs.module.scss';
import { useMediaQuery } from 'react-responsive';
import location_black from '../../assets/location_black.svg';
import letter_black from '../../assets/letter_black.svg';
import phone_black from '../../assets/phone_black.svg';
import whatsapp from '../../assets/whatsapp.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import Tick from '../../assets/tick.svg';
import Cross from '../../assets/cross.svg';
import MessageModal from '../MessageModal/MessageModal';



const Form = () => {
    const isTablet = useMediaQuery({ maxWidth: 1023 });
    const [toggleModal, setToggleModal] = useState(false);
    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSetgEtHoQZKp9MyzOIrfZywXliazcAHhfMgrogNFp135jS2kg/formResponse';

    const handleSubmit = () => {
        setToggleModal(true);
        setTimeout(window.location.reload.bind(window.location), 10000);
    }

    const handleModalClose = () => {
        setToggleModal(false);
        window.location.reload.bind(window.location)();
    }

    if (isTablet) {
        return (
            <div className={styles.contacts}>
                {toggleModal && <div className={styles.contacts_overlay} onClick={handleModalClose}></div>}
                {toggleModal && <MessageModal onClick={handleModalClose} />}
                <div className={styles.contacts_form_mobile}>
                    <div className={styles.contacts_container}>
                        <h5>Contacts</h5>
                        <ul className={styles.contacts_list}>
                            <li className={styles.contacts_list_item}>
                                <img src={location_black} alt="location" />
                                <p>20540 Deer Wood Park Dr, Leonardtown, MD, 20650</p>
                            </li>
                            <li className={styles.contacts_list_item}>
                                <img src={letter_black} alt="letter" />
                                <p>company_name@mail.com</p>
                            </li>
                            <li className={styles.contacts_list_item}>
                                <img src={phone_black} alt="phone" />
                                <p>+329-3291-32-41</p>
                            </li>
                        </ul>
                        <ul className={styles.contacts_socials}>
                            <li className={styles.contacts_socials_item}><a href="google.com"><img src={whatsapp} alt="socials" /></a></li>
                            <li className={styles.contacts_socials_item}><a href="google.com"><img src={facebook} alt="socials" /></a></li>
                            <li className={styles.contacts_socials_item}><a href="google.com"><img src={instagram} alt="socials" /></a></li>
                        </ul>

                    </div>
                </div>
                <div className={styles.contacts_form}>
                    <div className={styles.contacts_container}>
                        <iframe
                            title="hidden_iframe"
                            name="hidden_iframe"
                            id="hidden_iframe"
                            style={{ visibility: 'hidden', height: '14px' }}
                        >

                        </iframe>
                        <form
                            action={GOOGLE_FORM_URL}
                            method='post'
                            target='hidden_iframe'
                            onSubmit={handleSubmit}
                        >
                            <h4>Feel free to contact us any time</h4>
                            <h4>We will get back to you as soon as we can!</h4>

                            <input name="entry.988393553" type="text" placeholder='Name' required />
                            <input name="entry.1903855961" type="text" placeholder='Email or Phone' required />
                            <textarea name='entry.1057069905' rows="1" placeholder='Message' required></textarea>

                            <div className={styles.contacts_form_button}>
                                <button type='submit'>Action</button>
                            </div>

                        </form>
                    </div>

                </div>

            </div>
        )
    }
    else {
        return (
            <div className={styles.contacts}>
                {toggleModal && <div className={styles.contacts_overlay} onClick={handleModalClose}></div>}
                {toggleModal && <MessageModal onClick={handleModalClose} />}
                <div className={styles.contacts_container}>
                    <h2>Contact us</h2>
                    <div className={styles.contacts_form}>
                        <iframe
                            title="hidden_iframe"
                            name="hidden_iframe"
                            id="hidden_iframe"
                            style={{ visibility: 'hidden', height: '14px' }}
                        >

                        </iframe>
                        <form
                            action={GOOGLE_FORM_URL}
                            method='post'
                            target='hidden_iframe'
                            onSubmit={handleSubmit}
                        >
                            <h4>Feel free to contact us any time</h4>
                            <h4>We will get back to you as soon as we can!</h4>

                            <input type="text" placeholder='Name' name="entry.988393553" required />
                            <input type="text" placeholder='Email or Phone' name="entry.1903855961" required />
                            <textarea rows="1" placeholder='Message' name='entry.1057069905' required></textarea>

                            <div className={styles.contacts_form_button}>
                                <button type='submit'>Action</button>
                            </div>
                            <div className={styles.contacts_form_absolute}>
                                <h5>Contacts</h5>
                                <ul className={styles.contacts_list}>
                                    <li className={styles.contacts_list_item}>
                                        <img src={location_black} alt="location" />
                                        <p>20540 Deer Wood Park Dr, Leonardtown, MD, 20650</p>
                                    </li>
                                    <li className={styles.contacts_list_item}>
                                        <img src={letter_black} alt="letter" />
                                        <p>company_name@mail.com</p>
                                    </li>
                                    <li className={styles.contacts_list_item}>
                                        <img src={phone_black} alt="phone" />
                                        <p>+329-3291-32-41</p>
                                    </li>
                                </ul>
                                <ul className={styles.contacts_socials}>
                                    <li className={styles.contacts_socials_item}><a href="google.com"><img src={whatsapp} alt="socials" /></a></li>
                                    <li className={styles.contacts_socials_item}><a href="google.com"><img src={facebook} alt="socials" /></a></li>
                                    <li className={styles.contacts_socials_item}><a href="google.com"><img src={instagram} alt="socials" /></a></li>
                                </ul>

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        )
    }
}

export default Form;