import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import LoginPage from '../components/Login';
import { userLogin } from '../actions/LoginAction';

class SignupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: null
        }
        this.signUpClick = this.signUpClick.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.response) {
            if (state.response !== props.response) {
                if (props.response.status === 200) {
                    props.history.push('employeeList');
                }
            }
            return {
                response: props.response
            }
        }
        return {
            response: null
        }
    }

    signUpClick(details) {
        this.props.userLogin(details);
    }
    render() {
        return (
            <Fragment>
                <Grid container justify='center' direction='row'>
                    <LoginPage loginClick={(details) => { this.signUpClick(details) }} />
                </Grid>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        response: state.login.response
    }
}

export default connect(mapStateToProps, { userLogin })(SignupPage);