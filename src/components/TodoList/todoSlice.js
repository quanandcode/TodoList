// const initState = [
//   { id: 1, name: "learn yoga", completed: false, priority: "Medium" },
//   { id: 2, name: "learn js", completed: true, priority: "Low" },
//   { id: 3, name: "learn redux", completed: false, priority: "Hight" },
// ];
// const todoReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addToDo":
//       return [...state, action.payLoad];
//     case "todoList/toggleStatus":
//       return state.map((todo) => {
//         if (todo.id === action.payLoad) {
//           return {
//             ...todo,
//             completed: !todo.completed,
//           };
//         } else {
//           return todo;
//         }
//       });
//     default:
//       return state;
//   }
// };
// export default todoReducer;
// //
import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "learn yoga", completed: false, priority: "Medium" },
    { id: 2, name: "learn js", completed: true, priority: "Low" },
    { id: 3, name: "learn redux", completed: false, priority: "Hight" },
  ],
  reducers: {
    addToDo: (state, action) => {
      state.push(action.payload);
    },
    toggleStatus: (state, action) => {
      const todoChangeStatus = state.find((todo) => {
        return todo.id === action.payload;
      });
      todoChangeStatus.completed = !todoChangeStatus.completed;
    },
  },
});
