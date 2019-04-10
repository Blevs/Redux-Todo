import React from 'react';
import { connect } from 'react-redux';
import { todoAdd, todoToggle, todoClear } from './actions';
import Todos from './components/Todos';
import './App.scss';


const App = ({todos, todoAdd, todoToggle, todoClear}) => {
  const handleAdd = (event) => {
    event.preventDefault();
    const task = event.target.task.value.trim();
    if (task !== "") {
      todoAdd(event.target.task.value);
      event.target.task.value = "";
    }
  };
  return (
    <div className="App">
      <h1>TODO</h1>
      <Todos todos={todos}
             todoToggle={todoToggle}
             handleAdd={handleAdd}
             todoClear={todoClear} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { todoAdd, todoToggle, todoClear })(App);
