import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles, Button, Grid } from '@material-ui/core';
import '../App.css';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        color: '#fff',
        background: '#EC7211',
        '&:hover': {
            background: '#EB5F07',
        }
    },
    label: {
        textTransform: 'capitalize',
    },
    appHeader: {
        backgroundColor: '#232f3e',
        minHeight: '10vh',
        display: 'flex',
        flexDirection: 'row',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white'
    }
});

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.signUpClick = this.signUpClick.bind(this);
    }

    signUpClick() {
        this.props.history.push('signup');
    }
    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <header className={classes.appHeader}>
                    <Grid container={true} justify="space-between" alignItems="center">
                        <Grid item={true}>
                        </Grid>
                        <Grid item={true}>
                            <Button
                                variant="contained"
                                className={classes.button}
                                classes={{ label: classes.label }}
                                onClick={() => { this.signUpClick() }}
                            >Sign In</Button>
                        </Grid>
                    </Grid>
                </header>
            </Fragment>
        )
    }
}

export default withRouter(withStyles(styles)(Header));