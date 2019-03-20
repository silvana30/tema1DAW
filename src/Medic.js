import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import CardColumns from "reactstrap/es/CardColumns";
import t from './locale';

const Medic = (props) => {

    return <div>

        <Card className="hospital-box" id={"doc"}>
            <div className={"img-wrapper"}>
            <CardImg top width="100%" src={props.pozaProfil} alt="Card image cap" />
                <CardTitle className={"img-overlay"}><b>{props.nume}</b></CardTitle>
            </div>
            <CardBody>
                <CardSubtitle className={"card-subtitle"}>{t(props.specializare)}</CardSubtitle>
                <CardText>{t("anAbsolvire")}: {props.anAbsolvire}</CardText>
            </CardBody>
        </Card>
    </div>
};

export default Medic