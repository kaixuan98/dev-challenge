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
    getName = (firstName , lastName) => {
        salesData.map(items => {
            this.setState({
                firstName : items.firstName,
                lastName : items.lastName
            })
        })
        this.props.getTable(this.state.firstName);
        this.props.getTable(this.state.lastName);
    }

    render(){
    return (
        <div>
            <div>
                <span getName={this.getName.firstName}>First Name</span> 
                <span getName={this.getName.lastName}>Last Name</span> 
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