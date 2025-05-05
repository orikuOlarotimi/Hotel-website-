import React, {useState} from 'react';
import './index.css';
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import Navbar from './Navbar';
import DownNav from './DownNav';
import { RxHamburgerMenu } from "react-icons/rx";
import {Route,Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Listings from './pages/Listings';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import About from './pages/About';
import './index.css'
import Home from './pages/Home';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      
       <div className='hamburger-menu'>
          <div className='hamburger-heading'>
            <svg width="142" height="40" viewBox="0 0 142 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M59.5788 12.6927V15.0641H54.8615V30.4146H51.9546V15.0641H47.2117V12.6927H59.5788ZM71.7279 30.4146L67.6481 23.3258H65.4296V30.4146H62.5228V12.6927H68.6425C70.0025 12.6927 71.1499 12.9307 72.0849 13.4067C73.0369 13.8826 73.7423 14.5201 74.2013 15.3191C74.6773 16.1181 74.9153 17.0105 74.9153 17.9965C74.9153 19.1525 74.5753 20.2064 73.8953 21.1584C73.2324 22.0934 72.2039 22.7308 70.81 23.0708L75.1958 30.4146H71.7279ZM65.4296 21.0054H68.6425C69.7305 21.0054 70.5465 20.7334 71.0904 20.1894C71.6514 19.6454 71.9319 18.9145 71.9319 17.9965C71.9319 17.0785 71.6599 16.3646 71.1159 15.8546C70.572 15.3276 69.7475 15.0641 68.6425 15.0641H65.4296V21.0054ZM81.5409 12.6927V30.4146H78.634V12.6927H81.5409ZM104.023 12.6927V30.4146H101.116V18.277L95.71 30.4146H93.6956L88.2643 18.277V30.4146H85.3574V12.6927H88.4938L94.7155 26.5897L100.912 12.6927H104.023Z" fill="black"/>
<path d="M124.814 29.2053L131.469 11.4834H134.835L141.516 29.2053H138.405L133.152 14.4668L127.874 29.2053L124.814 29.2053ZM107.109 29.2053L113.764 11.4834L117.13 11.4834L123.811 29.2053H120.7L115.447 14.4668L110.169 29.2053H107.109Z" fill="#608BC1"/>
<circle cx="19.9212" cy="19.9212" r="19.9212" fill="#133E87"/>
<g clip-path="url(#clip0_39_2162)">
<path d="M29.2562 17.6621L20.2917 10.4905C20.1857 10.4056 20.0539 10.3594 19.9181 10.3594C19.7824 10.3594 19.6506 10.4056 19.5446 10.4905L10.5801 17.6621C10.4834 17.7397 10.4132 17.8454 10.3793 17.9647C10.3453 18.0839 10.3493 18.2108 10.3907 18.3277C10.4321 18.4445 10.5088 18.5457 10.6102 18.617C10.7115 18.6884 10.8326 18.7264 10.9566 18.7259H12.1519V28.8857C12.1519 29.0442 12.2148 29.1962 12.3269 29.3083C12.439 29.4203 12.591 29.4833 12.7495 29.4833H24.7022V28.288H22.3117V22.9093C22.3117 22.7508 22.2487 22.5988 22.1366 22.4867C22.0245 22.3747 21.8725 22.3117 21.714 22.3117H18.1282C17.9697 22.3117 17.8177 22.3747 17.7056 22.4867C17.5936 22.5988 17.5306 22.7508 17.5306 22.9093V28.288H13.3471V18.7259H23.5069V17.5306H12.6599L19.9211 11.7216L27.1824 17.5306H27.0927C26.9342 17.5306 26.7822 17.5936 26.6702 17.7057C26.5581 17.8177 26.4951 17.9697 26.4951 18.1283V21.7141H27.6904V18.7259H28.8856C29.0091 18.7252 29.1293 18.6862 29.2298 18.6144C29.3302 18.5426 29.406 18.4414 29.4466 18.3248C29.4872 18.2082 29.4907 18.0819 29.4566 17.9632C29.4225 17.8446 29.3525 17.7394 29.2562 17.6621ZM18.7259 23.507H21.1164V28.288H18.7259V23.507Z" fill="white"/>
<path d="M25.2996 26.2499L24.5287 25.4789L23.686 26.3216L24.8813 27.5169C24.9933 27.6282 25.1448 27.6906 25.3026 27.6906C25.4605 27.6906 25.612 27.6282 25.724 27.5169L29.3098 23.931L28.4671 23.0884L25.2996 26.2499Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_39_2162">
<rect width="19.1243" height="19.1243" fill="white" transform="translate(10.3589 10.3591)"/>
</clipPath>
</defs>
            </svg>
            <button className='hamburger-button' onClick={toggleMenu}>
              <RxHamburgerMenu  className='hamburger'/>
          </button>
        </div>
         <div className={`menu-items ${menuOpen ? 'active' : ''}`}>
              <div id='navbar-hidden-content'>
                            <Link to="/" className='navbar-links'>Home</Link>
                            <Link to="/about" className='navbar-links'>About</Link>
                            <Link to="/listings" className='navbar-links'>Listings</Link>
                            <Link to="/services" className='navbar-links'>Services</Link>
                            <Link to="/blogs" className='navbar-links'>Blogs</Link>
                        </div>
          <div className='signup-container-btn'>
            <button id='navbar-button'>Login</button>
            <button id='navbar-button'>SignUp</button>
          </div>
  
        </div>
      </div>
      

      <div className='main-navbar'>
        <header id='header-container' >
        <div id='header-sub-container'>
          <div className='empty-dummy-div'></div>
          <div id='header-div-one'> 
              <CiLocationOn  style={{ height:"20px", width:"20px", color:"#fff"}}/> 
              <p style={{margin:"0",  color:"#fff"}}> Old Ogorode Road, Sapele, Delta state.</p>
          </div>

      <div id='header-div-two'> 
            <CiMail  style={{ height:"22px", width:"22px",  color:"#fff"}}/>
            <p style={{margin:"0", paddingBottom:"2.5px", color:"#fff"}}>orikuolarotimi12345@gmail.com</p>
      </div>

      </div>
    </header>
        <Navbar />
      </div>
      
      <Routes>
      <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/listings' element={<Listings/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/blogs' element={<Blogs/>} />
      </Routes>

      

      <DownNav />
       
    </>
    
  )
}

export default App