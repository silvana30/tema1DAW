import React from "react";
import {Button, Col, Row} from "reactstrap";

function Error({error, redirect}) {
    return (
        <div className={'container'}>
            <Row>
                <Col>
                    <h1>{error.code}</h1>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col>
                    <h3>{error.message}</h3>
                </Col>
            </Row>
            {redirect &&
            <Button href={'/login'}>
                Login
            </Button>
            }
        </div>
    );
}

export default Error;