import React from "react"
import "./NavBar.css"
import logo from "./images/logo.png"
import Shop from "./Shop"

const NavigationBar = () => {
    return (
        <nav className="NavClass">
            <ul className="NavBarUl"> 
                <a href="#Logo">
                    <img src={logo} alt="logo" height="97" width="115" />
                </a>
                <li>
                    <a href="#Inicio" className="link">HOME</a>
                </li>
                <li>
                    <a href="#Servicios" className="link">SERVICIOS</a>
                </li>
                <li>
                    <a href="#Servicios" className="link">TURNOS</a>
                </li>
                <li>
                <a href="#Servicios" className="link">TIENDA</a>
                </li>
                <li>
                    <Shop />
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
