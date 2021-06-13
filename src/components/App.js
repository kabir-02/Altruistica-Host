import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css'

import Home from '../pages/'
import Dashboard from './Dashboard/Dashboard';
import Preferences from './Preferences/Preferences';
import useToken from './useToken';
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import UserProfile from './UserProfile'

import {SignIn} from "./Login/index";
import WhatsAppInt from './WhatsAppInt'
import SearchSection from './SearchSection';
import Blog from './Blog'
import DonationMatch from './DonationMatch'
import FundsIndex from './UserProfile/FundsIndex';
import UseAlcoins from './UserProfile/UseAlcoins';
import EditProfile from './UserProfile/EditProfile';

function App() { 
  const [isOpen, setIsOpen]= useState(false);

  const toggle =()=>{
      setIsOpen(!isOpen);
  }
  // const { token, setToken } = useToken();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <div className="wrapper">
      <BrowserRouter>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
       <Navbar toggle={toggle}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/donate">
            <SearchSection/>
          </Route>
          <Route path="/covid19-support">
            <Blog/>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/donor-match">
            <DonationMatch/>
          </Route>
          <Route path="/user-profile">
            <UserProfile/>
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
          <Route path="/view-funds">
            <FundsIndex />
          </Route>
          <Route path="/use-alcoins">
            <UseAlcoins />
          </Route>
          <Route path="/edit-profile">
            <EditProfile />
          </Route>
          <Route path="/signin" component={SignIn}/>
        </Switch>
        <WhatsAppInt/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App