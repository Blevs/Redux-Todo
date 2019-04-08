import React from 'react';
import Todo from './Todo.js';
import TodoForm from './TodoForm.js';

const Todos = ({todos, todoToggle, handleAdd}) => {
  return (
    <div className="todos">
      <TodoForm handleAdd={handleAdd} />
      {todos.map(todo => <Todo key={todo.id} todo={todo} todoToggle={todoToggle} />)}
    </div>
  );
};

export default Todos;
