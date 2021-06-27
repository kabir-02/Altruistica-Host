import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {SearchCardData} from './SearchCardData'
import Grid from '@material-ui/core/Grid';
import FundCards from '../CardSection/FundCards'
import Axios from 'axios';
import SearchByName from './SearchByName'

import SearchBar from "material-ui-search-bar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabSearch(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [funds01, setFunds01] = useState([]);
  const [funds02, setFunds02] = useState([]);
  const [funds03, setFunds03] = useState([]);
  const [funds04, setFunds04] = useState([]);
  const [funds05, setFunds05] = useState([]);
  const [funds06, setFunds06] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8082/display01").then((response)=>{
      console.log(response.data);
      setFunds01(response.data);
    });
    Axios.get("http://localhost:8082/display02").then((response)=>{
      console.log(response.data);
      setFunds02(response.data);
    });
    Axios.get("http://localhost:8082/display03").then((response)=>{
      console.log(response.data);
      setFunds03(response.data);
    });
    Axios.get("http://localhost:8082/display04").then((response)=>{
      console.log(response.data);
      setFunds04(response.data);
    });
    Axios.get("http://localhost:8082/display05").then((response)=>{
      console.log(response.data);
      setFunds05(response.data);
    });
    Axios.get("http://localhost:8082/display06").then((response)=>{
      console.log(response.data);
      setFunds06(response.data);
    });
  },[]);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classType=props.data;
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
      {
      classType.map((classtype, index) =>
        <Tab label={classtype} {...a11yProps(index)} />
      )
      }
      </Tabs>
      <TabPanel value={value} index={0}>
      <center>
      <SearchByName/>
      <Grid container spacing={3} >
        {funds01.map((data, key)=>{
          return(
            <Grid item xs={12} sm={6} md={4} key={key} >
            <FundCards title={data.fr_title} target={data.fr_target} gendate={data.fr_gentime} image={data.image} url={data.url} />
            </Grid>
          )
        })}
        </Grid>
        </center>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <center>
      <SearchByName/>
      <Grid container spacing={3} >
        {funds02.map((data, key)=>{
          return(
            <Grid item xs={12} sm={6} md={4} key={key} >
            <FundCards title={data.fr_title} target={data.fr_target} gendate={data.fr_gentime} image={data.image} url={data.url} />
            </Grid>
          )
        })}
        </Grid>
        </center>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <center>
      <SearchByName/>
      <Grid container spacing={3} >
        {funds03.map((data, key)=>{
          return(
            <Grid item xs={12} sm={6} md={4} key={key} >
            <FundCards title={data.fr_title} target={data.fr_target} gendate={data.fr_gentime} image={data.image} url={data.url} />
            </Grid>
          )
        })}
        </Grid>
        </center>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <center>
      <SearchByName/>
      <Grid container spacing={3} >
        {funds04.map((data, key)=>{
          return(
            <Grid item xs={12} sm={6} md={4} key={key} >
            <FundCards title={data.fr_title} target={data.fr_target} gendate={data.fr_gentime} image={data.image} url={data.url} />
            </Grid>
          )
        })}
        </Grid>
        </center>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <center>
      <SearchByName/>
      <Grid container spacing={3} >
        {funds05.map((data, key)=>{
          return(
            <Grid item xs={12} sm={6} md={4} key={key} >
            <FundCards title={data.fr_title} target={data.fr_target} gendate={data.fr_gentime} image={data.image} url={data.url} />
            </Grid>
          )
        })}
        </Grid>
        </center>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <center>
      <SearchByName/>
      <Grid container spacing={3} >
        {funds06.map((data, key)=>{
          return(
            <Grid item xs={12} sm={6} md={4} key={key} >
            <FundCards title={data.fr_title} target={data.fr_target} gendate={data.fr_gentime} image={data.image} url={data.url} />
            </Grid>
          )
        })}
        </Grid>
        </center>
      </TabPanel>
    </div>
  );
}
