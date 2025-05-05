import image1 from './image1.png';
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.png'
import image5 from './image5.png'
import image6 from './image6.png'
import React from 'react';
import { FaFireAlt } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { FaDollarSign } from "react-icons/fa";



const pic = [image1, image2, image3, image4, image5, image6]

 export const details = [
     { name: 'image9', image: require('./image9.png'), state: 'Maitama, Abuja', location: 'Aminu Kano, Crescent', beds: '7 Beds', bath: '6 Bath', status: "In Vogue", icon: <FaFireAlt style={{ color: "rgba(255, 17, 17, 1)", width: "20px", height: "22.51px", marginRight: "10px" }} />, price:"# 590,000,000" },
    
     { name: 'image10', image: require('./image10.png'), state: 'Jabi Lake', location: 'Off NASFAT Central mosque.', beds: '3 Beds', bath: '2 Bath', status: "New Listing", icon: <GoHome style={{ color: "rgba(255, 255, 255, 1)", width: "20px", height: "21.04px", marginRight: "10px" }} /> , price:"#290,700,000"},
    
     { name: 'image11', image: require('./image11.png'), state: 'Guzape', location: 'Amodu Ibrahim way, Tchutchu District.', beds: '4 Beds', bath: '4 Bath', status: "Discounted Price", icon: <FaDollarSign style={{ color: "rgba(0, 206, 58, 1)", width: "12px", height: "20.3px", marginRight: "10px" }} />, price:'#970,000,000' },
    
     { name: 'image12', image: require('./image12.png'), state: 'New 1004, Lagos', location: 'Zubarin, Road', beds: '4 Beds', bath: '7 Bath', status: "Popular", icon: <FaFireAlt style={{ color: "rgba(255, 17, 17, 1)", width: "20px", height: "22.51px", marginRight: "10px" }} />, price:"#780,000,000" },
    
    { name: 'image13', image: require('./image13.avif'), state: 'Maitama, Abuja', location: 'Aminu Kano, Crescent', beds: '7 Beds', bath: '6 Bath', status:"In Vogue", icon:<FaFireAlt style={{color:"rgba(255, 17, 17, 1)", width:"20px", height:"22.51px", marginRight:"10px"}} />, price:"# 590,000,000" }
    
]

export const property = [
    {id:'1', name:'image1', image:require('./image14.png'), value:'216', location:'Highland, Lagos.'},
    { id: '2', name: 'image2', image: require('./image15.png'), value: '141', location: 'Guzape,Abuja.' },
    { id: '3', name: 'image3', image: require('./image16.png'), value: '212', location: 'Oluyole,Ibadan.' },
    {id: '4', name: 'image4', image: require('./image17.png'), value: '183', location: 'Ikeja, Lagos.' },
    {id: '5', name: 'image5', image: require('./image18.png'), value: '112', location: 'Rivers, Port Harcourt.' },
]

export const blogs = [
    { id: "1", image: require('./blog1.png'), text: "Top 10 Home Buying Mistakes to Avoid" },
    { id: "2", image: require('./blog2.png'), text: "How to Stage Your Home for a Quick Sale" },
    { id: "3", image: require('./blog3.png'), text: "5 Tips for First-Time Home Sellers" },
    { id: "4", image: require('./blog4.png'), text: "Hospitality 2025" },
    { id: "5", image: require('./blog5.png'), text: "Gear Up for Mahakumbh Mela 2025" },
    { id: "6", image: require('./blog6.jpg'), text: "Sleigh The Holiday Season" },
    { id: "7", image: require('./blog7.png'), text: "Unlocking Growth Potential" },
    { id: "8", image: require('./blog8.png'), text: "A New Era of Hotel Security" },
    { id: "9", image: require('./blog9.jpg'), text: "Enhancing Hotel Stone Hedge’s Efficiency" },
]
export const comments = [
    { id: "1", image: require('./comment1.png'), text: "I wholeheartedly recommend Osaro Orobosa. He listened carefully to our needs and went above and beyond to help us find the perfect home. We couldn’t be happier with our new place!", name:"GoodboyIVY",  rating: 4, },
    { id: "2", image: require('./image2.png'), text: "My husband and I had been looking to purchase a home for several months and spoke to several realtors and be honest felt like no one wanted to take the time to help us deal with the process on our terms we felt like they thought we were never going buy a house until we called Joe Manausa Real Estate they suggested that we work with Catherine Beeche after the first showing we knew she was the realtor for us she took the time to listen to us and understand what we were looking for she always had time for us which was important because our schedules were so crazy. She was always there to answer a question or with a suggestion. She was awesome and went above and beyond we not only bought a house but we gained a friend !! They are the only realtors in Tallahassee that I would recommend!!! Ask for Catherine you won’t be disappointed", name:"Sandy",rating: 5, },
    
    {id:"3", image: require('./image5.png'), text:"Andy Elliot is the best realtor in town! My grandparents were very emotional about selling their home after 25 years and very particular about who was going to sell it for them. Andy met with them a dozen times at Panera and was so patient with all questions and concerns. He worked extremely hard to get the best price for their house and in the end everyone left the sale happy. I will definitely use him again in the future for any sale or home purchase and I suggest anyone in need of a good realtor to do the same! Thanks Andy!!", name:"Walker",rating: 4,}
]

export default pic;