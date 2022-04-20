import BirthdayPicker from "../components/BirthdayPicker";
import styles from "../styles/Home.module.css";
import Head from "next/head";

function WhenIsYourBirthday() {
  return (
    <div className={styles.container}>
      <Head>
        <title>How Old am I?</title>
        <meta name="description" content="Please pick you birthday date" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <BirthdayPicker />
      </main>
    </div>
  );
}

export default WhenIsYourBirthday;
