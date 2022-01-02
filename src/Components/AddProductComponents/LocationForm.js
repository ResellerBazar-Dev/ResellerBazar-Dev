import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import TextfieldComponent from "../InputComponents/TextfieldComponent";

const useStyle = makeStyles((theme) => ({}));

export default function LocationForm({ fieldDiv, address, setAddress }) {
  const classes = useStyle();
  return (
    <div className={fieldDiv}>
      <Typography>Address *</Typography>
      <TextfieldComponent
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </div>
  );
}
