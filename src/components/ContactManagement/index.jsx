import React from 'react'
import {Route,Switch} from 'react-router-dom'
import ContactForm from '../ContactForm/ContactForm'
import ManageContact from './ManageContact'

const ContactManagement = () => {
    return (
        <div>
            <div>
            </div>
            <div>
                <h2>Management Contact</h2>
                <div>
                        <Switch>
                            <Route exact  path="/admin/contactManagement">
                               <ManageContact/>
                            </Route>
                            <Route exact path="/admin/contactManagement/editContact/:id">
                                <ContactForm/>
                            </Route>
                        </Switch>
                </div>
            </div>
        </div>
    )
}

export default ContactManagement
