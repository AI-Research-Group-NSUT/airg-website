import Image from 'next/image'
import React from 'react'
import * as styles from './About.module.css'

export const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>About Us</div>
            <div className={styles.content}>
                <p>
                    <b>Artificial Intelligence Research Group,</b> -Netaji Subhas University of Technology is a student-run, non-profit community of young researchers interested in the applications of Data Science and ML in a wide range of topics, backed by Intel®.
                    <br /> <br />
                    We are the first such research society of NSUT.
                </p>
                <Image src={'/airg-logo.jpeg'} width={250} height={250} />
            </div>
        </div>
    )
}
