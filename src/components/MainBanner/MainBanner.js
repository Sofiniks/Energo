import React from 'react';
import styles from './MainBanner.module.scss';
import { mainBannerNumbers } from '../../data';
import i18next from '../../i18next';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

const MainBanner = () => {
    const isTablet = useMediaQuery({ maxWidth: 1023 });
    const { t } = useTranslation();
    const bannerList = mainBannerNumbers.map((item, index) => {
        return (
            <li key={index}>
                {isTablet ? <>
                    <h4>{i18next.t(`${item.title}`)}</h4>
                    <p>{i18next.t(`${item.text}`)}</p>
                    <h3>{item.number}</h3>
                </> : <>
                    <h3>{item.number}</h3>
                    <h4>{i18next.t(`${item.title}`)}</h4>
                    <p>{i18next.t(`${item.text}`)}</p>
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