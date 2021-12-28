import React from 'react';
import styles from './MainBanner.module.scss';
import { useMediaQuery } from 'react-responsive';

const MainBanner = () => {
    const isTablet = useMediaQuery({ maxWidth: 1023 });
    const bannerNumbers = [
        {
            number: '20 000+',
            title: 'Projects',
            text: 'already implemented'
        },
        {
            number: '15+',
            title: 'Years',
            text: 'on the market'
        },
        {
            number: '3.5m',
            title: 'Investments',
            text: 'attracted to our company'
        }
    ]
    const bannerList = bannerNumbers.map((item, index) => {
        return (
            <li key={index}>
                {isTablet ? <>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                    <h3>{item.number}</h3>
                </> : <>
                    <h3>{item.number}</h3>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                </>}

            </li>
        )
    })
    return (
        <div className={styles.banner}>
            <div className={styles.banner_container}>
                <ul>
                    {bannerList}
                </ul>
            </div>
        </div>
    )
}

export default MainBanner;