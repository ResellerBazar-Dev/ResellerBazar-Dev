import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import { IconButton, makeStyles } from "@material-ui/core";
import classNames from "classnames";
import Typographys from "./Typographys";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmDialog from "./ConfirmDialog";
import g6 from "../../images/g6.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  ADD_WISHLIST_PRODUCT_REQUEST,
  DELETE_WISHLIST_PRODUCT_REQUEST,
} from "../../Constants/ProductConstant";
import { connect } from "react-redux";
import utils from "../../utils/commonFunctions";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  cardRoot: {
    width: "20%",
    position: "relative",
    background: theme.palette.white.main,
    paddingBottom: "15px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down(1036)]: {
      width: "30%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30%",
    },
    [theme.breakpoints.down(510)]: {
      width: "40%",
    },
  },
  cardImg: {
    width: "100%",
    height: "100%",
    cursor: "pointer",
  },
  cardContent: {
    marginTop: "auto",
    textAlign: "center",
    "&>p": {
      cursor: "pointer",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  },
  cardActions: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.primary.main,
    "&>button": {
      color: theme.palette.primary.main,
      "&>span": {
        "&>svg": {
          color: theme.palette.primary.main,
          width: "36px",
          height: "36px",
          cursor: "pointer",
        },
      },
    },
  },
  rupeesIcon: {
    color: theme.palette.primary.main,
    fontSize: "20px",
  },
  productPrice: {
    color: theme.palette.primary.main,
    fontSize: "20px",
  },
  productActionBtns: {
    position: "absolute",
    top: "10px",
    right: "10px",
    "&>div": {
      width: "36px",
      height: "36px",
      padding: "10px",
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      "&>svg": {
        color: theme.palette.primary.main,
        width: "20px",
        height: "20px",
      },
      "&:nth-child(1)": {
        marginBottom: "10px",
      },
      "&:hover": {
        background: theme.palette.primary.main,
        "&>svg": {
          color: "#fff",
        },
      },
    },
  },
  cardDelet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "&>button": {
      color: theme.palette.primary.main,
      "&>span": {
        "&>svg": {
          color: theme.palette.primary.main,
          width: "40px",
          height: "40px",
        },
      },
    },
  },
}));

const defaultFunction = () => {};

function ProductCard({
  AddWishlistProductAction,
  imageURL,
  imageAltText,
  className,
  productName,
  productPrice,
  shareIconOnClick = defaultFunction,
  productEditDeleteBtnDisplay = false,
  wishlistDltBtn = false,
  wishlistAndShareAction = false,
  editBtnClick = defaultFunction,
  open,
  handleConfirmDialogClose,
  product_id,
  wishlist_id,
  DeleteWishlistProductAction,
  getWishlistData,
  getProductData,
}) {
  const classes = useStyle();
  const history = useHistory();

  // const wishlistIconOnClick = () => {
  //   AddWishlistProductAction(utils.toBase64(product_id));
  // };
  const deleteBtnClick = () => {
    DeleteWishlistProductAction(utils.toBase64(wishlist_id));
  };

  return (
    <>
      <Card className={classNames(className, classes.cardRoot)}>
        <CardMedia
          component="img"
          className={classes.cardImg}
          image={imageURL || g6}
          alt={imageAltText}
          onClick={() => history.push(`/details/${utils.toBase64(product_id)}`)}
        />
        <CardContent className={classes.cardContent}>
          <Typographys children={productName} />
          <Typographys
            className={classes.productPrice}
            children={`₹ ${productPrice}`}
          />
        </CardContent>
        <CardActions
          className={classes.cardActions}
          style={{
            display: wishlistAndShareAction ? "flex" : "none",
          }}
        >
          {wishlist_id !== null ? (
            <IconButton>
              <FavoriteIcon
                onClick={() =>
                  DeleteWishlistProductAction(utils.toBase64(wishlist_id))
                }
              />
            </IconButton>
          ) : (
            <IconButton>
              <FavoriteBorderIcon
                onClick={() =>
                  AddWishlistProductAction(utils.toBase64(product_id))
                }
              />
            </IconButton>
          )}

          {/* <IconButton>
            <ShareIcon onClick={shareIconOnClick} />
          </IconButton> */}
        </CardActions>
        <div
          className={classes.cardDelet}
          style={{ display: wishlistDltBtn ? "flex" : "none" }}
        >
          <IconButton onClick={deleteBtnClick}>
            <DeleteIcon />
          </IconButton>
        </div>
        <div
          className={classes.cardActions}
          style={{ display: productEditDeleteBtnDisplay ? "flex" : "none" }}
        >
          <IconButton onClick={editBtnClick} style={{ color: "blue" }}>
            <EditIcon style={{ color: "blue" }} />
          </IconButton>
          <IconButton onClick={deleteBtnClick}>
            <DeleteIcon />
          </IconButton>
        </div>
      </Card>
      <ConfirmDialog
        open={open}
        confirmDialogHeading="Are you confirm want to delete this product?"
        handleConfirmDialogClose={handleConfirmDialogClose}
        product_id={product_id}
      />
    </>
  );
}
const mapStateToProps = (state) => ({
  getProductData: state.ProductData.getProductData,
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
