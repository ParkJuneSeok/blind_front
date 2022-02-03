import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Join } from 'pages';


class Routers extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path="/member/join" element={<Join/>} exact/>
            </Routes>
        );
    }
}

export default Routers;