import React from 'react';
import styles from './MessageModal.module.scss';
import Tick from '../../assets/tick_green.svg';
import Cross from '../../assets/cross.svg';
import { useTranslation } from 'react-i18next';
import i18next from '../../i18next';

const MessageModal = ({ onClick }) => {
    const { t } = useTranslation();
    return (
        <div className={styles.modal}>
            <div className={styles.modal_cross}>
                <img src={Cross} alt="cross" onClick={onClick} />
            </div>
            <h3>{i18next.t(`messageSent`)}</h3>
            <div className={styles.modal_img}>
                <img src={Tick} alt="tick" />
            </div>
            <p>
                {i18next.t(`messageReceived`)}
            </p>
            <div className={styles.modal_button}>
                <button onClick={onClick}>OK</button>
            </div>
        </div>
    )
}

export default MessageModal;