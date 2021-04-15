import React, { useContext } from 'react'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import { ContactContext } from '../../contexts/ContactContext'

const ManageContact = () => {
    const {contacts,removeContact} = useContext(ContactContext)
    console.log(contacts)
    return (
        <div>
        <div className="productManagement__wrapper--content">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Full Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Your message</th>
                <th colSpan="2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(contact => (
                <tr key={contact.id}>
                  <td>{contact.id}</td>
                  <td>
                     {contact.fullName}
                  </td>
                  <td>{contact.phone}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                  <td>
                      <button><Link to={`/admin/contactManagement/editContact/${contact.id}`}>Edit</Link></button> 
                  </td>
                  <td>
                      <button onClick={() => removeContact(contact.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
          </div>
    )
}

export default ManageContact
