import React from 'react';
import styles from './WhatWeDo.module.scss';
import SolarBattery from '../../assets/solar_battery.png';

const WhatWeDo = () => {
    return (
        <div className={styles.do}>
            <div className={styles.do_container}>
                <h2>What we do</h2>
                <div className={styles.do_content}>
                    <div className={styles.do_text}>
                        <div className={styles.do_paragraph}>
                            <h3>Block title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  aliqua. Lorem ipsum  sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className={styles.do_paragraph}>
                            <h3>Block title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  aliqua. Lorem ipsum  sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className={styles.do_img}>
                        <img src={SolarBattery} alt="solar" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhatWeDo;