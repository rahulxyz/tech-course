import React, { Component } from 'react';
import {connect} from "react-redux";
import actions from "store/actions";
import {Link} from "react-router-dom";
import {formatDate} from "utils/helper";
import avatar from "assets/avatar.jpeg";
import laptop from "assets/laptop-mobile.jpeg";
import './BlogList.css';

class BlogList extends Component {
    
    componentDidMount(){
        this.props.getBlogList();
    }

    render() { 
        const {blogList} = this.props;
        return ( 
            <div className="bloglist-wrapper">
                <div className="container">
                    <ul className="bloglist-content">
                        {blogList.map((item, index)=>{
                            const {title, textPreview} = item;
                            let lastUpdatedAt = formatDate(item.lastUpdatedAt);


                            return (
                                <Link to={`/article/${item._id}`}>
                                    <li key={item._id}>
                                        <div>

                                            <div className="description">
                                                <h2>{title}</h2>
                                                <p>{textPreview}</p>
                                            </div>

                                            <div className="author">
                                                <img src={avatar} alt="avatar"/>
                                                <div>
                                                    <h6>Alpit Anand</h6>
                                                    <p>{lastUpdatedAt}</p>
                                                </div>
                                            </div>

                                        </div>
                                        <img src={laptop} alt="article_img" height="300px"/>
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
            </div>
         );
    }
}

const mapStateToProps = (state)=>{
    return {
        blogList: state.blogList
    }
}

const mapDispatchToProps = {
    getBlogList: actions.getBlogList,
}

 
export default connect(mapStateToProps,mapDispatchToProps)(BlogList);