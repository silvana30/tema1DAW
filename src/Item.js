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
    }

    // static contextTypes = {
    //     router: React.PropTypes.object
    // }
    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    showDetails(medici) {
        console.log(JSON.stringify(medici));
        this.props.history.push({ //browserHistory.push should also work here
            pathname: "/detalii",
            medici: medici
        });
    }

    render() {


        return <div>

            <Card id="hospital-box">
                <div className={"img-card"}>
                    <CardImg top width="100%" height="100%" src={this.props.sigla} alt="Card image cap"/>
                </div>
                <div>
                    <CardBody>
                        <CardTitle><b>{this.props.nume}</b></CardTitle>
                        <CardSubtitle>{t(this.props.tip)}</CardSubtitle>
                        <CardText>{this.props.locatie}</CardText>
                        <Button id="btn-details" onClick={() => this.showDetails(this.props.medici)}>Detalii</Button>
                    </CardBody>
                </div>
            </Card>

        </div>
    }

}

export default withRouter(Item)