import React from "react";
import './Header.css';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="container">
                <div className="header-content">
                    <div className="logo">DevBlog</div>
                    <ul className="nav-list">
                        <li >About Us</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
