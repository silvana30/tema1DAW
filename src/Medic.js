import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import CardColumns from "reactstrap/es/CardColumns";
const Medic = (props) => {

    return <div>

        <Card id="hospital-box">
            <div className={"img-card"}>
            <CardImg top width="100%" src={props.pozaProfil} alt="Card image cap" />
            </div>
            <CardBody>
                <CardTitle><b>{props.nume}</b></CardTitle>
                <CardSubtitle className={"card-subtitle"}>{props.specializare}</CardSubtitle>
                <CardText>Anul absolvirii: {props.anAbsolvire}</CardText>
                <Button class="btn-details">Detalii</Button>
            </CardBody>
        </Card>
    </div>
};

export default Medic