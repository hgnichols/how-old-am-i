import Cookies from "js-cookie";
import moment from "moment";

export const createCookie = (pickedDate) => {
  const cookieName = "howOldAmISelectedBirthDate";
  const birthDate = Cookies.get(cookieName);

  if (birthDate == null || !moment(birthDate).isValid()) {
    const expiration = moment().add(1, "years");
    Cookies.set(cookieName, pickedDate, {
      expires: expiration.toDate(),
    });
  } else if (pickedDate != null && pickedDate != "") {
    const expiration = moment().add(1, "years");
    Cookies.set(cookieName, pickedDate, {
      expires: expiration.toDate(),
    });
  }
};