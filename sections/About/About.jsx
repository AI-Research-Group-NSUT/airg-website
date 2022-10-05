import Image from 'next/image'
import React from 'react'
import * as styles from './About.module.css'

export const About = () => {
    return (
        <div className={'container'}>
            <div className={'heading-large'}>About Us</div>
            <div className={styles.content}>
                <p className='body'>

                    <span style={{ color: 'hsl(345, 82%, 55%)', fontWeight: 'bolder' }}>Artificial Intelligence Research Group </span> - Netaji Subhas University of Technology  is a student-run, non-profit community of young researchers interested in the applications of Al and Data Science in a wide range of topics. <br />

                </p>
                <div className={styles.imageWrap}>

                    <Image layout='responsive' src={'/airg-logo.svg'} className={styles.image} width={250} height={250} />
                </div>
            </div>
        </div>
    )
}
