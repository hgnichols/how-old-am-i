import { getAge } from "../utils/ageCalculations";
import styles from "../styles/Home.module.css";
import useTranslation from "next-translate/useTranslation";

function CurrentAgeElement(props) {
  const { t } = useTranslation("common");
  const age = getAge(props.todayAsMoment, props.myBirthDate);

  return (
    <>
      <h1 className={styles.title}>
        {t("iAmCurrentAge", { currentAge: age })}
      </h1>
    </>
  );
}

export default CurrentAgeElement;
