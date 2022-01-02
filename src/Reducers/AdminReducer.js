import {
  GET_ADMIN_DASHBOARD_DATA_FAIL,
  GET_ADMIN_DASHBOARD_DATA_REQUEST,
  GET_ADMIN_DASHBOARD_DATA_SUCCESS,
  GET_ALL_HELP_MESSAGES_FAIL,
  GET_ALL_HELP_MESSAGES_REQUEST,
  GET_ALL_HELP_MESSAGES_SUCCESS,
} from "../Constants/AdminConstant";

const initialState = {
  getAdminDashboardData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  getAllHelpMessageData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
};

export const AdminReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN_DASHBOARD_DATA_REQUEST: {
      return {
        ...previousState,
        getAdminDashboardData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case GET_ADMIN_DASHBOARD_DATA_SUCCESS: {
      return {
        ...previousState,
        getAdminDashboardData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case GET_ADMIN_DASHBOARD_DATA_FAIL: {
      return {
        ...previousState,
        getAdminDashboardData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case GET_ALL_HELP_MESSAGES_REQUEST: {
      return {
        ...previousState,
        getAllHelpMessageData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case GET_ALL_HELP_MESSAGES_SUCCESS: {
      return {
        ...previousState,
        getAllHelpMessageData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case GET_ALL_HELP_MESSAGES_FAIL: {
      return {
        ...previousState,
        getAllHelpMessageData: {
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
