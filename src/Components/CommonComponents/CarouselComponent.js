import { makeStyles } from "@material-ui/core";
import React from "react";
import Carousel from "react-material-ui-carousel";
import classNames from "classnames";

const useStyle = makeStyles((theme) => ({}));

const defaultFunction = () => {};

export default function CarouselComponent({
  children,
  className,
  onClick = defaultFunction,
  onChange = defaultFunction,
  autoPlay = true,
  stopAutoPlayOnHover = true,
  interval = 4000,
  animation = "slide",
  reverseEdgeAnimationDirection = true,
  timeout = 0,
  swipe = false,
  indicators = false,
  navButtonsAlwaysVisible = false,
  navButtonsAlwaysInvisible = false,
  cycleNavigation = true,
  fullHeightHover = true,
  NextIcon,
  PrevIcon,
  next = defaultFunction,
  prev = defaultFunction,
}) {
  const classes = useStyle();
  return (
    <Carousel
      onClick={onClick}
      className={classNames(className)}
      autoPlay={autoPlay}
      next={next}
      prev={prev}
      stopAutoPlayOnHover={stopAutoPlayOnHover}
      interval={interval}
      animation={animation}
      reverseEdgeAnimationDirection={reverseEdgeAnimationDirection}
      timeout={timeout}
      swipe={swipe}
      indicators={indicators}
      navButtonsAlwaysVisible={navButtonsAlwaysVisible}
      navButtonsAlwaysInvisible={navButtonsAlwaysInvisible}
      cycleNavigation={cycleNavigation}
      fullHeightHover={fullHeightHover}
      NextIcon={NextIcon}
      PrevIcon={PrevIcon}
      onChange={onChange}
    >
      {children}
    </Carousel>
  );
}
