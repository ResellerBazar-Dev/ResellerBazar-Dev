import {
  FormControl,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { GET_CATEGORY_REQUEST } from "../../Constants/CategoryConstant";
import { GET_SUB_CATEGORY_REQUEST } from "../../Constants/SubCategoryConstant";

const useStyle = makeStyles((theme) => ({}));

export const CategoryComponents = ({
  category_id,
  setCategory_id,
  sub_category,
  setSub_category,
  categoryData,
  sub_category_id,
  setSub_category_id,
  subCategoryData,
  GetCategoryAction,
  GetSubCategoryAction,
  fieldDiv,
  selectRoot,
}) => {
  const classes = useStyle();

  useEffect(() => {
    if (category_id !== null) {
      const tempSubCategory = subCategoryData?.data?.data?.filter((item) => {
        return item.category_id === category_id;
      });
      setSub_category(tempSubCategory);
    }
  }, [category_id]);

  useEffect(() => {
    GetCategoryAction();
    GetSubCategoryAction();
  }, []);

  return (
    <>
      <div className={fieldDiv}>
        <Typography>Category *</Typography>
        <FormControl variant="standard" className={selectRoot}>
          <Select
            value={category_id}
            onChange={(e) => setCategory_id(e.target.value)}
            disableUnderline
          >
            {categoryData?.data?.data?.map((item, key) => {
              return (
                <MenuItem key={key} value={item._id}>
                  {item.category_name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <div className={fieldDiv}>
        <Typography>Sub Category *</Typography>
        <FormControl variant="standard" className={selectRoot}>
          <Select
            value={sub_category_id}
            onChange={(e) => setSub_category_id(e.target.value)}
            disableUnderline
          >
            {sub_category?.map((item, key) => {
              return (
                <MenuItem key={key} value={item._id}>
                  {item.sub_category_name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  categoryData: state.CategoryData.getCategoryData,
  subCategoryData: state.SubCategoryData.getSubCategoryData,
});

const mapDispatchToProps = (dispatch) => ({
  GetCategoryAction: () =>
    dispatch({
      type: GET_CATEGORY_REQUEST,
    }),
  GetSubCategoryAction: () =>
    dispatch({
      type: GET_SUB_CATEGORY_REQUEST,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryComponents);
