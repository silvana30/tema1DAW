import React from "react";
import {Redirect, Route} from "react-router-dom";
import Cookies from "universal-cookie";
import Error from "./Error";

function PrivateRoute({component: Component, forRole, ...rest}) {

    const cookies = new Cookies();
    const token = cookies.get('token');
    if (token) {

        // jwt.verify(
        //     localStorage.getItem('token'),
        //     "superMegaSecretKey",
        //     (error, data) => {
        //         if (error) {
        //             localStorage.removeItem('token');
        //             return (
        //                 <Error error={{code: error.name, message: error.message}} redirect={true}/>
        //             );
        //         } else {
        //             jwtRole = data.role;


        if (forRole === cookies.get('role')) {
            return (
                <Route {...rest} render={props => <Component {...props}/>}/>
            )
        } else {
            return (
                <Error error={{code: 401, message: "Unauthorized"}} redirect={false}/>
            )
        }


    } else {
        return (
            <Redirect to={{pathname: "/login"}}/>
        )
    }

}

export default PrivateRoute;