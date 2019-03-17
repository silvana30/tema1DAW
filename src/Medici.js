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
            brand: 'ReactStrap'
        };
    };
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
    render() {
        var { jumboTitle, jumboText, jumboBtn } = this.props,
            { brand, currentPage } = this.state;
        var hospitals = require('./unitatiMedicale.json');

        return (
            <div>
                <Navbar currentPage={currentPage} brand={brand} change={this.handleChange}/>
                {/*<Page currentPage={currentPage} />*/}
                <div className={"med-units"}>

                    {hospitals.unitatiMedicale.map((element, index) => {
                        return(
                            <div key={index}>
                                {
                                    element.medici.map((elem,ind)=>
                                    {
                                        return (
                                            <Medic key={ind}
                                                   nume={elem.nume}
                                                   pozaProfil={elem.pozaProfil}
                                                   specializare={elem.specializare}
                                                   anAbsolvire={elem.anAbsolvire}
                                            />
                                        );
                                    })
                                }
                            </div>
                        )



                        }
                    )}
                </div>
            </div>
        )
    }
}




export default  Medici ;