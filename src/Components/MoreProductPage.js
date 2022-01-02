import {
  makeStyles,
  FormControl,
  Select,
  MenuItem,
  Divider,
} from "@material-ui/core";
import { Grid, Typography, Button, Card, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { GET_CATEGORY_REQUEST } from "../Constants/CategoryConstant";
import { GET_CATEGORY_PRODUCT_REQUEST } from "../Constants/ProductConstant";
import Breadcrumb from "./CommonComponents/Breadcrumb";
import utils from "../utils/commonFunctions";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FilterListIcon from "@mui/icons-material/FilterList";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import FilterDialog from "./CommonComponents/FilterDialog";
import { connect } from "react-redux";
import CatProdCard from "../Components/CommonComponents/CatProdCard";
import suv from "../images/suv.jpeg";
import { CircularProgress } from "@mui/material";
import { GET_PRODUCT_REQUEST } from "../Constants/ProductConstant";

const useStyle = makeStyles((theme) => ({
  categoryProductRoot: {
    margin: "20px",
  },

  filterOptions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "30px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    "&>div": {
      "&>button": {
        marginLeft: "10px",
      },
    },
    "&>button": {
      [theme.breakpoints.down("xs")]: {
        marginTop: "5px",
      },
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

  prograssBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&>span": {
      "&>svg": {
        color: "#D10024",
      },
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

function MoreProductPage({ productData, getProductAction }) {
  const classes = useStyle();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const DialogOpen = () => {
    setOpenDialog(true);
  };

  const closeDialog = (value) => {
    setOpenDialog(false);
  };

  useEffect(() => {
    getProductAction();
  }, []);
  return (
    <div className={classes.categoryProductRoot}>
      {/* <div className={classes.filterOptions}>
        <Button
          id="fade-button"
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={DialogOpen}
          variant="contained"
          endIcon={<FilterListIcon />}
          style={{ backgroundColor: "#D10024" }}
        >
          filter
        </Button>
      </div> */}
      <FilterDialog
        open={openDialog}
        onClose={closeDialog}
        catAndSubCatFilter={true}
      />
      <Divider style={{ height: "3px", backgroundColor: "red" }} />
      {productData?.loading === true ? (
        <div className={classes.prograssBar}>
          <CircularProgress />
        </div>
      ) : (
        <div className={classes.productDiv}>
          {productData?.data?.data?.map((item, key) => (
            <CatProdCard
              imageURL={suv}
              product_id={item._id}
              wishlist_id={
                item?.wishlist.length !== 0 ? item?.wishlist[0]._id : null
              }
              productName={item?.product_name}
              productPrice={item?.price}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  productData: state.ProductData.getProductData,
});

const mapDispatchToProps = (dispatch) => ({
  getProductAction: () =>
    dispatch({
      type: GET_PRODUCT_REQUEST,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoreProductPage);
