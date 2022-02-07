import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routers from 'shared/Routers';
import Container from '@mui/material/Container';

const Root = () => (
    <BrowserRouter>
        <Container maxWidth="sm">
            <Routers/>
        </Container>
    </BrowserRouter>
);

export default Root;