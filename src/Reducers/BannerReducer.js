import {
  GET_BANNER_REQUEST,
  GET_BANNER_FAIL,
  GET_BANNER_SUCCESS,
  GET_ALL_BANNER_FAIL,
  GET_ALL_BANNER_REQUEST,
  GET_ALL_BANNER_SUCCESS,
  UPDATE_BANNER_IMAGE_FAIL,
  UPDATE_BANNER_IMAGE_REQUEST,
  UPDATE_BANNER_IMAGE_SUCCESS,
  UPDATE_BANNER_STATUS_FAIL,
  UPDATE_BANNER_STATUS_SUCCESS,
  UPDATE_BANNER_STATUS_REQUEST,
  DELETE_BANNER_FAIL,
  DELETE_BANNER_REQUEST,
  DELETE_BANNER_SUCCESS,
} from "../Constants/BannerConstant";

const initialState = {
  bannerData: {
    loading: false,
    bannerInfo: {},
    errorMsg: "",
  },
  getAllBannerData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  updateBannerImageData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  updateBannerStatusData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  deleteBannerData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
};

export const BannerReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case GET_BANNER_REQUEST: {
      return {
        ...previousState,
        bannerData: {
          loading: true,
          bannerInfo: {},
          errorMsg: "",
        },
      };
    }
    case GET_BANNER_SUCCESS: {
      return {
        ...previousState,
        bannerData: {
          loading: false,
          bannerInfo: action.data,
          errorMsg: "",
        },
      };
    }
    case GET_BANNER_FAIL: {
      return {
        ...previousState,
        bannerData: {
          loading: false,
          bannerInfo: {},
          errorMsg: action.data,
        },
      };
    }
    case UPDATE_BANNER_IMAGE_REQUEST: {
      return {
        ...previousState,
        updateBannerImageData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case UPDATE_BANNER_IMAGE_SUCCESS: {
      return {
        ...previousState,
        updateBannerImageData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case UPDATE_BANNER_IMAGE_FAIL: {
      return {
        ...previousState,
        updateBannerImageData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case GET_ALL_BANNER_REQUEST: {
      return {
        ...previousState,
        getAllBannerData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case GET_ALL_BANNER_SUCCESS: {
      return {
        ...previousState,
        getAllBannerData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case GET_ALL_BANNER_FAIL: {
      return {
        ...previousState,
        getAllBannerData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case UPDATE_BANNER_STATUS_REQUEST: {
      return {
        ...previousState,
        updateBannerStatusData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case UPDATE_BANNER_STATUS_SUCCESS: {
      return {
        ...previousState,
        updateBannerStatusData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case UPDATE_BANNER_STATUS_FAIL: {
      return {
        ...previousState,
        updateBannerStatusData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case DELETE_BANNER_REQUEST: {
      return {
        ...previousState,
        deleteBannerData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case DELETE_BANNER_SUCCESS: {
      return {
        ...previousState,
        deleteBannerData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case DELETE_BANNER_FAIL: {
      return {
        ...previousState,
        deleteBannerData: {
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
