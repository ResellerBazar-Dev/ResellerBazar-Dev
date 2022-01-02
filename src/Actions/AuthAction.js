import instance from "../api";
import {
  USER_REGISTER_ENDPOINT,
  OTP_VERIFICATION_ENDPOINT,
  USER_LOGIN_ENDPOINT,
  RESET_PASSWORD_ENDPOINT,
  FORGOT_PASSWORD_ENDPOINT,
  USER_LOGOUT_ENDPOINT,
  USER_DATA_ENDPOINT,
  RESEND_OTP_ENDPOINT,
  ADMIN_SIGNIN_ENDPOINT,
} from "../ApiEndpoints/ApiEndpoint";

export const RegisterAction = (name, email, password, confirm_password) => {
  return instance.post(USER_REGISTER_ENDPOINT, {
    name,
    email,
    password,
    confirm_password,
  });
};

export const OtpAction = (otp) => {
  return instance.post(OTP_VERIFICATION_ENDPOINT, { otp });
};

export const ResendOtpAction = () => {
  return instance.post(RESEND_OTP_ENDPOINT);
};

export const LoginAction = (email, password) => {
  return instance.post(USER_LOGIN_ENDPOINT, { email, password });
};

export const AdminLoginAction = (email, password) => {
  return instance.post(ADMIN_SIGNIN_ENDPOINT, { email, password });
};

export const ForgotPasswordAction = (email) => {
  return instance.post(FORGOT_PASSWORD_ENDPOINT, { email });
};

export const ResetPasswordAction = (token, password, confirm_password) => {
  return instance.post(RESET_PASSWORD_ENDPOINT, {
    token,
    password,
    confirm_password,
  });
};

export const LogoutAction = () => {
  return instance.get(USER_LOGOUT_ENDPOINT);
};

export const UserDataAction = () => {
  return instance.get(USER_DATA_ENDPOINT);
};
