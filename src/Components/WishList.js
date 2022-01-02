import React, { useEffect } from "react";
import { Typography, makeStyles, Card, Button } from "@material-ui/core";
import DeleteIcon from "../images/delete.png";
import ProductCard from "./CommonComponents/ProductCard";
import { Grid } from "@mui/material";
import { GET_WISHLIST_PRODUCT_REQUEST } from "../Constants/ProductConstant";
import { connect } from "react-redux";
import { DELETE_WISHLIST_PRODUCT_REQUEST } from "../Constants/ProductConstant";
import { useParams } from "react-router";
import { CircularProgress } from "@mui/material";
import emptyWishlist from "../images/expenses-calculation-wishlist-planning-shopping-list-purchases-summary-internet-supermarket-basket-shopper-wishlist-creative-design-element_335657-1631.jpg";

const useStyle = makeStyles((theme) => ({
  MainDiv: {
    padding: "50px",
    [theme.breakpoints.down(600)]: {
      padding: "20px",
    },
  },
  WishListContentDiv: {
    "&>p": {
      fontWeight: "bold",
      fontSize: "40px",
      color: theme.palette.secondary.main,
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.4rem",
      },
      "&>span": {
        color: theme.palette.primary.main,
        textDecoration: "underline",
      },
    },
    "&>div": {
      marginTop: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&>div": {
        margin: "0px 20px 15px 0px",
      },
    },
  },
  DealCard: {
    width: "20%",
    [theme.breakpoints.down(800)]: {
      width: "30%",
    },
    [theme.breakpoints.down(510)]: {
      width: "245px",
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
  emptyImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  },
}));

const WishList = ({
  GetWishlistProductAction,
  getWishlistData,
  deleteWishlistProduct,
}) => {
  const classes = useStyle();

  useEffect(() => {
    GetWishlistProductAction();
  }, []);
  const letestProducts = [
    {
      image:
        "https://images.pexels.com/photos/2726110/pexels-photo-2726110.jpeg?auto=compress&cs=tinysrgb&dpr=1",
      name: "Car",
      price: "123.23",
    },
    {
      image:
        "https://images.pexels.com/photos/2726110/pexels-photo-2726110.jpeg?auto=compress&cs=tinysrgb&dpr=1",
      name: "Car",
      price: "123.23",
    },
    {
      image:
        "https://images.pexels.com/photos/2726110/pexels-photo-2726110.jpeg?auto=compress&cs=tinysrgb&dpr=1",
      name: "Car",
      price: "123.23",
    },
    {
      image:
        "https://images.pexels.com/photos/2726110/pexels-photo-2726110.jpeg?auto=compress&cs=tinysrgb&dpr=1",
      name: "Car",
      price: "123.23",
    },
    {
      image:
        "https://images.pexels.com/photos/2726110/pexels-photo-2726110.jpeg?auto=compress&cs=tinysrgb&dpr=1",
      name: "Car",
      price: "123.23",
    },
    {
      image:
        "https://images.pexels.com/photos/2726110/pexels-photo-2726110.jpeg?auto=compress&cs=tinysrgb&dpr=1",
      name: "Car",
      price: "123.23",
    },
    {
      image:
        "https://images.pexels.com/photos/2726110/pexels-photo-2726110.jpeg?auto=compress&cs=tinysrgb&dpr=1",
      name: "Car",
      price: "123.23",
    },
    {
      image:
        "https://images.pexels.com/photos/2726110/pexels-photo-2726110.jpeg?auto=compress&cs=tinysrgb&dpr=1",
      name: "Car",
      price: "123.23",
    },
  ];
  return (
    <div>
      <div container className={classes.MainDiv}>
        <div className={classes.WishListContentDiv}>
          <Typography>
            My Reseller<span>WishList</span>
          </Typography>
          {getWishlistData?.data?.data?.length === 0 ? (
            <div>
              <img className={classes.emptyImage} src={emptyWishlist} />
            </div>
          ) : (
            <>
              {getWishlistData?.loading === true ||
              deleteWishlistProduct?.loading === true ? (
                <div className={classes.prograssBar}>
                  <CircularProgress />
                </div>
              ) : (
                <Grid container>
                  {getWishlistData?.data?.data?.map((item, key) => {
                    return (
                      <ProductCard
                        key={key}
                        wishlist_id={item._id}
                        imageURL={item?.products[0]?.product_images}
                        productName={item?.products[0]?.product_name}
                        productPrice={item?.products[0]?.price}
                        className={classes.DealCard}
                        wishlistDltBtn={
                          getWishlistData?.data?.data?._id === item?.wishlist_id
                            ? true
                            : false
                        }
                      />
                    );
                  })}
                </Grid>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  getWishlistData: state.ProductData.getWishlistData,
  deleteWishlistProduct: state.ProductData.deleteWishlistProduct,
});

const mapDispatchToProps = (dispatch) => ({
  GetWishlistProductAction: () =>
    dispatch({
      type: GET_WISHLIST_PRODUCT_REQUEST,
    }),
});
export default connect(mapStateToProps, mapDispatchToProps)(WishList);
