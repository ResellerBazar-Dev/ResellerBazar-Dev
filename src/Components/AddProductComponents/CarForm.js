import {
  FormControl,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import React from "react";
import TextfieldComponent from "../InputComponents/TextfieldComponent";

const useStyle = makeStyles((theme) => ({}));

export default function CarForm({
  fieldDiv,
  radioBtnStyle,
  cfYear,
  setcfYear,
  cfFual,
  setcfFual,
  cfTransmission,
  setcfTransmission,
  cfKMDriven,
  setcfKMDriven,
  cfNoOfOwners,
  setcfNoOfOwners,
}) {
  const classes = useStyle();
  return (
    <>
      <div className={fieldDiv}>
        <Typography>Year *</Typography>
        <TextfieldComponent
          type="number"
          value={cfYear}
          onChange={(e) => setcfYear(e.target.value)}
        />
      </div>
      <div className={fieldDiv}>
        <Typography>Fuel *</Typography>
        <FormControl component="fieldset" className={radioBtnStyle}>
          <RadioGroup
            row
            value={cfFual}
            onChange={(e) => setcfFual(e.target.value)}
          >
            <FormControlLabel
              value="CNG & Hybrids"
              control={<Radio />}
              label="CNG & Hybrids"
            />
            <FormControlLabel
              value="Diesel"
              control={<Radio />}
              label="Diesel"
            />
            <FormControlLabel
              value="Electric"
              control={<Radio />}
              label="Electric"
            />
            <FormControlLabel value="LPG" control={<Radio />} label="LPG" />
            <FormControlLabel
              value="Petrol"
              control={<Radio />}
              label="Petrol"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={fieldDiv}>
        <Typography>Transmission *</Typography>
        <FormControl component="fieldset" className={radioBtnStyle}>
          <RadioGroup
            row
            value={cfTransmission}
            onChange={(e) => setcfTransmission(e.target.value)}
          >
            <FormControlLabel
              value="Automatic"
              control={<Radio />}
              label="Automatic"
            />
            <FormControlLabel
              value="Manual"
              control={<Radio />}
              label="Manual"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={fieldDiv}>
        <Typography>KM driven *</Typography>
        <TextfieldComponent
          type="number"
          value={cfKMDriven}
          onChange={(e) => setcfKMDriven(e.target.value)}
        />
      </div>
      <div className={fieldDiv}>
        <Typography>No. of Owners *</Typography>
        <FormControl component="fieldset" className={radioBtnStyle}>
          <RadioGroup
            row
            value={cfNoOfOwners}
            onChange={(e) => setcfNoOfOwners(e.target.value)}
          >
            <FormControlLabel value="1" control={<Radio />} label="1" />
            <FormControlLabel value="2" control={<Radio />} label="2" />
            <FormControlLabel value="3" control={<Radio />} label="3" />
            <FormControlLabel value="4" control={<Radio />} label="4" />
            <FormControlLabel value="5" control={<Radio />} label="5" />
            <FormControlLabel value="5+" control={<Radio />} label="5+" />
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
}
