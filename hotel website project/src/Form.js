import React from 'react';
import './index.css';
import { FaCaretDown } from "react-icons/fa";
import { SlEqualizer } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";

const Form = () => {
  return (
         <form id='form-container'>
            <div id='form-upper-div'>
                <div id='form-btn-div'>
                <button  className='form-btn'> For sales? </button>
                <button  className='form-btn'> Rentals? </button>
                </div>
                <hr style={{width:"100%"}}></hr>
            </div>

              <div id='form-body'>
                  <div className='form-div' >
                    <input type="text" className="myInput" placeholder="Abuja, Port Harcort, Ibadan e.t.c..." />
                  <button onclick="handleClick()" className='lower-form-btn'>  <FaCaretDown style={{ width: "30px", height: "25px", color:"#AAAAAA"}} /></button>
                  </div>
                  <div className='form-div'>
                    <input type="text" className="myInput" placeholder="Property Format" />
                  <button onclick="handleClick()" className='lower-form-btn'><FaCaretDown style={{ width: "30px", height: "25px", color:"#AAAAAA"}} /></button>
                  </div>
                  <div className='form-div'>
                    <input type="text" className="myInput" placeholder="No of Rooms" />
                  <button onclick="handleClick()" className='lower-form-btn'><FaCaretDown style={{ width: "30px", height: "25px", color:"#AAAAAA"}} /></button>
                  </div>

                  <div style={{width:"100%", display:"flex", justifyContent:"end", marginTop:"14px"}}> <button  id='form-filter-btn'> <SlEqualizer /> Filter Search</button></div>


                    <div style={{width:"100%", display:"flex", alignContent:"center", justifyContent:"center", marginTop:"64px"}}>
                      <button id='form-search-btn'><CiSearch  style={{width:"30px", height:"28px", marginRight:"3px"}}/> Search</button></div>
                </div>
         </form>
  )
}

export default Form