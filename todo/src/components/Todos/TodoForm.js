import React from 'react';

const TodoForm = ({handleAdd}) => {
  return (
    <form className="todo-form" onSubmit={handleAdd}>
      <input type="text"
             placeholder="todo"
             name="task" />
      <div className="todo-form-buttons">
        <button type="submit" className="todo-add">add</button>
        <button className="todo-clear">clear</button>
      </div>
    </form>
  );
};

export default TodoForm;
