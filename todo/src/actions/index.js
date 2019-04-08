export const TODO_ADD = 'TODO_ADD';
export const TODO_TOGGLE = 'TODO_TOGGLE';
export const TODO_CLEAR = 'TODO_CLEAR';

export const todoAdd = (task) => {
  return {
    type: TODO_ADD,
    task: task
  };
};

export const todoToggle = (id) => {
  return {
    type: TODO_TOGGLE,
    id: id
  };
};

export const todoClear = () => {
  return {
    type: TODO_CLEAR
  };
};
