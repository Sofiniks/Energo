import React from 'react';
import styles from './MessageModal.module.scss';
import Tick from '../../assets/tick_green.svg';
import Cross from '../../assets/cross.svg';

const MessageModal = ({ onClick }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal_cross}>
                <img src={Cross} alt="cross" onClick={onClick} />
            </div>
            <h3>Сообщение отправлено!</h3>
            <div className={styles.modal_img}>
                <img src={Tick} alt="tick" />
            </div>
            <p>
                Мы получили ваше сообщение и свяжемся с вами в течение следующих 24 часов!
            </p>
            <div className={styles.modal_button}>
                <button onClick={onClick}>OK</button>
            </div>
        </div>
    )
}

export default MessageModal;