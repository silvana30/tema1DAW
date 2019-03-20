import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import CardColumns from "reactstrap/es/CardColumns";
import t from './locale';

const Medic = (props) => {

    return <div>

        <Card id="hospital-box">
            <div className={"img-card"}>
            <CardImg top width="100%" src={props.pozaProfil} alt="Card image cap" />
            </div>
            <CardBody>
                <CardTitle><b>{props.nume}</b></CardTitle>
                <CardSubtitle className={"card-subtitle"}>{t(props.specializare)}</CardSubtitle>
                <CardText>{t("anAbsolvire")}: {props.anAbsolvire}</CardText>
            </CardBody>
        </Card>
    </div>
};

export default Medic