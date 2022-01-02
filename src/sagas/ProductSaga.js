import { put, takeEvery, call } from "@redux-saga/core/effects";
import {
  NewProductAction,
  GetProductAction,
  GetUserProductAction,
  GetCategoryProductAction,
  DeleteProductAction,
  GetProductByIdAction,
  UpdateProductAction,
  DeleteProductImageAction,
  UpdateProductImageAction,
  GetAllProductAction,
  UpdateProductStatusAction,
  AddWishlistProductAction,
  GetWishlistProductAction,
  DeleteWishlistProductAction,
} from "../Actions/ProductAction";
import { NotificationManager } from "react-notifications";
import {
  NEW_PRODUCT_FAIL,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_REQUEST,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_REQUEST,
  GET_USER_PRODUCT_SUCCESS,
  GET_USER_PRODUCT_REQUEST,
  GET_USER_PRODUCT_FAIL,
  GET_CATEGORY_PRODUCT_SUCCESS,
  GET_CATEGORY_PRODUCT_REQUEST,
  GET_CATEGORY_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_FAIL,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCT_BY_ID_FAIL,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_FAIL,
  DELETE_PRODUCT_IMAGE_SUCCESS,
  DELETE_PRODUCT_IMAGE_REQUEST,
  DELETE_PRODUCT_IMAGE_FAIL,
  UPDATE_PRODUCT_IMAGE_FAIL,
  UPDATE_PRODUCT_IMAGE_SUCCESS,
  UPDATE_PRODUCT_IMAGE_REQUEST,
  GET_ALL_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_REQUEST,
  GET_ALL_PRODUCT_FAIL,
  UPDATE_PRODUCT_STATUS_SUCCESS,
  UPDATE_PRODUCT_STATUS_REQUEST,
  UPDATE_PRODUCT_STATUS_FAIL,
  ADD_WISHLIST_PRODUCT_REQUEST,
  ADD_WISHLIST_PRODUCT_SUCCESS,
  ADD_WISHLIST_PRODUCT_FAIL,
  GET_WISHLIST_PRODUCT_REQUEST,
  GET_WISHLIST_PRODUCT_SUCCESS,
  GET_WISHLIST_PRODUCT_FAIL,
  DELETE_WISHLIST_PRODUCT_REQUEST,
  DELETE_WISHLIST_PRODUCT_SUCCESS,
  DELETE_WISHLIST_PRODUCT_FAIL,
} from "../Constants/ProductConstant";

function* NewProductWorker({ productData }) {
  const response = yield call(NewProductAction, productData);
  try {
    if (response?.status === "1") {
      yield put({ type: NEW_PRODUCT_SUCCESS, data: response });
      NotificationManager.success(response?.message, "", 3000);
    } else {
      yield put({ type: NEW_PRODUCT_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: NEW_PRODUCT_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* NewProductWatcher() {
  yield takeEvery(NEW_PRODUCT_REQUEST, NewProductWorker);
}

function* GetProductWorker() {
  const response = yield call(GetProductAction);
  try {
    if (response?.status === "1") {
      yield put({ type: GET_PRODUCT_SUCCESS, data: response });
    } else {
      yield put({ type: GET_PRODUCT_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: GET_PRODUCT_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* GetProductWatcher() {
  yield takeEvery(GET_PRODUCT_REQUEST, GetProductWorker);
}

function* GetUserProductWorker({ user_id }) {
  const response = yield call(GetUserProductAction, user_id);
  try {
    if (response?.status === "1") {
      yield put({ type: GET_USER_PRODUCT_SUCCESS, data: response });
    } else {
      yield put({ type: GET_USER_PRODUCT_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: GET_USER_PRODUCT_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* GetUserProductWatcher() {
  yield takeEvery(GET_USER_PRODUCT_REQUEST, GetUserProductWorker);
}

function* GetCategoryProductWorker({ category_id, sortBy }) {
  const response = yield call(GetCategoryProductAction, category_id, sortBy);
  try {
    if (response?.status === "1") {
      yield put({ type: GET_CATEGORY_PRODUCT_SUCCESS, data: response });
    } else {
      yield put({ type: GET_CATEGORY_PRODUCT_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: GET_CATEGORY_PRODUCT_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* GetCategoryProductWatcher() {
  yield takeEvery(GET_CATEGORY_PRODUCT_REQUEST, GetCategoryProductWorker);
}

function* DeleteProductWorker({ product_id }) {
  const response = yield call(DeleteProductAction, product_id);
  try {
    if (response?.status === "1") {
      yield put({ type: DELETE_PRODUCT_SUCCESS, data: response });
    } else {
      yield put({ type: DELETE_PRODUCT_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: DELETE_PRODUCT_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* DeleteProductWatcher() {
  yield takeEvery(DELETE_PRODUCT_REQUEST, DeleteProductWorker);
}

function* GetProductByIdWorker({ product_id }) {
  const response = yield call(GetProductByIdAction, product_id);
  try {
    if (response?.status === "1") {
      yield put({ type: GET_PRODUCT_BY_ID_SUCCESS, data: response });
    } else {
      yield put({ type: GET_PRODUCT_BY_ID_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: GET_PRODUCT_BY_ID_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* GetProductByIdWatcher() {
  yield takeEvery(GET_PRODUCT_BY_ID_REQUEST, GetProductByIdWorker);
}

function* UpdateProductWorker({ productData }) {
  const response = yield call(UpdateProductAction, productData);
  try {
    if (response?.status === "1") {
      yield put({ type: UPDATE_PRODUCT_SUCCESS, data: response });
    } else {
      yield put({ type: UPDATE_PRODUCT_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: UPDATE_PRODUCT_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* UpdateProductWatcher() {
  yield takeEvery(UPDATE_PRODUCT_REQUEST, UpdateProductWorker);
}

function* DeleteProductImageWorker({ product_id, image_index }) {
  const response = yield call(
    DeleteProductImageAction,
    product_id,
    image_index
  );
  try {
    if (response?.status === "1") {
      yield put({ type: DELETE_PRODUCT_IMAGE_SUCCESS, data: response });
    } else {
      yield put({ type: DELETE_PRODUCT_IMAGE_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: DELETE_PRODUCT_IMAGE_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* DeleteProductImageWatcher() {
  yield takeEvery(DELETE_PRODUCT_IMAGE_REQUEST, DeleteProductImageWorker);
}

function* UpdateProductImageWorker({ product_id, product_images }) {
  const response = yield call(
    UpdateProductImageAction,
    product_id,
    product_images
  );
  try {
    if (response?.status === "1") {
      yield put({ type: UPDATE_PRODUCT_IMAGE_SUCCESS, data: response });
    } else {
      yield put({ type: UPDATE_PRODUCT_IMAGE_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: UPDATE_PRODUCT_IMAGE_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* UpdateProductImageWatcher() {
  yield takeEvery(UPDATE_PRODUCT_IMAGE_REQUEST, UpdateProductImageWorker);
}

function* GetAllProductWorker() {
  const response = yield call(GetAllProductAction);
  try {
    if (response?.status === "1") {
      yield put({ type: GET_ALL_PRODUCT_SUCCESS, data: response });
    } else {
      yield put({ type: GET_ALL_PRODUCT_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: GET_ALL_PRODUCT_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* GetAllProductWatcher() {
  yield takeEvery(GET_ALL_PRODUCT_REQUEST, GetAllProductWorker);
}

function* UpdateProductStatusWorker({ status_type, product_id }) {
  const response = yield call(
    UpdateProductStatusAction,
    status_type,
    product_id
  );
  try {
    if (response?.status === "1") {
      yield put({ type: UPDATE_PRODUCT_STATUS_SUCCESS, data: response });
      const getAllProductData = yield call(GetAllProductAction);
      if (getAllProductData?.status === "1") {
        yield put({ type: GET_ALL_PRODUCT_SUCCESS, data: getAllProductData });
      } else {
        yield put({
          type: GET_ALL_PRODUCT_FAIL,
          data: getAllProductData?.message,
        });
      }
    } else {
      yield put({ type: UPDATE_PRODUCT_STATUS_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: UPDATE_PRODUCT_STATUS_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* UpdateProductStatusWatcher() {
  yield takeEvery(UPDATE_PRODUCT_STATUS_REQUEST, UpdateProductStatusWorker);
}

function* AddWishlistProductWorker({ product_id }) {
  const response = yield call(AddWishlistProductAction, product_id);
  try {
    if (response?.status === "1") {
      yield put({ type: ADD_WISHLIST_PRODUCT_SUCCESS, data: response });
    } else {
      yield put({ type: ADD_WISHLIST_PRODUCT_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: ADD_WISHLIST_PRODUCT_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* AddWishlistProductWatcher() {
  yield takeEvery(ADD_WISHLIST_PRODUCT_REQUEST, AddWishlistProductWorker);
}

function* GetWishlistProductWorker() {
  const response = yield call(GetWishlistProductAction);
  try {
    if (response?.status === "1") {
      yield put({ type: GET_WISHLIST_PRODUCT_SUCCESS, data: response });
    } else {
      yield put({ type: GET_WISHLIST_PRODUCT_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: GET_WISHLIST_PRODUCT_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* GetWishlistProductWatcher() {
  yield takeEvery(GET_WISHLIST_PRODUCT_REQUEST, GetWishlistProductWorker);
}

function* DeleteWishlistProductWorker({ wishlist_id }) {
  const response = yield call(DeleteWishlistProductAction, wishlist_id);
  try {
    if (response?.status === "1") {
      yield put({ type: DELETE_WISHLIST_PRODUCT_SUCCESS, data: response });
    } else {
      yield put({
        type: DELETE_WISHLIST_PRODUCT_FAIL,
        data: response?.message,
      });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: DELETE_WISHLIST_PRODUCT_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* DeleteWishlistProductWatcher() {
  yield takeEvery(DELETE_WISHLIST_PRODUCT_REQUEST, DeleteWishlistProductWorker);
}
