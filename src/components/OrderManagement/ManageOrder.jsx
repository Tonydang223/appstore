import React, { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, makeStyles, ButtonGroup, Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { UsersContext } from '../../contexts/UsersContext';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const ManageOrder = () => {
    const {cartItems,handleRemoveProduct} = useContext(ProductContext)
    console.log(cartItems.map((item)=>{return item}))
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
        },
        img:{
            width:80,
        }
      });
      const classes = useStyles();

    return (
        <TableContainer component={Paper}>
        <Table aria-label="simple table" className={classes.table}>

        <TableHead >
            <TableRow className={classes.thead}>
              <TableCell align="left" className={classes.bold}>ID</TableCell>
              <TableCell align="left"  className={classes.bold}>Image</TableCell>
              <TableCell align="left"  className={classes.bold}>Title</TableCell>
              <TableCell align="left"  className={classes.bold}>Category</TableCell>
              <TableCell align="left"  className={classes.bold}>Description</TableCell>
              <TableCell align="left"  className={classes.bold}>Size</TableCell>
              <TableCell align="left"  className={classes.bold}>Discount</TableCell>
              <TableCell align="left"  className={classes.bold}>Count</TableCell>
              <TableCell colSpan="2" align="left"  className={classes.bold && classes.paddingLeft}>Actions</TableCell>
            </TableRow>
          </TableHead>
        {cartItems.map(item => (
            <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>
            <img src={item.image} alt={item.title} className={classes.img}/></TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.size}</TableCell>
            <TableCell>{item.discount}</TableCell>
            <TableCell>{item.count}</TableCell>
            <TableCell>
                <Button> <Link to={`/admin/orderManagement/editOrders/${item.id}`} className={classes.color}>
                  <EditIcon/></Link> </Button>
            </TableCell>
            <TableCell>
                <Button  className={classes.color} onClick={()=>handleRemoveProduct(item.id)}><DeleteIcon/></Button>
            </TableCell>
          </TableRow>
        ))}
  </Table>
  </TableContainer>   

    )
}

export default ManageOrder

