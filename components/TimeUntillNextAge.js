import moment from "moment";
import { getAge } from "../utils/ageCalculations";
import styles from "../styles/Home.module.css";

function TimeUntillNextAge(props) {
  function calculateTimeRemainingUntilNextBirthday(
    today,
    myBirthDay,
    myBirthMonth
  ) {
    const myNextBirthDayDateAsIso = new Date(
      GetYearOfNextBirthday(today, myBirthMonth, myBirthDay),
      myBirthMonth - 1,
      myBirthDay
    ).toISOString();
    const myNextBirthDayDateAsMoment = moment(myNextBirthDayDateAsIso);
    const duration = moment.duration(myNextBirthDayDateAsMoment.diff(today));

    return duration;
  }

  function GetYearOfNextBirthday(today, birthMonth, birthDay) {
    return HasMyBirthDayPassed(today, birthMonth, birthDay)
      ? today.year() + 1
      : today.year();
  }

  function HasMyBirthDayPassed(today, birthMonth, birthDay) {
    const myNextBirthDayDateAsIso = new Date(
      today.year(),
      birthMonth - 1,
      birthDay
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
        {getAge(props.todayAsMoment, props.myBirthDate) +
          (() => {
            return IsItMyBirthday(props.todayAsMoment, props.myBirthDate)
              ? 0
              : 1;
          })()}{" "}
        in{" "}
        {createRemianingTimeUntillBirthdayText(
          calculateTimeRemainingUntilNextBirthday(
            props.todayAsMoment,
            props.myBirthDate.bitchDay,
            props.myBirthDate.birthMonth
          )
        )}
      </h2>
    </>
  );
}

export default TimeUntillNextAge;
