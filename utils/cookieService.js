import Cookies from "js-cookie";
import moment from "moment";
import cookie from "cookie";

export const createCookie = (pickedDate) => {
  const cookieName = "howOldAmISelectedBirthDate";
  const birthDate = Cookies.get(cookieName);

  if (birthDate == null || !moment(birthDate).isValid()) {
    const expiration = moment().add(1, "years");
    Cookies.set(cookieName, pickedDate, {
      expires: expiration.toDate(),
    });
  }
};

export const getSelectedDateCookie = () => {
  const cookieName = "howOldAmISelectedBirthDate";
  const birthDate = Cookies.get(cookieName);
  if (birthDate != null) {
    return splitDate(birthDate);
  } else {
    return undefined;
  }
};

export function splitDate(date) {
  const splitDate = date.split("-");
  return {
    birthYear: splitDate[0],
    birthMonth: splitDate[1],
    bitchDay: splitDate[2],
  };
}

export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}
