import React from 'react';

const TodoForm = ({handleAdd, todoClear}) => {
  return (
    <form className="todo-form" onSubmit={handleAdd}>
      <input type="text"
             placeholder="todo"
             name="task" />
      <div className="todo-form-buttons">
        <button type="submit" className="todo-add">add</button>
        <button className="todo-clear" onClick={todoClear}>clear</button>
      </div>
    </form>
  );
};

export default TodoForm;
