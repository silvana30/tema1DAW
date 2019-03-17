import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import CardColumns from "reactstrap/es/CardColumns";
const Item = (props) => {

    return <div>

            <Card id="hospital-box">
                <div className={"img-card"}>
                <CardImg top width="100%" height="100%" src={props.sigla} alt="Card image cap" />
                </div>
                <div>
                <CardBody>
                    <CardTitle><b>{props.nume}</b></CardTitle>
                    <CardSubtitle>{props.tip}</CardSubtitle>
                    <CardText>{props.locatie}</CardText>
                    <Button class="btn-details">Detalii</Button>
                </CardBody>
                </div>
            </Card>



        {/*<input type="hidden" name="id" value={props.id}/>*/}
        {/*{props.name} {props.category} {props.price} {props.stock}*/}
        {/*<img src={props.picture} height="100" width="100"/>*/}
        {/*<input type="button" onClick={() => props.buyItemHandler({...props})} value="Buy!"/>*/}
    </div>
};

export default Item