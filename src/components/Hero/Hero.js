import React from 'react';
import styles from './Hero.module.scss';
import { heroBannerDescription } from '../../data';
import { useMediaQuery } from 'react-responsive';

const Hero = ({ withOverlay, isMainPage, bannerImage }) => {
    const isTablet = useMediaQuery({ maxWidth: 1023 });

    const descList = heroBannerDescription.map((item, index) => {
        return (
            <li key={index}>
                <img src={item.img} alt="build" />
                <h2>{item.title}</h2>
                <p>{item.text}</p>
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
                    <h1>Text Title</h1>
                    <h3>Lorem ipsum <span>dolor sit amet</span>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                    <div className={styles.hero_button_container}>
                        <button>Action</button>
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