import Head from "next/head";
import ShowcaseCard from "../components/ShowcaseCard";
import * as styles from "../styles/Events.module.css";

import { Spacer } from "../components/Spacer";
const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ipsam esse voluptatibus sed similique natus debitis maxime vero quidem obcaecati nulla, minima fuga aperiam veritatis quae, error eaque excepturi, ut labore molestiae ipsa! Nesciunt repellendus dolor odio hic deserunt, ea eligendi, id ipsam, reprehenderit minus assumenda veniam est eum neque!";

const Events = () => {
  return (
    <>
      <Head>
        <title>Events</title>
      </Head>
      <Spacer />
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

// async function addDataToGoogleSheets(data) {
//   const auth = new google.auth.GoogleAuth({
//     keyFile: process.env.GOOGLE_CREDENTIALS,
//     scopes: "https://www.googleapis.com/auth/spreadsheets",
//   });

//   const client = await google.auth.getClient({
//     scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//   });

//   const googleSheets = google.sheets({ version: "v4", auth: client });

//   const spreadsheetId = process.env.GOOGLE_SHEET_ID;

//   await googleSheets.spreadsheets.values.append({
//     auth,
//     spreadsheetId,
//     range: "Sheet1!A1",
//     valueInputOption: "USER_ENTERED",
//     resource: {
//       values: [[data.name, data.email, data.message]],
//     },
//   });
// }

// export async function getServerSideProps(context) {
//   // const auth = await google.auth.getClient({
//   //   scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
//   // });

//   // const sheets = google.sheets({ version: "v4", auth });

//   // const range = "Sheet1!A1:G1";

//   // const res = await sheets.spreadsheets.values.get({
//   //   spreadsheetId: process.env.GOOGLE_SHEET_ID,
//   //   range,
//   // });

//   // console.log(res.data.values);

//   const res2 = await addDataToGoogleSheets({
//     name: "test",
//     email: "test",
//     message: "test",
//   });

//   console.log;

//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }

export default Events;
