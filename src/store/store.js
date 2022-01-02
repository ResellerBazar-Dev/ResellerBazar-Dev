import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { AuthReducer } from "../Reducers/AuthReducer";
import { BannerReducer } from "../Reducers/BannerReducer";
import { CategoryReducer } from "../Reducers/CategoryReducer";
import { SubCategoryReducer } from "../Reducers/SubCategoryReducer";
import { ProductReducer } from "../Reducers/ProductReducer";
import { UserReducer } from "../Reducers/UserReducer";
import { BrandReducer } from "../Reducers/BrandReducer";
import { AdminReducer } from "../Reducers/AdminReducer";
import rootSaga from "../sagas/RootSaga";

const sagaMiddleware = createSagaMiddleware();

const RootReducer = combineReducers({
  AuthData: AuthReducer,
  BannerData: BannerReducer,
  CategoryData: CategoryReducer,
  SubCategoryData: SubCategoryReducer,
  ProductData: ProductReducer,
  UserData: UserReducer,
  BrandData: BrandReducer,
  AdminData: AdminReducer,
});

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
