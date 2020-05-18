import React from 'react';
import ReportTable from './ReportTable';
import {Col, Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'



class Report extends React.Component {
    constructor(props){
        super(props);
        this.state={
            firstName: '',
            lastName: '',
            startDate: '',
            endDate: '',
    }}
    
    handleChange = (e)=> {
        e.preventDefault();
        this.setState(
            {[e.target.name]: e.target.value, }
        );
    }

    handleSubmit =(e) => {
        e.preventDefault();
        console.log(this.state);
    }

    
 
    render(){
        return (
            <div>
            <Form>
                {/* First name and last name in a row   */}
                <Form.Row>
                
                {/* First Name Input Box (inline)  */}

                <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label className="label">First name</Form.Label>
                    <Form.Control type="text" 
                    placeholder="First name" 
                    name="firstName"
                    value={this.state.firstName} 
                    onChange={e => this.handleChange(e)} /> 
                </Form.Group>

                {/* Last Name Input Box (inline)  */}

                <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label className="label">Last name</Form.Label>
                    <Form.Control type="text" 
                    placeholder="Last name" 
                    name="lastName"
                    value={this.state.lastName} 
                    onChange={e => this.handleChange(e)} />
                </Form.Group>
                
                </Form.Row>
                {/* A row of start date and end date  */}
                <Form.Row>

                    {/* Start Date Picker  */}
                    <Form.Group as={Col} controlId="formGridDate">
                            <Form.Label className="label"> Start Date </Form.Label>
                            <Form.Control type="date" 
                            name="startDate"
                            value={this.state.startDate} 
                            onChange={e => this.handleChange(e)} />
                    </Form.Group>

                    {/* End Date Picker  */}

                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label className="label"> End Date </Form.Label>
                        <Form.Control type="date" 
                        name="endDate"
                        value={this.state.endDate} 
                        onChange={e => this.handleChange(e)} />
                    </Form.Group>
                </Form.Row>

                <br></br>

                    <Button variant="primary"
                    onClick= {e => this.handleSubmit(e)}
                    id="submitButton">Submit</Button>
                                
            </Form>

                <ReportTable 
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                startDate={this.state.startDate}
                endDate={this.state.endDate}/>

                
            </div>

            
        
    )
    } 
    
}
export default Report;