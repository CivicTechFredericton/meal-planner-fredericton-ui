import React, { Component } from 'react'  
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';  
import Paper from '@material-ui/core/Paper';  
//import axios from 'axios';  

const tableData = [{
    Breakfast: 'Flossing habit',
    Lunch: '12 messages',
    Dinner: 'ab',
    Snacks:'a',
    Drinks:'b',
}, {
    Breakfast: 'Post exo instructions',
    Lunch: '5 messages',
    Dinner: 'abc',
    Snacks:'a',
    Drinks:'b',
}, {
    Breakfast: 'Appointment feedback',
    Lunch: '1 message',
    Dinner: 'abcd',
    Snacks:'a',
    Drinks:'b',
}];

export class CreatePlanTable extends Component {  
  constructor(props) {  
    super(props)  
    this.state = {  
      ProductData: tableData//[]  
  
    }  
  }  
  componentDidMount() {
    //createData = (Name, Age, Address, City, ContactNum) => {
    //    return { Name, Age, Address, City, ContactNum };
    //  }
/*    
    axios.get('http://localhost:51760/Api/Emp/employee').then(response => {  
      console.log(response.data);  
      this.setState({  
        ProductData: response.data  
      });  
    });*/  
  }
     
  /*ProductData = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ]; */ 

  render() {  
    console.log(this.state.ProductData);  
    return (  
      <TableContainer component={Paper}>  
        <Table stickyHeader  aria-label="sticky table">  
          <TableHead>  
            <TableRow>  
              <TableCell>Id</TableCell>  
              <TableCell align="right">Breakfast</TableCell>  
              <TableCell align="right">Lunch</TableCell>  
              <TableCell align="right">Dinner</TableCell>  
              <TableCell align="right">Snacks</TableCell>  
              <TableCell align="right">Drinks</TableCell>  
            </TableRow>  
          </TableHead>  
          <TableBody>  
            {  
              this.state.ProductData.map((p, index) => {  
                return <TableRow key={index}>  
                  <TableCell component="th" scope="row">  
                    {p.Breakfast}  
                  </TableCell>  
                  <TableCell align="right">{p.Breakfast}</TableCell>  
                  <TableCell align="right">{p.Lunch}</TableCell>  
                  <TableCell align="right">{p.Dinner}</TableCell>  
                  <TableCell align="right">{p.Snacks}</TableCell>  
                  <TableCell align="right">{p.Drinks}</TableCell>  
                </TableRow>  
              })  
            }  
          </TableBody>  
        </Table>  
      </TableContainer>  
    );  
  }  
}  
  
export default CreatePlanTable