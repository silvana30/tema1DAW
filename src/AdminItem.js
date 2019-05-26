import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {Redirect, withRouter} from "react-router-dom";
import t from './locale';
import Cookies from "universal-cookie";

class AdminItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {doctors: {}}
        this.handleReq = this.handleReq.bind(this);
        this.update = this.update.bind(this);

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
                pathname: "/addMedUnit",
                id:id
            }
        )
        // console.log("idddd", id);
        // const axios = require('axios');
        //
        //
        // axios.put('http://localhost:3001/medical_units/'+id, {
        //
        // })
        //     .then(this.handleReq
        //     )
        //     .catch(function (error) {
        //         console.log(error);
        //     });

    }

    delete(id) {

        console.log("idddd", id);
        const axios = require('axios');
        const cookies = new Cookies();
        var token = cookies.get('token');
        axios.delete('http://localhost:3001/medical_units/' + id, {headers: {Authorization: `Bearer ${token}`}})
            .then(function (response) {
                    console.log(response);
                window.location.reload();
                }
            )
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {


        return <div>

            <Card className="hospital-box" id={"card-h"}>
                <div className={"img-card"}>
                    <CardImg top width="100%" height="100%" src={this.props.sigla}
                             alt="Card image cap"/>
                </div>
                <div>
                    <CardBody>
                        <CardTitle><b>{this.props.nume}</b></CardTitle>
                        <CardSubtitle>{t(this.props.tip)}</CardSubtitle>
                        <CardText>{this.props.locatie}</CardText>
                        <Button id="btn-details" onClick={() => this.update(this.props.id)}>Update</Button>
                        <Button id="btn-details" onClick={() => this.delete(this.props.id)}>Delete</Button>

                    </CardBody>
                </div>
            </Card>

        </div>
    }

}

export default withRouter(AdminItem)