import React, { useState } from "react";
import bimage from "../../Images/logos/bimage.png";

import { useForm } from "react-hook-form";
import './Register.css';
import { useHistory } from "react-router";



// type FormValue ={
//     name: string,
//     email: string,
//     date: string,
//     description: string,
//     library: string,
// }
const Register = () => {
  let history = useHistory();

  const imgClick=() => {
    history.push('/')
   }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
      fetch("https://enigmatic-hollows-44552.herokuapp.com/register",{
          method: "POST",
          headers:{ 
              "Content-Type": "application/json",
          },
          body:JSON.stringify(data),
      })
  };
  
  

  return (
    <div>
      <img src={bimage} alt=" barand" style={{ width: "300px" }} onClick={imgClick}/>
     <div className="register-form">
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name",{ required: true, maxLength: 30 })} />
            <hr/>
            <input type="text" {...register("email",{ required: true})}placeholder="Email" />
            <hr/>
            <input type="password"{...register("password",{ required: true})} placeholder="password" />
            <hr/>
            <input type="date" {...register("date",{ required: true})}placeholder="date" />
            <hr/>
            <input type="text"{...register("description",{ required: true})} placeholder="Description" />
            <hr/>
            <input type="text"{...register("library",{ required: true})} placeholder="organize books at the library" />
            <hr/>

            <input type="submit" />
        </form>
      </div>

      
     
    </div>
  );
};

export default Register;
