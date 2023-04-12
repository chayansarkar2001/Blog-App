import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({isLoggedIn,setIsLoggedIn,tabValue,setTabValue}) => {
  const [onIcon, setOnIcon] = useState(false);
  return (
    <div className="header">
        { isLoggedIn && <div className="header-menu-bar-icon">
          <div id='menu-icon' onClick={()=>{setOnIcon(!onIcon)}}><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCA3MiA3MiIKc3R5bGU9ImZpbGw6IzAwMDAwMDsiPgo8cGF0aCBkPSJNNTYgNDhjMi4yMDkgMCA0IDEuNzkxIDQgNCAwIDIuMjA5LTEuNzkxIDQtNCA0LTEuMjAyIDAtMzguNzk4IDAtNDAgMC0yLjIwOSAwLTQtMS43OTEtNC00IDAtMi4yMDkgMS43OTEtNCA0LTRDMTcuMjAyIDQ4IDU0Ljc5OCA0OCA1NiA0OHpNNTYgMzJjMi4yMDkgMCA0IDEuNzkxIDQgNCAwIDIuMjA5LTEuNzkxIDQtNCA0LTEuMjAyIDAtMzguNzk4IDAtNDAgMC0yLjIwOSAwLTQtMS43OTEtNC00IDAtMi4yMDkgMS43OTEtNCA0LTRDMTcuMjAyIDMyIDU0Ljc5OCAzMiA1NiAzMnpNNTYgMTZjMi4yMDkgMCA0IDEuNzkxIDQgNCAwIDIuMjA5LTEuNzkxIDQtNCA0LTEuMjAyIDAtMzguNzk4IDAtNDAgMC0yLjIwOSAwLTQtMS43OTEtNC00IDAtMi4yMDkgMS43OTEtNCA0LTRDMTcuMjAyIDE2IDU0Ljc5OCAxNiA1NiAxNnoiPjwvcGF0aD4KPC9zdmc+"/></div>
          { onIcon && <div onClick={()=>{setOnIcon(false)}} className="header-menu-bar-modal">
            <div className='header-menu-bar-modal-inside'>
              <div className="header-tab-container">
                <div className="header-tab-item">
                  <Link to="/allblogs"><h4 onClick={()=>setTabValue(1)} className={tabValue===1?'active-line':''}>ALL BLOGS</h4></Link>
                </div>
                <div className="header-tab-item">
                  <Link to="/myblogs"><h4 onClick={()=>setTabValue(2)} className={tabValue===2?'active-line':''}>MY BLOGS</h4></Link>
                </div>
                <div className="header-tab-item">
                  <Link to="/myblogs/add"><h4 onClick={()=>setTabValue(3)} className={tabValue===3?'active-line':''}>ADD BLOG</h4></Link>
                </div>
              </div>
            </div>
          </div>}
        </div>
        }
        <div className="header-icon"> 
          <h4>MyBlog.App</h4>
        </div>

        { isLoggedIn && <div className="header-tab-container-outer"><div className="header-tab-container">
          <div className="header-tab-item">
            <Link to="/allblogs"><h4 onClick={()=>setTabValue(1)} className={tabValue===1?'active-line':''}>ALL BLOGS</h4></Link>
          </div> 
          <div className="header-tab-item">
            <Link to="/myblogs"><h4 onClick={()=>setTabValue(2)} className={tabValue===2?'active-line':''}>MY BLOGS</h4></Link>
          </div>
          <div className="header-tab-item">
            <Link to="/myblogs/add"><h4 onClick={()=>setTabValue(3)} className={tabValue===3?'active-line':''}>ADD BLOG</h4></Link>
          </div>
        </div></div>}

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