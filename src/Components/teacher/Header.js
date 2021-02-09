// import section
import React,{Component} from 'react';
import {
    Link,
} from 'react-router-dom';
import Logo from '../../holy-logo.png'

class Header extends Component{
    render(){
        return(
            <>
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
                            Administration
                     </ul>

                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <Link to="/about" className="nav-link">About</Link>
                          </li>
                        <li className="nav-item">
                          <Link to="/contact" className="nav-link">Contact</Link>
                          </li>
                          <li className="nav-item">
                          <Link to="/teacher/logout"> <p className="nav-link" >Logout</p></Link>
                          </li>
                      </ul>
                    </div>
              </nav>

                </>
        )
    }
}

export default Header;
