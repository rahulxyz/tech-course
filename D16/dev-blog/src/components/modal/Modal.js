import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "./Modal.css";

class Modal extends Component {
    state = {
        title: "",
        description: "",
        author: "",
    };

    componentDidMount(){
        const {title, text} = this.props.article;
        if(title){
            this.setState({
                title: title,
                description: text,
            })
        }        
    }

    handleSubmit = (e) => {
        e.preventDefault();
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleSave = () => {
        const { toggleAdd, handleSave } = this.props;
        const {title, description} = this.state;

        const formData = {
            title: title,
            text: description,
            tags: []
        }
        handleSave(formData);
        toggleAdd(false);
    };

    render() {
        const { title, description, author } = this.state;
        const { toggleAdd } = this.props;
        const submit = "Save";
        const formTitle = "+New Blog" ;

        return (
            <div className="modal-wrapper">
                <div className="container">
                    <div className="modal-content">
                        <form onSubmit={this.handleSubmit}>
                            <p className="title">{formTitle}</p>
                            <input onChange={this.handleChange} value={title} name="title" type="text" placeholder="Title" />
                            <input onChange={this.handleChange} value={description} name="description" type="text" placeholder="Description" />
                            <input onChange={this.handleChange} value={author} name="author" type="text" placeholder="Author" />
                            <div className="modal-btn">
                                <button onClick={() => toggleAdd(false)} className="cancel">
                                    Cancel
                                </button>
                                <button onClick={this.handleSave} className="save">
                                    {submit}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        article: state.article,
    };
};

export default connect(mapStateToProps, null)(withRouter(Modal));
