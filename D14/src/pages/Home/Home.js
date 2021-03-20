import React, { Component } from 'react';
import Header from 'components/Header/Header'
import Banner from 'components/Banner/Banner';
import Skill from 'components/Skill/Skill';
import Project from 'components/Project/Project';
import Footer from 'components/Footer/Footer';
import './Home.scss';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <Header />
                <Banner />
                <Skill />
                <Project />
                <Footer />
            </>
         );
    }
}
 
export default Home;