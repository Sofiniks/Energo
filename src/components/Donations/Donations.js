import React from 'react';
import styles from './Donations.module.scss';
import DonationsImage from '../../assets/donations.png';

const Donations = () => {
    const credentials = [
        {
            title: 'Name',
            value: 'Energo'
        },
        {
            title: 'Bank account',
            value: '4321321458921394'
        }
    ]
    const credentialsList = credentials.map((item, index) => {
        return (
            <li key={index} className={styles.donations_credentials_item}>
                <h4>{item.title}</h4>
                <p>{item.value}</p>
            </li>
        )
    })
    return (
        <div className={styles.donations}>
            <div className={styles.donations_container}>
                <div className={styles.donations_content}>
                    <div className={styles.donations_text}>
                        <h3>Donations</h3>
                        <p className={styles.donations_desc}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <ul>{credentialsList}</ul>
                        <button>Donate</button>
                    </div>
                    <div className={styles.donations_img}>
                        <img src={DonationsImage} alt="donations" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donations;