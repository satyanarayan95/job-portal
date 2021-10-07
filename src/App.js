import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import Home from './components/Home/Home';
import Login from './components/login/Login';
import PostFeed from './components/postedJob/PostFeed'
import ForgotPassword from "./components/forgotpassword/ForgotPassword";
import ResetPassword from "./components/resetpassword/ResetPassword";
import Signup from "./components/signup/Signup";
import ApplicantsModal from './components/ApplicantsModal/ApplicantsModal';
import CreateJob from './components/createjob/CreateJob';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/resetpassword" component={ResetPassword}></Route>
        <Route path="/forgotpassword" component={ForgotPassword}></Route>
        <Route path="/createjob" component={CreateJob}></Route>
        <Route path="/postfeed" component={PostFeed}></Route>
        <Route path="/modal" component={ApplicantsModal}></Route>
        <Route  exact path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
