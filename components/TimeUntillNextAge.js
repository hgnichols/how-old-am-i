import moment from "moment";
import { getAge } from "../utils/ageCalculations";
import styles from "../styles/Home.module.css";

function TimeUntillNextAge(props) {
  const MY_BIRTH_DATE = [1995, 10, 27];

  function calculateTimeRemainingUntilNextBirthday(
    today,
    myBirthDay,
    myBirthMonth
  ) {
    const myBirthDayThisYear = moment([today.year(), myBirthMonth, myBirthDay]);
    const duration = moment.duration(myBirthDayThisYear.diff(today));

    return duration;
  }

  function createRemianingTimeUntillBirthdayText(durationUntilBirthday) {
    const monthsRemaining = durationUntilBirthday.months();
    const daysRemaining = durationUntilBirthday.days();

    const anyMonthsRemaining = monthsRemaining > 0;
    const anyDaysRemaining = daysRemaining > 0;

    const monthsRemainingStringFragment = anyMonthsRemaining
      ? `${monthsRemaining} months and`
      : "";
    const daysRemainingStringFrament = anyDaysRemaining
      ? `${daysRemaining} days`
      : "";

    const createdString = `${monthsRemainingStringFragment} ${daysRemainingStringFrament}`;

    return createdString;
  }

  return (
    <>
      <h2 className={styles.description}>
        I will turn {getAge(props.todayAsMoment, MY_BIRTH_DATE) + 1} in{" "}
        {createRemianingTimeUntillBirthdayText(
          calculateTimeRemainingUntilNextBirthday(props.todayAsMoment, 27, 10)
        )}
      </h2>
    </>
  );
}

export default TimeUntillNextAge;
