import { ADDTODO, DELETETODO } from "./Actiontypes";

//create a action creator
// that is what to do when this action fired

export const addtodo = (text) => ({
  type: ADDTODO,
  data: text,
});

export const deletetodo = (key) => ({
  type: DELETETODO,
  key: key,
});
