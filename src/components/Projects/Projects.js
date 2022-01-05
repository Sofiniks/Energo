import React, { useState } from 'react';
import styles from './Projects.module.scss';
import { textCut } from '../../helpers';
import { projects } from '../../data';
import { useMediaQuery } from 'react-responsive';

const Projects = () => {
    const isTablet = useMediaQuery({ maxWidth: 1023 });
    const [activeIndex, setActiveIndex] = useState(-1);
    const toggleIsHidden = (index) => {
        setActiveIndex(index)
    }
    const projectsList = projects.map((item, index) => {
        return (
            <li key={index} className={styles.projects_item} onMouseEnter={() => toggleIsHidden(index)} onMouseLeave={() => toggleIsHidden(-1)}>
                <div className={styles.projects_img}>
                    <img src={item.img} alt="advantage" />
                </div>
                {activeIndex === index ?
                    <div className={styles.projects_hover}>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                    :
                    <div className={styles.projects_block}>
                        <h3>{item.title}</h3>
                        <p>{textCut(item.desc, 65)}</p>
                    </div>}
            </li>
        )
    })

    const projectsListMobile = projects.map((item, index) => {
        return (
            <li key={index} className={styles.projects_mobile_item}>
                <div className={styles.projects_mobile_img}>
                    <img src={item.img} alt="advantage" />
                </div>
                <div className={styles.projects_mobile_block}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
            </li>
        )
    })

    return (
        <div className={styles.projects}>
            <div className={styles.projects_container}>
                <h2 className={styles.projects_heading}>
                    Our Projects
                </h2>
                <ul className={styles.projects_list}>
                    {isTablet ? projectsListMobile : projectsList}
                </ul>
            </div>
        </div>
    )
}

export default Projects;