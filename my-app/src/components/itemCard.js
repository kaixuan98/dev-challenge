import React from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

class ItemCard extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         title :'',
    //         quantity: 0 ,
    //         price: '' ,
            
    //     };
    // }
    handleClick(e){
        e.preventDefault(); 

    }

    
    increament = (e) => {
        e.preventDefault(); 
        this.props.increament(this.props.title);
        

      }
    decreament= (e) => {
        e.preventDefault(); 
        this.props.decreament(this.props.title);
        

      }

    render(){
        return(
            <Card>
            <Card.Body>
            <Card.Title >{this.props.title} {this.props.price}</Card.Title>
                <Button value="dec" 
                variant="primary"
                onClick ={this.decreament}>-</Button>
                <Card.Text name="quantity" > {this.props.quantity} </Card.Text>
                <Button value="inc" 
                variant="primary"
                onClick = {this.increament}>+</Button>
                
                
            </Card.Body>
            </Card>

            
        );
    
        }
}

export default ItemCard;