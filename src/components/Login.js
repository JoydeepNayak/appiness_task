import React from 'react';
import {
    withStyles,
    TextField,
    CardContent,
    Typography,
    Button
} from '@material-ui/core';

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    card: {
        width: '30%',
        height: 'auto',
        minWidth: '270px'
    },
    button: {
        marginTop: '20px',
        width: '100%',
        color: '#fff',
        background: '#1166BB',
        '&:hover': {
            background: '#0d4d8c'
        }
    },
    label: {
        textTransform: 'capitalize',
    }
};

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    onBlur(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        const { classes } = this.props;
        return (
                <CardContent className={classes.card}>
                    <Typography variant="h6" gutterBottom>Sign In</Typography>
                    <Typography variant="body2" gutterBottom>Please enter your email id and password</Typography>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            name="email"
                            required
                            fullWidth
                            placeholder="Email id"
                            margin="normal"
                            variant="outlined"
                            type="email"
                            onChange={(e) => { this.onChange(e) }}
                            onBlur={(e) => { this.onBlur(e) }}
                        />
                        <TextField
                            name="password"
                            required
                            fullWidth
                            placeholder="Password"
                            margin="normal"
                            variant="outlined"
                            type="password"
                            onChange={(e) => { this.onChange(e) }}
                            onBlur={(e) => { this.onBlur(e) }}
                        />
                        <Button
                            variant="contained"
                            className={classes.button}
                            classes={{ label: classes.label }}
                            onClick={() => { this.props.loginClick(this.state) }}
                        >Login</Button>
                    </form>
                </CardContent>
        )
    }
}

export default withStyles(styles)(LoginPage);