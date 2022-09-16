import styles from "../styles/team.module.css"
import { linkedIn, github } from '../constants'

export const TeamCard = ({ member }) => {
    return (<>
        <div className={styles.teamCard}>
            <div className={styles.overlay}>
                <p>{member.about}</p>
                <div className={styles.spacer}></div>
                <div className={styles.socials}>
                    <IconLink icon={github} link="https://www.linkedin.com/company/artificial-intelligence-research-group-nsut/mycompany/" />
                    <IconLink icon={linkedIn} link="https://www.linkedin.com/company/artificial-intelligence-research-group-nsut/mycompany/" />
                </div>
            </div>
            <div className={styles.image} style={{ backgroundImage: `url(${member?.img})` }}></div>
            <div className={styles.name}>
                {member.name}
            </div>
            <div className={styles.designation}>
                {member.designation}
            </div>
        </div>
    </>)
}

const IconLink = ({ icon, link }) => {
    return (
        <a href={link}
            target="_blank"
            className={styles.iconLink} rel="noreferrer"
        >
            {icon}
        </a>
    )
}
