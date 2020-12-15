import { ADDTODO, DELETETODO } from "./Actiontypes";

const intialstate = {
  todos: [],
};

//create a reducer which will modify the state according to the input

export const mainReducer = (state = intialstate, action) => {
  switch (action.type) {
    case ADDTODO:
      if (action.data) {
        return {
          ...state,
          todos: state.todos.concat({
            text: action.data, //we will get our data from action
            key: Math.floor(Math.random() * 100).toString(),
          }),
        };
      } else {
        return state;
      }

    case DELETETODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.key != action.key),
      };

    //default return
    default:
      return state;
  }
};
