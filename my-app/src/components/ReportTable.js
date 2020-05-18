import React from 'react'
import Table from 'react-bootstrap/Table'



class ReportTable extends React.Component {
    
    
    itemSoldList = this.props.itemSold.map(items =>{
        title = items.title ; 
        quantity = item.quantity;
        price = item.price; 
        
    })

    render(){
    return (
        <Table responsive>
                <div>
                    <span>{this.props.firstName}</span>
                    <span>{this.props.lastName}</span>
                </div>
        
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Items Sold</th>
                    <th>Total Price</th>
                    <th>Commission Earned</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.date}</td>
                        <td></td>
                    </tr>
                  
                    
                    
                    
                </tbody>
        </Table>
    )
    
    }
}
export default ReportTable ;