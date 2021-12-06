import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkedAlt, faTh, faSearch} from "@fortawesome/free-solid-svg-icons"
import logo from "../../assets/img/png/logo.png";

//ESTILOS
import "./Header.css";

export default function Header(){

    let ruta = window.location.pathname;
    console.log(ruta);

    let class1 = "nav-page";
    let class2 = "nav-page";
    let class3 = "nav-page";

    if(ruta === "/" ){
        class1 = "nav-page active";
        class2 = "nav-page";
    }
    if(ruta === "/sitios"){
        class1 = "nav-page" 
        class2 = "nav-page active"
    }
    

    return(
        <header>
            
          <nav>
              <div className="location">
              <FontAwesomeIcon className="iconLocation" icon={faMapMarkedAlt}/>
              </div>
              <div className="navigation" style={{marginTop:"10px", color:"white"}}>
              <a href="/"><div className={class1}>Home</div></a>
              <a href="/sitios">  <div className={class2}>Sitios</div></a>
              </div>
              <div className="search">
                  <div className="container__search">
                     <img src={logo} alt="logo" />
                  </div>
              </div>
          </nav>
        </header>
    );
}