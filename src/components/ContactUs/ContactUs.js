import React, { useState } from 'react';
import styles from './ContactUs.module.scss';
import { contacts } from '../../data';
import { useMediaQuery } from 'react-responsive';
import location_black from '../../assets/location_black.svg';
import letter_black from '../../assets/letter_black.svg';
import phone_black from '../../assets/phone_black.svg';
import whatsapp from '../../assets/whatsapp.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import MessageModal from '../MessageModal/MessageModal';
import { useTranslation } from 'react-i18next';
import i18next from '../../i18next';



const Form = () => {
    const isTablet = useMediaQuery({ maxWidth: 1023 });
    const [toggleModal, setToggleModal] = useState(false);
    const { t } = useTranslation();
    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSce5TU4kF7h6CudZUIUh6W0HYVtyTAb0FMWeL07TD9Nb5PSZw/formResponse';

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
            <div className={styles.contacts} id="contacts">
                {toggleModal && <div className={styles.contacts_overlay} onClick={handleModalClose}></div>}
                {toggleModal && <MessageModal onClick={handleModalClose} />}
                <div className={styles.contacts_form_mobile}>
                    <div className={styles.contacts_container}>
                        <h5>{i18next.t('contacts')}</h5>
                        <ul className={styles.contacts_list}>
                            <li className={styles.contacts_list_item}>
                                <img src={location_black} alt="location" />
                                <p>{contacts.address}</p>
                            </li>
                            <li className={styles.contacts_list_item}>
                                <img src={letter_black} alt="letter" />
                                <p>{contacts.email}</p>
                            </li>
                            <li className={styles.contacts_list_item}>
                                <img src={phone_black} alt="phone" />
                                <p><a href={`tel:${contacts.phone}`}>{contacts.phone}</a></p>
                            </li>
                        </ul>
                        <ul className={styles.contacts_socials}>
                            <li className={styles.contacts_socials_item}><a href={contacts.phone}><img src={whatsapp} alt="socials" /></a></li>
                            <li className={styles.contacts_socials_item}><a href={contacts.fb}><img src={facebook} alt="socials" /></a></li>
                            <li className={styles.contacts_socials_item}><a href="/"><img src={instagram} alt="socials" /></a></li>
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
                            <h4>{i18next.t(`contactUsText1`)}</h4>
                            <h4>{i18next.t(`contactUsText2`)}</h4>

                            <input name="entry.2005620554" type="text" placeholder={i18next.t(`name`)} required />
                            <input name="entry.1045781291" type="text" placeholder={i18next.t(`email`)} required />
                            <textarea name='entry.839337160' rows="1" placeholder={i18next.t(`message`)} required></textarea>

                            <div className={styles.contacts_form_button}>
                                <button type='submit'>{i18next.t(`sendButton`)}</button>
                            </div>

                        </form>
                    </div>

                </div>

            </div>
        )
    }
    else {
        return (
            <div className={styles.contacts} id="contacts">
                {toggleModal && <div className={styles.contacts_overlay} onClick={handleModalClose}></div>}
                {toggleModal && <MessageModal onClick={handleModalClose} />}
                <div className={styles.contacts_container}>
                    <h2>{i18next.t(`contactUs`)}</h2>
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
                            <h4>{i18next.t(`contactUsText1`)}</h4>
                            <h4>{i18next.t(`contactUsText2`)}</h4>

                            <input type="text" placeholder={i18next.t(`name`)} name="entry.2005620554" required />
                            <input type="text" placeholder={i18next.t(`email`)} name="entry.1045781291" required />
                            <textarea rows="1" placeholder={i18next.t(`message`)} name='entry.839337160' required></textarea>

                            <div className={styles.contacts_form_button}>
                                <button type='submit'>{i18next.t(`sendButton`)}</button>
                            </div>
                            <div className={styles.contacts_form_absolute}>
                                <h5>{i18next.t(`contacts`)}</h5>
                                <ul className={styles.contacts_list}>
                                    <li className={styles.contacts_list_item}>
                                        <img src={location_black} alt="location" />
                                        <p>{contacts.address}</p>
                                    </li>
                                    <li className={styles.contacts_list_item}>
                                        <img src={letter_black} alt="letter" />
                                        <p>{contacts.email}</p>
                                    </li>
                                    <li className={styles.contacts_list_item}>
                                        <img src={phone_black} alt="phone" />
                                        <p><a href={`tel:${contacts.phone}`}>{contacts.phone}</a></p>
                                    </li>
                                </ul>
                                <ul className={styles.contacts_socials}>
                                    <li className={styles.contacts_socials_item}><a href={contacts.phone}><img src={whatsapp} alt="socials" /></a></li>
                                    <li className={styles.contacts_socials_item}><a href={contacts.fb}><img src={facebook} alt="socials" /></a></li>
                                    <li className={styles.contacts_socials_item}><a href="/"><img src={instagram} alt="socials" /></a></li>
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