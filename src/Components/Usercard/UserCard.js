import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function UserCard(props) {
    const cardstyle={
        width:"50%",
        margin:"auto",
        marginTop:"15%"
    }
    const imgstyle={
        width:"50%",
        height:"60%",
        margin:"auto",
        marginTop:"10%"
    }
    return (
        <>
             <Card style={cardstyle}>
                    <h3 style={{margin:"auto",marginTop:"10%"}}>{props.Text}</h3>
                    <img style={imgstyle} src={props.Img} alt="image_missing"/>
                    <Link to={props.path}><button className="user-card-btn">{props.Text}</button></Link>
                </Card>
        </>
    )
}

