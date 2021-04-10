import React, { Component } from "react";
import "./Login.css";
import {connect} from 'react-redux';
import operations from 'store/operations';
import actions from 'store/actions';

const LOGIN = "Login";
const REGISTER = "Register";

class Login extends Component {
    state = {
        visibleTab: LOGIN,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {visibleTab} = this.state;

        if(visibleTab === REGISTER){
            const registerData = {
                username: e.target[0].value,
                email: e.target[1].value,
                password: e.target[2].value,
            }
            this.handleRegister(registerData);
        }else if(visibleTab === LOGIN){
            const loginData = {
                email: e.target[0].value,
                password: e.target[1].value,
            }
            this.handleLogin(loginData);
        }
    };

    handleLogin = (loginData)=>{
        console.log(">>>login ", loginData);
    } 

    handleRegister = (registerData)=>{
        console.log(">>> register", registerData);
    } 

    selectTab = (tab) => {
        this.setState({ visibleTab: tab });
    };


    async componentDidMount(){
        // const {getApp} = operations;
        // const data = await getApp();

        const {getApp}= this.props;
        //getApp();

        //console.log(">>> mount ",data);
    }

    render() {
        const { visibleTab } = this.state;
        const loginTab = visibleTab === LOGIN ? "tablink tab-select" : "tablink";
        const registerTab = visibleTab === REGISTER ? "tablink tab-select" : "tablink";
        const {mydata}= this.props;
        console.log(">>> ", this.props);

        return (
            <section className="login-wrapper">
                <div className="container">
                    <div className="login-content">
                        <div className="tab">
                            <button className={loginTab} onClick={() => this.selectTab(LOGIN)}>
                                Login
                            </button>

                            <button className={registerTab} onClick={() => this.selectTab(REGISTER)}>
                                Register
                            </button>
                        </div>
                        {visibleTab === LOGIN ? (
                            <article id="login" className="tab-content">
                                <form onSubmit={this.handleSubmit}>
                                    <input type="text" placeholder="email" name="email" />

                                    <input type="password" placeholder="Password" name="password" />

                                    <button className="submit" type="submit">
                                        Login
                                    </button>

                                    <p className="terms">
                                        By clicking the button, you are agreeing to our <span className="highlight">Terms & Services</span>
                                    </p>
                                </form>
                            </article>
                        ) : (
                            <article id="register" className="tab-content">
                                <form onSubmit={this.handleSubmit}>
                                    <input type="text" placeholder="Username" name="username" />

                                    <input type="text" placeholder="Email" name="email" />
                                    <input type="password" placeholder="Password" name="password" />

                                    <button className="submit" type="submit">
                                        Register
                                    </button>

                                    <p className="terms">
                                        By clicking the button, you are agreeing to our <span className="highlight">Terms & Services</span>
                                    </p>
                                </form>
                            </article>
                        )}
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        mydata : state.data
    }
}

const mapDispatchToProps = {
    getApp: actions.app
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
