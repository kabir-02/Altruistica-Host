import React, {useState, useEffect} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SearchBar from "material-ui-search-bar";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import VerticalTabSearch from './VerticalTabSearch'
import {SearchCardData} from './SearchCardData'
import Grid from '@material-ui/core/Grid';
import FundCards from '../CardSection/FundCards'
import Axios from 'axios';
import SearchByName from './SearchByName'

const fundraising= ["All", "Medical", "Education", "Environment", "Social Cause", "Home"];
const crowdfunding= ["All", "Business", "Idea", "Project", "Product", "Research"];
const crowdsourcing= ["All", "Ideas", "Items", "Labour"];
const organizations= ["All", "NGOs", "Schools"];
const covid19= ["All", "Treatment", "Goods", "Medicines"];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  tabRoot: {
    backgroundColor: theme.palette.background.paper,
    width: '90%',
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}


export default function SearchSection() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [funds, setFunds] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8082/displayfunds").then((response)=>{
      console.log(response.data);
      setFunds(response.data);
    });
  },[]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className='info-section' id='search'>
    <h2 className="title-section donh">Donate Here</h2>
<center>
<div className={classes.tabRoot}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable force tabs example"
        >
          <Tab label="All Categories" {...a11yProps(0)} />
          <Tab label="Fundraising" {...a11yProps(1)} />
          <Tab label="Crowdfunding" {...a11yProps(2)} />
          <Tab label="Crowdsourcing" {...a11yProps(3)} />
          <Tab label="Organizations" {...a11yProps(4)} />
          <Tab label="Covid-19 Support" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <SearchByName/>
        <Grid container spacing={3} >
        {funds.map((data, key)=>{
          return(
            <Grid item xs={12} sm={6} md={4} key={key} >
            <FundCards title={data.fr_title} target={data.fr_target} gendate={data.fr_gentime} image={data.image} url={data.url} />
            </Grid>
          )
        })}
        </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <VerticalTabSearch data={fundraising} fr_class={"Fundraising"}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <VerticalTabSearch data={crowdfunding} fr_class={"Crowdfunding"} />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        <VerticalTabSearch data={crowdsourcing} fr_class={"Crowdsourcing"}/>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
        <VerticalTabSearch data={organizations} fr_class={"Organisation"}/>
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
        <VerticalTabSearch data={covid19} fr_class={"Covid19"}/>
        </TabPanel>
      </SwipeableViews>
    </div>



    </center>
    </div>
  );
}
