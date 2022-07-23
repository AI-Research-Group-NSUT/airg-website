import { useRouter } from 'next/router';
import Link from 'next/link';

import * as styles from './ScreenCoverNavbar.module.css'
import { capitalizeFirst } from '../../utils/util';
import { useEffect, useState } from 'react';

export const ScreenCoverNavbar = ({ open, tabs, closeMenu }) => {

    return (
        <div className={`${styles.cover} ${open ? styles.open : ''}`}>
            {
                tabs.map((tab, index) => {
                    return (

                        <NavBarTile key={index} index={index} tab={tab} closeMenu={closeMenu} />

                    )
                })
            }
        </div>
    )
}

const NavBarTile = ({ tab, closeMenu, index }) => {


    // get current tab
    const router = useRouter();

    // slicing because the route is contains '/', home route is '/' so we have || 'home' incase of ''
    const currentTab = router.asPath.slice(1) || "home";



    return (
        <Link href={`/${tab === "home" ? "" : tab}`}  >
            <a className={`${styles.tile} ${styles[`tile-${index + 1}`]}`} onClick={closeMenu}>
                <span className={`${styles.tileText}  ${currentTab === tab ? styles.active : ''}`}>{capitalizeFirst(tab)}</span>
            </a>
        </Link>
    )
}

