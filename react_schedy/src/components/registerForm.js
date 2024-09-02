import React, { useState } from 'react';
import ProfilePicUploader from './profilePic.js';
import { useNavigate } from "react-router-dom";
import axiosInstance from '../context/axios.js';

function RegisterForm() {
  const [photo, setPhoto] = useState();
  const [firstName, SetFirstNmae] = useState('')
  const[lastName, SetLastName] = useState('')
  const[email, SetEmail] = useState('')
  const[id, SetId] = useState('')
  const[password, SetPassword] = useState('')

  const navigate = useNavigate();
  async function Register(e){
    e.preventDefault()

    try{

      const res = await axiosInstance.post(`/register`,{firstName, lastName, email, id, password, photo})
      alert("success")
      navigate('/shift');
    } catch(e){
      console.log(e)
      alert(e)
    }

  }

  return (
    <div className="register-container" id="register">
      <ProfilePicUploader photo={photo} setPhoto={setPhoto} />
      <div className="top">
        <header>Sign Up</header>
        <span>Have an account? <a href="#" onClick={window.login}>Login</a></span>
      </div>
      <div className="buttom">

      <div className="two-forms">
        <div className="input-box">
          <input type="text" className="input-field" placeholder="Firstname" onChange = {(e)=>{SetFirstNmae(e.target.value)}} id="firstname-register"/>
          <i className="bx bx-user"></i>
        </div>
        <div className="input-box">
          <input type="text" className="input-field" placeholder="Lastname" id="lastname-register" onChange = {(e)=>{SetLastName(e.target.value)}}/>
          <i className="bx bx-user"></i>
        </div>
      </div>
      <div className="input-box">
        <input type="text" className="input-field" placeholder="Email" id="email-register" onChange = {(e)=>{SetEmail(e.target.value)}}/>
        <i className="bx bx-envelope"></i>
      </div>
      <div className="input-box">
        <input type="text" className="input-field" placeholder="ID" id="id-register" onChange = {(e)=>{SetId(e.target.value)}}/>
        <i className="bx bx-user"></i>
      </div>
      <div className="input-box">
        <input type="password" className="input-field" placeholder="Password" id="password-register" onChange = {(e)=>{SetPassword(e.target.value)}}/>
        <i className="bx bx-lock-alt"></i>
      </div>
      <div className="input-box">
        <input type="submit" className="submit" value="Register" onClick={Register}/>
      </div>
      <div className="two-col">
        <div className="one">
          <input type="checkbox" id="register-check" />
          <label htmlFor="register-check"> Remember Me</label>
        </div>
        <div className="two">
          <label><a href="#">Terms & conditions</a></label>
        </div>

      </div>

      </div>
    </div>
  );
}

export default RegisterForm;

