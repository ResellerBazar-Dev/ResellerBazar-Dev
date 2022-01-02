import { put, takeEvery, call } from "@redux-saga/core/effects";
import {
  ForgotPasswordAction,
  LoginAction,
  LogoutAction,
  OtpAction,
  RegisterAction,
  ResendOtpAction,
  ResetPasswordAction,
  UserDataAction,
  AdminLoginAction,
} from "../Actions/AuthAction";
import { NotificationManager } from "react-notifications";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  OTP_VERIFICATION_REQUEST,
  OTP_VERIFICATION_SUCCESS,
  OTP_VERIFICATION_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_DATA_REQUEST,
  USER_DATA_SUCCESS,
  USER_DATA_FAIL,
  RESEND_OTP_REQUEST,
  RESEND_OTP_SUCCESS,
  RESEND_OTP_FAIL,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_FAIL,
} from "../Constants/AuthConstant";
import API from "../api";
import { fork, take } from "redux-saga/effects";

function* registerApiWorker(name, email, password, confirm_password) {
  const response = yield call(
    RegisterAction,
    name,
    email,
    password,
    confirm_password
  );
  try {
    if (response.status === "1") {
      yield call(API.setAccessTokenInLocalStorage, response.token);
      const data = yield call(UserDataAction);
      if (data.status === "1") {
        yield put({
          type: USER_DATA_SUCCESS,
          data: data,
        });
        yield put({
          type: USER_REGISTER_SUCCESS,
          data: response,
        });
        NotificationManager.success(response.message, "", 3000 || "Success");
      }
    } else {
      yield put({
        type: USER_REGISTER_FAIL,
        data: response.message,
      });
      NotificationManager.error(
        response.message,
        "",
        3000 || "Something went wrong"
      );
    }
  } catch (error) {
    yield put({
      type: USER_REGISTER_FAIL,
      data: error.message || "Something went wrong",
    });
  }
}

export function* registerApiWatcher() {
  while (true) {
    const { name, email, password, confirm_password } = yield take(
      USER_REGISTER_REQUEST
    );
    yield fork(registerApiWorker, name, email, password, confirm_password);
  }
  // yield takeEvery(USER_REGISTER_REQUEST,registerApiWorker)
}

function* otpApiWorker(otp) {
  const response = yield call(OtpAction, otp);
  try {
    if (response.status === "1") {
      const data = yield call(UserDataAction);
      if (data.status === "1") {
        yield put({
          type: USER_DATA_SUCCESS,
          data: data,
        });
        yield put({
          type: OTP_VERIFICATION_SUCCESS,
          data: response,
        });
        NotificationManager.success(response.message, "", 3000 || "Success");
      }
    } else {
      yield put({
        type: OTP_VERIFICATION_FAIL,
        data: response.message,
      });
      NotificationManager.error(
        response.message,
        "",
        3000 || "Something went wrong"
      );
    }
  } catch (error) {
    yield put({
      type: OTP_VERIFICATION_FAIL,
      data: error.message || "Something went wrong",
    });
  }
}

export function* otpApiWatcher() {
  while (true) {
    const { otp } = yield take(OTP_VERIFICATION_REQUEST);
    yield fork(otpApiWorker, otp);
  }
}

function* resendOtpWorker() {
  const response = yield call(ResendOtpAction);
  try {
    if (response.status === "1") {
      yield put({
        type: RESEND_OTP_SUCCESS,
        data: response,
      });
      NotificationManager.success(response.message, "", 3000 || "Success");
    } else {
      yield put({
        type: RESEND_OTP_FAIL,
        data: response.message,
      });
      NotificationManager.error(
        response.message,
        "",
        3000 || "Something went wrong"
      );
    }
  } catch (error) {
    yield put({
      type: RESEND_OTP_FAIL,
      data: error.message || "Something went wrong",
    });
  }
}

export function* resendOtpWatcher() {
  yield takeEvery(RESEND_OTP_REQUEST, resendOtpWorker);
}

function* loginApiWorker(email, password) {
  const response = yield call(LoginAction, email, password);
  try {
    if (response.status === "1") {
      yield call(API.setAccessTokenInLocalStorage, response.token);
      const data = yield call(UserDataAction);
      if (data.status === "1") {
        yield put({
          type: USER_DATA_SUCCESS,
          data: data,
        });
        yield put({
          type: USER_LOGIN_SUCCESS,
          data: response,
        });
        NotificationManager.success(response.message, "", 3000 || "Success");
      }
    } else {
      yield put({
        type: USER_LOGIN_FAIL,
        data: response.message,
      });
      NotificationManager.error(
        response.message,
        "",
        3000 || "Something went wrong"
      );
    }
  } catch (error) {
    yield put({
      type: USER_LOGIN_FAIL,
      data: error.message || "Something went wrong",
    });
  }
}

export function* loginApiWatcher() {
  while (true) {
    const { email, password } = yield take(USER_LOGIN_REQUEST);
    yield fork(loginApiWorker, email, password);
  }
}

function* AdminLoginWorker({ email, password }) {
  const response = yield call(AdminLoginAction, email, password);
  try {
    if (response.status === "1") {
      yield call(API.setAccessTokenInLocalStorage, response.token);
      const data = yield call(UserDataAction);
      if (data.status === "1") {
        yield put({
          type: USER_DATA_SUCCESS,
          data: data,
        });
        yield put({
          type: ADMIN_LOGIN_SUCCESS,
          data: response,
        });
        NotificationManager.success(response.message, "", 3000 || "Success");
      }
    } else {
      yield put({
        type: ADMIN_LOGIN_FAIL,
        data: response.message,
      });
      NotificationManager.error(
        response.message,
        "",
        3000 || "Something went wrong"
      );
    }
  } catch (error) {
    yield put({
      type: ADMIN_LOGIN_FAIL,
      data: error.message || "Something went wrong",
    });
  }
}

export function* AdminLoginWatcher() {
  yield takeEvery(ADMIN_LOGIN_REQUEST, AdminLoginWorker);
}

function* forgotApiWorker(email) {
  const response = yield call(ForgotPasswordAction, email);
  try {
    if (response.status === "1") {
      yield put({
        type: FORGOT_PASSWORD_SUCCESS,
        data: response,
      });
      NotificationManager.success(response.message, "", 3000 || "Success");
    } else {
      yield put({
        type: FORGOT_PASSWORD_FAIL,
        data: response.message,
      });
      NotificationManager.error(
        response.message,
        "",
        3000 || "Something went wrong"
      );
    }
  } catch (error) {
    yield put({
      type: FORGOT_PASSWORD_FAIL,
      data: error.message || "Something went wrong",
    });
  }
}

export function* forgotApiWatcher() {
  while (true) {
    const { email } = yield take(FORGOT_PASSWORD_REQUEST);
    yield fork(forgotApiWorker, email);
  }
}

function* resetApiWorker(token, password, confirm_password) {
  const response = yield call(
    ResetPasswordAction,
    token,
    password,
    confirm_password
  );
  try {
    if (response.status === "1") {
      yield put({
        type: RESET_PASSWORD_SUCCESS,
        data: response,
      });
      NotificationManager.success(response.message, "", 3000 || "Success");
    } else {
      yield put({
        type: RESET_PASSWORD_FAIL,
        data: response.message,
      });
      NotificationManager.error(
        response.message,
        "",
        3000 || "Something went wrong"
      );
    }
  } catch (error) {
    yield put({
      type: RESET_PASSWORD_FAIL,
      data: error.message || "Something went wrong",
    });
  }
}

export function* resetApiWatcher() {
  while (true) {
    const { token, password, confirm_password } = yield take(
      RESET_PASSWORD_REQUEST
    );
    yield fork(resetApiWorker, token, password, confirm_password);
  }
}

function* logoutApiWorker() {
  const response = yield call(LogoutAction);
  try {
    if (response.status === "1") {
      yield put({
        type: USER_LOGOUT_SUCCESS,
        data: response,
      });
      NotificationManager.success(response.message, "", 3000 || "Success");
      window.localStorage.clear();
      document.location.href = "/login";
    } else {
      yield put({
        type: USER_LOGOUT_FAIL,
        data: response.message,
      });
      NotificationManager.error(
        response.message,
        "",
        3000 || "Something went wrong"
      );
    }
  } catch (error) {
    yield put({
      type: USER_LOGOUT_FAIL,
      data: error.message || "Something went wrong",
    });
  }
}

export function* logoutApiWatcher() {
  yield takeEvery(USER_LOGOUT_REQUEST, logoutApiWorker);
}

function* userDataWorker() {
  const response = yield call(UserDataAction);
  try {
    if (response.status === "1") {
      yield put({
        type: USER_DATA_SUCCESS,
        data: response,
      });
    } else {
      yield put({
        type: USER_DATA_FAIL,
        data: response.message,
      });
    }
  } catch (error) {
    yield put({
      type: USER_DATA_FAIL,
      data: error.message || "Something went wrong",
    });
  }
}

export function* userDataWatcher() {
  yield takeEvery(USER_DATA_REQUEST, userDataWorker);
}
