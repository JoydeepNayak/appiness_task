import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AsyncFactory from '../utils/AsyncFactory';
import '../App.css';

const LandingPage = AsyncFactory(() => import('../../src/components/LandingPage'));
const SignUpPage = AsyncFactory(() => import('../../src/components/SignupPage'));
const WelcomePage = AsyncFactory(() => import('../../src/components/WelcomePage'));


class PageRoutes extends Component {
    render() {
        return (
            <div className="App-body">
                <Switch>
                    <Route exact path="/" name="Landing Page" component={LandingPage} />
                    <Route path="/signup" name="Signup Page" component={SignUpPage} />
                    <Route path="/employeeList" name="Welcome Page" component={WelcomePage} />
                </Switch>
            </div>
        )
    }
}

export default PageRoutes;