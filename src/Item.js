import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import CardColumns from "reactstrap/es/CardColumns";
import {Redirect, withRouter} from "react-router-dom";
import Detalii from "./Detalii";
import t from './locale';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {doctors: {}}
        this.handleReq = this.handleReq.bind(this);
        this.showDetails = this.showDetails.bind(this);

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

    showDetails(id) {

        console.log("idddd", id);
        const axios = require('axios');


        axios.put('http://localhost/larapi-master/public/doctorss', {
            id: id
        })
            .then(this.handleReq
            )
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {


        return <div>

            <Card className="hospital-box" id={"card-h"}>
                <div className={"img-card"}>
                    <CardImg top width="100%" height="100%" src={"data:image/png;base64," + this.props.sigla}
                             alt="Card image cap"/>
                </div>
                <div>
                    <CardBody>
                        <CardTitle><b>{this.props.nume}</b></CardTitle>
                        <CardSubtitle>{t(this.props.tip)}</CardSubtitle>
                        <CardText>{this.props.locatie}</CardText>
                        <Button id="btn-details" onClick={() => this.showDetails(this.props.id)}>Detalii</Button>
                    </CardBody>
                </div>
            </Card>

        </div>
    }

}

export default withRouter(Item)