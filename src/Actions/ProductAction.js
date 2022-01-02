import instance from "../api";
import {
  NEW_PRODUCT_ENDPOINT,
  GET_PRODUCT_ENDPOINT,
  GET_USER_PRODUCT_ENDPOINT,
  GET_CATEGORY_PRODUCT_ENDPOINT,
  DELETE_PRODUCT_ENDPOINT,
  GET_PRODUCT_BY_ID_ENDPOINT,
  UPDATE_PRODUCT_ENDPOINT,
  DELETE_PRODUCT_IMAGE_ENDPOINT,
  UPDATE_PRODUCT_IMAGE_ENDPOINT,
  GET_ALL_PRODUCTS_ENDPOINT,
  UPDATE_PRODUCT_STATUS_ENDPOINT,
  ADD_WISHLIST_PRODUCT_ENDPOINT,
  GET_WISHLIST_PRODUCT_ENDPOINT,
  DELETE_WISHLIST_PRODUCT_ENDPOINT,
} from "../ApiEndpoints/ApiEndpoint";

export const NewProductAction = (productData) => {
  return instance.post(NEW_PRODUCT_ENDPOINT, productData);
};

export const GetProductAction = () => {
  return instance.get(GET_PRODUCT_ENDPOINT);
};

export const GetUserProductAction = (user_id) => {
  return instance.get(`${GET_USER_PRODUCT_ENDPOINT}/${user_id}`);
};

export const GetCategoryProductAction = (category_id, sortBy) => {
  return instance.post(`${GET_CATEGORY_PRODUCT_ENDPOINT}/${category_id}`, {
    sortBy,
  });
};

export const DeleteProductAction = (product_id) => {
  return instance.deleteM(`${DELETE_PRODUCT_ENDPOINT}/${product_id}`);
};

export const GetProductByIdAction = (product_id) => {
  return instance.get(`${GET_PRODUCT_BY_ID_ENDPOINT}/${product_id}`);
};

export const UpdateProductAction = (productData) => {
  return instance.post(
    `${UPDATE_PRODUCT_ENDPOINT}/${productData.product_id}`,
    productData
  );
};

export const DeleteProductImageAction = (product_id, image_index) => {
  return instance.post(`${DELETE_PRODUCT_IMAGE_ENDPOINT}/${product_id}`, {
    image_index,
  });
};

export const UpdateProductImageAction = (product_id, product_images) => {
  return instance.post(
    `${UPDATE_PRODUCT_IMAGE_ENDPOINT}/${product_id}`,
    product_images
  );
};

export const GetAllProductAction = () => {
  return instance.get(GET_ALL_PRODUCTS_ENDPOINT);
};

export const UpdateProductStatusAction = (status_type, product_id) => {
  return instance.get(
    `${UPDATE_PRODUCT_STATUS_ENDPOINT}/${status_type}/${product_id}`
  );
};

export const AddWishlistProductAction = (product_id) => {
  return instance.get(`${ADD_WISHLIST_PRODUCT_ENDPOINT}/${product_id}`);
};

export const GetWishlistProductAction = () => {
  return instance.get(GET_WISHLIST_PRODUCT_ENDPOINT);
};

export const DeleteWishlistProductAction = (wishlist_id) => {
  return instance.get(`${DELETE_WISHLIST_PRODUCT_ENDPOINT}/${wishlist_id}`);
};
