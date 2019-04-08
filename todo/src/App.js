import React from 'react';
import { connect } from 'react-redux';
import { todoToggle } from './actions';
import './App.css';


const App = ({todos, todoToggle}) => {
  return (
    <div className="App">
      TODO
      {todos.map(todo => <div key={todo.id} onClick={() => todoToggle(todo.id)}>{todo.task}</div>)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { todoToggle })(App);
