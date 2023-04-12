import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import LoadingIcon from './LoadingIcon'

const BlogCard = ({title,description,img,userName,id,setTabValue,isUser,setDeleteBlog}) => {
  const [loadingIcon, setLoadingIcon] = useState(false)
  const navigate = useNavigate()
  const handleEdit = ()=>{
    navigate(`/myblogs/${id}`)
  }
  const handleDelete = ()=>{
    if(window.confirm("Are You sure to delete")){
      sendDeleteRequest().then(data=>{ 
        if(data){
          setTabValue(2)
          navigate('/myblogs')
          setDeleteBlog(prevState=>prevState+1)
        }else{
          window.alert("unable to delete")
        }
      })
    }
  }
  const sendDeleteRequest = async ()=>{
    setLoadingIcon(true)
    const response = await axios.delete(`https://blogapp2001.onrender.com/api/blog/${id}`).catch(err=>console.log(err))
    const data = await response.data
    setLoadingIcon(false)
    return data
  }
  return ( 
    <div>
    <div className="card-container">
        {isUser && <div className='edit-and-delete'>
            <button onClick={handleEdit} className="card-button b1"><img src="./edit.png" height="30px" width="30px" alt="edit" /></button>
            <button onClick={handleDelete} className="card-button"><img src="./delete.png" height="30px" width="30px" alt="delete" /></button>
        </div>}
        <div className="card-container1">
            <div className="avatar">
                <div className="avatar-img">{userName[0].toUpperCase()}</div>
            </div>
            <div className="card-container2">
                <div className="blog-title">{title}</div>
                <div className="blog-title">{new Date().toLocaleDateString()}</div>
            </div>
        </div>
        <img className="blog-img" src={img} alt="img can't see" />
        <div className="blog-description-container">
            <hr color="black" />
            <br />
            <p><b style={{color:"black"}}>{userName}: </b>{description}</p>
        </div>
      </div>
    {loadingIcon && <LoadingIcon />}
    </div>
  )
}

export default BlogCard