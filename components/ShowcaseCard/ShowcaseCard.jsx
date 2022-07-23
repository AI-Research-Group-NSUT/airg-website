import Image from 'next/image'
import React from 'react'

import * as styles from './ShowcaseCard.module.css'

export const ShowcaseCard = ({ imageSrc, heading, subtitle, description }) => {
    console.log(imageSrc)
    return (
        <div className={styles.eventCard}>
            <div className={styles.imageContainer}>
                <Image className={styles.image} src={imageSrc} width={322} height={285} />
            </div>
            <div className={styles.textContent} >
                <div>
                    <div className='card-heading'>{heading}</div>
                    <div className='subtitle'>{subtitle}</div>
                </div>
                <div className={`body ${styles.text}`}>{description}</div>
            </div>
        </div>
    )
}
