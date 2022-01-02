import React, { useEffect, useState, useRef } from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import MUIDataTable from "mui-datatables";
import { Badge, Button, CircularProgress } from "@mui/material";
import utils from "../../utils/commonFunctions";
import { connect } from "react-redux";
import {
  DELETE_BRAND_REQUEST,
  GET_All_BRAND_REQUEST,
  UPDATE_BRAND_STATUS_REQUEST,
  CREATE_BRAND_REQUEST,
  UPDATE_BRAND_REQUEST,
} from "../../Constants/BrandConstant";
import AlertDialog from "../CommonComponents/AlertDialog";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";

const useStyle = makeStyles((theme) => ({
  AddBtn: {
    margin: "50px 0 !important",
    backgroundColor: "green !important",
    color: "white",
  },
  tableRootDiv: {
    display: "flex",
    flexDirection: "column",
    "&>div": {
      "&:nth-child(2)": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&>div": {
          width: "100%",
        },
      },
    },
  },
  brandImage: {
    "&>img": {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      objectFit: "cover",
    },
  },
  uploadImageBtnDiv: {
    width: "100%",
    margin: "20px 0 0 0",
    textAlign: "center",
  },
  brandImagePreviewRootDiv: {
    width: "100%",
    margin: "10px 0",
    display: "flex",
    justifyContent: "center",
  },
  brandImagePreviewImageDiv: {
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: "10px",
    padding: "10px",
    "&>img": {
      width: "200px",
      height: "200px",
      borderRadius: "10px",
      objectFit: "cover",
    },
  },
  badgeStyle: {
    "&>span": {
      cursor: "pointer",
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
    name: "brand_image",
    label: "Brand Image",
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: "name",
    label: "Brand Name",
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
    name: "edit",
    label: "Edit",
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

function AddAndEditBtnDialog({
  addAndEditBtnOpen,
  setAddAndEditBtnOpen,
  handleAddAndEditBtnClose,
  brand_name,
  setBrand_name,
  setBrandImage,
  brandImage,
  oldBrandImage,
  setOldBrandImage,
  brand_id,
}) {
  const classes = useStyle();
  const brandImageInputRef = useRef(null);

  return (
    <Dialog
      open={addAndEditBtnOpen}
      onClose={() => handleAddAndEditBtnClose(false)}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        {brand_id !== null ? "Update Brand" : "Add New Brand"}
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="brand_name"
          label="Brand name"
          type="text"
          fullWidth
          variant="standard"
          value={brand_name}
          onChange={(e) => setBrand_name(e.target.value)}
        />
        <div className={classes.brandImagePreviewRootDiv}>
          {brandImage !== null && (
            <Badge
              className={classes.badgeStyle}
              color="primary"
              badgeContent={<CloseIcon />}
              onClick={() => setBrandImage(null)}
            >
              <div className={classes.brandImagePreviewImageDiv}>
                <img src={URL.createObjectURL(brandImage)} alt="Brand Icon" />
              </div>
            </Badge>
          )}
          {oldBrandImage !== null && (
            <Badge
              className={classes.badgeStyle}
              color="primary"
              badgeContent={<CloseIcon />}
              onClick={() => setOldBrandImage(null)}
            >
              <div className={classes.brandImagePreviewImageDiv}>
                <img src={oldBrandImage} alt="Brand Icon" />
              </div>
            </Badge>
          )}
        </div>
        <input
          type="file"
          style={{ display: "none" }}
          id="brand-image"
          onChange={(e) => setBrandImage(e.target.files[0])}
          ref={brandImageInputRef}
        />
        <div className={classes.uploadImageBtnDiv}>
          <Button
            variant="contained"
            startIcon={<AddPhotoAlternateIcon />}
            onClick={() => brandImageInputRef.current.click()}
            disabled={brandImage !== null || oldBrandImage !== null}
          >
            Upload Image
          </Button>
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          style={{ backgroundColor: "#D10024" }}
          onClick={() => handleAddAndEditBtnClose(false)}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "green"}}
          onClick={() => handleAddAndEditBtnClose(true)}
        >
          {brand_id !== null ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const AdminBrand = ({
  getAllBrandData,
  getAllBrandAction,
  updateBrandStatusAction,
  deleteBrandAction,
  addNewBrandAction,
  updateBrandAction,
}) => {
  const classes = useStyle();

  const [rows, setRows] = useState(null);
  const [deleteBrandOpen, setDeleteBrandOpen] = useState(false);
  const [brand_id, setBrand_id] = useState(null);
  const [addAndEditBtnOpen, setAddAndEditBtnOpen] = useState(false);
  const [brand_name, setBrand_name] = useState("");
  const [brandImage, setBrandImage] = useState(null);
  const [oldBrandImage, setOldBrandImage] = useState(null);

  const handleDeleteAlertDialogClose = (isDelete) => {
    if (isDelete && brand_id !== null) {
      deleteBrandAction(utils.toBase64(brand_id));
    }
    setBrand_id(null);
    setDeleteBrandOpen(false);
  };

  const handleAddAndEditBtnClose = (value) => {
    if (
      value &&
      brand_name !== "" &&
      brandImage !== null &&
      brand_id === null
    ) {
      let formData = new FormData();
      formData.append("brand_name", brand_name);
      formData.append("brand_image", brandImage);
      addNewBrandAction(formData);
    }
    if (value && brand_name !== "" && brand_id !== null) {
      let formData = new FormData();
      formData.append("brand_name", brand_name);
      if (brandImage !== null) {
        formData.append("brand_image", brandImage);
      }
      updateBrandAction(utils.toBase64(brand_id), formData);
    }
    setBrand_id(null);
    setBrand_name("");
    setBrandImage(null);
    setOldBrandImage(null);
    setAddAndEditBtnOpen(false);
  };

  useEffect(() => {
    if (getAllBrandData?.data?.status === "1") {
      setRows(
        getAllBrandData?.data?.data?.map((item, key) => {
          return {
            sr_no: key + 1,
            brand_image: (
              <div className={classes.brandImage}>
                <img src={item?.brand_image} alt="Brand Icon" />
              </div>
            ),
            name: item?.brand_name,
            status: item?.status ? (
              <Button
                variant="contained"
                style={{
                  background: "red",
                  color: "white",
                }}
                onClick={() =>
                  updateBrandStatusAction("deactive", utils.toBase64(item?._id))
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
                  updateBrandStatusAction("active", utils.toBase64(item?._id))
                }
              >
                Active
              </Button>
            ),
            edit: (
              <IconButton IconButton style={{ color: "blue" }}>
                <EditIcon
                  style={{
                    fontSize: "2rem",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setBrand_name(item?.brand_name);
                    setBrand_id(item?._id);
                    setOldBrandImage(item?.brand_image);
                    setAddAndEditBtnOpen(true);
                  }}
                />
              </IconButton>
            ),
            delete: (
              <IconButton style={{ color: "#D10024" }}>
                <DeleteIcon
                  style={{
                    fontSize: "2rem",
                    color: "red",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setDeleteBrandOpen(true);
                    setBrand_id(item?._id);
                  }}
                />
              </IconButton>
            ),
          };
        })
      );
    }
  }, [getAllBrandData]);

  useEffect(() => {
    getAllBrandAction();
  }, []);

  return (
    <div className={classes.tableRootDiv}>
      <div>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          className={classes.AddBtn}
          onClick={() => setAddAndEditBtnOpen(true)}
        >
          Add More
        </Button>
      </div>
      <div>
        {getAllBrandData?.loading ? (
          <div className={classes.prograssBar}>
            <CircularProgress />
          </div>
        ) : (
          rows !== null && (
            <MUIDataTable
              title="Brands"
              data={rows}
              columns={columns}
              options={options}
            />
          )
        )}
      </div>
      <AddAndEditBtnDialog
        addAndEditBtnOpen={addAndEditBtnOpen}
        setAddAndEditBtnOpen={setAddAndEditBtnOpen}
        handleAddAndEditBtnClose={handleAddAndEditBtnClose}
        brand_name={brand_name}
        setBrand_name={setBrand_name}
        setBrandImage={setBrandImage}
        brandImage={brandImage}
        oldBrandImage={oldBrandImage}
        setOldBrandImage={setOldBrandImage}
        brand_id={brand_id}
      />
      <AlertDialog
        open={deleteBrandOpen}
        setOpen={setDeleteBrandOpen}
        handleAlertDialogClose={handleDeleteAlertDialogClose}
        dialogTitle="Are you confirm want to delete this Brand?"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  getAllBrandData: state.BrandData.getAllBrandData,
});

const mapDispatchToProps = (dispatch) => ({
  getAllBrandAction: () =>
    dispatch({
      type: GET_All_BRAND_REQUEST,
    }),
  updateBrandStatusAction: (status_type, brand_id) =>
    dispatch({
      type: UPDATE_BRAND_STATUS_REQUEST,
      status_type,
      brand_id,
    }),
  deleteBrandAction: (brand_id) =>
    dispatch({
      type: DELETE_BRAND_REQUEST,
      brand_id,
    }),
  addNewBrandAction: (brandData) =>
    dispatch({
      type: CREATE_BRAND_REQUEST,
      brandData,
    }),
  updateBrandAction: (brand_id, brandData) =>
    dispatch({
      type: UPDATE_BRAND_REQUEST,
      brand_id,
      brandData,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminBrand);
