import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { TeamCard, TeamCardsHolder } from "../components/TeamCardsHolder";
import { teamDets } from "../data/team";
import * as styles from "../styles/Projects.module.css";
import styles1 from "../styles/team.module.css"


const teamSections = [
  <TeamCardsHolder heading={"Core Members"} data={teamDets.core} key="0" />,
  <TeamCardsHolder heading={"Researchers"} data={teamDets.sen_researchers} subHead={"Senior Researchers"} key="1" />,
  <TeamCardsHolder heading={"Researchers"} data={teamDets.jun_researchers} subHead={"Junior Researchers"} key="2" />,
  <TeamCardsHolder heading={"Advisory Board"} data={teamDets.advisory} key="3" />
]

const getAllTeam = () => {
  return teamSections.map((x) => x)
}

const getResearcher = () => {
  return (
    <>
      {
        teamSections[1]
      }
      {
        teamSections[2]
      }
    </>
  )
}


import { Spacer } from "../components/Spacer";
const Team = () => {
  const [buttons, setButtons] = useState({
    tabs: ["All",
      "Core",
      "Researchers",
      "Advisory"],
    current: 0
  })

  const [teamSection, setTeamSection] = useState(getAllTeam());
  let myRef = useRef()

  useEffect(() => {
    if (!buttons.current) {
      setTeamSection(getAllTeam())
      return
    }
    window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop })
    switch (buttons.current) {
      case 1: setTeamSection(teamSections[0])
        break
      case 2: setTeamSection(getResearcher())
        break
      case 3: setTeamSection(teamSections[3])
        break
    }
  }, [buttons])

  return (
    <>
      <Head>
        <title>Team</title>
      </Head>
      <div className="project" style={{ paddingTop: "61px" }}>
        <div className={`container`}>
          <div className="heading-large">Our Team</div>
          <div className={`${styles.textSection} body`}>
            <b>AIRG</b> is established by young researchers from NSUT, working at the world&apos;s top
            research institutions like <b>Harvard, Princeton, NUS, Vanderbilt</b> and <b>CMU</b>.
            <br></br>AIRG is essentially for NSUT students by NSUT students, irrespective of their branch,
            year of study, or work experience.
          </div>
          <div className={styles1.categWrap}>
            {
              buttons.tabs.map((x, n) => {
                return (
                  <button
                    className={`${styles1.button} ${buttons.current === n ? styles1.active : ''}`}
                    onClick={() => { setButtons((old) => ({ ...old, current: n })) }}
                    key={n}>
                    {x}
                  </button>
                );
              })
            }
          </div>
          <div className={styles1.members} id="members" ref={myRef}>
            {teamSection}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
