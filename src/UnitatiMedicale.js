import * as React from "react";
import Navbar from "./Navbar";

import Item from "./Item";
import Chart from 'react-apexcharts'



class UnitatiMedicale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'unitatiMedicale',
            brand: 'ReactStrap',
            hospitals: {},
            doctors:{},
            series2: [{
                name: 'rating',
                data: []  //rating per spital
            }],
            lista: [],
            listaVal: [],
            options2: {
                chart: {
                    id: 'apexchart-example'
                },
                xaxis: {
                    categories: [] //nume spitale
                }
            }
        };

        this.getHospitals = this.getHospitals.bind(this);
        this.handleReq = this.handleReq.bind(this);
        this.getRatings = this.getRatings.bind(this);
        // this.updateData = this.updateData.bind(this);
        // this.updateState=this.updateState.bind(this);


    };

    componentDidMount() {
        this.getHospitals();
    }

    handleChange = (page) => {
        this.setState({
            currentPage: page,
            brand: 'ReactStrap'
        });
    };
    // async getRatings(idHospital) {
    //     console.log("Get ratings for", idHospital);
    //     const response = await fetch('http://localhost/larapi-master/public/rating', {
    //             method: 'PUT',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 id: idHospital
    //             })
    //         });
    //     const res = await response.json();
    //     console.log("Update state for", idHospital, "from", this.state.listaVal);
    //     // this.state.listaVal.push(res.doctor);
    //     let listaVal = this.state.listaVal;
    //     listaVal.push(res.doctor);
    //     this.setState({listaVal: listaVal});
    //     this.updateData();
    //     this.updateState();
    // }
    // updateData() {
    //     // var series2 = {...this.state.series2};
    //     let series2 = this.state.series2;
    //     series2[0].data = this.state.listaVal;
    //     this.setState({series2 : series2});
    // }
    //
    // handleReq(response) {
    //     this.setState({hospitals: response.data});
    //     for(let hospital of response.data.medical_units){
    //         // this.state.lista.push(hospital.nume);
    //         let hospitalsList = this.state.lista;
    //         hospitalsList.push(hospital.nume);
    //         this.setState({lista: hospitalsList});
    //         this.getRatings(hospital.id);
    //     }
    // }
    //
    // updateState() {
    //     // var options2 = {...this.state.options2};
    //     let options2 = this.state.options2;
    //     options2.xaxis.categories = this.state.lista;
    //     this.setState({options2});
    // }
    //
    // getHospitals() {
    //     const axios = require('axios');
    //     axios.get('http://localhost/larapi-master/public/medicalUnits')
    //         .then(this.handleReq)
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    async getRatings(index){
        if (index < this.state.hospitals.medical_units.length){
            const response = await fetch('http://localhost/larapi-master/public/rating', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: this.state.hospitals.medical_units[index].id
                })
            });
            const res = await response.json();

            let listaVal = this.state.listaVal;
            listaVal.push(res.doctor);

            let series2 = this.state.series2;
            series2[0].data = listaVal;

            this.setState({
                listaVal: listaVal,
                series2: series2
            });

            if (index + 1 < this.state.hospitals.medical_units.length){
                this.getRatings(index + 1);
            }
        }
    }

    handleReq(response){
        this.setState({hospitals: response.data});
        let medical_units = response.data.medical_units;
        if (medical_units.length > 0){
            let listaNume = medical_units.map(function(hospital){
                console.log(hospital);
                return hospital.nume;
            });
            let options2 = this.state.options2;
            options2.xaxis.categories = listaNume;
            console.log(options2);
            this.setState({
                lista: listaNume,
                options2: options2
            });
            this.getRatings(0);
        }
    }

    getHospitals(){
        const axios = require('axios');
        axios.get('http://localhost/larapi-master/public/medicalUnits')
            .then(this.handleReq)
            .catch(function (error) { console.log(error); });
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
        console.log("Render", JSON.parse(JSON.stringify(this.state)));
        var {jumboTitle, jumboText, jumboBtn} = this.props,
            {brand, currentPage, hospitals} = this.state;
        // var hospitals = require('./unitatiMedicale.json');
        // console.log('hospitals:' + JSON.stringify(hospitals.unitatiMedicale));
        // var hospitals = {};
        let chart = null;

        if (this.state.series2 && this.state.series2[0].data.length == this.state.lista.length){
            chart = (
                <div id={"container-tabel"}>
                    <Chart options={this.state.options2} series={this.state.series2} type={"histogram"} width={1000} height={320}/>
                </div>
            );
        }
        // console.log("State", this.state);
        if (this.state.hospitals.medical_units) {
            return (
                <div className={"doctors"}>
                    <Navbar currentPage={currentPage} brand={brand} change={this.handleChange}/>
                    {/*<Page currentPage={currentPage}/>*/}
                    <div className={"med-units"} id={"hospitals"}>
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
                    {/*<MapDemo/>*/}
                    {chart}

                </div>
            )
        } else {
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