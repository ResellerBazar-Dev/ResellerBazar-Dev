import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { makeStyles } from "@material-ui/core";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyle = makeStyles((theme) => ({
  imageBox: {
    objectFit: "cover",
  },
  imgRoot: {
    width: "100%",
    height: "304px",
  },
}));

function SwipableCarousel({ imageArray, className }) {
  const theme = useTheme();
  const classes = useStyle();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{ position: "relative" }}
      className={className}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {imageArray.map((step, index) => (
          <>
            <div key={index} className={classes.imgRoot}>
              {Math.abs(activeStep - index) <= imageArray.length ? (
                <>
                  <Box
                    component="img"
                    sx={{
                      display: "block",
                      overflow: "hidden",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={step.banner_image}
                    alt="Carousel Images"
                    className={classes.imageBox}
                  />
                </>
              ) : null}
            </div>
          </>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default SwipableCarousel;
