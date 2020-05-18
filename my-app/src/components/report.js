import React from 'react'
import ReportTable from './ReportTable'

import Data from '../../src/salesData.json'

class Report extends React.Component {
    constructor(props){
        super(props);
        this.state={
            firstName: '',
            lastName: '',
            date: '',
            itemSold :[],
            commision: '',

        }
    }
 
    render(){
    return (
        <div>
            {
                // here will return object( sales item )
                salesItemList = Data.map((salesItem) => {return (
                    <ReportTable salesItem={Data.salesItem}/>
                )
                }) 
            }
        </div>
        
    );
    } 
    
}
export default report;