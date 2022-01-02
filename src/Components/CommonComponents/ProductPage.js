import React, { useState } from "react";
import { makeStyles, Card, Typography } from "@material-ui/core";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FilterListIcon from "@mui/icons-material/FilterList";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import suv from "../../images/suv.jpeg";
import FilterDialog from "../CommonComponents/FilterDialog";
const useStyle = makeStyles((theme) => ({
  mainDiv: {
    margin: "30px",
  },
  filterOptions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  menu: {
    "&>div": {
      width: "170px",
    },
  },
  productDiv: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("lg")]: {
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-around",
    },
    "&>div": {
      width: "320px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "column",
      marginTop: "50px",
      border: "2px solid #D10024",
      [theme.breakpoints.down("xl")]: {
        marginLeft: "40px",
      },
      "&>div": {
        "&>img": {
          width: "100%",
        },
      },
    },
  },
  productDetails: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    "&>div": {
      "&>p": {
        fontWeight: 500,
        marginTop: "10px",
      },
    },
    "&>svg": {
      fontSize: "2.2rem",
      marginTop: "10px",
    },
  },
  btnActionDiv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "10px",
    marginBottom: "10px",
    "&>button": {
      marginTop: "10px",
      backgroundImage: theme.palette.back.main,
    },
  },
}));

function subCat(name) {
  return { name };
}
const subCatData = [
  subCat("car"),
  subCat("bus"),
  subCat("truck"),
  subCat("SUV"),
  subCat("SEDAN"),
];
function data(img, subCatName, ProductName, Price) {
  return { img, subCatName, ProductName, Price };
}
const productData = [
  data(
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.caranddriver.com%2Fshopping-advice%2Fg26100588%2Fcar-types%2F&psig=AOvVaw1fOp11GIfFjtSDcg2VCWFa&ust=1634551644522000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDGlMyZ0fMCFQAAAAAdAAAAABAD",
    "car",
    "honda city",
    "4.5 laks"
  ),
  data(
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2F34-seater-tata-transport-bus-19401253312.html&psig=AOvVaw0h0v2pYHFtpT92Naolb_zG&ust=1634551738923000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiuyvyZ0fMCFQAAAAAdAAAAABAD",
    "bus",
    "tata bus",
    "6.3 laks"
  ),
  data(
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mahindratruckandbus.com%2Fheavy-commercial-vehicles%2Fmulti-axle-trucks.aspx&psig=AOvVaw2PSKJElfLD7Lc3Cv2HFMoq&ust=1634551811996000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjzsp-a0fMCFQAAAAAdAAAAABAD",
    "truck",
    "mahindra temp",
    "10 laks"
  ),
  data(
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimgd.aeplcdn.com%2F600x337%2Fn%2Fcw%2Fec%2F40027%2Fsafari-exterior-right-front-three-quarter-2.jpeg%3Fq%3D85&imgrefurl=https%3A%2F%2Fwww.carwale.com%2Fnew%2Fbest-suvs-in-india%2F&tbnid=aMmUpWEVESONWM&vet=12ahUKEwiO-v-1mtHzAhUJcSsKHehNCDcQMygUegUIARDyAQ..i&docid=KWZ3RcJk2vNHtM&w=600&h=337&q=suv&ved=2ahUKEwiO-v-1mtHzAhUJcSsKHehNCDcQMygUegUIARDyAQ",
    "SUV",
    "tata herier",
    "6 laks"
  ),
  data(
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jdpower.com%2Fcars%2Fshopping-guides%2Fwhat-is-a-sedan&psig=AOvVaw0jLX8PqiP40GRIN9NJsp8K&ust=1634551957072000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICsi-Ka0fMCFQAAAAAdAAAAABAD",
    "SEDAN",
    "audi Q5",
    "12 laks"
  ),
  data(
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jdpower.com%2Fcars%2Fshopping-guides%2Fwhat-is-a-sedan&psig=AOvVaw0jLX8PqiP40GRIN9NJsp8K&ust=1634551957072000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICsi-Ka0fMCFQAAAAAdAAAAABAD",
    "SEDAN",
    "audi Q5",
    "12 laks"
  ),
  data(
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jdpower.com%2Fcars%2Fshopping-guides%2Fwhat-is-a-sedan&psig=AOvVaw0jLX8PqiP40GRIN9NJsp8K&ust=1634551957072000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICsi-Ka0fMCFQAAAAAdAAAAABAD",
    "SEDAN",
    "audi Q5",
    "12 laks"
  ),
  data(
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jdpower.com%2Fcars%2Fshopping-guides%2Fwhat-is-a-sedan&psig=AOvVaw0jLX8PqiP40GRIN9NJsp8K&ust=1634551957072000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICsi-Ka0fMCFQAAAAAdAAAAABAD",
    "SEDAN",
    "audi Q5",
    "12 laks"
  ),
  data(
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jdpower.com%2Fcars%2Fshopping-guides%2Fwhat-is-a-sedan&psig=AOvVaw0jLX8PqiP40GRIN9NJsp8K&ust=1634551957072000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICsi-Ka0fMCFQAAAAAdAAAAABAD",
    "SEDAN",
    "audi Q5",
    "12 laks"
  ),
  data(
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jdpower.com%2Fcars%2Fshopping-guides%2Fwhat-is-a-sedan&psig=AOvVaw0jLX8PqiP40GRIN9NJsp8K&ust=1634551957072000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICsi-Ka0fMCFQAAAAAdAAAAABAD",
    "SEDAN",
    "audi Q5",
    "12 laks"
  ),
  data(
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jdpower.com%2Fcars%2Fshopping-guides%2Fwhat-is-a-sedan&psig=AOvVaw0jLX8PqiP40GRIN9NJsp8K&ust=1634551957072000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICsi-Ka0fMCFQAAAAAdAAAAABAD",
    "SEDAN",
    "audi Q5",
    "12 laks"
  ),
];

const ProductPage = () => {
  const classes = useStyle();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openDialog, setOpenDialog] = useState(false);

  const DialogOpen = () => {
    setOpenDialog(true);
  };

  const closeDialog = (value) => {
    setOpenDialog(false);
  };
  return (
    <div className={classes.mainDiv}>
      <div className={classes.filterOptions}>
        <div>
          <Button
            id="fade-button"
            aria-controls="fade-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            variant="contained"
            endIcon={<KeyboardArrowDownIcon />}
            style={{ backgroundColor: "#388E3C" }}
          >
            sub category
          </Button>
          <Button
            id="fade-button"
            aria-controls="fade-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            variant="contained"
            endIcon={<KeyboardArrowDownIcon />}
            style={{ backgroundColor: "#388E3C" }}
          >
            sub category
          </Button>
        </div>

        <Menu
          id="fade-menu"
          className={classes.menu}
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {subCatData.map((data, index) => (
            <MenuItem onClick={handleClose}>{data.name}</MenuItem>
          ))}
        </Menu>
        {/* ------------------------------------///////////////////////////////----------------------------------------------- */}
        <Button
          id="fade-button"
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={DialogOpen}
          variant="contained"
          endIcon={<FilterListIcon />}
          style={{ backgroundColor: "#E53935" }}
        >
          filter
        </Button>
        {/* ------------------------------------///////////////////////////////----------------------------------------------- */}
      </div>
      <FilterDialog open={openDialog} onClose={closeDialog} />
      <div className={classes.productDiv}>
        {productData.map((product, index) => (
          <Card key="index">
            <div>
              <img src={suv} alt="" />
            </div>
            <div className={classes.productDetails}>
              <div>
                <Typography>{product.subCatName}</Typography>
              </div>
              <div>
                <Typography>{product.ProductName}</Typography>
              </div>
              <div>
                <Typography>₹ {product.Price}</Typography>
              </div>
              <FavoriteBorderIcon />
            </div>

            <div className={classes.btnActionDiv}>
              <Button variant="contained" endIcon={<ShoppingCartIcon />}>
                add to cart
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
