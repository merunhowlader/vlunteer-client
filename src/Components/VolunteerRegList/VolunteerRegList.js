import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Head from '../Head/Head';
import SingleRegList from '../SingleRegList/SingleRegList';


const VolunteerRegList = () => {
    let history= useHistory();
    const [reglist,setReglist]=useState([]);
    useEffect(()=>{
        fetch('https://enigmatic-hollows-44552.herokuapp.com/registerlist')
        .then(res=>res.json())
        .then(data=>setReglist(data))
    },[])

    const handleDelete=(id) => {
        // console.log(id);
        // fetch(`http://localhost:5000/deletelist/${id}`,{
        //     method: "POST",
        //     headers:{ 
        //         "Content-Type": "application/json",
        //     },
        //     body:JSON.stringify({id}),
        // })
        fetch(`https://enigmatic-hollows-44552.herokuapp.com/delete/${id}`, { method: 'DELETE' })
        .then(() => console.log('Delete successful'));

       
        // history.push("/volunteerlist");
        window.location.reload(); 
    }

    const [vlist,setVlist]=useState({show:true});
    const showVlist=()=>{
        let newValue = !vlist.show;
       setVlist({
         show:newValue
       })
    }
    return (
        <div className="row">
            <div className="col-md-12">
                <Head></Head>
            </div>
            
           <div className="col-md-3">
               <label><Link onClick={showVlist} to="/volunteerlist">register</Link> </label>
               <br/>
               <label><Link onClick={showVlist} to="/addevent">Add event</Link> </label>
           </div>

           {
               vlist.show? <div className="col-md-9">
               <div className="row">
                    <div className="col-md-2">name</div>
                    <div className="col-md-3">email</div>
                    <div className="col-md-2">Register date</div>
                    <div className="col-md-3">Volunteer list</div>
                    <div className="col-md-2">action</div>
                    
                    
               </div>
               {
                     reglist.map(reg=><SingleRegList list={reg} handleDelete={handleDelete} key={reg.id} ></SingleRegList>)
                 }
           </div>
           :
           <p> add event</p>
           }
           
              
        </div>
    );
};

export default VolunteerRegList;