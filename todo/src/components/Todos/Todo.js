import React from 'react';

const Todo = ({todo, todoToggle}) => {
  const { id, task, completed } = todo;
  return (
    <div className={["todo", completed && "completed"].map(x=>x).join(" ")}
         onClick={() => todoToggle(id)}>
      {task}
    </div>
  );
};

export default Todo;
