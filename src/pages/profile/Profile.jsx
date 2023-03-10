import "./profile.scss"
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import React from 'react'

const Profile = () => {

  return (
    <div className="profile">
     <div className="images">
       <img src="https://media.giphy.com/media/4ilFRqgbzbx4c/giphy.gif" alt="" className="cover"/>
       <img src="https://i.pinimg.com/736x/6c/a0/fd/6ca0fdba21901fb7bd2b1a2ee659e1aa.jpg" alt="" className="profilePic"/>
     </div>
     <div className="profileContainer">
        <div className="uInfo">
           <div className="left">
           <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
           </div>
           <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <PlaceIcon/>
                <span>INDIA</span>
              </div>
              <div className="item">
                <LanguageIcon/>
                <span>Lxsh.dev</span>
              </div>
              
            </div>
            <button>follow</button>
           </div>
           <div className="right">
            <EmailOutlinedIcon/>
            <MoreVertIcon/>
           </div>
        </div>
     </div> 
    </div>
  )
}

export default Profile