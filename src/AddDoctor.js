import * as React from "react";

import Cookies from "universal-cookie";
import AdminNavbar from "./AdminNavbar";


export default class AddDoctor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            details: {},
            currentPage: 'addDoctor',
            brand: 'ReactStrap',
            loggedUser: {},
            an_absolvire: "",
            poza_profil: "",
            nume: "",
            specializare: ""
        };
        console.log("ce am pe propds"+JSON.stringify(this.props));
        var ceva = this.props.location.id;
        console.log("am primit "+ceva);;


        // this.getLoggedUser = this.getLoggedUser.bind(this);
        this.handleReq = this.handleReq.bind(this);
        this.handleReqDetails = this.handleReqDetails.bind(this);
        // this.getLoggeduserDetails = this.getLoggeduserDetails.bind(this);
        // this.getLoggedUser();
        this.changeName = this.changeName.bind(this);
        this.readfile = this.readfile.bind(this);
        // this.chooseDiseases = this.chooseDiseases.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.redirect=this.redirect.bind(this);
    }

    handleChange = (page) => {
        this.setState({
            currentPage: page,
            brand: 'ReactStrap'
        });

        console.log("ce am pe propds doctor===="+this.props);
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

    // getLoggedUser() {
    //
    //     const axios = require('axios');
    //     const cookies = new Cookies();
    //     var token = cookies.get('token');
    //     axios.get('http://localhost/larapi-master/public/loggedUser', {headers: {Authorization: `Bearer ${token}`}})
    //         .then(this.handleReq)
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    //
    // }

    // getLoggeduserDetails(id) {
    //     console.log("caut detalii pt userul cu id:::", id);
    //     const axios = require('axios');
    //     const cookies = new Cookies();
    //     var token = cookies.get('token');
    //     axios.put('http://localhost/larapi-master/public/userDetails', {
    //         id: id
    //     }, {headers: {Authorization: `Bearer ${token}`}})
    //         .then(this.handleReqDetails)
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    //
    //
    // }

    readfile = e => {
        var file = e.target.files[0];
        var reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            var self = this;
            reader.onload = function (e) {
                console.log('DataURL:', e.target.result);
                var sendit = e.target.result;
                self.setState({poza_profil: sendit});

            };

        }
        console.log("fileeee ", reader);
    };

    // chooseDiseases(diseases) {
    //     const disease = diseases[0];
    //     this.setState({
    //         disease: disease
    //     });
    // }

    // changeName(e){
    //     this.setState({
    //         name: e
    //     });
    // }

    changeName = evt => {
        this.setState({
            nume: evt.target.value
        });
    };
    addSpecialization = evt => {
        this.setState({
            specializare: evt.target.value
        });
    };

    addGraduateYear = evt => {
        this.setState({
            an_absolvire: evt.target.value
        });
    };


    saveChanges() {
        console.log("submit");
        const axios = require('axios');
        const cookies = new Cookies();
        var token = cookies.get('token');

        if(this.props.location.id!=null){
            axios.put('http://localhost:3001/doctors/'+this.props.location.id, {
                specializare: this.state.specializare,
                an_absolvire: this.state.an_absolvire,
                nume: this.state.nume,
                poza_profil: this.state.poza_profil
            }, {headers: {Authorization: `Bearer ${token}`}})
                .then(function (response) {
                    console.log("succes", response);
                    // window.location.reload();
                    var s=this;
                    s.redirect();
                })
                .catch(function (error) {
                    console.log(error);
                });
        }else {
            axios.post('http://localhost:3001/doctors', {
                specializare: this.state.specializare,
                an_absolvire: this.state.an_absolvire,
                nume: this.state.nume,
                poza_profil: this.state.poza_profil
            })
                .then(function (response) {
                    console.log("succes", response);
                    // window.location.reload();
                    var s=this;
                    s.redirect();
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    redirect(){
        this.props.history.push(
            {
                pathname: "/addMedUnit"
            }
        )
    }
    render() {
        var {brand, currentPage, details} = this.state;
        console.log("detalii:  ", details);
        console.log("stateee=============", this.state);
        // if (this.state.details.userDetails) {
        //     console.log("1111");
        return (
            <div>
                <AdminNavbar currentPage={currentPage} brand={brand} change={this.handleChange}/>
                <div className="Profile">
                    <div id={"profile"}>
                        <img src={this.state.poza_profil} id={"avatar"} alt={"missing img"}/>

                        <input type={"text"} placeholder="name"
                               onChange={this.changeName}/><br/>
                        <input type={"text"} placeholder="an absolvire"
                               onChange={this.addGraduateYear}/><br/>
                        <input type={"text"} placeholder="specializare"
                               onChange={this.addSpecialization}/><br/>
                        <br/>
                        <label htmlFor="files" className={"btn btn-primary"}>Add profile picture</label>
                        <input type={"file"} id={"files"} onChange={this.readfile}/>


                        <button onClick={this.saveChanges}>Save changes</button>
                    </div>
                </div>
            </div>
        );
        // } else {
        //     console.log("222");
        //     return (<div>Please, log in</div>);
        // }
    }
}
