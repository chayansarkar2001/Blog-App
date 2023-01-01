import axios from 'axios'
import React, { useState, useEffect } from 'react'
import BlogCard from './BlogCard'

const UserBlogs = ({setTabValue}) => {
  const id = localStorage.getItem('userId')
  const [user, setUser] = useState(false)
  const [deleteBlog, setDeleteBlog] = useState(0)
  const sendRequest = async ()=> {
    const response = await axios.get(`https://blogapp2001.onrender.com/api/blog/user/${id}`).catch(err=>console.log(err))
    const data = await response.data 
    return data
  }
 
  useEffect(() => {
    sendRequest().then(data => {
      console.log("userdata:",data.user)
      setUser(data.user)
    })
  }, [deleteBlog])
  
  return (
    <div>
      {
        user && user.blogs.map((blog,i)=><BlogCard key={i} title={blog.title} description={blog.description} img={blog.img} userName={user.name} id={blog._id} setTabValue={setTabValue} isUser={true} setDeleteBlog={setDeleteBlog} />)
      }
    </div>
  )
}

export default UserBlogs