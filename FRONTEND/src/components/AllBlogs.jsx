import axios from 'axios'
import React, {useState, useEffect} from 'react'
import BlogCard from './BlogCard'

const AllBlogs = ({setTabValue}) => {
  const [blogs, setBlogs] = useState([])
  const sendRequest = async ()=>{
    const response = await axios.get('https://blogapp2001.onrender.com/api/blog/').catch(err=>console.log(err))
    const data = await response.data 
    return data
  }

  useEffect(() => {
    sendRequest().then(data => {
      console.log("blogs",data.blogs)
      setBlogs(data.blogs)
    }) 
  }, [])
  
  return (
    <div>
      {
        blogs && blogs.map((blog,i)=><BlogCard key={i} title={blog.title} description={blog.description} img={blog.img} userName={blog.user.name} id={blog._id} setTabValue={setTabValue} isUser={false} />)
      }
    </div>
  )
} 

export default AllBlogs