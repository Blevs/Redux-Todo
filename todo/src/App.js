import React from 'react';
import { connect } from 'react-redux';
import { todoAdd, todoToggle } from './actions';
import Todos from './components/Todos';
import './App.css';


const App = ({todos, todoAdd, todoToggle}) => {
  const handleAdd = (event) => {
    event.preventDefault();
    todoAdd(event.target.task.value);
  };
  return (
    <div className="App">
      <h1>
        TODO
      </h1>
      <Todos todos={todos} todoToggle={todoToggle} handleAdd={handleAdd}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { todoAdd, todoToggle })(App);
