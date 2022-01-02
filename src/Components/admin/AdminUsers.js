import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MUIDataTable from "mui-datatables";
import { connect } from "react-redux";
import {
  GET_ALL_USERS_REQUEST,
  UPDATE_USER_STATUS_REQUEST,
} from "../../Constants/UserConstant";
import {
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import utils from "../../utils/commonFunctions";

const useStyle = makeStyles((theme) => ({
  tableRootDiv: {
    margin: "50px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&>div": {
      width: "100%",
    },
  },
  userIcon: {
    width: "60px !important",
    height: "60px !important",
  },
  userProfileImage: {
    "&>img": {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      objectFit: "cover",
    },
  },
  userDetailsRoot: {
    display: "flex",
    margin: "10px 0",
  },
  userImageDiv: {
    boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.25);",
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    "&>img": {
      boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.25);",
      borderRadius: "50%",
      width: "200px",
      height: "200px",
      objectFit: "cover",
    },
  },
  userDetailsLeftSide: {
    width: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "&>div": {
      marginBottom: "15px",
    },
    "&>p": {
      fontWeight: "600",
      fontSize: "25px",
    },
  },
  userDetailsRightSide: {
    width: "60%",
    "&>div": {
      display: "flex",
      width: "100%",
      "&>p": {
        width: "100%",
        "&:nth-child(1)": {
          fontWeight: "bold",
          width: "30%",
        },
        "&:nth-child(2)": {},
      },
    },
  },
  prograssBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&>span": {
      "&>svg": {
        color: "#D10024",
      },
    },
  },
}));

const columns = [
  {
    name: "sr_no",
    label: "Sr No",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "profile_image",
    label: "User Image",
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: "name",
    label: "Full Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "email",
    label: "Email",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "phone",
    label: "Phone",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "is_active",
    label: "Active/Deactive",
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: "view_more",
    label: "View More",
    options: {
      filter: false,
      sort: false,
    },
  },
];

const options = {
  filterType: "checkbox",
};

const AdminUsers = ({
  getAllUsersAction,
  getAllUsersData,
  updateUserStatusAction,
}) => {
  const classes = useStyle();
  const [rows, setRows] = useState(null);
  const [viewMoreDialogOpen, setViewMoreDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (getAllUsersData?.data?.status === "1") {
      setRows(
        getAllUsersData?.data?.data?.map((item, key) => {
          return {
            sr_no: key + 1,
            profile_image:
              item?.profile_image !== null ? (
                <div className={classes.userProfileImage}>
                  <img src={item?.profile_image} alt="User Icon" />
                </div>
              ) : (
                <AccountCircleIcon className={classes.userIcon} />
              ),
            name: item?.name,
            email: item?.email,
            phone: item?.other_details?.contact_number,
            is_active: item?.is_active ? (
              <Button
                variant="contained"
                style={{
                  background: "red",
                  color: "white",
                }}
                onClick={() =>
                  updateUserStatusAction("deactive", utils.toBase64(item?._id))
                }
              >
                Deactive
              </Button>
            ) : (
              <Button
                variant="contained"
                style={{
                  background: "green",
                  color: "white",
                }}
                onClick={() =>
                  updateUserStatusAction("active", utils.toBase64(item?._id))
                }
              >
                Active
              </Button>
            ),
            view_more: (
              <Button
                variant="contained"
                style={{
                  background: "blue",
                  color: "white",
                }}
                onClick={() => {
                  setSelectedUser(item);
                  setViewMoreDialogOpen(true);
                }}
              >
                View More
              </Button>
            ),
          };
        })
      );
    }
  }, [getAllUsersData]);

  useEffect(() => {
    getAllUsersAction();
  }, []);

  return (
    <div className={classes.tableRootDiv}>
      {getAllUsersData?.loading ? (
        <div className={classes.prograssBar}>
          <CircularProgress />
        </div>
      ) : (
        rows !== null && (
          <MUIDataTable
            title="Users"
            data={rows}
            columns={columns}
            options={options}
          />
        )
      )}
      <Dialog
        open={viewMoreDialogOpen}
        onClose={() => {
          setSelectedUser(null);
          setViewMoreDialogOpen(false);
        }}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>User Details</DialogTitle>
        <DialogContent>
          <div className={classes.userDetailsRoot}>
            <div className={classes.userDetailsLeftSide}>
              <div className={classes.userImageDiv}>
                {selectedUser?.profile_image !== null && (
                  <img src={selectedUser?.profile_image} alt="User Icon" />
                )}
              </div>
              <Typography>{selectedUser?.name}</Typography>
            </div>
            <Divider orientation="vertical" fullWidth />
            <div className={classes.userDetailsRightSide}>
              <div>
                <Typography>Name</Typography>
                <Typography>: {selectedUser?.name}</Typography>
              </div>
              <div>
                <Typography>Email</Typography>
                <Typography>: {selectedUser?.email}</Typography>
              </div>
              <div>
                <Typography>Phone No</Typography>
                <Typography>
                  : {selectedUser?.other_details?.contact_number}
                </Typography>
              </div>
              <div>
                <Typography>Gender</Typography>
                <Typography>: {selectedUser?.gender}</Typography>
              </div>
              <div>
                <Typography>Occupassion</Typography>
                <Typography>: {selectedUser?.occupassion}</Typography>
              </div>
              <div>
                <Typography>Address</Typography>
                <Typography>
                  : {selectedUser?.other_details?.address}
                </Typography>
              </div>
              <div>
                <Typography>Village</Typography>
                <Typography>
                  : {selectedUser?.other_details?.village}
                </Typography>
              </div>
              <div>
                <Typography>Taluka</Typography>
                <Typography>: {selectedUser?.other_details?.taluka}</Typography>
              </div>
              <div>
                <Typography>District</Typography>
                <Typography>: {selectedUser?.other_details?.disc}</Typography>
              </div>
              <div>
                <Typography>Pin Code</Typography>
                <Typography>
                  : {selectedUser?.other_details?.pin_code}
                </Typography>
              </div>
              <div>
                <Typography>State</Typography>
                <Typography>: {selectedUser?.other_details?.state}</Typography>
              </div>
              <div>
                <Typography>Country</Typography>
                <Typography>
                  : {selectedUser?.other_details?.country}
                </Typography>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setSelectedUser(null);
              setViewMoreDialogOpen(false);
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => ({
  getAllUsersData: state.UserData.getAllUsersData,
});

const mapDispatchToProps = (dispatch) => ({
  getAllUsersAction: () =>
    dispatch({
      type: GET_ALL_USERS_REQUEST,
    }),
  updateUserStatusAction: (status_type, user_id) =>
    dispatch({
      type: UPDATE_USER_STATUS_REQUEST,
      status_type,
      user_id,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);
