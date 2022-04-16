export function getAge(today, birthDate) {
  const age = today.diff(birthDate, "years");

  return age;
}
