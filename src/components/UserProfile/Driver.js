import React,{useState} from "react";
import { useParams } from "react-router-dom";
import Content from "./Content";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import DonationLine from "./DonationLine";
import PeopleDialog from "./PeopleDialog";
import { useSelector } from "react-redux";
import { selectPeople } from "./peopleSlice";
import DonationsTable from "./DonationsTable";
import VehiclePie from "./VehiclePie"
import { Button } from '../ButtonElement'
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import DialogEditFund from './DialogEditFund';
import CreateFund from './CreateFund';

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);


const useStyles = makeStyles((theme) => ({
  headerContainer: {
    position: "relative",
    height: "100px",
  },
  header: {
    display: "flex",
    position: "absolute",
    width: "calc(100%)",
    top: "-70px",
    alignItems: "flex-end",
    "& > *": {
      margin: `${theme.spacing(3)}px ${theme.spacing(1)}px`,
    },
  },
  spacer: {
    flexGrow: "1",
  },
  avatar: {
    border: `3px solid white`,
    width: theme.spacing(13),
    height: theme.spacing(13),
    boxShadow: theme.shadows[3],
  },
  actionGroup: {
    display: "flex",
    width: "330px",
    justifyContent: "space-between",
    marginRight: 0,
  },
  summaryCards: {
    display: "flex",
    flexWrap: "wrap",
  },
  summaryCard: {
    margin: theme.spacing(1),
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  tripCard: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
  },
}));

export function SummaryCard({ title, value, component }) {
  const classes = useStyles();
  return (
    <Paper elevation={2} className={classes.summaryCard}>
      <Typography color={"textSecondary"} variant="h5" gutterBottom>
        {title}
      </Typography>
      {component || (
        <Typography color={"primary"} variant="h3">
          {value}
        </Typography>
      )}
    </Paper>
  );
}

export default function Driver({ id }) {
    const [hover, setHover] = useState(false)
    const onHover = ()=>{
        setHover(!hover)
    }
  const { driverId } = useParams();
  id = id ? id : driverId;
  const rows = useSelector(selectPeople);
  let driver = rows.find((row) => row.id === +id);
  if (!driver) {
    driver = { name: "Anna Raja", id: 3, img: "https://th.bing.com/th/id/Rf0fcbc9bb7d6f186d0cd99e58fed41db?rik=kfCiRVmGTQ0CCg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-wk-Hijnxj0g%2fTs3HDjxQJFI%2fAAAAAAAACFE%2fOHUv6ya_PZw%2fs1600%2fnara%2bRohit%2bsolo.jpg&ehk=Chc%2fJXTxfQp2HhwfnEiVmmhhyOdE6iROHg5NyOMjszY%3d&risl=&pid=ImgRaw" };
  }
  const classes = useStyles();
  const loading = false;

  if (loading) {
    return (
      <Content>
        <CircularProgress />
      </Content>
    );
  }

  const donations = 4;
  const amount = 10000;  
  const allCoins = amount/10;
  const rank=10;
  return (
    <Content>
      <div className={classes.headerContainer} style={{
          marginTop: '120px',
      }}>
        <div className={classes.header}>
          <Avatar
            alt={driver.name}
            src={driver.img}
            classes={{ root: classes.avatar, circle: classes.circle }}
          />
          <Typography variant={"h5"}>{driver.name}</Typography>
          <Chip variant={"outlined"}  label="India" />
          <Rating name="read-only" value={4.3} readOnly />
          <div className={classes.spacer} />
          <div className={classes.actionGroup}>
            <PeopleDialog
              data={driver}
              render={(open) => (
                <Button
                  color="primary"
                  variant="contained"
                  startIcon={<EditIcon />}
                  onClick={open}
                >
                  Edit
                </Button>
              )}
            />
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </div>
        </div>
      </div>
      <Grid container spacing={3} >
        <Grid item xs={12} sm={3}> 
                <CreateFund/>
                </Grid>

        <Grid item xs={12} sm={3}>
        <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit"></Typography>
           {"Check out your previous funds."}{' '}
            {"Edit, update and delete as you like."}
          </React.Fragment>
        }
      >
      <Button to='/view-funds' onMouseEnter = {onHover} onMouseLeave = {onHover} >
      Fund List
            </Button>
            </HtmlTooltip>
      </Grid>

      <Grid item xs={12} sm={3}>
        <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit"></Typography>
           {"Check out your profile. Add fields, update whatever you want to."}{' '}
          </React.Fragment>
        }
      >
      <Button to='/use-alcoins' onMouseEnter = {onHover} onMouseLeave = {onHover}>
      Use AL Coins
        </Button>
        </HtmlTooltip>
        </Grid>

        <Grid item xs={12} sm={3}>
        <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit"></Typography>
           {"Gained Al Coins? It's time to see how you can use them to the fullest."}
          </React.Fragment>
        }
      >
      <Button to='/edit-profile' onMouseEnter = {onHover} onMouseLeave = {onHover}>
      View Profile
        </Button>
        </HtmlTooltip>
        </Grid>

        </Grid>
      <div className={classes.summaryCards}>
        <SummaryCard title={"Amount Donated"} value={"Rs " + amount} />
        <SummaryCard title={"No. of Donations"} value={donations} />
        <SummaryCard title={"Al Coins"} value={allCoins} />
        <SummaryCard title={"Ranking"} value={rank} />
      </div>
      <div className={classes.summaryCards}>
        <SummaryCard title="Last 30 Days" component={<DonationLine />} />
        <SummaryCard title="Amount raised on Latest Fund" component={<VehiclePie />} />
      </div>
      <SummaryCard title={"Recent Donations"} component={<DonationsTable />} />
    </Content>
  );
}
