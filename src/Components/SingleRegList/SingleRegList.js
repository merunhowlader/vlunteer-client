import React from 'react';
import { Button } from 'react-bootstrap';
import { AiOutlineDelete } from "react-icons/ai";

const SingleRegList = (props) => {
    
    return (
        <div className="row">

                    <div className="col-md-2">{props.list.name}</div>
                    <div className="col-md-3">{props.list.email}</div>
                    <div className="col-md-2">{props.list.date}</div>
                    <div className="col-md-3">{props.list._id}</div>
                    <div className="col-md-2"><Button onClick={()=>props.handleDelete(props.list._id)}><AiOutlineDelete/></Button></div>
        </div>

       
            
        
    );
};

export default SingleRegList;