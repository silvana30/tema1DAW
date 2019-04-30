import * as React from "react";

import {Button, Form, FormGroup} from "reactstrap";
import Navbar from "./Navbar";
import Cookies from "universal-cookie";
// import "./Login.css";
import {Multiselect} from "multiselect-dropdown-react";

const data = [{
    name: 'Cancer',
    value: 'Cancer'
},
    {
        name: 'Autism',
        value: 'Autism'
    },
    {
        name: 'Hemophilia',
        value: 'Hemophilia'
    },
    {
        name: 'Diabetes',
        value: 'Diabetes'
    },
    {
        name: 'Mental Disorder',
        value: 'Mental Disorder'
    }];

export default class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            currentPage: 'profile',
            brand: 'ReactStrap',
            loggedUser: {},
            details: {},
            image: "",
            name: "",
            disease: ""
        };

        this.getLoggedUser = this.getLoggedUser.bind(this);
        this.handleReq = this.handleReq.bind(this);
        this.handleReqDetails = this.handleReqDetails.bind(this);
        this.getLoggeduserDetails = this.getLoggeduserDetails.bind(this);
        this.getLoggedUser();
        this.changeName = this.changeName.bind(this);
        this.readfile = this.readfile.bind(this);
        this.chooseDiseases = this.chooseDiseases.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }

    handleChange = (page) => {
        this.setState({
            currentPage: page,
            brand: 'ReactStrap'
        });
    };

    handleReq(response) {
        console.log(response);
        this.setState({loggedUser: response.data});
        console.log("starea curenta: ", this.state);
        this.getLoggeduserDetails(response.data.id);
    }

    handleReqDetails(response) {
        console.log(response);
        this.setState({details: response.data});


        console.log(this.state);
    }


    // handleSubmit = event => {
    //     event.preventDefault();
    //     console.log("register");
    //     const axios = require('axios');
    //
    //     axios.post('http://localhost/larapi-master/public/users', {
    //         email: this.state.email,
    //         password: this.state.password,
    //         role:'user'
    //     })
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    getLoggedUser() {

        const axios = require('axios');
        const cookies = new Cookies();
        var token = cookies.get('token');
        axios.get('http://localhost/larapi-master/public/loggedUser', {headers: {Authorization: `Bearer ${token}`}})
            .then(this.handleReq)
            .catch(function (error) {
                console.log(error);
            });

    }

    getLoggeduserDetails(id) {
        console.log("caut detalii pt userul cu id:::", id);
        const axios = require('axios');
        const cookies = new Cookies();
        var token = cookies.get('token');
        axios.put('http://localhost/larapi-master/public/userDetails', {
            id: id
        }, {headers: {Authorization: `Bearer ${token}`}})
            .then(this.handleReqDetails)
            .catch(function (error) {
                console.log(error);
            });


    }

    readfile = e => {
        var file = e.target.files[0];
        var reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            var self = this;
            reader.onload = function (e) {
                console.log('DataURL:', e.target.result);
                var sendit = e.target.result;
                self.setState({image: sendit});

            };

        }
        console.log("fileeee ", reader);
    };

    chooseDiseases(diseases) {
        const disease = diseases[0];
        this.setState({
            disease: disease
        });
    }

    // changeName(e){
    //     this.setState({
    //         name: e
    //     });
    // }

    changeName = evt => {
        this.setState({
            name: evt.target.value
        });
    }

    saveChanges() {
        console.log("submit");
        const axios = require('axios');
        const cookies = new Cookies();
        var token = cookies.get('token');
        axios.post('http://localhost/larapi-master/public/userDetailsUpdate', {
            afectiune: this.state.disease,
            nume: this.state.name,
            imag_profil: this.state.image
        }, {headers: {Authorization: `Bearer ${token}`}})
            .then(function (response) {
                console.log("succes", response);
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
        var {brand, currentPage, loggedUser, details, name, image, disease} = this.state;
        console.log("detalii:  ", details);
        console.log("stateee=============", this.state);
        if (this.state.details.userDetails) {
            console.log("1111");
            return (
                <div>
                    <Navbar currentPage={currentPage} brand={brand} change={this.handleChange}/>
                    <div className="Profile">
                        <div id={"profile"}>
                            <img src={details.userDetails.imag_profil} id={"avatar"} alt={"missing img"}/>
                            <p><b>{details.userDetails.nume}</b></p>

                            <p>{loggedUser.email}</p>
                            <p>Disease: {details.userDetails.afectiune}</p><br/>
                            <p>Change name:</p>
                            <input type={"text"} placeholder={details.userDetails.nume}
                                   onChange={this.changeName}/><br/>
                            <p>Change disease:<Multiselect options={data}
                                                           onSelectOptions={this.chooseDiseases}>></Multiselect></p>
                            <br/>
                            <label htmlFor="files" className={"btn btn-primary"}>Change profile picture</label>
                            <input type={"file"} id={"files"} onChange={this.readfile}/>


                            <button onClick={this.saveChanges}>Save changes</button>
                        </div>
                    </div>
                </div>
            );
        } else {
            console.log("222");
            return (<div>Please, log in</div>);
        }
    }
}
