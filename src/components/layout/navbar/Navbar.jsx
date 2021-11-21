import React, {useState, useEffect} from 'react';
import './Navbar.scss';

import NavIcon from '../../../assets/icons/navIcon.svg';
import Placeholder from '../../../assets/icons/placeholder.png';
import { Link } from 'react-router-dom';
import { NavbarData } from '../../../utils/seed';

const Navbar = (props) => {

   const { navToggle } = props;
   const [scrollNav, setScrollNav] = useState(false);
   const [ navLinkState, changeNavLinkState ] = useState(NavbarData);

/* TODO: This is going to be for when you click on the hamburger icon */
    return (
        <nav className="navbar">
            <div className="nav-items-container">

            {/* Logo: */}


            {NavbarData.map( (item, index) => {
                                return (
                                    <Link to={item.path} className="main-nav-item" style={ {textDecoration: "none"} } key={index}>
                                        <li key={index} className={item.title}>
                                            <span>{item.title}</span>
                                        </li>
                                    </Link>
                                )
                            })}
            </div>
            <div className="mobile-icon-container">
                <img className="mobile-icon" src={NavIcon} alt="" onClick={navToggle}/>
            </div>
            
            {/* <img className="nav-logo" src={Placeholder} alt="" /> */}
                        

        </nav>
    );
};

export default Navbar;