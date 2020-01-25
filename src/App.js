import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SigninPage from './Pages/SigninPage';
import TasksPage from './Pages/TasksPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import jsonUsers from "./Data/Users";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      allUsers: jsonUsers,
      activeUser: {
        "id": "1",
        "name": "Avi"
      }
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(user) {
    this.setState({
      activeUser: user
    });
  }

  handleLogout() {
    this.setState({
      activeUser: null
    })
  }

  render() {
    // const { activeUser, allUsers, allRecipes } = this.state;
    const { activeUser, allUsers } = this.state;
    // const activeUserRecipes = activeUser ?
    //   allRecipes.filter(recipe => recipe.userId === activeUser.id) : null

    return (

      <Switch>
        <Route exact path="/">
          <HomePage activeUser={activeUser} handleLogout={this.handleLogout} />
        </Route>
        <Route exact path="/login">
          <LoginPage allUsers={allUsers} handleLogin={this.handleLogin} />
        </Route>
        <Route exact path="/signin">
          <SigninPage allUsers={allUsers} handleLogin={this.handleLogin} />
        </Route>
        <Route exact path="/tasks">
          <TasksPage activeUser={activeUser} handleLogout={this.handleLogout} />
        </Route>

      </Switch>
    );

  }
}

export default App;



/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        temp
      </header>
    </div>
  );
}

export default App;
 */