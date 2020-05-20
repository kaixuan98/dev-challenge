import React from 'react'
import Table from 'react-bootstrap/Table'
import Item from './Item.js'

import salesData from '../salesData.json'


class ReportTable extends React.Component {
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            date:'',
            // itemSold:[], 
            

        }
       
    }

    
    
    checkFirstName = () => {

    }
    checkLastName = () => {

    }
    // here will only get data that has more than that date and save it in an array 
    checkStartDate =() => {

    }
    // here will only get data that has less than that date and save it in an array 
    checkStartDate =() => {

    }

    // used to calculate Total per day 
    calcTotalPerDay =()=>{

    }
    // calc Comission per Day
    calcCommissionPerDay =()=>{

    }
    // calc total price 
    calcTotal =()=>{

    }

    // calc total commisson
    calcTotalCommission = ()=>{

    }



    render(){
    return (
        <div>
            <div>
                <span onSubmit={}>First Name</span> 
                <span>Last Name</span> 
            </div>
    
            <Table responsive>
                <thead>
                    <tr>
                        <th> Date </th>
                        <th> Items Sold </th>
                        <th> Total Price </th>
                        <th> Comission Earned </th>
                    </tr>
                </thead>
                <tbody>
                    {/* // here need to be dynamic and can render all the tr with td  */}
                    <tr>
                        <td>{this.props.date}</td>
                        <td>{salesData.map((itemList) => {
                            return(
                                // console.log(itemList.itemSold);
                                <Item items={itemList.itemSold}
                                commission={salesData.commission}
                                date={salesData.date}
                                startDate={this.state.startDate}
                                endDate={this.state.endDateDate}/>
                            )
                        })}</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>TOTAL</td>
                        <td></td>
                        <td> </td>
                        <td></td>
                    </tr>
                </tfoot>
                
            
            </Table>

        </div>
    )
    
    }
}
export default ReportTable ;