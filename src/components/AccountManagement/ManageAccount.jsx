import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, makeStyles, ButtonGroup, Button} from '@material-ui/core';
import React, { useContext,useState } from 'react'
import { Link } from 'react-router-dom';
import { UsersContext } from '../../contexts/UsersContext';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from "@material-ui/core/TextField";
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from "@material-ui/icons/Search";
import "../../css/RemoveUnderline.scss";

const ManageAccount = () => {
    const {users,removeUsers} = useContext(UsersContext)
    console.log(users);
    const[searchAccount,setAccount] = useState("")
    const onChange = (e) => {
      e.preventDefault();
      setAccount(e.target.value);
    };
    const searchValueAccount = (val) => {
      const filterAccount = val.filter((acc) => {
        if (searchAccount === "") {
          return acc;
        } else if  (
          acc.firstName.toLowerCase().includes(searchAccount.toLowerCase()) ||
          acc.email.toLowerCase().includes(searchAccount.toLowerCase()) ||
          acc.password.toLowerCase().includes(searchAccount.toLowerCase()) ||
          acc.LastName.toString().includes(searchAccount.toLowerCase())
        ) {
          return acc;
        }
      });
      return filterAccount;
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
          value={searchAccount}
          style={{marginBottom:"50px",width:"200px"}}
          onChange={onChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
             )
      }}></TextField>
      <div>
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
            {searchValueAccount(users).map(user => (
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
      </div>
        
    </>
    )
}

export default ManageAccount
