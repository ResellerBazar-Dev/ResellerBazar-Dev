import instance from "../api";
import {
  GET_CATEGORIES_ENDPOINT,
  GET_ALL_CATEGORIES_ENDPOINT,
  UPDATE_CATEGORY_STATUS_ENDPOINT,
  DELETE_CATEGORY_ENDPOINT,
  CREATE_CATEGORY_ENDPOINT,
  UPDATE_CATEGORY_ENDPOINT,
} from "../ApiEndpoints/ApiEndpoint";

export const GetCategoryAction = () => {
  return instance.get(GET_CATEGORIES_ENDPOINT);
};

export const GetAllCategoryAction = () => {
  return instance.get(GET_ALL_CATEGORIES_ENDPOINT);
};

export const UpdateCategoryStatusAction = (status_type, category_id) => {
  return instance.get(
    `${UPDATE_CATEGORY_STATUS_ENDPOINT}/${status_type}/${category_id}`
  );
};

export const DeleteCategoryAction = (category_id) => {
  return instance.deleteM(`${DELETE_CATEGORY_ENDPOINT}/${category_id}`);
};

export const CreateCategoryAction = (category_name) => {
  return instance.post(CREATE_CATEGORY_ENDPOINT, { category_name });
};

export const UpdateCategoryAction = (category_id, category_name) => {
  return instance.post(`${UPDATE_CATEGORY_ENDPOINT}/${category_id}`, {
    category_name,
  });
};
