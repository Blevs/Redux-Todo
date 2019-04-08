import { TODO_ADD, TODO_TOGGLE } from '../actions';

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
  case TODO_ADD: {
    return {
      ...state,
      todos: state.todos.concat({
        id: Date.now(),
        task: action.task,
        completed: false
      })};
  }
  case TODO_TOGGLE: {
    const todoIndex = state.todos.findIndex(({id}) => id === action.id);
    todoIndex >= 0 && (state.todos[todoIndex].completed = !state.todos[todoIndex].completed);
    return state;
  }
  default:
    return state;
  }
};
