import Image from 'next/image'
import React from 'react'
import * as styles from './ProjectCard.module.css'

export const ProjectCard = ({ project }) => {

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image layout='responsive' className={styles.image} src={`/project-images/${project.title}.jpeg`} width={392} height={264} alt={project.title} /> {/* assuming that image name is the same as the title */}
            </div>
            <div className={styles.content}>
                <div className={styles.headingSection}>
                    <div className={styles.heading}>{project.title}</div>
                    <div className={styles.date}>{project.date}</div>
                </div>
                <div className='descriptionSection'>
                    {project.description}
                </div>
            </div>
        </div>
    )
}
