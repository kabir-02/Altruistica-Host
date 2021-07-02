import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FundCards from '../CardSection/FundCards'
import Axios from 'axios';
import SearchByName from './SearchByName'
import SearchByNameCat from './SearchByNameCat'

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
  const [funds00, setFunds00] = useState([]);
  const [funds01, setFunds01] = useState([]);
  const [funds02, setFunds02] = useState([]);
  const [funds03, setFunds03] = useState([]);
  const [funds04, setFunds04] = useState([]);
  const [funds05, setFunds05] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8082/displayall?class="+props.fr_class).then((response)=>{
      setFunds00(response.data);
    });
    for( let i = 1; i<=props.data.length; i++)
    {
      Axios.get("http://localhost:8082/display?class="+props.fr_class+"&category="+i).then((response)=>{
      // console.log(response.data);
      // console.log("This is value"+ value);
      // console.log(props.data.length);
      switch(i){
        case 1: setFunds01(response.data); break;
        case 2: setFunds02(response.data); break;
        case 3: setFunds03(response.data); break;
        case 4: setFunds04(response.data); break;
        case 5: setFunds05(response.data); break;
      }
    });
  }
  },[]);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("This is newValue"+ newValue);
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
      <SearchByName fr_class={props.fr_class}/>
      {/* <Grid   className='grid-full' container spacing={3} >
        {funds00.map((data, key)=>{
          return(
            <Grid item xs={12} sm={6} md={4} key={key} >
            <FundCards title={data.fr_title} target={data.fr_target} gendate={data.fr_gentime} image={data.image} url={data.url} />
            </Grid>
          )
        })}
        </Grid> */}
        </center>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <center>
      <SearchByNameCat fr_class={props.fr_class} fr_category={1} />
      {/* <Grid className='grid-full' container spacing={3} >
        {funds01.map((data, key)=>{
          return(
            <Grid item xs={12} sm={6} md={4} key={key} >
            <FundCards title={data.fr_title} target={data.fr_target} gendate={data.fr_gentime} image={data.image} url={data.url} />
            </Grid>
          )
        })}
        </Grid> */}
        </center>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <center>
      <SearchByNameCat fr_class={props.fr_class} fr_category={2}/>
      {/* <Grid className='grid-full' container spacing={3} >
        {funds02.map((data, key)=>{
          return(
            <Grid item xs={12} sm={6} md={4} key={key} >
            <FundCards title={data.fr_title} target={data.fr_target} gendate={data.fr_gentime} image={data.image} url={data.url} />
            </Grid>
          )
        })}
        </Grid> */}
        </center>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <center>
      <SearchByNameCat fr_class={props.fr_class} fr_category={3}/>
      {/* <Grid className='grid-full' container spacing={3} >
        {funds03.map((data, key)=>{
          return(
            <Grid item xs={12} sm={6} md={4} key={key} >
            <FundCards title={data.fr_title} target={data.fr_target} gendate={data.fr_gentime} image={data.image} url={data.url} />
            </Grid>
          )
        })}
        </Grid> */}
        </center>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <center>
      <SearchByNameCat fr_class={props.fr_class} fr_category={4}/>
      {/* <Grid className='grid-full' container spacing={3} >
        {funds04.map((data, key)=>{
          return(
            <Grid item xs={12} sm={6} md={4} key={key} >
            <FundCards title={data.fr_title} target={data.fr_target} gendate={data.fr_gentime} image={data.image} url={data.url} />
            </Grid>
          )
        })}
        </Grid> */}
        </center>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <center>
      <SearchByNameCat fr_class={props.fr_class} fr_category={5}/>
      {/* <Grid className='grid-full' container spacing={3} >
        {funds05.map((data, key)=>{
          return(
            <Grid item xs={12} sm={6} md={4} key={key} >
            <FundCards title={data.fr_title} target={data.fr_target} gendate={data.fr_gentime} image={data.image} url={data.url} />
            </Grid>
          )
        })}
        </Grid> */}
        </center>
      </TabPanel>
    </div>
  );
}
