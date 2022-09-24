import React from 'react'
import { facebook, instagram, linkedIn, twitter } from '../../constants'

import * as styles from './SocialMediaLinks.module.css'

export const SocialMediaLinks = () => {
    return (
        <div className={styles.wrap}>
            <span className={styles.text}>Follow Us</span>
            <div className={styles.socialMediaLinks}>
                {/* Icon-links for twitter, ig, facebook and linkedin */}
                {/* <IconLink icon={twitter} link="https://twitter.com/" /> */}
                <IconLink icon={instagram} link="https://www.instagram.com/airgnsut/" />
                {/* <IconLink icon={facebook} link="https://www.facebook.com/" /> */}
                <IconLink icon={linkedIn} link="https://www.linkedin.com/company/artificial-intelligence-research-group-nsut/mycompany/" />
            </div>
        </div>
    )
}


const IconLink = ({ icon, link }) => {
    return (

        // open in new tab
        <a href={link}
            target="_blank"
            className={styles.iconLink} rel="noreferrer"
        >
            {icon}
        </a>
    )
}
