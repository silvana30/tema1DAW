import * as React from "react";

import {Button, Form, FormGroup} from "reactstrap";
import Navbar from "./Navbar";
// import "./Login.css";
export default class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            currentPage: 'register',
            brand: 'ReactStrap'
        };
    }

    handleChange = (page) => {
        this.setState({
            currentPage: page,
            brand: 'ReactStrap'
        });
    };
    // validateForm() {
    //     return this.state.email.length > 0 && this.state.password.length > 0;
    // }
    //
    // handleChangeInput = event => {
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     });
    // }
    handleEmailChange = e => {
        this.setState({email: e.target.value});
    };
    handlePasswordChange = e => {
        this.setState({password: e.target.value});
    };

    createUserDetails=function (response) {
        const axios = require('axios');
        console.log(response.data.id);
        axios.post('http://localhost/larapi-master/public/userDetails', {
            nume: "user",
            afectiune: 'diabet',
            id:response.data.id
        })
            .then(function (response) {
                console.log(response);

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log("register");
        const axios = require('axios');

        axios.post('http://localhost/larapi-master/public/users', {
            email: this.state.email,
            password: this.state.password,
            role: 'user'
        })
            .then(
                this.createUserDetails
            )
            .catch(function (error) {
                console.log(error);
            });

        this.props.history.push(
            {
                pathname: "/login"
            }
        )
    }

    render() {
        var {brand, currentPage} = this.state;
        return (
            <div>
                <Navbar currentPage={currentPage} brand={brand} change={this.handleChange}/>
                <div className="Register">
                    <Form id="form" onSubmit={this.handleSubmit}>
                        <FormGroup id="email">
                            <p>Email</p>
                            <input
                                autoFocus
                                type="email"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                            />
                        </FormGroup>
                        <FormGroup id="password">
                            <p>Password</p>
                            <input
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                type="password"

                            />
                        </FormGroup>
                        <Button

                            // disabled={!this.validateForm()}
                            type="submit"
                        >
                            Register
                        </Button>
                        <br/>
                    </Form>
                </div>
            </div>
        );
    }
}
