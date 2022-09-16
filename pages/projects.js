import Head from "next/head";
import ProjectCardSection from "../components/ProjectCardSection";

import * as styles from "../styles/Projects.module.css";

const publicHealthProjects = [
  {
    title: "Project-1",
    date: "XXXX/XX/XX",
    description:
      "Unraveling domestic level human mobility trends and patterns in COVID with Facebook movement Data.",
  },
  {
    title: "Project-2",
    date: "XXXX/XX/XX",
    description:
      "Analysing the relations of increasing Particulate Matter (PM) levels and the increase in the cases  and deaths due to respiratory diseases, in Delhi.",
  },
];

const computerVisionProjects = [
  {
    title: "Project-1",
    date: "XXXX/XX/XX",
    description: "Style transfer for images. Lorem ipsum blah vlah blah  ",
  },
];

const languageProcessingProjects = [
  {
    title: "Project-1",
    date: "XXXX/XX/XX",
    description:
      "Synthesizing Devanagari Script Handwriting Using Deep Recurrent Neural Networks.",
  },
  {
    title: "Project-2",
    date: "XXXX/XX/XX",
    description:
      "Multilingual Toxic Comments Classification using DistilBERT and RoBERTa",
  },
];

const climateChangeProjects = [
  {
    title: "Project-1",
    date: "XXXX/XX/XX",
    description:
      "Climate change impacts on increasing surface temperatures and heat wave patterns in South Asia.",
  },
];

const Project = () => {
  return (
    <div className="project">
      <Head>
        <title>Projects</title>
      </Head>
      <div className={`container`}>
        <div className="heading-large">Projects</div>
        <div className={`${styles.textSection} body`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ea
          in, et vero aut culpa, corporis tempora illum molestias quis harum
          aliquam saepe, fugiat quod quasi numquam voluptatibus. Officia est
          nihil porro alias quo eius in necessitatibus animi ipsa assumenda
          odit, ad totam delectus? Voluptatibus modi ut similique provident
          consequuntur a aliquid, nostrum officia, debitis alias, quas nam animi
          fuga excepturi id dolorem recusandae ea sapiente error architecto
          cupiditate optio quaerat dignissimos veritatis? Ipsam corrupti
          officiis doloremque laboriosam minima consectetur?
        </div>

        <div className={styles.projectCardSection}>
          <div className={styles.subSectionHeading}>Public Health</div>
          <ProjectCardSection projects={publicHealthProjects} />
        </div>

        <div className={styles.subSectionHeading}>Computer Vision</div>
        <ProjectCardSection projects={computerVisionProjects} />

        <div className={styles.subSectionHeading}>
          Natural Language Processing
        </div>
        <ProjectCardSection projects={languageProcessingProjects} />

        <div className={styles.subSectionHeading}>Climate Change</div>
        <ProjectCardSection projects={climateChangeProjects} />
      </div>
    </div>
  );
};

export default Project;
