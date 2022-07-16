import Link from 'next/link'
import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../constants'
// import styles
import * as styles from './Projects.module.css'



export const Projects = () => {
    return (
        <div className={styles.container}>
            <div className='heading-large' style={{ 'paddingBottom': 29 }}>Projects</div>
            <div className={styles.cardSection}>
                {
                    projects.map(project => {
                        return <ProjectCard key={project.title} project={project} />
                    })
                }
            </div>
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
