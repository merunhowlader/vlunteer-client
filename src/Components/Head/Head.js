import React from 'react';
import { useHistory } from 'react-router';
import bimage from "../../Images/logos/bimage.png";
const Head = () => {
    let history = useHistory();
    const imgClick=() => {
        history.push('/')
    }
    return (
        <div className="row">
             <div className="col-md-3">
                 <img src={bimage} alt=" barand" style={{ width: "200px" }} onClick={imgClick} />
             </div>
             <div className="col-md-9">
                 <h1>volunteer reagister list</h1>
             </div>
        </div>
    );
};

export default Head;