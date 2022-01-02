import {
  Typography,
  Card,
  Paper,
  Checkbox,
  Button,
  FormControlLabel,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import money from "../images/money.svg";
import deleteIcon from "../images/delete.svg";
import ProductCard from "./CommonComponents/ProductCard";
import { Grid } from "@mui/material";
import { useHistory, useParams } from "react-router";
import { connect } from "react-redux";
import {
  DELETE_PRODUCT_REQUEST,
  GET_USER_PRODUCT_REQUEST,
} from "../Constants/ProductConstant";
import utils from "../utils/commonFunctions";

const useStyle = makeStyles((theme) => ({
  mainDiv: {
    padding: "50px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
  },
  title: {
    "&>p": {
      fontWeight: "bold",
      fontSize: "40px",
      color: theme.palette.secondary.main,
      [theme.breakpoints.down(410)]: {
        fontSize: "32px",
      },
      "&>span": {
        color: theme.palette.primary.main,
        textDecoration: "underline",
      },
    },
  },
  dealSection: {
    display: "flex",
    marginTop: "30px",
    [theme.breakpoints.down(1024)]: {
      flexDirection: "column-reverse",
    },
    "&>div": {
      "&:nth-child(1)": {
        "&>div": {
          margin: "0px 20px 15px 0px",
          [theme.breakpoints.down(510)]: {
            margin: "0px 0px 15px 0px",
          },
        },
      },
    },
  },
  sellActionDiv: {
    [theme.breakpoints.down(1024)]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "20px",
    },
    "&>div": {
      [theme.breakpoints.down(1145)]: {
        width: "300px",
        height: "300px",
      },
      height: "363px",
      width: "363px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "column",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.125)",
      "&>p": {
        fontWeight: 600,
      },
      "&>button": {
        width: "160px",
        height: "40px",
        borderRadius: "10px",
        backgroundImage: theme.palette.back.main,
        "&>span": {
          color: "#ffffff",
        },
      },
    },
  },
  DealItemCount: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: theme.palette.back.main,
    "&>p": {
      color: "#ffffff",
    },
  },
  dealProductsRoot: {
    width: "75%",
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-around",
    },
  },
}));
const DealPage = ({
  getUserProductAction,
  getUserProductData,
  userData,
  deleteProductAction,
  deleteProductData,
}) => {
  const classes = useStyle();
  const history = useHistory();
  const { user_id } = useParams();

  const [open, setOpen] = useState(false);

  const letestProducts = [
    {
      image:
        "https://images.pexels.com/photos/2726110/pexels-photo-2726110.jpeg?auto=compress&cs=tinysrgb&dpr=1",
      name: "Car",
      // price: "123.23",
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

  function handleConfirmDialogClose(type, product_id) {
    type === false && setOpen(false);
    if (type === true && product_id !== null) {
      setOpen(false);
      deleteProductAction(utils.toBase64(product_id));
    }
  }

  useEffect(() => {
    getUserProductAction(user_id);
  }, [getUserProductAction]);

  useEffect(() => {
    if (deleteProductData?.data?.status === "1") {
      getUserProductAction(user_id);
    }
  }, [deleteProductData]);

  return (
    <div>
      <div container className={classes.mainDiv}>
        <div className={classes.title}>
          <Typography>
            My Reseller<span>Deal</span>
          </Typography>
        </div>
        <div className={classes.dealSection}>
          <div className={classes.dealProductsRoot}>
            {getUserProductData?.data?.data?.map((item, key) => {
              return (
                <ProductCard
                  imageURL={item?.product_images[0]}
                  productName={item?.product_name}
                  productPrice={item?.price}
                  productEditDeleteBtnDisplay={
                    userData?.userInfo?.user?._id === item?.user_id
                      ? true
                      : false
                  }
                  wishlist_id={
                    item?.wishlist.length !== 0 ? item?.wishlist[0]._id : null
                  }
                  deleteBtnClick={() => setOpen(true)}
                  open={open}
                  handleConfirmDialogClose={handleConfirmDialogClose}
                  product_id={item?._id}
                  editBtnClick={() =>
                    history.push(`/add-product/${utils.toBase64(item?._id)}`)
                  }
                />
              );
            })}
          </div>

          <Grid className={classes.sellActionDiv}>
            <Card>
              <Typography>{`Dear, ${
                userData?.loading === true
                  ? "Username"
                  : userData?.userInfo?.user?.name
              } `}</Typography>
              <Paper className={classes.DealItemCount}>
                {getUserProductData?.data?.data?.length === 0 ? (
                  <Typography>0</Typography>
                ) : (
                  <Typography style={{ fontWeight: 900, fontSize: "1.8rem" }}>
                    {getUserProductData?.data?.data?.length}
                  </Typography>
                )}
              </Paper>
              <Button
                variant="contained"
                onClick={() => history.push("/add-product/new")}
              >
                sell
              </Button>
              {/* <FormControlLabel
                value="end"
                control={<Checkbox color="secondary" />}
                label="Term & Conditions"
                labelPlacement="end"
              /> */}
            </Card>
          </Grid>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  getUserProductData: state.ProductData.getUserProductData,
  userData: state.AuthData.userData,
  deleteProductData: state.ProductData.deleteProductData,
});

const mapDispatchToProps = (dispatch) => ({
  getUserProductAction: (user_id) =>
    dispatch({
      type: GET_USER_PRODUCT_REQUEST,
      user_id,
    }),
  deleteProductAction: (product_id) =>
    dispatch({
      type: DELETE_PRODUCT_REQUEST,
      product_id,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(DealPage);
