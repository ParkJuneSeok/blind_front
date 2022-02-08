import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Join } from 'pages';
import Login from "../pages/member/login/Login";


class Routers extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path="/member/login" element={<Login/>} exact/>
                <Route path="/member/join" element={<Join/>} exact/>
            </Routes>
        );
    }
}

export default Routers;