import React from 'react';
import { Button } from 'react-bootstrap';
import childSupport from'../../Images/images/childSupport.png'
import './Task.css'

const Task = ({task,handleEventClinck,showCancle}) => {
    console.log(task);
    // let pic=`https://i.ibb.co/c1Svbnz/${task.img}`;
    // let pic=require(`../../Images/images/childSupport.png`);
    // console.log(pic);

    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    return (
        
        <div onClick={()=>handleEventClinck(task._id)} className="col-md-3"> 
            
             {/* <img src={childSupport} alt=""/> */}
             <img className="task-img" style={{ height:'300px'}} src={require(`../../Images/images/${task.img}`).default} alt=""/>
             <h1 className="task-title" style={{ color:randomColor}}>{task.name}</h1>
             {/* <img src={pic} alt="" loading="lazy"/> */}
             {showCancle&&<Button>cancel</Button>}
             
        </div>
        
    );
};

export default Task;