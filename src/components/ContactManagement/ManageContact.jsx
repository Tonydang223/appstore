import React, { useContext } from 'react'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import { ContactContext } from '../../contexts/ContactContext'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, makeStyles, ButtonGroup, Button} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const ManageContact = () => {
    const {contacts,removeContact} = useContext(ContactContext)
    console.log(contacts)
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
            <TableHead>
              <TableRow>
                <TableCell  align="left" className={classes.bold}>Id</TableCell>
                <TableCell  align="left" className={classes.bold}>Full Name</TableCell>
                <TableCell  align="left" className={classes.bold}>Phone</TableCell>
                <TableCell  align="left" className={classes.bold}>Email</TableCell>
                <TableCell  align="left" className={classes.bold}>Your message</TableCell>
                <TableCell colSpan="2"  align="left" className={classes.paddingLeft}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map(contact => (
                <TableRow key={contact.id}>
                  <TableCell>{contact.id}</TableCell>
                  <TableCell>
                     {contact.fullName}
                  </TableCell>
                  <TableCell>{contact.phone}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.message}</TableCell>
                  <TableCell>
                      <Button><Link to={`/admin/contactManagement/editContact/${contact.id}`} className={classes.color}><EditIcon/></Link></Button> 
                  </TableCell>
                  <TableCell>
                      <Button onClick={() => removeContact(contact.id)} className={classes.color}><DeleteIcon/></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </TableContainer>

    )
}

export default ManageContact
