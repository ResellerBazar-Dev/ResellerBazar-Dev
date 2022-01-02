import React, { useEffect } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { DialogContent, TextField, Button, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { connect } from "react-redux";
import { GET_ALL_SUB_CATEGORY_REQUEST } from "../../Constants/SubCategoryConstant";
import { GET_CATEGORY_REQUEST } from "../../Constants/CategoryConstant";

const useStyle = makeStyles((theme) => ({
  Dialog: {
    "&>div": {
      "&>div": {
        width: "35%",
      },
    },
  },
  DialogContent: {
    "&>div": {
      marginTop: "20px",
      marginBottom: "20px",
      width: "100%",
    },
  },
  catLink: {
    marginTop: "20px",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
      textDecoration: "underline",
    },
  },
  catList: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  data: {
    marginLeft: "50px",
    marginTop: "20px",
  },
}));

const autos = [
  { name: "suzuki" },
  { name: "hyundai" },
  { name: "tata" },
  { name: "toyota" },
  { name: "honda" },
];
const autos2 = [
  { name: "suzuki" },
  { name: "hyundai" },
  { name: "tata" },
  { name: "toyota" },
  { name: "honda" },
  { name: "honda" },
];
const MoreCategory = ({
  getAllSubCategoryData,
  getCategoryData,
  GetCategoryAction,
  GetAllSubCategoryAction,
  onClose,
  open,
}) => {
  const classes = useStyle();

  // const { onClose, open } = props;

  const handleClose = () => {
    onClose(true);
  };

  useEffect(() => {
    GetCategoryAction();
    GetAllSubCategoryAction();
  }, []);

  return (
    <div>
      <Dialog open={open} onClose={handleClose} className={classes.Dialog}>
        <DialogContent className={classes.DialogContent}>
          <div className={classes.catList}>
            <div className={classes.data}>
              {getCategoryData?.data?.data?.map((item, key) => (
                <Typography variant="h5">{item?.category_name}</Typography>
              ))}
              {getAllSubCategoryData?.data?.data?.category_name !==
              getCategoryData?.data?.data?.category_name
                ? null
                : getAllSubCategoryData?.data?.data?.map((item, key) => (
                    <Typography variant="subtitle1" className={classes.catLink}>
                      {item?.sub_category_name}
                    </Typography>
                  ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categoryData: state.CategoryData.getCategoryData,
  getAllSubCategoryData: state.SubCategoryData.getAllSubCategoryData,
});
const mapDispatchToProps = (dispatch) => ({
  GetAllSubCategoryAction: () =>
    dispatch({
      type: GET_ALL_SUB_CATEGORY_REQUEST,
    }),
  GetCategoryAction: () =>
    dispatch({
      type: GET_CATEGORY_REQUEST,
    }),
});
export default connect(mapStateToProps, mapDispatchToProps)(MoreCategory);
