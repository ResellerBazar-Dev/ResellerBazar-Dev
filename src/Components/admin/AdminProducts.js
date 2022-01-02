import React, { useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import {
  GET_ALL_PRODUCT_REQUEST,
  UPDATE_PRODUCT_STATUS_REQUEST,
} from "../../Constants/ProductConstant";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import MUIDataTable from "mui-datatables";
import utils from "../../utils/commonFunctions";
import CarouselComponent from "../CommonComponents/CarouselComponent";

const useStyle = makeStyles((theme) => ({
  tableRootDiv: {
    margin: "50px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&>div": {
      width: "100%",
    },
  },
  productDetailsRoot: {
    display: "flex",
    flexDirection: "column",
    margin: "10px 0",
  },
  productImageDiv: {},
  productDetailsLeftSide: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "&>div": {
      marginBottom: "15px",
    },
    "&>p": {
      fontWeight: "600",
      fontSize: "25px",
    },
  },
  productDetailsRightSide: {
    width: "100%",
    "&>div": {
      display: "flex",
      width: "100%",
      "&>p": {
        width: "100%",
        "&:nth-child(1)": {
          fontWeight: "bold",
          width: "25%",
        },
        "&:nth-child(2)": {},
      },
    },
  },
  productImages: {
    width: "100%",
  },
  productSubHeading: {
    fontWeight: "bold",
    fontSize: "30px",
    margin: "30px 0 20px 0",
    "&>span": {
      fontWeight: "bold",
      fontSize: "30px",
      margin: "30px 0 20px 0",
      color: theme.palette.primary.main,
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

const columns = [
  {
    name: "sr_no",
    label: "Sr No",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "category_name",
    label: "Category Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "sub_category_name",
    label: "Sub Category Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "brand_name",
    label: "Brand",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "product_name",
    label: "Product Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "user_name",
    label: "Customer Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "price",
    label: "Price",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "address",
    label: "Address",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "status",
    label: "Active/Deactive",
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: "view_more",
    label: "View More",
    options: {
      filter: false,
      sort: false,
    },
  },
];

const options = {
  filterType: "checkbox",
};

const AdminProducts = ({
  getAllProductAction,
  getAllProductData,
  updateProductStatusAction,
}) => {
  const classes = useStyle();
  const [rows, setRows] = useState(null);
  const [viewMoreDialogOpen, setViewMoreDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (getAllProductData?.data?.status === "1") {
      setRows(
        getAllProductData?.data?.data?.map((item, key) => {
          return {
            sr_no: key + 1,
            category_name: item?.category[0]?.category_name,
            sub_category_name: item?.sub_category[0]?.sub_category_name,
            brand_name: item?.brand_name,
            product_name: item?.product_name,
            user_name: item?.users[0]?.name,
            price: item?.price,
            address: item?.address,
            status: item?.status ? (
              <Button
                variant="contained"
                style={{
                  background: "red",
                  color: "white",
                }}
                onClick={() =>
                  updateProductStatusAction(
                    "deactive",
                    utils.toBase64(item?._id)
                  )
                }
              >
                Deactive
              </Button>
            ) : (
              <Button
                variant="contained"
                style={{
                  background: "green",
                  color: "white",
                }}
                onClick={() =>
                  updateProductStatusAction("active", utils.toBase64(item?._id))
                }
              >
                Active
              </Button>
            ),
            view_more: (
              <Button
                variant="contained"
                style={{
                  background: "blue",
                  color: "white",
                }}
                onClick={() => {
                  setSelectedProduct(item);
                  setViewMoreDialogOpen(true);
                }}
              >
                View More
              </Button>
            ),
          };
        })
      );
    }
  }, [getAllProductData]);

  useEffect(() => {
    getAllProductAction();
  }, []);

  return (
    <div className={classes.tableRootDiv}>
      {getAllProductData?.loading ? (
        <div className={classes.prograssBar}>
          <CircularProgress />
        </div>
      ) : (
        rows !== null && (
          <MUIDataTable
            title="Products"
            data={rows}
            columns={columns}
            options={options}
          />
        )
      )}
      <Dialog
        open={viewMoreDialogOpen}
        onClose={() => {
          setSelectedProduct(null);
          setViewMoreDialogOpen(false);
        }}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>Product Details</DialogTitle>
        <DialogContent>
          <div className={classes.productDetailsRoot}>
            <div className={classes.productDetailsLeftSide}>
              <div className={classes.productImageDiv}>
                <CarouselComponent
                  children={selectedProduct?.product_images?.map(
                    (item, key) => {
                      return (
                        <img
                          key={key}
                          src={item}
                          alt="Products"
                          className={classes.productImages}
                        />
                      );
                    }
                  )}
                  indicators={
                    selectedProduct?.product_images?.length > 1 ? true : false
                  }
                  cycleNavigation={
                    selectedProduct?.product_images?.length > 1 ? true : false
                  }
                  autoPlay={false}
                />
              </div>
              <Typography>{selectedProduct?.product_name}</Typography>
            </div>
            <Typography className={classes.productSubHeading}>
              Product <Typography component="span">Details</Typography>
            </Typography>
            <div className={classes.productDetailsRightSide}>
              <div>
                <Typography>Category Name</Typography>
                <Typography>
                  : {selectedProduct?.category[0]?.category_name}
                </Typography>
              </div>
              <div>
                <Typography>Sub Category Name</Typography>
                <Typography>
                  : {selectedProduct?.sub_category[0]?.sub_category_name}
                </Typography>
              </div>
              <div>
                <Typography>Brand Name</Typography>
                <Typography>: {selectedProduct?.brand_name}</Typography>
              </div>
              <div>
                <Typography>Product Name</Typography>
                <Typography>: {selectedProduct?.product_name}</Typography>
              </div>
              <div>
                <Typography>Description</Typography>
                <Typography>: {selectedProduct?.description}</Typography>
              </div>
              <div>
                <Typography>Price</Typography>
                <Typography>: {selectedProduct?.price}</Typography>
              </div>
              <div>
                <Typography>Address</Typography>
                <Typography>: {selectedProduct?.address}</Typography>
              </div>
            </div>
            <Typography className={classes.productSubHeading}>
              User <Typography component="span">Details</Typography>
            </Typography>
            <div className={classes.productDetailsRightSide}>
              <div>
                <Typography>Name</Typography>
                <Typography>: {selectedProduct?.users[0]?.name}</Typography>
              </div>
              <div>
                <Typography>Email</Typography>
                <Typography>: {selectedProduct?.users[0]?.email}</Typography>
              </div>
              <div>
                <Typography>Contact Number</Typography>
                <Typography>
                  : {selectedProduct?.users[0]?.other_details?.contact_number}
                </Typography>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setSelectedProduct(null);
              setViewMoreDialogOpen(false);
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => ({
  getAllProductData: state.ProductData.getAllProductData,
});

const mapDispatchToProps = (dispatch) => ({
  getAllProductAction: () =>
    dispatch({
      type: GET_ALL_PRODUCT_REQUEST,
    }),
  updateProductStatusAction: (status_type, product_id) =>
    dispatch({
      type: UPDATE_PRODUCT_STATUS_REQUEST,
      status_type,
      product_id,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminProducts);
