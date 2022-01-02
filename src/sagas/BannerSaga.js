import { put, takeEvery, call } from "@redux-saga/core/effects";
import {
  GetBannerAction,
  GetAllBannerAction,
  UpdateBannerImageAction,
  UpdateBannerStatusAction,
  DeleteBannerAction,
} from "../Actions/BannerAction";
import { NotificationManager } from "react-notifications";
import {
  GET_BANNER_SUCCESS,
  GET_BANNER_FAIL,
  GET_BANNER_REQUEST,
  GET_ALL_BANNER_FAIL,
  GET_ALL_BANNER_SUCCESS,
  GET_ALL_BANNER_REQUEST,
  UPDATE_BANNER_IMAGE_FAIL,
  UPDATE_BANNER_IMAGE_REQUEST,
  UPDATE_BANNER_IMAGE_SUCCESS,
  UPDATE_BANNER_STATUS_FAIL,
  UPDATE_BANNER_STATUS_REQUEST,
  UPDATE_BANNER_STATUS_SUCCESS,
  DELETE_BANNER_FAIL,
  DELETE_BANNER_REQUEST,
  DELETE_BANNER_SUCCESS,
} from "../Constants/BannerConstant";

function* GetBannerWorker({ banner_page_location }) {
  const response = yield call(GetBannerAction, banner_page_location);
  try {
    if (response?.status === "1") {
      yield put({ type: GET_BANNER_SUCCESS, data: response });
    } else {
      yield put({ type: GET_BANNER_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: GET_BANNER_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* GetBannerWatcher() {
  yield takeEvery(GET_BANNER_REQUEST, GetBannerWorker);
}

function* GetAllBannerWorker() {
  const response = yield call(GetAllBannerAction);
  try {
    if (response?.status === "1") {
      yield put({ type: GET_ALL_BANNER_SUCCESS, data: response });
    } else {
      yield put({ type: GET_ALL_BANNER_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: GET_ALL_BANNER_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* GetAllBannerWatcher() {
  yield takeEvery(GET_ALL_BANNER_REQUEST, GetAllBannerWorker);
}

function* UpdateBannerImageWorker({ banner_id, formData }) {
  const response = yield call(UpdateBannerImageAction, banner_id, formData);
  try {
    if (response?.status === "1") {
      yield put({ type: UPDATE_BANNER_IMAGE_SUCCESS, data: response });
    } else {
      yield put({ type: UPDATE_BANNER_IMAGE_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: UPDATE_BANNER_IMAGE_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* UpdateBannerImageWatcher() {
  yield takeEvery(UPDATE_BANNER_IMAGE_REQUEST, UpdateBannerImageWorker);
}

function* UpdateBannerStatusWorker({ banner_id, status_type }) {
  const response = yield call(UpdateBannerStatusAction, banner_id, status_type);
  try {
    if (response?.status === "1") {
      yield put({ type: UPDATE_BANNER_STATUS_SUCCESS, data: response });
    } else {
      yield put({ type: UPDATE_BANNER_STATUS_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: UPDATE_BANNER_STATUS_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* UpdateBannerStatusWatcher() {
  yield takeEvery(UPDATE_BANNER_STATUS_REQUEST, UpdateBannerStatusWorker);
}

function* DeleteBannerWorker({ banner_id }) {
  const response = yield call(DeleteBannerAction, banner_id);
  try {
    if (response?.status === "1") {
      yield put({ type: DELETE_BANNER_SUCCESS, data: response });
    } else {
      yield put({ type: DELETE_BANNER_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: DELETE_BANNER_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* DeleteBannerWatcher() {
  yield takeEvery(DELETE_BANNER_REQUEST, DeleteBannerWorker);
}
