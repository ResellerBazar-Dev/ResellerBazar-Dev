import React, { useEffect, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Divider, makeStyles } from "@material-ui/core";
import DrawerComponents from "../CommonComponents/DrawerComponents";
import AdminNavbar from "../CommonComponents/AdminNavbar";
import AdminDashboardBox from "./AdminDashboardBox";
import AdminUsers from "./AdminUsers";
import AdminProducts from "./AdminProducts";
import AdminBrand from "./AdminBrand";
import AdminCat from "./AdminCat";
import AdminSubCat from "./AdminSubCat";
import AdminContactUs from "./AdminContactUs";
import AdminHelp from "./AdminHelp";
import AdminBanners from "./AdminBanners";
import { useHistory } from "react-router";

const useStyle = makeStyles((theme) => ({
  adminDashboardPrimary: {
    display: "flex",
    flexDirection: "column",
  },
  adminDashboardSecondary: {
    display: "flex",
  },
  adminDashboardBoxRoot: {
    width: "100%",
    padding: "20px",
  },
  boxHeading: {
    fontWeight: "600 !important",
  },
  boxHeadingDivider: {
    background: `${theme.palette.primary.main} !important`,
  },
}));

const getBoxComponent = (index) => {
  switch (index) {
    case 0:
      return <AdminDashboardBox />;
    case 1:
      return <AdminUsers />;
    case 2:
      return <AdminProducts />;
    case 3:
      return <AdminBrand />;
    case 4:
      return <AdminCat />;
    case 5:
      return <AdminSubCat />;
    case 6:
      return <AdminContactUs />;
    case 7:
      return <AdminHelp />;
    case 8:
      return <AdminBanners />;
    default:
      return "Page not found";
  }
};

const getBoxHeading = [
  "Dashboard",
  "Users",
  "Products",
  "Brand",
  "Category",
  "SubCategory",
  "Contact Us",
  "Help Messages",
  "Banners",
];

const getAdminPageRoutes = [
  "dashboard",
  "adminUser",
  "adminProduct",
  "adminBrand",
  "adminCat",
  "adminSubCat",
  "adminContactUs",
  "adminHelp",
  "adminBanners",
];

const getAdminActiveStep = (activePath) => {
  switch (activePath) {
    case "dashboard":
      return 0;
    case "adminUser":
      return 1;
    case "adminProduct":
      return 2;
    case "adminBrand":
      return 3;
    case "adminCat":
      return 4;
    case "adminSubCat":
      return 5;
    case "adminContactUs":
      return 6;
    case "adminHelp":
      return 7;
    case "adminBanners":
      return 8;
    default:
      return 0;
  }
};

const AdminDashboard = () => {
  const classes = useStyle();
  const history = useHistory();
  const path = history.location.pathname.split("/")[2];
  const [activeStep, setActiveStep] = useState(getAdminActiveStep(path));

  useEffect(() => {
    history.push(`/admin/${getAdminPageRoutes[activeStep]}`);
  }, [activeStep]);

  return (
    <div className={classes.adminDashboardPrimary}>
      <AdminNavbar />
      <div className={classes.adminDashboardSecondary}>
        <DrawerComponents
          setActiveStep={setActiveStep}
          activeStep={activeStep}
        />
        <div className={classes.adminDashboardBoxRoot}>
          <Toolbar />
          <Typography variant="h3" className={classes.boxHeading}>
            {getBoxHeading[activeStep]}
          </Typography>
          <Divider className={classes.boxHeadingDivider} />
          <div>{getBoxComponent(activeStep)}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
