import React from 'react';
import '../App.css';
import logo from '../assets/image/logo.png';

import {
    Link
  } from "react-router-dom";

function Navbar(){
    return(
        <>
        <div className="navbar_header">
            <div className="row">
                <div className="col-md-6">
                    <img src={logo} alt="image" width="140px" height="65px"  />
                </div>
                <div className="col-md-6 menu_list">
                    <Link to="">home</Link>
                    <Link to="/about">about</Link>
                    <Link to="/service">services</Link>
                    <Link to="/contact">contact</Link>
                </div>
            </div>
        </div>
        <div className="test">     
        </div>
    </>
    )

}

export default Navbar; 