import * as React from "react";
import {Button} from "reactstrap";

import Cookies from 'universal-cookie';

import t from './locale';

// const cookies = new Cookies();
// cookies.set('language', 'EN');
// console.log(cookies.get('language'));

function setRO() {
    // cookies.set('language', 'RO');
    localStorage.setItem('locale', 'ro');
    window.location.reload();
}

function setEN() {
    console.log("aici");
    // cookies.set('language', 'EN');
    localStorage.setItem('locale', 'en');

    window.location.reload();
}

class AdminNavbar extends React.Component {
    state = {
        navCollapsed: true
    }

    constructor(props) {
        super(props);


        this.logout=this.logout.bind(this);
    }

    _onToggleNav = () => {
        this.setState({navCollapsed: !this.state.navCollapsed})
    }


    handleReq = function (response) {

        this.props.history.push(
            {
                pathname: "/login"
            }
        )
    }

    logout() {
        const axios = require('axios');

        const cookies = new Cookies();
        var token = cookies.get('token');
        axios.post('http://localhost/larapi-master/public/logout', {}, {headers: {Authorization: `Bearer ${token}`}})
            .then(function (response) {
                    console.log("success", response);
                    // const cookies = new Cookies();
                    cookies.remove('token');
                    cookies.remove('role');
                    // var st=this;
                    // st.handleReq();
                    window.location.reload();
                this.props.history.push(
                    {
                        pathname: "/login"
                    }
                )
                }
            )
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const {navCollapsed} = this.state;

        return (
            <nav className='navbar navbar-default'>
                <div className='navbar-header'>

                    <div>
                        <a className='navbar-brand' href='/'> <i className="fa fa-home"></i> {t('home')}</a>
                        <a className='navbar-brand' href='/adminUnitatiMedicale'> Management medical units</a>
                        <a className='navbar-brand' href='/adminDoctors'> Management doctors
                        </a>
                        <a className='navbar-brand' href='/adminUsers'> Management users
                        </a>


                    </div>
                    <div>


                        <button onClick={this.logout}>Logout</button>

                        <Button color="secondary" id={"lang"} onClick={setRO} ><img
                            src="https://img.icons8.com/color/48/000000/romania.png"/></Button>{' '}
                        <Button color="secondary" id={"lang2"} onClick={setEN}><img
                            src="https://img.icons8.com/color/48/000000/great-britain.png"/></Button>{' '}
                    </div>

                </div>
                <div
                    className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'}
                >

                </div>
            </nav>
        )
    }
}

export default AdminNavbar;