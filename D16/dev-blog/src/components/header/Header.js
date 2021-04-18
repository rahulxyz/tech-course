import React from "react";
import './Header.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const Header = (props) => {

    const getActionButtons = ()=>{
        if(!props.isAuth) return null;

        const btn = (props.location.pathname.includes("/home")) ? 
        <button onClick={()=>props.toggleAdd(true)}>Add</button> 
        : null;

        return btn;
    }
    
    return (
        <div className="header-wrapper">
            <div className="container">
                <div className="header-content">
                    <div className="logo">DevBlog</div>
                    <ul className="nav-list">
                        {getActionButtons()}
                        <li >About Us</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state)=>{
    return {
        isAuth: state.isAuth
    }
}

export default connect(mapStateToProps, null)(withRouter(Header));
