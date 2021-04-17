import React from 'react'
import {Route } from "react-router-dom";

const PrviateRoute = ({component: Compoent, ...rest}) => {
    return <Route {...rest} render = { () => {
        if(localStorage.getItem('token') === null) {
            return <Redirect to = 'login' />
        }
    } } />
}

export default PrviateRoute







//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in