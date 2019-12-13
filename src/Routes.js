import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AddFood from './Components/AddFood/AddFood';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import SubtractFood from './Components/SubtractFood/SubtractFood';

export default (
    <Switch>
        <Route component={AddFood} path="/AddFood" />
        <Route component={Homepage} path="/Homepage" />
        <Route component={Register} path="/Register" />
        <Route component={SubtractFood} path="/SubtractFood" />
        <Route component={Login} path="/" />
    </Switch>
)