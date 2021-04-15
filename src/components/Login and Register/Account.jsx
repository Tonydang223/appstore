import React, { useContext } from 'react'
import { UsersContext } from '../../contexts/UsersContext'

const Account = () => {
    const {currentUser} = useContext(UsersContext);
    return (
        <div>
            <p>{currentUser}</p>
        </div>
    )
}

export default Account
