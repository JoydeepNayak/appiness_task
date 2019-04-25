import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import '../App.css';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.signUpClick = this.signUpClick.bind(this);
    }

    signUpClick() {
        alert(1);
    }
    render() {
        return (
            <Fragment>
                <div className="App-body">
                    <Typography variant="h4" gutterBottom>Welcome</Typography>
                </div>
            </Fragment>
        )
    }
}

export default LandingPage;