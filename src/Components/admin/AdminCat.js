import React, { useEffect, useState } from "react";
import {
  DialogActions,
  DialogTitle,
  Dialog,
  DialogContent,
  CircularProgress,
} from "@mui/material";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { connect } from "react-redux";
import {
  CREATE_CATEGORY_REQUEST,
  DELETE_CATEGORY_REQUEST,
  GET_ALL_CATEGORY_REQUEST,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_STATUS_REQUEST,
} from "../../Constants/CategoryConstant";
import utils from "../../utils/commonFunctions";
import AlertDialog from "../CommonComponents/AlertDialog";
import classNames from "classnames";
import MUIDataTable from "mui-datatables";

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
    name: "product_count",
    label: "Category Items",
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
  category_name,
  setCategory_name,
  category_id,
}) {
  const classes = useStyle();

  return (
    <Dialog
      open={addAndEditBtnOpen}
      onClose={() => handleAddAndEditBtnClose(false)}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        {category_id !== null ? "Update Category" : "Add New Category"}
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="category_name"
          label="Category name"
          type="text"
          fullWidth
          variant="standard"
          value={category_name}
          onChange={(e) => setCategory_name(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          style={{ backgroundColor: "#D10024", color: "white" }}
          onClick={() => handleAddAndEditBtnClose(false)}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "green", color: "white" }}
          onClick={() => handleAddAndEditBtnClose(true)}
        >
          {category_id !== null ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const AdminCat = ({
  getAllCategoryData,
  getAllCategoriesAction,
  updateCategoryStatusAction,
  deleteCategoryAction,
  createCategoryAction,
  updateCategoryAction,
}) => {
  const classes = useStyle();

  const [deleteCategoryOpen, setDeleteCategoryOpen] = useState(false);
  const [category_id, setcategory_id] = useState(null);
  const [category_name, setCategory_name] = useState("");
  const [rows, setRows] = useState(null);
  const [addAndEditBtnOpen, setAddAndEditBtnOpen] = useState(false);

  const handleAddAndEditBtnClose = (value) => {
    if (value && category_name !== "" && category_id === null) {
      createCategoryAction(category_name);
    }
    if (value && category_name !== "" && category_id !== null) {
      updateCategoryAction(utils.toBase64(category_id), category_name);
    }
    setCategory_name("");
    setcategory_id(null);
    setAddAndEditBtnOpen(false);
  };

  const handleAlertDialogClose = (isDelete) => {
    if (isDelete) {
      deleteCategoryAction(utils.toBase64(category_id));
    }
    setcategory_id(null);
    setDeleteCategoryOpen(false);
  };

  useEffect(() => {
    if (getAllCategoryData?.data?.status === "1") {
      setRows(
        getAllCategoryData?.data?.data?.map((item, key) => {
          return {
            sr_no: key + 1,
            category_name: item?.category_name,
            product_count: item?.product_count,
            status: item?.status ? (
              <Button
                variant="contained"
                style={{
                  background: "red",
                  color: "white",
                }}
                onClick={() =>
                  updateCategoryStatusAction(
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
                  updateCategoryStatusAction(
                    "active",
                    utils.toBase64(item?._id)
                  )
                }
              >
                Active
              </Button>
            ),
            edit: (
              <EditIcon
                style={{
                  fontSize: "2rem",
                  color: "blue",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setCategory_name(item?.category_name);
                  setcategory_id(item?._id);
                  setAddAndEditBtnOpen(true);
                }}
              />
            ),
            delete: (
              <DeleteIcon
                style={{
                  fontSize: "2rem",
                  color: "red",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setDeleteCategoryOpen(true);
                  setcategory_id(item?._id);
                }}
              />
            ),
          };
        })
      );
    }
  }, [getAllCategoryData]);

  useEffect(() => {
    getAllCategoriesAction();
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
        {getAllCategoryData?.loading ? (
          <div className={classes.prograssBar}>
            <CircularProgress />
          </div>
        ) : (
          rows !== null && (
            <MUIDataTable
              title="Categories"
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
        category_name={category_name}
        setCategory_name={setCategory_name}
        category_id={category_id}
      />
      <AlertDialog
        open={deleteCategoryOpen}
        setOpen={setDeleteCategoryOpen}
        handleAlertDialogClose={handleAlertDialogClose}
        dialogTitle="Are you confirm want to delete this category?"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  getAllCategoryData: state.CategoryData.getAllCategoryData,
  updateCategoryStatusData: state.CategoryData.updateCategoryStatusData,
});

const mapDispatchToProps = (dispatch) => ({
  getAllCategoriesAction: () =>
    dispatch({
      type: GET_ALL_CATEGORY_REQUEST,
    }),
  updateCategoryStatusAction: (status_type, category_id) =>
    dispatch({
      type: UPDATE_CATEGORY_STATUS_REQUEST,
      status_type,
      category_id,
    }),
  deleteCategoryAction: (category_id) =>
    dispatch({
      type: DELETE_CATEGORY_REQUEST,
      category_id,
    }),
  createCategoryAction: (category_name) =>
    dispatch({
      type: CREATE_CATEGORY_REQUEST,
      category_name,
    }),
  updateCategoryAction: (category_id, category_name) =>
    dispatch({
      type: UPDATE_CATEGORY_REQUEST,
      category_id,
      category_name,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminCat);
