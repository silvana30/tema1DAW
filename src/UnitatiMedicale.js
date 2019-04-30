import * as React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Page from "./Page";
import * as ReactDOM from "react-router-dom";
import t from './locale';

import Item from "./Item";
import Cookies from "universal-cookie";


class UnitatiMedicale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'unitatiMedicale',
            brand: 'ReactStrap',
            hospitals: {}
        };

        this.getHospitals = this.getHospitals.bind(this);
        this.handleReq = this.handleReq.bind(this);
        this.getHospitals();

    };

    handleChange = (page) => {
        this.setState({
            currentPage: page,
            brand: 'ReactStrap'
        });
    };

    handleReq(response) {
        console.log(response);
        this.setState({hospitals: response.data});
        console.log(this.state);
    }


    getHospitals() {
        const axios = require('axios');

        axios.get('http://localhost/larapi-master/public/medicalUnits')
            .then(this.handleReq)
            // .then(function (response) {
            // console.log(response);
            // this.handleReq(response);
            // })
            .catch(function (error) {
                console.log(error);
            });

    }

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
            {brand, currentPage, hospitals} = this.state;
        // var hospitals = require('./unitatiMedicale.json');
        // console.log('hospitals:' + JSON.stringify(hospitals.unitatiMedicale));
        // var hospitals = {};
        console.log("asf", this.state.hospitals);
        if (this.state.hospitals.medical_units) {
            console.log("1111");
            return (
                <div class={"doctors"}>
                    <Navbar currentPage={currentPage} brand={brand} change={this.handleChange}/>
                    {/*<Page currentPage={currentPage}/>*/}
                    <div className={"med-units"} id={"hospitals"}>
                        {console.log("==========", this.state.hospitals)}
                        {hospitals.medical_units.map((element, index) => {

                                return (
                                    <Item key={index}
                                          id={element.id}
                                          // medici={medici}
                                          nume={element.nume}
                                          tip={element.tip_unitate}
                                          locatie={element.locatie}
                                          sigla={element.sigla}
                                    />
                                );
                            }
                        )}
                    </div>
                </div>
            )
        } else {
            console.log("222");
            return (<div>Loading data</div>);
        }
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