import { Badge, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import {
  DELETE_PRODUCT_IMAGE_REQUEST,
  UPDATE_PRODUCT_IMAGE_REQUEST,
} from "../../Constants/ProductConstant";

const useStyle = makeStyles((theme) => ({
  productPhotos: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    "&>label": {
      border: "2px solid gray",
      width: "110px",
      height: "110px",
      marginRight: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      borderRadius: "10px",
      marginBottom: "10px",
      [theme.breakpoints.down(430)]: {
        width: "80px",
        height: "80px",
      },
      "&>svg": {
        width: "50px",
        height: "50px",
        color: "gray",
      },
      "&:hover": {
        border: `2px solid ${theme.palette.primary.main}`,
        "&>svg": {
          color: theme.palette.primary.main,
        },
      },
      "&>img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
    },
  },
  inputFile: {
    display: "none",
  },
  imagePriview: {
    "&>span": {
      border: `2px solid ${theme.palette.primary.main}`,
      borderRadius: "10px",
      padding: "5px",
      margin: "10px 5px 10px 0px",
      "&>img": {
        borderRadius: "10px",
        width: "100px",
        height: "100px",
      },
      "&>span": {
        cursor: "pointer",
      },
    },
  },
}));

function ImageForm({
  fieldDiv,
  setProductImage,
  productImage,
  oldImages,
  product_id,
  deleteProductImageAction,
  setOldImages,
  updateProductImageAction,
}) {
  const classes = useStyle();
  const handleChange = (e) => {
    setProductImage(productImage.concat(e.target.files[0]));
  };
  const handleRemoveImage = (index) => {
    let updatedProductList = productImage.filter((item, i) => {
      return i !== index;
    });
    setProductImage(updatedProductList);
  };

  const handleDeleteImage = (type, index) => {
    if (type === "old") {
      deleteProductImageAction(product_id, index);
      const tempUpdateImages = oldImages.filter((item, i) => {
        return i !== index;
      });
      setOldImages(tempUpdateImages);
    } else {
      const newIndex = index + oldImages.length;
      deleteProductImageAction(product_id, newIndex);
      let updatedProductList = productImage.filter((item, i) => {
        return index !== i;
      });
      setProductImage(updatedProductList);
    }
  };

  const handleUpdateImageChange = (e) => {
    setProductImage(productImage.concat(e.target.files[0]));
    const formData = new FormData();
    formData.append("product_images", e.target.files[0]);
    updateProductImageAction(product_id, formData);
  };
  return (
    <div className={fieldDiv}>
      <Typography>Product Images *</Typography>
      <div className={classes.productPhotos}>
        <input
          accept="image/*"
          className={classes.inputFile}
          id="upload-product-image"
          type="file"
          onChange={
            product_id === "new" ? handleChange : handleUpdateImageChange
          }
        />
        {[
          ...Array(
            product_id === "new"
              ? 5 - productImage.length
              : 5 - oldImages.length - productImage.length
          ),
        ].map((item, key) => {
          return (
            <label htmlFor="upload-product-image" key={key}>
              <AddAPhotoOutlinedIcon />
            </label>
          );
        })}
      </div>
      <div className={classes.imagePriview}>
        {productImage.length !== 0 &&
          productImage.map((item, key) => {
            return (
              <Badge
                key={key}
                badgeContent={<CloseIcon />}
                color="primary"
                onClick={() =>
                  product_id === "new"
                    ? handleRemoveImage(key)
                    : handleDeleteImage("new", key)
                }
              >
                <img src={URL.createObjectURL(item)} alt="product" />
              </Badge>
            );
          })}
        {oldImages.length !== 0 &&
          oldImages.map((item, key) => {
            return (
              <Badge
                key={key}
                badgeContent={<CloseIcon />}
                color="primary"
                onClick={() => handleDeleteImage("old", key)}
              >
                <img src={item} alt="product" />
              </Badge>
            );
          })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  deleteProductImageAction: (product_id, image_index) =>
    dispatch({
      type: DELETE_PRODUCT_IMAGE_REQUEST,
      product_id,
      image_index,
    }),
  updateProductImageAction: (product_id, product_images) =>
    dispatch({
      type: UPDATE_PRODUCT_IMAGE_REQUEST,
      product_id,
      product_images,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageForm);
