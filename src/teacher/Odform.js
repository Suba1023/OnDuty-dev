import React, { Component } from 'react'
import {Container,Card,Form,Row } from 'react-bootstrap'

export class Odform extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <Container>
                    <Card>
                    <nav className="nav" style={{display:"flex",  backgroundColor:"rgb(85,0,0)"}}>
                        <div className="headTitle"><p style={{marginLeft:"5%", }}>OnDuty Form</p></div>
                    </nav>
                    <Form>
                        <Row className="row justify-content-center">
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" />
                        </Form.Group>
                        </Row>
                    </Form>
                    </Card>
                </Container>
            </div>
        )
    }
}
export default Odform
