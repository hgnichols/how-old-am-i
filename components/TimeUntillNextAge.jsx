import moment from "moment";
import { getAge } from "../utils/ageCalculations";
import styles from "../styles/Home.module.css";
import useTranslation from "next-translate/useTranslation";

function TimeUntillNextAge(props) {
  const { t } = useTranslation("common");

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

  function isItMyBirthday(today, birthDate) {
    const myNextBirthDayDateAsIso = new Date(
      today.year(),
      birthDate.birthMonth - 1,
      birthDate.bitchDay
    ).toISOString();

    const myNextBirthDayDateAsMoment = moment(myNextBirthDayDateAsIso);
    const duration = moment.duration(myNextBirthDayDateAsMoment.diff(today));

    return duration == 0;
  }

  function createRemianingTimeUntillBirthdayText(
    nextAge,
    durationUntilBirthday
  ) {
    const monthsRemaining = durationUntilBirthday.months();
    const daysRemaining = durationUntilBirthday.days();

    const anyMonthsRemaining = monthsRemaining > 0;
    const anyDaysRemaining = daysRemaining > 0;

    if (!anyMonthsRemaining && !anyDaysRemaining) {
      return t("itsYourBirthday", { nextAge: nextAge });
    }

    if (anyMonthsRemaining && anyDaysRemaining) {
      return t("iWillTurnWithMonthsAndDays", {
        nextAge: nextAge,
        months: monthsRemaining,
        days: daysRemaining,
      });
    }

    if (anyMonthsRemaining && !anyDaysRemaining) {
      return t("iWillTurnWithMonths", {
        nextAge: nextAge,
        months: monthsRemaining,
      });
    }

    if (!anyMonthsRemaining && anyDaysRemaining) {
      return t("iWillTurnWithDays", {
        nextAge: nextAge,
        days: daysRemaining,
      });
    }
  }

  function getNextAge(currentAge) {
    const amountToAddToFindNextAge = isItMyBirthday(
      props.todayAsMoment,
      props.myBirthDate
    )
      ? 0
      : 1;

    return currentAge + amountToAddToFindNextAge;
  }
  return (
    <h2 className={styles.description}>
      {createRemianingTimeUntillBirthdayText(
        getNextAge(getAge(props.todayAsMoment, props.myBirthDate)),
        calculateTimeRemainingUntilNextBirthday(
          props.todayAsMoment,
          props.myBirthDate.bitchDay,
          props.myBirthDate.birthMonth
        )
      )}
    </h2>
  );
}

export default TimeUntillNextAge;
