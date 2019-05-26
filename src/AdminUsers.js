import * as React from "react";

import AdminNavbar from "./AdminNavbar";
import AdminItem from "./AdminItem";
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
import {withRouter} from "react-router-dom";
import t from "./locale";
import Cookies from "universal-cookie";


class AdminUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'adminUsers',
            brand: 'ReactStrap',
            users: []
        }
        ;


        this.handleReq = this.handleReq.bind(this);
        this.getUsers();

    };

    handleChange = (page) => {
        this.setState({
            currentPage: page,
            brand: 'ReactStrap'
        });
    };

    handleReq(response) {
        console.log("responseeee", response.data);
        this.setState({users: response.data});
        console.log("current state ", this.state);
    }


    getUsers() {
        const axios = require('axios');

        axios.get('http://localhost:3001/users')
            .then(this.handleReq)
            .catch(function (error) {
                console.log(error);
            });

    }

    delete(id) {

        console.log("idddd", id);
        const axios = require('axios');
        const cookies = new Cookies();
        var token = cookies.get('token');
        axios.delete('http://localhost:3001/users/' + id, {headers: {Authorization: `Bearer ${token}`}})
            .then(function (response) {
                    console.log(response)
                    window.location.reload();
                }
            )
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
        var {brand, currentPage, users} = this.state;

        console.log("users", JSON.stringify(this.state.users));
        if (this.state.users) {
            console.log("1111");
            return (
                <div class={"doctors"}>
                    <AdminNavbar currentPage={currentPage} brand={brand} change={this.handleChange}/>
                    <div className={"med-units"} id={"hospitals"}>
                        {console.log("==========", this.state.users)}

                        {this.state.users.map((element, index) => {
                                if (element.role === "user") {
                                    return (<div>

                                            <Card className="user-box" id={"card-h"}>
                                                <div>
                                                    <CardBody>
                                                        <CardTitle><b>{element.email}</b></CardTitle>
                                                        <Button id="btn-details"
                                                                onClick={() => this.delete(element.id)}>Delete</Button>

                                                    </CardBody>
                                                </div>
                                            </Card>
                                        </div>
                                    );
                                }
                            }
                        )}
                    </div>
                </div>
            )
        } else {
            console.log("222");
            return (<div><p>Loading data</p>

            </div>);
        }
    }
}


export default withRouter(AdminUsers);