import React from 'react'
import {
    Container,
    Row,
    Col,
    Button,
    Card,
} from 'react-bootstrap';
import {
    Link,
} from 'react-router-dom';
import Logo from '../../holy-logo.png'
import UserCard from '../Usercard/UserCard'
import adminImg from '../Usercard/admin.png'
import teacherImg from '../Usercard/Teacher-amico.png'
import studentImg from '../Usercard/Exams-bro.png'

export default function home() {
    const buttonStyle = {
                      marginTop:'20px',
                      padding: '6px 20px',
                      backgroundColor:"rgb(241,196,15)",
                      borderRadius:"15px",
                      color:"white",
                      border:'rgb(85,0,0) 1.5px solid',
                      marginLeft:'100px',
                  }
    return (
      <React.Fragment>
        <div >
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark" style={{backgroundColor : 'rgb(85,0,0)',color:' rgb(241,196,15)'}} >
              <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link to="/" className="nav-link">Home</Link>
                          </li></ul>
                 <div className="navbar-brand">
               <img src={Logo}  alt="logo" />
            </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                      <div className="collapse navbar-collapse" id="navbarNav">
                        <ul style={{fontSize:'1.6em'}} className="navbar-nav ml-auto">
                            Welcome
                     </ul>

                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <Link to="/about" className="nav-link">About</Link>
                          </li>
                        <li className="nav-item">
                          <Link to="/contact" className="nav-link">Contact</Link>
                          </li>
                      </ul>
                    </div>
              </nav>
        <Row  className="justify-content-md-center">
          <Col lg={4} sm={12}>
              <UserCard path="/admin" Text="Admin Login" Img={adminImg}/>
          </Col>
          <Col lg={4} sm={12}>
              <UserCard path="/teacher" Text="Teacher Login" Img={teacherImg}/>
          </Col>
          <Col lg={4} sm={12}>
              <UserCard path="/student" Text="Student Login" Img={studentImg}/>
          </Col>
          
        </Row> 
        </div>
           
      </React.Fragment>
    )
}