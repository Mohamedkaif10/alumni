import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';
import Button from '../assets/Button';
import Logohyd from "../Images/IITHY.jpeg"
import HYDlogo from '../Images/logohyderabad.png'
function MainNavigation() {
  return (
    <nav className={classes.menucontainer}>
  
    <input type="checkbox" aria-label="Toggle menu" />
    <span></span>
    <span></span>
    <span></span>
  

    <a href="#" className={classes.menulogo}>
      <img src="https://wweb.dev/resources/navigation-generator/logo-placeholder.png" alt="My Awesome Website"/>
    </a>
  
  
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
            Our Team
          </Link>
        </li>
        <li>
        <Button className={classes.butt}>
          <a href="https://iithaa.org/">
            IITHAA
          </a>
        </Button >
        </li>
        <li>
          <Button className={classes.butt}>
          <a href="https://giving.iith.ac.in/">
            Give 
          </a>
          </Button>
        </li>
        <li>
        <Button className={classes.butt}>
          <a href="https://iith.ac.in/">
           IITH
          </a>
          </Button>
        </li>
      </ul>
    </div>
  </nav>
  )}
export default MainNavigation;