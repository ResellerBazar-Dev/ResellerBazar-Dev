import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        // display: "flex",
        // justifyContent:"center",
        // alignItems: "center",
        // justifyItems:"center",
        margin:"20px auto",
        width:"70%",
        [theme.breakpoints.down("sm")]: {
            width:"90%",
        },
    },

    main: {
        // maxWidth: "900px",
        padding: "50px",
        borderRadius: "20px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25);",
        
        [theme.breakpoints.down("sm")]: {
            padding: "10px",
        },
    },

    form_area: {
        display: "grid",
        padding: "10px",
        gridTemplateColumns: " auto auto ",
        gap: "2rem",
        placeItems: 'center',
        overflow: "hidden",

        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "auto",
            width: "auto",
        },

        [theme.breakpoints.up("sm")]: {
            gridTemplateColumns: "auto auto",
        },

    },

    txt: {
        border: "none",
        outline: "none",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25);",
        borderRadius: "10px",
        padding: "15px 30px",
        // maxWidth: "230px",
        fontSize: "15px",

        "&::placeholder": {
            color: "#978A8A",
        },

        [theme.breakpoints.down("sm")]: {
            maxWidth: "230px",
            width: "100%",
        },
        [theme.breakpoints.up("md")]: {
            maxWidth: "230px",
        },
        [theme.breakpoints.up("sm")]: {
            maxWidth: "350px",
            width: "100%",
        },
    },

    btn: {
        background: 'linear-gradient(180deg, #000000 0%, #D10024 100%)',
        color: "white",
        textTransform: "capitalize",
        borderRadius: "10px",
        border: "none",
        width: "115px",
    },

    btn_adjust: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "20px",
    },
}));

export default function ProfileEdit() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.main}>
                <div className={classes.form_area}>
                    <input type="text" placeholder="First Name" className={classes.txt} />
                    <input type="text" placeholder="Taluka" className={classes.txt} />
                    <input type="text" placeholder="Enter Your Mail" className={classes.txt} />
                    <input type="text" placeholder="Village" className={classes.txt} />
                    <input type="text" placeholder="Contact Number" className={classes.txt} />
                    <input type="text" placeholder="Pin Code" className={classes.txt} />
                    <input type="text" placeholder="State" className={classes.txt} />
                    <input type="text" placeholder="Occupassion" className={classes.txt} />
                    <input type="text" placeholder="Disc" className={classes.txt} />
                    <input type="text" placeholder="Address" className={classes.txt} />
                </div>
                <div className={classes.btn_adjust}>
                    <Button className={classes.btn}>save</Button>
                </div>
            </div>
        </div>
    )
}
