export function getAge(today, birthDate) {
  const birthDateAsDate = new Date(
    birthDate.birthYear,
    birthDate.birthMonth - 1,
    birthDate.bitchDay
  );
  const birthDateAsIsoString = birthDateAsDate.toISOString();

  const age = today.diff(birthDateAsIsoString, "years");

  return age;
}
