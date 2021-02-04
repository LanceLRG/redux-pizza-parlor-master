import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import Checkout from '../Checkout/Checkout';
import Admin from '../Admin/Admin';
import Header from '../Header/Header';


function App() {


  return (
    <Router>
      <div className='App'>
   
        <Header/>
        <Switch>
          <Route path='/customerinfo' component={CustomerInfo} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/admin' component={Admin} />
          <Route exact path='/' component={Home} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
