import * as React from "react";

import Cookies from "universal-cookie";
import AdminNavbar from "./AdminNavbar";
import Button from "reactstrap/es/Button";


export default class SeeComments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            details: {},
            currentPage: 'seeComments',
            brand: 'ReactStrap',
            loggedUser: {}
        };
        console.log("ce am pe propds" + JSON.stringify(this.props));
        var ceva = this.props.location.id;
        console.log("am primit " + ceva);
        ;


        this.handleReq = this.handleReq.bind(this);
        this.handleReqDetails = this.handleReqDetails.bind(this);
        this.getComments();
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleChange = (page) => {
        this.setState({
            currentPage: page,
            brand: 'ReactStrap'
        });

        console.log("ce am pe propds doctor====" + this.props);
    };

    handleReq(response) {
        console.log(response);
        this.setState({comments: response.data});
        console.log("starea curenta: ", this.state);
        const comments = this.state.comments.map((elem) => {
            console.log("elem", elem);
            return (
                <tr>
                    <td scope="row">{elem.content}</td>
                    <td>{elem.rating}</td>

                    <td><Button onClick={() => this.delete(elem.id)}>Remove</Button></td>
                </tr>
            )
        });
        this.setState({commTableRows: comments})


    }

    handleReqDetails(response) {
        console.log(response);
        this.setState({details: response.data});


        console.log(this.state);
    }


    getComments() {

        const axios = require('axios');
        const cookies = new Cookies();
        var token = cookies.get('token');
        axios.get('http://localhost:3001/comments/' + this.props.location.id, {headers: {Authorization: `Bearer ${token}`}})
            .then(this.handleReq)
            .catch(function (error) {
                console.log(error);
            });

    }


    delete(id) {
        console.log("sterg mesaju cu id===" + id);
        const axios = require('axios');
        const cookies = new Cookies();
        var token = cookies.get('token');
        axios.delete('http://localhost:3001/comments/' + id, {headers: {Authorization: `Bearer ${token}`}})
            .then(this.handleRemove
            )
            .catch(function (error) {
                console.log(error);
            });


    }

    handleRemove() {
        alert("Removed.");
        this.props.history.push(
            {
                pathname: "/adminDoctors"
            }
        )
    }


    render() {
        var {brand, currentPage, loggedUser, details, name, image, disease} = this.state;
        console.log("detalii:  ", details);
        console.log("stateee=============", this.state);
        // if (this.state.details.userDetails) {
        //     console.log("1111");
        return (
            <div>
                <AdminNavbar currentPage={currentPage} brand={brand} change={this.handleChange}/>
                <div className="Profile">
                    <table className="table" id={"grades-table"}>
                        <thead>
                        <tr>
                            <th scope="col">Comment</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Remove comment</th>
                        </tr>
                        </thead>
                        <tbody>
                    {this.state.commTableRows}
                        </tbody></table>
                </div>
            </div>
        );
        // } else {
        //     console.log("222");
        //     return (<div>Please, log in</div>);
        // }
    }
}
