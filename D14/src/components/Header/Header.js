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
                            <li>Skills</li>
                            <li>About Me</li>
                            <li>Projects</li>
                            <li>Education</li>
                        </ul>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Header;