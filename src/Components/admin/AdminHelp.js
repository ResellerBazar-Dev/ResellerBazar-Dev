import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import {
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
} from "@mui/material";
import { connect } from "react-redux";
import MUIDataTable from "mui-datatables";
import { GET_ALL_HELP_MESSAGES_REQUEST } from "../../Constants/AdminConstant";

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
  userDetailsRoot: {
    display: "flex",
    margin: "10px 0",
  },
  userDetails: {
    width: "100%",
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

const AdminHelp = ({ getAllHelpMessagesData, GetAllHelpMessagesAction }) => {
  const classes = useStyle();
  const [rows, setRows] = useState(null);
  const [viewMoreDialogOpen, setViewMoreDialogOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    if (getAllHelpMessagesData?.data?.status === "1") {
      setRows(
        getAllHelpMessagesData?.data?.data?.map((item, key) => {
          return {
            sr_no: key + 1,
            name: item?.name,
            email: item?.email,
            phone: item?.phone,
            message: (
              <Typography className={classes.tableMessage}>
                {item?.message}
              </Typography>
            ),
            send_email: (
              <a
                href={`mailto:${item?.email}?subject=Reseller Bazzar Customer Support`}
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
  }, [getAllHelpMessagesData]);

  useEffect(() => {
    GetAllHelpMessagesAction();
  }, []);
  return (
    <div className={classes.tableRootDiv}>
      {getAllHelpMessagesData?.loading ? (
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
        <DialogTitle>Help Message Details</DialogTitle>
        <DialogContent>
          <div className={classes.userDetailsRoot}>
            <div className={classes.userDetails}>
              <div>
                <Typography>Name</Typography>
                <Typography>: {selectedMessage?.name}</Typography>
              </div>
              <div>
                <Typography>Email</Typography>
                <Typography>: {selectedMessage?.email}</Typography>
              </div>
              <div>
                <Typography>Phone No</Typography>
                <Typography>: {selectedMessage?.phone}</Typography>
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
  getAllHelpMessagesData: state.AdminData.getAllHelpMessageData,
});

const mapDispatchToProps = (dispatch) => ({
  GetAllHelpMessagesAction: () =>
    dispatch({
      type: GET_ALL_HELP_MESSAGES_REQUEST,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminHelp);
