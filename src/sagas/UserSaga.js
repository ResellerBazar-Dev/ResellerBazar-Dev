import { put, takeEvery, call } from "@redux-saga/core/effects";
import {
  ContactUsAction,
  GetContactUsAction,
  EditProfileImageAction,
  EditProfileAction,
  GetAllUsersAction,
  UpdateUserStatusAction,
  helpAction,
  getHelpAction,
} from "../Actions/UserAction";
import { NotificationManager } from "react-notifications";
import {
  CONTACT_US_SUCCESS,
  CONTACT_US_REQUEST,
  CONTACT_US_FAIL,
  GET_CONTACT_US_REQUEST,
  GET_CONTACT_US_SUCCESS,
  GET_CONTACT_US_FAIL,
  EDIT_PROFILE_IMAGE_FAIL,
  EDIT_PROFILE_IMAGE_SUCCESS,
  EDIT_PROFILE_IMAGE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_FAIL,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAIL,
  UPDATE_USER_STATUS_SUCCESS,
  UPDATE_USER_STATUS_REQUEST,
  UPDATE_USER_STATUS_FAIL,
  HELP_REQUEST,
  HELP_SUCCESS,
  HELP_FAIL,
  GET_HELP_REQUEST,
  GET_HELP_SUCCESS,
  GET_HELP_FAIL,
} from "../Constants/UserConstant";

function* getContactUsWorker() {
  const response = yield call(GetContactUsAction);
  try {
    if (response?.status === "1") {
      yield put({ type: GET_CONTACT_US_SUCCESS, data: response });
    } else {
      yield put({ type: GET_CONTACT_US_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: GET_CONTACT_US_FAIL, data: response?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* getContactUsWatcher() {
  yield takeEvery(GET_CONTACT_US_REQUEST, getContactUsWorker);
}

function* ContactUsWorker({ message }) {
  const response = yield call(ContactUsAction, message);
  try {
    if (response?.status === "1") {
      yield put({ type: CONTACT_US_SUCCESS, data: response });
      NotificationManager.success(response?.message, "", 3000);
    } else {
      yield put({ type: CONTACT_US_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: CONTACT_US_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* ContactUsWatcher() {
  yield takeEvery(CONTACT_US_REQUEST, ContactUsWorker);
}

function* EditProfileImageWorker({ imageData }) {
  const response = yield call(EditProfileImageAction, imageData);
  try {
    if (response?.status === "1") {
      yield put({ type: EDIT_PROFILE_IMAGE_SUCCESS, data: response });
    } else {
      yield put({ type: EDIT_PROFILE_IMAGE_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: EDIT_PROFILE_IMAGE_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* EditProfileImageWatcher() {
  yield takeEvery(EDIT_PROFILE_IMAGE_REQUEST, EditProfileImageWorker);
}

function* EditProfileWorker({ newUserData }) {
  const response = yield call(EditProfileAction, newUserData);
  try {
    if (response?.status === "1") {
      yield put({ type: EDIT_PROFILE_SUCCESS, data: response });
    } else {
      yield put({ type: EDIT_PROFILE_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: EDIT_PROFILE_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* EditProfileWatcher() {
  yield takeEvery(EDIT_PROFILE_REQUEST, EditProfileWorker);
}

function* GetAllUsersWorker() {
  const response = yield call(GetAllUsersAction);
  try {
    if (response?.status === "1") {
      yield put({ type: GET_ALL_USERS_SUCCESS, data: response });
    } else {
      yield put({ type: GET_ALL_USERS_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: GET_ALL_USERS_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* GetAllUsersWatcher() {
  yield takeEvery(GET_ALL_USERS_REQUEST, GetAllUsersWorker);
}

function* UpdateUserStatusWorker({ status_type, user_id }) {
  const response = yield call(UpdateUserStatusAction, status_type, user_id);
  try {
    if (response?.status === "1") {
      yield put({ type: UPDATE_USER_STATUS_SUCCESS, data: response });
      const getAllUserResponse = yield call(GetAllUsersAction);
      if (getAllUserResponse?.status === "1") {
        yield put({ type: GET_ALL_USERS_SUCCESS, data: getAllUserResponse });
      } else {
        yield put({
          type: GET_ALL_USERS_FAIL,
          data: getAllUserResponse?.message,
        });
      }
    } else {
      yield put({ type: UPDATE_USER_STATUS_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: UPDATE_USER_STATUS_FAIL, data: error?.message });
    NotificationManager.error(
      error?.message || "Something went wrong",
      "",
      3000
    );
  }
}

export function* UpdateUserStatusWatcher() {
  yield takeEvery(UPDATE_USER_STATUS_REQUEST, UpdateUserStatusWorker);
}

function* HelpWorker({ message }) {
  const response = yield call(helpAction, message);
  try {
    if (response?.status === "1") {
      yield put({ type: HELP_SUCCESS, data: response });
      NotificationManager.success(response?.message, "", 3000);
    } else {
      yield put({ type: HELP_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: HELP_FAIL, data: error?.message });
    NotificationManager.error(error?.message, "", 3000);
  }
}
export function* HelpWatcher() {
  yield takeEvery(HELP_REQUEST, HelpWorker);
}

function* GetHelpWorker() {
  const response = yield call(getHelpAction);
  try {
    if (response?.status === "1") {
      yield put({ type: GET_HELP_SUCCESS, data: response });
    } else {
      yield put({ type: GET_HELP_FAIL, data: response?.message });
      NotificationManager.error(response?.message, "", 3000);
    }
  } catch (error) {
    yield put({ type: GET_HELP_FAIL, data: error?.message });
    NotificationManager.error(error?.message, "", 3000);
  }
}
export function* GetHelpWatcher() {
  yield takeEvery(GET_HELP_REQUEST, GetHelpWorker);
}
