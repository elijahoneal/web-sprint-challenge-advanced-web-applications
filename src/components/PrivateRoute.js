import React from 'react'
import {Route , Redirect } from "react-router-dom";

const PrviateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render = { (renderprops) => {
        if(localStorage.getItem('token') === null) {
            return <Redirect to = '/' />
        }
        return <Component {...renderprops} />
    } } />
}

export default PrviateRoute







//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in