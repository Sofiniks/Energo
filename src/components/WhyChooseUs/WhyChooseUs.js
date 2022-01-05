import React, { useState } from 'react';
import styles from './WhyChooseUs.module.scss';
import { advantages } from '../../data';
import { useMediaQuery } from 'react-responsive';
import { textCut } from '../../helpers';

const WhyChooseUs = () => {
    const isTablet = useMediaQuery({ maxWidth: 1023 });
    const [activeIndex, setActiveIndex] = useState(-1);
    const toggleIsHidden = (index) => {
        setActiveIndex(index)
    }
    const advantageList = advantages.map((item, index) => {
        return (
            <li key={index} className={styles.why_item} onMouseEnter={() => toggleIsHidden(index)} onMouseLeave={() => toggleIsHidden(-1)}>
                <div className={styles.why_img}>
                    <img src={item.img} alt="advantage" />
                </div>
                {activeIndex === index ?
                    <div className={styles.why_hover}>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                    :
                    <div className={styles.why_block}>
                        <h3>{item.title}</h3>
                        <p>{textCut(item.desc, 65)}</p>
                    </div>}
            </li>
        )
    })

    const advantagesListMobile = advantages.map((item, index) => {
        return (
            <li key={index} className={styles.why_item}>
                <div className={styles.why_mobile}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
            </li>
        )
    })
    return (
        <div className={styles.why}>
            <div className={styles.why_container}>
                <h2 className={styles.why_heading}>
                    Why choose us
                </h2>
                <ul className={styles.why_list}>
                    {isTablet ? advantagesListMobile : advantageList}
                </ul>
            </div>
        </div>
    )
}

export default WhyChooseUs;