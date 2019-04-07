import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import App from './app'
import Main from './main'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import Notice from './views/Notice/Notice'
import Personal from './views/Personal/Personal'
import CheckingIn from './views/CheckingIn/CheckingIn'
import EmployeeList from './views/EmployeeList/EmployeeList'

class MyRouter extends Component {

  render () {
    return (
      <Router>
          <App>
              <Switch>
              <Route path="/login" component={Login} />
                  <Route path="/" render={() => (
                      <Main>
                         <Switch>
                             <Route path="/home" component={Home} />
                             <Route path="/notice" component={Notice} />
                             <Route path="/personal" component={Personal} />
                             <Route path="/tools/checkingIn" component={CheckingIn} />
                             <Route path="/tools/employeeList" component={EmployeeList} />
                             <Redirect to="/home" />
                         </Switch>
                      </Main>
                  )} />
              </Switch>
          </App>
      </Router>
    )
  }

}

export default MyRouter;
