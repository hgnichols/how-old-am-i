export function getAge(today, birthDate) {
  const birthDateAsDate = new Date(birthDate);
  const birthDateAsIsoString = birthDateAsDate.toISOString();

  const age = today.diff(birthDateAsIsoString, "years");

  return age;
}
