import { TODO_ADD, TODO_TOGGLE, TODO_CLEAR } from '../actions';

const initialState = {
  todos: [
    {
      id: 1,
      task: "learn redux",
      completed: false
    },
    {
      id: 2,
      task: "learn react",
      completed: true
    },
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
  case TODO_ADD: 
    return {
      ...state,
      todos: state.todos.concat({
        id: Date.now(),
        task: action.task,
        completed: false
      })};
  case TODO_TOGGLE: 
    const todos = [...state.todos];
    const todoIndex = todos.findIndex(({id}) => id === action.id);
    todoIndex >= 0 && (todos[todoIndex].completed = !todos[todoIndex].completed);
    return {
      ...state,
      todos: todos
    };
  case TODO_CLEAR:
    return {
      ...state,
      todos: state.todos.filter(({completed}) => !completed)
    };
  default:
    return state;
  }
};
