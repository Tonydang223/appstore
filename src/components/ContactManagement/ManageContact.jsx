import React, { useContext,useState } from 'react'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import { ContactContext } from '../../contexts/ContactContext'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, makeStyles, ButtonGroup, Button} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from "@material-ui/core/TextField";
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from "@material-ui/icons/Search";
import "../../css/RemoveUnderline.scss";

const ManageContact = () => {
    const {contacts,removeContact} = useContext(ContactContext)
    console.log(contacts)
    const[searchContact,setContact] = useState("")
    const onChange = (e) => {
      e.preventDefault();
      setContact(e.target.value);
    };
    const searchValueContact = (val) => {
      const filterContact = val.filter((cont) => {
        if (searchContact === "") {
          return cont;
        } else if  (
          cont.fullName.toLowerCase().includes(searchContact.toLowerCase()) ||
          cont.email.toLowerCase().includes(searchContact.toLowerCase()) ||
          cont.message.toLowerCase().includes(searchContact.toLowerCase()) ||
          cont.phone.toString().includes(searchContact.toLowerCase())
        ) {
          return cont;
        }
      });
      return filterContact;
    };
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
      <>
          <TextField
          id="standard-secondary"
          label="Search"
          color="secondary"
          name="search"
          value={searchContact}
          style={{marginBottom:"50px",width:"200px",textAlign:"left"}}
          onChange={onChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
             )
            }}
      />
      <div>
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
              {searchValueContact(contacts).map(contact => (
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
          </div>
        </>
    )
}

export default ManageContact
