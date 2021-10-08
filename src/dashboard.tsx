import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Home';
import App from './App';
import { reduceEachLeadingCommentRange, updateNamedExports } from 'typescript';

interface props {
    uname: string;
}

function Dashboard(){
    return(
        <Router> 
          <Switch><Route exact path='/' component={Home}/> 
          <Route exact path='/details/:uname' component={App} /> 
          </Switch> 
         </Router> 
    )
}

export default Dashboard;