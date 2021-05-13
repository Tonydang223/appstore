import React from 'react'
import {Route,Switch} from 'react-router-dom'
import ContactForm from '../ContactForm/ContactForm'
import ManageContact from './ManageContact'
import '../ContactManagement/Contact.scss'

const ContactManagement = () => {
    return (
        <div className="wrapper-contact">
            <div className="wrapper-contact-above">
                <h2>Manage Contact</h2>
            </div>
            <div className="wrapper-contact-above">
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
    )
}

export default ContactManagement
