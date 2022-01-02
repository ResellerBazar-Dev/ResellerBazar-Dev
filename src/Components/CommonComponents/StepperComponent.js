import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import React, { useEffect, useState } from "react";

const useStyle = makeStyles((theme) => ({
  stepperRoot: {
    width: "80%",
    height: "60px",
    borderRadius: "15px",
    background: "#F2F2F2",
    backdropFilter: "blur(24px)",
    padding: "0px 35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 0px 10px 0px rgb(0 0 0 / 50%)",
    margin: "30px auto",
  },
  stepperSecondaryRoot: {
    width: "100%",
    position: "relative",
    "&>div": {
      "&:nth-child(1)": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "&>div": {
          width: "25px",
          height: "25px",
          background: "#fff",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&>div": {
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            background: "#CCCCCC",
            zIndex: "1",
          },
        },
      },
      "&:nth-child(2)": {
        position: "absolute",
        top: "50%",
        left: "0px",
        transform: "translateY(-50%)",
        width: "100%",
        height: "9px",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        padding: "0px 5px",
        "&>div": {
          width: "0%",
          height: "3px",
          background: theme.palette.primary.main,
          transition: "width 1s ease-in",
        },
      },
    },
  },
  activeDiv: {
    background: `${theme.palette.primary.main} !important`,
  },
}));

export default function StepperComponent({ activeStep, steps, className }) {
  const classes = useStyle();
  const [width, setWidth] = useState("0%");
  const oneStepWidth = 100 / (steps.length - 1);

  useEffect(() => {
    setWidth(`${oneStepWidth * activeStep}%`);
  }, [activeStep]);
  return (
    <div className={classNames(classes.stepperRoot, className)}>
      <div className={classes.stepperSecondaryRoot}>
        <div>
          {steps.map((item, key) => {
            return (
              <div key={key}>
                <div className={activeStep >= key && classes.activeDiv}></div>
              </div>
            );
          })}
        </div>
        <div>
          <div
            style={{
              width: width,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
