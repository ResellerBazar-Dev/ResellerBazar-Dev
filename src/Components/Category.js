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

const useStyle = makeStyles((theme) => ({
  categoryProductRoot: {
    margin: "20px",
  },
  breadcrumbDiv: {
    width: "100%",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  breadcrumbLink: {
    color: "#000",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
      textDecoration: "underline",
    },
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
  menu: {
    "&>div": {
      width: "137px",
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
  selectRoot: {
    "&>div": {
      "&>div": {
        "&>div": {
          color: "white",
          fontWeight: 500,
        },
      },
    },
  },
  filterOptionsChiled: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      "&>button": {
        marginTop: "5px",
      },
    },
    "&>button": {
      [theme.breakpoints.down("sm")]: {
        width: "120px",
      },
      [theme.breakpoints.down("md")]: {
        width: "200px",
      },
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

function Category({
  getCategoryProductAction,
  getCategoryProductData,
  GetCategoryAction,
  categoryData,
  product_id,
  AddWishlistProductAction,
}) {
  const classes = useStyle();
  const history = useHistory();
  const { category_id } = useParams();

  const [category, setCategory] = useState([]);
  const [sortBy, setSortBy] = useState("new");
  const [subCat, setSubCat] = useState("sub-categories");
  const [products, setProducts] = useState([]);
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
    if (categoryData?.data?.status === "1") {
      const tempCategory = categoryData?.data?.data.filter((item) => {
        const _id = utils.toBase64(item._id);
        return _id === category_id;
      });
      setCategory(tempCategory);
    }
  }, [categoryData]);

  useEffect(() => {
    GetCategoryAction();
    getCategoryProductAction(category_id, sortBy);
  }, [category_id]);

  useEffect(() => {
    if (getCategoryProductData?.data?.status === "1") {
      setProducts(getCategoryProductData?.data?.data);
    }
  }, [getCategoryProductData]);

  return (
    <div className={classes.categoryProductRoot}>
      <div className={classes.breadcrumbDiv}>
        <Breadcrumb
          separator=">"
          children={[
            <Typography
              onClick={() => history.push("/home")}
              className={classes.breadcrumbLink}
            >
              home
            </Typography>,
            <Typography className={classes.breadcrumbLink}>
              {category[0]?.category_name}
            </Typography>,
          ]}
        />
      </div>
      <div className={classes.filterOptions}>
        <div className={classes.filterOptionsChiled} style={{}}>
          <Button
            id="fade-button"
            aria-controls="fade-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            variant="contained"
            style={{ backgroundColor: "#388E3C" }}
            className={classes.selectRoot}
          >
            <FormControl variant="standard">
              <Select
                value={subCat}
                onChange={(e) => {
                  setSubCat(e.target.value);
                  getCategoryProductAction(category_id, e.target.value);
                }}
                disableUnderline
              >
                <MenuItem value="sub-categories">sub-categories</MenuItem>
                <MenuItem value="truck">truck</MenuItem>
                <MenuItem value="car">car</MenuItem>
                <MenuItem value="tempo">tempo</MenuItem>
                <MenuItem value="bus">bus</MenuItem>
              </Select>
            </FormControl>
          </Button>
          <Button
            style={{ backgroundColor: "#0000FF", color: "white" }}
            variant="contained"
            className={classes.selectRoot}
            id="fade-button"
            aria-controls="fade-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <FormControl variant="standard">
              <Select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  getCategoryProductAction(category_id, e.target.value);
                }}
                disableUnderline
              >
                <MenuItem value="new">Newest</MenuItem>
                <MenuItem value="old">Oldest</MenuItem>
                <MenuItem value="lowToHigh">Price: Low to High</MenuItem>
                <MenuItem value="highToLow">Price: High to Low</MenuItem>
              </Select>
            </FormControl>
          </Button>
        </div>
        {/* </div> */}

        {/* ------------------------------------///////////////////////////////----------------------------------------------- */}
        {/* <Button
          id="fade-button"
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={DialogOpen}
          variant="contained"
          endIcon={<FilterListIcon />}
          style={{ backgroundColor: "#E53935" }}
        >
          filter
        </Button> */}
        {/* ------------------------------------///////////////////////////////----------------------------------------------- */}
      </div>

      <FilterDialog open={openDialog} onClose={closeDialog} />
      <Divider style={{ height: "3px", backgroundColor: "red" }} />
      {getCategoryProductData?.loading === true ? (
        <div className={classes.prograssBar}>
          <CircularProgress />
        </div>
      ) : (
        <div className={classes.productDiv}>
          {products?.map((item, key) => (
            <CatProdCard
              imageURL={suv}
              product_id={item._id}
              wishlist_id={
                item?.wishlist.length !== 0 ? item?.wishlist[0]._id : null
              }
              productName={item.product_name}
              productPrice={item.price}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  getCategoryProductData: state.ProductData.getCategoryProductData,
  categoryData: state.CategoryData.getCategoryData,
});

const mapDispatchToProps = (dispatch) => ({
  getCategoryProductAction: (category_id, sortBy) =>
    dispatch({
      type: GET_CATEGORY_PRODUCT_REQUEST,
      category_id,
      sortBy,
    }),
  GetCategoryAction: () =>
    dispatch({
      type: GET_CATEGORY_REQUEST,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
