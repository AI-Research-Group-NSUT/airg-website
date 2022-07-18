import React from 'react'
import Image from 'next/image'

import * as styles from './Logo.module.css'



export const Logo = () => {
    return (
        <div className={styles.logo}>
            <Image src={'/airg-logo.png'} alt="logo" width={35} height={35} />
            <span className={`heading ${styles.logoText}`}>AIRG</span>
        </div>
    )
}
