import * as React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Page from "./Page";
import Example from "./Example";
// import * as ReactDOM from "react-router-dom";
class Theme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'home',
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
        return (
            <div >
                <Navbar currentPage={currentPage} brand={brand} change={this.handleChange}/>
                {/*<Jumbotron currentPage={currentPage} jumboTitle={jumboTitle} jumboText={jumboText} jumboBtn={jumboBtn} changeBrand={this.handleChangeBrand}>*/}
                {/*<Page currentPage={currentPage} />*/}

                <div id={"home"}>
                    <Example/>
                </div>
            </div>
        )
    }
}

Theme.propTypes = {
    // name: React.PropTypes.string
};

Theme.defaultProps = {
    jumboTitle: 'Hello World!',
    jumboText: 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.',
    jumboBtn: 'Learn React'
};

// ReactDOM.render(
//     <Theme />,
//     document.getElementById('root')
// );

export default Theme;