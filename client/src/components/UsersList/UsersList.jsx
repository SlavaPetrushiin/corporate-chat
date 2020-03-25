import React, {Component} from 'react';
import classes from './UsersList.module.css';

class UsersList extends Component {
    render() {
        return (
            <div className={classes.sidebar}>
                Users
            </div>
        );
    }
}

export default UsersList;