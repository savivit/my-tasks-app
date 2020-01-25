import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import LoginPage from './pages/LoginPage';
import TasksPage from './pages/TasksPage';

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      //   activeUser: null,
      //   allUsers: jsonUsers,
      //   allRecipes: jsonRecipes
      //   // allRecipes: jsonRecipes.map(recipe => new RecipeModel(recipe));
      //   // {
      //   //   "id": "2121212",
      //   //   "name": "Nir"
      //   // }

      //   //null
      // }

      // this.handleLogout = this.handleLogout.bind(this);
      // this.handleLogin = this.handleLogin.bind(this);
      // this.handleNewRecipe = this.handleNewRecipe.bind(this);
    }

    // handleLogin(user) {
    //   this.setState({
    //     activeUser: user
    //   });
    // }

    // handleLogout() {
    //   this.setState({
    //     activeUser: null
    //   })
    // }

    // handleNewRecipe(newRecipe) {
    //   const { allRecipes, activeUser } = this.state;

    //   // adding one to the id of the last recipe in the array
    //   newRecipe.id = allRecipes[allRecipes.length - 1].id + 1;
    //   newRecipe.userId = activeUser.id;

    //   this.setState({
    //     allRecipes: allRecipes.concat(newRecipe)
    //   })
  }


  render() {
    // const { activeUser, allUsers, allRecipes } = this.state;

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
        <Route exact path="/tasks">
          <TasksPage activeUser={activeUser} recipes={activeUserRecipes} handleLogout={this.handleLogout}
            handleNewRecipe={this.handleNewRecipe} />
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