import { put, takeEvery, call } from "@redux-saga/core/effects";
import {
  GetAllBrandAction,
  GetBrandAction,
  UpdateBrandAction,
  UpdateBrandStatusAction,
  CreateBrandAction,
  DeleteBrandAction,
} from "../Actions/BrandAction";
import { NotificationManager } from "react-notifications";
import {
  GET_All_BRAND_FAIL,
  GET_All_BRAND_SUCCESS,
  GET_All_BRAND_REQUEST,
  GET_BRAND_FAIL,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
  UPDATE_BRAND_STATUS_FAIL,
  UPDATE_BRAND_STATUS_REQUEST,
  UPDATE_BRAND_STATUS_SUCCESS,
  DELETE_BRAND_FAIL,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  CREATE_BRAND_FAIL,
  CREATE_BRAND_REQUEST,
  CREATE_BRAND_SUCCESS,
  UPDATE_BRAND_FAIL,
  UPDATE_BRAND_REQUEST,
  UPDATE_BRAND_SUCCESS,
} from "../Constants/BrandConstant";

function* GetAllBrandWorker() {
  const response = yield call(GetAllBrandAction);
  try {
    if (response?.status === "1") {
      yield put({ type: GET_All_BRAND_SUCCESS, data: response });
    } else {
      yield put({ type: GET_All_BRAND_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: GET_All_BRAND_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* GetAllBrandWatcher() {
  yield takeEvery(GET_All_BRAND_REQUEST, GetAllBrandWorker);
}

function* GetBrandWorker() {
  const response = yield call(GetBrandAction);
  try {
    if (response?.status === "1") {
      yield put({ type: GET_BRAND_SUCCESS, data: response });
    } else {
      yield put({ type: GET_BRAND_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: GET_BRAND_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* GetBrandWatcher() {
  yield takeEvery(GET_BRAND_REQUEST, GetBrandWorker);
}

function* UpdateBrandStatusWorker({ status_type, brand_id }) {
  const response = yield call(UpdateBrandStatusAction, status_type, brand_id);
  try {
    if (response?.status === "1") {
      yield put({ type: UPDATE_BRAND_STATUS_SUCCESS, data: response });
      const getAllBrandResponse = yield call(GetAllBrandAction);
      if (getAllBrandResponse?.status === "1") {
        yield put({
          type: GET_All_BRAND_SUCCESS,
          data: getAllBrandResponse,
        });
      } else {
        yield put({
          type: GET_All_BRAND_FAIL,
          data: getAllBrandResponse?.message,
        });
      }
    } else {
      yield put({ type: UPDATE_BRAND_STATUS_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: UPDATE_BRAND_STATUS_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* UpdateBrandStatusWatcher() {
  yield takeEvery(UPDATE_BRAND_STATUS_REQUEST, UpdateBrandStatusWorker);
}

function* DeleteBrandWorker({ brand_id }) {
  const response = yield call(DeleteBrandAction, brand_id);
  try {
    if (response?.status === "1") {
      yield put({ type: DELETE_BRAND_SUCCESS, data: response });
      const getAllBrandResponse = yield call(GetAllBrandAction);
      if (getAllBrandResponse?.status === "1") {
        yield put({
          type: GET_All_BRAND_SUCCESS,
          data: getAllBrandResponse,
        });
      } else {
        yield put({
          type: GET_All_BRAND_FAIL,
          data: getAllBrandResponse?.message,
        });
      }
    } else {
      yield put({ type: DELETE_BRAND_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: DELETE_BRAND_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* DeleteBrandWatcher() {
  yield takeEvery(DELETE_BRAND_REQUEST, DeleteBrandWorker);
}

function* CreateBrandWorker({ brandData }) {
  const response = yield call(CreateBrandAction, brandData);
  try {
    if (response?.status === "1") {
      yield put({ type: CREATE_BRAND_SUCCESS, data: response });
      const getAllBrandResponse = yield call(GetAllBrandAction);
      if (getAllBrandResponse?.status === "1") {
        yield put({
          type: GET_All_BRAND_SUCCESS,
          data: getAllBrandResponse,
        });
      } else {
        yield put({
          type: GET_All_BRAND_FAIL,
          data: getAllBrandResponse?.message,
        });
      }
    } else {
      yield put({ type: CREATE_BRAND_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: CREATE_BRAND_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* CreateBrandWatcher() {
  yield takeEvery(CREATE_BRAND_REQUEST, CreateBrandWorker);
}

function* UpdateBrandWorker({ brand_id, brandData }) {
  const response = yield call(UpdateBrandAction, brand_id, brandData);
  try {
    if (response?.status === "1") {
      yield put({ type: UPDATE_BRAND_SUCCESS, data: response });
      const getAllBrandResponse = yield call(GetAllBrandAction);
      if (getAllBrandResponse?.status === "1") {
        yield put({
          type: GET_All_BRAND_SUCCESS,
          data: getAllBrandResponse,
        });
      } else {
        yield put({
          type: GET_All_BRAND_FAIL,
          data: getAllBrandResponse?.message,
        });
      }
    } else {
      yield put({ type: UPDATE_BRAND_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: UPDATE_BRAND_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* UpdateBrandWatcher() {
  yield takeEvery(UPDATE_BRAND_REQUEST, UpdateBrandWorker);
}
