import classes from "./Homepage.module.css"
import { Fragment } from "react"
import Button from"../assets/Button"
import video from "../Video/IITH.mp4"
import Dean from"../Images/Dean.png"
import BtmButton from "../assets/BtmButton";
import numvid from "../Video/NUMBERS.mp4"
import { Link,Element, Events, animateScroll as scroll, scroller } from 'react-scroll';
import React, { useState } from 'react';
const HomePage=()=>{
      const [isActive, setIsActive] = useState(false);
      const [isActive2, setIsActive2] = useState(false);
      const [isActive3, setIsActive3] = useState(false);
      const handleClick = () => {
            setIsActive(true);
           setIsActive2(false);
             setIsActive3(false);
          };
          const handleClick2 = () => {
            setIsActive(false);
          setIsActive2(true);
    setIsActive3(false);
          };
          const handleClick3 = () => {
            setIsActive(false);
            setIsActive2(false);
            setIsActive3(true);
          };
          return(
        <div >
          <div className={classes.header}>
           <a className={classes.video} href="https://youtu.be/xUNPjKaqDPA">
                <video src={video} className="" autoplay="" loop="" title="Welcome to IIT Hyderabad" playsinline="true" webkit-playsinline="true" preload="auto" muted="muted" controlslist="nodownload, noremoteplayback" autopictureinpicture="false" buffered="" x-webkit-airplay="deny" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope;" width="100%" height="100%" poster="https://alumni.acr.iitb.ac.in/wp-content/themes/iitbombay-theme/assets/img/hero.webp" type="video/mp4">
                      Sorry, your browser doesn't support embedded videos
                </video>
            </a>
          </div>
          <div className={classes.About} name="About">
            <h1>About Us</h1>
            <p>For all our national institutes of eminence, it is a well-known fact that the Alumni have always played a key role in building the institute and its reputation. Likewise, we at IIT Hyderabad have identified the Alumni Relations office as one of the key pillars of our institute and the office of Dean Alumni Relations has recently been established.</p>
               <p>Since assuming the office, we have initiated several outreach activities to welcome you back to your alma mater and to professionalize the engagement with our Alumni. In the upcoming period, we intend to carry out more outreach activities such as reunions, campaigns, alumni day, and alumni talks. Even without any special event or invitation, as you have been a part of the IIT Hyderabad family, we would just love to have you visit us on the campus, have a brief 'chit-chat', witness our campus development, and have a simple 'chai pe charcha'. The growth of our campus on all fronts not just relies on the people currently here but we would also love to hear and learn from your experiences to make IIT Hyderabad the best in our nation.</p>
               <p>Your support in any form would help us build the institute and achieve the status of being 'the best' from 'one of the best'. We are always available to hear from you and to welcome you back to IIT Hyderabad.
            </p>   
          </div>
           <div className={classes.Dean} name="Dean">
             <img src={Dean}></img>
              <div className={classes.DTDean}>
                <h1>FROM DEAN'S DESK</h1>
            <p>Hope you all are doing well. My name is Mudrika Khandelwal and I recently assumed the office as Dean of Alumni Relations. Having reaped numerous benefits of being an IIT Bombay Alumna, I have a fair idea of how important the connection with one’s Alma mater is and through this role, I wish to facilitate the same for all of you.</p>
            </div>
            <div className={classes.deanintro}>
             <h4>Prof.Mudrika Khandelwal</h4>
             <p>Ph.D University of Cambridge</p>
             <p>Dean, Alumni Relations</p>
             <p>MSME Prefessor</p>
            </div>
          </div>
          <div className={classes.footer} name="video">
          <video loop src={numvid} className="" autoplay=""  title="NUMBERS IN IIT Hyderabad" playsinline="true" webkit-playsinline="true" preload="auto" muted="muted" controlslist="nodownload, noremoteplayback" autopictureinpicture="false" buffered="" x-webkit-airplay="deny" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope;" width="100%" height="100%" poster="https://alumni.acr.iitb.ac.in/wp-content/themes/iitbombay-theme/assets/img/hero.webp" type="video/mp4">
                      Sorry, your browser doesn't support embedded videos
                </video>
          </div>
        <div className={classes.lines}>
                    <Link to="About"   spy={true} smooth={true} offset={-115} duration={500}>
                          <button className={`${classes.ha} ${isActive ? classes.active : ''}`} onClick={handleClick} ></button>
                     </Link>
                     {isActive && <p>About us</p>}
                     <Link to="Dean"  spy={true} smooth={true} offset={-115} duration={500}>
                           <button className={`${classes.ha} ${isActive2 ? classes.active2 : ''}`} onClick={handleClick2}></button>
                     </Link>
                     {isActive2 && <p>Dean's Desk</p>}
                     <Link to="video"  spy={true} smooth={true} offset={-115} duration={500} >
                           <button className={`${classes.ha} ${isActive3 ? classes.active3 : ''}`} end onClick={handleClick3}></button>
                     </Link>
                     {isActive3 && <p>IITH in Numbers</p>}
        </div>
        </div>
    )
}
export default HomePage