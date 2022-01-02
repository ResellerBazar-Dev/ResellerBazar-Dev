import axios from "axios";

const baseUrl = process.env.REACT_APP_API_ENDPOINT;
// const localHostBaseUrl = process.env.REACT_APP_LOCALHOST_API_ENDPOINT;
function getAuthTokenFromLocalStorage() {
  return localStorage.getItem("token") || "";
}
const instance = axios.create({
  baseURL: baseUrl,
  // baseURL: localHostBaseUrl,
  timeout: 30000, //30 secs
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  validateStatus: function (status) {
    return (
      (status >= 200 && status < 300) ||
      status === 401 ||
      status === 422 ||
      status === 400
    );
  },
});

function setAccessTokenInLocalStorage(token) {
  const { localStorage } = window;
  try {
    return localStorage.setItem("token", token);
  } catch (e) {
    return undefined;
  }
}

function post(url, paramObj, headers = {}) {
  instance.defaults.headers.common["Authorization"] =
    "Bearer " + getAuthTokenFromLocalStorage();

  return instance
    .post(url, paramObj)
    .then((response) => {
      return response.data;
    })
    .then((response) => {
      if (response.success) {
        return response;
      } else {
        return response;
      }
    })
    .catch((error) => {
      return {
        status: false,
        message: error.message || "Something went wrong please try again later",
      };
    });
}

function put(url, paramObj, headers = {}) {
  instance.defaults.headers.common["Authorization"] =
    "Bearer " + getAuthTokenFromLocalStorage();

  return instance
    .put(url, paramObj)
    .then((response) => {
      switch (response.status) {
        case 200:
          return response.data;
        case 401:
          return { status: false, unauthenticated: true };
        case 422:
          return { status: false, message: response.data.message };
        default:
          return { status: false, message: "Something went wrong!" };
      }
    })
    .then((response) => {
      if (response.success) {
        return response.data;
      } else {
        return response;
      }
    })
    .catch((error) => {
      return {
        status: false,
        message: error.message || "Something went wrong please try again later",
      };
    });
}

function get(url, paramObj = {}, headers = {}) {
  instance.defaults.headers.common["Authorization"] =
    "Bearer " + getAuthTokenFromLocalStorage();

  return instance
    .get(url, { params: paramObj })
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        return response.data;
      } else if (response.status === 201) {
        return response.data;
      } else if (response.status === 401) {
        return {
          status: false,
          response_status: response.status,
          unauthenticated: true,
        };
      }
      return {
        success: false,
        message: response.message || "Formed response",
      };
    })
    .then((response) => {
      if (response.success) {
        return response;
      } else {
        return response;
      }
    })
    .catch((error) => {
      return {
        status: false,
        message: error.message || "Something went wrong please try again later",
      };
    });
}

function deleteM(url, payload = {}, headers = {}) {
  instance.defaults.headers.common["Authorization"] =
    "Bearer " + getAuthTokenFromLocalStorage();

  return instance
    .delete(url, { data: payload })
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else if (response.status === 401) {
        return { status: false, unauthenticated: true };
      } else if (response.status === 201) {
        return response.data;
      }
      return {
        success: false,
        message: response.message || "Formed response!",
      };
    })
    .then((response) => {
      if (response.success) {
        return response;
      } else {
        return response;
      }
    })
    .catch((error) => {
      return {
        status: false,
        message: error.message || "Something went wrong please try again later",
      };
    });
}

export default {
  post,
  get,
  put,
  deleteM,
  instance,
  getAuthTokenFromLocalStorage,
  setAccessTokenInLocalStorage,
};
