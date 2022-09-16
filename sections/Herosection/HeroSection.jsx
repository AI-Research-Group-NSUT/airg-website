import React from 'react'
import { HeaderSceneThree } from '../../components/HeaderSceneThree'

import * as styles from './HeroSection.module.css'

export const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
            <div className={styles.three}>

                <HeaderSceneThree />
            </div>

            <div className={styles.gradient}>

            </div>

            <div className={styles.textSection}>

                <div className={styles.heading}><span style={{ color: 'hsl(345, 82%, 55%)' }}>Artificial</span> Intelligence<br />
                    Research Group</div>
                <div className={styles.subHeading}>
                    Netaji Subhas University of Technology
                </div>
            </div>
        </div>
    )
}
