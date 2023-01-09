import * as React from "react";
import { useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import { Checkbox } from "@material-tailwind/react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const hours = [
  {
    our: "08:00",
    value: "08:00",
  },
  {
    our: "10:00",
    value: "10:00",
  },
  {
    our: "13:00",
    value: "13:00",
  },
  {
    our: "16:00",
    value: "16:00",
  },
  {
    our: "18:00",
    value: "18:00",
  },
  {
    our: "20:00",
    value: "20:00",
  },
];

export function GridForHours() {
  const [alignment, setAlignment] = React.useState("web");
  const termsRef = useRef();

  const termsHandler = (e) => {
    setTerms(!termsRef.current.checked);
  };

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {hours.map((ours, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value={ours.value}>
              {ours.our}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      ))}
      <div className="ml-7 mt-5">
        <Checkbox
          inputRef={termsRef}
          className="checked:border-0 checked:bg-[var(--color-main)]"
          onInput={termsHandler}
          label="Ver todo el día"
        />
      </div>
    </Grid>
  );
}

export default GridForHours;
