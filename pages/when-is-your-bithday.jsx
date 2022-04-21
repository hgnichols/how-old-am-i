import BirthdayPicker from "../components/BirthdayPicker";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

function WhenIsYourBirthday() {
  const { t } = useTranslation("common");

  return (
    <div className={styles.container}>
      <Head>
        <title>{t("commonPageTitle")}</title>
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
