import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { openInNew } from '../../constants'

import * as styles from './ProjectCard.module.css'

export const ProjectCard = ({ project }) => {

    const [showViewMore, setShowViewMore] = useState(false)

    const { inView, ref } = useInView({
        threshold: 0.2,
        triggerOnce: true
    })

    const show = () => setShowViewMore(true)
    const hide = () => setShowViewMore(false)

    return (
        <Link href={`/projects/${project.title}`}>

            <div onMouseEnter={show} onMouseLeave={hide} >

                <div ref={ref} className={`${styles.container} ${inView ? styles.active : ''}`}>
                    <div className={styles.imageContainer}>
                        <Image priority layout='responsive' className={styles.image} src={`/project-images/${project.title}.jpeg`} width={392} height={264} alt={project.title} /> {/* assuming that image name is the same as the title */}
                    </div>
                    <div className={styles.content}>
                        <div className={styles.headingSection}>
                            <div className={styles.heading}>{project.title}</div>
                            <div className={styles.date}>{project.date}</div>
                        </div>
                        <div className={`descriptionSection ${styles.description}`}>
                            {project.description}
                        </div>

                    </div>
                    <div className={`${styles.viewMore} ${showViewMore ? styles.active : ''}`}>
                        <span className={styles.openInNew}>
                            {openInNew}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
