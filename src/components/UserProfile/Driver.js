import React,{useState} from "react";
import { useParams } from "react-router-dom";
import Content from "./Content";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import EditIcon from "@material-ui/icons/Edit";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DonationLine from "./DonationLine";
import { useSelector } from "react-redux";
import { selectPeople } from "./peopleSlice";
import DonationsTable from "./DonationsTable";
import VehiclePie from "./VehiclePie"
import { Button } from '../ButtonElement'
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import CreateFund from './CreateFund';
import UseAlcoins from './UseAlcoins';
import EditProfile from './EditProfile';
import ViewFunds from './ViewFunds';

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
    driver = { name: "Vritika Naik", id: 3, img: "https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" };
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

  const donations = 5;
  const amount = 55500;  
  const allCoins = amount/10;
  const rank=2;
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
          <Typography variant={"h5"} >{driver.name}</Typography>
          <Chip variant={"outlined"}  label="India" />
          <div className={classes.spacer} />
          <div className={classes.actionGroup}>
             <Button
                  color="primary"
                  variant="contained"
                  startIcon={<EditIcon />}
                  
                >
                  Be Eligible for Gratitude Donations
                </Button>
          </div>
        </div>
      </div>
      <Grid container spacing={3} >
        <Grid item xs={12} sm={3}> 
                <CreateFund/>
        </Grid>

        <Grid item xs={12} sm={3}>
          <ViewFunds/>
        </Grid>
      
        <Grid item xs={12} sm={3}>
        <UseAlcoins/>
        </Grid>

        <Grid item xs={12} sm={3}>
       <EditProfile/>
        </Grid>

        </Grid>
      <div className={classes.summaryCards}>
        <SummaryCard title={"Amount Donated"} value={"Rs " + amount} />
        <SummaryCard title={"No. of Donations"} value={donations} />
        <SummaryCard title={"AL Coins"} value={allCoins} />
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
