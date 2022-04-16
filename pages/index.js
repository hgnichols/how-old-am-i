import CurrentAgeElement from "../components/CurrentAgeElement";
import TimeUntillNextAge from "../components/TimeUntillNextAge";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import moment from "moment";

function Home() {
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
      <CurrentAgeElement todayAsMoment={moment()} />
      <TimeUntillNextAge todayAsMoment={moment()} />
      <footer className={styles.footer}>
        Yeah I made a website to tell me how old I am because I can't remember.
        😓
      </footer>
    </div>
  );
}

export default Home;
