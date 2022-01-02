import React from "react";
import AdminNavbar from "../CommonComponents/AdminNavbar";
import Box from "@mui/material/Box";
import DrawerComponents from "../CommonComponents/DrawerComponents";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Divider } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const useStyle = makeStyles((theme) => ({
  table: {
    marginTop: "100px",
  },
  search: {
    float: "right",
    marginTop: "25px !important",
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, email, phone) {
  return { name, email, phone };
}

const rows = [
  createData("Jay Depani", "jay@gmail.com", 5566332211),
  createData("Jay Depani", "jay@gmail.com", 5566332211),
  createData("Jay Depani", "jay@gmail.com", 5566332211),
  createData("Jay Depani", "jay@gmail.com", 5566332211),
  createData("Jay Depani", "jay@gmail.com", 5566332211),
  createData("Jay Depani", "jay@gmail.com", 5566332211),
  createData("Jay Depani", "jay@gmail.com", 5566332211),
  createData("Jay Depani", "jay@gmail.com", 5566332211),
  createData("Jay Depani", "jay@gmail.com", 5566332211),
  createData("Jay Depani", "jay@gmail.com", 5566332211),
  createData("Jay Depani", "jay@gmail.com", 5566332211),
  createData("Jay Depani", "jay@gmail.com", 5566332211),
  createData("Jay Depani", "jay@gmail.com", 5566332211),
  createData("Jay Depani", "jay@gmail.com", 5566332211),
  createData("Jay Depani", "jay@gmail.com", 5566332211),
  createData("Jay Depani", "jay@gmail.com", 5566332211),
  createData("Jay Depani", "jay@gmail.com", 5566332211),
  createData("Jay Depani", "jay@gmail.com", 5566332211),
  createData("Jay Depani", "jay@gmail.com", 5566332211),
  createData("Jay Depani", "jay@gmail.com", 5566332211),
  createData("Jay Depani", "jay@gmail.com", 5566332211),
  createData("Jay Depani", "jay@gmail.com", 5566332211),
  createData("Jay Depani", "jay@gmail.com", 5566332211),
];

const Admins = () => {
  const classes = useStyle();
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <AdminNavbar />
        <DrawerComponents />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Typography variant="h3" style={{ fontWeight: 600 }}>
            Super User
          </Typography>
          <Divider style={{ backgroundColor: "#D10024" }} />
          <TextField
            id="search"
            variant="standard"
            className={classes.search}
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <TableContainer component={Paper} className={classes.table}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>User Image</StyledTableCell>
                  <StyledTableCell align="center">Admin ID</StyledTableCell>
                  <StyledTableCell align="center">Admin Name</StyledTableCell>
                  <StyledTableCell align="center">Phone</StyledTableCell>
                  <StyledTableCell align="center">
                    Active/Deactive
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    Account Delete
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      <AccountCircleIcon style={{ fontSize: "4rem" }} />
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.email}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.phone}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button variant="contained" color="secondary">
                        Deactive
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <DeleteIcon style={{ fontSize: "2rem", color: "red" }} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
};

export default Admins;
