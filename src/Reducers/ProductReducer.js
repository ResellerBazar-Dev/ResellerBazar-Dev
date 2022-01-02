import {
  NEW_PRODUCT_FAIL,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_USER_PRODUCT_FAIL,
  GET_USER_PRODUCT_REQUEST,
  GET_USER_PRODUCT_SUCCESS,
  GET_CATEGORY_PRODUCT_FAIL,
  GET_CATEGORY_PRODUCT_REQUEST,
  GET_CATEGORY_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCT_BY_ID_FAIL,
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_IMAGE_FAIL,
  DELETE_PRODUCT_IMAGE_REQUEST,
  DELETE_PRODUCT_IMAGE_SUCCESS,
  UPDATE_PRODUCT_IMAGE_FAIL,
  UPDATE_PRODUCT_IMAGE_SUCCESS,
  UPDATE_PRODUCT_IMAGE_REQUEST,
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_REQUEST,
  GET_ALL_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_STATUS_FAIL,
  UPDATE_PRODUCT_STATUS_REQUEST,
  UPDATE_PRODUCT_STATUS_SUCCESS,
  ADD_WISHLIST_PRODUCT_REQUEST,
  ADD_WISHLIST_PRODUCT_SUCCESS,
  ADD_WISHLIST_PRODUCT_FAIL,
  GET_WISHLIST_PRODUCT_REQUEST,
  GET_WISHLIST_PRODUCT_SUCCESS,
  GET_WISHLIST_PRODUCT_FAIL,
  DELETE_WISHLIST_PRODUCT_REQUEST,
  DELETE_WISHLIST_PRODUCT_SUCCESS,
  DELETE_WISHLIST_PRODUCT_FAIL,
} from "../Constants/ProductConstant";

const initialState = {
  newProductData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  getProductData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  getUserProductData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  getCategoryProductData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  deleteProductData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  getProductByIdData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  updateProductData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  deleteProductImageData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  updateProductImageData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  getAllProductData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  updateProductStatusData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  addWishlistData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  getWishlistData: {
    loading: false,
    data: {},
    errorMsg: "",
  },
  deleteWishlistProduct: {
    loading: false,
    data: {},
    errorMsg: "",
  },
};

export const ProductReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case NEW_PRODUCT_REQUEST: {
      return {
        ...previousState,
        newProductData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case NEW_PRODUCT_SUCCESS: {
      return {
        ...previousState,
        newProductData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case NEW_PRODUCT_FAIL: {
      return {
        ...previousState,
        newProductData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case GET_PRODUCT_REQUEST: {
      return {
        ...previousState,
        getProductData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case GET_PRODUCT_SUCCESS: {
      return {
        ...previousState,
        getProductData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case GET_PRODUCT_FAIL: {
      return {
        ...previousState,
        getProductData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case UPDATE_PRODUCT_STATUS_REQUEST: {
      return {
        ...previousState,
        updateProductStatusData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case UPDATE_PRODUCT_STATUS_SUCCESS: {
      return {
        ...previousState,
        updateProductStatusData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case UPDATE_PRODUCT_STATUS_FAIL: {
      return {
        ...previousState,
        updateProductStatusData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case GET_ALL_PRODUCT_REQUEST: {
      return {
        ...previousState,
        getAllProductData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case GET_ALL_PRODUCT_SUCCESS: {
      return {
        ...previousState,
        getAllProductData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case GET_ALL_PRODUCT_FAIL: {
      return {
        ...previousState,
        getAllProductData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case GET_USER_PRODUCT_REQUEST: {
      return {
        ...previousState,
        getUserProductData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case GET_USER_PRODUCT_SUCCESS: {
      return {
        ...previousState,
        getUserProductData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case GET_USER_PRODUCT_FAIL: {
      return {
        ...previousState,
        getUserProductData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case GET_CATEGORY_PRODUCT_REQUEST: {
      return {
        ...previousState,
        getCategoryProductData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case GET_CATEGORY_PRODUCT_SUCCESS: {
      return {
        ...previousState,
        getCategoryProductData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case GET_CATEGORY_PRODUCT_FAIL: {
      return {
        ...previousState,
        getCategoryProductData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case DELETE_PRODUCT_REQUEST: {
      return {
        ...previousState,
        deleteProductData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case DELETE_PRODUCT_SUCCESS: {
      return {
        ...previousState,
        deleteProductData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case DELETE_PRODUCT_FAIL: {
      return {
        ...previousState,
        deleteProductData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case GET_PRODUCT_BY_ID_REQUEST: {
      return {
        ...previousState,
        getProductByIdData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case GET_PRODUCT_BY_ID_SUCCESS: {
      return {
        ...previousState,
        getProductByIdData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case GET_PRODUCT_BY_ID_FAIL: {
      return {
        ...previousState,
        getProductByIdData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case UPDATE_PRODUCT_REQUEST: {
      return {
        ...previousState,
        updateProductData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case UPDATE_PRODUCT_SUCCESS: {
      return {
        ...previousState,
        updateProductData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case UPDATE_PRODUCT_FAIL: {
      return {
        ...previousState,
        updateProductData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case DELETE_PRODUCT_IMAGE_REQUEST: {
      return {
        ...previousState,
        deleteProductImageData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case DELETE_PRODUCT_IMAGE_SUCCESS: {
      return {
        ...previousState,
        deleteProductImageData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case DELETE_PRODUCT_IMAGE_FAIL: {
      return {
        ...previousState,
        deleteProductImageData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case UPDATE_PRODUCT_IMAGE_REQUEST: {
      return {
        ...previousState,
        updateProductImageData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case UPDATE_PRODUCT_IMAGE_SUCCESS: {
      return {
        ...previousState,
        updateProductImageData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case UPDATE_PRODUCT_IMAGE_FAIL: {
      return {
        ...previousState,
        updateProductImageData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }
    case ADD_WISHLIST_PRODUCT_REQUEST: {
      return {
        ...previousState,
        addWishlistData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case ADD_WISHLIST_PRODUCT_SUCCESS: {
      const oldProductData = { ...previousState?.getProductData?.data };
      let productIndex;
      const selectedProduct = oldProductData?.data?.filter((item, i) => {
        if (item?._id === action?.data?.data?.product_id) {
          productIndex = i;
          return item;
        }
        return null;
      });
      selectedProduct[0].wishlist.push(action.data?.data);
      oldProductData?.data?.splice(productIndex, 1, selectedProduct[0]);
      return {
        ...previousState,
        addWishlistData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
        getProductData: {
          ...previousState.getProductData,
          data: oldProductData,
        },
      };
    }
    case ADD_WISHLIST_PRODUCT_FAIL: {
      return {
        ...previousState,
        addWishlistData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }

    case GET_WISHLIST_PRODUCT_REQUEST: {
      return {
        ...previousState,
        getWishlistData: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case GET_WISHLIST_PRODUCT_SUCCESS: {
      return {
        ...previousState,
        getWishlistData: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
      };
    }
    case GET_WISHLIST_PRODUCT_FAIL: {
      return {
        ...previousState,
        getWishlistData: {
          loading: false,
          data: {},
          errorMsg: action.data,
        },
      };
    }

    case DELETE_WISHLIST_PRODUCT_REQUEST: {
      return {
        ...previousState,
        deleteWishlistProduct: {
          loading: true,
          data: {},
          errorMsg: "",
        },
      };
    }
    case DELETE_WISHLIST_PRODUCT_SUCCESS: {
      const oldProductData = { ...previousState?.getProductData?.data };
      let productIndex;
      const selectedProduct = oldProductData?.data?.filter((item, i) => {
        if (item?._id === action?.data?.data?.product_id) {
          productIndex = i;
          return item;
        }
        return null;
      });
      selectedProduct[0].wishlist = [];
      oldProductData?.data?.splice(productIndex, 1, selectedProduct[0]);
      return {
        ...previousState,
        deleteWishlistProduct: {
          loading: false,
          data: action.data,
          errorMsg: "",
        },
        getProductData: {
          ...previousState.getProductData,
          data: oldProductData,
        },
      };
    }
    case DELETE_WISHLIST_PRODUCT_FAIL: {
      return {
        ...previousState,
        deleteWishlistProduct: {
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
