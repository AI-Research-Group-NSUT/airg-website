import React from 'react'
import Image from 'next/image'

import * as styles from './Logo.module.css'
import Link from 'next/link'



export const Logo = ({ closeMenu }) => {
    return (
        <Link href={'/'}>
            <a className={styles.logo} onClick={closeMenu}>
                <Image src={'/airg-logo.png'} alt="logo" width={35} height={35} />
                <span className={`heading ${styles.logoText}`}>AIRG</span>
            </a>
        </Link>
    )
}
