import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Btn from "./CommonComponents/Btn";
import CategoryComponents from "./AddProductComponents/CategoryComponents";
import StepperComponent from "./CommonComponents/StepperComponent";
import ProductdetailForm from "./AddProductComponents/ProductDetailForm";
import ImageForm from "./AddProductComponents/ImageForm";
import LocationForm from "./AddProductComponents/LocationForm";
import { NotificationManager } from "react-notifications";
import {
  GET_PRODUCT_BY_ID_REQUEST,
  NEW_PRODUCT_REQUEST,
  UPDATE_PRODUCT_REQUEST,
} from "../Constants/ProductConstant";
import { useHistory, useParams } from "react-router";
import utils from "../utils/commonFunctions";

const useStyle = makeStyles((theme) => ({
  productFormRoot: {
    width: "50%",
    margin: "50px auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    boxShadow: "0px 0px 20px 3px rgba(0, 0, 0, 0.25)",
    padding: "20px 50px 30px 50px",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.down(430)]: {
      padding: "20px",
    },
    "&>h1": {
      width: "100%",
      fontSize: "30px",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "30px",
      textTransform: "uppercase",
      "&>span": {
        color: theme.palette.primary.main,
        fontSize: "30px",
        fontWeight: "bold",
      },
    },
    "&>form": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  fieldDiv: {
    width: "100%",
    marginBottom: "20px",
    "&>p": {
      marginBottom: "5px",
    },
  },
  secondaryHeading: {
    fontWeight: "bold",
    margin: "10px 0px",
    textTransform: "uppercase",
  },
  postBtn: {
    width: "max-content",
  },
  selectRoot: {
    width: "100%",
    "&>div": {
      height: "40px",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      border: "2px solid gray",
      padding: "10px",
      "&:hover": {
        border: `2px solid ${theme.palette.primary.main} !important`,
      },
    },
  },
  radioBtnStyle: {
    "&>div>label": {
      "&:hover": {
        "&>span": {
          color: theme.palette.primary.main,
        },
      },
    },
  },
  stepperBtns: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

function ProductForm({
  newProductAction,
  newProductData,
  getProductByIdAction,
  getProductByIdData,
  updateProductAction,
  updateProductData,
  userData,
}) {
  const classes = useStyle();
  const history = useHistory();
  const { product_id } = useParams();

  const [activeStep, setActiveStep] = useState(0);
  const [category_id, setCategory_id] = useState(null);
  const [sub_category, setSub_category] = useState([]);
  const [sub_category_id, setSub_category_id] = useState(null);
  const [brand, setBrand] = useState("");
  const [adTitle, setAdTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [productImage, setProductImage] = useState([]);
  const [address, setAddress] = useState("");
  const [oldImages, setOldImages] = useState([]);

  const handleSubmit = (e) => {
    if (
      category_id !== null &&
      sub_category_id !== null &&
      adTitle !== "" &&
      description !== "" &&
      price !== "" &&
      productImage.length !== 0 &&
      address !== ""
    ) {
      const formData = new FormData();
      formData.append("category_id", category_id);
      formData.append("sub_category_id", sub_category_id);
      formData.append("brand_name", brand !== "" ? brand : null);
      formData.append("product_name", adTitle);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("address", address);
      for (let item of productImage) {
        formData.append("product_images", item);
      }
      newProductAction(formData);
    } else {
      category_id === null &&
        NotificationManager.error("Please select category", "", 3000);
      sub_category_id === null &&
        NotificationManager.error("Please select sub category", "", 3000);
      adTitle === "" &&
        NotificationManager.error("Please enter adTitle", "", 3000);
      description === "" &&
        NotificationManager.error("Please enter product description", "", 3000);
      price === "" && NotificationManager.error("Please enter price", "", 3000);
      address === "" &&
        NotificationManager.error("Please enter your address", "", 3000);
    }
  };

  const handleUpdate = () => {
    if (
      category_id !== null &&
      sub_category_id !== null &&
      adTitle !== "" &&
      description !== "" &&
      price !== "" &&
      address !== ""
    ) {
      updateProductAction({
        product_id,
        category_id,
        sub_category_id,
        brand_name: brand,
        product_name: adTitle,
        description,
        price,
        address,
      });
    } else {
      category_id === null &&
        NotificationManager.error("Please select category", "", 3000);
      sub_category_id === null &&
        NotificationManager.error("Please select sub category", "", 3000);
      adTitle === "" &&
        NotificationManager.error("Please enter adTitle", "", 3000);
      description === "" &&
        NotificationManager.error("Please enter product description", "", 3000);
      price === "" && NotificationManager.error("Please enter price", "", 3000);
      address === "" &&
        NotificationManager.error("Please enter your address", "", 3000);
    }
  };

  function getChildComponent(index) {
    switch (index) {
      case 0:
        return (
          <CategoryComponents
            category_id={category_id}
            setCategory_id={setCategory_id}
            sub_category={sub_category}
            setSub_category={setSub_category}
            sub_category_id={sub_category_id}
            setSub_category_id={setSub_category_id}
            fieldDiv={classes.fieldDiv}
            selectRoot={classes.selectRoot}
          />
        );
      case 1:
        return (
          <ProductdetailForm
            fieldDiv={classes.fieldDiv}
            selectRoot={classes.selectRoot}
            secondaryHeading={classes.secondaryHeading}
            brand={brand}
            setBrand={setBrand}
            adTitle={adTitle}
            setAdTitle={setAdTitle}
            description={description}
            setDescription={setDescription}
            price={price}
            setPrice={setPrice}
          />
        );
      case 2:
        return (
          <ImageForm
            fieldDiv={classes.fieldDiv}
            productImage={productImage}
            setProductImage={setProductImage}
            oldImages={oldImages}
            product_id={product_id}
            setOldImages={setOldImages}
          />
        );
      case 3:
        return (
          <LocationForm
            fieldDiv={classes.fieldDiv}
            address={address}
            setAddress={setAddress}
          />
        );
      default:
        return "Something went wrong";
    }
  }

  const steps = [
    {
      name1: "Choose A ",
      name2: "Category",
    },
    {
      name1: "Include Some ",
      name2: "Details",
    },
    {
      name1: "Upload up to 5 ",
      name2: "photos",
    },
    {
      name1: "Add Your ",
      name2: "Location",
    },
  ];

  const handleNext = () => {
    if (activeStep === 0) {
      if (category_id === null || sub_category_id === null) {
        NotificationManager.error(
          "Please select category or sub category of your product",
          "",
          5000
        );
      } else {
        setActiveStep(activeStep + 1);
      }
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  useEffect(() => {
    if (product_id !== "new") {
      getProductByIdAction(product_id);
    }
  }, []);

  useEffect(() => {
    if (newProductData?.data?.status === "1") {
      window.location.reload();
    }
  }, [newProductData]);

  useEffect(() => {
    if (getProductByIdData?.data?.status === "1") {
      const product = getProductByIdData?.data?.data;
      setCategory_id(product?.category_id);
      setSub_category_id(product?.sub_category_id);
      setBrand(product?.brand_name);
      setAdTitle(product?.product_name);
      setDescription(product?.description);
      setPrice(product?.price);
      setOldImages(product?.product_images);
      setAddress(product?.address);
    }
  }, [getProductByIdData]);

  useEffect(() => {
    if (updateProductData?.data?.status === "1") {
      window.location.href = `/dealpage/${utils.toBase64(
        userData?.userInfo?.user?._id
      )}`;
    }
  }, [updateProductData]);

  return (
    <>
      <StepperComponent activeStep={activeStep} steps={steps} />
      <div className={classes.productFormRoot}>
        <Typography component="h1">
          {steps[activeStep].name1}
          <Typography component="span">{steps[activeStep].name2}</Typography>
        </Typography>
        <form>
          {getChildComponent(activeStep)}
          <div className={classes.stepperBtns}>
            <Btn
              children="Back"
              className={classes.postBtn}
              onClick={handleBack}
              isDisabled={activeStep === 0 ? true : false}
              disabled={activeStep === 0 ? true : false}
            />
            {product_id !== "new" ? (
              <Btn
                children={activeStep !== 3 ? "Next" : "Update Post"}
                className={classes.postBtn}
                onClick={activeStep !== 3 ? handleNext : handleUpdate}
                loading={activeStep === 3 ? updateProductData?.loading : false}
              />
            ) : (
              <Btn
                children={activeStep !== 3 ? "Next" : "Post now"}
                className={classes.postBtn}
                onClick={activeStep !== 3 ? handleNext : handleSubmit}
                loading={activeStep === 3 ? newProductData?.loading : false}
              />
            )}
          </div>
        </form>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  newProductData: state.ProductData.newProductData,
  getProductByIdData: state.ProductData.getProductByIdData,
  updateProductData: state.ProductData.updateProductData,
  userData: state.AuthData.userData,
});

const mapDispatchToProps = (dispatch) => ({
  newProductAction: (productData) =>
    dispatch({
      type: NEW_PRODUCT_REQUEST,
      productData,
    }),
  getProductByIdAction: (product_id) =>
    dispatch({
      type: GET_PRODUCT_BY_ID_REQUEST,
      product_id,
    }),
  updateProductAction: (productData) =>
    dispatch({
      type: UPDATE_PRODUCT_REQUEST,
      productData,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
