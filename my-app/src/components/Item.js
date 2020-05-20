import React from 'react'
import Table from 'react-bootstrap/Table'



class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title : '',
            price : 0.0 ,
            quantity : 0 , 
            commision: 0 ,
            dayPrice : 0.0 ,
            dayCommission : 0.0 ,
            totalPrice: 0.0 , 
            totalCommission : 0.0 
        }
    }
    getTable = () =>{
        let eachItem = this.props.items.map((i)=>{
            this.setState({
                title : i.title , 
                price : i.price , 
                quantity : i.quantity,
            })
            console.log(eachItem);
            return eachItem ; 
            
        })
      }


   
    render(){
        return (
            <div onGetItem ={ () => {this.getTable()}}
            value= {this.title}>
                {/* {this.props.items.map((items) => {
                    return(
                        console.log(items.title)
                    )
                })} */}
               
                
                
            </div>
        )

    }
    
}



export default Item
