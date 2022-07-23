import React, { useEffect } from 'react'
import * as styles from './Menu.module.css'


export const Menu = ({ open }) => {
    return (
        <div className={`${styles.menu_btn} ${open ? styles.open : ''}`} id='btn'>
            <div className={styles.menu_btn__burger}></div>
        </div>
    )
}
