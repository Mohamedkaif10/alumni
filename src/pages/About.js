import { Fragment } from "react"
import Card from "../assets/Card"
import dean from "../Images/dean_ar.jpg"
import neha from "../Images/neha.jpg"
import padma from "../Images/padma.jpg"
import subramani from "../Images/subramaniyam.jpg"
import classes from "./About.module.css"
import chittara from "../Images/Chittaranjan.jpg"
import headimg from "../Images/OURTEAM.png"
const About=()=>{
     return(
        <div style={{backgroundColor:'#f2e6c2'}}>
            <div className={classes.pic}>
                   <img src={headimg}></img>
            </div>
            <div className={classes.heading}>
                <p>Office of Alumni Relations</p>
            </div>
            <Card className={classes.c1}>
                <img src={dean}></img>
                <div className={classes.container}>
                    <h4><b>Dr. Mudrika Khandelwal</b></h4> 
                    <p>Dean, Alumni Relations</p> 
                </div>
            </Card>
            <Card className={classes.c2}>
                <img src={neha}></img>
                <div className={classes.container}>
                    <h4><b>Mrs. Neha Vaidya</b></h4> 
                    <p>Manager, Alumni Relations and Development Office</p> 
                </div>
            </Card>
            <Card className={classes.c3}>
                <img src={subramani}></img>
                <div className={classes.container}>
                    <h4><b>Mr. Subramanian</b></h4> 
                    <p>Consultant, Alumni Relations and Development Office</p> 
                </div>
            </Card>
            <Card className={classes.c4}>
                <img src={padma}></img>
                <div className={classes.container}>
                    <h4><b>Mrs. Padma G</b></h4> 
                    <p>Office, Alumni Relations</p> 
                </div>
            </Card>
            <Card className={classes.c5}>
                <img src={chittara}></img>
                <div className={classes.container}>
                    <h4><b>Mr. Chittaranjan</b></h4> 
                    <p>MSA, Alumni Relations</p> 
                </div>
            </Card>
            <div className={classes.sac}>
                <h1>Student Alumni Cell (SAC)</h1>
            </div>
            <div className={classes.saccard}>
                <h6>Arun Siddardha</h6>
                <p>Student (B.Tech, Artificial Intelligence)</p>
                <p>Alumni Secretary</p>
                <p>Students' Gymkhana (IITH) 2023-2024</p>
                <p>alumni.secretary@gymkhana.iith.ac.in</p>
            </div>
        </div>
     )
}
export default About