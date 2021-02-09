import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'
import Logo from '../../login-logo.jpg'



export default function SignIn() {
    
    const buttonstyle = {
                        marginTop:'20px',
                        padding: '6px 20px',
                        backgroundColor:"rgb(241,196,15)",
                        borderRadius:"15px",
                        color:"white"
                    }
    const inputStyle = {
                        width:"60%",
                        padding:'8px 15px',
                        textAlign:"center",
                        borderRadius:"25px",
                        marginTop:'20px'
                    }

    const history = useHistory();
    
	const initialFormData = Object.freeze({
		email: 'admin@gmail.com',
		password: 'admin',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
        e.preventDefault();
        
        if(initialFormData.email === formData.email && initialFormData.password === formData.password){
            localStorage.setItem('isLogin', true)
             history.push('/admin/manage_teacher')
           
        }
        else{
            Swal.fire({
                		icon: 'error',
                		title: 'Oops...',
                		text: 'something wrong',
                	})
        }
	};
   
    // ui block
        return (
            <React.Fragment>
                {/* when internet connected */}
               
            <div className='login'>
                <div style={{margin:'auto', width:'50%', }}>
                <div style={{paddingTop:'100px'}} >

                    <img src={Logo} style={{marginLeft:"8%"}} alt="logomissing"/>
                    <div style={{marginTop:"20px",}}>
                        <h4>Holly Cross Home Science College</h4>
                        <h7 > Affiliated to Manonmaniam Sundaranar University, Tirunelveli.</h7>
                    </div>

                </div>
                    
                    
                    <input type="text" style={inputStyle} name="email" placeholder="LOGIN EMAIL" onChange={handleChange}/>
            
                    <input type="password"  style={inputStyle} name="password" placeholder="PASSWORD" onChange={handleChange}/>

                    <br />
                    <button style={buttonstyle} onClick={handleSubmit}>Sign In</button>
                    
                    

                    
                </div>
            </div>
            
        
           
            </React.Fragment>

        )
    }
