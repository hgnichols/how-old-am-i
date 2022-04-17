import moment from "moment";
import { getAge } from "../utils/ageCalculations";
import styles from "../styles/Home.module.css";
import { MY_BIRTH_DATE } from "../utils/constants";

function TimeUntillNextAge(props) {
  function calculateTimeRemainingUntilNextBirthday(
    today,
    myBirthDay,
    myBirthMonth
  ) {
    const myNextBirthDayDateAsIso = new Date(
      GetYearOfNextBirthday(today, MY_BIRTH_DATE),
      myBirthMonth - 1,
      myBirthDay
    ).toISOString();
    const myNextBirthDayDateAsMoment = moment(myNextBirthDayDateAsIso);
    const duration = moment.duration(myNextBirthDayDateAsMoment.diff(today));

    return duration;
  }

  function GetYearOfNextBirthday(today, birthDate) {
    return HasMyBirthDayPassed(today, birthDate)
      ? today.year() + 1
      : today.year();
  }

  function HasMyBirthDayPassed(today, birthDate) {
    const myNextBirthDayDateAsIso = new Date(
      today.year(),
      birthDate.birthMonth - 1,
      birthDate.bitchDay
    ).toISOString();

    const myNextBirthDayDateAsMoment = moment(myNextBirthDayDateAsIso);
    const duration = moment.duration(myNextBirthDayDateAsMoment.diff(today));

    return duration < 0;
  }

  function IsItMyBirthday(today, birthDate) {
    const myNextBirthDayDateAsIso = new Date(
      today.year(),
      birthDate.birthMonth - 1,
      birthDate.bitchDay
    ).toISOString();

    const myNextBirthDayDateAsMoment = moment(myNextBirthDayDateAsIso);
    const duration = moment.duration(myNextBirthDayDateAsMoment.diff(today));

    return duration == 0;
  }

  function createRemianingTimeUntillBirthdayText(durationUntilBirthday) {
    const monthsRemaining = durationUntilBirthday.months();
    const daysRemaining = durationUntilBirthday.days();

    const anyMonthsRemaining = monthsRemaining > 0;
    const anyDaysRemaining = daysRemaining > 0;

    if (monthsRemaining === 0 && daysRemaining === 0) {
      return "...right now! It's yo fucking birthday biiiiiiiiiiiitch.";
    }

    const monthsRemainingStringFragment = anyMonthsRemaining
      ? `${monthsRemaining} months`
      : "";
    const daysRemainingStringFrament = anyDaysRemaining
      ? `${daysRemaining} days`
      : "";

    const createdString = `${monthsRemainingStringFragment}${(() => {
      return anyMonthsRemaining && anyDaysRemaining ? " and " : "";
    })()}${daysRemainingStringFrament}.`;

    return createdString;
  }

  return (
    <>
      <h2 className={styles.description}>
        I will turn{" "}
        {getAge(props.todayAsMoment, [
          MY_BIRTH_DATE.birthYear,
          MY_BIRTH_DATE.birthMonth,
          MY_BIRTH_DATE.bitchDay,
        ]) +
          (() => {
            return IsItMyBirthday(props.todayAsMoment, MY_BIRTH_DATE) ? 0 : 1;
          })()}{" "}
        in{" "}
        {createRemianingTimeUntillBirthdayText(
          calculateTimeRemainingUntilNextBirthday(
            props.todayAsMoment,
            MY_BIRTH_DATE.bitchDay,
            MY_BIRTH_DATE.birthMonth
          )
        )}
      </h2>
    </>
  );
}

export default TimeUntillNextAge;
