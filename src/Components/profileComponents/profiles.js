import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { ReactComponent as Profile } from '../../images/Profile.svg';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    main: {
        // maxwidth:"100%",
        // maxheight:"95vh",
        // padding:"auto",
    },

    root: {
        display: "flex",
        flexWrap: "wrap",
        padding: '20px',
        maxWidth: "1140px",
        minHeight: "90vh",
        justifyContent: "space-between",
        alignItems: "center",
        fontStyle: "Montserrat",
        overflow: "hidden",
        margin: "auto",
        // border: "2px solid black",
        [theme.breakpoints.down("sm")]: {
            padding: "20px",
        },
    },

    profile_card: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "2px solid blue",
        flexBasis: '25%',

        [theme.breakpoints.down("sm")]: {
            flexBasis: '100%',
        },

    },

    main_card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
        // width:"65%",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25);",
        padding: '50px 40px'
    },

    Avtar: {
        height: "150px",
        width: "150px",
        borderRadius: "50%",
        boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.25);",
    },

    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: '0 !important',

        "&>p": {
            fontWeight: "500",
            fontFamily: "Montserrat",
        },

        "&>a": {
            color: "#D10024",
            fontWeight: "700",
        },

    },

    btn: {
        background: 'linear-gradient(180deg, #000000 0%, #D10024 100%)',
        color: "white",
        margin: "30px 0px",
        textTransform: "capitalize",
        borderRadius: "10px",
        display: "flex",
        border: "none",
        width: "130px",
        fontWeight: "700",
    },

    heading: {
        position: 'relative',
        display: "flex",
        top: "-50px",
        justifyContent: "center",

        [theme.breakpoints.down("md")]: {
            top: '0px',
            padding: "20px",
        },

        "&>svg": {
            height: "30px",
            width: "200px",
        },
    },
    main_profile: {
        // border: "2px solid green",
        flexBasis: '75%',
        "&>div>Input": {
            padding: "15px 30px",
        },

        [theme.breakpoints.down("sm")]: {
            flexBasis: '100%',
        },
    },

    form_area: {
        display: "grid",
        gridTemplateColumns: " auto auto ",
        gap: "1.5rem",
        placeItems: 'center',

        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "auto",
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
        padding: "0px 20px",
        maxWidth: "230px",
        // width: "100%",
        fontSize: "15px",

        "&::placeholder": {
            color: "#978A8A",
        },

        [theme.breakpoints.down("sm")]: {
            maxWidth: "230px",
            width: "80%",
        },
        [theme.breakpoints.up("md")]: {
            maxWidth: "230px",
        },
        [theme.breakpoints.up("sm")]: {
            maxWidth: "350px",
            width: "80%",
        },
    },


}));

export default function profiles() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <div className={classes.root}>
                <div className={classes.profile_card}>
                    <Card className={classes.main_card} variant="outlined">
                        <div className={classes.Avtar}></div>
                        <CardContent className={classes.content}>
                            <p>User Name</p>
                            <Link to="/ProfileEdit" style={{textDecoration:"none"}}>
                                <Button className={classes.btn}>Edit Profile</Button>
                            </Link>
                            <a href="!#">Share Profile Link</a>
                        </CardContent>
                    </Card>
                </div>
                <div className={classes.main_profile}>
                    <div className={classes.heading}>
                        <Profile />
                    </div>
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
                </div>
            </div>
        </div>
    );
}
