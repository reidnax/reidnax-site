import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector } from "react-redux";
import ItemPro from "../Home/ItemPro";
import site from "../../assets/site.png";
const useStyles = makeStyles((theme) => ({
    intro: {
        padding: "3vh",
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.up("sm")]: {
            padding: "3vh",
            backgroundColor: theme.palette.primary.main
        }
    },
    introDarkMode: {
        padding: "3vh",
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.up("sm")]: {
            padding: "3vh",
            backgroundColor: theme.palette.primary.main
        }
    },
    introPara: {
        paddingTop: "5vh",
        paddingBottom: "5vh",
        width: "30vw",
        [theme.breakpoints.up("sm")]: {
            paddingTop: "15vh",
            paddingBottom: "15vh",
            width: "30vw"
        }
    },
    introDesp: {
        paddingTop: "5vh",
        paddingBottom: "5vh",
        width: "50vw",
        [theme.breakpoints.up("sm")]: {
            paddingTop: "15vh",
            paddingBottom: "15vh",
            width: "50vw"
        }
    },
    icons: {
        height: "25vh",
        width: "20vw",
        padding: "calc( 0.7vh + 0.7vw )",
        color: theme.palette.secondary.main
    },
    carousel: {
        width: "55vw",
        [theme.breakpoints.up("sm")]: {
            width: "64vw"
        }
    }
}));

const items = [
    {
        name: "This Site",
        backgroundImage: `url(${site})`,
        description: "Created My PortFolio"
    }
];

const Websites = () => {
    const classes = useStyles();
    const darkMode = useSelector((state) => state.darkMode);
    return (
        <div className={darkMode ? classes.introDarkMode : classes.intro}>
            <Grid container justify="space-between">
                <Grid
                    item
                    container
                    direction="column"
                    classes={{ root: classes.introPara }}
                    spacing={1}
                >
                    <Grid item>
                        <Typography color="secondary" variant="h4">
                            Websites
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography color="secondary">
                            The Websites I Designed and Created
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item className={classes.carousel}>
                    <Carousel indicators={false}>
                        {items.map((item) => (
                            <ItemPro key={item} item={item} />
                        ))}
                    </Carousel>
                </Grid>
            </Grid>
        </div>
    );
};

export default Websites;
