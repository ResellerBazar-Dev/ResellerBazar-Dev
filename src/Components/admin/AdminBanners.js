import React, { useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { connect } from "react-redux";
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
import {
  DELETE_BANNER_REQUEST,
  GET_ALL_BANNER_REQUEST,
  UPDATE_BANNER_IMAGE_REQUEST,
  UPDATE_BANNER_STATUS_REQUEST,
} from "../../Constants/BannerConstant";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AlertDialog from "../CommonComponents/AlertDialog";

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
  bannerDetailsRoot: {
    display: "flex",
    flexDirection: "column",
    margin: "10px 0",
  },
  bannerImageDiv: {
    width: "100%",
    "&>img": {
      width: "100%",
    },
  },
  bannerDetailsDiv: {
    width: "100%",
    "&>div": {
      display: "flex",
      width: "100%",
      "&>p": {
        width: "100%",
        "&:nth-child(1)": {
          fontWeight: "bold",
          width: "30%",
        },
        "&:nth-child(2)": {},
      },
    },
  },
  bannerSubHeading: {
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
  bannerImages: {
    width: 100,
    height: 100,
    borderRadius: 10,
    "&>img": {
      borderRadius: 10,
      width: "100%",
      height: "100%",
    },
  },
  addBannerImageLabel: {
    "&>svg": {
      width: 50,
      height: 50,
    },
  },
  bannerUserAndAdminDetailDiv: {
    width: "100%",
    display: "flex",
    "&>div": {
      "&:nth-child(1)": {
        width: "40%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      "&:nth-child(2)": {
        width: "60%",
      },
    },
  },
  userImageDiv: {
    boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.25);",
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    "&>img": {
      boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.25);",
      borderRadius: "50%",
      width: "200px",
      height: "200px",
      objectFit: "cover",
    },
  },
  addBannerImageIcon: {
    cursor: "pointer",
    color: theme.palette.primary.main,
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
    name: "banner_image",
    label: "Image",
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: "banner_type",
    label: "Type",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "banner_page_location",
    label: "Page Location",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "expired_at",
    label: "Expire Date",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "upload_image",
    label: "Upload Banner Image",
    options: {
      filter: false,
      sort: false,
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
  {
    name: "delete",
    label: "Delete",
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
  getAllBannersAction,
  getAllBannersData,
  updateBannerImageAction,
  updateBannerStatusAction,
  deleteBannerAction,
}) => {
  const classes = useStyle();
  const [rows, setRows] = useState(null);
  const [deleteBannerOpen, setDeleteBannerOpen] = useState(false);
  const [viewMoreDialogOpen, setViewMoreDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [banner_id, setBanner_id] = useState(null);

  const handleBannerImageUpload = (e) => {
    let formData = new FormData();
    formData.append("banner_image", e.target.files[0]);
    updateBannerImageAction(utils.toBase64(banner_id), formData);
    setBanner_id(null);
  };

  const handleAlertDialogClose = (value) => {
    if (value && banner_id !== null) {
      deleteBannerAction(utils.toBase64(banner_id));
    }
    setDeleteBannerOpen(false);
    setBanner_id(null);
  };

  useEffect(() => {
    if (getAllBannersData?.data?.status === "1") {
      setRows(
        getAllBannersData?.data?.data?.map((item, key) => {
          return {
            sr_no: key + 1,
            banner_image: item?.banner_image !== null && (
              <div className={classes.bannerImages}>
                <img src={item?.banner_image} alt="Banner Poster" />
              </div>
            ),
            banner_type: item?.banner_type,
            banner_page_location: item?.banner_page_location,
            expired_at:
              item?.expired_at !== null ? item?.expired_at : "Not Available",
            status: item?.is_active ? (
              <Button
                variant="contained"
                style={{
                  background: "red",
                  color: "white",
                }}
                onClick={() =>
                  updateBannerStatusAction(
                    utils.toBase64(item?._id),
                    "deactive"
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
                  updateBannerStatusAction(utils.toBase64(item?._id), "active")
                }
              >
                Active
              </Button>
            ),
            upload_image: (
              <label
                htmlFor="bannerImageInput"
                className={classes.addBannerImageLabel}
              >
                <AddAPhotoIcon
                  className={classes.addBannerImageIcon}
                  onClick={() => setBanner_id(item?._id)}
                />
              </label>
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
            delete: (
              <DeleteIcon
                style={{
                  fontSize: "2rem",
                  color: "red",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setDeleteBannerOpen(true);
                  setBanner_id(item?._id);
                }}
              />
            ),
          };
        })
      );
    }
  }, [getAllBannersData]);

  useEffect(() => {
    getAllBannersAction();
  }, []);

  return (
    <div className={classes.tableRootDiv}>
      {getAllBannersData?.loading ? (
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
      <input
        type="file"
        onChange={handleBannerImageUpload}
        id="bannerImageInput"
        style={{ display: "none" }}
      />
      <Dialog
        open={viewMoreDialogOpen}
        onClose={() => {
          setSelectedProduct(null);
          setViewMoreDialogOpen(false);
        }}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>Banner Details</DialogTitle>
        <DialogContent>
          <div className={classes.bannerDetailsRoot}>
            <div className={classes.bannerImageDiv}>
              <img src={selectedProduct?.banner_image} alt="Banner" />
            </div>
            <Typography className={classes.bannerSubHeading}>
              Banner <Typography component="span">Details</Typography>
            </Typography>
            <div className={classes.bannerDetailsDiv}>
              <div>
                <Typography>Banner Type</Typography>
                <Typography>: {selectedProduct?.banner_type}</Typography>
              </div>
              <div>
                <Typography>Banner Page Location</Typography>
                <Typography>
                  : {selectedProduct?.banner_page_location}
                </Typography>
              </div>
              <div>
                <Typography>Expire Date</Typography>
                <Typography>: {selectedProduct?.expired_at}</Typography>
              </div>
              <div>
                <Typography>Price</Typography>
                <Typography>
                  : {selectedProduct?.plan_details?.price}
                </Typography>
              </div>
              <div>
                <Typography>Presentation</Typography>
                <Typography>
                  : {selectedProduct?.plan_details?.presentation}
                </Typography>
              </div>
              <div>
                <Typography>Money Back</Typography>
                <Typography>
                  : {selectedProduct?.plan_details?.money_back}
                </Typography>
              </div>
              <div>
                <Typography>Promotion</Typography>
                <Typography>
                  : {selectedProduct?.plan_details?.promotion}
                </Typography>
              </div>
              <div>
                <Typography>Support</Typography>
                <Typography>
                  : {selectedProduct?.plan_details?.support}
                </Typography>
              </div>
            </div>
            <Typography className={classes.bannerSubHeading}>
              Seller <Typography component="span">Details</Typography>
            </Typography>
            <div className={classes.bannerUserAndAdminDetailDiv}>
              <div>
                <div className={classes.userImageDiv}>
                  {selectedProduct?.sellerData[0]?.profile_image !== null && (
                    <img
                      src={selectedProduct?.sellerData[0]?.profile_image}
                      alt="User Icon"
                    />
                  )}
                </div>
              </div>
              <div className={classes.bannerDetailsDiv}>
                <div>
                  <Typography>Name</Typography>
                  <Typography>
                    : {selectedProduct?.sellerData[0]?.name}
                  </Typography>
                </div>
                <div>
                  <Typography>Email</Typography>
                  <Typography>
                    : {selectedProduct?.sellerData[0]?.email}
                  </Typography>
                </div>
                <div>
                  <Typography>Phone Number</Typography>
                  <Typography>
                    :{" "}
                    {
                      selectedProduct?.sellerData[0]?.other_details
                        ?.contact_number
                    }
                  </Typography>
                </div>
              </div>
            </div>
            <Typography className={classes.bannerSubHeading}>
              Admin <Typography component="span">Details</Typography>
            </Typography>
            <div className={classes.bannerUserAndAdminDetailDiv}>
              <div>
                <div className={classes.userImageDiv}>
                  {selectedProduct?.adminData[0]?.profile_image !== null && (
                    <img
                      src={selectedProduct?.adminData[0]?.profile_image}
                      alt="User Icon"
                    />
                  )}
                </div>
              </div>
              <div className={classes.bannerDetailsDiv}>
                <div>
                  <Typography>Name</Typography>
                  <Typography>
                    : {selectedProduct?.adminData[0]?.name}
                  </Typography>
                </div>
                <div>
                  <Typography>Email</Typography>
                  <Typography>
                    : {selectedProduct?.adminData[0]?.email}
                  </Typography>
                </div>
                <div>
                  <Typography>Phone Number</Typography>
                  <Typography>
                    :{" "}
                    {
                      selectedProduct?.adminData[0]?.other_details
                        ?.contact_number
                    }
                  </Typography>
                </div>
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
      <AlertDialog
        open={deleteBannerOpen}
        setOpen={setDeleteBannerOpen}
        handleAlertDialogClose={handleAlertDialogClose}
        dialogTitle="Are you confirm want to delete this banner?"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  getAllBannersData: state.BannerData.getAllBannerData,
});

const mapDispatchToProps = (dispatch) => ({
  getAllBannersAction: () =>
    dispatch({
      type: GET_ALL_BANNER_REQUEST,
    }),
  updateBannerImageAction: (banner_id, formData) =>
    dispatch({
      type: UPDATE_BANNER_IMAGE_REQUEST,
      banner_id,
      formData,
    }),
  updateBannerStatusAction: (banner_id, status_type) =>
    dispatch({
      type: UPDATE_BANNER_STATUS_REQUEST,
      banner_id,
      status_type,
    }),
  deleteBannerAction: (banner_id) =>
    dispatch({
      type: DELETE_BANNER_REQUEST,
      banner_id,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminProducts);
