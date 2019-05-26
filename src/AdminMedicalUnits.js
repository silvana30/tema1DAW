import * as React from "react";

import AdminNavbar from "./AdminNavbar";
import AdminItem from "./AdminItem";
import {Button} from "reactstrap";
import {withRouter} from "react-router-dom";


class AdminMedicalUnits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'adminUnitatiMedicale',
            brand: 'ReactStrap',
            hospitals2: []}
        ;

        this.getHospitals = this.getHospitals.bind(this);
        this.handleReq = this.handleReq.bind(this);
        this.addMedUnit=this.addMedUnit.bind(this);
        this.getHospitals();

    };

    handleChange = (page) => {
        this.setState({
            currentPage: page,
            brand: 'ReactStrap'
        });
    };

    handleReq(response) {
        console.log("responseeee", response.data);
        this.setState({hospitals2: response.data});
        console.log("current state ", this.state);
    }


    getHospitals() {
        const axios = require('axios');

        axios.get('http://localhost:3001/medical_units')
            .then(this.handleReq)
            .catch(function (error) {
                console.log(error);
            });

    }
    addMedUnit(){
        this.props.history.push(
            {
                pathname: "/addMedUnit"
            }
        )
    }

    // handleChangeBrand = (name) => {
    //     this.setState({
    //         brand: name
    //     });
    // };
    // getInitialState = () => {
    //     return {data: this.props.data};
    // };


    render() {
        var {brand, currentPage, hospitals2} = this.state;
        // var hospitals = require('./unitatiMedicale.json');
        // console.log('hospitals:' + JSON.stringify(hospitals.unitatiMedicale));
        // var hospitals = {};
        console.log("spitale", JSON.stringify(this.state.hospitals2));
        if (this.state.hospitals2) {
            console.log("1111");
            return (
                <div class={"doctors"}>
                    <AdminNavbar currentPage={currentPage} brand={brand} change={this.handleChange}/>
                    {/*<Page currentPage={currentPage}/>*/}
                    <Button onClick={this.addMedUnit} className={'btn-danger'}>Add Medical Unit</Button>
                    <div className={"med-units"} id={"hospitals"}>
                        {console.log("==========", this.state.hospitals2)}

                        {this.state.hospitals2.map((element, index) => {

                                return (
                                    <AdminItem key={index}
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
            return (<div><p>Loading data</p>
                {/*<Button onClick={this.addMedUnit}>Add Medical Unit</Button>*/}

            </div>);
        }
    }
}


export default withRouter(AdminMedicalUnits);