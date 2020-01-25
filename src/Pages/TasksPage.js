/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import TasksNavbar from '../components/RecipeNavbar';

class TasksPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { activeUser, handleLogout } = this.props;

        return (
            <div>
                <TasksNavbar activeUser={activeUser} handleLogout={handleLogout}/>
                <Container>
                    <h1>Recipes Page</h1>
                </Container>
            </div>
        );
    }
}

export default TasksPage 