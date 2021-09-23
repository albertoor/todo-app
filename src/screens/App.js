import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import AddTodo from '../components/AddTodo';
import ListTodos from '../components/ListTodos';
import SignUp from '../components/SignUp';
import UserOptions from '../components/UserOptions';

export default function App() {
  return (
    <Router>
      <h1>Todo App</h1>
      <Switch>
        <Route exact path="/">
          <UserOptions />
          <AddTodo />
          <ListTodos />
        </Route>
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}
