import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Navbar from "./Navbar.js";
// import Jumbotron from "./Jumbotron.js";
// import Page from "./Page.js";
import Theme from "./Theme.js";
import Medici from "./Medici.js";
import UnitatiMedicale from "./UnitatiMedicale.js";
import Detalii from "./Detalii";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import AdminPage from "./AdminPage";
import AdminMedicalUnits from "./AdminMedicalUnits";
import AdminDoctors from "./AdminDoctors";
import AddMedUnit from "./AddMedUnit";
import AddDoctor from "./AddDoctor";
import AdminUsers from "./AdminUsers";
import PrivateRoute from "./PrivateRoute";
import SeeComments from "./SeeComments";

class App extends Component {

    render() {

        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route exact path="/" component={Theme}/>
                    <Route path="/register" exact component={Register}/>

                    <Route path="/medici" component={Medici}/>
                    <Route path="/unitatiMedicale" component={UnitatiMedicale}/>
                    <Route path="/detalii" component={Detalii}/>
                    <Route path="/profile" component={Profile}/>
                    <PrivateRoute forRole={"admin"} path={"/admin"}
                                  component={() => (
                                      <AdminPage />)}
                    />
                    <PrivateRoute forRole={"admin"} path={"/adminUnitatiMedicale"} component={AdminMedicalUnits}/>
                    <PrivateRoute forRole={"admin"} path={"/adminDoctors"} component={AdminDoctors}/>
                    <PrivateRoute forRole={"admin"} path={"/addMedUnit"} component={AddMedUnit}/>
                    <PrivateRoute forRole={"admin"} path={"/addDoctor"} component={AddDoctor} />
                    <PrivateRoute forRole={"admin"} path={"/adminUsers"} component={AdminUsers}/>
                    <PrivateRoute forRole={"admin"} path={"/seeComments"} component={SeeComments}/>

                </Switch>
            </Router>
        );
    }
}
ReactDOM.render(
    <Theme/>,
    document.getElementById('root')
);
export default App;
