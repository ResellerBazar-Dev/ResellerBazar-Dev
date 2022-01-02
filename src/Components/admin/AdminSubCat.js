import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  CircularProgress,
  Button,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { connect } from "react-redux";
import {
  CREATE_SUB_CATEGORY_REQUEST,
  DELETE_SUB_CATEGORY_REQUEST,
  GET_ALL_SUB_CATEGORY_REQUEST,
  UPDATE_SUB_CATEGORY_REQUEST,
  UPDATE_SUB_CATEGORY_STATUS_REQUEST,
} from "../../Constants/SubCategoryConstant";
import AlertDialog from "../CommonComponents/AlertDialog";
import utils from "../../utils/commonFunctions";
import { GET_ALL_CATEGORY_REQUEST } from "../../Constants/CategoryConstant";
import MUIDataTable from "mui-datatables";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
    name: "sub_category_name",
    label: "Sub Category Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "product_count",
    label: "Sub Category Itmes",
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
  handleAddAndEditBtnClose,
  category_id,
  setcategory_id,
  sub_category_name,
  setSub_category_name,
  sub_category_id,
  getAllCategoryData,
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
        {sub_category_id !== null
          ? "Update Sub Category"
          : "Add New Sub Category"}
      </DialogTitle>
      <DialogContent>
        {sub_category_id === null && (
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-standard-label">
              Category Name
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={category_id}
              onChange={(e) => setcategory_id(e.target.value)}
              label="Category Name"
            >
              {getAllCategoryData?.data?.data?.map((item, key) => {
                return (
                  <MenuItem key={key} value={item?._id}>
                    {item?.category_name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        )}
        <TextField
          margin="dense"
          id="sub category_name"
          label="Sub category name"
          type="text"
          fullWidth
          variant="standard"
          value={sub_category_name}
          onChange={(e) => setSub_category_name(e.target.value)}
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
          {sub_category_id !== null ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const AdminSubCat = ({
  getAllSubCategoriesData,
  getAllSubCategoriesAction,
  updateSubCategoryStatusAction,
  deleteSubCategoryAction,
  createSubCategoryAction,
  updateSubCategoryAction,
  getAllCategoriesAction,
  getAllCategoryData,
}) => {
  const classes = useStyle();

  const [deleteSubCategoryOpen, setDeleteSubCategoryOpen] = useState(false);
  const [category_id, setcategory_id] = useState(null);
  const [sub_category_id, setSub_category_id] = useState(null);
  const [sub_category_name, setSub_category_name] = useState("");
  const [rows, setRows] = useState(null);
  const [addAndEditBtnOpen, setAddAndEditBtnOpen] = useState(false);

  const handleAlertDialogClose = (isDelete) => {
    if (isDelete && sub_category_id !== null) {
      deleteSubCategoryAction(utils.toBase64(sub_category_id));
    }
    setSub_category_id("");
    setDeleteSubCategoryOpen(false);
  };

  const handleAddAndEditBtnClose = (value) => {
    if (
      value &&
      category_id !== null &&
      sub_category_name !== "" &&
      sub_category_id === null
    ) {
      createSubCategoryAction(category_id, sub_category_name);
    }
    if (value && sub_category_name !== "" && sub_category_id !== null) {
      updateSubCategoryAction(
        utils.toBase64(sub_category_id),
        sub_category_name
      );
    }
    setcategory_id(null);
    setSub_category_id(null);
    setSub_category_name("");
    setAddAndEditBtnOpen(false);
  };

  useEffect(() => {
    if (getAllSubCategoriesData?.data?.status === "1") {
      setRows(
        getAllSubCategoriesData?.data?.data?.map((item, key) => {
          return {
            sr_no: key + 1,
            category_name: item?.category_name[0],
            sub_category_name: item?.sub_category_name,
            product_count: item?.product_count,
            status: item?.status ? (
              <Button
                variant="contained"
                style={{
                  background: "red",
                  color: "white",
                }}
                onClick={() =>
                  updateSubCategoryStatusAction(
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
                  updateSubCategoryStatusAction(
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
                  setSub_category_name(item?.sub_category_name);
                  setSub_category_id(item?._id);
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
                  setDeleteSubCategoryOpen(true);
                  setSub_category_id(item?._id);
                }}
              />
            ),
          };
        })
      );
    }
  }, [getAllSubCategoriesData]);

  useEffect(() => {
    getAllSubCategoriesAction();
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
              title="Sub Categories"
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
        sub_category_name={sub_category_name}
        setSub_category_name={setSub_category_name}
        category_id={category_id}
        setcategory_id={setcategory_id}
        sub_category_id={sub_category_id}
        getAllCategoryData={getAllCategoryData}
      />
      <AlertDialog
        open={deleteSubCategoryOpen}
        setOpen={setDeleteSubCategoryOpen}
        handleAlertDialogClose={handleAlertDialogClose}
        dialogTitle="Are you confirm want to delete this sub category?"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  getAllSubCategoriesData: state.SubCategoryData.getAllSubCategoryData,
  getAllCategoryData: state.CategoryData.getAllCategoryData,
});

const mapDispatchToProps = (dispatch) => ({
  getAllCategoriesAction: () =>
    dispatch({
      type: GET_ALL_CATEGORY_REQUEST,
    }),
  getAllSubCategoriesAction: () =>
    dispatch({
      type: GET_ALL_SUB_CATEGORY_REQUEST,
    }),
  updateSubCategoryStatusAction: (status_type, sub_category_id) =>
    dispatch({
      type: UPDATE_SUB_CATEGORY_STATUS_REQUEST,
      status_type,
      sub_category_id,
    }),
  deleteSubCategoryAction: (sub_category_id) =>
    dispatch({
      type: DELETE_SUB_CATEGORY_REQUEST,
      sub_category_id,
    }),
  createSubCategoryAction: (category_id, sub_category_name) =>
    dispatch({
      type: CREATE_SUB_CATEGORY_REQUEST,
      category_id,
      sub_category_name,
    }),
  updateSubCategoryAction: (sub_category_id, sub_category_name) =>
    dispatch({
      type: UPDATE_SUB_CATEGORY_REQUEST,
      sub_category_id,
      sub_category_name,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminSubCat);
