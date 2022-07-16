import Image from 'next/image'
import React from 'react'

import * as styles from './HeroSection.module.css'

export const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
            <div className={styles.heading}>Artifical Intelligence <br />
                Research Group</div>
            <div className={styles.subheading}>
                Netaji Subhas University of Technology
            </div>
        </div>
    )
}
