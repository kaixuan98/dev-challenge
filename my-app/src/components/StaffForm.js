import React from 'react';
import {Col} from 'react-bootstrap';
import ItemCard from './itemCard';
import Form from 'react-bootstrap/Form'; 
import './form.scss';
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'

const defaultState = {
  firstName : '',
  lastName : '',
  rank : '',
  comPercent : '',
  soldItem : '',
  Date:'',
  quantity: 0 ,
  LemonadeInfo : [
    {
      title: "Fresh Lemon Lemonade",
      price: "$1.50",
      quantity : 0 
    },
    {
      title: "Orange & Lemon Splash",
      price: "$2.00",
      quantity : 0 
    },
    {
      title: "Sugary Shocker",
      price: "$3.00",
      quantity : 0 
    },
    {
      title: "Wild Whiskey Whack",
      price: "$5.50" ,
      quantity : 0     
    }
  ],
  firstnameError: '',
  lastnameError:'',
  successMessage: '',

}
class StaffForm extends React.Component{
   salesData;

    constructor(props){
        super(props);
        this.state= defaultState;
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        
        
      }


    handleChange = e => {
      e.preventDefault();
      this.setState(
        {[e.target.name]: e.target.value, }
      );
    };

    increament=(title) =>{
      let items = this.state.LemonadeInfo.map((i)=>{
        if (i.title === title ){
          i.quantity++; 
        }
        return i;
      });
      this.setState({
        LemonadeInfo : items
      })
    }
   
   decreament=(title) =>{
      let items = this.state.LemonadeInfo.map((i)=>{
        if (i.title === title ){
          i.quantity--; 
        }
        return i;
      });
      this.setState({
        LemonadeInfo : items
      })
    }

    

    componentDidMount(){
        this.salesData = JSON.parse(localStorage.getItem('salesPerson'));
        
    }
    componentWillUpdate(nextProps , nextState){
      localStorage.setItem('salesPerson' , JSON.stringify(nextState));
      localStorage.setItem('TimeStamp' , Date.now());
    }
    

    render(){
        return(
          <Form >
            <div class="success">{this.state.successMessage}</div>
          <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label class="label">First name</Form.Label>
                <Form.Control type="text" 
                  placeholder="First name" 
                  name="firstName"
                  value={this.state.firstName} 
                  onChange={e => this.handleChange(e)} />  
              </Form.Group>

            
              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label class="label">Last name</Form.Label>
                <Form.Control type="text" 
                  placeholder="Last name" 
                  name="lastName"
                  value={this.state.lastName} 
                  onChange={e => this.handleChange(e)} />
              </Form.Group>
              </Form.Row>


            <Form.Row>
              <Form.Group as={Col} controlId="rank">
                <Form.Label class="label">Position </Form.Label>
                  <Form.Control as="select"
                  name="rank" 
                  value ={this.state.rank}
                  onChange={e => this.handleChange(e)}>
                    <option name ="rank" value="junior">Junior</option>
                    <option name ="rank" value="senior ">Senior</option>
                    <option name ="rank" value="manager">Manager</option>
                </Form.Control>
              </Form.Group>
             
              <Form.Group as={Col} controlId="comPercent">
                <Form.Label class="label">Commission Percentage </Form.Label>
                  <Form.Control as="select"
                  name="comPercent"
                  value={this.state.comPercent} 
                  onChange={e => this.handleChange(e)}>
                    <option value="20">20%</option>
                    <option value="10 ">10%</option>
                    <option value="5">5%</option>
                    <option value="0">0%</option>
                </Form.Control>
              </Form.Group>
           </Form.Row>
              

              <Form.Group as={Col} controlId="formGridDate">
                <Form.Label class="label"> Date of Sale </Form.Label>
                <Form.Control type="date" 
                  name="date"
                  value={this.state.date} 
                  onChange={e => this.handleChange(e)} />
              </Form.Group>
              
              <CardDeck>
                
                  {this.state.LemonadeInfo.map(lemonade => {
                    return(
                    <ItemCard title={lemonade.title} 
                    price={lemonade.price} 
                    quantity={lemonade.quantity}
                    increament={this.increament} decreament={this.decreament}/>
                    )
                  } ) }
                
              </CardDeck>

              <br></br>

              <Button variant="primary"
              onClick= {e => this.handleSubmit(e)}
              id="submitButton">Submit</Button>
              
        </Form>
        )
        

    }
}
export default StaffForm;
