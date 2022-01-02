import {
  CONTACT_US_FAIL,
  CONTACT_US_REQUEST,
  CONTACT_US_SUCCESS,
  GET_CONTACT_US_REQUEST,
  GET_CONTACT_US_SUCCESS,
  GET_CONTACT_US_FAIL,
  EDIT_PROFILE_IMAGE_FAIL,
  EDIT_PROFILE_IMAGE_REQUEST,
  EDIT_PROFILE_IMAGE_SUCCESS,
  EDIT_PROFILE_FAIL,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  UPDATE_USER_STATUS_FAIL,
  UPDATE_USER_STATUS_REQUEST,
  UPDATE_USER_STATUS_SUCCESS,
  HELP_REQUEST,
  HELP_SUCCESS,
  HELP_FAIL,
  GET_HELP_REQUEST,
  GET_HELP_SUCCESS,
  GET_HELP_FAIL,
} from "../Constants/UserConstant";

const initialState = {
  contactUsData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  getContactUsData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  editProfileImageData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  editProfileData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  getAllUsersData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  updateUserStatusData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  helpData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  getHelpData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
};

export const UserReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case CONTACT_US_REQUEST: {
      return {
        ...previousState,
        contactUsData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case CONTACT_US_SUCCESS: {
      return {
        ...previousState,
        contactUsData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case CONTACT_US_FAIL: {
      return {
        ...previousState,
        contactUsData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case GET_CONTACT_US_REQUEST: {
      return {
        ...previousState,
        getContactUsData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case GET_CONTACT_US_SUCCESS: {
      return {
        ...previousState,
        getContactUsData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case GET_CONTACT_US_FAIL: {
      return {
        ...previousState,
        getContactUsData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case EDIT_PROFILE_IMAGE_REQUEST: {
      return {
        ...previousState,
        editProfileImageData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case EDIT_PROFILE_IMAGE_SUCCESS: {
      return {
        ...previousState,
        editProfileImageData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case EDIT_PROFILE_IMAGE_FAIL: {
      return {
        ...previousState,
        editProfileImageData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case EDIT_PROFILE_REQUEST: {
      return {
        ...previousState,
        editProfileData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case EDIT_PROFILE_SUCCESS: {
      return {
        ...previousState,
        editProfileData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case EDIT_PROFILE_FAIL: {
      return {
        ...previousState,
        editProfileData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case GET_ALL_USERS_REQUEST: {
      return {
        ...previousState,
        getAllUsersData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case GET_ALL_USERS_SUCCESS: {
      return {
        ...previousState,
        getAllUsersData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case GET_ALL_USERS_FAIL: {
      return {
        ...previousState,
        getAllUsersData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case UPDATE_USER_STATUS_REQUEST: {
      return {
        ...previousState,
        updateUserStatusData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case UPDATE_USER_STATUS_SUCCESS: {
      return {
        ...previousState,
        updateUserStatusData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case UPDATE_USER_STATUS_FAIL: {
      return {
        ...previousState,
        updateUserStatusData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case HELP_REQUEST: {
      return {
        ...previousState,
        helpData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case HELP_SUCCESS: {
      return {
        ...previousState,
        helpData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case HELP_FAIL: {
      return {
        ...previousState,
        helpData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case GET_HELP_REQUEST: {
      return {
        ...previousState,
        getHelpData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case GET_HELP_SUCCESS: {
      return {
        ...previousState,
        getHelpData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case GET_HELP_FAIL: {
      return {
        ...previousState,
        getHelpData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    default: {
      return previousState || initialState;
    }
  }
};
