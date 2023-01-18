import filterReducer from "../components/Filters/filterReducer";
import todoReducer from "../components/TodoList/todoSlice";
const rootReducer = (state = {}, action) => {
  return {
    filter: filterReducer(state.filter, action),
    todoList: todoReducer(state.todoList, action),
  };
};
export default rootReducer;
