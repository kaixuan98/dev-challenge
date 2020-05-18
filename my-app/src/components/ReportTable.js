import React from 'react'
import Table from 'react-bootstrap/Table'

// import Data from '../../src/salesData.json'



class ReportTable extends React.Component {
    
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


    render(){
    return (
        <div>
    
            {this.props.firstName}{this.props.lastName} 
            <Table>
                
            
            </Table>

        </div>
    )
    
    }
}
export default ReportTable ;