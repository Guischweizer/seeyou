import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from '../../Routes';


const App = () => (
<div>
            <CssBaseline />
            <Router>
                <Routes />
            </Router>
        </div>

);

export default App;
