import * as React from "react";

class Jumbotron extends React.Component {
    changeBrand(brandName) {
        this.props.changeBrand(brandName);
    }
    render() {
        var { jumboTitle, jumboText, jumboBtn } = this.props;
        return (
            <div className={(this.props.currentPage === 'home') ? 'jumbotron show' : 'jumbotron hide'}>
                <div className="container">
                    <h1>{jumboTitle}</h1>
                    <p>{jumboText}</p>
                    {/*<p><a className="btn btn-primary btn-lg" href="#" role="button" onClick={this.changeBrand.bind(this,'ReactJS')}>{jumboBtn}</a></p>*/}
                </div>
            </div>
        )
    }
}

export default Jumbotron;