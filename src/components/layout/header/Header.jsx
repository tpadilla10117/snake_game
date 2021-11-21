import React, { useState } from 'react';
import { Navbar, Sidebar } from '../../utils';
import "./Header.scss";

/* Header Component is to contain the navigation components: */

    const Header = (props) => {

        const [isOpen, setIsOpen] = useState(false);

        const navToggle = () => {
            setIsOpen(!isOpen);
        };


        return (
            <div className="header-wrapper">
                {/* <header className="header"> */}
                   
                    <Navbar isOpen={isOpen} navToggle={navToggle} />
                    <Sidebar isOpen={isOpen} navToggle={navToggle} />

                {/* </header> */}
            </div>
        );
    };

    export default Header;