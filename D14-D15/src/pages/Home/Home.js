import React, { Component } from 'react';
import Header from 'components/Header/Header'
import Skill from 'components/Skill/Skill';
import Project from 'components/Project/Project';
import Footer from 'components/Footer/Footer';
import './Home.scss';
import AboutMe from 'components/AboutMe/AboutMe';
import Education from 'components/Education/Education';
import BannerTop from 'components/BannerTop/BannerTop';


class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <Header />
                <BannerTop />
                <AboutMe />
                <Project />
                <Education />
                <Skill />
                <Footer />
            </>
         );
    }
}
 
export default Home;