import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Table from './table'

const Routing = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path='/' component={Table}></Route>
            </div></BrowserRouter>
             )
}

export default Routing