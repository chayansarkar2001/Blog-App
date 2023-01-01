import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BlogDetail = ({setTabValue}) => {
  const navigate = useNavigate()
  const [inputs,setInputs] = useState({title:"",description:"",img:""})
  const {id} = useParams()
  const fetchData = async ()=>{
    const response = await axios.get(`https://blogapp2001.onrender.com/api/blog/${id}`).catch(err=>console.log(err))
    const data = await response.data
    return data
  }

  useEffect(() => {
    fetchData().then(data=>{
      setInputs({title:data.blog.title,description:data.blog.description,img:data.blog.img})
    }).catch(err=>console.log(err))
  }, [])
  
  
  const handleChange = (e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }
  const handleUpdate = (e)=>{
    e.preventDefault()
    console.log(inputs)
    sendRequest().then(data=>{
      setTabValue(2)
      navigate("/myblogs")
    })
  }
  const sendRequest = async ()=>{
    const response = await axios.put(`https://blogapp2001.onrender.com/api/blog/update/${id}`,{
      title:inputs.title,
      description:inputs.description,
      img:inputs.img,
    }).catch(err=>console.log(err))
    const data = await response.data;
    return data
  }
  return (
    <div className="addblog-container">
        <div>
            <h2 className="addblog-header">Update Your Blog</h2>
        </div>
        <form onSubmit={handleUpdate} className="addblog-form">
            <label className="addblog-label">Title</label>
            <input className="addblog-input" type="text" name='title' value={inputs.title} onChange={handleChange} required />
            <label className="addblog-label">Description</label>
            <input className="addblog-input" type="text" name='description' value={inputs.description} onChange={handleChange} required />
            <label className="addblog-label">Image URL</label>
            <input className="addblog-input" type="text" name='img' value={inputs.img} onChange={handleChange} required />
            <button className="addblog-submit" type="submit">Update</button>
        </form>
    </div> 
  )
}

export default BlogDetail