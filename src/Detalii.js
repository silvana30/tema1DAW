import * as React from "react";
import Navbar from "./Navbar";

import Medic from "./Medic";

class Detalii extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'unitatiMedicale',
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
        var {jumboTitle, jumboText, jumboBtn} = this.props,
            {brand, currentPage} = this.state;
        var medici = this.props.location.medici;

        console.log("medici ", JSON.stringify(medici));
        const {data} = this.props.location;
        return (
            <div>
                <Navbar currentPage={currentPage} brand={brand} change={this.handleChange}/>
                {/*<Page currentPage={currentPage} />*/}
                <div className={"med-units"}>


                    {
                        medici.map((elem, ind) => {
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

            </div>
        )
    }
}


export default Detalii;