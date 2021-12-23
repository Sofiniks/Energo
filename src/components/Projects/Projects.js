import React, { useState } from 'react';
import styles from './Projects.module.scss';
import { textCut } from '../../helpers';
import advantage1 from '../../assets/Services1.png';
import advantage2 from '../../assets/land.png';
import advantage3 from '../../assets/servicesBanner.jpg';
import advantage4 from '../../assets/solar_battery.png';

const projects = [
    {
        title: 'Item title 1',
        desc: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: advantage1
    },
    {
        title: 'Item title 2',
        desc: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: advantage2
    },
    {
        title: 'Item title 3',
        desc: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: advantage3
    },
    {
        title: 'Item title 4',
        desc: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: advantage4
    }
]

const Projects = () => {
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
    return (
        <div className={styles.projects}>
            <div className={styles.projects_container}>
                <h2 className={styles.projects_heading}>
                    Our Projects
                </h2>
                <ul className={styles.projects_list}>
                    {projectsList}
                </ul>
            </div>
        </div>
    )
}

export default Projects;