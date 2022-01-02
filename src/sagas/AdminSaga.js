import { put, takeEvery, call } from "@redux-saga/core/effects";
import {
  GetAdminDashboardDataAction,
  GetAllHelpMessagesAction,
} from "../Actions/AdminAction";
import { NotificationManager } from "react-notifications";
import {
  GET_ADMIN_DASHBOARD_DATA_SUCCESS,
  GET_ADMIN_DASHBOARD_DATA_REQUEST,
  GET_ADMIN_DASHBOARD_DATA_FAIL,
  GET_ALL_HELP_MESSAGES_FAIL,
  GET_ALL_HELP_MESSAGES_SUCCESS,
  GET_ALL_HELP_MESSAGES_REQUEST,
} from "../Constants/AdminConstant";
import API from "../api";

function* GetAdminDashboardDataWorker() {
  const response = yield call(GetAdminDashboardDataAction);
  try {
    if (response?.status === "1") {
      yield put({ type: GET_ADMIN_DASHBOARD_DATA_SUCCESS, data: response });
    } else {
      yield put({
        type: GET_ADMIN_DASHBOARD_DATA_FAIL,
        data: response?.message,
      });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: GET_ADMIN_DASHBOARD_DATA_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* GetAdminDashboardDataWatcher() {
  yield takeEvery(
    GET_ADMIN_DASHBOARD_DATA_REQUEST,
    GetAdminDashboardDataWorker
  );
}

function* GetAllHelpMessagesWorker() {
  const response = yield call(GetAllHelpMessagesAction);
  try {
    if (response?.status === "1") {
      yield put({ type: GET_ALL_HELP_MESSAGES_SUCCESS, data: response });
    } else {
      yield put({
        type: GET_ALL_HELP_MESSAGES_FAIL,
        data: response?.message,
      });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: GET_ALL_HELP_MESSAGES_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* GetAllHelpMessagesWatcher() {
  yield takeEvery(GET_ALL_HELP_MESSAGES_REQUEST, GetAllHelpMessagesWorker);
}
