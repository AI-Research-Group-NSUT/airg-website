import styles from "../styles/team.module.css"
import { TeamCard } from "./TeamCard";


export const TeamCardsHolder = ({ heading, data, subHead }) => {
    return (<>
        <div className={styles.teamParent}>
            <div className={styles.heading}>
                {heading}
            </div>
            <div className={styles.subHeading}>
                {subHead ?? ""}
            </div>
            <div className={styles.cardWrap}>
                {data?.map((member, index) => {
                    return <TeamCard member={member} key={index} />
                })}
            </div>
        </div>  
    </>);
}