import Head from "next/head";
import ShowcaseCard from "../components/ShowcaseCard";
import * as styles from "../styles/Events.module.css";

const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ipsam esse voluptatibus sed similique natus debitis maxime vero quidem obcaecati nulla, minima fuga aperiam veritatis quae, error eaque excepturi, ut labore molestiae ipsa! Nesciunt repellendus dolor odio hic deserunt, ea eligendi, id ipsam, reprehenderit minus assumenda veniam est eum neque!";

const Events = () => {
  return (
    <>
      <Head>
        <title>Events</title>
      </Head>
      <div className={`projects container`}>
        <div className="heading-large">Events</div>
        <div className={styles.eventsContainer}>
          <ShowcaseCard
            description={lorem}
            heading="Event 1"
            imageSrc={"/event-images/event-1.jpeg"}
            subtitle="New Delhi"
          />
          <ShowcaseCard
            description={lorem}
            heading="Event 2"
            imageSrc={"/event-images/event-2.jpeg"}
            subtitle="Mumbai"
          />
        </div>
      </div>
    </>
  );
};

export default Events;
