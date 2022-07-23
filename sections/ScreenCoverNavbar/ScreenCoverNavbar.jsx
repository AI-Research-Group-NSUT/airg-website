import React from 'react'
import * as styles from './ScreenCoverNavbar.module.css'

export const ScreenCoverNavbar = ({ open }) => {
    return (
        <div className={`${styles.cover} ${open ? styles.open : ''}`}></div>
    )
}
