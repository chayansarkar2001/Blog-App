import React, {useState} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import "./App.css"

import AddBlog from './components/AddBlog'
import AllBlogs from './components/AllBlogs'
import Auth from './components/Auth'
import BlogDetail from './components/BlogDetail'
import Header from './components/Header'
import UserBlogs from './components/UserBlogs'


const App = () => {
  const [tabValue, setTabValue] =  useState(1)
  const [isLoggedIn, setIsLoggedIn] = useState(()=>{
    const userId = localStorage.getItem("userId")
    if(userId===null) return false
    return true
  })
  return (
    <>
    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} tabValue={tabValue} setTabValue={setTabValue} />
    <main>
      <Routes>
        { !isLoggedIn ? <Route path="/auth" element={<Auth setIsLoggedIn={setIsLoggedIn} />} /> :
            <>
              <Route path="/myblogs" element={<UserBlogs setTabValue={setTabValue} />} />
              <Route path="/myblogs/:id" element={<BlogDetail setTabValue={setTabValue} />} />
              <Route path="/myblogs/add" element={<AddBlog setTabValue={setTabValue} />} />
            </>
        }
        <Route exact path="/" element={<Navigate to="/allblogs"/>} />
        <Route path="/allblogs" element={<AllBlogs setTabValue={setTabValue} />} />
      </Routes>
    </main>
    </>
  )
}

export default App