import CurrentAgeElement from "../components/CurrentAgeElement";
import TimeUntillNextAge from "../components/TimeUntillNextAge";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import moment from "moment";

function Home() {
  const todayAsMoment = moment().startOf("day");
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
        <CurrentAgeElement todayAsMoment={todayAsMoment} />
        <TimeUntillNextAge
          className={styles.title}
          todayAsMoment={todayAsMoment}
        />
      </main>

      <footer className={styles.footer}>
        Yeah I made a website to tell me how old I am because I can&apos;t
        remember. 😓
      </footer>
    </div>
  );
}

export default Home;
