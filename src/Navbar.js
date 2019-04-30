import * as React from "react";
import {Button, CardImg} from "reactstrap";

import Cookies from 'universal-cookie';
import UnitatiMedicale from "./Page";

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

class Navbar extends React.Component {
    state = {
        navCollapsed: true
    }

    constructor(props) {
        super(props);
    }

    _onToggleNav = () => {
        this.setState({navCollapsed: !this.state.navCollapsed})
    }


    handleReq=function(response){

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
                    // var st=this;
                    // st.handleReq();
                // window.location.reload();
                }
            )
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const {navCollapsed} = this.state;
        var btnLog = (this.props.logged) ? (<a className='navbar-brand' href='/login'> Log Out</a>) : (
            <a className='navbar-brand' href='/login'> Sign In</a>);

        return (
            <nav className='navbar navbar-default'>
                <div className='navbar-header'>

                    <div>
                        <a className='navbar-brand' href='/'> <i className="fa fa-home"></i> {t('home')}</a>
                        <a className='navbar-brand' href='/unitatiMedicale'><i
                            className={"fa fa-hospital-o"}></i> {t('medUnits')}</a>
                        <a className='navbar-brand' href='/medici'><i className={"fa fa-user-md"}></i> {t('doctors')}
                        </a>


                    </div>
                    <div>
                        <a className='navbar-brand' href='/profile'> My Profile</a>

                        {/*<a className='navbar-brand' href='/login'> Sign In</a>*/}
                        {btnLog}
                        <button onClick={this.logout}>Logout</button>

                        <Button color="secondary" id={"lang"} onClick={setRO}><img
                            src="https://img.icons8.com/color/48/000000/romania.png"/></Button>{' '}
                        <Button color="secondary" id={"lang2"} onClick={setEN}><img
                            src="https://img.icons8.com/color/48/000000/great-britain.png"/></Button>{' '}
                    </div>
                    {/*<button*/}
                    {/*aria-expanded='false'*/}
                    {/*className='navbar-toggle collapsed'*/}
                    {/*onClick={this._onToggleNav}*/}
                    {/*type='button'*/}
                    {/*>*/}
                    {/*<span className='sr-only'>Toggle navigation</span>*/}
                    {/*<span className='icon-bar'></span>*/}
                    {/*<span className='icon-bar'></span>*/}
                    {/*<span className='icon-bar'></span>*/}
                    {/*</button>*/}
                </div>
                <div
                    className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'}
                >

                </div>
            </nav>
        )
    }
}

export default Navbar;