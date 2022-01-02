import {
  GET_CATEGORY_FAIL,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAIL,
  GET_ALL_CATEGORY_REQUEST,
  GET_ALL_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_STATUS_FAIL,
  UPDATE_CATEGORY_STATUS_REQUEST,
  UPDATE_CATEGORY_STATUS_SUCCESS,
  DELETE_CATEGORY_FAIL,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAIL,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAIL,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_SUCCESS,
} from "../Constants/CategoryConstant";

const initialState = {
  getCategoryData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  getAllCategoryData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  updateCategoryStatusData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  deleteCategoryData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  createCategoryData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  updateCategoryData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
};

export const CategoryReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_REQUEST: {
      return {
        ...previousState,
        getCategoryData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case GET_CATEGORY_SUCCESS: {
      return {
        ...previousState,
        getCategoryData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case GET_CATEGORY_FAIL: {
      return {
        ...previousState,
        getCategoryData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case GET_ALL_CATEGORY_REQUEST: {
      return {
        ...previousState,
        getAllCategoryData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case GET_ALL_CATEGORY_SUCCESS: {
      return {
        ...previousState,
        getAllCategoryData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case GET_ALL_CATEGORY_FAIL: {
      return {
        ...previousState,
        getAllCategoryData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case UPDATE_CATEGORY_STATUS_REQUEST: {
      return {
        ...previousState,
        updateCategoryStatusData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case UPDATE_CATEGORY_STATUS_SUCCESS: {
      return {
        ...previousState,
        updateCategoryStatusData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case UPDATE_CATEGORY_STATUS_FAIL: {
      return {
        ...previousState,
        updateCategoryStatusData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case DELETE_CATEGORY_REQUEST: {
      return {
        ...previousState,
        deleteCategoryData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case DELETE_CATEGORY_SUCCESS: {
      return {
        ...previousState,
        deleteCategoryData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case DELETE_CATEGORY_FAIL: {
      return {
        ...previousState,
        deleteCategoryData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case CREATE_CATEGORY_REQUEST: {
      return {
        ...previousState,
        createCategoryData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case CREATE_CATEGORY_SUCCESS: {
      return {
        ...previousState,
        createCategoryData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case CREATE_CATEGORY_FAIL: {
      return {
        ...previousState,
        createCategoryData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case UPDATE_CATEGORY_REQUEST: {
      return {
        ...previousState,
        updateCategoryData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case UPDATE_CATEGORY_SUCCESS: {
      return {
        ...previousState,
        updateCategoryData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case UPDATE_CATEGORY_FAIL: {
      return {
        ...previousState,
        updateCategoryData: {
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
