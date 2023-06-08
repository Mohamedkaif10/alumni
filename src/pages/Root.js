import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/Navbar';
import classes from './Root.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IIThlogo from "../Images/IItlogo2.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
      <footer className={classes.Footer}>
        <div className={classes.Logo}>
            <img src={IIThlogo}></img>
            <p>IITH Road, Near NH-65, Sangareddy, Kandi, Telangana 502285</p>
            <a href="https://goo.gl/maps/HELt39jBkZ1yjDcx7"><LocationOnIcon fontSize='large'/>LOCATION</a>
        </div>
        <div className={classes.CU}>
          <h5>Contact Us</h5>
          <a href = "mailto: dean.ar@iith.ac.in">dean.ar@iith.ac.in</a>
          <div className={classes.llinks}>
            <a href="https://www.facebook.com/iithyderabad/"><FacebookIcon fontSize="large"/></a>
            <a href="https://twitter.com/IITHyderabad"><TwitterIcon fontSize="large"/></a>
            <a href="https://in.linkedin.com/school/iithyderabad/"><LinkedInIcon fontSize="large"/></a>
            <a href="https://www.instagram.com/iithyderabad/?hl=en"><InstagramIcon fontSize="large"/></a>
          </div>
          </div>
        <div className={classes.links}>
            <h5>Quick Links</h5>
                <ul>
                    <li>Home</li>
                    <li>Give</li>
                    <li>Alumni Talk</li>
                </ul>
        </div>
      </footer>
    </>
  );
}

export default RootLayout;