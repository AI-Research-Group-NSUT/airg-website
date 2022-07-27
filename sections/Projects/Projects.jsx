import Link from 'next/link'
import React from 'react'

import ProjectCardSection from '../../components/ProjectCardSection'
import { projects } from '../../constants'
// import styles
import * as styles from './Projects.module.css'



export const Projects = () => {
    return (
        <div className={styles.container}>
            <div className='heading-large' style={{ 'paddingBottom': 29 }}>Projects</div>
            <ProjectCardSection projects={projects} />
            <Link href={'/projects'}>
                <button className={styles.button}>
                    <div className={styles.buttonText}>
                        View More Projects
                    </div>
                </button>
            </Link>
        </div>
    )
}
