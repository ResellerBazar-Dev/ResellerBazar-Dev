import React, { useState, useEffect } from "react";
import {
  ADD_WISHLIST_PRODUCT_REQUEST,
  DELETE_WISHLIST_PRODUCT_REQUEST,
} from "../../Constants/ProductConstant";
import { connect } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import suv from "../../images/suv.jpeg";
import ShareIcon from "@mui/icons-material/Share";
import { makeStyles } from "@material-ui/core";
import utils from "../../utils/commonFunctions";
import { useHistory } from "react-router-dom";
import { Typography, Button, Card, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const useStyle = makeStyles((theme) => ({
  categoryProductRoot: {
    margin: "30px",
  },

  productDiv: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    marginLeft: "15px",

    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-around",
      marginLeft: "5px",
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
      [theme.breakpoints.down("sm")]: {
        width: "200px",
      },
      [theme.breakpoints.down("xs")]: {
        width: "150px",
      },
      [theme.breakpoints.down(370)]: {
        width: "125px",
      },
      [theme.breakpoints.up("xl")]: {
        marginLeft: "30px",
      },
      "&>div": {
        "&>img": {
          width: "100%",
          cursor: "pointer",
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
        [theme.breakpoints.down("sm")]: {
          fontSize: "0.9rem",
        },
        fontWeight: 700,
        marginTop: "10px",
        fontSize: "1.3rem",
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

    "&>svg": {
      fontSize: "2rem",
      color: "#D10024",
    },
    marginTop: "10px",
  },
}));

const CatProdCard = ({
  AddWishlistProductAction,
  DeleteWishlistProductAction,
  product_id,
  imageAltText,
  imgURL,
  subCatName,
  productPrice,
  productName,
  wishlist_id,
}) => {
  const classes = useStyle();
  const history = useHistory();

  const wishlistIconOnClick = () => {
    AddWishlistProductAction(utils.toBase64(product_id));
  };
  return (
    <div className={classes.productDiv}>
      <Card>
        <div>
          {/* <img image={imgURL} alt={imageAltText} /> */}
          <img
            src={suv}
            alt={imageAltText}
            onClick={() =>
              history.push(`/details/${utils.toBase64(product_id)}`)
            }
          />
        </div>
        <div className={classes.productDetails}>
          <div>
            <Typography children={subCatName} />
          </div>
          <div>
            <Typography children={productName} />
          </div>
          <div>
            <Typography children={`₹ ${productPrice}`} />
          </div>
          {/* <IconButton style={{ color: "#E53935" }}>
            <ShareIcon />
          </IconButton> */}
        </div>

        <div className={classes.btnActionDiv}>
          {wishlist_id !== null ? (
            <FavoriteIcon
              onClick={() =>
                DeleteWishlistProductAction(utils.toBase64(wishlist_id))
              }
            />
          ) : (
            <FavoriteBorderIcon onClick={wishlistIconOnClick} />
          )}
        </div>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  getWishlistData: state.ProductData.getWishlistData,
});

const mapDispatchToProps = (dispatch) => ({
  AddWishlistProductAction: (product_id) =>
    dispatch({
      type: ADD_WISHLIST_PRODUCT_REQUEST,
      product_id,
    }),
  DeleteWishlistProductAction: (wishlist_id) =>
    dispatch({
      type: DELETE_WISHLIST_PRODUCT_REQUEST,
      wishlist_id,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CatProdCard);
