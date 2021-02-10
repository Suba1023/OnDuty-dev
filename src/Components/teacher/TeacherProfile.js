import React, { Component } from 'react'
import {Container,Card,Form,Row,Col } from 'react-bootstrap'
import '../../App.css'

export class TeacherProfile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             department:'',
             number:'',
             email:'',
             password:''
             
        }
    }
    
    render() {
        return (
            <div>
                <Container>
                    <Card>
                    <nav className="nav" style={{height:"50px", backgroundColor:"rgb(85,0,0)"}}>
                        <h4 className="headTitle" style={{height:"30%",color:"rgb(241,196,15)",marginLeft:"40%",marginTop:"7px"}}>Add Teacher</h4>
                    </nav>
                    <Form>
                 
                        <Col >
                            <Row className="row-gap">
                            <Col lg={4}>
                                <Form.Label className="label" className="label">Teacher Name</Form.Label>
                                </Col>
                                <Col lg={6}>
                                <Form.Control type="text" placeholder="Enter Teacher Name" name="name" id="name" onChange={this.onChange} required />
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
                                <Form.Label className="label">E-Mail</Form.Label>
                                </Col>
                                <Col lg={6}>
                                <Form.Control type="email" placeholder="E-Mail" name="email" id="email" onChange={this.onChange} required/>
                                </Col>
                            </Row>
                            <Row className="row-gap">
                            <Col lg={4}>
                                <Form.Label className="label">Password</Form.Label>
                                </Col>
                                <Col lg={6}>
                                <Form.Control type="password" placeholder="Password" name="password" id="password" onChange={this.onChange} required/>
                                </Col>
                            </Row>  
                            <Row className="row-gap">
                            <Col lg={4}>
                                <Form.Label className="label">Phone Number</Form.Label>
                                </Col>
                                <Col lg={6}>
                                <Form.Control type="tele" placeholder="Phone Number" name="number" id="number" onChange={this.onChange} required/>
                                </Col>
                            </Row>
                            
                            </Col>
                            <Row className="row justify-content-md-center">
                            <button type="button" class="btn btn-primary  teacherbtn" onClick={this.onSubmit}>ADD</button>
                            <button type="button" class="btn btn-primary  teacherbtn" onClick={this.onUpdate}>UPDATE</button>
                            <button type="button" class="btn btn-primary  teacherbtn" onClick={this.onDelete}>DELETE</button>
                            <button type="button" class="btn btn-primary  teacherbtn" onClick={this.onCancel}>CANCEL</button>
                            </Row>
                    </Form>
                    </Card>
                </Container>
            </div>
        )
    }
}
export default TeacherProfile
