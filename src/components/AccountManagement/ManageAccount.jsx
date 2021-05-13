import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, makeStyles, ButtonGroup, Button} from '@material-ui/core';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UsersContext } from '../../contexts/UsersContext';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const ManageAccount = () => {
    const {users,removeUsers} = useContext(UsersContext)
    console.log(users);
    const useStyles = makeStyles({
      table: {
        minWidth: 300,
        margin: 20,
      },
      bold: {
        fontWeight: 'bold',
        fontSize:15,
        fontFamily: 'Arial, Helvetica, sans-serif'
      },
      paddingLeft:{
        paddingLeft:30,
        fontWeight: 'bold',
        fontSize:15,
      },
      color:{
        color:'#004040'
      },
      hover: {
        "&:hover": {
          backgroundColor: '#ffffff'
        }
      }
    });
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
        <Table aria-label="simple table" className={classes.table}>
          <TableHead >
            <TableRow className={classes.thead}>
              <TableCell  className={classes.bold}>Id</TableCell>
              <TableCell align="left" className={classes.bold}>First Name</TableCell>
              <TableCell align="left"  className={classes.bold}>Last Name</TableCell>
              <TableCell align="left"  className={classes.bold}>Email</TableCell>
              <TableCell align="left"  className={classes.bold}>Password</TableCell>
              <TableCell colSpan="2" align="left"  className={classes.bold && classes.paddingLeft}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>
                   {user.firstName}
                </TableCell>
                <TableCell>{user.LastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.password}</TableCell>
                <TableCell>
                    <Button> <Link to={`/admin/accountManagement/editUsers/${user.id}`} className={classes.color}><EditIcon/></Link> </Button>
                </TableCell>
                <TableCell>
                    <Button onClick={() =>removeUsers(user.id)} className={classes.color + classes.hover}><DeleteIcon/></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default ManageAccount
