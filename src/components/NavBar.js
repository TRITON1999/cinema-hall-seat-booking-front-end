import React, {useState} from "react";
import "./NavBar.css";

const NavBar = ()=>{
    const [classes1,setClass1]=useState([])
    const [classes2,setClass2]=useState([])
    return <div className="NavBar">
        <nav class="navbar navbar-light justify-content-between">
            <div className="navTitle"><i class="fa-solid fa-chevron-left fa-2x"></i><div><h1>Avenger</h1><p>Cinepolis: Nexus Shantiniketan, Bangaluru | Today, 12 sep, 06:55</p></div></div>
            <div className="navTicket"><div> 
            <select id="select">
                <option value={1}>1 Ticket</option>
                <option value={2}>2 Ticket</option>
                <option value={3}>3 Ticket</option>
                <option value={4}>4 Ticket</option>
                <option value={5}>5 Ticket</option>
                <option value={6}>6 Ticket</option>
                <option value={7}>7 Ticket</option>
            </select>
            <i class="fa-solid fa-pen"></i></div> <i class="fa-solid fa-xmark fa-2x"></i></div>
        </nav>
        <div className="timing"><button className={classes1} onClick={()=>{if(classes1.length===0){setClass1(["green"]); setClass2([]) }}}><p>06:55 PM</p><p>iMAX</p></button><button className={classes2} onClick={()=>{if(classes2.length===0){setClass2(["green"]);setClass1([])}}}><p>10:25 PM</p><p>iMAX</p></button></div>
    </div>
}

export default NavBar;