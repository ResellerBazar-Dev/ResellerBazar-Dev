import { put, takeEvery, call } from "@redux-saga/core/effects";
import {
  GetSubCategoryAction,
  GetAllSubCategoryAction,
  UpdateSubCategoryAction,
  UpdateSubCategoryStatusAction,
  DeleteSubCategoryAction,
  CreateSubCategoryAction,
} from "../Actions/SubCategoryAction";
import { NotificationManager } from "react-notifications";
import {
  GET_SUB_CATEGORY_FAIL,
  GET_SUB_CATEGORY_REQUEST,
  GET_SUB_CATEGORY_SUCCESS,
  GET_ALL_SUB_CATEGORY_SUCCESS,
  GET_ALL_SUB_CATEGORY_REQUEST,
  GET_ALL_SUB_CATEGORY_FAIL,
  UPDATE_SUB_CATEGORY_STATUS_SUCCESS,
  UPDATE_SUB_CATEGORY_STATUS_REQUEST,
  UPDATE_SUB_CATEGORY_STATUS_FAIL,
  DELETE_SUB_CATEGORY_SUCCESS,
  DELETE_SUB_CATEGORY_REQUEST,
  DELETE_SUB_CATEGORY_FAIL,
  CREATE_SUB_CATEGORY_SUCCESS,
  CREATE_SUB_CATEGORY_REQUEST,
  CREATE_SUB_CATEGORY_FAIL,
  UPDATE_SUB_CATEGORY_SUCCESS,
  UPDATE_SUB_CATEGORY_REQUEST,
  UPDATE_SUB_CATEGORY_FAIL,
} from "../Constants/SubCategoryConstant";

function* GetSubCategoryWorker() {
  const response = yield call(GetSubCategoryAction);
  try {
    if (response?.status === "1") {
      yield put({ type: GET_SUB_CATEGORY_SUCCESS, data: response });
    } else {
      yield put({ type: GET_SUB_CATEGORY_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: GET_SUB_CATEGORY_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* GetSubCategoryWatcher() {
  yield takeEvery(GET_SUB_CATEGORY_REQUEST, GetSubCategoryWorker);
}

function* GetAllSubCategoryWorker() {
  const response = yield call(GetAllSubCategoryAction);
  try {
    if (response?.status === "1") {
      yield put({ type: GET_ALL_SUB_CATEGORY_SUCCESS, data: response });
    } else {
      yield put({ type: GET_ALL_SUB_CATEGORY_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: GET_ALL_SUB_CATEGORY_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* GetAllSubCategoryWatcher() {
  yield takeEvery(GET_ALL_SUB_CATEGORY_REQUEST, GetAllSubCategoryWorker);
}

function* UpdateSubCategoryStatusWorker({ status_type, sub_category_id }) {
  const response = yield call(
    UpdateSubCategoryStatusAction,
    status_type,
    sub_category_id
  );
  try {
    if (response?.status === "1") {
      yield put({ type: UPDATE_SUB_CATEGORY_STATUS_SUCCESS, data: response });
      const getAllSubCategoryResponse = yield call(GetAllSubCategoryAction);
      if (getAllSubCategoryResponse?.status === "1") {
        yield put({
          type: GET_ALL_SUB_CATEGORY_SUCCESS,
          data: getAllSubCategoryResponse,
        });
      } else {
        yield put({
          type: GET_ALL_SUB_CATEGORY_FAIL,
          data: getAllSubCategoryResponse?.message,
        });
      }
    } else {
      yield put({
        type: UPDATE_SUB_CATEGORY_STATUS_FAIL,
        data: response?.message,
      });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: UPDATE_SUB_CATEGORY_STATUS_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* UpdateSubCategoryStatusWatcher() {
  yield takeEvery(
    UPDATE_SUB_CATEGORY_STATUS_REQUEST,
    UpdateSubCategoryStatusWorker
  );
}

function* DeleteSubCategoryWorker({ sub_category_id }) {
  const response = yield call(DeleteSubCategoryAction, sub_category_id);
  try {
    if (response?.status === "1") {
      yield put({ type: DELETE_SUB_CATEGORY_SUCCESS, data: response });
      const getAllSubCategoryResponse = yield call(GetAllSubCategoryAction);
      if (getAllSubCategoryResponse?.status === "1") {
        yield put({
          type: GET_ALL_SUB_CATEGORY_SUCCESS,
          data: getAllSubCategoryResponse,
        });
      } else {
        yield put({
          type: GET_ALL_SUB_CATEGORY_FAIL,
          data: getAllSubCategoryResponse?.message,
        });
      }
    } else {
      yield put({ type: DELETE_SUB_CATEGORY_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: DELETE_SUB_CATEGORY_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* DeleteSubCategoryWatcher() {
  yield takeEvery(DELETE_SUB_CATEGORY_REQUEST, DeleteSubCategoryWorker);
}

function* CreateSubCategoryWorker({ category_id, sub_category_name }) {
  const response = yield call(
    CreateSubCategoryAction,
    category_id,
    sub_category_name
  );
  try {
    if (response?.status === "1") {
      yield put({ type: CREATE_SUB_CATEGORY_SUCCESS, data: response });
      const getAllSubCategoryResponse = yield call(GetAllSubCategoryAction);
      if (getAllSubCategoryResponse?.status === "1") {
        yield put({
          type: GET_ALL_SUB_CATEGORY_SUCCESS,
          data: getAllSubCategoryResponse,
        });
      } else {
        yield put({
          type: GET_ALL_SUB_CATEGORY_FAIL,
          data: getAllSubCategoryResponse?.message,
        });
      }
    } else {
      yield put({ type: CREATE_SUB_CATEGORY_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: CREATE_SUB_CATEGORY_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* CreateSubCategoryWatcher() {
  yield takeEvery(CREATE_SUB_CATEGORY_REQUEST, CreateSubCategoryWorker);
}

function* UpdateSubCategoryWorker({ sub_category_id, sub_category_name }) {
  const response = yield call(
    UpdateSubCategoryAction,
    sub_category_id,
    sub_category_name
  );
  try {
    if (response?.status === "1") {
      yield put({ type: UPDATE_SUB_CATEGORY_SUCCESS, data: response });
      const getAllSubCategoryResponse = yield call(GetAllSubCategoryAction);
      if (getAllSubCategoryResponse?.status === "1") {
        yield put({
          type: GET_ALL_SUB_CATEGORY_SUCCESS,
          data: getAllSubCategoryResponse,
        });
      } else {
        yield put({
          type: GET_ALL_SUB_CATEGORY_FAIL,
          data: getAllSubCategoryResponse?.message,
        });
      }
    } else {
      yield put({ type: UPDATE_SUB_CATEGORY_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: UPDATE_SUB_CATEGORY_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* UpdateSubCategoryWatcher() {
  yield takeEvery(UPDATE_SUB_CATEGORY_REQUEST, UpdateSubCategoryWorker);
}
