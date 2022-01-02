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
  USER_DATA_REQUEST,
  USER_DATA_SUCCESS,
  USER_DATA_FAIL,
  RESEND_OTP_REQUEST,
  RESEND_OTP_SUCCESS,
  RESEND_OTP_FAIL,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
} from "../Constants/AuthConstant";

const initialState = {
  registerData: {
    loading: false,
    userInfo: {},
    errorMsg: "",
  },
  otpData: {
    loading: false,
    userInfo: {},
    errorMsg: "",
  },
  resendOtpData: {
    loading: false,
    userInfo: {},
    errorMsg: "",
  },
  loginData: {
    loading: false,
    userInfo: {},
    errorMsg: "",
  },
  forgotData: {
    loading: false,
    userInfo: {},
    errorMsg: "",
  },
  resetData: {
    loading: false,
    userInfo: {},
    errorMsg: "",
  },
  userData: {
    loading: false,
    userInfo: {},
    errorMsg: "",
  },
  adminLoginData: {
    loading: false,
    userInfo: {},
    errorMsg: "",
  },
};

export const AuthReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST: {
      return {
        ...previousState,
        registerData: {
          loading: true,
          userInfo: {},
        },
      };
    }
    case USER_REGISTER_SUCCESS: {
      return {
        ...previousState,
        registerData: {
          loading: false,
          userInfo: action.data,
        },
      };
    }
    case USER_REGISTER_FAIL: {
      return {
        ...previousState,
        registerData: {
          loading: false,
          userInfo: {},
          errorMsg: action.data,
        },
      };
    }
    case OTP_VERIFICATION_REQUEST: {
      return {
        ...previousState,
        otpData: {
          loading: true,
          userInfo: {},
        },
      };
    }
    case OTP_VERIFICATION_SUCCESS: {
      return {
        ...previousState,
        otpData: {
          loading: false,
          userInfo: action.data,
        },
      };
    }
    case OTP_VERIFICATION_FAIL: {
      return {
        ...previousState,
        otpData: {
          loading: false,
          userInfo: {},
          errorMsg: action.data,
        },
      };
    }
    case RESEND_OTP_REQUEST: {
      return {
        ...previousState,
        resendOtpData: {
          loading: true,
          userInfo: {},
        },
      };
    }
    case RESEND_OTP_SUCCESS: {
      return {
        ...previousState,
        resendOtpData: {
          loading: false,
          userInfo: action.data,
        },
      };
    }
    case RESEND_OTP_FAIL: {
      return {
        ...previousState,
        resendOtpData: {
          loading: false,
          userInfo: {},
          errorMsg: action.data,
        },
      };
    }
    case USER_LOGIN_REQUEST: {
      return {
        ...previousState,
        loginData: {
          loading: true,
          userInfo: {},
        },
      };
    }
    case USER_LOGIN_SUCCESS: {
      return {
        ...previousState,
        loginData: {
          loading: false,
          userInfo: action.data,
        },
      };
    }
    case USER_LOGIN_FAIL: {
      return {
        ...previousState,
        loginData: {
          loading: false,
          userInfo: {},
          errorMsg: action.data,
        },
      };
    }
    case ADMIN_LOGIN_REQUEST: {
      return {
        ...previousState,
        adminLoginData: {
          loading: true,
          userInfo: {},
        },
      };
    }
    case ADMIN_LOGIN_SUCCESS: {
      return {
        ...previousState,
        adminLoginData: {
          loading: false,
          userInfo: action.data,
        },
      };
    }
    case ADMIN_LOGIN_FAIL: {
      return {
        ...previousState,
        adminLoginData: {
          loading: false,
          userInfo: {},
          errorMsg: action.data,
        },
      };
    }
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...previousState,
        forgotData: {
          loading: true,
          userInfo: {},
        },
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...previousState,
        forgotData: {
          loading: false,
          userInfo: action.data,
        },
      };
    }
    case FORGOT_PASSWORD_FAIL: {
      return {
        ...previousState,
        forgotData: {
          loading: false,
          userInfo: {},
          errorMsg: action.data,
        },
      };
    }
    case RESET_PASSWORD_REQUEST: {
      return {
        ...previousState,
        resetData: {
          loading: true,
          userInfo: {},
        },
      };
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...previousState,
        resetData: {
          loading: false,
          userInfo: action.data,
        },
      };
    }
    case RESET_PASSWORD_FAIL: {
      return {
        ...previousState,
        resetData: {
          loading: false,
          userInfo: {},
          errorMsg: action.data,
        },
      };
    }
    case USER_DATA_REQUEST: {
      return {
        ...previousState,
        userData: {
          loading: true,
          userInfo: {},
        },
      };
    }
    case USER_DATA_SUCCESS: {
      return {
        ...previousState,
        userData: {
          loading: false,
          userInfo: action.data,
        },
      };
    }
    case USER_DATA_FAIL: {
      return {
        ...previousState,
        userData: {
          loading: false,
          userInfo: {},
          errorMsg: action.data,
        },
      };
    }
    default: {
      return previousState || initialState;
    }
  }
};
