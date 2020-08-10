import React from 'react'
import "./HeaderStyle.scss"
import logo from "./images/logo.png"
import RuFlag from "./images/flag-russia.svg"
import EstFlag from "./images/flag-estonia.svg"
import LatFlag from "./images/flag-latvia.svg"
import Wrapper from "../../components/Wrapper/Wrapper";
import Logo from "./componets/Logo/Logo";
import Flag from "./componets/Flag/Flag";

export default function Header (){
    return(
        <div className="header">
            <Wrapper>
                <div className="contain">
                    <Logo
                    />

                    <div className="tel-flag">
                        <div>
                            <p className="tel"><a href="tel:+37129886443">+37129886443</a></p>
                        </div>
                        <div className="flags">
                             <Flag src={RuFlag}
                                  alt={"RuFlag"}
                                  active={true}
                            />
                            <Flag src={EstFlag}
                                  alt={"EstFlag"}
                            />
                            <Flag src={LatFlag}
                                  alt={"LatFlag"}

                            />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}