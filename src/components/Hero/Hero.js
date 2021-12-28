import React from 'react';
import styles from './Hero.module.scss';
import { useMediaQuery } from 'react-responsive';
import buildIcon1 from '../../assets/building_icon1.svg';
import buildIcon2 from '../../assets/building_icon2.svg';
import buildIcon3 from '../../assets/building_icon3.svg';
import buildIcon4 from '../../assets/building_icon4.svg';

const Hero = ({ withOverlay, isMainPage, bannerImage }) => {
    const isTablet = useMediaQuery({ maxWidth: 1023 });
    const descArr = [
        {
            img: buildIcon1,
            title: 'Item title 1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            img: buildIcon2,
            title: 'Item title 2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            img: buildIcon3,
            title: 'Item title 3',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            img: buildIcon4,
            title: 'Item title 4',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ]
    const descList = descArr.map((item, index) => {
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
            // marginBottom: isMainPage ? '230px' : '80px'
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