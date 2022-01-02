import React, { useState, useEffect } from "react";
import { Card, IconButton, makeStyles } from "@material-ui/core";
import {
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { GET_CONTACT_US_REQUEST } from "../../Constants/UserConstant";
import { connect } from "react-redux";
import MUIDataTable from "mui-datatables";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
          width: "20%",
        },
        "&:nth-child(2)": {},
      },
    },
  },
  tableMessage: {
    maxWidth: "250px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
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
    name: "message",
    label: "Message",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "send_email",
    label: "Send Email",
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

const AdminContactUs = ({ getContactUsData, GetContactUsAction }) => {
  const classes = useStyle();
  const [rows, setRows] = useState(null);
  const [viewMoreDialogOpen, setViewMoreDialogOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    if (getContactUsData?.data?.status === "1") {
      setRows(
        getContactUsData?.data?.data?.map((item, key) => {
          return {
            sr_no: key + 1,
            profile_image:
              item?.user[0]?.profile_image !== null ? (
                <div className={classes.userProfileImage}>
                  <img src={item?.user[0]?.profile_image} alt="User Icon" />
                </div>
              ) : (
                <AccountCircleIcon className={classes.userIcon} />
              ),
            name: item?.user[0]?.name,
            email: item?.user[0]?.email,
            phone: item?.user[0]?.other_details?.contact_number,
            message: (
              <Typography className={classes.tableMessage}>
                {item?.message}
              </Typography>
            ),
            send_email: (
              <a
                href={`mailto:${item?.user[0]?.email}?subject=Reseller Bazzar Customer Support`}
                rel="noreferrer"
                target="_blank"
              >
                Send Email
              </a>
            ),
            view_more: (
              <Button
                variant="contained"
                style={{
                  background: "blue",
                  color: "white",
                }}
                onClick={() => {
                  setSelectedMessage(item);
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
  }, [getContactUsData]);

  useEffect(() => {
    GetContactUsAction();
  }, []);
  return (
    <div className={classes.tableRootDiv}>
      {getContactUsData?.loading ? (
        <div className={classes.prograssBar}>
          <CircularProgress />
        </div>
      ) : (
        rows !== null && (
          <MUIDataTable
            title="Contact Us"
            data={rows}
            columns={columns}
            options={options}
          />
        )
      )}
      <Dialog
        open={viewMoreDialogOpen}
        onClose={() => {
          setSelectedMessage(null);
          setViewMoreDialogOpen(false);
        }}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>Contact Us Details</DialogTitle>
        <DialogContent>
          <div className={classes.userDetailsRoot}>
            <div className={classes.userDetailsLeftSide}>
              <div className={classes.userImageDiv}>
                {selectedMessage?.user[0]?.profile_image !== null && (
                  <img
                    src={selectedMessage?.user[0]?.profile_image}
                    alt="User Icon"
                  />
                )}
              </div>
              <Typography>{selectedMessage?.name}</Typography>
            </div>
            <Divider orientation="vertical" fullWidth />
            <div className={classes.userDetailsRightSide}>
              <div>
                <Typography>Name</Typography>
                <Typography>: {selectedMessage?.user[0]?.name}</Typography>
              </div>
              <div>
                <Typography>Email</Typography>
                <Typography>: {selectedMessage?.user[0]?.email}</Typography>
              </div>
              <div>
                <Typography>Phone No</Typography>
                <Typography>
                  : {selectedMessage?.user[0]?.other_details?.contact_number}
                </Typography>
              </div>
              <div>
                <Typography>Message</Typography>
                <Typography>: {selectedMessage?.message}</Typography>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setSelectedMessage(null);
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
  getContactUsData: state.UserData.getContactUsData,
});

const mapDispatchToProps = (dispatch) => ({
  GetContactUsAction: () =>
    dispatch({
      type: GET_CONTACT_US_REQUEST,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminContactUs);
