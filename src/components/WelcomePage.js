import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withStyles, Typography } from '@material-ui/core';
import { employeeDetails } from '../actions/EmployeeDetailsAction';

const styles = {
    container: {
        width: '100%',
        height: 'auto'
    },
    allRows: {
        backgroundColor: '#dddddd'
    },
    tableHead: {
        backgroundColor: '#9b9797'
    }
};

class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: null
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.employees !== state.employees) {
            return { employees: props.employees }
        }
        return null;
    }

    componentDidMount() {
        this.props.employeeDetails();
    }

    render() {
        const { classes } = this.props;
        const tableHead = [
            { value: "Id", key: "id" },
            { value: "Name", key: "name" },
            { value: "Age", key: "age" },
            { value: "Gender", key: "gender" },
            { value: "Email", key: "email" },
            { value: "Phone No.", key: "phoneNo" }
        ];
        const tableBody = this.state.employees.user.map(employee => {
            return (
                <tr key={employee.id} className={classes.allRows}>
                    {tableHead.map(head => (
                        <td key={head.key}>
                            <Typography variant="body2" gutterBottom>{employee[head.key]}</Typography>
                        </td>
                    ))}
                </tr>
            )
        });
        return (
            <Fragment>
                <Typography variant="h5" gutterBottom>Employee Record</Typography>
                <table className={classes.container}>
                    <thead className={classes.tableHead}>
                        <tr>
                            {tableHead.map(data => (
                                <th key={data.key}>
                                    <Typography variant="h6" gutterBottom>{data.value}</Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableBody}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.employeeDetails.employees
    }
}

export default connect(mapStateToProps, { employeeDetails })(withStyles(styles)(WelcomePage));