import React, { useEffect } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import Login from "./Components/AuthComponents/Login";
import Signup from "./Components/AuthComponents/Signup";
import Home from "./Components/HomeComponents/Home";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/styles";
import ForgotPassword from "./Components/AuthComponents/ForgotPassword";
import OtpVerification from "./Components/AuthComponents/OtpVerification";
import ResetPassword from "./Components/AuthComponents/ResetPassword";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { USER_DATA_REQUEST } from "./Constants/AuthConstant";
import { connect } from "react-redux";
import API from "./api";
import Navbar from "./Components/CommonComponents/Navbar";
import Profiles from "./Components/profileComponent/Profile";
import ProfileEdit from "./Components/profileComponent/ProfileEdit";
import Footer from "./Components/CommonComponents/Footer";
import WishList from "./Components/WishList";
import DealPage from "./Components/DealPage";
import ContactUs from "./Components/ContactUs";
import AdPlans from "./Components/AdPlans";
import AboutUs from "./Components/AboutUs";
import ProductForm from "./Components/ProductForm";
import AdminDashboard from "./Components/admin/AdminDashboard";
import Admins from "./Components/admin/Admins";
import Category from "./Components/Category";
import AdminLogin from "./Components/admin/AdminLogin";
import ProductPage from "./Components/CommonComponents/ProductPage";
import AdvirtiseForm from "./Components/CommonComponents/AdvirtiseForm";
import ProductDetails from "./Components/CommonComponents/ProductDetails";
import Help from "./Components/Help";
import MoreProductPage from "./Components/MoreProductPage";

API.instance.interceptors.response.use((response) => {
  if (response.status === 401) {
    window.localStorage.clear();
    window.open("/login", "_self");
  }
  return response;
});

const App = (props) => {
  const { userData, UserDataAction } = props;

  const history = useHistory();
  const path = history.location.pathname.split("/")[1];

  useEffect(() => {
    const token = API.getAuthTokenFromLocalStorage();
    if (token && token !== "") {
      UserDataAction();
    } else if (["resetpassword", "forgotpassword"].includes(path)) {
    } else {
      window.localStorage.clear();
      if (["login"].includes(path)) {
        history.push("login");
      } else if (["signup"].includes(path)) {
        history.push("signup");
      } else if (["adminLogin"].includes(path)) {
        history.push("/adminLogin");
      } else {
        history.push("login");
      }
    }
  }, []);

  useEffect(() => {
    const token = API.getAuthTokenFromLocalStorage();
    if (token && token !== "") {
      if (userData.loading === false) {
        const path = history.location.pathname.split("/")[1];
        if (userData?.userInfo?.user?.is_verified === false) {
          history.replace("otpverification");
        } else if (userData?.userInfo?.user?.user_roles.includes("admin")) {
          let protectedRoute = ["adminLogin"];
          if (protectedRoute.includes(path)) {
            document.location.href = "/admin";
          } else if (["login"].includes(path)) {
            document.location.href = "/home";
          }
        } else {
          let protectedRoute = ["login", "signup", "otpverification"];
          if (protectedRoute.includes(path)) {
            document.location.href = "/home";
          }
        }
      }
    }
  }, [userData]);

  const authRoutes = [
    "login",
    "signup",
    "forgotpassword",
    "resetpassword",
    "otpverification",
    "admin",
    "Admins",
    "aboutus",
    "adminLogin",
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <NotificationContainer />
        {!authRoutes.includes(path) && <Navbar />}
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/wishlist" component={WishList}></Route>
          <Route exact path="/dealpage/:user_id" component={DealPage}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/forgotpassword" component={ForgotPassword}></Route>
          <Route path="/otpverification" component={OtpVerification}></Route>
          <Route path="/resetpassword/:token" component={ResetPassword}></Route>
          <Route path="/profiles" component={Profiles}></Route>
          <Route path="/ProfileEdit" component={ProfileEdit}></Route>
          <Route path="/contactUs" component={ContactUs}></Route>
          <Route path="/adPlans" component={AdPlans}></Route>
          <Route path="/aboutus" component={AboutUs}></Route>
          <Route
            path="/add-product/:product_id"
            component={ProductForm}
          ></Route>
          <Route path="/product" component={ProductPage}></Route>
          <Route path="/category/:category_id" component={Category}></Route>
          {userData?.userInfo?.user?.user_roles.includes("admin") && (
            <Route path="/admin" component={AdminDashboard}></Route>
          )}
          <Route path="/super-users" component={Admins}></Route>
          <Route path="/adminLogin" component={AdminLogin}></Route>
          <Route path="/Advirtise-form" component={AdvirtiseForm}></Route>
          <Route path="/details/:product_id" component={ProductDetails}></Route>
          <Route path="/help" component={Help}></Route>
          <Route path="/more-product" component={MoreProductPage}></Route>
        </Switch>
        {!authRoutes.includes(path) && <Footer />}
      </ThemeProvider>
    </>
  );
};

const mapStateToProps = (state) => ({
  userData: state.AuthData.userData,
});

const mapDispatchToProps = (dispatch) => ({
  UserDataAction: () => dispatch({ type: USER_DATA_REQUEST }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
