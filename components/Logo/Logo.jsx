import React from 'react'
import Image from 'next/image'

import * as styles from './Logo.module.css'
import Link from 'next/link'



export const Logo = ({ closeMenu }) => {
    return (
        <Link href={'/'}>
            <a className={styles.logo} onClick={closeMenu}>
                <Image src={'/airg-logo.svg'} alt="logo" width={40} height={40} />
                <span className={`heading ${styles.logoText}`}>AIRG</span>
            </a>
        </Link>
    )
}
