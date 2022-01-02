import instance from "../api";
import {
  GET_ALL_BRAND_ENDPOINT,
  GET_BRAND_ENDPOINT,
  UPDATE_BRAND_STATUS_ENDPOINT,
  UPDATE_BRAND_ENDPOINT,
  CREATE_BRAND_ENDPOINT,
  DELETE_BRAND_ENDPOINT,
} from "../ApiEndpoints/ApiEndpoint";

export const GetBrandAction = () => {
  return instance.get(GET_BRAND_ENDPOINT);
};

export const GetAllBrandAction = () => {
  return instance.get(GET_ALL_BRAND_ENDPOINT);
};

export const UpdateBrandStatusAction = (status_type, brand_id) => {
  return instance.get(
    `${UPDATE_BRAND_STATUS_ENDPOINT}/${status_type}/${brand_id}`
  );
};

export const DeleteBrandAction = (brand_id) => {
  return instance.deleteM(`${DELETE_BRAND_ENDPOINT}/${brand_id}`);
};

export const CreateBrandAction = (brandData) => {
  return instance.post(CREATE_BRAND_ENDPOINT, brandData);
};

export const UpdateBrandAction = (brand_id, brandData) => {
  return instance.post(`${UPDATE_BRAND_ENDPOINT}/${brand_id}`, brandData);
};
