import React, { useState } from 'react'
import '../index.css'
import Form from '../Form';
import Slider from '../Slider';
import pic from '../homepics/pics'
import image7 from '../homepics/image7.png'
import image8 from '../homepics/image8.png'
import image9 from '../image/image1.PNG';
import image10 from '../image/image10.PNG'
import image11 from '../image/premium_photo-1676321688630-9558e7d2be10.avif'
import { details } from '../homepics/pics';
import { LuBed } from "react-icons/lu";
import { LuBath } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { property } from '../homepics/pics';
import owner1 from '../homepics/buju.png';
import owner4 from '../homepics/owner4.png';
import owner2 from '../homepics/owner2.avif';
import owner3 from '../homepics/owner3.avif';
import ActiveSlider, { CommentSlider } from '../Swiper';
import agent from '../homepics/Agent1.png'


const getBackgroundColor = (status) => {
  switch (status) {
    case 'In Vogue':
      return 'rgba(255, 225, 225, 1)';
    case 'New Listing':
      return 'rgba(96, 139, 193, 1)';
    case 'Discounted Price':
      return 'rgba(241, 255, 241, 1)';
    case 'Popular':
      return 'rgba(255, 225, 225, 1)';
    default:
      return 'transparent';
  }
};
const getColor = (status) => {
  switch (status) {
    case 'In Vogue':
      return 'rgba(255, 17, 17, 1)';
    case 'New Listing':
      return 'rgba(255, 255, 255, 1)';
    case 'Discounted Price':
      return 'rgba(0, 206, 58, 1)';
    case 'Popular':
      return 'rgba(255, 17, 17, 1)';
    default:
      return 'transparent';
  }
};

const Home = () => {
  const [clickedIndex, setClickedIndex] = useState(1); // Tracks which button is clicked
  const [hoveredIndex, setHoveredIndex] = useState(null); // Tracks which button is hovered

  const handleClick = (index) => {
    setClickedIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle click state
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
    <div id='home-body'>  
        <div  id='img-container'>
        </div>
       <div id='home-img-details'>
        <h2 id='img-container-heading'> REAL ESTATE</h2>
        <h1 id='img-container-subheading'>Find a beautiful home you love!</h1>
        <p id='img-container-text'>Don`t fret! You are at Nigeria`s leading Real Estate Company. We have all you could probably be searching the whole internet for.</p>
       </div>
        <Form />
        <Slider />
        <div id='home-down-div'>
        <div id='home-down-div-left'>
          <div id='pics-div'>
            {pic.map((pics, index) => {
              return (
                <div id='pics-subdiv' key={index} style={{ left: `${index * 25}px`, zIndex: pic.length - index }}>
                  <img src={pics} alt="" id='pics' style={{filter: index === pic.length - 1 ? "blur(1px) brightness(0.4)" : "none", }} />

                  {index === pic.length - 1 && (
        <span
          style={{
            position: "absolute",
            top: "43%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "24px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          +
        </span>
      )}
                  </div>
            )
          })}
          </div>
          <div id='pics-details-div' >
            <h4 style={{margin:"0", fontWeight:"500", fontSize:"19.4px", color:"#2B2B2B", lineHeight:"29.1px", font:"Poppins"}}> 
              72 employees Nationwide
            </h4>
          </div>
        </div>

        <div id='home-down-div-right'>
          <div style={{ width: "60px", height: "60px",borderRadius: "50%" }}>
            <img src={image7} alt='home-image'  style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:"50%"}}/>
          </div>
          <div id='home-down-details-right'>
              <h5 style={{fontSize:"18.9px",fontWeight:"500", lineHeight:"28.35px", color:"#2B2B2B", font:"Poppins", margin:"0"}}>Over a 1000+ <br/> Properties Nationwide</h5>
          </div>
        </div>
      </div>
      </div>

      {/* the nigerian emblem part */}
      <div  className='nigerian-emblem-div'> 
        <div className='nigerian-emblem-subdiv'> 
          
          <div className='nigerian-emblem-image-container'>
            <img src={ image8} alt='nigerain logo' className='nigerian-emblem-image'/>
          </div>
          <div className='nigerian-emblem-container-details'>
            <h2 className='nigerian-emblem-heading'> Provisional backing from the Ministry of <br/>Works & Housing</h2>
          </div>
        </div>
        <div className='emblem-ball'/>
      </div>

      {/* the mission part */}
      <div className='mission-container'>
        <div  className='mission-container-details'>
          
          <h2 className='mission-header'>OUR MISSION:</h2>
          <h1 className='mission-sub-heading'> Guiding Individuals in Discovering the Ideal Real Estate options</h1>
          
          <p className='mission-paragraph'> Providing personalized guidance, we help individuals navigate the real estate market to find properties that best meet their needs. We ensure a seamless experience in locating ideal real estate options. Whether buying, renting, or investing, our approach is tailored to make the process efficient and rewarding.</p>
          <div className='mission-sub-container'>
            <div  className='mission-sub-container-icon1'>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.531 38.8724H19.1278C18.3737 38.8724 17.7483 38.2471 17.7483 37.493C17.7483 36.7389 18.3737 36.1136 19.1278 36.1136H30.531C32.499 36.1136 34.4302 34.4765 34.7613 32.5269L37.2075 17.8867C37.4282 16.5625 36.6927 14.6679 35.6627 13.8402L22.9166 3.651C21.4452 2.47389 18.999 2.47387 17.546 3.63259L4.80016 13.8402C3.7518 14.6863 3.0345 16.5625 3.25521 17.8867L3.77019 20.9949C3.89894 21.7489 3.38397 22.4662 2.62988 22.5766C1.8758 22.7237 1.17691 22.1904 1.04816 21.4363L0.533174 18.3465C0.146934 16.0659 1.25049 13.1415 3.07134 11.6885L15.8172 1.48061C18.2817 -0.505767 22.1625 -0.487356 24.6455 1.49902L37.3914 11.6885C39.1938 13.1415 40.2974 16.0659 39.9295 18.3465L37.4833 32.9867C36.9316 36.2421 33.8233 38.8724 30.531 38.8724Z" fill="#133E87"/>
<path d="M7.35726 39.2221C6.60317 39.2221 5.99622 38.6151 5.97783 37.8794C5.92265 35.3964 4.28575 33.7595 1.80278 33.7043C1.0487 33.686 0.441732 33.0606 0.460124 32.2881C0.478516 31.5341 1.08546 30.9455 1.83955 30.9455H1.87632C5.83067 31.0375 8.66311 33.8515 8.73668 37.8058C8.75508 38.5599 8.14811 39.2037 7.39402 39.2221C7.37563 39.2221 7.37565 39.2221 7.35726 39.2221Z" fill="#4361EE"/>
<path d="M12.875 39.222C12.1209 39.222 11.4955 38.6151 11.4955 37.861C11.4771 36.6471 11.2748 35.4884 10.907 34.4032C9.96894 31.7179 7.96417 29.7314 5.27889 28.775C4.19374 28.3887 3.03502 28.1866 1.82113 28.1866C1.06704 28.1866 0.44172 27.5612 0.460112 26.7888C0.460112 26.0347 1.08545 25.4277 1.83954 25.4277H1.85793C3.3845 25.4461 4.83747 25.7036 6.19851 26.1818C9.67466 27.4141 12.268 30.0074 13.5003 33.4836C13.9785 34.8446 14.236 36.316 14.2544 37.8242C14.2544 38.5967 13.6474 39.222 12.875 39.222Z" fill="#133E87"/>
<path d="M1.83924 39.6818C0.809264 39.6818 0 38.8542 0 37.8426C0 36.831 0.827656 36.0034 1.83924 36.0034C2.85082 36.0034 3.67847 36.831 3.67847 37.8426C3.67847 38.8542 2.86921 39.6818 1.83924 39.6818Z" fill="#4361EE"/>
              </svg>
            </div>
            <div>
              <h3 className='m-subheading1-heading'>Top quality service</h3>
              <p className='m-subheading1-paragraph'>Our properties are built with high-<br/>end materials.</p>
            </div>
          </div>

          <div className='mission-sub-container2'>
            <div  className='mission-sub-container-icon1'>
              <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42 16.4855V31.5433C42 34.0089 40.6791 36.2984 38.5437 37.5532L25.4672 45.1041C23.3318 46.3369 20.6901 46.3369 18.5327 45.1041L5.45625 37.5532C3.32086 36.3204 2 34.0309 2 31.5433V16.4855C2 14.0199 3.32086 11.7303 5.45625 10.4755L18.5327 2.9246C20.6681 1.6918 23.3098 1.6918 25.4672 2.9246L38.5437 10.4755C40.6791 11.7303 42 13.9979 42 16.4855Z" stroke="#133E87" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.0111 21.8132C24.8441 21.8132 27.1404 19.5165 27.1404 16.6837C27.1404 13.8508 24.8441 11.5544 22.0111 11.5544C19.1783 11.5544 16.8818 13.8508 16.8818 16.6837C16.8818 19.5165 19.1783 21.8132 22.0111 21.8132Z" stroke="#133E87" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30.8168 34.2734C30.8168 30.3108 26.8762 27.0967 22.0111 27.0967C17.1459 27.0967 13.2053 30.3108 13.2053 34.2734" stroke="#133E87" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
            <div>
              <h3 className='m-subheading1-heading'>Great Personnel Service</h3>
              <p className='m-subheading1-paragraph'>Boojooo sefaestraiyt nhtvyg</p>
            </div>
          </div>

        </div>


        <div  className='mission-image-container'>
          <div className='mission-image-container-1'>
            <img src={ image9}  className='mission-image'/>
          </div>
          <div className='mission-image-container-2'>

            <div className='mission-image-div'>
              <img  src={image11} className='mission-image'/>
            </div>

            <div className='mission-image-div2'>
              <img src={ image10}  className='mission-image' />
            </div>
            
          </div>

        </div>
      </div>

      {/* current listing part */}
      <div className='current-listing-heading-container'>
        <div className='current-listing-heading-subcontainer'>
          <div className='current-listing-heading-subcontainer-headings'>
            <h4 className='listings-header-main-heading'> 
              CHECKOUT OUR NEW
            </h4>
            <h2 className='listings-header-subheading'>
              Current Listings
            </h2>
            <p className='listings-header-paragraph'> 
              Check through our current listings for your preferred choice of living.
            </p>
          </div>


          <div className='current-listing-btn-container'>
            <button key={1} onClick={() => handleClick(1)} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} style={{ backgroundColor: hoveredIndex === 1 ? "rgba(19, 62, 135, 1)" : clickedIndex === 1 ? "rgba(19, 62, 135, 1)" : "rgba(255, 255, 255, 1)", color: hoveredIndex === 1 ? "rgba(255, 255, 255, 1)" : clickedIndex === 1 ? "rgba(255, 255, 255, 1)" : "rgba(19, 62, 135, 1)", }} className="hover-button" > All
            </button>
            
            <button key={2} onClick={() => handleClick(2)} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave} style={{ backgroundColor: hoveredIndex === 2 ? "rgba(19, 62, 135, 1)" : clickedIndex === 2 ? "rgba(19, 62, 135, 1)" : "rgba(255, 255, 255, 1)", color: hoveredIndex === 2 ? "rgba(255, 255, 255, 1)" : clickedIndex === 2 ? "rgba(255, 255, 255, 1)" : "rgba(19, 62, 135, 1)", }} className="hover-button" > Sell

            </button>
            
             <button  key={3} onClick={() => handleClick(3)} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave} style={{ backgroundColor: hoveredIndex === 3 ? "rgba(19, 62, 135, 1)"  : clickedIndex === 3 ? "rgba(19, 62, 135, 1)"  : "rgba(255, 255, 255, 1)", color: hoveredIndex === 3 ? "rgba(255, 255, 255, 1)" : clickedIndex === 3 ? "rgba(255, 255, 255, 1)"  : "rgba(19, 62, 135, 1)", }}  className="hover-button" > Rent</button>

            
          </div>
            </div>
      </div>

      {/* scrollable listings */}
      <div className="scroll-container">
        
            <div id="listings-container">
                {details.map((detail, index) => (
                  <div
                    key={index}
                    className='listings-subcontainer'
                  >
                    <div className='listings-img-container'>
                      <img src={detail.image} alt={detail.location}  className='listings-hotelImg' />

                      <div style={{
                        backgroundColor: getBackgroundColor(detail.status)}} className='listing-details-status-container'>
                        {detail.icon}
                        <h5 style={{ color: getColor(detail.status)}} className='listing-details-status-heading'>{ detail.status}</h5>
                      </div>
                    </div>
                    <h2 className='listiings-status-price'>{detail.price}</h2>
                    <h4 className='listings-status-state'>{detail.state}</h4>
                    <p className='listings-status-location'>{detail.location}</p>
                    <div  className='listing-under-details'>

                      <div style={{width:"79px", height:"21.5px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                          <LuBed  style={{width:"30px", height:"21.5px", color:"rgba(43, 43, 43, 1)"}}/>
                        <p style={{fontWeight:"400", fontSize:"16px", lineHeight:"26px", color:"rgba(43, 43, 43, 1)", margin:"0"}} >{ detail.beds}</p>
                      </div>
                       <div style={{width:"79px", height:"21.5px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                          <LuBath  style={{width:"30px", height:"21.5px", color:"rgba(43, 43, 43, 1)"}}/>
                        <p style={{fontWeight:"400", fontSize:"16px", lineHeight:"26px", color:"rgba(43, 43, 43, 1)", margin:"0"}}>{ detail.bath}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
      </div>

      {/* services */}
      <div  className='services-general-container'>
        <div className='services-general-subcontainer'>
          <h3 className='services-general-header'>OUR SERVICES</h3>
          <h1 className='services-general-header2'>Exlclusive services we offer</h1>

          <div className='services-details-container'>
            
            <div className='services-div'>
              <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                 <div className='services-img-div'> 
                <IoSearch style={{ width:"40px", height:"39.94px",color :"rgba(255, 255, 255, 1)"}} />
              </div>
             </div>

              <h4 className='service-details-heading'>Buy a New Home</h4>
              <p className='service-details-paragraph'>Wanting to buy a house? but you don`t know how to go about it? We have you covered!</p>
            </div>

            <div className='services-div'>
              <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                 <div className='services-img-div'> 
                <AiFillHome style={{ width:"40px", height:"39.94px",color :"rgba(255, 255, 255, 1)"}} />
              </div>
             </div>

              <h4 className='service-details-heading'>Buy a New Home</h4>
              <p className='service-details-paragraph'>We reduce the stress and complexities often encountered when needing to sell a house.</p>
            </div>
            <div className='services-div'>
              <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                 <div className='services-img-div'> 
                <LuBed style={{ width:"40px", height:"39.94px",color :"rgba(255, 255, 255, 1)"}} />
              </div>
             </div>

              <h4 className='service-details-heading'>Buy a New Home</h4>
              <p className='service-details-paragraph'>Come live with us. You would enjoy it!</p>
            </div>
          </div>
        </div>
      </div>

      {/* neighorhood properties */}
        <div className='neighbor-general-container'>
          
          <div className='neighbor-general-subcontainer'>
            
              <div style={{ display: 'flex', justifyContent:"center", alignItems:"center", marginTop:"15px"}}>
                    <div style={{width:"50px", height:"50px", opacity:"50%", background:"linear-gradient(180deg, #4361EE 0%, rgba(67, 97, 238, 0) 100%)", borderRadius:"50%"}}></div>     
              </div>

            <h4 style={{fontWeight:"500", fontSize:"19.4px",lineHeight:"29.1px", letterSpacing:"0.15em", color:"rgba(19, 62, 135, 1)", marginTop:"50px", marginBottom:"0"}} >AREAS ACROSS THE NATION</h4>
            <h2 style={{ fontWeight: "600", fontSize: "39.8px", lineHeight: "47px", color: "rgba(43, 43, 43, 1)", marginTop: "10px", marginBottom: "0" }}>Neighborhood Properties</h2>
            <div className='houses-general-container1'>
              
              <div className='houses-container-div' >
                <img src={property[0].image} alt='hotel' className='hotel-image' />
                <div className='hotel-image-details'>
                  <h1 className='hotel-image-details-value'>{property[0].value}</h1>
                  <h4 className='hotel-image-details-location'> {property[0].location} </h4>
                </div>
              </div>

              <div className='houses-container-div' >
                <img src={property[1].image} alt='hotel' className='hotel-image' />
                <div className='hotel-image-details'>
                  <h1 className='hotel-image-details-value'>{property[1].value}</h1>
                  <h4 className='hotel-image-details-location'> {property[1].location} </h4>
                </div>
              </div>

              <div className='houses-container-div3' >
                <img src={property[2].image} alt='hotel' className='hotel-image' />
                <div className='hotel-image-details'>
                  <h1 className='hotel-image-details-value'>{property[2].value}</h1>
                  <h4 className='hotel-image-details-location'> {property[2].location} </h4>
                </div>
              </div>

            </div>
            
            <div className='houses-general-container2'>

                  <div className='houses-container-div4'>
                <img src={property[3].image} alt='hotel' className='hotel-image' />
                <div className='hotel-image-details'>
                  <h1 className='hotel-image-details-value'>{property[3].value}</h1>
                  <h4 className='hotel-image-details-location'> {property[3].location} </h4>
                </div>
              </div>
              <div className='houses-container-div5'>
                <img src={property[4].image} alt='hotel' className='hotel-image' />
                <div className='hotel-image-details'>
                  <h1 className='hotel-image-details-value'>{property[4].value}</h1>
                  <h4 className='hotel-image-details-location'> {property[4].location} </h4>
                </div>
              </div>

            </div>
          </div>

        </div>

      {/* roundball */}
      <div  className='rooundball-general-containerdiv'>
        <div className='roundball-main'></div>
      </div>

                {/* owner  */}
      <div className='owner-general-container'>
    
        <div className='owner-subcontainer'>
          <h4 className='owner-introduction'>INTRODUCE YOURSELF TO</h4>
          
          <h2 className='owner-explaination'>Our Team of Experts</h2>
          <div className='owner-subdiv-general'>
            
            <div className='owners-container'>
              <div className='owner-imgidiv'>
                <img src={owner1}  className='owner-img' alt='owner'></img>
              </div>
              <h2 className='owner-name'> Amodu I. Olamide</h2>
              <p className='owner-role'> CEO & Founder</p>
            </div>
            <div className='owners-container'>
              <div className='owner-imgidiv'>
                <img src={owner2}  className='owner-img' alt='owner'></img>
              </div>
              <h2 className='owner-name'> Megida Eze</h2>
              <p className='owner-role'> Real Estate Developer</p>
            </div>
            <div className='owners-container'>
              <div className='owner-imgidiv'>
                <img src={owner3}  className='owner-img' alt='owner'></img>
              </div>
              <h2 className='owner-name'> Osaro Orobosa</h2>
              <p className='owner-role'>Listing Agent</p>
            </div>
            <div className='owners-container'>
              <div className='owner-imgidiv'>
                <img src={owner4}  className='owner-img' alt='owner'></img>
              </div>
              <h2 className='owner-name'> Asa Mbuemo</h2>
              <p className='owner-role'> Buyer's Agent</p>
            </div>
          </div>
        </div>
      </div>

      {/* trending */}
      
      <div className='trending-main-container'>
        
            <div className='trending-main-subcontainer'>
                  <h4 style={{fontSize:"19.4px", lineHeight:"29.1px", letterSpacing:"0.15em", textAlign:"center",color:"rgba(255, 255, 255, 1)", fontWeight:"500",      marginTop:"35px",    marginBottom:"0"}}> 
                      WHAT’S TRENDING
                  </h4>
                  <h2 style={{fontWeight:"600",fontSize:"39.8px",lineHeight:"47px", textAlign:"center",color:"rgba(255, 255, 255, 1)", marginTop:"8px"}}>
                      Latest Blogs & Posts
                  </h2>

          <ActiveSlider />
          
            </div>
      </div>
      {/* comments */}
      <div className='comments-general-container'> 
        <div className='comments-general-subdiv'>
          <h4 className='comments-general-heading'>TESTIMONIALS</h4>
          <h2 className='comments-main-text'>See What Our <br />Customers Says!</h2>
          <p className='comments-general-subtext'>Read convincing reports from our customers.</p>
        </div>

        <CommentSlider/>
      </div>
      {/* agent banner */}
            <div className='Agent-banner '> 
              <div className='Agent-subdiv1'>
                <div className='agent-img-div'>
                  <img src={agent} alt="agent" className='agent-img'/>
                </div> 
                <div >
                  <h2 className='Agent-header1'>Become an Agent.</h2>
                  <p className='Agent-paragraph'>Become an agent and lawfully gain commissions from us.</p>
                </div>
                <button className='Agent-button'>
                  Register Now
                </button>
              </div>
            </div>
    </>
  );
}

export default Home