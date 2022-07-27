import React from 'react'

import * as styles from './ProjectCardSection.module.css'

import ProjectCard from '../ProjectCard'


export const ProjectCardSection = ({ projects }) => {

    return (
        <div className={`${styles.cardSection}`}>
            {
                projects.map(project => {
                    return <ProjectCard key={project.title} project={project} />
                })
            }
        </div>
    )
}
