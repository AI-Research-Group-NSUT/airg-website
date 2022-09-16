import ShowcaseCard from "../components/ShowcaseCard";
import * as styles from "../styles/Publications.module.css";
import Head from "next/head";
import { Spacer } from "../components/Spacer";

const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ipsam esse voluptatibus sed similique natus debitis maxime vero quidem obcaecati nulla, minima fuga aperiam veritatis quae, error eaque excepturi, ut labore molestiae ipsa! Nesciunt repellendus dolor odio hic deserunt, ea eligendi, id ipsam, reprehenderit minus assumenda veniam est eum neque!";

const Publications = () => {
  return (
    <>
      <Head>
        <title>Publications</title>
      </Head>
      <Spacer />
      <div className={`project container`}>
        <div className="heading-large">Publications</div>
        <div className={`body ${styles.text}`}>{lorem}</div>
        <div className={styles.publicationsContainer}>
          <ShowcaseCard
            description={lorem}
            heading="Publication 1"
            imageSrc={"/publication-images/publication-1.jpeg"}
            subtitle="Mohit Chaurasiya, Vinamra Harkar, Poojan"
          />
          <ShowcaseCard
            description={lorem}
            heading="Publication 2"
            imageSrc={"/publication-images/publication-2.jpeg"}
            subtitle="Mohit Chaurasiya, Vinamra Harkar, Poojan"
          />
          <ShowcaseCard
            description={lorem}
            heading="Publication 3"
            imageSrc={"/publication-images/publication-3.jpeg"}
            subtitle="Mohit Chaurasiya, Vinamra Harkar, Poojan"
          />
        </div>
      </div>
    </>
  );
};

export default Publications;
