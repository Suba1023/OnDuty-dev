import React, { Component } from 'react'
import {Container,Card,Form,Row,Col } from 'react-bootstrap'
import '../App.css'

export class Odform extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             department:'',
             event:'',
             venue:'',
             days:'',
             from:'',
             to:'',
             totalod:'',
             checkbox:'',
             purpose:''
        }
    }
    
    render() {
        return (
            <div>
                <Container>
                    <Card>
                    <nav className="nav" style={{height:"50px", backgroundColor:"rgb(85,0,0)"}}>
                        <h4 className="headTitle" style={{height:"30%",color:"white",marginLeft:"40%",marginTop:"7px"}}>OnDuty Form</h4>
                    </nav>
                    <Form>
                 
                        <Col >
                            <Row className="row-gap">
                            <Col lg={4}>
                                <Form.Label className="label" className="label">Name of The Teacher</Form.Label>
                                </Col>
                                <Col lg={6}>
                                <Form.Control type="text" placeholder="Enter Name" name="name" id="name" onChange={this.onChange} required />
                                </Col>
                            </Row>
                            <Row className="row-gap">
                            <Col lg={4}>
                                <Form.Label className="label">Department</Form.Label>
                                </Col>
                                <Col lg={6}>
                                <Form.Control as="select" placeholder="Enter Department" name="department" id="department" onChange={this.onChange} required>
                                        <option value=""selected disabled> Enter Department</option>
                                        <option value="dept 1">dept 1</option>
                                        <option value="dept 2">dept 2</option>
                                        <option value="dept 3">dept 3 </option>
                                        <option value="dept 4">dept 4</option>
                                </Form.Control>
                                </Col>
                            </Row>
                            <Row className="row-gap">
                            <Col lg={4}>
                                <Form.Label className="label">Event Name</Form.Label>
                                </Col>
                                <Col lg={6}>
                                <Form.Control type="text" placeholder="Enter Event" name="event" id="event" onChange={this.onChange} required/>
                                </Col>
                            </Row>
                            <Row className="row-gap">
                            <Col lg={4}>
                                <Form.Label className="label">Venue</Form.Label>
                                </Col>
                                <Col lg={6}>
                                <Form.Control type="text" placeholder="Enter Venue" name="venue" id="venue" onChange={this.onChange} required/>
                                </Col>
                            </Row>
                            <Row className="row-gap">
                            <Col lg={4}>
                                <Form.Label className="label">Number Of Days</Form.Label>
                                </Col>
                                <Col lg={6}>
                                <Form.Control type="number" placeholder="Enter days" name="days" id="days" onChange={this.onChange} required/>
                                </Col>
                            </Row>  
                            <Row className="row-gap">
                                <Col lg={4}>
                                <Form.Label className="label">Period of On Duty </Form.Label>
                                </Col>
                                <Col lg={3}>
                                <Form.Label className="label">From</Form.Label>
                                <Form.Control type="date" placeholder="Enter Name" name="from" id="from" onChange={this.onChange} required/>
                                </Col>
                                <Col lg={3}>
                                <Form.Label className="label">To</Form.Label>
                                <Form.Control type="date" placeholder="Enter Name" name="to" id="to" onChange={this.onChange} required/>
                                </Col>
                            </Row>
                            <Row className="row-gap">
                            <Col lg={4}>
                                <Form.Label className="label">No. of OD availed so far</Form.Label>
                                </Col>
                                <Col lg={6}>
                                <Form.Control type="number" placeholder="Enter days" name="totalod" id="totalod" onChange={this.onChange} required/>
                                </Col>
                            </Row>
                        </Col>
                        <hr/>
                        <Row className="row-gap">
                            <Col>
                                <Form.Control type="checkbox" style={{fontSize:"5px"}} name="checkbox" id="checkbox" onChange={this.onChange} required></Form.Control>
                                </Col>
                                <Col lg={11}>
                                    <p>I hereby provide an undertake that I will maintain the minimum attendance requirement prescribed
                                    by the university. </p>
                                </Col>
                            </Row>

                            <Col>
                                <Row className="row-gap">
                                <Col lg={4}>
                                <Form.Label className="label">Purpose</Form.Label>
                                </Col>
                                <Col lg={6}>
                                <textarea class="form-control" placeholder="Comments" name="purpose" id="purpose" onChange={this.onChange} required></textarea>
                                </Col>
                                </Row>
                            </Col>
                            <button type="button" class="btn btn-primary  submitbtn" onClick={this.onSubmit}>SUBMIT</button>
                    </Form>
                    </Card>
                </Container>
            </div>
        )
    }
}
export default Odform
