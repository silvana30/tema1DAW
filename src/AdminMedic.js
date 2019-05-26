import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {Redirect, withRouter} from "react-router-dom";
import t from './locale';
import Cookies from "universal-cookie";
import SeeComments from "./SeeComments";

class AdminMedic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {doctors: {}}

        this.handleReq = this.handleReq.bind(this);
        // this.showDetails = this.showDetails.bind(this);

    }

    // static contextTypes = {
    //     router: React.PropTypes.object
    // }
    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    handleReq(response) {
        this.setState({doctors: response.data.doctor});
        console.log("==================", this.state);
        console.log("success", response);
        this.someFunc();
    }

    someFunc() {
        console.log("state ", this.state);
        this.props.history.push({ //browserHistory.push should also work here
            pathname: "/detalii",
            medici: this.state.doctors
        });
    }

    update(id) {

        this.props.history.push(
            {
                pathname: "/addDoctor",
                id:id
            }
        )

    }
    delete(id) {

        console.log("idddd", id);
        const axios = require('axios');
        const cookies = new Cookies();
        var token = cookies.get('token');
        axios.delete('http://localhost:3001/doctors/'+id,{headers: {Authorization: `Bearer ${token}`}})
            .then(function (response){
                    console.log(response);
                window.location.reload();
                }
            )
            .catch(function (error) {
                console.log(error);
            });



    }
    seeComments(id){
        this.props.history.push(
            {
                pathname: "/seeComments",
                id:id
            }
        )

    }

    render() {

        return <div>

            <Card className="hospital-box" id={"doc"}>
                <div className={"img-wrapper"}>
                    <CardImg top width="100%" src={this.props.pozaProfil} alt="Card image cap" />
                    <CardTitle className={"img-overlay"}><b>{this.props.nume}</b></CardTitle>
                </div>
                <CardBody>
                    <CardSubtitle className={"card-subtitle"}>{this.props.specializare}</CardSubtitle>
                    <CardText>{t("anAbsolvire")}: {this.props.anAbsolvire}</CardText>
                    <Button id="btn-details" onClick={() => this.update(this.props.id)}>Update</Button>
                    <Button id="btn-details" onClick={() => this.delete(this.props.id)}>Delete</Button>
                    <Button id="btn-details" onClick={() => this.seeComments(this.props.id)}>See Comments</Button>
                </CardBody>
            </Card>
        </div>

    }

}

export default withRouter(AdminMedic)