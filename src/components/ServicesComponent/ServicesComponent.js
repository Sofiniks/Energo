import React, { useState } from 'react';
import styles from './ServicesComponent.module.scss';
import { useMediaQuery } from 'react-responsive';
import { services } from '../../data';
import { useTranslation } from 'react-i18next';
import i18next from '../../i18next';

const ServicesComponent = () => {
    const isTablet = useMediaQuery({ maxWidth: 1023 });
    const { t } = useTranslation();
    const [activeService, setActiveService] = useState(services[0]);
    const [activeSubService, setActiveSubService] = useState(services[0].service.subServices[0]);
    const toggleActiveSubService = (service, subService) => {
        const newactiveSubService = services.find(item => item === service);
        const newActiveSubService = newactiveSubService.service.subServices.find(item => item === subService);
        setActiveSubService(newActiveSubService)
    }

    const servicesListMobile = services.map((service, index) => {
        return (
            <li key={index} className={styles.services_item} onClick={() => setActiveService(service)}>
                <h3>{i18next.t(`${service.service.title}`)}</h3>
                <ul style={service.service.title === activeService.service.title ? { opacity: 1, zIndex: 3, top: 0 } : { opacity: 0, zIndex: '-3', height: 0, overflow: 'hidden', top: '-40px' }}>
                    {service.service.subServices.map((subService, subServiceIndex) => {
                        return (
                            <li className={styles.services_subItem}
                                key={subServiceIndex}
                                onClick={() => toggleActiveSubService(service, subService)}
                                style={subService.title === activeSubService.title ? { fontWeight: 'bold', borderLeft: '3px solid #ffc91e' } : { borderLeft: '3px solid transparent' }}
                            >
                                {i18next.t(`${subService.title}`)}
                            </li>
                        )
                    })}
                </ul>
            </li>
        )
    })

    const servicesList = services.map((service, index) => {
        return (
            <li key={index} className={styles.services_item}>
                <h3>{i18next.t(`${service.service.title}`)}</h3>
                <ul>
                    {service.service.subServices.map((subService, subServiceIndex) => {
                        return (
                            <li className={styles.services_subItem}
                                key={subServiceIndex}
                                onClick={() => toggleActiveSubService(service, subService)}
                                style={subService.title === activeSubService.title ? { fontWeight: 'bold', borderLeft: '3px solid #ffc91e' } : { borderLeft: '3px solid transparent' }}
                            >
                                {i18next.t(`${subService.title}`)}
                            </li>
                        )
                    })}
                </ul>
            </li>
        )
    })

    const servicesImages = activeSubService.images.slice(1).map((item, index) => {
        return <li key={index}>
            <img src={item} alt="services" />
        </li>
    })

    return (
        <div className={styles.services} id="services">
            <div className={styles.services_container}>
                <div className={styles.services_menu}>
                    <div className={styles.services_heading}>
                        <h2>{i18next.t('services')}</h2>
                    </div>
                    <ul className={styles.services_list}>
                        {isTablet ? servicesListMobile : servicesList}
                    </ul>
                </div>
                <div className={styles.services_content}>
                    <div className={styles.services_text}>
                        <h3>{i18next.t(`${activeSubService.title}`)}</h3>
                        {activeSubService.desc.map(desc => (
                            <div><p>{i18next.t(`${desc}`)}</p></div>
                        ))}
                        <button><a href='#contacts'>{i18next.t(`servicePriceButton`)}</a></button>
                    </div>
                    <div className={styles.services_images}>
                        <div className={styles.services_mainImage}>
                            <img src={activeSubService.images[0]} alt="serviceMain" />
                        </div>
                        <ul className={styles.services_images_list}>
                            {servicesImages}
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ServicesComponent;
