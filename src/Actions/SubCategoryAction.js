import instance from "../api";
import {
  GET_SUB_CATEGORIES_ENDPOINT,
  GET_ALL_SUB_CATEGORIES_ENDPOINT,
  CREATE_SUB_CATEGORY_ENDPOINT,
  UPDATE_SUB_CATEGORY_ENDPOINT,
  UPDATE_SUB_CATEGORY_STATUS_ENDPOINT,
  DELETE_SUB_CATEGORY_ENDPOINT,
} from "../ApiEndpoints/ApiEndpoint";

export const GetSubCategoryAction = () => {
  return instance.get(GET_SUB_CATEGORIES_ENDPOINT);
};

export const GetAllSubCategoryAction = () => {
  return instance.get(GET_ALL_SUB_CATEGORIES_ENDPOINT);
};

export const UpdateSubCategoryStatusAction = (status_type, sub_category_id) => {
  return instance.get(
    `${UPDATE_SUB_CATEGORY_STATUS_ENDPOINT}/${status_type}/${sub_category_id}`
  );
};

export const DeleteSubCategoryAction = (sub_category_id) => {
  return instance.deleteM(`${DELETE_SUB_CATEGORY_ENDPOINT}/${sub_category_id}`);
};

export const CreateSubCategoryAction = (category_id, sub_category_name) => {
  return instance.post(CREATE_SUB_CATEGORY_ENDPOINT, {
    category_id,
    sub_category_name,
  });
};

export const UpdateSubCategoryAction = (sub_category_id, sub_category_name) => {
  return instance.post(`${UPDATE_SUB_CATEGORY_ENDPOINT}/${sub_category_id}`, {
    sub_category_name,
  });
};
