import Image from 'next/image'
import React from 'react'

import * as styles from './EventCard.module.css'

export const EventCard = ({ imageSrc, heading, location, description }) => {
    console.log(imageSrc)
    return (
        <div className={styles.eventCard}>
            <div className={styles.imageContainer}>
                <Image className={styles.image} src={imageSrc} width={322} height={285} />
            </div>
            <div className={styles.textContent} >
                <div>
                    <div className='card-heading'>{heading}</div>
                    <div className='subtitle'>{location}</div>
                </div>
                <div className={`body ${styles.text}`}>{description}</div>
            </div>
        </div>
    )
}
