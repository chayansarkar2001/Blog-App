import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Auth = ({setIsLoggedIn}) => {
  const navigate = useNavigate()
  const [isSignup, setIsSignup] = useState(true)
  const [inputs,setInputs] = useState({
    name:"",
    email:"",
    password:""
  })
  const handleChange = (e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(inputs)
    if(isSignup){
      sendRequest("signup").then((data)=>{
        localStorage.setItem('userId',data.user._id)
      }).then(()=>{
        setIsLoggedIn(true)
        return navigate('/allblogs')
      }).then(data =>console.log("navigate AllBlogs"))
    }else{
      sendRequest().then((data)=>{
        localStorage.setItem('userId',data.user._id)
      }).then(()=>{
        setIsLoggedIn(true)
        return navigate('/allblogs')
      }).then(data=>console.log("logged in"))
    }
  }

  const sendRequest = async (type="login")=>{
    const response = await axios.post(`https://blogapp2001.onrender.com/api/user/${type}`,{
      name: inputs.name,
      email: inputs.email,
      password: inputs.password
    }).catch(error=>console.log(error))
    const data = await response.data
    return data
  }
  return (
    <div className="auth-container">
        <p>{isSignup?"SIGNUP":"LOGIN"}</p>
        <form onSubmit={handleSubmit}>
            {isSignup && <input type="text" onChange={handleChange} value={inputs.name} name="name" placeholder="Name" required />}
            <input type="email" onChange={handleChange} value={inputs.email} name="email" placeholder="Email" required />
            <input type="password" onChange={handleChange} value={inputs.password} name="password" placeholder="Password" required />
            <button className="submit-button" type="submit">SUBMIT</button>
            <div className="change-button">
                <h4 onClick={()=>setIsSignup(!isSignup)}>CHANGE TO {isSignup?"LOGIN":"SIGNUP"}</h4>
            </div>
        </form>
    </div>
  )
} 

export default Auth