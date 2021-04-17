import React, { Component } from 'react';
import {connect} from "react-redux";
import actions from "store/actions";
import { formatDate } from 'utils/helper';
import laptop from 'assets/laptop-mobile.jpeg';
import './Article.css';

class Article extends Component {

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.getArticleById(id);
    }
    
    render() { 
        const {article} = this.props;
        const {title, text, lastUpdatedAt, tags} = article;
        const date = formatDate(lastUpdatedAt);
        return ( 
            <div className="article-wrapper">
                <div className="container">
                    <div className="article-content">

                        <img className="banner-img" src={laptop} alt="Article image" />

                        <div className="article-description">
                            <h2>{title}</h2>
                            <div className="article-author">
                                <p>Alpit Anand</p>
                                <p>{date}</p>
                            </div>
                            <p className="article-text">{text}</p>
                            <ul className="article-tags">
                                {tags?.map(tag=>(
                                    <li>{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        article: state.article
    }
}

const mapDispatchToProps = {
    getArticleById: actions.getArticleById,
}

 
export default connect(mapStateToProps,mapDispatchToProps)(Article);