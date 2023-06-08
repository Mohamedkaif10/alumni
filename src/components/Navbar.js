import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';
// import Button from '../assets/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import Logohyd from "../Images/IITHY.jpeg"
import HYDlogo from '../Images/logohyderabad.png'
function MainNavigation() {
  return (
    // <header className={classes.header}>
    //   <nav>
    //     <ul className={classes.list}>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/products">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/products">Alumni Engagement</Link>
    //       </li>
    //       <li>
    //         <Link to="/products">Alumni Bodies</Link>
    //       </li>
    //       <li>
    //         <Link to="/products">Visit to Campus</Link>
    //       </li>
    //       <li>
    //         <Link to="/products">Connect</Link>
    //       </li>
    //       <Button><a href="https://iithaa.org/">IITHAA</a></Button>
    //       <Button><a href="https://giving.iith.ac.in/">GIVE</a></Button>
    //       <Button><a href="https://iith.ac.in/">IITH</a></Button>
    //     </ul>
    //   </nav>
    // </header>
    <nav className={classes.menucontainer}>
    <input type="checkbox" aria-label="Toggle menu" />
    <span></span>
    <span></span>
    <span></span>
  
    
    <div className={classes.menulogo}>
      <img src={HYDlogo} alt="My Awesome Website"/>
    </div>
  
   
    <div className={classes.menu}>
      <ul>
      </ul>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default MainNavigation;