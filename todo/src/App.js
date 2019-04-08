import React from 'react';
import { connect } from 'react-redux';
import './App.css';


const App = ({todos}) => {
  return (
    <div className="App">
      TODO
      {todos.map(todo => <div key={todo.id}>{todo.task}</div>)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, {})(App);
