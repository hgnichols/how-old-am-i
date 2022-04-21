import CurrentAgeElement from "../components/CurrentAgeElement";
import TimeUntillNextAge from "../components/TimeUntillNextAge";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import moment from "moment";
import useTranslation from "next-translate/useTranslation";

export function getServerSideProps(context) {
  const howOldAmISelectedBirthDate =
    context.req.cookies["howOldAmISelectedBirthDate"];

  if (!howOldAmISelectedBirthDate) {
    return {
      redirect: {
        destination: "/when-is-your-bithday",
        permanent: true,
      },
    };
  } else {
    return {
      props: { howOldAmISelectedBirthDate },
    };
  }
}

function splitSelectedBirthDateCookie(date) {
  const splitDate = date.split("-");
  return {
    birthYear: splitDate[0],
    birthMonth: splitDate[1],
    bitchDay: splitDate[2],
  };
}

function Home(props) {
  const { t } = useTranslation("common");
  const todayAsMoment = moment().startOf("day");
  const dateAsObject = splitSelectedBirthDateCookie(
    props.howOldAmISelectedBirthDate
  );
  return (
    <div className={styles.container}>
      <Head>
        <title>{t("commonPageTitle")}</title>
        <meta name="description" content={t("homeDescription")} />
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
