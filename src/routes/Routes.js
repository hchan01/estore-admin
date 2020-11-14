import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ScrollToTop } from '../components';
import {
    HomeScreen,
    PageNotFoundScreen
} from '../screens';

const Routes = () => (
    <ScrollToTop>
        <Switch>
            <Route exact path="/admin" component={HomeScreen} />
            <Route component={PageNotFoundScreen} status={404} />
        </Switch>
    </ScrollToTop>
)

export default Routes;