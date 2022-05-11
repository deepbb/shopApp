import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button } from 'react-bootstrap';
function Card({details}) {
    console.log(details);
    return (
        <div className="form">
    {details && details.map((d)=> (
        <p key={d._id}>{d.name}</p>
    ))}
        </div>
    )
}
//results[0].dob.date
export default Card

//results[0].location.city