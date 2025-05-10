import React, { useState }from "react";
import { Swiper, SwiperSlide  } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination,Keyboard, Mousewheel, Autoplay } from "swiper/modules";
import { blogs } from "./homepics/pics";
import { comments } from "./homepics/pics";
import './index.css';
import "swiper/css/autoplay";
import { FaQuoteLeft } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";





const ActiveSlider = () => {
    return (
        <div  className="active-slider-main">
      <Swiper
          slidesPerView={3}
          spaceBetween={50}
          keyboard={{ enabled: true }} 
          mousewheel={{
              forceToAxis: true,
              releaseOnEdges: true,
            }}
          autoplay={{
          delay: 1500, // Time in milliseconds between slides
          disableOnInteraction: false, // Continue autoplay after user interaction
           }}

        freeMode={true}
          modules={[Keyboard, Mousewheel, FreeMode, Autoplay]}
          breakpoints={{
             0: {
                slidesPerView: 2,
                direction: "vertical", // Applies to 0px and up
              },
              480: {
                slidesPerView: 2,
                direction: "vertical", // Applies from 480px and up
              }, 
          1201: { 
            slidesPerView: 3, 
            direction: "horizontal", // Horizontal layout on desktop
          },
        }}

      >
        {blogs.map((blog) => {
            return (
            <SwiperSlide key={blog.id}>
            <div
                  className="active-slider-subdiv"
            >
                    <div className="blog-img-container">
                    <img src={blog.image} alt="blogs" className="blog-img" />
                    <h3 className="blog-text"> {blog.text}</h3>
                    <div  className="active-slider-btn-main">
                      <button className="activeSlider-btn"> 
                        Read Now
                    </button>
                  </div>
                  </div>
                  
            </div>
          </SwiperSlide>  
            );
        }
          
        )}
            </Swiper>
            </div>
  );
};






export const CommentSlider = () => {
      
  const ReadMoreLess = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const wordLimit = 35;

  // Split the text into words
  const words = text.split(" ");
  const isTruncated = words.length > wordLimit;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <h4
        style={{
          fontWeight: "500",
          fontSize: "19.4px",
          lineHeight: "29.1px",
          color: "rgba(43, 43, 43, 1)",
          margin: "10px 0px 0px 0px"
        }}
      >
        {isExpanded || !isTruncated
          ? text
          : words.slice(0, wordLimit).join(" ") + "..."}
      </h4>
      {isTruncated && (
        <button
          onClick={toggleReadMore}
          style={{
            background: "none",
            border: "none",
            color: "blue",
            cursor: "pointer",
            marginTop: "5px",
            textAlign:"end"
          }}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

      return (
        <div className="comment-slider-main">
      <Swiper
          slidesPerView={1}
          spaceBetween={0}
          keyboard={{ enabled: true }} 
          mousewheel={{ forceToAxis: true }}
          autoplay={{
          delay: 1500, 
          disableOnInteraction: false, 
           }}

        freeMode={true}
        
        modules={[Keyboard, Mousewheel,FreeMode, Autoplay]}
      >
        {comments.map((comment) => {
            return (
            <SwiperSlide key={comment.id}>
            <div
              
                  className="comment-slider-main-subdiv"
            >
                  <div className="comment-slider-II-subdiv">
                      <FaQuoteLeft  style={{width:"60px", height:"37.26px", color:"rgba(255, 199, 0, 0.4)", margin:"0"}}/>
                    <ReadMoreLess key={comment.id} text={comment.text} />
                    <hr></hr>
                    <div style={{width:"100%", height:"60px", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0px 20px 0px 20px", boxSizing:"border-box"}}>
                      <div style={{ height:"100%",display:"flex", alignItems:"center",justifyContent:"center"}}>
                        <div className="comment-img-container">
                        <img src={comment.image} alt="comment images" className="comment-img" />
                      </div>
                        <h4 style={{ fontWeight: "500", fontSize: "19.4px", lineHeight: "29.1px", color: "rgba(43, 43, 43, 1)" }}> {comment.name}</h4>
                      </div>
                      <ReactStars
                          count={5}
                          value={comment.rating}
                          size={24}
                          activeColor="#ffd700"
                          isHalf={true} 
                          edit={false}
                        />
                    </div>

                </div>
                  
            </div>
          </SwiperSlide>  
            );
        }
          
        )}
            </Swiper>
            </div>
  );


}




export default ActiveSlider;