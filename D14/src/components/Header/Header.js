import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="navbar">
                <div className="container">
                    <div className="content">
                        <div className="logo">Logo</div>
                        <ul className="nav-list">
                            <li><a href="#aboutMe">About Me</a></li>
                            <li><a href="#project">Projects</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#skills">Skills</a></li>
                        </ul>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Header;