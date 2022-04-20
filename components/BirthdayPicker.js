import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useState } from "react";
import { createCookie } from "../utils/cookieService";

function TimeUntillNextAge() {
  const [pickedDate, setPickedDate] = useState("1995-10-27");

  const handOnClick = () => {
    createCookie(pickedDate);
  };

  return (
    <>
      <h1>When is your birthday?</h1>
      <Stack component="form" noValidate spacing={3}>
        <TextField
          id="date"
          label="Birthday"
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
            Select Date
          </Button>
        </Link>
      </Stack>
    </>
  );
}

export default TimeUntillNextAge;
