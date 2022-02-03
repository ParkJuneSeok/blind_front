import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routers from 'shared/Routers';

const Root = () => (
    <BrowserRouter>
        <Routers/>
    </BrowserRouter>
);

export default Root;