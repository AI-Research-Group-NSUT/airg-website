import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { SocialMediaLinks } from '../../components/SocialMediaLinks/SocialMediaLinks'
import { capitalizeFirst } from '../../utils/util';
import * as styles from './Footer.module.css'

const tabs = ["home", "projects", "publications", "events", "team"];

export const Footer = () => {
  return (
    <div className={`${styles.footer} ${styles.container}`}>
      {/* quick links */}

      <div className={styles.links}>
        <span className={styles.heading}>Quick Links</span>
        <ul className={styles.quickLinks}>
          {tabs.map(tab => (
            <li key={tab} className={styles.quickLink}>
              <Link href={`/${tab == 'home' ? '' : tab}`}>
                <a>{capitalizeFirst(tab)}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>


      <SocialMediaLinks />

      <Link href={'/'}>
        <div className={styles.logo}>
          <div>
            <Image className={styles.image} src={'/airg-red-logo.jpeg'} width={60} height={60} />
          </div>
          <div className={styles.groupName}>
            <span className={styles.logoTop}>AIRG</span>
            <span className={styles.logoBottom}>NSUT</span>
          </div>
        </div>
      </Link>

    </div>
  )
}
