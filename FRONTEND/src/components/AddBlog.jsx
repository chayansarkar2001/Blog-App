import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddBlog = ({setTabValue}) => {
  const navigate = useNavigate()
  const [inputs,setInputs] = useState({
    title:"",
    description:"",
    img:""
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
    sendRequest().then(data=>{
      console.log("add blog return data:",data)
      setTabValue(2)
      navigate('/myblogs') 
    })
  }
  const sendRequest = async ()=>{
    const response = await axios.post("https://blogapp2001.onrender.com/api/blog/add",{
      title:inputs.title,
      description:inputs.description,
      img:inputs.img,
      user: localStorage.getItem('userId')
    }).catch(err=>console.log(err))
    const data = await response.data;
    return data
  }
  return (
    <div className="addblog-container">
        <div>
            <h2 className="addblog-header">Add Your Blog</h2>
        </div>
        <form onSubmit={handleSubmit} className="addblog-form">
            <label className="addblog-label">Title</label>
            <input className="addblog-input" type="text" name='title' value={inputs.title} onChange={handleChange} required />
            <label className="addblog-label">Description</label>
            <input className="addblog-input" type="text" name='description' value={inputs.description} onChange={handleChange} required />
            <label className="addblog-label">Image URL</label>
            <input className="addblog-input" type="text" name='img' value={inputs.img} onChange={handleChange} required />
            <button className="addblog-submit" type="submit">Submit</button>
        </form>
    </div>
  ) 
}

export default AddBlog