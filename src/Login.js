import * as React from "react";

import {Button, Form, FormGroup} from "reactstrap";
import Navbar from "./Navbar";
import Cookies from 'universal-cookie';
import {withRouter} from "react-router-dom";
import { browserHistory } from 'react-router';

// import "./Login.css";
class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            currentPage: 'login',
            brand: 'ReactStrap',
            logged: false
        };


        this.handleSubmitResponse=this.handleSubmitResponse.bind(this);
    }


    // validateForm() {
    //     return this.state.email.length > 0 && this.state.password.length > 0;
    // }
    //
    // handleChange = event => {
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     });
    // }

    redirect() {

    }

    handleSubmitResponse=function (response) {
            console.log(response);
            const cookies = new Cookies();
            cookies.set('token', response.data.access_token);
            this.setState({logged:true});
            this.props.history.push(
                {
                    pathname: "/profile"
                }
            )


        };
    handleSubmit = event => {
        event.preventDefault();
        const axios = require('axios');

        axios.post('http://localhost/larapi-master/public/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then(
                this.handleSubmitResponse

            //     function (response) {
            //     console.log(response);
            //     const cookies = new Cookies();
            //     cookies.set('token', response.data.access_token);
            //     this.setState({logged:true});
            //     this.props.history.push(
            //         {
            //             pathname: "/medici"
            //         }
            //     )
            //
            //
            // }
            )
            .catch(function (error) {
                console.log(error);
            });
    }

    handleChange = (page) => {
        this.setState({
            currentPage: page,
            brand: 'ReactStrap'
        });
    };

    handleEmailChange = e => {
        this.setState({email: e.target.value});
    };
    handlePasswordChange = e => {
        this.setState({password: e.target.value});
    };

    render() {
        var {brand, currentPage} = this.state
        return (
            <div>
                <Navbar currentPage={currentPage} brand={brand} logged={this.state.logged} change={this.handleChange}/>
                <div className="Login">
                    <Form id="form" onSubmit={this.handleSubmit}>
                        <FormGroup id="email">
                            <p>Email</p>
                            <input

                                type="email"
                                // value={this.state.email}
                                onChange={this.handleEmailChange}
                            />
                        </FormGroup>
                        <FormGroup id="password">
                            <p>Password</p>
                            <input
                                // value={this.state.password}
                                onChange={this.handlePasswordChange}
                                type="password"
                            />
                        </FormGroup>
                        <Button

                            // disabled={!this.validateForm()}
                            type="submit"
                        >
                            Login
                        </Button>
                        <br/>
                        <a href={"http://localhost:3000/register"}>You don't have an account?</a>
                    </Form>
                </div>
            </div>
        );
    }
}

export default withRouter(Login)