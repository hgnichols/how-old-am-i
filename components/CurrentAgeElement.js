import { getAge } from "../utils/ageCalculations";
import styles from "../styles/Home.module.css";

function CurrentAgeElement(props) {
  return (
    <>
      <h1 className={styles.title}>
        I am {getAge(props.todayAsMoment, props.myBirthDate)} years old as of
        today.
      </h1>
    </>
  );
}

export default CurrentAgeElement;
