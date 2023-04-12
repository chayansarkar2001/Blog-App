import axios from 'axios'
import React, {useState, useEffect} from 'react'
import BlogCard from './BlogCard'
import LoadingIcon from './LoadingIcon'
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const AllBlogs = ({setTabValue}) => {
  const [blogs, setBlogs] = useState([])
  const [loadingIcon, setLoadingIcon] = useState(false)
  const sendRequest = async ()=>{
    setLoadingIcon(true)
    const response = await axios.get('https://blogapp2001.onrender.com/api/blog/').catch(err=>console.log(err))
    const data = await response.data 
    setLoadingIcon(false)
    return data
  }

  useEffect(() => {
    sendRequest().then(data => {
      console.log("blogs",data.blogs)
      setBlogs(data.blogs)
    })
  }, [])

  if(loadingIcon){
    return <LoadingIcon />
  }
  if(blogs.length<1){
    return <div><h2>No Blog Founds. Please Try After Some Time.</h2></div>
  }
  return (
    <div>
      {
        blogs.map((blog,i)=><BlogCard key={i} title={blog.title} description={blog.description} img={blog.img} userName={blog.user.name} id={blog._id} setTabValue={setTabValue} isUser={false} />)
      }
    </div>
  )
} 

export default AllBlogs