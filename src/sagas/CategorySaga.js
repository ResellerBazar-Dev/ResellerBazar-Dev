import { put, takeEvery, call } from "@redux-saga/core/effects";
import {
  GetCategoryAction,
  GetAllCategoryAction,
  UpdateCategoryStatusAction,
  DeleteCategoryAction,
  CreateCategoryAction,
  UpdateCategoryAction,
} from "../Actions/CategoryAction";
import { NotificationManager } from "react-notifications";
import {
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_FAIL,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_REQUEST,
  GET_ALL_CATEGORY_FAIL,
  UPDATE_CATEGORY_STATUS_SUCCESS,
  UPDATE_CATEGORY_STATUS_REQUEST,
  UPDATE_CATEGORY_STATUS_FAIL,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_FAIL,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_FAIL,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_FAIL,
} from "../Constants/CategoryConstant";

function* GetCategoryWorker() {
  const response = yield call(GetCategoryAction);
  try {
    if (response?.status === "1") {
      yield put({ type: GET_CATEGORY_SUCCESS, data: response });
    } else {
      yield put({ type: GET_CATEGORY_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: GET_CATEGORY_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* GetCategoryWatcher() {
  yield takeEvery(GET_CATEGORY_REQUEST, GetCategoryWorker);
}

function* GetAllCategoryWorker() {
  const response = yield call(GetAllCategoryAction);
  try {
    if (response?.status === "1") {
      yield put({ type: GET_ALL_CATEGORY_SUCCESS, data: response });
    } else {
      yield put({ type: GET_ALL_CATEGORY_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: GET_ALL_CATEGORY_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* GetAllCategoryWatcher() {
  yield takeEvery(GET_ALL_CATEGORY_REQUEST, GetAllCategoryWorker);
}

function* UpdateCategoryStatusWorker({ status_type, category_id }) {
  const response = yield call(
    UpdateCategoryStatusAction,
    status_type,
    category_id
  );
  try {
    if (response?.status === "1") {
      yield put({ type: UPDATE_CATEGORY_STATUS_SUCCESS, data: response });
      const getAllCategoryResponse = yield call(GetAllCategoryAction);
      if (getAllCategoryResponse?.status === "1") {
        yield put({
          type: GET_ALL_CATEGORY_SUCCESS,
          data: getAllCategoryResponse,
        });
      } else {
        yield put({
          type: GET_ALL_CATEGORY_FAIL,
          data: getAllCategoryResponse?.message,
        });
      }
    } else {
      yield put({ type: UPDATE_CATEGORY_STATUS_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: UPDATE_CATEGORY_STATUS_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* UpdateCategoryStatusWatcher() {
  yield takeEvery(UPDATE_CATEGORY_STATUS_REQUEST, UpdateCategoryStatusWorker);
}

function* DeleteCategoryWorker({ category_id }) {
  const response = yield call(DeleteCategoryAction, category_id);
  try {
    if (response?.status === "1") {
      yield put({ type: DELETE_CATEGORY_SUCCESS, data: response });
      const getAllCategoryResponse = yield call(GetAllCategoryAction);
      if (getAllCategoryResponse?.status === "1") {
        yield put({
          type: GET_ALL_CATEGORY_SUCCESS,
          data: getAllCategoryResponse,
        });
      } else {
        yield put({
          type: GET_ALL_CATEGORY_FAIL,
          data: getAllCategoryResponse?.message,
        });
      }
    } else {
      yield put({ type: DELETE_CATEGORY_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: DELETE_CATEGORY_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* DeleteCategoryWatcher() {
  yield takeEvery(DELETE_CATEGORY_REQUEST, DeleteCategoryWorker);
}

function* CreateCategoryWorker({ category_name }) {
  const response = yield call(CreateCategoryAction, category_name);
  try {
    if (response?.status === "1") {
      yield put({ type: CREATE_CATEGORY_SUCCESS, data: response });
      const getAllCategoryResponse = yield call(GetAllCategoryAction);
      if (getAllCategoryResponse?.status === "1") {
        yield put({
          type: GET_ALL_CATEGORY_SUCCESS,
          data: getAllCategoryResponse,
        });
      } else {
        yield put({
          type: GET_ALL_CATEGORY_FAIL,
          data: getAllCategoryResponse?.message,
        });
      }
    } else {
      yield put({ type: CREATE_CATEGORY_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: CREATE_CATEGORY_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* CreateCategoryWatcher() {
  yield takeEvery(CREATE_CATEGORY_REQUEST, CreateCategoryWorker);
}

function* UpdateCategoryWorker({ category_id, category_name }) {
  const response = yield call(UpdateCategoryAction, category_id, category_name);
  try {
    if (response?.status === "1") {
      yield put({ type: UPDATE_CATEGORY_SUCCESS, data: response });
      const getAllCategoryResponse = yield call(GetAllCategoryAction);
      if (getAllCategoryResponse?.status === "1") {
        yield put({
          type: GET_ALL_CATEGORY_SUCCESS,
          data: getAllCategoryResponse,
        });
      } else {
        yield put({
          type: GET_ALL_CATEGORY_FAIL,
          data: getAllCategoryResponse?.message,
        });
      }
    } else {
      yield put({ type: UPDATE_CATEGORY_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: UPDATE_CATEGORY_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* UpdateCategoryWatcher() {
  yield takeEvery(UPDATE_CATEGORY_REQUEST, UpdateCategoryWorker);
}
