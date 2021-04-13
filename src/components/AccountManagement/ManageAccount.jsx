import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UsersContext } from '../../contexts/UsersContext';
const ManageAccount = () => {
    const {users,removeUsers} = useContext(UsersContext)
    console.log(users);
    return (
        <div>
      <div className="productManagement__wrapper--content">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                   {user.firstName}
                </td>
                <td>{user.LastName}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                    <button> <Link to={`/admin/accountManagement/editUsers/${user.id}`}>Edit</Link> </button> 
                </td>
                <td>
                    <button onClick={() =>removeUsers(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    )
}

export default ManageAccount
