import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({isLoggedIn,setIsLoggedIn,tabValue,setTabValue}) => {
  return (
    <div className="header">
        <div className="header-icon"> 
          <h4>MyBlog.App</h4>
        </div>

        { isLoggedIn && <div className="header-tab-container">
          <div className="header-tab-item">
            <Link to="/allblogs"><h4 onClick={()=>setTabValue(1)} className={tabValue===1?'active-line':''}>ALL BLOGS</h4></Link>
          </div> 
          <div className="header-tab-item">
            <Link to="/myblogs"><h4 onClick={()=>setTabValue(2)} className={tabValue===2?'active-line':''}>MY BLOGS</h4></Link>
          </div>
          <div className="header-tab-item">
            <Link to="/myblogs/add"><h4 onClick={()=>setTabValue(3)} className={tabValue===3?'active-line':''}>ADD BLOG</h4></Link>
          </div>
        </div>}

        <div className="header-auth-container">
          { !isLoggedIn && <div className="header-auth-item">
            <Link to="/auth"><h4>SIGNUP</h4></Link>
          </div>}
          { !isLoggedIn && <div className="header-auth-item">
            <Link to="/auth"><h4>LOGIN</h4></Link>
          </div>}
          { isLoggedIn && <div className="header-auth-item">
            <Link to="/auth"><h4 onClick={()=>{
              localStorage.removeItem('userId')
              setIsLoggedIn(false)
            }}>LOGOUT</h4></Link>
          </div>}
        </div>
    </div>
  )
}

export default Header