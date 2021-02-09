import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export default function Logout(){
    const history = useHistory();

    useEffect(()=>{
        localStorage.removeItem('isLogin')
        history.push('/admin')
        
    });
    return <div>logout</div>
}