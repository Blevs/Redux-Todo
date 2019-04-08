import React from 'react';
import Todo from './Todo.js';
import TodoForm from './TodoForm.js';
import './Todos.scss';

const Todos = ({todos, todoToggle, handleAdd, todoClear}) => {
  return (
    <div className="todos">
      <TodoForm handleAdd={handleAdd} todoClear={todoClear} />
      {todos.map(todo => <Todo key={todo.id} todo={todo} todoToggle={todoToggle} />)}
    </div>
  );
};

export default Todos;
