import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./Navbar.js";
import Jumbotron from "./Jumbotron.js";
import Page from "./Page.js";
class App extends Component {

  render() {

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Theme}/>
        </Switch>
      </Router>
    );
  }
}
// class Navbar extends React.Component {
//   change(page) {
//     this.props.change(page);
//     var navToggle = document.getElementById('toggle'),
//         collapse = document.getElementById('bs-collapse').classList.contains("in");
//     if(collapse){
//       navToggle.click();
//     }
//   }
//   render() {
//     return (
//         <nav className="navbar navbar-default">
//           <div className="container">
//             {/* Brand and toggle get grouped for better mobile display */}
//             <div className="navbar-header">
//               <button id="toggle" type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-collapse" aria-expanded="false">
//                 <span className="sr-only">Toggle navigation</span>
//                 <span className="icon-bar"></span>
//                 <span className="icon-bar"></span>
//                 <span className="icon-bar"></span>
//               </button>
//               <a className="navbar-brand" href="#">{this.props.brand}</a>
//             </div>
//             {/* Collect the nav links, forms, and other content for toggling */}
//             <div className="collapse navbar-collapse" id="bs-collapse">
//               <ul className="nav navbar-nav">
//                 <li className={(this.props.currentPage === 'home') ? 'active' : ''}><a href="#" onClick={this.change.bind(this,'home')}>Home <span className="sr-only">(current)</span></a></li>
//                 <li className={(this.props.currentPage === 'about') ? 'active' : ''}><a href="#" onClick={this.change.bind(this,'about')}>About</a></li>
//                 <li className={(this.props.currentPage === 'contact') ? 'active' : ''}><a href="#" onClick={this.change.bind(this,'contact')}>Contact</a></li>
//               </ul>
//             </div>{/* /.navbar-collapse */}
//           </div>{/* /.container */}
//         </nav>
//     )
//   }
// }
//
// class Jumbotron extends React.Component {
//   changeBrand(brandName) {
//     this.props.changeBrand(brandName);
//   }
//   render() {
//     var { jumboTitle, jumboText, jumboBtn } = this.props;
//     return (
//         <div className={(this.props.currentPage === 'home') ? 'jumbotron show' : 'jumbotron hide'}>
//           <div className="container">
//             <h1>{jumboTitle}</h1>
//             <p>{jumboText}</p>
//             <p><a className="btn btn-primary btn-lg" href="#" role="button" onClick={this.changeBrand.bind(this,'ReactJS')}>{jumboBtn}</a></p>
//           </div>
//         </div>
//     )
//   }
// }
//
// class Page extends React.Component {
//   render() {
//     return (
//         <div className="container">
//           <h2>{this.props.currentPage.charAt(0).toUpperCase() + this.props.currentPage.slice(1)}</h2>
//           <p>This is the {this.props.currentPage} page</p>
//           {/* example of using chain methods inside the curly brackets to transform and concat string */}
//         </div>
//     )
//   }
// }

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
    var { jumboTitle, jumboText, jumboBtn } = this.props,
        { brand, currentPage } = this.state;
    return (
        <div>
          <Navbar currentPage={currentPage} brand={brand} change={this.handleChange}/>
          <Jumbotron currentPage={currentPage} jumboTitle={jumboTitle} jumboText={jumboText} jumboBtn={jumboBtn} changeBrand={this.handleChangeBrand}/>
          <Page currentPage={currentPage} />
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

ReactDOM.render(
    <Theme />,
    document.getElementById('root')
);
export default App;
