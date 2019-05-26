import * as React from "react";

import AdminMedic from "./AdminMedic";
import AdminNavbar from "./AdminNavbar";
import {Button} from "reactstrap";

// import * as ReactDOM from "react-router-dom";
class AdminDoctors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'adminDoctors',
            brand: 'ReactStrap',

        };
        this.getDoctors = this.getDoctors.bind(this);
        this.handleReq = this.handleReq.bind(this);
        this.addDoctor = this.addDoctor.bind(this);
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

        axios.get('http://localhost:3001/doctors')
            .then(this.handleReq)
            .catch(function (error) {
                console.log(error);
            });

    }

    addDoctor() {
        this.props.history.push(
            {
                pathname: "/addDoctor"
            }
        )
    }

    render() {
        var {jumboTitle, jumboText, jumboBtn} = this.props,
            {brand, currentPage, doctors} = this.state;
        // var hospitals = require('./unitatiMedicale.json');
        console.log("asf", this.state.doctors);
        if (this.state.doctors) {
            console.log("1111");
            return (
                <div className={"doctors"}>
                    <AdminNavbar currentPage={currentPage} brand={brand} change={this.handleChange}/>
                    <Button onClick={this.addDoctor} className={'btn-danger'}>Add Doctor</Button>

                    {/*<Page currentPage={currentPage} />*/}
                    <div className={"med-units"}>

                        {
                            // this.state.doctors.doctors.map((element, index) => {
                            // return(
                            //     <div key={index}>
                            //         {
                            doctors.map((elem, ind) => {
                                return (
                                    <AdminMedic key={ind}
                                                id={elem.id}
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
        } else {
            console.log("222");
            return (<div>Loading data</div>);
        }
    }
}


export default AdminDoctors;