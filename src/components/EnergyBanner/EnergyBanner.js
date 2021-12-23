import React from 'react';
import styles from './EnergyBanner.module.scss';

const EnergyBanner = () => {
    const number = '15,597,255,043';
    const arrFromNumber = Array.from(number);
    const numbersList = arrFromNumber.map((item, index) => {
        if (item === ',') {
            return (
                <li key={index} className={styles.banner_commas}>{item}</li>
            )
        } else {
            return (
                <li key={index} className={styles.banner_numbers}>{item}</li>
            )
        }

    })

    return (
        <div className={styles.banner}>
            <div className={styles.banner_container}>
                <ul>{numbersList}</ul>
                <h4>Lorem ipsum <span>dolor sit amet</span>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore magna aliqua.</h4>
            </div>
        </div>
    )
}

export default EnergyBanner;