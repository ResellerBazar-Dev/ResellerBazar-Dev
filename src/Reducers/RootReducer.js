import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { BannerReducer } from "./BannerReducer";

export default combineReducers({ AuthReducer, BannerReducer });
