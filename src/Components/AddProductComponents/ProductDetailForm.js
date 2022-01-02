import {
  FormControl,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React from "react";
import IconTextfield from "../InputComponents/IconTextfield";
import TextfieldComponent from "../InputComponents/TextfieldComponent";
import { Icon } from "@iconify/react";
import rupeeSign from "@iconify/icons-fa-solid/rupee-sign";

const useStyle = makeStyles((theme) => ({
  priceTextfield: {
    "&>div>div>svg": {
      opacity: "0.5",
    },
  },
}));

export default function ProductDetailForm({
  fieldDiv,
  selectRoot,
  secondaryHeading,
  brand,
  setBrand,
  adTitle,
  setAdTitle,
  description,
  setDescription,
  price,
  setPrice,
}) {
  const classes = useStyle();
  return (
    <>
      <div className={fieldDiv}>
        <Typography>Brand *</Typography>
        <TextfieldComponent
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>
      <div className={fieldDiv}>
        <Typography>Ad title *</Typography>
        <TextfieldComponent
          type="text"
          value={adTitle}
          onChange={(e) => setAdTitle(e.target.value)}
        />
      </div>
      <div className={fieldDiv}>
        <Typography>Description *</Typography>
        <TextfieldComponent
          multiline={true}
          rows={5}
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Typography component="h2" className={secondaryHeading}>
        SET A PRICE for your product
      </Typography>
      <div className={fieldDiv}>
        <Typography>Price *</Typography>
        <IconTextfield
          textfieldIcon={<Icon icon={rupeeSign} />}
          iconPosition="start"
          type="number"
          className={classes.priceTextfield}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
    </>
  );
}
