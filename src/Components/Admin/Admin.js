import React from 'react';
import bimage from "../../Images/logos/bimage.png";
import VolunteerRegList from '../VolunteerRegList/VolunteerRegList';
const Admin = () => {
    return (
        <div className="row">
            <div className="col-md-12">
               <img src={bimage} alt=" barand" style={{ width: "300px" }} />

            </div>
            <div className="col-md-3">
                <li>
                    <ul>a</ul>
                    <ul>b</ul>
                </li>
            </div>
            <div className="col-md-9">
                <VolunteerRegList></VolunteerRegList>
            </div>
             
        </div>
    );
};

export default Admin;