import React, { useEffect } from "react";
import CarouselComponent from "../CommonComponents/CarouselComponent";
import { makeStyles, Typography, Button, Divider } from "@material-ui/core";
import suv from "../../images/suv.jpeg";
import raj from "../../images/raj.jpeg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { connect } from "react-redux";
import {
  ADD_WISHLIST_PRODUCT_REQUEST,
  DELETE_WISHLIST_PRODUCT_REQUEST,
} from "../../Constants/ProductConstant";
import utils from "../../utils/commonFunctions";
import { useParams } from "react-router";
import { GET_PRODUCT_BY_ID_REQUEST } from "../../Constants/ProductConstant";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import { CircularProgress } from "@mui/material";

const useStyle = makeStyles((theme) => ({
  mainDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "20px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
  },
  userDetailsDiv: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "40px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      // alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    "&>p": {
      color: "black",
      fontWeight: 500,

      "&>span": {
        color: "#D10024",
        fontWeight: 700,
      },
    },
  },
  carousel: {
    width: "600px",
    height: "300px",
    boxShadow: "0px 0px 10px 2px #D10024",
    borderRadius: "12px",

    [theme.breakpoints.down("sm")]: {
      width: "500px",
      height: "280px",
      boxShadow: "none",
    },
    [theme.breakpoints.down("xs")]: {
      width: "300px",
      height: "210px",
      boxShadow: "none",
    },

    "&>div": {
      // width: "170%",
    },
  },
  carouselImg: {
    width: "600px",
    height: "300px",
    [theme.breakpoints.down("sm")]: {
      width: "550px",
      height: "280px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "300px",
      height: "210px",
    },
  },
  proDetailsDiv: {
    textAlign: "center",
    "&>p": {
      fontSize: "1.2rem",
      marginTop: "20px",
      color: "black",
      fontWeight: 500,

      "&>span": {
        color: "#D10024",
        fontWeight: 700,
      },
    },
    "&>button": {
      backgroundImage: theme.palette.back.main,
      marginTop: "20px",
      "&>span": {
        color: "white",
      },
    },
  },
  detailsChiledDiv: {
    textAlign: "center",
    "&>p": {
      fontSize: "1.2rem",
      marginTop: "10px",
      fontWeight: 500,
      color: "black",

      [theme.breakpoints.down("sm")]: {
        fontSize: "0.9rem",
      },
      "&>span": {
        color: "#D10024",
        fontWeight: 700,
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
const ProductDetails = ({
  AddWishlistProductAction,
  GetProductByIdAction,
  getProductByIdData,
  wishlist_id,
  DeleteWishlistProductAction,
}) => {
  const classes = useStyle();
  const { product_id } = useParams();

  const handlAddToWishlist = () => {
    AddWishlistProductAction(product_id);
  };

  useEffect(() => {
    GetProductByIdAction(product_id);
  }, []);
  return (
    <>
      <div className={classes.mainDiv}>
        <div>
          {getProductByIdData?.data?.data?.map((item, key) => (
            <div>
              <CarouselComponent className={classes.carousel} autoPlay={false}>
                <img
                  src={item?.product_images[0]}
                  className={classes.carouselImg}
                ></img>
              </CarouselComponent>
            </div>
          ))}
        </div>

        {getProductByIdData?.data?.data?.map((item, key) => (
          <div className={classes.proDetailsDiv}>
            <Typography
              style={{
                fontSize: "1.8rem",
                fontWeight: 800,
                textTransform: "uppercase",
              }}
            >
              {item?.product_name}
            </Typography>
            <Typography>
              <span>Price :</span>
              {` ₹ ${item.price}`}
            </Typography>
            <Typography>
              <span>Brand :</span>
              {item.brand_name}
            </Typography>

            {wishlist_id !== null ? (
              <Button
                onClick={() =>
                  DeleteWishlistProductAction(utils.toBase64(wishlist_id))
                }
                variant="contained"
                endIcon={<FavoriteIcon />}
                wishlist_id={
                  item?.wishlist.length !== 0 ? item?.wishlist[0]._id : null
                }
              >
                Remove from wishlist
              </Button>
            ) : (
              <Button
                onClick={handlAddToWishlist}
                variant="contained"
                endIcon={<FavoriteBorderIcon />}
                wishlist_id={
                  item?.wishlist.length !== 0 ? item?.wishlist[0]._id : null
                }
              >
                add to wishlist
              </Button>
            )}
            {getProductByIdData?.data?.data?.map((item, key) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  marginTop: "20px",
                  border: "2px solid #D10024",
                  padding: "10px",
                  cursor: "pointer",
                }}
              >
                <Avatar alt="" src={item?.user[0].profile_image} />
                <Typography>
                  <span style={{ fontWeight: 700 }}>{item?.user[0].name}</span>
                </Typography>
              </div>
            ))}
          </div>
        ))}
      </div>
      {getProductByIdData?.loading === true ? (
        <div className={classes.prograssBar}>
          <CircularProgress />
        </div>
      ) : (
        <Divider
          style={{
            height: "2px",
            backgroundColor: "#D10024",
            marginTop: "10px",
          }}
        />
      )}

      {getProductByIdData?.data?.data?.map((item, key) => (
        <div className={classes.detailsChiledDiv}>
          <Typography>
            <span>Description : </span>
            {item?.description}
          </Typography>
          <Typography>
            <span>Location :</span> {item?.address}
          </Typography>
        </div>
      ))}

      {getProductByIdData?.loading === true ? null : (
        <Divider
          style={{
            height: "2px",
            backgroundColor: "#D10024",
            marginTop: "10px",
          }}
        />
      )}
      {getProductByIdData?.data?.data?.map((item, key) => (
        <div className={classes.userDetailsDiv}>
          <Typography>
            <span>Owner Name : </span>
            {item?.user[0].name}
          </Typography>
          <Typography>
            <span>Owner Email : </span>
            {item?.user[0].email}
          </Typography>
          <Typography>
            <span>Owner Phone : </span>
            {item?.user[0].other_details?.contact_number}
          </Typography>
          <Typography>
            <span>Owner Eddress : </span>
            {`state: ${item?.user[0].other_details?.state},dist: ${item?.user[0].other_details?.disc},taluka: ${item?.user[0].other_details?.taluka},village: ${item?.user[0].other_details?.village},address: ${item?.user[0].other_details?.address},pincode: ${item?.user[0].other_details?.pin_code}`}
          </Typography>
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  getProductByIdData: state.ProductData.getProductByIdData,
  getWishlistData: state.ProductData.getWishlistData,
});

const mapDispatchToProps = (dispatch) => ({
  AddWishlistProductAction: (product_id) =>
    dispatch({
      type: ADD_WISHLIST_PRODUCT_REQUEST,
      product_id,
    }),

  GetProductByIdAction: (product_id) =>
    dispatch({
      type: GET_PRODUCT_BY_ID_REQUEST,
      product_id,
    }),
  DeleteWishlistProductAction: (wishlist_id) =>
    dispatch({
      type: DELETE_WISHLIST_PRODUCT_REQUEST,
      wishlist_id,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
