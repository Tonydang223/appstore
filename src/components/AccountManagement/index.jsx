import { Button } from '@material-ui/core';
import React, { useContext } from 'react'

import { Route, Switch } from "react-router-dom";
import EditAccountForm from '../AccountForm/EditAccountForm';
import ManageAccount from './ManageAccount';
import '../AccountManagement/Account.scss';

const AccountManagement = () => {
    
    return (
        <div className="wraper-account">
              <div className="wraper-above-account">
                <h2>Manage Account</h2>
              </div >
              <div className="wraper-bottom-account">
              <Switch >
                <Route exact path="/admin/accountManagement">
                  <ManageAccount/>
                </Route>
                <Route exact path="/admin/accountManagement/editUsers/:id">
                  <EditAccountForm/>
                </Route>
              </Switch>
              </div>

        </div>
    )
}

export default AccountManagement
