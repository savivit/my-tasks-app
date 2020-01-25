/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import TasksNavbar from '../components/TasksNavbar';
import { Jumbotron, Button } from 'react-bootstrap';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { activeUser, handleLogout } = this.props;

        return (
            <div>
                <TasksNavbar activeUser={activeUser} handleLogout={handleLogout} />
                <Jumbotron>
                    <h1>My Tasks</h1>
                    <p>
                        Master your tasks
                    </p>
                    <p>
                        <Button variant="success" href="#/login">Login</Button>
                    </p>
                </Jumbotron>            
            </div>
        );
    }
}

export default HomePage;
