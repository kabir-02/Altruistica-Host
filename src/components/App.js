import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css'

import Home from '../pages/'
import Dashboard from './Dashboard/Dashboard';
import Preferences from './Preferences/Preferences';
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import UserProfile from './UserProfile'

import {SignIn} from "./Login/index";
import WhatsAppInt from './WhatsAppInt'
import SearchSection from './SearchSection';
import Blog from './Blog'
import DonationMatch from './DonationMatch'
import ViewMatch from './DonationMatch/ViewMatch'
import FundsIndex from './UserProfile/FundsIndex';
import UseAlcoins from './UserProfile/UseAlcoins';
import EditProfile from './UserProfile/EditProfile';
import AdminDashboard from './AdminDashboard'
import Fundraiser from './Fundraiser'
import Gratitude from './Gratitude'
import Checkout from './Checkout/Checkout'

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
          {/* // <Route path="/fundraiser">
           // <Fundraiser />
           // </Route> */}
          <Route path="/support">
            <Gratitude />
          </Route>
          <Route path="/admin">
            <AdminDashboard />
          </Route>
          <Route path="/matched-donors">
            <ViewMatch />
          </Route>
          <Route path="/checkout">
            <Checkout/>
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