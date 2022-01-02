import {
  GET_All_BRAND_FAIL,
  GET_All_BRAND_REQUEST,
  GET_All_BRAND_SUCCESS,
  GET_BRAND_FAIL,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
  UPDATE_BRAND_STATUS_FAIL,
  UPDATE_BRAND_STATUS_REQUEST,
  UPDATE_BRAND_STATUS_SUCCESS,
  DELETE_BRAND_FAIL,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  CREATE_BRAND_FAIL,
  CREATE_BRAND_REQUEST,
  CREATE_BRAND_SUCCESS,
  UPDATE_BRAND_FAIL,
  UPDATE_BRAND_REQUEST,
  UPDATE_BRAND_SUCCESS,
} from "../Constants/BrandConstant";

const initialState = {
  getAllBrandData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  getBrandData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  updateBrandStatusData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  deleteBrandData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  createBrandData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  updateBrandData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
};

export const BrandReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case GET_All_BRAND_REQUEST: {
      return {
        ...previousState,
        getAllBrandData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case GET_All_BRAND_SUCCESS: {
      return {
        ...previousState,
        getAllBrandData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case GET_All_BRAND_FAIL: {
      return {
        ...previousState,
        getAllBrandData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case GET_BRAND_REQUEST: {
      return {
        ...previousState,
        getBrandData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case GET_BRAND_SUCCESS: {
      return {
        ...previousState,
        getBrandData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case GET_BRAND_FAIL: {
      return {
        ...previousState,
        getBrandData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case UPDATE_BRAND_STATUS_REQUEST: {
      return {
        ...previousState,
        updateBrandStatusData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case UPDATE_BRAND_STATUS_SUCCESS: {
      return {
        ...previousState,
        updateBrandStatusData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case UPDATE_BRAND_STATUS_FAIL: {
      return {
        ...previousState,
        updateBrandStatusData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case DELETE_BRAND_REQUEST: {
      return {
        ...previousState,
        deleteBrandData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case DELETE_BRAND_SUCCESS: {
      return {
        ...previousState,
        deleteBrandData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case DELETE_BRAND_FAIL: {
      return {
        ...previousState,
        deleteBrandData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case CREATE_BRAND_REQUEST: {
      return {
        ...previousState,
        createBrandData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case CREATE_BRAND_SUCCESS: {
      return {
        ...previousState,
        createBrandData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case CREATE_BRAND_FAIL: {
      return {
        ...previousState,
        createBrandData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case UPDATE_BRAND_REQUEST: {
      return {
        ...previousState,
        updateBrandData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case UPDATE_BRAND_SUCCESS: {
      return {
        ...previousState,
        updateBrandData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case UPDATE_BRAND_FAIL: {
      return {
        ...previousState,
        updateBrandData: {
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
