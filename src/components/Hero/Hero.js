import React from 'react';
import styles from './Hero.module.scss';
import { heroBannerDescription } from '../../data';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import i18next from '../../i18next';

const Hero = ({ withOverlay, isMainPage, bannerImage, text }) => {
    const isTablet = useMediaQuery({ maxWidth: 1023 });
    const { t } = useTranslation();

    const descList = heroBannerDescription.map((item, index) => {
        return (
            <li key={index}>
                <img src={item.img} alt="build" />
                <h2>{i18next.t(`${item.title}`)}</h2>
                <p>{i18next.t(`${item.text}`)}</p>
            </li>
        )
    })
    return (
        <div className={styles.hero} style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            marginBottom: isMainPage ? isTablet ? '300px' : '230px' : isTablet ? '0' : '80px'
        }}>

            <div className={styles.hero_container}>
                <div className={styles.hero_container_text}>
                    <h1>{i18next.t(`title`)}</h1>
                    <h3>{text}</h3>
                    <div className={styles.hero_button_container}>
                        <button><a href='#contacts'>{i18next.t(`heroButton`)}</a></button>
                    </div>
                </div>

            </div>
            {withOverlay && !isTablet && <div className={styles.hero_overlay}></div>}
            {isMainPage &&
                <div className={styles.hero_desc}>
                    <div className={styles.hero_desc_container}>
                        <ul>
                            {descList}
                        </ul>
                    </div>

                </div>}
        </div>
    )
}

export default Hero;