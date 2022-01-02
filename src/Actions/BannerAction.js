import instance from "../api";
import {
  GET_BANNER_ENDPOINT,
  GET_ALL_BANNERS_ENDPOINT,
  UPDATE_BANNER_IMAGE_ENDPOINT,
  UPDATE_BANNER_STATUS_ENDPOINT,
  DELETE_BANNER_ENDPOINT,
} from "../ApiEndpoints/ApiEndpoint";

export const GetBannerAction = (banner_page_location) => {
  return instance.post(GET_BANNER_ENDPOINT, {
    banner_page_location,
  });
};

export const GetAllBannerAction = () => {
  return instance.get(GET_ALL_BANNERS_ENDPOINT);
};

export const UpdateBannerImageAction = (banner_id, formData) => {
  return instance.post(
    `${UPDATE_BANNER_IMAGE_ENDPOINT}/${banner_id}`,
    formData
  );
};

export const UpdateBannerStatusAction = (banner_id, status_type) => {
  return instance.get(
    `${UPDATE_BANNER_STATUS_ENDPOINT}/${status_type}/${banner_id}`
  );
};

export const DeleteBannerAction = (banner_id) => {
  return instance.deleteM(`${DELETE_BANNER_ENDPOINT}/${banner_id}`);
};
