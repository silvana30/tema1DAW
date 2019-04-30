import * as React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Page from "./Page";
import Item from "./UnitatiMedicale";
import Medic from "./Medic";

// import * as ReactDOM from "react-router-dom";
class Medici extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'medici',
            brand: 'ReactStrap',
            doctors: {}
        };
        this.getDoctors = this.getDoctors.bind(this);
        this.handleReq = this.handleReq.bind(this);
        this.getDoctors();
    };

    handleChange = (page) => {
        this.setState({
            currentPage: page,
            brand: 'ReactStrap',
        });
    };
    handleChangeBrand = (name) => {
        this.setState({
            brand: name
        });
    };

    handleReq(response) {
        console.log(response);
        this.setState({doctors: response.data});
        console.log("===============", this.state);
    }


    getDoctors() {
        const axios = require('axios');

        axios.get('http://localhost/larapi-master/public/doctors')
            .then(this.handleReq)
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
        var {jumboTitle, jumboText, jumboBtn} = this.props,
            {brand, currentPage, doctors} = this.state;
        // var hospitals = require('./unitatiMedicale.json');
        console.log("asf", this.state.doctors);
        if (this.state.doctors.doctors) {
            console.log("1111");
            return (
                <div className={"doctors"}>
                    <Navbar currentPage={currentPage} brand={brand} change={this.handleChange}/>
                    {/*<Page currentPage={currentPage} />*/}
                    <div className={"med-units"}>

                        {
                            // this.state.doctors.doctors.map((element, index) => {
                            // return(
                            //     <div key={index}>
                            //         {
                            doctors.doctors.map((elem, ind) => {
                                return (
                                    <Medic key={ind}
                                           nume={elem.nume}
                                           pozaProfil={elem.poza_profil}
                                           specializare={elem.specializare}
                                           anAbsolvire={elem.an_absolvire}
                                    />
                                );
                            })

                        }

                    </div>
                </div>
            )
        }else {
            console.log("222");
            return (<div>Loading data</div>);
        }
    }
}


export default Medici;