import { getAge } from "../utils/ageCalculations";
import styles from "../styles/Home.module.css";
import { MY_BIRTH_DATE } from "../utils/constants";

function CurrentAgeElement(props) {
  return (
    <>
      <h1 className={styles.title}>
        I am{" "}
        {getAge(props.todayAsMoment, [
          MY_BIRTH_DATE.birthYear,
          MY_BIRTH_DATE.birthMonth,
          MY_BIRTH_DATE.bitchDay,
        ])}{" "}
        years old as of today.
      </h1>
    </>
  );
}

export default CurrentAgeElement;
