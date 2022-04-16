import { getAge } from "../utils/ageCalculations";

const MY_BIRTH_DATE = [1995, 10, 27];

function CurrentAgeElement(props) {
  return (
    <>
      <h1>
        I am {getAge(props.todayAsMoment, MY_BIRTH_DATE)} years old as of today.
      </h1>
    </>
  );
}

export default CurrentAgeElement;
