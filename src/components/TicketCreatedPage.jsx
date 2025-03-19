import React, { useState } from 'react'
import logo from '../assets/logo-mark.svg';
import iconUpload from '../assets/icon-upload.svg'
import iconInfo from '../assets/icon-info.svg'
import patternTicket from "../assets/pattern-ticket.svg"
import iconGithub from "../assets/icon-github.svg"

import { useLocation } from "react-router-dom";


const TicketCreatedPage = () => {

    const location = useLocation();
    const { fullName, email, file,githubUser } = location.state || {}; // รับค่าที่ส่งมา

    const cities = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
    "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"
    ];



    const getRandomCity = () => cities[Math.floor(Math.random() * cities.length)];
    const cityTicket = getRandomCity()
    const [name,setName]=useState("Test ")
    const [emailCurrent,setEmailCurrent]=useState("")
    const [imageFile,setImageFile]=useState(null)
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
 
    useState(()=>{
        setName(fullName || "")
        setEmailCurrent(email || "")
        setImageFile(file || null)
    },[])
 
    return (
     <div className="main-background">
          <div className="pattern-lines"></div>
          <div className="pattern-circle"></div>
          <div className="pattern-circle-second"></div>
          <div className="pattern-squiggly-line-bottom-desktop"></div>
       
          <div className='center-top-label'>
            <img src={logo} alt="Logo"  style={{width:"20px",marginRight:"10px"}}/>
            <label>Coding to Greatness</label>
          </div>
    
          <div className='center-big-label'>
            <label>Congrats, {name}  Your ticket is ready.
            </label>
          </div>
          <div className='description-label' style={{marginTop:"80px"}}>
            <label>We've emailed your ticket to {emailCurrent} and will send updates in the run up to the event.</label>
          </div>

          <div  className='ticket-space'>
          <img
            src={patternTicket}
            className='img-ticket'
          >
          </img>
            <div className="logo-of-ticket"><img style={{width:"20px"}} src={logo}></img></div>
            <div className="name-of-ticket">Coding of Greatness</div>
            <div className="date-of-ticket">{formattedDate} / {cityTicket} </div>
            <div className="image-of-ticket">
            <img 
                src={imageFile} 
                className='ticket-card'
                alt="Ticket"
            />
            <div className='owner-ticket'> <label>{fullName}</label></div>
            <div className='github-owner-ticket'><img src={iconGithub} style={{marginRight:"10px"}} ></img><label>{githubUser}</label></div>
            
            </div>
            <div className='num-ticket'>#546454</div> 

        
          </div>
    
       
         </div>
    

    
    
  )
}

export default TicketCreatedPage