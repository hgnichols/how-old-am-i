import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useState } from "react";
import { createCookie } from "../utils/cookieService";
import useTranslation from "next-translate/useTranslation";

function TimeUntillNextAge() {
  const { t } = useTranslation("common");
  const [pickedDate, setPickedDate] = useState("1995-10-27");

  const handOnClick = () => {
    createCookie(pickedDate);
  };

  return (
    <>
      <h1>{t("whenIsYourBirthday")}</h1>
      <Stack component="form" noValidate spacing={3}>
        <TextField
          id="date"
          label={t("birthday")}
          type="date"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          value={pickedDate}
          onChange={(newPickedDate) => {
            setPickedDate(newPickedDate.currentTarget.value);
          }}
        />
        <Link href="/">
          <Button onClick={handOnClick} variant="contained">
            {t("selectDate")}
          </Button>
        </Link>
      </Stack>
    </>
  );
}

export default TimeUntillNextAge;
