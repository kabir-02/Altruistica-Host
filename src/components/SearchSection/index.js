import React from 'react';
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
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


export default function SearchSection() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className='info-section' id='search'>
    <h2 className="title-section donh">Search</h2>
    <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '20px auto',
        maxWidth: 800
      }}
    />
<center>
<div className={classes.tabRoot}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Fundraising" {...a11yProps(0)} />
          <Tab label="Crowdfunding" {...a11yProps(1)} />
          <Tab label="Crowdsourcing" {...a11yProps(2)} />
          <Tab label="Auctioning" {...a11yProps(3)} />
          <Tab label="Covid-19 Support" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <VerticalTabSearch/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <VerticalTabSearch/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <VerticalTabSearch/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        <VerticalTabSearch/>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
        <VerticalTabSearch/>
        </TabPanel>
      </SwipeableViews>
    </div>



    </center>
    </div>
  );
}
