/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import TasksNavbar from '../Components/TasksNavbar';
import { Redirect } from 'react-router-dom';

class TasksPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { activeUser, handleLogout } = this.props;
        if (!activeUser) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <TasksNavbar activeUser={activeUser} handleLogout={handleLogout} />
                <Container>
                    <h1>{activeUser.fname}'s Tasks</h1>
                </Container>
            </div>
        );
    }
}

export default TasksPage 