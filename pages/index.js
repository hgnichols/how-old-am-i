import CurrentAgeElement from "../components/CurrentAgeElement";
import TimeUntillNextAge from "../components/TimeUntillNextAge";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import moment from "moment";
import { parseCookies, splitDate } from "../utils/cookieService";

Home.getInitialProps = async ({ req, res }) => {
  const data = parseCookies(req);
  if (res) {
    if (data.howOldAmISelectedBirthDate == undefined) {
      res.writeHead(307, { Location: "/when-is-your-bithday" });
      res.end();
    } else {
      if (Object.keys(data).length === 0 && data.constructor === Object) {
        res.writeHead(301, { Location: "/" });
        res.end();
      }
    }
  }

  return {
    data: data && data,
  };
};

function Home({ data }) {
  const todayAsMoment = moment().startOf("day");
  const dateAsObject = splitDate(data.howOldAmISelectedBirthDate);
  return (
    <div className={styles.container}>
      <Head>
        <title>How Old am I?</title>
        <meta
          name="description"
          content="How Old is this one person specifically"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <CurrentAgeElement
          todayAsMoment={todayAsMoment}
          myBirthDate={dateAsObject}
        />
        <TimeUntillNextAge
          className={styles.title}
          todayAsMoment={todayAsMoment}
          myBirthDate={dateAsObject}
        />
      </main>
    </div>
  );
}

export default Home;
