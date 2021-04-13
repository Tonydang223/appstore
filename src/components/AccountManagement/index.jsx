import { Button } from '@material-ui/core';
import React, { useContext } from 'react'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditAccountForm from '../AccountForm/EditAccountForm';
import ManageAccount from './ManageAccount';

const AccountManagement = () => {
    
    return (
        <div>
          <div>
          </div>
          <div>
            <h2>Manage Account</h2>
            <div>
              <Router>
              <Switch>
                <Route exact path="/admin/accountManagement">
                  <ManageAccount/>
                </Route>
                <Route exact path="/admin/accountManagement/editUsers/:id">
                  <EditAccountForm/>
                </Route>
              </Switch>
              </Router>
            </div>
          </div>
        </div>
    )
}

export default AccountManagement
