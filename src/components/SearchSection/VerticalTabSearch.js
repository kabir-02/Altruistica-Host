import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {SearchCardData} from './SearchCardData'
import Grid from '@material-ui/core/Grid';
import IndividualCard from '../CardSection/IndividualCard'

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

export default function VerticalTabSearch() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <Tab label="Medical" {...a11yProps(0)} />
        <Tab label="Education" {...a11yProps(1)} />
        <Tab label="Environment" {...a11yProps(2)} />
        <Tab label="Social Cause" {...a11yProps(3)} />
        <Tab label="NGOs" {...a11yProps(4)} />
        <Tab label="School Event" {...a11yProps(5)} />
        <Tab label="Homes" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <center>
      <Grid container spacing={3} >
        {SearchCardData.map((data, key)=>{
          return(
            <Grid item xs={12} sm={6} md={4} key={key} >
            <IndividualCard name={data.name} author={data.author} date={data.date} description={data.description} image={data.image} url={data.url} />
            </Grid>
          )
        })}
        </Grid>
        </center>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
