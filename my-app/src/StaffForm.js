import React from 'react';
import Form from 'react-bootstrap/Form'; 
import { Col  } from 'react-bootstrap';
import ItemCard from './itemCard';


class StaffForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstName : '',
            lastName : '',
            rank : '',
            comPercent : '',
            soldItem : '',
            quantity : '',
        };
    }
    handleSubmit(e){
        e.preventDefault(); 
    };

    handleChange(e){
      e.preventDefault();
      this.setState(
        {[e.target.name]: e.target.value,
          rank : e.target.value }
      );
    };

    handleClick(e){
      e.preventDefault();
     
    }

    render(){
        return(
          <Form>
          <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" 
                  placeholder="First name" 
                  name="firstName"
                  value={this.state.firstName} 
                  onChange={e => this.handleChange(e)} />
              </Form.Group>

            
              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last name</Form.Label>
                  <Form.Control 
                    name="rank"
                    value={this.state.rank} 
                    onChange={e => this.handleChange(e)} />
              </Form.Group>
          </Form.Row>
          <Form.Group  controlId="rank">
                <Form.Label>Position </Form.Label>
                  <Form.Control as="select"
                  name="rank"
                  value={this.state.rank} 
                  onChange={e => this.handleChange(e)}>
                    <option value="junior">Junior</option>
                    <option value="senior ">Senior</option>
                    <option value="manager">Manager</option>
                </Form.Control>
              </Form.Group>

              <ItemCard />

              
        </Form>
        );

    }
}
export default StaffForm;
