import React from 'react'
import "./HeaderStyle.scss"
import logo from "./images/logo.png"
import RuFlag from "./images/flag-russia.svg"
import EstFlag from "./images/flag-estonia.svg"
import LatFlag from "./images/flag-latvia.svg"

export default function Header (){
    return(
        <div className="header">
            <div className="contain">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="tel-flag">
                    <div>
                        <p className="tel"><a href="tel:+37129886443">+37129886443</a></p>
                    </div>
                    <div className="flag">
                        <a href=""><img src={RuFlag} className="svg-flag-russia-dims active"
                                        alt="russia-flag"/></a>
                        <a href=""><img src={EstFlag} className="svg-flag-estonia-dims"
                                        alt="estonia-flag"/></a>
                        <a href=""><img src={LatFlag} className="svg-flag-latvia-dims"
                                        alt="latvia-flag"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}