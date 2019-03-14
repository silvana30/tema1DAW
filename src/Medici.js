import * as React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Page from "./Page";
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
        return (
            <div>
                <Navbar currentPage={currentPage} brand={brand} change={this.handleChange}/>
                <Page currentPage={currentPage} />
            </div>
        )
    }
}

Medici.propTypes = {
    // name: React.PropTypes.string
};

Medici.defaultProps = {
    jumboTitle: 'seruuuuus!',
    jumboText: 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.',
    jumboBtn: 'Learn React'
};


export default  Medici ;