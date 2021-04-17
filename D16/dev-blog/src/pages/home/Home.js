import React, { Component } from 'react';
import Banner from 'components/banner/Banner';
import BlogList from 'components/blogList/BlogList';

class Home extends Component {
    render() { 
        return (
            <div className="home-wrapper">
                <div className="home-content">
                    <Banner />
                    <BlogList />
                </div>
            </div>
        );
    }
}
 
export default Home;