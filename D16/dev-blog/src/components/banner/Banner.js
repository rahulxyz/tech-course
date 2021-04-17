import React from 'react';
import face from "assets/face.png";
import bannerCode from "assets/blog-banner.jpeg";
import patternLeft from 'assets/pattern-left.svg';
import patternRight from 'assets/pattern-right.svg';
import './Banner.css';

const Banner = () => {
    return ( 
        <>
        <div className="banner-wrapper">
            <img src={patternLeft} alt="landing-img"/>
            <img src={patternRight} alt="landing-img"/> 

            <div className="banner-content">
                <div className="container">
                    <div className="description">
                        <img src={face} alt="banner-img"/>
                        <h1> Dev Mentor</h1>
                        <p>
                            Improve your developer skills by building real projects
                        </p>
                        <div className="social-icons">
                            <i class="fa fa-twitter"></i>
                            <i class="fa fa-facebook"></i>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="banner-footer">
            <div className="container">
                <img src={bannerCode} alt="bannerImg" />
            </div>
        </div>
        </>
    );
}
 
export default Banner;