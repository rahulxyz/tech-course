import React, { Component } from 'react';
import Banner from 'components/banner/Banner';
import BlogList from 'components/blogList/BlogList';
import Modal from 'components/modal/Modal';
import { connect } from 'react-redux';
import actions from 'store/actions';

class Home extends Component {

    handleSave= (formData)=>{
        const {addBlog} = this.props;
        addBlog(formData);
    }

    render() { 
        const {addModal, toggleAdd} = this.props;

        return (
            <div className="home-wrapper">
                {addModal && <Modal toggleAdd={toggleAdd} handleSave={this.handleSave}/>}
                <div className="home-content">
                    <Banner />
                    <BlogList />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addBlog: actions.addBlog
}
 
export default connect(null, mapDispatchToProps)(Home);