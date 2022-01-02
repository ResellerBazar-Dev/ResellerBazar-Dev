import {
  makeStyles,
  Typography,
  Button,
  CircularProgress,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { USER_LOGOUT_REQUEST } from "../../Constants/AuthConstant";
import Typographys from "../CommonComponents/Typographys";
import { useHistory } from "react-router-dom";
import ProductCard from "../CommonComponents/ProductCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Btn from "../CommonComponents/Btn";
import { GET_BANNER_REQUEST } from "../../Constants/BannerConstant";
import Skeleton from "@mui/material/Skeleton";
import SwipableCarousel from "../CommonComponents/SwipableCarousel";
import staticData from "../../utils/staticData";
import { GET_CATEGORY_REQUEST } from "../../Constants/CategoryConstant";
import { GET_PRODUCT_REQUEST } from "../../Constants/ProductConstant";
import utils from "../../utils/commonFunctions";
import MoreCategory from "../CommonComponents/MoreCategory";
import suv from "../../images/suv.jpeg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { GET_All_BRAND_REQUEST } from "../../Constants/BrandConstant";

const useStyle = makeStyles((theme) => ({
  homeRootDiv: {
    padding: "10px 0px 0px 0px",
  },
  categoriesDiv: {
    width: "100%",
    display: "flex",
    padding: "10px 0px",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down(1200)]: {
      marginBottom: "10px",
      overflowX: "scroll",
      justifyContent: "flex-start",
    },
  },
  categoriesName: {
    cursor: "pointer",
  },
  carouselDiv: {
    width: "100%",
    height: "304px",
  },
  letestProducts: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "10px 0",
    "&>h3": {
      textAlign: "center",
      margin: "10px 0",
    },
    "&>div": {
      margin: "10px 0",
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      "&>div": {
        margin: "10px",
        [theme.breakpoints.down(1025)]: {
          margin: "10px 0",
        },
      },
    },
  },

  brandCard: {
    width: "12%",
    height: "12%",
    padding: "10px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "10px 5px !important",
      width: "25%",
      height: "25%",
    },
    [theme.breakpoints.down(510)]: {
      width: "40%",
      height: "40%",
    },
  },
  sectionHeading: {
    [theme.breakpoints.down(1024)]: {
      fontSize: "30px",
    },
  },
  categoriesName: {
    minWidth: "100px",
    padding: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    boxShadow: "none !important",
    cursor: "pointer",
    "&>button": {
      backgroundImage: theme.palette.back.main,
      "&>span": {
        color: "white",
      },
    },
    "&:hover": {
      "&>div>p": {
        color: theme.palette.primary.main,
      },
    },
  },
  categoriesIcon: {
    width: "45px !important",
    height: "45px !important",
    borderRadius: "50%",
    padding: "5px",
    boxShadow: "0px 0px 6px rgba(0,0,0,0.25)",
  },
  categoriesCardContent: {
    padding: "0px !important",
    width: "100%",
    "&>p": {
      width: "100px",
      textAlign: "center",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      fontWeight: "500",
    },
  },
  latestProductDiv: {
    width: "100%",
    minHeight: "100px",
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

const Home = ({
  BannerData,
  GetBannerAction,
  GetCategoryAction,
  categoryData,
  getProductAction,
  productData,
  newProductData,
  GetAllBrandAction,
  getAllBrandData,
  getAllSubCategoryData,
}) => {
  const classes = useStyle();
  const history = useHistory();

  const [platinumBanner, setPlatinumBanner] = useState([]);
  const [goldBanner, setGoldBanner] = useState([]);
  const [silverBanner, setSilverBanner] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  const DialogOpen = () => {
    setOpenDialog(true);
  };

  const closeDialog = () => {
    setOpenDialog(false);
  };

  const brandList = [
    {
      image:
        "https://images.financialexpress.com/2020/03/bajaj-2.png?w=1200&h=800&imflag=true",
      alt: "",
    },
    {
      image:
        "https://images.financialexpress.com/2020/03/bajaj-2.png?w=1200&h=800&imflag=true",
      alt: "",
    },
    {
      image:
        "https://images.financialexpress.com/2020/03/bajaj-2.png?w=1200&h=800&imflag=true",
      alt: "",
    },
    {
      image:
        "https://images.financialexpress.com/2020/03/bajaj-2.png?w=1200&h=800&imflag=true",
      alt: "",
    },
    {
      image:
        "https://images.financialexpress.com/2020/03/bajaj-2.png?w=1200&h=800&imflag=true",
      alt: "",
    },
    {
      image:
        "https://images.financialexpress.com/2020/03/bajaj-2.png?w=1200&h=800&imflag=true",
      alt: "",
    },
    {
      image:
        "https://images.financialexpress.com/2020/03/bajaj-2.png?w=1200&h=800&imflag=true",
      alt: "",
    },
  ];

  useEffect(() => {
    if (categoryData?.data?.status === "1") {
      let tempCategoryArray = [];
      for (let i = 0; i < 9; i++) {
        tempCategoryArray.push(categoryData?.data?.data[i]);
      }
      setCategoryList(tempCategoryArray);
    }
  }, [categoryData]);

  useEffect(() => {
    GetBannerAction("/home");
  }, [GetBannerAction]);

  useEffect(() => {
    if (
      BannerData?.bannerInfo?.status === "1" &&
      BannerData?.bannerInfo?.data.length !== 0
    ) {
      const silverBanner = BannerData?.bannerInfo?.data.filter((item) => {
        return item.banner_type === "silver";
      });
      setSilverBanner(silverBanner);

      const goldBanner = BannerData?.bannerInfo?.data.filter((item) => {
        return item.banner_type === "gold";
      });
      setGoldBanner(goldBanner);

      const platinumBanner = BannerData?.bannerInfo?.data.filter((item) => {
        return item.banner_type === "platinum";
      });
      setPlatinumBanner(platinumBanner);
    }
  }, [BannerData]);

  useEffect(() => {
    GetCategoryAction();
    getProductAction();
    GetAllBrandAction();
  }, []);

  return (
    <>
      {productData?.loading === true ? (
        <div className={classes.prograssBar}>
          <CircularProgress />
        </div>
      ) : (
        <div className={classes.homeRootDiv}>
          <div className={classes.categoriesDiv}>
            {categoryList?.map((listItem, key) => {
              return (
                <Typography
                  className={classes.categoriesName}
                  key={key}
                  onClick={() =>
                    history.push(`/category/${utils.toBase64(listItem?._id)}`)
                  }
                >
                  {/* <Button variant="contained">{listItem?.category_name}</Button> */}
                  {listItem?.category_name}
                </Typography>
              );
            })}
            {/* <Typography className={classes.categoriesName} onClick={DialogOpen}>
        <Button endIcon={<KeyboardArrowDownIcon />}>
          <Typographys children=" More" />
        </Button>
      </Typography> */}
          </div>
          <MoreCategory open={openDialog} onClose={closeDialog} />
          <div className={classes.carouselDiv}>
            {BannerData?.loading === true ? (
              <Skeleton variant="rectangular" height={304} width="100%" />
            ) : (
              <SwipableCarousel imageArray={platinumBanner} />
            )}
          </div>
          <div className={classes.letestProducts}>
            <Typographys
              className={classes.sectionHeading}
              children={
                <>
                  <span
                    style={{
                      textDecoration: "underline",
                      textDecorationThickness: "3px",
                    }}
                  >
                    Latest
                  </span>
                  &nbsp;
                  <span style={{ color: "#D10024" }}>Product</span>
                </>
              }
              variant="h3"
            />
            <div className={classes.latestProductDiv}>
              {newProductData?.loading === true ? (
                <Skeleton variant="rectangular" height={100} width="100%" />
              ) : (
                productData?.data?.data?.slice(0, 8).map((item, key) => {
                  return (
                    <ProductCard
                      key={key}
                      imageURL={suv}
                      product_id={item._id}
                      wishlist_id={
                        item?.wishlist.length !== 0
                          ? item?.wishlist[0]._id
                          : null
                      }
                      productName={item.product_name}
                      productPrice={item.price}
                      wishlistAndShareAction={
                        productData?.data?.data?._id === item?.product_id
                          ? true
                          : false
                      }
                    />
                  );
                })
              )}
            </div>
            <div>
              {productData?.data?.data?.length > 10 && (
                <Btn
                  children="Show More"
                  onClick={() => history.push("/more-product")}
                />
              )}
            </div>
          </div>
          {/* <div className={classes.carouselDiv}>
      {BannerData?.loading === true ? (
        <Skeleton variant="rectangular" height={304} width="100%" />
      ) : (
        <SwipableCarousel imageArray={goldBanner} />
      )}
    </div> */}
          <div className={classes.letestProducts}>
            <Typographys
              className={classes.sectionHeading}
              children={
                <>
                  <span
                    style={{
                      textDecoration: "underline",
                      textDecorationThickness: "3px",
                    }}
                  >
                    Available
                  </span>
                  &nbsp;
                  <span style={{ color: "#D10024" }}>Brands</span>
                </>
              }
              variant="h3"
            />
            <div>
              {getAllBrandData?.data?.data?.map((listItem, key) => {
                return (
                  <Card className={classes.brandCard}>
                    <CardMedia
                      component="img"
                      image={listItem.brand_image}
                      alt={listItem.alt}
                      onClick={() => {}}
                    />
                  </Card>
                );
              })}
            </div>
          </div>
          {/* <div className={classes.carouselDiv}>
      {BannerData?.loading === true ? (
        <Skeleton variant="rectangular" height={304} width="100%" />
      ) : (
        <SwipableCarousel imageArray={silverBanner} />
      )}
    </div> */}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  BannerData: state.BannerData.bannerData,
  categoryData: state.CategoryData.getCategoryData,
  productData: state.ProductData.getProductData,
  newProductData: state.ProductData.newProductData,
  getAllBrandData: state.BrandData.getAllBrandData,
  getAllSubCategoryData: state.SubCategoryData.getAllSubCategoryData,
});

const mapDispatchToProps = (dispatch) => ({
  LogoutAction: () => dispatch({ type: USER_LOGOUT_REQUEST }),
  GetBannerAction: (banner_page_location) =>
    dispatch({
      type: GET_BANNER_REQUEST,
      banner_page_location,
    }),
  GetCategoryAction: () =>
    dispatch({
      type: GET_CATEGORY_REQUEST,
    }),
  getProductAction: () =>
    dispatch({
      type: GET_PRODUCT_REQUEST,
    }),
  GetAllBrandAction: () =>
    dispatch({
      type: GET_All_BRAND_REQUEST,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
