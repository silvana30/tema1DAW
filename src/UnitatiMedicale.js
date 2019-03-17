import * as React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Page from "./Page";
import * as ReactDOM from "react-router-dom";

import Item from "./Item";
import {
    CardColumns
} from 'reactstrap';


class UnitatiMedicale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'unitatiMedicale',
            brand: 'ReactStrap'
        };
    };


    dataToShow = {message: []};
    hihi = "shitty";
    handleChange = (page) => {
        this.setState({
            currentPage: page,
            brand: 'ReactStrap'
        });
    };
    handleChangeBrand = (name) => {
        this.setState({
            brand: name
        });
    };
    getInitialState = () => {
        return {data: this.props.data};
    };

    render() {
        var {jumboTitle, jumboText, jumboBtn} = this.props,
            {brand, currentPage} = this.state;
        var hospitals = require('./unitatiMedicale.json');
        console.log('hospitals:' + JSON.stringify(hospitals.unitatiMedicale));

        return (
            <div>
                <Navbar currentPage={currentPage} brand={brand} change={this.handleChange}/>
                {/*<Page currentPage={currentPage}/>*/}
                <div className={"med-units"}>

                    {hospitals.unitatiMedicale.map((element, index) => {
                            return (
                                <Item key={index}
                                      nume={element.nume}
                                      tip={element.tip}
                                      locatie={element.locatie}
                                      sigla={element.sigla}/>
                            );
                        }
                    )}
                </div>
            </div>
        )
    }
}

// UnitatiMedicale.propTypes = {
//     // name: React.PropTypes.string
// };
//
// UnitatiMedicale.defaultProps = {
//     jumboTitle: 'spitale and shit!',
//     jumboText: 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.',
//     jumboBtn: 'Learn React'
// };


export default UnitatiMedicale;