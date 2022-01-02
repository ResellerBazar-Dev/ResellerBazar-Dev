import {
  GET_SUB_CATEGORY_FAIL,
  GET_SUB_CATEGORY_REQUEST,
  GET_SUB_CATEGORY_SUCCESS,
  GET_ALL_SUB_CATEGORY_FAIL,
  GET_ALL_SUB_CATEGORY_REQUEST,
  GET_ALL_SUB_CATEGORY_SUCCESS,
  UPDATE_SUB_CATEGORY_STATUS_FAIL,
  UPDATE_SUB_CATEGORY_STATUS_REQUEST,
  UPDATE_SUB_CATEGORY_STATUS_SUCCESS,
  DELETE_SUB_CATEGORY_FAIL,
  DELETE_SUB_CATEGORY_REQUEST,
  DELETE_SUB_CATEGORY_SUCCESS,
  CREATE_SUB_CATEGORY_FAIL,
  CREATE_SUB_CATEGORY_REQUEST,
  CREATE_SUB_CATEGORY_SUCCESS,
  UPDATE_SUB_CATEGORY_FAIL,
  UPDATE_SUB_CATEGORY_REQUEST,
  UPDATE_SUB_CATEGORY_SUCCESS,
} from "../Constants/SubCategoryConstant";

const initialState = {
  getSubCategoryData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  getAllSubCategoryData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  updateSubCategoryStatusData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  deleteSubCategoryData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  createSubCategoryData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  updateSubCategoryData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
};

export const SubCategoryReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case GET_SUB_CATEGORY_REQUEST: {
      return {
        ...previousState,
        getSubCategoryData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case GET_SUB_CATEGORY_SUCCESS: {
      return {
        ...previousState,
        getSubCategoryData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case GET_SUB_CATEGORY_FAIL: {
      return {
        ...previousState,
        getSubCategoryData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case GET_ALL_SUB_CATEGORY_REQUEST: {
      return {
        ...previousState,
        getAllSubCategoryData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case GET_ALL_SUB_CATEGORY_SUCCESS: {
      return {
        ...previousState,
        getAllSubCategoryData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case GET_ALL_SUB_CATEGORY_FAIL: {
      return {
        ...previousState,
        getAllSubCategoryData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case UPDATE_SUB_CATEGORY_STATUS_REQUEST: {
      return {
        ...previousState,
        updateSubCategoryStatusData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case UPDATE_SUB_CATEGORY_STATUS_SUCCESS: {
      return {
        ...previousState,
        updateSubCategoryStatusData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case UPDATE_SUB_CATEGORY_STATUS_FAIL: {
      return {
        ...previousState,
        updateSubCategoryStatusData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case DELETE_SUB_CATEGORY_REQUEST: {
      return {
        ...previousState,
        deleteSubCategoryData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case DELETE_SUB_CATEGORY_SUCCESS: {
      return {
        ...previousState,
        deleteSubCategoryData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case DELETE_SUB_CATEGORY_FAIL: {
      return {
        ...previousState,
        deleteSubCategoryData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case CREATE_SUB_CATEGORY_REQUEST: {
      return {
        ...previousState,
        createSubCategoryData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case CREATE_SUB_CATEGORY_SUCCESS: {
      return {
        ...previousState,
        createSubCategoryData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case CREATE_SUB_CATEGORY_FAIL: {
      return {
        ...previousState,
        createSubCategoryData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case UPDATE_SUB_CATEGORY_REQUEST: {
      return {
        ...previousState,
        updateSubCategoryData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case UPDATE_SUB_CATEGORY_SUCCESS: {
      return {
        ...previousState,
        updateSubCategoryData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case UPDATE_SUB_CATEGORY_FAIL: {
      return {
        ...previousState,
        updateSubCategoryData: {
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
