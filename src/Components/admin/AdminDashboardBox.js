import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Card, makeStyles } from "@material-ui/core";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import WcIcon from "@mui/icons-material/Wc";
import EmailIcon from "@mui/icons-material/Email";
import { connect } from "react-redux";
import { GET_ADMIN_DASHBOARD_DATA_REQUEST } from "../../Constants/AdminConstant";
import CountUp from "react-countup";

const useStyle = makeStyles((theme) => ({
  mainDiv: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "100px",
  },
  DashboardCard: {
    width: "22%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    padding: "10px",
    backgroundColor: "#1DA1F2",
    borderRadius: "12px",
    "&>p": {
      fontSize: "2.5rem",
    },
    "&>div": {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "column",
      "&>svg": {
        fontSize: "3.5rem",
      },
    },
  },
}));

const AdminDashboardBox = ({
  GetAdminDashboardDataAction,
  getAdminDashboardData,
}) => {
  const classes = useStyle();

  useEffect(() => {
    GetAdminDashboardDataAction();
  }, []);
  return (
    <div>
      <div className={classes.mainDiv}>
        <Card
          className={classes.DashboardCard}
          style={{ backgroundColor: "#1DA1F2" }}
        >
          <div>
            <PersonIcon />
            <Typography>Users</Typography>
          </div>
          <Typography>
            <CountUp
              className={classes.countNumber}
              start={0}
              end={getAdminDashboardData?.data?.data?.users}
              duration={3}
            />
          </Typography>
        </Card>
        <Card
          className={classes.DashboardCard}
          style={{ backgroundColor: "#0AB258" }}
        >
          <div>
            <InventoryIcon />
            <Typography>Products</Typography>
          </div>
          <Typography>
            <CountUp
              className={classes.countNumber}
              start={0}
              end={getAdminDashboardData?.data?.data?.products}
              duration={3}
            />
          </Typography>
        </Card>
        <Card
          className={classes.DashboardCard}
          style={{ backgroundColor: "#A50AB2" }}
        >
          <div>
            <ViewCarouselIcon />
            <Typography>Banners</Typography>
          </div>
          <Typography>
            <CountUp
              className={classes.countNumber}
              start={0}
              end={getAdminDashboardData?.data?.data?.banners}
              duration={3}
            />
          </Typography>
        </Card>
        <Card
          className={classes.DashboardCard}
          style={{ backgroundColor: "#1EC5A7" }}
        >
          <div>
            <EmailIcon />
            <Typography>Contact Us</Typography>
          </div>
          <Typography>
            <CountUp
              className={classes.countNumber}
              start={0}
              end={getAdminDashboardData?.data?.data?.contactus}
              duration={3}
            />
          </Typography>
        </Card>
      </div>
      <div className={classes.mainDiv}>
        <Card
          className={classes.DashboardCard}
          style={{ backgroundColor: "#FD743A" }}
        >
          <div>
            <WcIcon />
            <Typography>Employee</Typography>
          </div>
          <Typography>50</Typography>
        </Card>
        <Card
          className={classes.DashboardCard}
          style={{ backgroundColor: "#FD3A5C" }}
        >
          <div>
            <AccessibilityIcon />
            <Typography>Active</Typography>
          </div>
          <Typography>1520</Typography>
        </Card>
        <Card
          className={classes.DashboardCard}
          style={{ backgroundColor: "#BC2A8D" }}
        >
          <div>
            <InventoryIcon />
            <Typography>Resent Products(24hour)</Typography>
          </div>
          <Typography>20</Typography>
        </Card>
        <Card
          className={classes.DashboardCard}
          style={{ backgroundColor: "#CE5353" }}
        >
          <div>
            <WcIcon />
            <Typography>Intern</Typography>
          </div>
          <Typography>1520</Typography>
        </Card>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  getAdminDashboardData: state.AdminData.getAdminDashboardData,
});

const mapDispatchToProps = (dispatch) => ({
  GetAdminDashboardDataAction: () =>
    dispatch({
      type: GET_ADMIN_DASHBOARD_DATA_REQUEST,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboardBox);
